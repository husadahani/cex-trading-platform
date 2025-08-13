'use client';

import { HelpCircle, LifeBuoy, Book } from 'lucide-react';

export default function HelpContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Help Center</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer">
          <div className="text-center">
            <HelpCircle className="text-primary text-3xl mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">FAQ</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Find answers to common questions</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer">
          <div className="text-center">
            <LifeBuoy className="text-primary text-3xl mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Support Ticket</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Get help from our support team</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer">
          <div className="text-center">
            <Book className="text-primary text-3xl mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Guides</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Learn how to use our platform</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Popular Topics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <a href="#" className="block text-sm text-primary hover:underline">How to deposit funds?</a>
            <a href="#" className="block text-sm text-primary hover:underline">How to withdraw cryptocurrency?</a>
            <a href="#" className="block text-sm text-primary hover:underline">Trading fees explanation</a>
            <a href="#" className="block text-sm text-primary hover:underline">Account verification process</a>
          </div>
          <div className="space-y-2">
            <a href="#" className="block text-sm text-primary hover:underline">Security best practices</a>
            <a href="#" className="block text-sm text-primary hover:underline">API documentation</a>
            <a href="#" className="block text-sm text-primary hover:underline">Mobile app guide</a>
            <a href="#" className="block text-sm text-primary hover:underline">Contact support</a>
          </div>
        </div>
      </div>
    </div>
  );
}