import DashboardLayout from '@/components/layout/DashboardLayout';
import DashboardContent from '@/components/dashboard/DashboardContent';
import Button from '@/components/ui/Button';
import Card, { CardHeader, CardContent } from '@/components/ui/Card';
import { TrendingUp, DollarSign, Users, Activity } from 'lucide-react';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-4 sm:space-y-6 px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-cta-primary to-cta-secondary rounded-xl p-4 sm:p-6 text-text-secondary">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Welcome back, John!</h1>
          <p className="text-text-secondary/90 text-sm sm:text-base">Here&apos;s what&apos;s happening with your portfolio today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <Card className="bg-bg-secondary dark:bg-bg-tertiary border-border-primary hover:shadow-lg transition-shadow">
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-text-tertiary mb-1">Portfolio Value</p>
                  <p className="text-lg sm:text-2xl font-bold text-text-primary truncate">$125,430</p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-success mr-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-success">+2.5%</span>
                  </div>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0 ml-2">
                  <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-bg-secondary dark:bg-bg-tertiary border-border-primary hover:shadow-lg transition-shadow">
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-text-tertiary mb-1">24h Change</p>
                  <p className="text-lg sm:text-2xl font-bold text-success truncate">+$3,240</p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-success mr-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-success">+2.65%</span>
                  </div>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0 ml-2">
                  <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-bg-secondary dark:bg-bg-tertiary border-border-primary hover:shadow-lg transition-shadow">
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-text-tertiary mb-1">Active Trades</p>
                  <p className="text-lg sm:text-2xl font-bold text-text-primary truncate">12</p>
                  <div className="flex items-center mt-1">
                    <span className="text-xs sm:text-sm text-text-tertiary">3 profitable</span>
                  </div>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cta-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 ml-2">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-cta-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-bg-secondary dark:bg-bg-tertiary border-border-primary hover:shadow-lg transition-shadow">
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-text-tertiary mb-1">Market Sentiment</p>
                  <p className="text-lg sm:text-2xl font-bold text-warning truncate">Bullish</p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-warning mr-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-warning">Strong Buy</span>
                  </div>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-warning/10 rounded-lg flex items-center justify-center flex-shrink-0 ml-2">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-bg-secondary dark:bg-bg-tertiary border-border-primary hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <h2 className="text-lg sm:text-xl font-semibold text-text-primary">Quick Actions</h2>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <Button variant="primary" className="w-full h-10 sm:h-12 text-sm sm:text-base">
                <DollarSign className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="truncate">Buy Crypto</span>
              </Button>
              <Button variant="outline" className="w-full h-10 sm:h-12 text-sm sm:text-base">
                <TrendingUp className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="truncate">Start Trading</span>
              </Button>
              <Button variant="outline" className="w-full h-10 sm:h-12 text-sm sm:text-base">
                <Users className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="truncate">P2P Trade</span>
              </Button>
              <Button variant="outline" className="w-full h-10 sm:h-12 text-sm sm:text-base">
                <Activity className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="truncate">View History</span>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Original dashboard content */}
        <DashboardContent />
      </div>
    </DashboardLayout>
  );
}