
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, User, Mail, Phone, MapPin, Award } from 'lucide-react';

const StrukturOrganisasi = () => {
  const struktur = {
    manager : {
      nama: 'Kemas Erwin Gauthama',
      jabatan: 'Manager Sistem Informasi Divre IV',
      nip: '41966',
      email: 'ahmad.sukardi@kereta-api.co.id',
      phone: '(0721) 253-754',
      pendidikan: 'S2 Teknik Informatika',
      pengalaman: '15 Tahun'
    },
    asisten_manager: [
      {
        nama: 'Syahril Ramadhan',
        jabatan: 'Asisten Manager Sistem Informasi Divre IV',
        nip: '57534'
      },
      {
        nama: 'Panji Pratama',
        jabatan: 'Asisten Manager Sistem Informasi Divre IV',
        nip: '51556'
      }
    ],
    Pelaksana_IT_Support: [
      {
        nama: 'Suyamdi',
        jabatan: 'Pelaksana IT Support',
        nip: '46626',
      },
      {
        nama: 'Bertha Winda S.',
        jabatan: 'Pelaksana IT Support',
        nip: '51234',
      },
      {
        nama: 'Ahmad ',
        jabatan: 'Pelaksana IT Support',
        nip: '47890',
      },
    ]
  };

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
            {struktur.asisten_manager.map((asisten_manager, index) => (
              <div key={index} className="p-4 bg-green-100 rounded-lg border border-green-300 flex-1 max-w-xs">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <User className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-green-900">{asisten_manager.nama}</h4>
                  <p className="text-green-700 text-sm">{asisten_manager.jabatan}</p>
                  <p className="text-xs text-green-600">NIP: {asisten_manager.nip}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pelaksana */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {struktur.Pelaksana_IT_Support.map((Pelaksana_IT_Support, index) => (
              <div key={index} className="p-4 bg-orange-100 rounded-lg border border-orange-300">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <User className="h-5 w-5 text-orange-600" />
                  </div>
                  <h5 className="font-semibold text-orange-900 text-sm">{Pelaksana_IT_Support.nama}</h5>
                  <p className="text-orange-700 text-xs">{Pelaksana_IT_Support.jabatan}</p>
                  <p className="text-xs text-orange-600">NIP: {Pelaksana_IT_Support.nip}</p>
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
