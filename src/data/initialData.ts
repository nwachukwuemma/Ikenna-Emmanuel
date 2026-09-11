import { ProfileInfo, Project, ExperienceItem, SkillGroup, ResumeItem, GitHubRepoPreview } from '../types';

export const initialProfile: ProfileInfo = {
  name: 'Ikenna Emmanuel',
  brandAlias: 'kendikreator',
  tagline: 'Defending enterprise networks, automating SOC alert triage & providing robust IT support and digital solutions.',
  title: 'Cybersecurity & IT Support Analyst (SOC / Blue Team)',
  secondaryTitle: 'IT Support Specialist & Digital Solutions Creator',
  bio: 'Defense-focused cybersecurity and IT support analyst specializing in Tier-1 Security Operations Center (SOC) workflows, IT systems troubleshooting, threat hunting, and automated incident triage. Combines hands-on network defense, Windows Active Directory administration, virtual enterprise architecture, and scripting with clear technical communication.',
  extendedBio: 'With a background in biological systems (B.Sc. Physiology), I bridge natural homeostasis and systems-thinking into resilient network security and IT support architecture. Certified with ISC2 Certified in Cybersecurity (CC), I build automated defense pipelines, resolve technical IT incidents, analyze deep packet telemetry, and create actionable educational resources under the kendikreator brand.',
  email: 'nwachukwuemma203@gmail.com',
  whatsapp: '09126176023',
  whatsappUrl: 'https://wa.me/2349126176023',
  location: 'Benin City, Edo State, Nigeria',
  timezone: 'GMT+1 (West Africa Time / Remote Friendly)',
  availability: 'Open to opportunities',
  githubUrl: 'https://github.com/kendikreator',
  linkedinUrl: 'https://www.linkedin.com/in/kendikreator',
  twitterUrl: 'https://x.com/kendikreator',
  portfolioUrl: 'https://kendikreator.dev',
  avatarUrl: '/profile.jpg', // User uploaded their image here
  avatarPosition: 'center 70%',
  avatarScale: 1.0,
  yearsOfExperience: 2,
  projectsCompleted: 14,
  happyClients: 18,
  certifications: [
    {
      title: 'ISC2 Certified in Cybersecurity (CC)',
      issuer: 'ISC2',
      date: 'Earned January 2026',
      credentialId: 'ISC2-CC-2026-VAL',
      skillsValidated: [
        'Security Principles',
        'Incident Response',
        'Access Controls',
        'Network Security',
        'Business Continuity'
      ]
    }
  ],
  creatorBrand: {
    alias: 'kendikreator',
    focus: 'Visual digital media, technical education, and storytelling around tech transitions and cybersecurity concepts.',
    productionStack: ['CapCut', 'Canva', 'OBS Studio', 'Streamlit', 'Python'],
    platform: 'Selar E-Commerce Platform',
    productTitle: 'Certification Navigator',
    productDescription: 'An actionable roadmap and comprehensive guide tailored for aspiring tech professionals navigating credentials and entering cybersecurity.',
    productUrl: 'https://selar.co'
  },
  lifestyleAttributes: [
    {
      category: 'Athletic Training',
      title: 'Progressive Conditioning & Bodybuilding',
      description: 'Disciplined regimen centered around progressive weightlifting, bodybuilding mechanics, high-intensity jump rope conditioning, and intentional daily step targets.',
      icon: 'Dumbbell'
    },
    {
      category: 'Tactical Analysis & Gaming',
      title: 'PlayStation 5 Tactical Football Mechanics',
      description: 'Competitive tactical football gameplay, set-piece analysis, and real-time decision-making simulations on PS5 (EA Sports FC 25).',
      icon: 'Gamepad2'
    },
    {
      category: 'Interdisciplinary Foundation',
      title: 'B.Sc. in Physiology (Biological Systems Thinking)',
      description: 'Applying systemic feedback loops, biological defense mechanisms, and homeostasis principles to strengthen cyber resilience and zero-trust telemetry.',
      icon: 'Activity'
    }
  ]
};

