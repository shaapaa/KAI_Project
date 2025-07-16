
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, MapPin, Search, Filter, Users, Train } from 'lucide-react';

const DataStasiun = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterProvinsi, setFilterProvinsi] = useState('all');

  const stasiunData = [
    { 
      nama: 'Bandar Lampung', 
      kode: 'BDL', 
      provinsi: 'Lampung', 
      kelas: 'Besar', 
      status: 'Operasional',
      jalur: 'Lintas Selatan',
      koordinat: '-5.4292, 105.2610',
      infrastruktur: {
        platform: 3,
        jalur: 5,
        cctvCount: 24,
        ticketingCount: 8
      }
    },
    {
      nama: 'Tanjungkarang',
      kode: 'TNK',
      provinsi: 'Lampung',
      kelas: 'Besar',
      status: 'Operasional',
      jalur: 'Lintas Selatan',
      koordinat: '-5.4476, 105.2681',
      infrastruktur: {
        platform: 4,
        jalur: 7,
        cctvCount: 32,
        ticketingCount: 12
      }
    },
    {
      nama: 'Kotabumi',
      kode: 'KTB',
      provinsi: 'Lampung',
      kelas: 'Sedang',
      status: 'Operasional',
      jalur: 'Lintas Timur',
      koordinat: '-4.8267, 104.8814',
      infrastruktur: {
        platform: 2,
        jalur: 3,
        cctvCount: 16,
        ticketingCount: 4
      }
    },
    {
      nama: 'Krui',
      kode: 'KRI',
      provinsi: 'Lampung',
      kelas: 'Kecil',
      status: 'Operasional',
      jalur: 'Lintas Barat',
      koordinat: '-5.1486, 103.9098',
      infrastruktur: {
        platform: 1,
        jalur: 2,
        cctvCount: 8,
        ticketingCount: 2
      }
    },
    {
      nama: 'Blambangan Umpu',
      kode: 'BU',
      provinsi: 'Lampung',
      kelas: 'Kecil',
      status: 'Operasional',
      jalur: 'Lintas Timur',
      koordinat: '-4.6414, 104.9414',
      infrastruktur: {
        platform: 1,
        jalur: 2,
        cctvCount: 6,
        ticketingCount: 2
      }
    },
    {
      nama: 'Bengkulu',
      kode: 'BKL',
      provinsi: 'Bengkulu',
      kelas: 'Sedang',
      status: 'Operasional',
      jalur: 'Lintas Barat',
      koordinat: '-3.8004, 102.2655',
      infrastruktur: {
        platform: 2,
        jalur: 4,
        cctvCount: 18,
        ticketingCount: 6
      }
    },
    {
      nama: 'Curup',
      kode: 'CRP',
      provinsi: 'Bengkulu',
      kelas: 'Kecil',
      status: 'Operasional',
      jalur: 'Lintas Barat',
      koordinat: '-3.4667, 102.5167',
      infrastruktur: {
        platform: 1,
        jalur: 2,
        cctvCount: 8,
        ticketingCount: 2
      }
    },
    {
      nama: 'Lubuklinggau',
      kode: 'LLG',
      provinsi: 'Sumatera Selatan',
      kelas: 'Sedang',
      status: 'Operasional',
      jalur: 'Lintas Timur',
      koordinat: '-3.3074, 102.8612',
      infrastruktur: {
        platform: 2,
        jalur: 3,
        cctvCount: 14,
        ticketingCount: 4
      }
    }
  ];

  const filteredStasiun = stasiunData.filter(stasiun => {
    const matchSearch = stasiun.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       stasiun.kode.toLowerCase().includes(searchTerm.toLowerCase());
    const matchFilter = filterProvinsi === 'all' || stasiun.provinsi === filterProvinsi;
    return matchSearch && matchFilter;
  });

  const stats = {
    total: stasiunData.length,
    lampung: stasiunData.filter(s => s.provinsi === 'Lampung').length,
    bengkulu: stasiunData.filter(s => s.provinsi === 'Bengkulu').length,
    sumsel: stasiunData.filter(s => s.provinsi === 'Sumatera Selatan').length,
    besar: stasiunData.filter(s => s.kelas === 'Besar').length,
    sedang: stasiunData.filter(s => s.kelas === 'Sedang').length,
    kecil: stasiunData.filter(s => s.kelas === 'Kecil').length
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl">
        <h1 className="text-3xl font-bold mb-2">Data Stasiun</h1>
        <p className="text-blue-100 text-lg">
          Informasi Lengkap Stasiun yang Dikelola Divre IV Tanjungkarang
        </p>
      </div>

      {/* Statistics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Stasiun</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
              <Building className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Stasiun Besar</p>
                <p className="text-2xl font-bold text-gray-900">{stats.besar}</p>
              </div>
              <Train className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Stasiun Sedang</p>
                <p className="text-2xl font-bold text-gray-900">{stats.sedang}</p>
              </div>
              <Building className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Stasiun Kecil</p>
                <p className="text-2xl font-bold text-gray-900">{stats.kecil}</p>
              </div>
              <MapPin className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Distribution by Province */}
      <Card>
        <CardHeader>
          <CardTitle>Distribusi Stasiun per Provinsi</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900">Lampung</h4>
              <p className="text-2xl font-bold text-blue-600">{stats.lampung}</p>
              <p className="text-sm text-blue-700">Stasiun ({((stats.lampung/stats.total)*100).toFixed(1)}%)</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900">Bengkulu</h4>
              <p className="text-2xl font-bold text-green-600">{stats.bengkulu}</p>
              <p className="text-sm text-green-700">Stasiun ({((stats.bengkulu/stats.total)*100).toFixed(1)}%)</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold text-orange-900">Sumatera Selatan</h4>
              <p className="text-2xl font-bold text-orange-600">{stats.sumsel}</p>
              <p className="text-sm text-orange-700">Stasiun ({((stats.sumsel/stats.total)*100).toFixed(1)}%)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <CardTitle>Pencarian & Filter Stasiun</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Cari nama atau kode stasiun..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-400" size={16} />
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filterProvinsi}
                onChange={(e) => setFilterProvinsi(e.target.value)}
              >
                <option value="all">Semua Provinsi</option>
                <option value="Lampung">Lampung</option>
                <option value="Bengkulu">Bengkulu</option>
                <option value="Sumatera Selatan">Sumatera Selatan</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Station List */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Stasiun ({filteredStasiun.length} dari {stats.total} stasiun)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredStasiun.map((stasiun, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">{stasiun.nama}</h4>
                    <p className="text-sm text-gray-600">Kode: {stasiun.kode}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    stasiun.kelas === 'Besar' ? 'bg-green-100 text-green-700' :
                    stasiun.kelas === 'Sedang' ? 'bg-blue-100 text-blue-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {stasiun.kelas}
                  </span>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">{stasiun.provinsi}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Train className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">{stasiun.jalur}</span>
                  </div>

                  <div className="pt-2 border-t">
                    <h5 className="font-medium text-gray-800 mb-1">Infrastruktur IT:</h5>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-gray-500">Platform:</span>
                        <span className="ml-1 font-medium">{stasiun.infrastruktur.platform}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Jalur:</span>
                        <span className="ml-1 font-medium">{stasiun.infrastruktur.jalur}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">CCTV:</span>
                        <span className="ml-1 font-medium">{stasiun.infrastruktur.cctvCount}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Ticketing:</span>
                        <span className="ml-1 font-medium">{stasiun.infrastruktur.ticketingCount}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-gray-500">{stasiun.koordinat}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                    stasiun.status === 'Operasional' ? 'bg-green-100 text-green-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    <div className={`w-2 h-2 rounded-full mr-1 ${
                      stasiun.status === 'Operasional' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}></div>
                    {stasiun.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Summary Table */}
      <Card>
        <CardHeader>
          <CardTitle>Ringkasan Data Stasiun</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Nama Stasiun</th>
                  <th className="text-left p-3">Kode</th>
                  <th className="text-left p-3">Provinsi</th>
                  <th className="text-left p-3">Kelas</th>
                  <th className="text-left p-3">Platform</th>
                  <th className="text-left p-3">CCTV</th>
                  <th className="text-left p-3">Ticketing</th>
                  <th className="text-left p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredStasiun.map((stasiun, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{stasiun.nama}</td>
                    <td className="p-3">{stasiun.kode}</td>
                    <td className="p-3">{stasiun.provinsi}</td>
                    <td className="p-3">{stasiun.kelas}</td>
                    <td className="p-3">{stasiun.infrastruktur.platform}</td>
                    <td className="p-3">{stasiun.infrastruktur.cctvCount}</td>
                    <td className="p-3">{stasiun.infrastruktur.ticketingCount}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        stasiun.status === 'Operasional' ? 'bg-green-100 text-green-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {stasiun.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataStasiun;
