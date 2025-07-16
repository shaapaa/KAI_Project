
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Profile from '../components/Profile';
import VisiMisi from '../components/VisiMisi';
import StrukturOrganisasi from '../components/StrukturOrganisasi';
import InfrastrukturJaringan from '../components/InfrastrukturJaringan';
import DataStasiun from '../components/DataStasiun';
import DataCCTV from '../components/DataCCTV';
import LayananTicketing from '../components/LayananTicketing';
import RekapitulasiTiket from '../components/RekapitulasiTiket';
import AplikasiInternal from '../components/AplikasiInternal';
import DataLokotrack from '../components/DataLokotrack';
import PetaWilayah from '../components/PetaWilayah';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 p-6 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profil" element={<Profile />} />
              <Route path="/visi-misi" element={<VisiMisi />} />
              <Route path="/struktur-organisasi" element={<StrukturOrganisasi />} />
              <Route path="/infrastruktur-jaringan" element={<InfrastrukturJaringan />} />
              <Route path="/data-stasiun" element={<DataStasiun />} />
              <Route path="/data-cctv" element={<DataCCTV />} />
              <Route path="/layanan-ticketing" element={<LayananTicketing />} />
              <Route path="/rekapitulasi-tiket" element={<RekapitulasiTiket />} />
              <Route path="/aplikasi-internal" element={<AplikasiInternal />} />
              <Route path="/data-lokotrack" element={<DataLokotrack />} />
              <Route path="/peta-wilayah" element={<PetaWilayah />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
