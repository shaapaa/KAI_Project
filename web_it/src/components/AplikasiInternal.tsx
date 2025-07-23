
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AppWindow, Database, Shield, Users, Server, CheckCircle, AlertTriangle, Clock } from 'lucide-react';

const AplikasiInternal = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  
  const applications = [
    {
      nama: 'RAILINK Core System',
      kategori: 'Ticketing',
      fungsi: 'Sistem penjualan tiket dan reservasi utama',
      status: 'operational',
      version: '5.2.1',
      lastUpdate: '15 Jun 2024',
      users: 150,
      uptime: '99.8%',
      database: 'Oracle 19c',
      server: 'Production Cluster',
      maintenance: 'Scheduled - 1 Jul 2024'
    },
    {
      nama: 'KAI Access Mobile',
      kategori: 'Mobile App',
      fungsi: 'Aplikasi mobile untuk pembelian tiket penumpang',
      status: 'operational',
      version: '3.4.2',
      lastUpdate: '20 Jun 2024',
      users: 25000,
      uptime: '99.9%',
      database: 'PostgreSQL',
      server: 'Cloud Infrastructure',
      maintenance: 'No schedule'
    },
    {
      nama: 'CCTV Management System',
      kategori: 'Security',
      fungsi: 'Monitoring dan pengelolaan sistem CCTV',
      status: 'operational',
      version: '2.1.5',
      lastUpdate: '10 Jun 2024',
      users: 45,
      uptime: '99.5%',
      database: 'MySQL 8.0',
      server: 'Security Server',
      maintenance: 'Monthly - 25 Jun 2024'
    },
    {
      nama: 'HRiS (Human Resource Information System)',
      kategori: 'HR Management',
      fungsi: 'Sistem informasi kepegawaian dan absensi',
      status: 'maintenance',
      version: '4.1.0',
      lastUpdate: '5 Jun 2024',
      users: 200,
      uptime: '98.2%',
      database: 'SQL Server 2019',
      server: 'HR Server',
      maintenance: 'Ongoing - Expected 25 Jun'
    },
    {
      nama: 'Asset Management System',
      kategori: 'Asset',
      fungsi: 'Pengelolaan aset dan inventori perusahaan',
      status: 'operational',
      version: '3.0.8',
      lastUpdate: '12 Jun 2024',
      users: 80,
      uptime: '99.1%',
      database: 'MariaDB',
      server: 'Asset Server',
      maintenance: 'Quarterly - 30 Jun 2024'
    },
    {
      nama: 'Financial Management System',
      kategori: 'Finance',
      fungsi: 'Sistem keuangan dan akuntansi',
      status: 'operational',
      version: '6.2.3',
      lastUpdate: '18 Jun 2024',
      users: 65,
      uptime: '99.7%',
      database: 'Oracle 19c',
      server: 'Finance Cluster',
      maintenance: 'No schedule'
    },
    {
      nama: 'Inventory Management',
      kategori: 'Logistics',
      fungsi: 'Pengelolaan stok dan gudang material',
      status: 'operational',
      version: '2.5.1',
      lastUpdate: '8 Jun 2024',
      users: 35,
      uptime: '98.9%',
      database: 'PostgreSQL',
      server: 'Logistics Server',
      maintenance: 'Bi-weekly - 28 Jun 2024'
    },
    {
      nama: 'Document Management System',
      kategori: 'Document',
      fungsi: 'Pengelolaan dokumen digital dan arsip',
      status: 'operational',
      version: '1.8.4',
      lastUpdate: '14 Jun 2024',
      users: 120,
      uptime: '99.3%',
      database: 'MongoDB',
      server: 'Document Server',
      maintenance: 'Monthly - 2 Jul 2024'
    },
    {
      nama: 'Network Monitoring Tool',
      kategori: 'Infrastructure',
      fungsi: 'Monitoring infrastruktur jaringan real-time',
      status: 'operational',
      version: '4.0.2',
      lastUpdate: '22 Jun 2024',
      users: 25,
      uptime: '99.6%',
      database: 'InfluxDB',
      server: 'Monitoring Cluster',
      maintenance: 'Weekly - 26 Jun 2024'
    },
    {
      nama: 'Backup & Recovery System',
      kategori: 'Infrastructure',
      fungsi: 'Sistem backup otomatis dan disaster recovery',
      status: 'warning',
      version: '3.1.7',
      lastUpdate: '16 Jun 2024',
      users: 15,
      uptime: '97.8%',
      database: 'SQLite',
      server: 'Backup Infrastructure',
      maintenance: 'Critical Update Required'
    }
  ];

  const filteredApps = applications.filter(app => 
    filterStatus === 'all' || app.status === filterStatus
  );

  const statusStats = {
    total: applications.length,
    operational: applications.filter(app => app.status === 'operational').length,
    maintenance: applications.filter(app => app.status === 'maintenance').length,
    warning: applications.filter(app => app.status === 'warning').length
  };

  const categoryStats = applications.reduce((acc, app) => {
    acc[app.kategori] = (acc[app.kategori] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-6 mt-11">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl">
        <h1 className="text-3xl font-bold mb-2">Aplikasi Internal</h1>
        <p className="text-blue-100 text-lg">
          Daftar dan Status Aplikasi Internal yang Dikelola IT Divre IV
        </p>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Aplikasi</p>
                <p className="text-2xl font-bold text-gray-900">{statusStats.total}</p>
              </div>
              <AppWindow className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Operational</p>
                <p className="text-2xl font-bold text-green-600">{statusStats.operational}</p>
                <p className="text-xs text-gray-500">{((statusStats.operational/statusStats.total)*100).toFixed(1)}%</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Maintenance</p>
                <p className="text-2xl font-bold text-yellow-600">{statusStats.maintenance}</p>
                <p className="text-xs text-gray-500">{((statusStats.maintenance/statusStats.total)*100).toFixed(1)}%</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Warning</p>
                <p className="text-2xl font-bold text-red-600">{statusStats.warning}</p>
                <p className="text-xs text-gray-500">{((statusStats.warning/statusStats.total)*100).toFixed(1)}%</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Distribusi Aplikasi per Kategori</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(categoryStats).map(([kategori, jumlah]) => (
              <div key={kategori} className="p-4 bg-gray-50 rounded-lg text-center">
                <h4 className="font-semibold text-gray-900">{kategori}</h4>
                <p className="text-2xl font-bold text-blue-600">{jumlah}</p>
                <p className="text-sm text-gray-600">aplikasi</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Filter */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Aplikasi</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">Semua Status</option>
              <option value="operational">Operational</option>
              <option value="maintenance">Maintenance</option>
              <option value="warning">Warning</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Applications List */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Aplikasi ({filteredApps.length} dari {statusStats.total} aplikasi)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredApps.map((app, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">{app.nama}</h4>
                    <p className="text-sm text-gray-600">{app.kategori}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    app.status === 'operational' ? 'bg-green-100 text-green-700' :
                    app.status === 'maintenance' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {app.status === 'operational' ? 'Operational' :
                     app.status === 'maintenance' ? 'Maintenance' : 'Warning'}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-4">{app.fungsi}</p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Version</p>
                    <p className="font-medium">{app.version}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Last Update</p>
                    <p className="font-medium">{app.lastUpdate}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Active Users</p>
                    <p className="font-medium">{app.users.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Uptime</p>
                    <p className="font-medium">{app.uptime}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Database</p>
                    <p className="font-medium">{app.database}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Server</p>
                    <p className="font-medium">{app.server}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <p className="text-gray-500 text-sm">Next Maintenance</p>
                  <p className={`font-medium text-sm ${
                    app.maintenance.includes('Critical') ? 'text-red-600' :
                    app.maintenance.includes('Ongoing') ? 'text-yellow-600' :
                    app.maintenance === 'No schedule' ? 'text-green-600' :
                    'text-blue-600'
                  }`}>
                    {app.maintenance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Technical Summary Table */}
      <Card>
        <CardHeader>
          <CardTitle>Ringkasan Teknis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Aplikasi</th>
                  <th className="text-left p-3">Version</th>
                  <th className="text-left p-3">Database</th>
                  <th className="text-left p-3">Users</th>
                  <th className="text-left p-3">Uptime</th>
                  <th className="text-left p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredApps.map((app, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <div>
                        <p className="font-medium">{app.nama}</p>
                        <p className="text-sm text-gray-600">{app.kategori}</p>
                      </div>
                    </td>
                    <td className="p-3">{app.version}</td>
                    <td className="p-3">{app.database}</td>
                    <td className="p-3">{app.users.toLocaleString()}</td>
                    <td className="p-3">{app.uptime}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        app.status === 'operational' ? 'bg-green-100 text-green-700' :
                        app.status === 'maintenance' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {app.status === 'operational' ? 'Operational' :
                         app.status === 'maintenance' ? 'Maintenance' : 'Warning'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Infrastructure Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Infrastruktur Pendukung</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                <Server className="h-5 w-5" />
                <span>Server Infrastructure</span>
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Production Cluster (3 nodes)</li>
                <li>• Development Server (2 nodes)</li>
                <li>• Testing Environment (1 node)</li>
                <li>• Backup Infrastructure (2 nodes)</li>
                <li>• Load Balancer (2 units)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                <Database className="h-5 w-5" />
                <span>Database Systems</span>
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Oracle 19c (2 instances)</li>
                <li>• PostgreSQL (3 instances)</li>
                <li>• MySQL 8.0 (2 instances)</li>
                <li>• SQL Server 2019 (1 instance)</li>
                <li>• MongoDB (1 cluster)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Security & Monitoring</span>
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• SSL/TLS encryption</li>
                <li>• Two-factor authentication</li>
                <li>• 24/7 system monitoring</li>
                <li>• Automated backup</li>
                <li>• Intrusion detection</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Key Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg text-center">
              <h4 className="text-lg font-bold text-blue-600">99.2%</h4>
              <p className="text-sm text-blue-800">Average Uptime</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg text-center">
              <h4 className="text-lg font-bold text-green-600">25,695</h4>
              <p className="text-sm text-green-800">Total Active Users</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg text-center">
              <h4 className="text-lg font-bold text-purple-600">18.5TB</h4>
              <p className="text-sm text-purple-800">Total Data Storage</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg text-center">
              <h4 className="text-lg font-bold text-orange-600">24/7</h4>
              <p className="text-sm text-orange-800">Support Coverage</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AplikasiInternal;
