import { jsPDF } from 'jspdf';
import { ProfileInfo, ResumeItem } from '../types';

export interface UploadedPdfInfo {
  name: string;
  dataUrl: string;
  uploadDate: string;
  fileSize?: string;
}

const STORAGE_KEY = 'ikenna_emmanuel_uploaded_pdf';

/**
 * Get any previously uploaded PDF from localStorage or profile or resumes
 */
export function getActiveUploadedPdf(
  profile?: ProfileInfo | null,
  resumes?: ResumeItem[]
): UploadedPdfInfo | null {
  // 1. Check profile state
  if (profile?.uploadedPdfFile?.dataUrl) {
    return profile.uploadedPdfFile;
  }

  // 2. Check resumes list for uploaded file
  if (resumes && resumes.length > 0) {
    const uploadedResume = resumes.find(r => !!r.fileDataUrl);
    if (uploadedResume && uploadedResume.fileDataUrl) {
      return {
        name: uploadedResume.downloadFileName || uploadedResume.fileName || 'Ikenna_Emmanuel_Resume.pdf',
        dataUrl: uploadedResume.fileDataUrl,
        uploadDate: uploadedResume.lastUpdated || 'Recently Uploaded'
      };
    }
  }

  // 3. Check persistent localStorage
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed?.dataUrl) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Error reading uploaded pdf from localStorage', e);
  }

  return null;
}

/**
 * Save an uploaded PDF to localStorage
 */
export function saveUploadedPdfToStorage(pdfInfo: UploadedPdfInfo): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pdfInfo));
  } catch (e) {
    console.error('Failed to cache uploaded PDF in localStorage', e);
  }
}

/**
 * Convert a File into an UploadedPdfInfo object
 */
export function processPdfFile(file: File): Promise<UploadedPdfInfo> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      const sizeInKb = Math.round(file.size / 1024);
      const fileSize = sizeInKb > 1024 ? `${(sizeInKb / 1024).toFixed(1)} MB` : `${sizeInKb} KB`;
      const info: UploadedPdfInfo = {
        name: file.name,
        dataUrl,
        uploadDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        fileSize
      };
      saveUploadedPdfToStorage(info);
      resolve(info);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

/**
 * Generate a clean, high-precision ATS-compatible PDF for Ikenna
 */
