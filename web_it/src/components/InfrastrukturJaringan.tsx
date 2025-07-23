
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Network, Server, Shield, Wifi, Router, Database, Monitor, Globe } from 'lucide-react';

const InfrastrukturJaringan = () => {
  const topologiData = [
    {
      lokasi: 'Bandar Lampung (Pusat)',
      jenis: 'Core Network',
      perangkat: ['Cisco ASR 9000', 'Juniper MX Series', 'Dell PowerEdge R750'],
      bandwidth: '10 Gbps',
      status: 'operational',
      uptime: '99.9%'
    },
    {
      lokasi: 'Kotabumi',
      jenis: 'Distribution',
      perangkat: ['Cisco Catalyst 9300', 'HP ProLiant DL380', 'Fortinet FortiGate'],
      bandwidth: '1 Gbps',
      status: 'operational',
      uptime: '99.7%'
    },
    {
      lokasi: 'Krui',
      jenis: 'Access Network',
      perangkat: ['Ubiquiti EdgeSwitch', 'Mikrotik RouterBoard', 'TP-Link Access Point'],
      bandwidth: '100 Mbps',
      status: 'operational',
      uptime: '99.5%'
    },
    {
      lokasi: 'Blambangan Umpu',
      jenis: 'Remote Access',
      perangkat: ['Ubiquiti UniFi', 'Mikrotik hEX', 'Cambium Networks'],
      bandwidth: '50 Mbps',
      status: 'maintenance',
      uptime: '98.2%'
    }
  ];

  const perangkatJaringan = [
    {
      kategori: 'Core Router',
      brand: 'Cisco',
      model: 'ASR 9006',
      jumlah: 3,
      lokasi: 'Data Center Utama',
      kondisi: 'Excellent'
    },
    {
      kategori: 'Distribution Switch',
      brand: 'Juniper',
      model: 'EX4300-48T',
      jumlah: 8,
      lokasi: 'Berbagai Stasiun',
      kondisi: 'Good'
    },
    {
      kategori: 'Access Switch',
      brand: 'HP/Aruba',
      model: 'CX 6300',
      jumlah: 45,
      lokasi: 'Seluruh Stasiun',
      kondisi: 'Good'
    },
    {
      kategori: 'Wireless Controller',
      brand: 'Ubiquiti',
      model: 'Cloud Key Gen2+',
      jumlah: 12,
      lokasi: 'Regional Centers',
      kondisi: 'Excellent'
    },
    {
      kategori: 'Firewall',
      brand: 'Fortinet',
      model: 'FortiGate 600E',
      jumlah: 6,
      lokasi: 'Distributed',
      kondisi: 'Excellent'
    },
    {
      kategori: 'Load Balancer',
      brand: 'F5',
      model: 'BIG-IP i4800',
      jumlah: 2,
      lokasi: 'Data Center',
      kondisi: 'Good'
    }
  ];

  const konektivitas = [
    {
      provider: 'Telkom Indonesia',
      jenis: 'Fiber Optic',
      bandwidth: '10 Gbps',
      coverage: 'Primary Link',
      sla: '99.9%',
      status: 'active'
    },
    {
      provider: 'Indosat Ooredoo',
      jenis: 'Fiber Optic',
      bandwidth: '5 Gbps',
      coverage: 'Backup Link',
      sla: '99.5%',
      status: 'active'
    },
    {
      provider: 'XL Axiata',
      jenis: 'Microwave',
      bandwidth: '1 Gbps',
      coverage: 'Remote Sites',
      sla: '99.0%',
      status: 'active'
    },
    {
      provider: 'Biznet',
      jenis: 'Metro Ethernet',
      bandwidth: '2 Gbps',
      coverage: 'Urban Areas',
      sla: '99.5%',
      status: 'active'
    }
  ];

  const monitoring = [
    { parameter: 'Network Uptime', value: '99.8%', status: 'normal', target: '99.5%' },
    { parameter: 'Bandwidth Utilization', value: '65%', status: 'normal', target: '< 80%' },
    { parameter: 'Latency Average', value: '15ms', status: 'normal', target: '< 20ms' },
    { parameter: 'Packet Loss', value: '0.02%', status: 'normal', target: '< 0.1%' },
    { parameter: 'Security Incidents', value: '2', status: 'normal', target: '< 5' },
    { parameter: 'Power Redundancy', value: '100%', status: 'normal', target: '100%' }
  ];

  return (
    <div className="space-y-6 mt-11">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl">
        <h1 className="text-3xl font-bold mb-2">Infrastruktur Jaringan</h1>
        <p className="text-blue-100 text-lg">
          Pemetaan Topologi, Perangkat & Monitoring Jaringan IT Divre IV
        </p>
      </div>

      {/* Network Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { title: 'Total Sites', value: '45', icon: Globe, color: 'blue' },
          { title: 'Active Devices', value: '234', icon: Router, color: 'green' },
          { title: 'Bandwidth Total', value: '18.15 Gbps', icon: Wifi, color: 'purple' },
          { title: 'Uptime Average', value: '99.8%', icon: Monitor, color: 'orange' }
        ].map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Network Topology */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Network className="h-5 w-5" />
            <span>Topologi Jaringan Regional</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topologiData.map((node, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">{node.lokasi}</h4>
                    <p className="text-sm text-gray-600">{node.jenis}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      node.status === 'operational' ? 'bg-green-100 text-green-700' :
                      node.status === 'maintenance' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {node.status === 'operational' ? 'Operational' :
                       node.status === 'maintenance' ? 'Maintenance' : 'Down'}
                    </span>
                    <span className="text-sm font-medium">{node.uptime}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Perangkat Utama:</p>
                    <ul className="text-sm text-gray-600">
                      {node.perangkat.map((device, idx) => (
                        <li key={idx}>• {device}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Bandwidth:</p>
                    <p className="text-sm text-gray-600">{node.bandwidth}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Network Equipment */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Server className="h-5 w-5" />
            <span>Inventori Perangkat Jaringan</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Kategori</th>
                  <th className="text-left p-3">Brand/Model</th>
                  <th className="text-left p-3">Jumlah</th>
                  <th className="text-left p-3">Lokasi</th>
                  <th className="text-left p-3">Kondisi</th>
                </tr>
              </thead>
              <tbody>
                {perangkatJaringan.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{item.kategori}</td>
                    <td className="p-3">{item.brand} {item.model}</td>
                    <td className="p-3">{item.jumlah} unit</td>
                    <td className="p-3">{item.lokasi}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.kondisi === 'Excellent' ? 'bg-green-100 text-green-700' :
                        item.kondisi === 'Good' ? 'bg-blue-100 text-blue-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {item.kondisi}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Connectivity & Providers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="h-5 w-5" />
            <span>Konektivitas & Provider</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {konektivitas.map((provider, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{provider.provider}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    provider.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {provider.status === 'active' ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <p><span className="font-medium">Jenis:</span> {provider.jenis}</p>
                  <p><span className="font-medium">Bandwidth:</span> {provider.bandwidth}</p>
                  <p><span className="font-medium">Coverage:</span> {provider.coverage}</p>
                  <p><span className="font-medium">SLA:</span> {provider.sla}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Network Monitoring */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Monitor className="h-5 w-5" />
            <span>Real-time Network Monitoring</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {monitoring.map((metric, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{metric.parameter}</h4>
                  <div className={`w-3 h-3 rounded-full ${
                    metric.status === 'normal' ? 'bg-green-500' :
                    metric.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></div>
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-bold text-gray-900">{metric.value}</p>
                  <p className="text-sm text-gray-600">Target: {metric.target}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Security Infrastructure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <span>Infrastruktur Keamanan</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Firewall Protection</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 6 unit Fortinet FortiGate distributed</li>
                <li>• Intrusion Detection System (IDS)</li>
                <li>• Deep Packet Inspection (DPI)</li>
                <li>• 24/7 threat monitoring</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Access Control</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 802.1X network authentication</li>
                <li>• RADIUS server integration</li>
                <li>• VPN remote access</li>
                <li>• Network segmentation</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Monitoring & Backup</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• SIEM solution deployment</li>
                <li>• Configuration backup daily</li>
                <li>• Redundant power supply</li>
                <li>• Disaster recovery plan</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfrastrukturJaringan;
