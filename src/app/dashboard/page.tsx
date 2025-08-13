import DashboardLayout from '@/components/layout/DashboardLayout';
import DashboardContent from '@/components/dashboard/DashboardContent';
import Button from '@/components/ui/Button';
import Card, { CardHeader, CardContent, CardFooter } from '@/components/ui/Card';
import { TrendingUp, TrendingDown, DollarSign, Users, Activity } from 'lucide-react';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-primary rounded-xl p-6 text-text-secondary">
          <h1 className="text-2xl lg:text-3xl font-bold mb-2">Welcome back, John!</h1>
          <p className="text-text-secondary/90">Here's what's happening with your portfolio today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-bg-secondary border-border-primary">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-text-tertiary">Portfolio Value</p>
                  <p className="text-2xl font-bold text-text-primary">$125,430</p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 text-success mr-1" />
                    <span className="text-sm text-success">+2.5%</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-bg-secondary border-border-primary">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-text-tertiary">24h Change</p>
                  <p className="text-2xl font-bold text-success">+$3,240</p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 text-success mr-1" />
                    <span className="text-sm text-success">+2.65%</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-bg-secondary border-border-primary">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-text-tertiary">Active Trades</p>
                  <p className="text-2xl font-bold text-text-primary">12</p>
                  <div className="flex items-center mt-1">
                    <span className="text-sm text-text-tertiary">3 profitable</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-cta-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-cta-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-bg-secondary border-border-primary">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-text-tertiary">Market Sentiment</p>
                  <p className="text-2xl font-bold text-warning">Bullish</p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 text-warning mr-1" />
                    <span className="text-sm text-warning">Strong Buy</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-bg-secondary border-border-primary">
          <CardHeader>
            <h2 className="text-xl font-semibold text-text-primary">Quick Actions</h2>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button variant="primary" className="w-full h-12">
                <DollarSign className="w-4 h-4 mr-2" />
                Buy Crypto
              </Button>
              <Button variant="outline" className="w-full h-12">
                <TrendingUp className="w-4 h-4 mr-2" />
                Start Trading
              </Button>
              <Button variant="outline" className="w-full h-12">
                <Users className="w-4 h-4 mr-2" />
                P2P Trade
              </Button>
              <Button variant="outline" className="w-full h-12">
                <Activity className="w-4 h-4 mr-2" />
                View History
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