import DashboardLayout from '@/components/layout/DashboardLayout';
import DashboardContent from '@/components/dashboard/DashboardContent';
import Button from '@/components/ui/Button';
import Card, { CardHeader, CardContent, CardFooter } from '@/components/ui/Card';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Example of new components */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold text-text-secondary dark:text-text-primary">
              Komponen UI Baru
            </h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-text-secondary/80 dark:text-text-primary/80">
                Berikut adalah contoh penggunaan komponen Button dan Card dengan skema warna baru:
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="md">Medium</Button>
                <Button variant="primary" size="lg">Large</Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-text-secondary/60 dark:text-text-primary/60">
              Semua komponen menggunakan skema warna yang konsisten
            </p>
          </CardFooter>
        </Card>
        
        {/* Original dashboard content */}
        <DashboardContent />
      </div>
    </DashboardLayout>
  );
}