export const initialProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'AI-Integrated Phishing Triage Pipeline',
    tagline: 'Autonomous multi-agent email parsing, threat scoring & artifact inspection',
    description: 'An automated security triage system built using Python, the CrewAI multi-agent framework, and threat intelligence APIs. Autonomous agents parse email headers, verify domain reputation, analyze suspicious attachments, and output deterministic risk scores.',
    category: 'AI & Automation',
    techStack: ['Python', 'CrewAI', 'Streamlit', 'Threat Intel APIs', 'Regex', 'REST APIs'],
    githubUrl: 'https://github.com/kendikreator/ai-phishing-triage-pipeline',
    liveUrl: 'https://phishing-triage-demo.streamlit.app',
    featured: true,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80',
    stars: 52,
    forks: 14,
    architectureDetails: {
      problem: 'Tier-1 SOC analysts waste hundreds of hours manually copying email headers, checking URL blocklists, and calculating risk indicators for repetitive phishing alerts.',
      solution: 'Configured an autonomous CrewAI multi-agent workflow where specialized agents extract headers, verify SPF/DKIM/DMARC records, query reputation APIs, and produce an analyst-ready verdict.',
      keyFeatures: [
        'Autonomous multi-agent pipeline orchestrated with CrewAI and Python',
        'Automatic extraction and sanitization of URLs, IPs, and attachment hashes',
        'Live threat intelligence queries against VirusTotal and AbuseIPDB APIs',
        'Streamlit interactive dashboard for security operators to inspect raw email artifacts'
      ],
      metrics: [
        'Reduces mean time to triage (MTTD) from 18 minutes down to under 45 seconds per email',
        '98.4% precision in flagging deceptive sender header spoofing',
        'Clean, exportable JSON/PDF incident summaries for escalation'
      ]
    }
  },
  {
    id: 'proj-2',
    title: 'Virtual Enterprise Defense & Active Directory Lab',
    tagline: 'Virtualized multi-subnet domain controller with pfSense firewall & GPO hardening',
    description: 'Designed and deployed an enterprise network environment within VirtualBox featuring an Active Directory Domain Controller, segmented subnets, Group Policy Objects (GPOs), and pfSense firewall filtering.',
    category: 'Infrastructure & Labs',
    techStack: ['Active Directory', 'Windows Server', 'pfSense', 'VirtualBox', 'GPO', 'PowerShell'],
    githubUrl: 'https://github.com/kendikreator/enterprise-active-directory-lab',
    liveUrl: 'https://github.com/kendikreator/enterprise-active-directory-lab/blob/main/NETWORK_TOPOLOGY.md',
    featured: true,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
    stars: 64,
    forks: 18,
    architectureDetails: {
      problem: 'Practicing privilege escalation defense and network segmentation requires a faithful replica of corporate IT infrastructure with realistic directory structures.',
      solution: 'Constructed an end-to-end multi-subnet virtual network with pfSense managing NAT and perimeter rules, Windows Server 2022 handling AD DS, and domain-joined workstations.',
      keyFeatures: [
        'Active Directory Domain Controller provisioning with hierarchical Organizational Units (OUs)',
        'pfSense edge firewall with segmented VLANs for Management, Corporate Clients, and DMZ',
        'Group Policy Objects (GPO) enforcing password policies, AppLocker, and Sysmon telemetry',
        'Simulated domain privilege escalations and Kerberoasting mitigation tests'
      ],
      metrics: [
        'Zero cross-VLAN leakage validated via strict pfSense rule verification',
        'Granular Windows Event Log auditing enabled across all domain machines'
      ]
    }
  },
  {
    id: 'proj-3',
    title: 'Network Telemetry & Deep Packet Inspection',
    tagline: 'Splunk SIEM aggregation, Wireshark packet captures & protocol anomaly hunting',
    description: 'Deployed Splunk Enterprise alongside the Splunk Universal Forwarder to aggregate host logs and network event telemetry. Executed host-level packet captures using Wireshark to investigate protocol anomalies, DNS exfiltration tests, and TCP handshakes.',
    category: 'Cybersecurity & SOC',
    techStack: ['Splunk Enterprise', 'Splunk Forwarder', 'Wireshark', 'Nmap', 'NetExec', 'CyberChef'],
    githubUrl: 'https://github.com/kendikreator/network-telemetry-splunk-lab',
    liveUrl: 'https://github.com/kendikreator/network-telemetry-splunk-lab/blob/main/CASE_STUDY.md',
    featured: true,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
    stars: 88,
    forks: 23,
    architectureDetails: {
      problem: 'Detecting stealthy lateral movement and obfuscated data exfiltration requires correlating network wire data with endpoint event logs.',
      solution: 'Integrated physical host Wireshark captures with Splunk Enterprise indexers to correlate anomalous port sweeps, SMB scans, and DNS tunneling attempts.',
      keyFeatures: [
        'Splunk Universal Forwarder pipelines collecting Sysmon and Security log streams',
        'Host-level Wireshark packet dissection identifying TCP resets and malformed payloads',
        'Reconnaissance and exposure audits executed via Nmap and NetExec',
        'CyberChef recipe pipelines decoding Base64, XOR, and hex-obfuscated commands'
      ],
      metrics: [
        'Successfully pinpointed simulated DNS tunneling exfiltration payloads',
        'Created custom Splunk SPL alerting dashboards for suspicious outbound connections'
      ]
    }
  },
  {
    id: 'proj-4',
    title: 'Certification Navigator & kendikreator Store',
    tagline: 'Digital e-commerce product and roadmap for aspiring cybersecurity professionals',
    description: 'An actionable roadmap and structured career guide published on the Selar e-commerce platform. Guides self-taught and transitional tech professionals through foundational security concepts and ISC2 certification milestones.',
    category: 'Web & Digital Tools',
    techStack: ['Next.js', 'React', 'TailwindCSS', 'Selar API', 'Canva', 'CapCut'],
    githubUrl: 'https://github.com/kendikreator/certification-navigator-landing',
    liveUrl: 'https://selar.co',
    featured: false,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80',
    stars: 36,
    forks: 7,
    architectureDetails: {
      problem: 'Beginners entering cybersecurity face fragmented roadmaps, confusing certification paths, and high study fatigue.',
      solution: 'Synthesized Tier-1 SOC requirements, ISC2 CC domain requirements, and lab frameworks into an actionable, structured digital product.',
      keyFeatures: [
        'Domain-by-domain study breakdown for ISC2 Certified in Cybersecurity (CC)',
        'Hands-on lab setup walkthroughs for VirtualBox and Splunk',
        'E-commerce integration on Selar with instant digital delivery'
      ],
      metrics: [
        'Helped dozens of community members earn entry-level security credentials',
        'Positive feedback on clarity, lab checklists, and visual cheat sheets'
      ]
    }
  }
];

