'use client';

import { Clock, Check } from 'lucide-react';

export default function KYCContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">KYC Verification</h1>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="text-yellow-600 dark:text-yellow-400 text-2xl" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">KYC Verification Pending</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Your documents are currently being reviewed. This process typically takes 1-3 business days.</p>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
            <div className="text-left space-y-2">
              <div className="flex items-center text-sm">
                <Check className="text-green-500 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">Personal Information - Completed</span>
              </div>
              <div className="flex items-center text-sm">
                <Check className="text-green-500 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">Identity Document - Submitted</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="text-yellow-500 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">Document Review - In Progress</span>
              </div>
            </div>
          </div>
          
          <button className="bg-primary hover:bg-purple-700 text-white px-6 py-2 rounded-lg">
            Check Status
          </button>
        </div>
      </div>
    </div>
  );
}