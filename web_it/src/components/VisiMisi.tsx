
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Award, TrendingUp, CheckCircle, Calendar } from 'lucide-react';

const VisiMisi = () => {
  const kpiData = [
    {
      target: 'System Uptime',
      value: '99.8%',
      achievement: '99.9%',
      status: 'exceeded',
      description: 'Ketersediaan sistem IT operasional'
    },
    {
      target: 'Response Time',
      value: '< 2 jam',
      achievement: '1.5 jam',
      status: 'achieved',
      description: 'Waktu respons terhadap incident IT'
    },
    {
      target: 'User Satisfaction',
      value: '85%',
      achievement: '88%',
      status: 'exceeded',
      description: 'Tingkat kepuasan pengguna layanan IT'
    },
    {
      target: 'Security Incidents',
      value: '< 5 per bulan',
      achievement: '2 per bulan',
      status: 'achieved',
      description: 'Jumlah insiden keamanan sistem'
    },
    {
      target: 'Project Completion',
      value: '90%',
      achievement: '95%',
      status: 'exceeded',
      description: 'Tingkat penyelesaian proyek tepat waktu'
    },
    {
      target: 'Cost Efficiency',
      value: '15%',
      achievement: '18%',
      status: 'exceeded',
      description: 'Penghematan biaya operasional IT'
    }
  ];

  const sasaranMutu = [
    {
      kategori: 'Keandalan Sistem',
      items: [
        'Memastikan uptime sistem minimal 99.5%',
        'Mengurangi downtime tidak terencana maksimal 2 jam per bulan',
        'Backup data dilakukan setiap hari dengan success rate 100%'
      ]
    },
    {
      kategori: 'Kualitas Layanan',
      items: [
        'Response time help desk maksimal 2 jam',
        'Resolusi masalah level 1 dalam 4 jam',
        'Tingkat kepuasan pengguna minimal 85%'
      ]
    },
    {
      kategori: 'Keamanan Informasi',
      items: [
        'Zero tolerance untuk security breach kritikal',
        'Incident keamanan diselesaikan dalam 24 jam',
        'Compliance audit 100% sesuai standar ISO 27001'
      ]
    },
    {
      kategori: 'Pengembangan SDM',
      items: [
        'Training teknologi minimal 40 jam per tahun per staff',
        'Sertifikasi profesional minimal 1 per staff per tahun',
        'Knowledge sharing session 2 kali per bulan'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl">
        <h1 className="text-3xl font-bold mb-2">Visi, Misi & Sasaran Mutu</h1>
        <p className="text-blue-100 text-lg">
          Key Performance Indicators (KPI) Manager Tahunan 2024
        </p>
      </div>

      {/* Visi */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Eye className="h-5 w-5" />
            <span>Visi</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg font-medium text-blue-900 leading-relaxed">
              "Menjadi divisi IT yang unggul dalam mendukung transformasi digital 
              PT Kereta Api Indonesia melalui inovasi teknologi, pelayanan prima, 
              dan infrastruktur yang handal untuk menghadirkan pengalaman perjalanan 
              kereta api yang aman, nyaman, dan terpercaya."
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Misi */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5" />
            <span>Misi</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: 'Infrastruktur Digital',
                desc: 'Membangun dan memelihara infrastruktur IT yang robust, scalable, dan secure untuk mendukung operasional kereta api yang optimal.'
              },
              {
                title: 'Inovasi Teknologi',
                desc: 'Mengimplementasikan teknologi terdepan untuk meningkatkan efisiensi operasional dan kualitas pelayanan kepada penumpang.'
              },
              {
                title: 'Pelayanan Prima',
                desc: 'Memberikan dukungan IT yang responsif, proaktif, dan profesional kepada seluruh stakeholder internal dan eksternal.'
              },
              {
                title: 'Sumber Daya Manusia',
                desc: 'Mengembangkan kompetensi SDM IT yang kompeten, adaptif, dan berinovasi untuk menghadapi tantangan teknologi masa depan.'
              }
            ].map((item, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg border">
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* KPI Dashboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="h-5 w-5" />
            <span>Key Performance Indicators (KPI) 2024</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {kpiData.map((kpi, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{kpi.target}</h4>
                  <div className={`p-1 rounded-full ${
                    kpi.status === 'exceeded' ? 'bg-green-100' : 
                    kpi.status === 'achieved' ? 'bg-blue-100' : 'bg-yellow-100'
                  }`}>
                    <CheckCircle className={`h-4 w-4 ${
                      kpi.status === 'exceeded' ? 'text-green-600' : 
                      kpi.status === 'achieved' ? 'text-blue-600' : 'text-yellow-600'
                    }`} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Target:</span>
                    <span className="text-sm font-medium">{kpi.value}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Pencapaian:</span>
                    <span className={`text-sm font-bold ${
                      kpi.status === 'exceeded' ? 'text-green-600' : 
                      kpi.status === 'achieved' ? 'text-blue-600' : 'text-yellow-600'
                    }`}>{kpi.achievement}</span>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500 mt-2">{kpi.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sasaran Mutu */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>Sasaran Mutu 2024</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sasaranMutu.map((sasaran, index) => (
              <div key={index} className="space-y-3">
                <h4 className="font-semibold text-gray-900 pb-2 border-b">
                  {sasaran.kategori}
                </h4>
                <ul className="space-y-2">
                  {sasaran.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Timeline & Monitoring */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>Timeline Monitoring & Review</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { period: 'Q1 2024', status: 'completed', progress: '100%' },
              { period: 'Q2 2024', status: 'completed', progress: '100%' },
              { period: 'Q3 2024', status: 'in-progress', progress: '75%' },
              { period: 'Q4 2024', status: 'planned', progress: '0%' }
            ].map((quarter, index) => (
              <div key={index} className="p-4 border rounded-lg text-center">
                <h4 className="font-semibold text-gray-900 mb-2">{quarter.period}</h4>
                <div className={`p-2 rounded-full text-sm ${
                  quarter.status === 'completed' ? 'bg-green-100 text-green-700' :
                  quarter.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {quarter.status === 'completed' ? 'Selesai' :
                   quarter.status === 'in-progress' ? 'Berjalan' : 'Direncanakan'}
                </div>
                <p className="text-sm text-gray-600 mt-2">Progress: {quarter.progress}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VisiMisi;