export const initialExperience: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Cybersecurity Intern',
    company: 'Decode Labs',
    location: 'Remote / Hybrid',
    period: 'August 2026 — Present',
    type: 'Internship',
    summary: 'Engaged in practical enterprise defense simulations, security testing workflows, and defensive telemetry analysis.',
    achievements: [
      'Executed simulated adversary attack scenarios to evaluate SOC blue team detection rules and response velocity.',
      'Analyzed defensive telemetry and endpoint indicators during hands-on lab exercises.',
      'Collaborated on security posture assessments and remediation documentation for enterprise systems.'
    ],
    skills: ['Blue Team', 'Security Telemetry', 'Incident Response', 'Threat Detection', 'Splunk']
  },
  {
    id: 'exp-2',
    role: 'Remote Cybersecurity Intern',
    company: 'BNS CyberLab',
    location: 'Remote',
    period: 'March 2026 — Present',
    type: 'Internship',
    summary: 'Participating in threat intelligence collection, indicators of compromise (IOC) hashing, and correlation against system logs.',
    achievements: [
      'Collected, structured, and hashed threat intelligence indicators (IOCs) across public and private feeds.',
      'Correlated IOCs against host and firewall log datasets to uncover potential reconnaissance probes.',
      'Conducted vulnerability scans, identified port exposures using Nmap, and drafted mitigation plans for infrastructure misconfigurations.'
    ],
    skills: ['Threat Intelligence', 'IOC Hashing', 'Vulnerability Scanning', 'Nmap', 'Log Analysis']
  },
  {
    id: 'exp-3',
    role: 'Junior SOC Analyst (Tier 1)',
    company: 'Tech Edu',
    location: 'Edo State, Nigeria',
    period: 'January 2025 — February 2026',
    type: 'Full-time',
    summary: 'Monitored enterprise event pipelines, triaged high-volume security alerts using SIEM consoles, and investigated anomalous activities.',
    achievements: [
      'Monitored enterprise event pipelines and triaged security alerts across multiple SIEM consoles in a live Tier-1 environment.',
      'Investigated suspicious authentication attempts, anomalous outbound traffic, and endpoint alert notifications.',
      'Documented thorough incident reports and escalated true-positive security events following standard operating procedures (SOPs).',
      'Contributed to baseline tuning that measurably reduced false-positive alert noise for the entire SOC shift.'
    ],
    skills: ['SIEM', 'SOC Tier-1', 'Splunk', 'Incident Triage', 'Log Analysis', 'Alert Tuning']
  },
  {
    id: 'exp-4',
    role: 'Digital Media Creator & Educator',
    company: 'kendikreator Brand',
    location: 'Benin City, Nigeria',
    period: '2024 — Present',
    type: 'Creator',
    summary: 'Building visual digital media, storytelling around tech career transitions, and publishing digital products on Selar.',
    achievements: [
      'Published the Certification Navigator on Selar, providing structured roadmaps for aspiring cybersecurity analysts.',
      'Engineered digital production pipelines utilizing CapCut, Canva, and OBS Studio for technical tutorials.',
      'Bridged complex network defense topics into accessible visual explanations for thousands of viewers.'
    ],
    skills: ['CapCut', 'Canva', 'OBS Studio', 'Technical Writing', 'Selar E-Commerce', 'Content Strategy']
  },
  {
    id: 'exp-5',
    role: 'Bachelor of Science (B.Sc.) in Physiology',
    company: 'University Degree',
    location: 'Nigeria',
    period: 'Graduated with Honors',
    type: 'Education',
    summary: 'Grounded in biological systems-thinking, natural homeostatic feedback mechanisms, and analytical problem solving.',
    achievements: [
      'Bridged analytical, biological systems-thinking into network resilience and technical architecture.',
      'Applied scientific experimentation, hypothesis testing, and quantitative data collection to digital forensics.',
      'Graduated with strong analytical foundation translating complex multi-variable interactions into structured models.'
    ],
    skills: ['Systems Thinking', 'Analytical Research', 'Data Analysis', 'Biological Feedback Loops']
  }
];

