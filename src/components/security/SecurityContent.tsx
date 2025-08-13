'use client';

import { Smartphone, QrCode } from 'lucide-react';

export default function SecurityContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Security</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Two-Factor Authentication</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <Smartphone className="text-primary" />
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">SMS Authentication</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Enabled</div>
                </div>
              </div>
              <button className="text-sm text-primary hover:underline">Disable</button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <QrCode className="text-gray-400" />
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Google Authenticator</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Not configured</div>
                </div>
              </div>
              <button className="text-sm text-primary hover:underline">Enable</button>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Login History</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Chrome on Windows</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">192.168.1.100 • 2 hours ago</div>
              </div>
              <span className="text-xs text-green-600 dark:text-green-400">Current</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Mobile App</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">192.168.1.101 • 1 day ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Change Password</h3>
        <div className="max-w-md space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Current Password</label>
            <input type="password" className="w-full px-3 py-2 text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">New Password</label>
            <input type="password" className="w-full px-3 py-2 text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Confirm New Password</label>
            <input type="password" className="w-full px-3 py-2 text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white" />
          </div>
          <button className="bg-primary hover:bg-purple-700 text-white px-4 py-2 rounded-lg">
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}