
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Users, Target, Award, Network, Shield } from 'lucide-react';

const Profile = () => {
  return (
    <div className="space-y-6 mt-11">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl">
        <h1 className="text-3xl font-bold mb-2">Profil Divisi IT</h1>
        <p className="text-blue-100 text-lg">
          Divisi Regional IV Tanjungkarang - PT Kereta Api Indonesia
        </p>
      </div>

      {/* Main Profile Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Building className="h-5 w-5" />
              <span>Tentang Divisi IT</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Deskripsi Umum</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Divisi IT Divre IV Tanjungkarang bertanggung jawab dalam pengelolaan, 
                pemeliharaan, dan pengembangan seluruh infrastruktur teknologi informasi 
                dan komunikasi di wilayah operasional Divisi Regional IV yang meliputi 
                Provinsi Lampung, Bengkulu, dan sebagian Sumatera Selatan.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Tahun Pembentukan</h4>
              <p className="text-gray-600 text-sm">2019</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Lokasi Kantor Pusat</h4>
              <p className="text-gray-600 text-sm">
                Jl. Teuku Umar No.23 35121 Bandar Lampung
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Functions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5" />
              <span>Fungsi Utama</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  icon: Network,
                  title: 'Infrastruktur Jaringan',
                  desc: 'Pengelolaan dan pemeliharaan jaringan komunikasi data'
                },
                {
                  icon: Shield,
                  title: 'Keamanan Sistem',
                  desc: 'Monitoring dan maintenance sistem keamanan CCTV'
                },
                {
                  icon: Users,
                  title: 'Sistem Ticketing',
                  desc: 'Pengelolaan layanan ticketing dan aplikasi pelayanan'
                },
                {
                  icon: Award,
                  title: 'Support IT',
                  desc: 'Dukungan teknis dan troubleshooting sistem informasi'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <item.icon className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">{item.title}</h5>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Responsibilities */}
      <Card>
        <CardHeader>
          <CardTitle>Tanggung Jawab dan Lingkup Kerja</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Infrastruktur & Jaringan</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Pengelolaan jaringan LAN/WAN di seluruh stasiun</li>
                <li>• Maintenance perangkat jaringan (router, switch, firewall)</li>
                <li>• Monitoring konektivitas dan bandwidth</li>
                <li>• Implementasi kebijakan keamanan jaringan</li>
                <li>• Backup dan disaster recovery planning</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Sistem Operasional</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Pengelolaan sistem CCTV di stasiun dan fasilitas</li>
                <li>• Maintenance sistem ticketing dan e-payment</li>
                <li>• Support aplikasi internal perusahaan</li>
                <li>• Monitoring sistem lokotrack dan GPS</li>
                <li>• Help desk dan user support</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Data & Aplikasi</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Pengelolaan database dan server aplikasi</li>
                <li>• Development dan customization sistem</li>
                <li>• Integrasi antar sistem informasi</li>
                <li>• Reporting dan business intelligence</li>
                <li>• Data backup dan archiving</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Compliance & Security</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Implementasi standar keamanan informasi</li>
                <li>• Audit sistem dan compliance checking</li>
                <li>• Training dan awareness program</li>
                <li>• Incident response dan investigation</li>
                <li>• Policy dan procedure development</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Informasi Kontak</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Alamat</h4>
              <p className="text-sm text-gray-600">
                Jl. Teuku Umar No.23<br/>
                Tanjungkarang<br/>
                Bandar Lampung, Lampung 35214
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Telepon</h4>
              <p className="text-sm text-gray-600">
                Phone: <br/>
                Emergency: (0721) 253-911
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
              <p className="text-sm text-gray-600">
                it.divre4@kereta-api.co.id<br/>
                admin.tnk@kereta-api.co.id<br/>
                support.divre4@kereta-api.co.id
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