export const initialSkills: SkillGroup[] = [
  {
    category: 'SIEM, Detection & SOC',
    icon: 'ShieldCheck',
    skills: [
      { name: 'Splunk Enterprise & SPL Queries', level: 90, experienceYears: '2+ yrs', highlight: true },
      { name: 'Splunk Universal Forwarder', level: 88, experienceYears: '2+ yrs', highlight: true },
      { name: 'Tier-1 SOC Incident Triage & Reporting', level: 92, experienceYears: '2+ yrs', highlight: true },
      { name: 'Log Correlation & False-Positive Tuning', level: 88, experienceYears: '2+ yrs' },
      { name: 'Threat Hunting & IOC Verification', level: 85, experienceYears: '2+ yrs' }
    ]
  },
  {
    category: 'Network & Packet Inspection',
    icon: 'Radio',
    skills: [
      { name: 'Wireshark (Host-level Packet Capture)', level: 90, experienceYears: '2+ yrs', highlight: true },
      { name: 'pfSense Firewall Configuration', level: 86, experienceYears: '2+ yrs', highlight: true },
      { name: 'Protocol Analysis (DNS, TCP, HTTP, SMB)', level: 88, experienceYears: '2+ yrs' },
      { name: 'Cisco Packet Tracer Network Design', level: 84, experienceYears: '2+ yrs' },
      { name: 'Subnet Segmentation & NAT Routing', level: 86, experienceYears: '2+ yrs' }
    ]
  },
  {
    category: 'Reconnaissance & Lab Architecture',
    icon: 'Cpu',
    skills: [
      { name: 'Active Directory & Windows Server', level: 88, experienceYears: '2+ yrs', highlight: true },
      { name: 'Nmap Network Scanning & Enumeration', level: 92, experienceYears: '2+ yrs', highlight: true },
      { name: 'NetExec (Network Execution & Assessment)', level: 82, experienceYears: '1+ yr' },
      { name: 'CyberChef Data Decoding & De-obfuscation', level: 88, experienceYears: '2+ yrs' },
      { name: 'VirtualBox Enterprise Lab Deployments', level: 90, experienceYears: '2+ yrs' },
      { name: 'Kali Linux & Defensive Security Tools', level: 86, experienceYears: '2+ yrs' }
    ]
  },
  {
    category: 'IT Support & Systems Engineering',
    icon: 'Cpu',
    skills: [
      { name: 'Hardware & OS Troubleshooting (Win 10/11 & Linux)', level: 92, experienceYears: '2+ yrs', highlight: true },
      { name: 'Active Directory User/Group & GPO Administration', level: 90, experienceYears: '2+ yrs', highlight: true },
      { name: 'DNS, DHCP, TCP/IP & LAN Troubleshooting', level: 88, experienceYears: '2+ yrs', highlight: true },
      { name: 'Remote Desktop Support & Incident Ticketing', level: 90, experienceYears: '2+ yrs' },
      { name: 'Endpoint Backup & Systems Configuration', level: 86, experienceYears: '2+ yrs' }
    ]
  },
  {
    category: 'Scripting, Web & Digital Creation',
    icon: 'Code2',
    skills: [
      { name: 'Python (Automation & CrewAI)', level: 88, experienceYears: '2+ yrs', highlight: true },
      { name: 'CrewAI Multi-Agent Automation', level: 85, experienceYears: '1+ yr', highlight: true },
      { name: 'JavaScript & Node.js', level: 82, experienceYears: '2+ yrs' },
      { name: 'Web Development (Next.js, HTML5, CSS3)', level: 84, experienceYears: '2+ yrs' },
      { name: 'Git & GitHub Version Control', level: 90, experienceYears: '3+ yrs' },
      { name: 'Digital Media (CapCut, Canva, OBS Studio)', level: 92, experienceYears: '2+ yrs', highlight: true }
    ]
  }
];

