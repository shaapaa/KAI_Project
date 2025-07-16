
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Ticket, CreditCard, Smartphone, Monitor, Users, TrendingUp } from 'lucide-react';

const LayananTicketing = () => {
  const ticketingPoints = [
    {
      lokasi: 'Stasiun Tanjungkarang',
      totalCounter: 12,
      counterAktif: 12,
      vending: 4,
      mobileApp: true,
      eWallet: ['OVO', 'GoPay', 'DANA', 'LinkAja'],
      avgDaily: 1500,
      peakHours: '07:00-09:00, 17:00-19:00'
    },
    {
      lokasi: 'Stasiun Bandar Lampung', 
      totalCounter: 8,
      counterAktif: 8,
      vending: 3,
      mobileApp: true,
      eWallet: ['OVO', 'GoPay', 'DANA'],
      avgDaily: 1200,
      peakHours: '06:00-08:00, 16:00-18:00'
    },
    {
      lokasi: 'Stasiun Kotabumi',
      totalCounter: 4,
      counterAktif: 4,
      vending: 2,
      mobileApp: true,
      eWallet: ['OVO', 'GoPay'],
      avgDaily: 400,
      peakHours: '06:30-08:30, 16:30-18:30'
    },
    {
      lokasi: 'Stasiun Krui',
      totalCounter: 2,
      counterAktif: 2,
      vending: 1,
      mobileApp: true,
      eWallet: ['OVO'],
      avgDaily: 150,
      peakHours: '07:00-09:00'
    }
  ];

  const paymentMethods = [
    { method: 'Tunai', percentage: 35, color: 'blue' },
    { method: 'Kartu Debit', percentage: 25, color: 'green' },
    { method: 'E-Wallet', percentage: 30, color: 'purple' },
    { method: 'Mobile Banking', percentage: 10, color: 'orange' }
  ];

  const monthlyStats = [
    { month: 'Jan', tickets: 45000, revenue: 2250000000 },
    { month: 'Feb', tickets: 48000, revenue: 2400000000 },
    { month: 'Mar', tickets: 52000, revenue: 2600000000 },
    { month: 'Apr', tickets: 49000, revenue: 2450000000 },
    { month: 'Mei', tickets: 51000, revenue: 2550000000 },
    { month: 'Jun', tickets: 53000, revenue: 2650000000 }
  ];

  const totalCounters = ticketingPoints.reduce((sum, point) => sum + point.totalCounter, 0);
  const totalVending = ticketingPoints.reduce((sum, point) => sum + point.vending, 0);
  const totalDaily = ticketingPoints.reduce((sum, point) => sum + point.avgDaily, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl">
        <h1 className="text-3xl font-bold mb-2">Layanan Ticketing</h1>
        <p className="text-blue-100 text-lg">
          Sistem dan Infrastruktur Penjualan Tiket Kereta Api Divre IV
        </p>
      </div>

      {/* Overview Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Counter</p>
                <p className="text-2xl font-bold text-gray-900">{totalCounters}</p>
              </div>
              <Monitor className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Vending Machine</p>
                <p className="text-2xl font-bold text-gray-900">{totalVending}</p>
              </div>
              <CreditCard className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Tiket/Hari</p>
                <p className="text-2xl font-bold text-gray-900">{totalDaily.toLocaleString()}</p>
              </div>
              <Ticket className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Mobile App</p>
                <p className="text-2xl font-bold text-gray-900">100%</p>
                <p className="text-xs text-gray-500">Coverage</p>
              </div>
              <Smartphone className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ticketing Points Detail */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Ticket className="h-5 w-5" />
            <span>Titik Layanan Ticketing</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ticketingPoints.map((point, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">{point.lokasi}</h4>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-3 bg-blue-50 rounded">
                    <p className="text-sm text-blue-600">Counter Tiket</p>
                    <p className="text-lg font-bold text-blue-900">{point.counterAktif}/{point.totalCounter}</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded">
                    <p className="text-sm text-green-600">Vending Machine</p>
                    <p className="text-lg font-bold text-green-900">{point.vending}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rata-rata Tiket/Hari:</span>
                    <span className="font-medium">{point.avgDaily.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Jam Sibuk:</span>
                    <span className="font-medium text-xs">{point.peakHours}</span>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t">
                  <p className="text-sm font-medium text-gray-700 mb-2">E-Wallet Support:</p>
                  <div className="flex flex-wrap gap-1">
                    {point.eWallet.map((wallet, idx) => (
                      <span key={idx} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">
                        {wallet}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods Distribution */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CreditCard className="h-5 w-5" />
            <span>Distribusi Metode Pembayaran</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {paymentMethods.map((method, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{method.method}</span>
                    <span className="text-sm font-bold">{method.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full ${
                        method.color === 'blue' ? 'bg-blue-500' :
                        method.color === 'green' ? 'bg-green-500' :
                        method.color === 'purple' ? 'bg-purple-500' : 'bg-orange-500'
                      }`}
                      style={{ width: `${method.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {paymentMethods.map((method, index) => (
                <div key={index} className={`p-4 rounded-lg text-center ${
                  method.color === 'blue' ? 'bg-blue-50' :
                  method.color === 'green' ? 'bg-green-50' :
                  method.color === 'purple' ? 'bg-purple-50' : 'bg-orange-50'
                }`}>
                  <p className="text-2xl font-bold text-gray-900">{method.percentage}%</p>
                  <p className="text-sm text-gray-600">{method.method}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Monthly Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>Kinerja Penjualan Tiket (6 Bulan Terakhir)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Bulan</th>
                  <th className="text-left p-3">Jumlah Tiket</th>
                  <th className="text-left p-3">Revenue (Rp)</th>
                  <th className="text-left p-3">Rata-rata/Hari</th>
                  <th className="text-left p-3">Growth</th>
                </tr>
              </thead>
              <tbody>
                {monthlyStats.map((stat, index) => {
                  const prevMonth = index > 0 ? monthlyStats[index - 1] : null;
                  const growth = prevMonth ? ((stat.tickets - prevMonth.tickets) / prevMonth.tickets * 100).toFixed(1) : '0';
                  return (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">{stat.month} 2024</td>
                      <td className="p-3">{stat.tickets.toLocaleString()}</td>
                      <td className="p-3">Rp {(stat.revenue / 1000000).toLocaleString()}M</td>
                      <td className="p-3">{Math.round(stat.tickets / 30).toLocaleString()}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded text-xs ${
                          parseFloat(growth) >= 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {parseFloat(growth) >= 0 ? '+' : ''}{growth}%
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* System Integration */}
      <Card>
        <CardHeader>
          <CardTitle>Integrasi Sistem Ticketing</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Core Systems</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• RAILINK (Sistem Utama KAI)</li>
                <li>• KAI Access Mobile App</li>
                <li>• Traveloka Integration</li>
                <li>• Tiket.com Partnership</li>
                <li>• Bank Payment Gateway</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Hardware Infrastructure</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Counter POS Systems</li>
                <li>• Thermal Ticket Printers</li>
                <li>• Barcode Scanners</li>
                <li>• Payment Terminals</li>
                <li>• Network Infrastructure</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Support Services</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 24/7 Technical Support</li>
                <li>• Real-time Monitoring</li>
                <li>• Data Backup & Recovery</li>
                <li>• Regular System Updates</li>
                <li>• Training & Maintenance</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Key Performance Indicators</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg text-center">
              <h4 className="text-lg font-bold text-blue-600">99.2%</h4>
              <p className="text-sm text-blue-800">System Uptime</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg text-center">
              <h4 className="text-lg font-bold text-green-600">&lt; 30s</h4>
              <p className="text-sm text-green-800">Avg Transaction Time</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg text-center">
              <h4 className="text-lg font-bold text-purple-600">98.5%</h4>
              <p className="text-sm text-purple-800">Payment Success Rate</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg text-center">
              <h4 className="text-lg font-bold text-orange-600">4.2/5</h4>
              <p className="text-sm text-orange-800">Customer Satisfaction</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LayananTicketing;
