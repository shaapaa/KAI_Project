
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, User, Mail, Phone, MapPin, Award } from 'lucide-react';

const StrukturOrganisasi = () => {
  const struktur = {
    manager: {
      nama: 'Ir. Ahmad Sukardi, M.T.',
      jabatan: 'Manager IT Divre IV',
      nip: '19750515 199803 1 002',
      email: 'ahmad.sukardi@kereta-api.co.id',
      phone: '(0721) 253-754',
      pendidikan: 'S2 Teknik Informatika',
      pengalaman: '15 Tahun'
    },
    asisten: [
      {
        nama: 'Sari Indrawati, S.Kom.',
        jabatan: 'Asisten Manager IT',
        nip: '19820308 200604 2 001',
        email: 'sari.indrawati@kereta-api.co.id',
        bidang: 'Infrastruktur & Jaringan'
      },
      {
        nama: 'Bambang Prasetyo, S.T.',
        jabatan: 'Asisten Manager IT',
        nip: '19790621 200203 1 003',
        email: 'bambang.prasetyo@kereta-api.co.id',
        bidang: 'Sistem Aplikasi & Database'
      }
    ],
    supervisor: [
      {
        nama: 'Rina Marlina, S.Kom.',
        jabatan: 'Supervisor IT Network',
        tim: 'Network & Infrastructure',
        lokasi: 'Bandar Lampung'
      },
      {
        nama: 'Dedi Kurniawan, S.T.',
        jabatan: 'Supervisor IT Security',
        tim: 'Security & CCTV',
        lokasi: 'Bandar Lampung'
      },
      {
        nama: 'Fitri Handayani, S.Kom.',
        jabatan: 'Supervisor IT Support',
        tim: 'User Support & Ticketing',
        lokasi: 'Bandar Lampung'
      },
      {
        nama: 'Rudi Hartono, A.Md.',
        jabatan: 'Supervisor IT Field',
        tim: 'Field Operations',
        lokasi: 'Kotabumi'
      }
    ]
  };

  const pegawaiTetap = [
    { nama: 'Andi Wijaya, S.Kom.', jabatan: 'Network Administrator', unit: 'Network Team' },
    { nama: 'Siti Nurhaliza, S.T.', jabatan: 'Database Administrator', unit: 'Database Team' },
    { nama: 'Fajar Sidik, A.Md.', jabatan: 'System Administrator', unit: 'Infrastructure Team' },
    { nama: 'Maya Sari, S.Kom.', jabatan: 'Application Developer', unit: 'Development Team' },
    { nama: 'Rizki Pratama, S.T.', jabatan: 'Security Analyst', unit: 'Security Team' },
    { nama: 'Dewi Lestari, A.Md.', jabatan: 'Technical Support', unit: 'Support Team' },
    { nama: 'Agus Setiawan, S.Kom.', jabatan: 'CCTV Technician', unit: 'Security Team' },
    { nama: 'Lina Marlina, A.Md.', jabatan: 'Help Desk Officer', unit: 'Support Team' },
    { nama: 'Hendra Gunawan, S.T.', jabatan: 'Field Engineer', unit: 'Field Team' },
    { nama: 'Yuli Astuti, S.Kom.', jabatan: 'Data Analyst', unit: 'Analytics Team' }
  ];

  const outsourcing = [
    { nama: 'PT Telkom Indonesia', layanan: 'Network Infrastructure', jumlah: '8 Orang' },
    { nama: 'PT Indosat Ooredoo', layanan: 'Telecommunication', jumlah: '5 Orang' },
    { nama: 'PT Datascrip', layanan: 'Hardware Maintenance', jumlah: '6 Orang' },
    { nama: 'PT Metrodata', layanan: 'Software Support', jumlah: '4 Orang' },
    { nama: 'PT Multipolar Technology', layanan: 'System Integration', jumlah: '5 Orang' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl">
        <h1 className="text-3xl font-bold mb-2">Struktur Organisasi</h1>
        <p className="text-blue-100 text-lg">
          Divisi IT Regional IV Tanjungkarang - Data Personil & Struktur Kepemimpinan
        </p>
      </div>

      {/* Organizational Chart Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-5 w-5" />
            <span>Bagan Organisasi</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Manager */}
          <div className="text-center mb-8">
            <div className="inline-block p-6 bg-blue-100 rounded-lg border-2 border-blue-300">
              <div className="flex items-center justify-center mb-3">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg text-blue-900">{struktur.manager.nama}</h3>
              <p className="text-blue-700 font-medium">{struktur.manager.jabatan}</p>
              <p className="text-sm text-blue-600">NIP: {struktur.manager.nip}</p>
            </div>
          </div>

          {/* Assistants */}
          <div className="flex justify-center gap-8 mb-8">
            {struktur.asisten.map((asisten, index) => (
              <div key={index} className="p-4 bg-green-100 rounded-lg border border-green-300 flex-1 max-w-xs">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <User className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-green-900">{asisten.nama}</h4>
                  <p className="text-green-700 text-sm">{asisten.jabatan}</p>
                  <p className="text-xs text-green-600">{asisten.bidang}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Supervisors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {struktur.supervisor.map((supervisor, index) => (
              <div key={index} className="p-4 bg-orange-100 rounded-lg border border-orange-300">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <User className="h-5 w-5 text-orange-600" />
                  </div>
                  <h5 className="font-semibold text-orange-900 text-sm">{supervisor.nama}</h5>
                  <p className="text-orange-700 text-xs">{supervisor.jabatan}</p>
                  <p className="text-xs text-orange-600">{supervisor.tim}</p>
                  <p className="text-xs text-orange-500">{supervisor.lokasi}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Manager Detail */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="h-5 w-5" />
            <span>Profil Manager IT</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-semibold">{struktur.manager.nama}</p>
                  <p className="text-sm text-gray-600">{struktur.manager.jabatan}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-500" />
                <p className="text-sm">{struktur.manager.email}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-500" />
                <p className="text-sm">{struktur.manager.phone}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900">Pendidikan</p>
                <p className="text-sm text-gray-600">{struktur.manager.pendidikan}</p>
              </div>
              
              <div>
                <p className="font-semibold text-gray-900">Pengalaman</p>
                <p className="text-sm text-gray-600">{struktur.manager.pengalaman}</p>
              </div>
              
              <div>
                <p className="font-semibold text-gray-900">NIP</p>
                <p className="text-sm text-gray-600">{struktur.manager.nip}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Staff Data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pegawai Tetap */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Pegawai Tetap</span>
              </div>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {pegawaiTetap.length} Orang
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pegawaiTetap.map((pegawai, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{pegawai.nama}</p>
                    <p className="text-sm text-gray-600">{pegawai.jabatan}</p>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    {pegawai.unit}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Outsourcing */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Outsourcing Partners</span>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                28 Orang
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {outsourcing.map((partner, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-gray-900">{partner.nama}</p>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                      {partner.jumlah}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{partner.layanan}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Summary Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>Ringkasan SDM IT</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <h4 className="text-2xl font-bold text-blue-600">43</h4>
              <p className="text-sm text-blue-800">Total SDM IT</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h4 className="text-2xl font-bold text-green-600">15</h4>
              <p className="text-sm text-green-800">Pegawai Tetap</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <h4 className="text-2xl font-bold text-orange-600">28</h4>
              <p className="text-sm text-orange-800">Outsourcing</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <h4 className="text-2xl font-bold text-purple-600">4</h4>
              <p className="text-sm text-purple-800">Supervisor</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StrukturOrganisasi;