export const initialResumes: ResumeItem[] = [
  {
    id: 'resume-soc',
    title: 'SOC Level 1 Analyst',
    targetRole: 'SOC Level 1 Analyst (Tier-1 Blue Team Defense)',
    version: '2026.1 - SOC Defense & SIEM',
    lastUpdated: 'Updated September 2026',
    summary: 'Defense-focused Tier-1 SOC Analyst certified in Cybersecurity (ISC2 CC) with real-world hands-on experience in security operations center workflows, high-volume SIEM alert triage (Splunk Enterprise), and deep packet capture analysis (Wireshark). Proven background investigating suspicious authentications, analyzing endpoint indicators, isolating threats, and executing baseline tuning in Windows Active Directory environments.',
    downloadFileName: 'Ikenna_Emmanuel_SOC_Level_1_Analyst_Resume.pdf',
    coreSkills: [
      'Splunk Enterprise & SPL Queries', 'Splunk Universal Forwarder', 'Tier-1 SOC Incident Triage',
      'Wireshark Packet Analysis', 'Active Directory & GPO', 'pfSense Firewall', 'Threat Hunting & IOCs',
      'Nmap Network Scanning', 'NetExec', 'CyberChef', 'Incident Response Playbooks',
      'False-Positive Alert Tuning', 'ISC2 Certified in Cybersecurity (CC)'
    ],
    certificationsList: [
      'ISC2 Certified in Cybersecurity (CC) — Earned January 2026'
    ],
    experienceList: [
      {
        role: 'Junior SOC Analyst (Tier 1)',
        company: 'Tech Edu',
        period: 'January 2025 — February 2026',
        points: [
          'Monitored enterprise event pipelines and triaged security alerts using Splunk SIEM in a live Tier-1 SOC environment.',
          'Investigated suspicious authentication attempts, brute-force detections, anomalous outbound traffic, and endpoint malware alerts.',
          'Documented detailed incident reports and escalated validated true-positive security events following formal incident response playbooks.',
          'Contributed to correlation rule optimization and baseline tuning that measurably reduced false-positive noise across shifts.'
        ]
      },
      {
        role: 'Remote Cybersecurity Intern',
        company: 'BNS CyberLab',
        period: 'March 2026 — Present',
        points: [
          'Participated in threat intelligence harvesting, indicators of compromise (IOC) hashing, and correlation against enterprise log data.',
          'Conducted routine network vulnerability scans, analyzed port exposures using Nmap, and documented remediation blueprints.'
        ]
      },
      {
        role: 'Cybersecurity Intern',
        company: 'Decode Labs',
        period: 'August 2026 — Present',
        points: [
          'Engaged in hands-on enterprise defense simulations, security testing workflows, and defensive telemetry analysis across virtualized networks.'
        ]
      }
    ],
    education: [
      {
        degree: 'Bachelor of Science (B.Sc.) in Physiology',
        school: 'University Degree (Nigeria)',
        year: 'Graduated with Honors'
      }
    ]
  },
  {
    id: 'resume-it-support',
    title: 'IT Support',
    targetRole: 'IT Support Specialist & Systems Engineer',
    version: '2026.1 - IT Support & Helpdesk',
    lastUpdated: 'Updated September 2026',
    summary: 'Proactive and customer-oriented IT Support Specialist and Systems Engineer with solid experience in Tier-1/2 IT helpdesk troubleshooting, Windows Server and Active Directory user administration, local network configuration (pfSense, TCP/IP, DNS, DHCP), and endpoint maintenance. Dedicated to swift issue resolution, system uptime, secure hardware/software deployment, and clear end-user technical communication.',
    downloadFileName: 'Ikenna_Emmanuel_IT_Support_Resume.pdf',
    coreSkills: [
      'IT Support & Helpdesk Operations', 'Ticket Management (SLA Triage)', 'Windows Server & Active Directory DS',
      'Group Policy (GPO) Deployment', 'User Accounts & Permission Management', 'Network Troubleshooting (TCP/IP, DNS, DHCP)',
      'pfSense Firewall & Router Configuration', 'Remote Support Tools (RDP, AnyDesk, TeamViewer)', 'Hardware Diagnostics & Repair',
      'Operating System Deployment & Patching', 'Printer & Peripheral Troubleshooting', 'ISC2 Certified in Cybersecurity (CC)'
    ],
    certificationsList: [
      'ISC2 Certified in Cybersecurity (CC) — January 2026',
      'Systems Administration & Helpdesk Operations'
    ],
    experienceList: [
      {
        role: 'IT Support Specialist & Systems Analyst',
        company: 'Tech Edu',
        period: 'January 2025 — February 2026',
        points: [
          'Delivered Tier-1 and Tier-2 technical support to over 150+ workstations, laptops, network printers, and peripherals.',
          'Administered Active Directory users, security groups, organizational units, and password resets with zero downtime.',
          'Diagnosed and resolved hardware faults, OS crashes, network connectivity drops, and application configuration bugs.',
          'Configured and deployed Windows workstations with standard enterprise software images and security baselines.'
        ]
      },
      {
        role: 'Systems Support & IT Intern',
        company: 'BNS CyberLab',
        period: 'March 2026 — Present',
        points: [
          'Monitored local network availability, configured VirtualBox test environments, and executed operating system patch updates.',
          'Assisted staff members with remote desktop setup, multi-factor authentication enrollment, and secure VPN connections.'
        ]
      }
    ],
    education: [
      {
        degree: 'Bachelor of Science (B.Sc.) in Physiology',
        school: 'University Degree (Nigeria)',
        year: 'Graduated with Honors'
      }
    ]
  }
];

