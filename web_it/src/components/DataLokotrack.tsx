
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Train, MapPin, Radio, Battery, Signal, CheckCircle, AlertTriangle, Search } from 'lucide-react';

const DataLokotrack = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const lokotrackData = [
    {
      id: 'LT-CC201-001',
      type: 'CC201',
      lokomotif: 'CC 201 90 01',
      rute: 'Tanjungkarang - Kotabumi',
      status: 'active',
      lastUpdate: '2024-06-22 14:30:00',
      location: 'Stasiun Tanjungkarang',
      speed: 0,
      signalStrength: 95,
      batteryLevel: 87,
      gpsAccuracy: '3m',
      operator: 'Masinis: Budi Santoso'
    },
    {
      id: 'LT-CC201-002',
      type: 'CC201',
      lokomotif: 'CC 201 90 02',
      rute: 'Bandar Lampung - Krui',
      status: 'active',
      lastUpdate: '2024-06-22 14:28:15',
      location: 'Km 15+200 (Tanjung Senang)',
      speed: 65,
      signalStrength: 88,
      batteryLevel: 92,
      gpsAccuracy: '2m',
      operator: 'Masinis: Eko Prasetyo'
    },
    {
      id: 'LT-CC202-001',
      type: 'CC202',
      lokomotif: 'CC 202 01 01',
      rute: 'Kotabumi - Lubuklinggau',
      status: 'active',
      lastUpdate: '2024-06-22 14:25:42',
      location: 'Stasiun Blambangan Umpu',
      speed: 45,
      signalStrength: 76,
      batteryLevel: 68,
      gpsAccuracy: '4m',
      operator: 'Masinis: Ahmad Yusuf'
    },
    {
      id: 'LT-CC202-002',
      type: 'CC202',
      lokomotif: 'CC 202 01 02',
      rute: 'Tanjungkarang - Bengkulu',
      status: 'maintenance',
      lastUpdate: '2024-06-22 10:15:30',
      location: 'Dipo Tanjungkarang',
      speed: 0,
      signalStrength: 100,
      batteryLevel: 45,
      gpsAccuracy: '2m',
      operator: 'Maintenance Team'
    },
    {
      id: 'LT-CC205-001',
      type: 'CC205',
      lokomotif: 'CC 205 03 01',
      rute: 'Krui - Bandar Lampung',
      status: 'active',
      lastUpdate: '2024-06-22 14:32:18',
      location: 'Km 89+450 (Liwa)',
      speed: 72,
      signalStrength: 82,
      batteryLevel: 78,
      gpsAccuracy: '3m',
      operator: 'Masinis: Rudi Hartanto'
    },
    {
      id: 'LT-PRT-001',
      type: 'Portable',
      lokomotif: 'Portable Unit 1',
      rute: 'Emergency Response',
      status: 'standby',
      lastUpdate: '2024-06-22 14:00:00',
      location: 'Kantor Divre IV TNK',
      speed: 0,
      signalStrength: 98,
      batteryLevel: 100,
      gpsAccuracy: '1m',
      operator: 'Tim Emergency'
    },
    {
      id: 'LT-KJJ-001',
      type: 'Kereta JJ',
      lokomotif: 'Kereta Jalan & Jembatan 01',
      rute: 'Patroli Infrastruktur',
      status: 'active',
      lastUpdate: '2024-06-22 14:15:25',
      location: 'Km 45+120 (Menggala)',
      speed: 25,
      signalStrength: 72,
      batteryLevel: 56,
      gpsAccuracy: '5m',
      operator: 'Tim JJ: Slamet Riyadi'
    },
    {
      id: 'LT-INS-001',
      type: 'Kereta Inspeksi',
      lokomotif: 'Kereta Inspeksi Regional',
      rute: 'Inspeksi Rutin',
      status: 'active',
      lastUpdate: '2024-06-22 14:20:33',
      location: 'Stasiun Kotabumi',
      speed: 0,
      signalStrength: 90,
      batteryLevel: 89,
      gpsAccuracy: '2m',
      operator: 'Tim Inspeksi: Dedi Kurniawan'
    }
  ];

  const filteredData = lokotrackData.filter(item => {
    const matchSearch = item.lokomotif.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       item.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchType = filterType === 'all' || item.type === filterType;
    const matchStatus = filterStatus === 'all' || item.status === filterStatus;
    return matchSearch && matchType && matchStatus;
  });

  const statusStats = {
    total: lokotrackData.length,
    active: lokotrackData.filter(item => item.status === 'active').length,
    standby: lokotrackData.filter(item => item.status === 'standby').length,
    maintenance: lokotrackData.filter(item => item.status === 'maintenance').length,
    offline: lokotrackData.filter(item => item.status === 'offline').length
  };

  const typeStats = lokotrackData.reduce((acc, item) => {
    acc[item.type] = (acc[item.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'standby': return 'text-blue-600 bg-blue-100';
      case 'maintenance': return 'text-yellow-600 bg-yellow-100';
      case 'offline': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSignalColor = (strength: number) => {
    if (strength >= 80) return 'text-green-600';
    if (strength >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getBatteryColor = (level: number) => {
    if (level >= 70) return 'text-green-600';
    if (level >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6 mt-11">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl">
        <h1 className="text-3xl font-bold mb-2">Data Lokotrack</h1>
        <p className="text-blue-100 text-lg">
          Sistem Tracking dan Monitoring Real-time Kereta Api Divre IV
        </p>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Unit</p>
                <p className="text-2xl font-bold text-gray-900">{statusStats.total}</p>
              </div>
              <Train className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active</p>
                <p className="text-2xl font-bold text-green-600">{statusStats.active}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Standby</p>
                <p className="text-2xl font-bold text-blue-600">{statusStats.standby}</p>
              </div>
              <Radio className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Maintenance</p>
                <p className="text-2xl font-bold text-yellow-600">{statusStats.maintenance}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Offline</p>
                <p className="text-2xl font-bold text-red-600">{statusStats.offline}</p>
              </div>
              <Signal className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Type Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Distribusi Unit per Tipe</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {Object.entries(typeStats).map(([type, count]) => (
              <div key={type} className="p-4 bg-gray-50 rounded-lg text-center">
                <h4 className="font-semibold text-gray-900">{type}</h4>
                <p className="text-2xl font-bold text-blue-600">{count}</p>
                <p className="text-sm text-gray-600">unit</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <CardTitle>Pencarian & Filter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Cari ID atau lokomotif..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="all">Semua Tipe</option>
              <option value="CC201">CC201</option>
              <option value="CC202">CC202</option>
              <option value="CC205">CC205</option>
              <option value="Portable">Portable</option>
              <option value="Kereta JJ">Kereta JJ</option>
              <option value="Kereta Inspeksi">Kereta Inspeksi</option>
            </select>
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">Semua Status</option>
              <option value="active">Active</option>
              <option value="standby">Standby</option>
              <option value="maintenance">Maintenance</option>
              <option value="offline">Offline</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Real-time Tracking Data */}
      <Card>
        <CardHeader>
          <CardTitle>Real-time Tracking Data ({filteredData.length} unit)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredData.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.lokomotif}</h4>
                    <p className="text-sm text-gray-600">{item.id}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                    {item.status.toUpperCase()}
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Location & Speed */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">Lokasi</span>
                      </div>
                      <p className="text-sm font-medium">{item.location}</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Train className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">Kecepatan</span>
                      </div>
                      <p className="text-sm font-medium">{item.speed} km/h</p>
                    </div>
                  </div>

                  {/* Signal & Battery */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Signal className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">Signal</span>
                      </div>
                      <p className={`text-sm font-medium ${getSignalColor(item.signalStrength)}`}>
                        {item.signalStrength}%
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Battery className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">Battery</span>
                      </div>
                      <p className={`text-sm font-medium ${getBatteryColor(item.batteryLevel)}`}>
                        {item.batteryLevel}%
                      </p>
                    </div>
                  </div>

                  {/* Route & Operator */}
                  <div className="pt-2 border-t">
                    <p className="text-sm text-gray-600 mb-1">Rute: <span className="font-medium">{item.rute}</span></p>
                    <p className="text-sm text-gray-600 mb-1">Operator: <span className="font-medium">{item.operator}</span></p>
                    <p className="text-sm text-gray-600">GPS Accuracy: <span className="font-medium">{item.gpsAccuracy}</span></p>
                  </div>

                  {/* Last Update */}
                  <div className="pt-2 border-t">
                    <p className="text-xs text-gray-500">
                      Last Update: {new Date(item.lastUpdate).toLocaleString('id-ID')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Summary Table */}
      <Card>
        <CardHeader>
          <CardTitle>Ringkasan Teknis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">ID Unit</th>
                  <th className="text-left p-3">Lokomotif</th>
                  <th className="text-left p-3">Tipe</th>
                  <th className="text-left p-3">Status</th>
                  <th className="text-left p-3">Lokasi</th>
                  <th className="text-left p-3">Speed</th>
                  <th className="text-left p-3">Signal</th>
                  <th className="text-left p-3">Battery</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{item.id}</td>
                    <td className="p-3">{item.lokomotif}</td>
                    <td className="p-3">{item.type}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="p-3 text-sm">{item.location}</td>
                    <td className="p-3">{item.speed} km/h</td>
                    <td className="p-3">
                      <span className={`font-medium ${getSignalColor(item.signalStrength)}`}>
                        {item.signalStrength}%
                      </span>
                    </td>
                    <td className="p-3">
                      <span className={`font-medium ${getBatteryColor(item.batteryLevel)}`}>
                        {item.batteryLevel}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* System Information */}
      <Card>
        <CardHeader>
          <CardTitle>Informasi Sistem Lokotrack</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Teknologi</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• GPS Satellite Tracking</li>
                <li>• GSM/GPRS Communication</li>
                <li>• Real-time Data Transmission</li>
                <li>• Automated Reporting</li>
                <li>• Emergency Alert System</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Features</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Speed Monitoring</li>
                <li>• Route Optimization</li>
                <li>• Fuel Consumption Tracking</li>
                <li>• Maintenance Scheduling</li>
                <li>• Driver Behavior Analysis</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Enhanced Safety</li>
                <li>• Operational Efficiency</li>
                <li>• Cost Reduction</li>
                <li>• Improved Scheduling</li>
                <li>• Better Customer Service</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataLokotrack;
