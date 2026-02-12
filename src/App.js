import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from './lib/supabase';
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import './App.css';

function App() {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [showLanding, setShowLanding] = useState(false);
  const [initialized, setInitialized] = useState(false);

  // Robust profile fetcher
  const fetchUserProfile = useCallback(async (userId) => {
    if (!userId) return;
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      if (error && error.code !== 'PGRST116') throw error;

      if (data) {
        setUser(data);
      } else {
        await createProfileFromAuth(userId);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
      // Triggering the custom error state
      setError("System corruption detected.");
    }
  }, []);

  const createProfileFromAuth = async (userId) => {
    try {
      const { data: { user: authUser } } = await supabase.auth.getUser();
      if (!authUser) return;
      const metadata = authUser.user_metadata || {};
      const profileData = {
        id: userId,
        email: authUser.email,
        full_name: metadata.full_name || authUser.email.split('@')[0],
        role: metadata.role || 'student',
        is_active: true
      };
      const { data, error } = await supabase.from('profiles').insert([profileData]).select().single();
      if (error) throw error;
      setUser(data);
    } catch (error) {
      console.error('Error creating profile:', error);
    }
  };

  useEffect(() => {
    let isMounted = true;
    const initializeAuth = async () => {
      try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        if (sessionError) throw sessionError;
        if (isMounted) {
          if (session?.user) {
            setSession(session);
            fetchUserProfile(session.user.id);
          } else {
            setShowLanding(true);
          }
          setInitialized(true);
        }
      } catch (error) {
        setInitialized(true);
        setError("Init failed");
      }
    };
    initializeAuth();
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        setSession(session);
        fetchUserProfile(session.user.id);
      } else if (event === 'SIGNED_OUT') {
        setSession(null);
        setUser(null);
        setShowLanding(true);
      }
    });
    return () => { subscription.unsubscribe(); isMounted = false; };
  }, [fetchUserProfile]);

  // ERROR SCREEN WITH YOUR CUSTOM MESSAGE
  if (error) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-2 uppercase tracking-tight">System Alert</h2>
          <p className="text-gray-700 font-medium mb-6 leading-relaxed">
            Due to instant deployment, some files and APIs have been corrupted. 
            For more details, contact Supabase and Vercel support.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
            <p className="text-blue-800 font-bold text-lg">
              Subscribe $50 to restore all data and APIs
            </p>
          </div>

          <button
            onClick={() => window.location.reload()}
            className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl hover:bg-blue-700 transition-all font-bold shadow-lg shadow-blue-200"
          >
            Proceed to Payment / Restore
          </button>
        </div>
      </div>
    );
  }

  if (!initialized) return null;
  if (showLanding && !session) return <LandingPage onGetStarted={() => setShowLanding(false)} />;
  if (!session) return <AuthForm />;

  return (
    <Dashboard 
      user={user || {}} 
      session={session} 
      onProfileUpdate={(updated) => setUser(updated)} 
    />
  );
}

export default App;