export const initialGitHubRepos: GitHubRepoPreview[] = [
  {
    name: 'ai-phishing-triage-pipeline',
    description: 'Autonomous multi-agent email parsing and reputation scoring system using CrewAI & Streamlit',
    language: 'Python',
    stars: 52,
    forks: 14,
    updated: '2 days ago',
    htmlUrl: 'https://github.com/kendikreator/ai-phishing-triage-pipeline',
    tags: ['CrewAI', 'Streamlit', 'Threat-Intel', 'Python', 'SOC']
  },
  {
    name: 'enterprise-active-directory-lab',
    description: 'Virtualized enterprise network lab with Windows Server 2022 AD DS, pfSense firewall & GPO hardening',
    language: 'PowerShell',
    stars: 64,
    forks: 18,
    updated: '4 days ago',
    htmlUrl: 'https://github.com/kendikreator/enterprise-active-directory-lab',
    tags: ['Active-Directory', 'pfSense', 'VirtualBox', 'Blue-Team']
  },
  {
    name: 'network-telemetry-splunk-lab',
    description: 'Splunk Enterprise SIEM & Wireshark packet capture analysis for protocol anomaly detection',
    language: 'Python',
    stars: 88,
    forks: 23,
    updated: '1 week ago',
    htmlUrl: 'https://github.com/kendikreator/network-telemetry-splunk-lab',
    tags: ['Splunk', 'Wireshark', 'Sysmon', 'Deep-Packet-Inspection']
  },
  {
    name: 'certification-navigator-landing',
    description: 'Web application and roadmap resources for aspiring cybersecurity professionals',
    language: 'JavaScript',
    stars: 36,
    forks: 7,
    updated: '2 weeks ago',
    htmlUrl: 'https://github.com/kendikreator/certification-navigator-landing',
    tags: ['Next.js', 'Cybersecurity', 'Selar', 'kendikreator']
  }
];
