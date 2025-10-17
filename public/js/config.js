// Site Configuration - Joseph Ingham Dento-Legal Advisory

const CONFIG = {
  // Brand Colors
  colors: {
    navy: '#1B3A52',
    turquoise: '#2BB2C8',
    teal: '#1A8A9D',
    lightBlue: '#E8F4F7',
    charcoal: '#2C3E50',
    mediumGrey: '#6B7280',
    lightGrey: '#F3F4F6',
    white: '#FFFFFF',
    gold: '#D4A658',
    success: '#10B981',
    error: '#EF4444'
  },

  // Contact Information
  contact: {
    name: 'Joseph Ingham',
    title: 'Dento-Legal Advisor',
    organization: 'British Dental Association',
    email: 'joseph@dentolegaladvisory.co.uk',
    phone: 'Contact via BDA',
    location: 'London, United Kingdom',
    availability: 'Nationwide service'
  },

  // Professional Stats
  stats: [
    { number: '38+', label: 'Years Experience' },
    { number: '28', label: 'Years in Practice' },
    { number: '17', label: 'Years Teaching Eastman' },
    { number: '10+', label: 'Years Dento-Legal Advisory' }
  ],

  // Services
  services: [
    {
      id: 'clinical-negligence',
      title: 'Clinical Negligence Cases',
      icon: 'shield',
      shortDescription: 'Expert guidance on dental negligence claims with comprehensive support throughout the entire claims process.',
      details: [
        'Expert evidence review and case analysis',
        'Claims process navigation',
        'Treatment outcome disputes',
        'Standard of care assessments'
      ]
    },
    {
      id: 'regulatory-compliance',
      title: 'Regulatory Compliance',
      icon: 'scale',
      shortDescription: 'Specialist support for GDC investigations, professional conduct matters, and fitness to practise proceedings.',
      details: [
        'GDC investigations and hearings',
        'Professional conduct defence',
        'Fitness to practise proceedings',
        'Disciplinary proceedings support'
      ]
    },
    {
      id: 'complaints-handling',
      title: 'Complaints Handling',
      icon: 'file-text',
      shortDescription: 'Comprehensive guidance for NHS and private practice complaints with proven resolution strategies.',
      details: [
        'NHS complaints procedures',
        'Private practice complaint resolution',
        'Patient communication strategies',
        'Complaint prevention guidance'
      ]
    },
    {
      id: 'patient-care',
      title: 'Ethical & Legal Patient Care',
      icon: 'users',
      shortDescription: 'Ensuring robust consent procedures, proper documentation, and compliance with patient rights requirements.',
      details: [
        'Consent procedures and documentation',
        'Record-keeping requirements',
        'Patient rights and confidentiality',
        'Clinical governance support'
      ]
    },
    {
      id: 'prescribing',
      title: 'Prescribing in Dentistry',
      icon: 'briefcase',
      shortDescription: 'Specialist guidance on the legal aspects of dental prescribing, regulations, and safe prescribing practices.',
      details: [
        'Legal aspects of dental prescribing',
        'Prescription-only medicines regulations',
        'Safe prescribing practices',
        'Antimicrobial stewardship'
      ]
    },
    {
      id: 'indemnity',
      title: 'Indemnity Matters',
      icon: 'award',
      shortDescription: 'Expert advice on understanding indemnity coverage, managing claims, and working effectively with indemnifiers.',
      details: [
        'Understanding indemnity coverage',
        'What to send to indemnifiers',
        'Managing indemnity claims',
        'Indemnity claim support'
      ]
    }
  ],

  // Career Timeline
  timeline: [
    {
      period: '1987-2015',
      duration: '28 years',
      title: 'General Dental Practice',
      description: 'Extensive hands-on experience with NHS and private dental practice'
    },
    {
      period: '2007-2015',
      duration: '8 years',
      title: 'Dental Practice Advisor for Berkshire',
      description: 'Supporting dental practices with clinical and operational guidance'
    },
    {
      period: '2008-Present',
      duration: '17 years',
      title: 'Tutor - Eastman Dental Hospital',
      subtitle: 'School of Hygiene and Therapy',
      description: 'Educating dental care professionals with specialist focus on prescribing and legal responsibilities'
    },
    {
      period: '2015-2025',
      duration: '10 years',
      title: 'Dento-Legal Advisor',
      subtitle: 'Large Mutual Defence Organisation',
      description: 'Providing expert guidance on complaints, claims, and regulatory matters'
    },
    {
      period: '2025-Present',
      duration: 'Current',
      title: 'Dento-Legal Advisor',
      subtitle: 'British Dental Association (BDA)',
      description: 'Supporting BDA members nationwide with comprehensive dento-legal advisory services',
      current: true
    }
  ],

  // Professional Affiliations
  affiliations: [
    {
      title: 'British Dental Association (BDA)',
      role: 'Dento-Legal Advisor',
      description: 'Current position supporting dental professionals with complaints, claims, and regulatory matters',
      icon: 'shield'
    },
    {
      title: 'British Association of Dental Therapists (BADT)',
      role: 'Honorary Member',
      description: 'Recognition for expertise in prescribing regulations and contributions to the profession',
      icon: 'award'
    },
    {
      title: 'Regular Conference Speaker',
      role: 'CPD Provider',
      description: 'Invited speaker at major UK dental conferences including Dentistry Show and BDA events',
      icon: 'users'
    }
  ],

  // Conference Schedule 2025
  conferences: [
    {
      name: 'British Dental Conference & Dentistry Show Birmingham 2025',
      location: 'Birmingham',
      year: '2025',
      sessions: [
        'How robust is my consent procedure?',
        'I have a complaint - what do I need to send to my indemnifiers?'
      ]
    },
    {
      name: 'Dentistry Show London 2025',
      location: 'London',
      year: '2025',
      sessions: ['Educational sessions on dento-legal topics for dental professionals']
    },
    {
      name: 'BDA Core CPD Study Days',
      location: 'Various locations',
      year: 'Ongoing',
      sessions: ['Regular contributor to highly recommended GDC CPD topics']
    }
  ],

  // Teaching Topics
  teachingTopics: [
    'Consent procedures and documentation',
    'Complaints handling and indemnity',
    'Prescribing regulations for DCPs',
    'GDC professional standards',
    'Risk management in practice',
    'Ethical decision-making'
  ],

  // Navigation
  navigation: [
    { label: 'Home', href: 'index.html' },
    { label: 'About', href: 'about.html' },
    { label: 'Services', href: 'services.html' },
    { label: 'Speaking', href: 'speaking.html' },
    { label: 'Contact', href: 'contact.html' }
  ],

  // Social Links (update as needed)
  social: {
    linkedin: '', // Add if available
    twitter: ''   // Add if available
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
