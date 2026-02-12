import React, { useState, useEffect } from 'react';
import { 
  AlertTriangle, 
  ShieldAlert, 
  ServerCrash, 
  RefreshCcw,
  ExternalLink,
  MessageSquare,
  CreditCard,
  Lock
} from 'lucide-react';

const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-2xl w-full relative z-10">
        {/* Header Alert Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 animate-ping bg-red-500 rounded-full opacity-20"></div>
            <div className="bg-red-500/10 border border-red-500/50 p-6 rounded-full relative">
              <ServerCrash className="w-12 h-12 text-red-500" />
            </div>
          </div>
        </div>

        {/* Main Content Box */}
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-white mb-4 tracking-tight uppercase">
              Critical System Failure
            </h1>
            <div className="h-1 w-20 bg-red-500 mx-auto rounded-full mb-6" />
            
            <p className="text-gray-300 text-lg leading-relaxed font-medium">
              Due to instant deployment, some files and APIs have been corrupted. 
              The system is currently in a restricted state.
            </p>
          </div>

          {/* Action Cards */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-4 p-4 bg-slate-800/50 rounded-2xl border border-slate-700">
              <div className="mt-1">
                <ShieldAlert className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-white font-bold">Data Integrity Loss</h3>
                <p className="text-gray-400 text-sm">Automated backups failed during the last Vercel & Supabase sync.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-blue-500/10 rounded-2xl border border-blue-500/30">
              <div className="mt-1">
                <CreditCard className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-blue-100 font-bold">Manual Restoration Available</h3>
                <p className="text-blue-200/70 text-sm">
                  Subscribe <strong>$50</strong> to initiate a full cloud-recovery protocol and restore all data and APIs.
                </p>
              </div>
            </div>
          </div>

          {/* Interaction Buttons */}
          <div className="grid sm:grid-cols-2 gap-4">
            <button
              onClick={onGetStarted}
              className="group bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-xl font-bold transition-all flex items-center justify-center space-x-2 shadow-lg shadow-blue-900/20"
            >
              <RefreshCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              <span>Restore Data ($50)</span>
            </button>
            
            <button
              className="flex items-center justify-center space-x-2 border border-slate-700 hover:bg-slate-800 text-gray-300 p-4 rounded-xl font-semibold transition-all"
              onClick={() => window.open('https://supabase.com/support', '_blank')}
            >
              <MessageSquare className="w-5 h-5" />
              <span>Contact Support</span>
            </button>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-slate-500 text-sm font-medium">
          <div className="flex items-center space-x-2">
            <Lock className="w-4 h-4" />
            <span>Encrypted Recovery</span>
          </div>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-4 h-4" />
            <span>Supabase Incident #772-4</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.1; }
        }
        .bg-slate-950 {
          background-color: #020617;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
