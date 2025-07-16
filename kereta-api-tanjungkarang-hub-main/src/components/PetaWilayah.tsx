
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Map, MapPin, Building, Train, Route, Navigation } from 'lucide-react';

const PetaWilayah = () => {
  const wilayahOperasional = [
    {
      provinsi: 'Lampung',
      ibuKota: 'Bandar Lampung',
      luas: '34,623.80 km²',
      stasiun: 32,
      jalurUtama: ['Lintas Selatan', 'Lintas Timur', 'Lintas Barat'],
      kotaPenting: ['Bandar Lampung', 'Metro', 'Kotabumi', 'Krui', 'Kalianda'],
      koordinat: '-4.5585, 105.4068'
    },
    {
      provinsi: 'Bengkulu',
      ibuKota: 'Bengkulu',
      luas: '19,919.33 km²',
      stasiun: 8,
      jalurUtama: ['Lintas Barat'],
      kotaPenting: ['Bengkulu', 'Curup', 'Argamakmur', 'Manna'],
      koordinat: '-3.7928, 102.2608'
    },
    {
      provinsi: 'Sumatera Selatan (Sebagian)',
      ibuKota: 'Palembang',
      luas: '15,000 km² (area coverage)',
      stasiun: 5,
      jalurUtama: ['Lintas Timur'],
      kotaPenting: ['Lubuklinggau', 'Muara Enim', 'Lahat'],
      koordinat: '-3.3194, 102.8894'
    }
  ];

  const jalurKereta = [
    {
      nama: 'Lintas Selatan',
      rute: 'Tanjungkarang - Kalianda - Bakauheni',
      panjang: '158 km',
      tipeRel: 'R54',
      status: 'Operasional',
      stasiun: ['Tanjungkarang', 'Bandar Lampung', 'Kedondong', 'Kalianda', 'Bakauheni'],
      layanan: ['Penumpang', 'Barang'],
      kecepatan: '90 km/h'
    },
    {
      nama: 'Lintas Timur',
      rute: 'Tanjungkarang - Kotabumi - Lubuklinggau',
      panjang: '234 km',
      tipeRel: 'R54',
      status: 'Operasional',
      stasiun: ['Tanjungkarang', 'Metro', 'Blambangan Umpu', 'Kotabumi', 'Lubuklinggau'],
      layanan: ['Penumpang', 'Barang'],
      kecepatan: '80 km/h'
    },
    {
      nama: 'Lintas Barat',
      rute: 'Bandar Lampung - Krui - Bengkulu',
      panjang: '456 km',
      tipeRel: 'R42/R54',
      status: 'Operasional Terbatas',
      stasiun: ['Bandar Lampung', 'Liwa', 'Krui', 'Manna', 'Bengkulu'],
      layanan: ['Penumpang'],
      kecepatan: '70 km/h'
    }
  ];

  const infrastrukturPenting = [
    {
      nama: 'Stasiun Tanjungkarang',
      tipe: 'Stasiun Besar',
      fungsi: 'Hub Utama Regional',
      fasilitas: ['12 Platform', '32 CCTV', '12 Counter Tiket', 'Area Komersial'],
      koordinat: '-5.4476, 105.2681'
    },
    {
      nama: 'Dipo Tanjungkarang',
      tipe: 'Fasilitas Perawatan',
      fungsi: 'Maintenance & Repair',
      fasilitas: ['Workshop', 'Gudang Suku Cadang', '28 CCTV', 'Fuel Station'],
      koordinat: '-5.4501, 105.2598'
    },
    {
      nama: 'Kantor Divre IV',
      tipe: 'Kantor Regional',
      fungsi: 'Pusat Administrasi',
      fasilitas: ['Data Center', 'Control Room', '24 CCTV', 'Communication Hub'],
      koordinat: '-5.4492, 105.2610'
    },
    {
      nama: 'Terminal Bakauheni',
      tipe: 'Terminal Ferry',
      fungsi: 'Intermodal Transit',
      fasilitas: ['Ferry Terminal', 'Parking Area', '16 CCTV', 'Cargo Handling'],
      koordinat: '-5.8789, 105.7339'
    }
  ];

  const statistikWilayah = {
    totalLuas: '69,543.13 km²',
    totalStasiun: 45,
    totalJalur: '848 km',
    totalKabupaten: 23,
    populasiTerlayani: '12.5 juta jiwa',
    persentaseCoverage: '78%'
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl">
        <h1 className="text-3xl font-bold mb-2">Peta Wilayah Operasional</h1>
        <p className="text-blue-100 text-lg">
          Cakupan Wilayah dan Infrastruktur Kereta Api Divre IV Tanjungkarang
        </p>
      </div>

      {/* Statistik Wilayah */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <Map className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-600">Total Luas</p>
            <p className="text-lg font-bold text-gray-900">{statistikWilayah.totalLuas}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Building className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-600">Stasiun</p>
            <p className="text-lg font-bold text-gray-900">{statistikWilayah.totalStasiun}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Route className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-600">Total Jalur</p>
            <p className="text-lg font-bold text-gray-900">{statistikWilayah.totalJalur}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <MapPin className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-600">Kabupaten</p>
            <p className="text-lg font-bold text-gray-900">{statistikWilayah.totalKabupaten}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Navigation className="h-8 w-8 text-red-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-600">Populasi</p>
            <p className="text-lg font-bold text-gray-900">{statistikWilayah.populasiTerlayani}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Train className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-600">Coverage</p>
            <p className="text-lg font-bold text-gray-900">{statistikWilayah.persentaseCoverage}</p>
          </CardContent>
        </Card>
      </div>

      {/* Wilayah Operasional */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span>Wilayah Operasional</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {wilayahOperasional.map((wilayah, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">{wilayah.provinsi}</h4>
                
                <div className="space-y-2 text-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-gray-600">Ibu Kota:</p>
                      <p className="font-medium">{wilayah.ibuKota}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Luas:</p>
                      <p className="font-medium">{wilayah.luas}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gray-600">Jumlah Stasiun:</p>
                    <p className="font-medium text-blue-600 text-lg">{wilayah.stasiun}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 mb-1">Jalur Utama:</p>
                    <div className="flex flex-wrap gap-1">
                      {wilayah.jalurUtama.map((jalur, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                          {jalur}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 mb-1">Kota Penting:</p>
                    <p className="font-medium text-xs">{wilayah.kotaPenting.join(', ')}</p>
                  </div>
                  
                  <div className="pt-2 border-t">
                    <p className="text-gray-500 text-xs">Koordinat: {wilayah.koordinat}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Jalur Kereta Api */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Train className="h-5 w-5" />
            <span>Jalur Kereta Api</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {jalurKereta.map((jalur, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">{jalur.nama}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    jalur.status === 'Operasional' ? 'bg-green-100 text-green-700' :
                    jalur.status === 'Operasional Terbatas' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {jalur.status}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Rute:</p>
                    <p className="font-medium">{jalur.rute}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Panjang:</p>
                    <p className="font-medium">{jalur.panjang}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Tipe Rel:</p>
                    <p className="font-medium">{jalur.tipeRel}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Kec. Maks:</p>
                    <p className="font-medium">{jalur.kecepatan}</p>
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600 mb-1">Stasiun:</p>
                      <p className="font-medium text-xs">{jalur.stasiun.join(' → ')}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Layanan:</p>
                      <div className="flex flex-wrap gap-1">
                        {jalur.layanan.map((layanan, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {layanan}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Infrastruktur Penting */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Building className="h-5 w-5" />
            <span>Infrastruktur Penting</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {infrastrukturPenting.map((infra, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">{infra.nama}</h4>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                    {infra.tipe}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 mb-3">{infra.fungsi}</p>
                
                <div>
                  <p className="text-gray-600 text-sm mb-2">Fasilitas:</p>
                  <div className="grid grid-cols-2 gap-1">
                    {infra.fasilitas.map((fasilitas, idx) => (
                      <div key={idx} className="text-xs bg-gray-50 p-1 rounded">
                        • {fasilitas}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t">
                  <p className="text-gray-500 text-xs">Koordinat: {infra.koordinat}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Informasi Geografis */}
      <Card>
        <CardHeader>
          <CardTitle>Informasi Geografis & Strategis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Posisi Strategis</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Penghubung Jawa-Sumatera</li>
                <li>• Gateway ke Pulau Jawa melalui Bakauheni</li>
                <li>• Akses ke pantai barat Sumatera</li>
                <li>• Koridor ekonomi regional</li>
                <li>• Hub pariwisata pantai selatan</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Karakteristik Geografis</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Dataran rendah pesisir</li>
                <li>• Pegunungan Bukit Barisan</li>
                <li>• Pantai Samudera Hindia</li>
                <li>• Lembah sungai Way Sekampung</li>
                <li>• Hutan tropis dan perkebunan</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Tantangan Operasional</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Terrain berbukit dan berkelok</li>
                <li>• Cuaca tropis dengan musim hujan</li>
                <li>• Jarak antar stasiun yang jauh</li>
                <li>• Akses remote area terbatas</li>
                <li>• Maintenance infrastruktur di area terpencil</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Coverage Map Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Peta Interaktif Wilayah</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 rounded-lg p-8 text-center min-h-96 flex items-center justify-center">
            <div className="text-gray-500">
              <Map className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Peta Interaktif</h3>
              <p className="text-sm">
                Peta interaktif akan menampilkan seluruh wilayah operasional,<br/>
                jalur kereta api, stasiun, dan infrastruktur pendukung<br/>
                dengan teknologi mapping real-time.
              </p>
              <div className="mt-4 text-xs space-y-1">
                <p>• Real-time tracking lokomotif</p>
                <p>• Status operasional stasiun</p>
                <p>• Informasi cuaca dan kondisi jalur</p>
                <p>• Integration dengan sistem monitoring</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PetaWilayah;
