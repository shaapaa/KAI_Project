import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, User, Mail, Phone, MapPin, Award } from 'lucide-react';

const StrukturOrganisasi = () => {
  const struktur = {
    manager : {
      nama: 'Kemas Erwin Gauthama',
      jabatan: 'Manager Sistem Informasi Divre IV',
      nip: '41966',
      email: 'kemas.erwin@kereta-api.co.id',
      phone: '(0721) 253-754',
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
         <div className="flex flex-col items-center">
  {/* Manager */}
  <div className="p-6 bg-blue-100 border border-blue-300 rounded-lg text-center max-w-xs mb-6">
    <div className="text-2xl font-bold">Kemas Erwin Gauthama</div>
    <div className="text-blue-700">Manager Sistem Informasi Divre IV</div>
    <div className="text-sm text-blue-500">NIP: 41966</div>
  </div>

  {/* Asisten Manager */}
  <div className="flex justify-between w-full px-24 mb-6">
    {/* Syahril */}
    <div className="flex flex-col items-center">
      <div className="bg-green-100 p-4 rounded-lg border border-green-300 text-center max-w-xs w-full mb-4">
        <div className="font-bold">Syahril Ramadhan</div>
        <div>Asisten Manager Sistem Informasi Divre IV</div>
        <div className="text-sm">NIP: 57534</div>
      </div>
      <div className="bg-orange-100 p-4 rounded-lg border border-orange-300 text-center max-w-xs w-full">
        <div className="font-bold">Suyamdi</div>
        <div>Pelaksana IT Support</div>
        <div className="text-sm">NIP: 46626</div>
      </div>
    </div>

    {/* Panji */}
    <div className="flex flex-col items-center">
      <div className="bg-green-100 p-4 rounded-lg border border-green-300 text-center max-w-xs w-full mb-4">
        <div className="font-bold">Panji Pratama</div>
        <div>Asisten Manager Sistem Informasi Divre IV</div>
        <div className="text-sm">NIP: 51556</div>
      </div>
      <div className="flex gap-4">
        <div className="bg-orange-100 p-4 rounded-lg border border-orange-300 text-center max-w-xs w-full">
          <div className="font-bold">Bertha Winda S.</div>
          <div>Pelaksana IT Support</div>
          <div className="text-sm">NIP: 51234</div>
        </div>
        <div className="bg-orange-100 p-4 rounded-lg border border-orange-300 text-center max-w-xs w-full">
          <div className="font-bold">Ahmad</div>
          <div>Pelaksana IT Support</div>
          <div className="text-sm">NIP: 47890</div>
        </div>
      </div>
    </div>
  </div>
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
              
              <div>
                <p className="font-semibold text-gray-900">NIP</p>
                <p className="text-sm text-gray-600">{struktur.manager.nip}</p>
              </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StrukturOrganisasi;