export function generateDefaultResumePdf(profile: ProfileInfo, resume?: ResumeItem | null): void {
  const doc = new jsPDF({
    unit: 'pt',
    format: 'letter'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 40;
  const contentWidth = pageWidth - (margin * 2);
  let y = 45;

  // Header: Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(17, 24, 39); // gray-900
  doc.text(profile.name.toUpperCase(), margin, y);
  y += 18;

  // Header: Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(37, 99, 235); // #2563eb
  doc.text(profile.title || 'Cybersecurity & IT Support Analyst (SOC / Blue Team)', margin, y);
  y += 16;

  // Contact line
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(75, 85, 99); // gray-600
  const contacts = [
    `Email: ${profile.email}`,
    `WhatsApp: ${profile.whatsapp || '09126176023'}`,
    `Location: ${profile.location}`,
    `LinkedIn: linkedin.com/in/kendikreator`,
    `GitHub: github.com/kendikreator`
  ];
  doc.text(contacts.join('  |  '), margin, y, { maxWidth: contentWidth });
  y += 18;

  // Divider line
  doc.setDrawColor(209, 213, 219); // gray-300
  doc.setLineWidth(1);
  doc.line(margin, y, pageWidth - margin, y);
  y += 18;

  // Helper for section headings
  const drawSectionHeader = (title: string) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(37, 99, 235); // tech blue
    doc.text(title.toUpperCase(), margin, y);
    y += 4;
    doc.setDrawColor(229, 231, 235);
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y);
    y += 12;
  };

  // Section 1: Professional Summary
  drawSectionHeader('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(55, 65, 81); // gray-700
  const summaryText = resume?.summary || profile.bio;
  const splitSummary = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(splitSummary, margin, y);
  y += (splitSummary.length * 13) + 12;

  // Section 2: Certifications
  drawSectionHeader('Certifications & Credentials');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(17, 24, 39);
  doc.text('ISC2 Certified in Cybersecurity (CC)', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(75, 85, 99);
  doc.text('International Information System Security Certification Consortium • Active 2026', margin + 200, y);
  y += 14;

  // Section 3: Core Technical Competencies
  drawSectionHeader('Core Technical Competencies');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(55, 65, 81);
  const skillsList = resume?.coreSkills || [
    'IT Support & Helpdesk', 'Splunk Enterprise', 'Splunk Universal Forwarder', 'Wireshark Deep Packet Inspection',
    'SOC Tier-1 Triage', 'pfSense Firewall', 'Active Directory & GPO Administration', 'Nmap', 'NetExec', 'CyberChef',
    'Python Scripting', 'Multi-Agent AI / CrewAI', 'Linux & Windows Systems', 'Incident Response'
  ];
  const skillsString = skillsList.join('  •  ');
  const splitSkills = doc.splitTextToSize(skillsString, contentWidth);
  doc.text(splitSkills, margin, y);
  y += (splitSkills.length * 13) + 12;

  // Section 4: Operational Defense Experience & Engineering Labs
  drawSectionHeader('Operational Experience & Defense Engineering');
  const experiences = resume?.experienceList || [
    {
      role: 'Enterprise Active Directory & SOC Virtual Network',
      company: 'Virtual Enterprise Lab & Systems Architecture',
      period: 'Jan 2026 - Present',
      points: [
        'Architected fully isolated enterprise network utilizing pfSense firewall, dual network interfaces (WAN/LAN), and strict firewall rulesets.',
        'Configured Windows Server Active Directory Domain Services (AD DS) and joined Windows 10/11 enterprise workstations to domain.',
        'Deployed Splunk Enterprise server and distributed Splunk Universal Forwarder endpoints across domain controllers and user workstations.'
      ]
    },
    {
      role: 'Tier-1 SOC Incident Triage & AI Phishing Pipeline',
      company: 'Threat Intelligence & Detection Automation',
      period: '2025 - Present',
      points: [
        'Constructed multi-agent AI incident response pipeline using Python and CrewAI to parse suspicious email headers, extract IOCs, and query threat telemetry.',
        'Simulated and investigated brute-force attacks against Active Directory using NetExec, auditing event logs (4624/4625) in Splunk.',
        'Performed packet analysis using Wireshark to detect cleartext authentication leakage, ARP spoofing anomalies, and abnormal beaconing.'
      ]
    },
    {
      role: 'IT Support & Systems Engineering Specialist',
      company: 'Enterprise Infrastructure & End-User Support',
      period: '2024 - Present',
      points: [
        'Diagnosed and resolved end-user hardware, Windows 10/11 operating system, and network connectivity issues (DNS, DHCP, TCP/IP).',
        'Managed user provisioning, group memberships, and security policies via Active Directory and PowerShell.',
        'Provided remote desktop technical support, ticket triage, and workstation backup and security configuration.'
      ]
    }
  ];

  experiences.forEach(exp => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(17, 24, 39);
    doc.text(exp.role, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(107, 114, 128);
    doc.text(`${exp.company}  |  ${exp.period}`, pageWidth - margin, y, { align: 'right' });
    y += 13;

    exp.points.forEach(pt => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(55, 65, 81);
      const bulletPt = `•  ${pt}`;
      const splitPt = doc.splitTextToSize(bulletPt, contentWidth - 10);
      doc.text(splitPt, margin + 8, y);
      y += (splitPt.length * 11) + 2;
    });
    y += 6;
  });

  // Section 5: Education
  drawSectionHeader('Education');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(17, 24, 39);
  doc.text('Bachelor of Science (B.Sc.) in Physiology', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(107, 114, 128);
  doc.text('Graduated • Systems-thinking & homeostatic network resilience', margin + 220, y);
  y += 16;

  // Footer note
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7.5);
  doc.setTextColor(156, 163, 175);
  doc.text(`Generated for Ikenna Emmanuel (kendikreator) • Portfolio: kendikreator.dev • Direct Contact: ${profile.email}`, margin, pageWidth > 600 ? 760 : y + 20);

  const filename = resume?.downloadFileName || 'Ikenna_Emmanuel_Cybersecurity_IT_Support_Resume.pdf';
  doc.save(filename);
}

/**
 * Universal Resume Download handler:
 * Checks for uploaded PDF first and downloads it.
 * If none is uploaded, downloads default ATS PDF.
 */
export function triggerResumeDownload(
  profile: ProfileInfo,
  resumes?: ResumeItem[],
  resumeItem?: ResumeItem | null
): { downloaded: boolean; isCustomUploaded: boolean; fileName: string } {
  const uploaded = getActiveUploadedPdf(profile, resumes);

  if (uploaded?.dataUrl) {
    // Download the uploaded file directly
    const link = document.createElement('a');
    link.href = uploaded.dataUrl;
    link.download = uploaded.name || 'Ikenna_Emmanuel_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    return {
      downloaded: true,
      isCustomUploaded: true,
      fileName: uploaded.name || 'Ikenna_Emmanuel_Resume.pdf'
    };
  }

  // If specific resume item has fileDataUrl
  if (resumeItem?.fileDataUrl) {
    const link = document.createElement('a');
    link.href = resumeItem.fileDataUrl;
    link.download = resumeItem.downloadFileName || resumeItem.fileName || 'Ikenna_Emmanuel_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    return {
      downloaded: true,
      isCustomUploaded: true,
      fileName: resumeItem.downloadFileName || 'Ikenna_Emmanuel_Resume.pdf'
    };
  }

  // Fallback: Generate the formatted ATS PDF document
  generateDefaultResumePdf(profile, resumeItem || (resumes && resumes[0]));
  const fileName = resumeItem?.downloadFileName || (resumes && resumes[0]?.downloadFileName) || 'Ikenna_Emmanuel_Cybersecurity_IT_Support_Resume.pdf';

  return {
    downloaded: true,
    isCustomUploaded: false,
    fileName
  };
}
