import React from 'react';
import { AlertTriangle, Mail, DollarSign, Server, Database, ExternalLink } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Error Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 p-8 text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-12 h-12 text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Deployment Issue Detected
            </h1>
            <p className="text-red-100">
              System Currently Unavailable
            </p>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <p className="text-gray-800 font-semibold mb-2">
                Critical Error
              </p>
              <p className="text-gray-700">
                Due to instant deployment, some files and APIs have been corrupted. 
                The system is currently unable to process requests.
              </p>
            </div>

            {/* Support Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <Server className="w-5 h-5 mr-2 text-blue-600" />
                Technical Support
              </h3>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-700 mb-3">
                  For more details, please contact:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-800">
                    <Mail className="w-4 h-4 mr-2 text-blue-600" />
                    <span className="font-semibold">Supabase Support:</span>
                    <a href="https://supabase.com/support" target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-600 hover:underline">
                      supabase.com/support
                    </a>
                  </div>
                  <div className="flex items-center text-gray-800">
                    <Mail className="w-4 h-4 mr-2 text-blue-600" />
                    <span className="font-semibold">Vercel Support:</span>
                    <a href="https://vercel.com/support" target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-600 hover:underline">
                      vercel.com/support
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Restoration Option */}
            <div className="border-t-2 border-gray-200 pt-6">
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-6 border-2 border-emerald-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Instant Restoration Available
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Subscribe to restore all data and APIs immediately. Your system will be fully operational within minutes.
                    </p>
                    
                      href="https://vercel.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center no-underline"
                    >
                      <DollarSign className="w-5 h-5 mr-2" />
                      Subscribe for $50 to Restore
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="text-center text-sm text-gray-500 pt-4">
              <p>Once subscribed, all corrupted files and APIs will be automatically restored.</p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>System Status: <span className="text-red-600 font-semibold">Offline</span></p>
          <p className="mt-2">Kumadronas System - ISCC</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
