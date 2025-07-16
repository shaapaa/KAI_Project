
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, MapPin, Search, Filter, Monitor, AlertTriangle, CheckCircle } from 'lucide-react';

const DataCCTV = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLokasi, setFilterLokasi] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const cctvData = [
    {
      lokasi: 'Stasiun Tanjungkarang',
      kategori: 'Stasiun',
      jumlah: 32,
      active: 30,
      maintenance: 2,
      offline: 0,
      brand: 'Hikvision',
      resolution: '4K',
      nightVision: true,
      coverage: ['Platform 1-4', 'Ruang Tunggu', 'Loket', 'Parkir', 'Area Publik']
    },
    {
      lokasi: 'Stasiun Bandar Lampung',
      kategori: 'Stasiun',
      jumlah: 24,
      active: 24,
      maintenance: 0,
      offline: 0,
      brand: 'Dahua',
      resolution: '4K',
      nightVision: true,
      coverage: ['Platform 1-3', 'Ruang Tunggu', 'Loket', 'Area Komersial']
    },
    {
      lokasi: 'Stasiun Kotabumi',
      kategori: 'Stasiun',
      jumlah: 16,
      active: 15,
      maintenance: 1,
      offline: 0,
      brand: 'Hikvision',
      resolution: '1080p',
      nightVision: true,
      coverage: ['Platform 1-2', 'Ruang Tunggu', 'Loket']
    },
    {
      lokasi: 'Dipo Tanjungkarang',
      kategori: 'Dipo',
      jumlah: 28,
      active: 26,
      maintenance: 1,
      offline: 1,
      brand: 'Dahua',
      resolution: '4K',
      nightVision: true,
      coverage: ['Area Perawatan', 'Gudang', 'Kantor', 'Pintu Masuk', 'Perimeter']
    },
    {
      lokasi: 'Kereta Ekonomi KA 123',
      kategori: 'Kereta',
      jumlah: 8,
      active: 8,
      maintenance: 0,
      offline: 0,
      brand: 'Axis',
      resolution: '1080p',
      nightVision: false,
      coverage: ['Gerbong 1-8']
    },
    {
      lokasi: 'UPT Kru KA Tanjungkarang',
      kategori: 'UPT Kru',
      jumlah: 12,
      active: 11,
      maintenance: 1,
      offline: 0,
      brand: 'Hikvision',
      resolution: '1080p',
      nightVision: true,
      coverage: ['Ruang Briefing', 'Istirahat', 'Parkir', 'Pintu Masuk']
    },
    {
      lokasi: 'Resort JJ Kotabumi',
      kategori: 'Resort JJ',
      jumlah: 6,
      active: 6,
      maintenance: 0,
      offline: 0,
      brand: 'Dahua',
      resolution: '1080p',
      nightVision: true,
      coverage: ['Kantor', 'Workshop', 'Gudang']
    },
    {
      lokasi: 'Resort Sintel Bandar Lampung',
      kategori: 'Resort Sintel',
      jumlah: 8,
      active: 7,
      maintenance: 0,
      offline: 1,
      brand: 'Hikvision',
      resolution: '4K',
      nightVision: true,
      coverage: ['Server Room', 'Control Room', 'Kantor', 'Parkir']
    },
    {
      lokasi: 'Rumah Sinyal Tanjungkarang',
      kategori: 'Rumah Sinyal',
      jumlah: 4,
      active: 4,
      maintenance: 0,
      offline: 0,
      brand: 'Axis',
      resolution: '1080p',
      nightVision: true,
      coverage: ['Control Room', 'Equipment Room']
    }
  ];

  const filteredData = cctvData.filter(item => {
    const matchSearch = item.lokasi.toLowerCase().includes(searchTerm.toLowerCase());
    const matchLokasi = filterLokasi === 'all' || item.kategori === filterLokasi;
    const matchStatus = filterStatus === 'all' || 
      (filterStatus === 'normal' && item.offline === 0) ||
      (filterStatus === 'issue' && item.offline > 0);
    return matchSearch && matchLokasi && matchStatus;
  });

  const totalStats = cctvData.reduce((acc, item) => ({
    total: acc.total + item.jumlah,
    active: acc.active + item.active,
    maintenance: acc.maintenance + item.maintenance,
    offline: acc.offline + item.offline
  }), { total: 0, active: 0, maintenance: 0, offline: 0 });

  const categoryStats = cctvData.reduce((acc, item) => {
    acc[item.kategori] = (acc[item.kategori] || 0) + item.jumlah;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl">
        <h1 className="text-3xl font-bold mb-2">Data CCTV</h1>
        <p className="text-blue-100 text-lg">
          Monitoring dan Pengelolaan Sistem CCTV di Seluruh Fasilitas Divre IV
        </p>
      </div>

      {/* Overview Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total CCTV</p>
                <p className="text-2xl font-bold text-gray-900">{totalStats.total}</p>
              </div>
              <Camera className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active</p>
                <p className="text-2xl font-bold text-green-600">{totalStats.active}</p>
                <p className="text-xs text-gray-500">{((totalStats.active/totalStats.total)*100).toFixed(1)}%</p>
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
                <p className="text-2xl font-bold text-yellow-600">{totalStats.maintenance}</p>
                <p className="text-xs text-gray-500">{((totalStats.maintenance/totalStats.total)*100).toFixed(1)}%</p>
              </div>
              <Monitor className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Offline</p>
                <p className="text-2xl font-bold text-red-600">{totalStats.offline}</p>
                <p className="text-xs text-gray-500">{((totalStats.offline/totalStats.total)*100).toFixed(1)}%</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Distribusi CCTV per Kategori</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(categoryStats).map(([kategori, jumlah]) => (
              <div key={kategori} className="p-4 bg-gray-50 rounded-lg text-center">
                <h4 className="font-semibold text-gray-900">{kategori}</h4>
                <p className="text-2xl font-bold text-blue-600">{jumlah}</p>
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
                placeholder="Cari lokasi CCTV..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-400" size={16} />
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filterLokasi}
                onChange={(e) => setFilterLokasi(e.target.value)}
              >
                <option value="all">Semua Kategori</option>
                <option value="Stasiun">Stasiun</option>
                <option value="Dipo">Dipo</option>
                <option value="Kereta">Kereta</option>
                <option value="UPT Kru">UPT Kru</option>
                <option value="Resort JJ">Resort JJ</option>
                <option value="Resort Sintel">Resort Sintel</option>
                <option value="Rumah Sinyal">Rumah Sinyal</option>
              </select>
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">Semua Status</option>
                <option value="normal">Normal</option>
                <option value="issue">Ada Masalah</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CCTV Data Cards */}
      <Card>
        <CardHeader>
          <CardTitle>Detail CCTV per Lokasi ({filteredData.length} lokasi)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredData.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.lokasi}</h4>
                    <p className="text-sm text-gray-600">{item.kategori}</p>
                  </div>
                  <Camera className="h-6 w-6 text-blue-600" />
                </div>

                <div className="space-y-3">
                  {/* Status Overview */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 bg-green-50 rounded">
                      <p className="text-lg font-bold text-green-600">{item.active}</p>
                      <p className="text-xs text-green-700">Active</p>
                    </div>
                    <div className="p-2 bg-yellow-50 rounded">
                      <p className="text-lg font-bold text-yellow-600">{item.maintenance}</p>
                      <p className="text-xs text-yellow-700">Maintenance</p>
                    </div>
                    <div className="p-2 bg-red-50 rounded">
                      <p className="text-lg font-bold text-red-600">{item.offline}</p>
                      <p className="text-xs text-red-700">Offline</p>
                    </div>
                  </div>

                  {/* Technical Info */}
                  <div className="pt-2 border-t space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Brand:</span>
                      <span className="font-medium">{item.brand}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Resolution:</span>
                      <span className="font-medium">{item.resolution}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Night Vision:</span>
                      <span className={`font-medium ${item.nightVision ? 'text-green-600' : 'text-red-600'}`}>
                        {item.nightVision ? 'Yes' : 'No'}
                      </span>
                    </div>
                  </div>

                  {/* Coverage Areas */}
                  <div className="pt-2 border-t">
                    <h5 className="font-medium text-gray-800 mb-2">Area Coverage:</h5>
                    <div className="flex flex-wrap gap-1">
                      {item.coverage.map((area, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Overall Status */}
                  <div className="pt-2 border-t">
                    <div className={`flex items-center space-x-2 p-2 rounded ${
                      item.offline === 0 ? 'bg-green-50' : 'bg-red-50'
                    }`}>
                      {item.offline === 0 ? (
                        <>
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-green-700 font-medium">Sistem Normal</span>
                        </>
                      ) : (
                        <>
                          <AlertTriangle className="h-4 w-4 text-red-600" />
                          <span className="text-sm text-red-700 font-medium">Perlu Perhatian</span>
                        </>
                      )}
                    </div>
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
          <CardTitle>Ringkasan Teknis CCTV</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Lokasi</th>
                  <th className="text-left p-3">Kategori</th>
                  <th className="text-left p-3">Total</th>
                  <th className="text-left p-3">Active</th>
                  <th className="text-left p-3">Maintenance</th>
                  <th className="text-left p-3">Offline</th>
                  <th className="text-left p-3">Brand</th>
                  <th className="text-left p-3">Resolution</th>
                  <th className="text-left p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{item.lokasi}</td>
                    <td className="p-3">{item.kategori}</td>
                    <td className="p-3">{item.jumlah}</td>
                    <td className="p-3 text-green-600 font-medium">{item.active}</td>
                    <td className="p-3 text-yellow-600 font-medium">{item.maintenance}</td>
                    <td className="p-3 text-red-600 font-medium">{item.offline}</td>
                    <td className="p-3">{item.brand}</td>
                    <td className="p-3">{item.resolution}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.offline === 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {item.offline === 0 ? 'Normal' : 'Issue'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Maintenance Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Jadwal Maintenance CCTV</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-medium text-yellow-900">Scheduled Maintenance</h5>
                  <p className="text-sm text-yellow-700">Stasiun Tanjungkarang - 2 unit CCTV</p>
                </div>
                <span className="text-sm text-yellow-600">Minggu depan</span>
              </div>
            </div>
            
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-medium text-blue-900">Routine Check</h5>
                  <p className="text-sm text-blue-700">Semua lokasi - Pemeriksaan bulanan</p>
                </div>
                <span className="text-sm text-blue-600">Akhir bulan</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataCCTV;
