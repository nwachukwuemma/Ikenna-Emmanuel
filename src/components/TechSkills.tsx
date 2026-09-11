import { 
  ShieldCheck, 
  Terminal,
  Layers,
  Network,
  Binary,
  CheckCircle2
} from 'lucide-react';
import { SkillGroup } from '../types';

interface TechSkillsProps {
  skillGroups: SkillGroup[];
}

export const TechSkills = ({ skillGroups }: TechSkillsProps) => {

  const operationalDomains = [
    {
      title: 'SIEM & Threat Telemetry',
      icon: ShieldCheck,
      description: 'Log ingestion, search processing, and endpoint event correlation.',
      tools: [
        { name: 'Splunk Enterprise', role: 'Daily Driver', note: 'Universal Forwarder configuration, SPL query crafting, dashboarding, and alert tuning' },
        { name: 'Sysmon (System Monitor)', role: 'Endpoint', note: 'Monitoring process creation (Event ID 1), network connections (ID 3), and DLL injection' },
        { name: 'Windows Event Viewer', role: 'Triage', note: 'Security log audits, logon events (4624/4625), and privilege escalation tracking' },
        { name: 'Snort IDS', role: 'Network IDS', note: 'Custom rule writing and signature-based packet pattern matching' }
      ]
    },
    {
      title: 'Network Defense & Packet Analysis',
      icon: Network,
      description: 'Host and edge network visibility, segmentation, and protocol forensics.',
      tools: [
        { name: 'Wireshark', role: 'Forensics', note: 'Deep packet inspection (DPI), TCP stream reassembly, TLS handshake review, and PCAP carving' },
        { name: 'pfSense Firewall', role: 'Edge Gateway', note: 'Multi-subnet isolation, WAN/LAN/DMZ routing rules, NAT policies, and traffic filtering' },
        { name: 'Nmap', role: 'Reconnaissance', note: 'Service discovery, OS fingerprinting, vulnerability scanning, and port enumeration' },
        { name: 'NetExec / CrackMapExec', role: 'Auditing', note: 'Network share enumeration, SMB signing checks, and credential validation in labs' }
      ]
    },
    {
      title: 'Systems, Identity & Lab Architecture',
      icon: Layers,
      description: 'Enterprise directory services, domain hardening, and virtualization environments.',
      tools: [
        { name: 'Active Directory (AD DS)', role: 'Identity', note: 'Forest deployment, OU structuring, user accounts, and security group administration' },
        { name: 'Group Policy (GPO)', role: 'Hardening', note: 'Centralized password policies, AppLocker rules, and audit policy enforcement' },
        { name: 'Windows Server 2022', role: 'Infrastructure', note: 'Domain Controller provisioning, DNS, DHCP, and role-based permissions' },
        { name: 'Linux (Ubuntu/Kali)', role: 'Host Security', note: 'Bash scripting, log inspection (/var/log), file permission hardening (chmod/chown)' },
        { name: 'VirtualBox & VMware', role: 'Virtual Labs', note: 'Building isolated multi-VM host-only subnets for attack-and-defend simulations' }
      ]
    },
    {
      title: 'Automation & Threat Intelligence',
      icon: Binary,
      description: 'Incident triage pipelines, scriptable threat scoring, and artifact decoding.',
      tools: [
        { name: 'Python', role: 'Scripting', note: 'Automating repetitive SOC tasks, parsing email headers with regex, and building triage bots' },
        { name: 'CrewAI Framework', role: 'Multi-Agent', note: 'Orchestrating autonomous agents for domain reputation checks and threat summarization' },
        { name: 'CyberChef', role: 'Artifact Decoding', note: 'Base64 decoding, XOR transformation, URL defanging, and hex dump inspection' },
        { name: 'Threat Intel APIs', role: 'Enrichment', note: 'VirusTotal, AbuseIPDB, and AlienVault OTX querying for IOC correlation' }
      ]
    }
  ];

  const engineeringPrinciples = [
    {
      title: 'Zero-Trust Architecture',
      description: 'Never trust, always verify. Enforcing strict identity checks, continuous evaluation, and least-privilege access at every network hop.'
    },
    {
      title: 'Homeostatic Defense Loops',
      description: 'Translating biological systems-thinking: establishing steady-state network baselines, detecting antigenic anomalies, and executing rapid containment.'
    },
    {
      title: 'Layered Defense-in-Depth',
      description: 'Perimeter firewalls, host-based firewalls, Sysmon telemetry, and centralized SIEM correlation so no single point of failure goes unnoticed.'
    },
    {
      title: 'Documented & Auditable Labs',
      description: 'Every lab topology is documented with network diagrams, step-by-step reproduction notes, and exportable configs for transparent verification.'
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-20 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-block w-2 h-2 rounded-full bg-[#2563eb]" />
            <span className="text-sm font-bold uppercase tracking-wider text-[#2563eb]">
              Technical Arsenal
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Security Tooling &amp; Operational Domains
          </h2>
          <p className="text-gray-600 text-base mt-1 max-w-xl">
            Hands-on technologies used across security operations, enterprise directory infrastructure, packet inspection, and automated triage.
          </p>
        </div>

        {/* Operational Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {operationalDomains.map((domain) => {
            const Icon = domain.icon;
            return (
              <div
                key={domain.title}
                className="relative overflow-hidden border border-gray-200 hover:border-blue-200 hover:shadow-md rounded-2xl p-5 sm:p-6 transition-all space-y-4 group"
              >
                {/* Background Image with Netflix-style fade */}
                <div className="absolute inset-0 z-0">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop')` }}
                  />
                  {/* Heavy dark gradient overlay to ensure text is readable, fading out into black/dark gray */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/90 via-[#111111]/85 to-black/95" />
                </div>

                {/* Content Container (z-10 to stay above bg) */}
                <div className="relative z-10">
                  {/* Domain Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-blue-900/40 text-blue-400 border border-blue-500/30 shrink-0 backdrop-blur-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white drop-shadow-md">
                        {domain.title}
                      </h3>
                      <p className="text-sm text-gray-200 mt-0.5 drop-shadow-sm">
                        {domain.description}
                      </p>
                    </div>
                  </div>

                  {/* Tools List */}
                  <div className="space-y-2 pt-1">
                    {domain.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-sm space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-gray-100 font-mono">
                            {tool.name}
                          </span>
                          <span className="text-xs font-semibold text-gray-200 px-2 py-0.5 rounded-md bg-black/50 border border-white/20">
                            {tool.role}
                          </span>
                        </div>
                        <p className="text-gray-200 text-sm leading-relaxed">
                          {tool.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Philosophy Cards */}
        <div className="bg-black border border-[#222222] rounded-2xl p-6 sm:p-8 space-y-5 shadow-lg">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-[#2563eb] block">
              Methodology &amp; Architecture
            </span>
            <h3 className="text-lg font-bold text-white mt-0.5">
              Core Principles in Security Operations
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {engineeringPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="bg-[#111111] border border-[#222222] rounded-xl p-4 space-y-1.5"
              >
                <div className="text-sm font-bold text-gray-100 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2563eb]" />
                  <span>{principle.title}</span>
                </div>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
