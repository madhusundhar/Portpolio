import type { Project, SkillItem, JourneyMilestone, CertificationItem, PersonalInterest } from '../types';

export const PERSONAL_INFO = {
  name: 'Madhusundharan',
  shortName: 'Madhu',
  title: 'Aspiring Software Developer',
  subtitle: 'B.Tech in Artificial Intelligence & Data Science',
  headline: 'Building Ideas Into Meaningful Digital Experiences.',
  introduction: "I'm an Artificial Intelligence and Data Science student passionate about software development, building practical applications and exploring innovative technologies.",
  bio: "Currently pursuing B.Tech in Artificial Intelligence and Data Science at Karpagam Academy of Higher Education (2024–2027) with a prior Diploma in Electrical and Electronics Engineering (2021–2024). I combine engineering fundamentals with modern full-stack web architectures and intelligent AI models to build software that solves tangible problems.",
  location: 'Coimbatore, Tamil Nadu, India',
  email: 'madhusundhar28@gmail.com',
  phone: '+91-9344676156',
  githubUrl: 'https://github.com/madhusundhar',
  linkedinUrl: 'https://www.linkedin.com/in/madhusundharan-p-5082402a6/',
  leetcodeUrl: 'https://leetcode.com/u/madhusundhar/',
  avatarUrl: '/profile.jpg', // User's verified photograph!
  resumeUrl: '/resume.pdf',
  driveResumeUrl: 'https://drive.google.com/drive/folders/1GnwgbfkSwYS8nX1MIMjkf63TPsXIy5ke',
  roles: [
    'Aspiring Software Developer',
    'Full-Stack Development Enthusiast',
    'AI & Data Science Student'
  ]
};

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  { name: 'Java', category: 'Programming' },
  { name: 'C++', category: 'Programming' },
  { name: 'Python', category: 'Programming' },
  { name: 'JavaScript', category: 'Programming' },
  { name: 'SQL', category: 'Programming' },

  // Frontend
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Vite', category: 'Frontend' },

  // Backend
  { name: 'Node.js', category: 'Backend & APIs' },
  { name: 'Express.js', category: 'Backend & APIs' },
  { name: 'Django', category: 'Backend & APIs' },
  { name: 'FastAPI', category: 'Backend & APIs' },
  { name: 'Spring Boot', category: 'Backend & APIs' },
  { name: 'REST APIs', category: 'Backend & APIs' },

  // Database
  { name: 'MySQL', category: 'Databases & Cloud' },
  { name: 'MongoDB', category: 'Databases & Cloud' },
  { name: 'Firebase', category: 'Databases & Cloud' },
  { name: 'Firestore', category: 'Databases & Cloud' },

  // Cloud and tools
  { name: 'Google Cloud', category: 'Tools' },
  { name: 'Google Cloud Run', category: 'Tools' },
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'VS Code', category: 'Tools' },
  { name: 'Power BI', category: 'Tools' },

  // AI and Data Science
  { name: 'Machine Learning', category: 'AI & Data Science' },
  { name: 'Model Training', category: 'AI & Data Science' },
  { name: 'Data Visualization', category: 'AI & Data Science' },
  { name: 'Gemini API', category: 'AI & Data Science' }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'ai-fitness-platform',
    title: 'AI-Powered Fitness & Wellness Platform',
    tagline: 'Intelligent health tracking & generative AI wellness recommendations',
    description: 'A full-stack fitness and wellness platform integrating AI-powered recommendations, authentication, cloud data storage and backend services.',
    fullDescription: 'Architected an end-to-end fitness tracking ecosystem with predictive wellness recommendations using Google’s Gemini API. The frontend is built with high-performance React and styled with Tailwind CSS, communicating with a lightweight FastAPI Python backend. Data is persisted in Google Cloud Firestore with Firebase Auth for identity management, completely containerized and deployed on Google Cloud Run.',
    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Python',
      'FastAPI',
      'Firebase Auth',
      'Firestore',
      'Google Cloud Run',
      'Gemini API'
    ],
    highlights: [
      'AI-powered recommendations using Gemini API',
      'Firebase Authentication for secure identity management',
      'Firestore integration for realtime document persistence',
      'FastAPI backend microservices',
      'Google Cloud deployment via Cloud Run'
    ],
    category: 'AI / ML',
    githubUrl: 'https://github.com/madhusundhar',
    isFeatured: true,
    accentColor: '#4F46E5'
  },
  {
    id: 'iot-smart-home',
    title: 'IoT-Based Smart Home System',
    tagline: 'Embedded home automation, voice commands & realtime telemetry',
    description: 'An IoT-based home automation system featuring voice control, connected devices, remote appliance monitoring and a mobile dashboard.',
    fullDescription: 'Engineered an automated residential infrastructure utilizing ESP32 microcontrollers communicating over MQTT protocols to monitor and toggle appliances through a mobile dashboard. Integrated with Firebase Realtime Database and ThingSpeak to stream real-time temperature, humidity, and energy metrics.',
    technologies: [
      'ESP32 / Arduino',
      'MQTT',
      'Firebase',
      'ThingSpeak',
      'C++',
      'Sensors & Relays'
    ],
    highlights: [
      'Voice control integration for hands-free device management',
      'Connected appliance monitoring and relay toggling',
      'Remote telemetry streaming with ThingSpeak and Firebase',
      'Responsive mobile dashboard interface'
    ],
    category: 'IoT / Embedded',
    githubUrl: 'https://github.com/madhusundhar',
    isFeatured: true,
    accentColor: '#059669'
  },
  {
    id: 'erp-student-doc-management',
    title: 'ERP-Based Student Document Management System',
    tagline: 'Institutional document requests, role-based approval pipelines & audit trails',
    description: 'A digital ERP system designed for students, Heads of Departments (HODs) and administrators.',
    fullDescription: 'Eliminates paper-based delays in academic document requests (bonafide certificates, transcripts, leave applications). Implements a multi-tiered role-based access control matrix allowing students to submit and track requests, HODs to verify, and administrative controllers to issue stamped records.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Python',
      'Django',
      'MySQL',
      'REST APIs'
    ],
    highlights: [
      'Role-based access control (Students, HODs, Administrators)',
      'Real-time document lifecycle and status tracking',
      'Approval workflows with administrative overrides',
      'Clean, accessible institutional dashboard interfaces'
    ],
    category: 'Full-Stack',
    githubUrl: 'https://github.com/madhusundhar',
    isFeatured: true,
    accentColor: '#2563EB'
  },
  {
    id: 'url-shortener-analytics',
    title: 'URL Shortener with Analytics',
    tagline: 'Fast link shortening with click analytics & visit-history tracking',
    description: 'A full-stack URL shortening application with user authentication, URL management, click analytics and visit-history tracking.',
    fullDescription: 'Designed and deployed a full-stack link management solution capable of encoding long URLs into compact slugs. Provides authenticated users with a comprehensive analytics dashboard displaying click counts, referral paths, timestamp logs, and visit trends over time.',
    technologies: [
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'HTML/CSS'
    ],
    highlights: [
      'User authentication and custom slug management',
      'Real-time click telemetry and referral analysis',
      'Visit-history tracking with timestamp logs',
      'Verifiable open-source repository on GitHub'
    ],
    category: 'Full-Stack',
    githubUrl: 'https://github.com/madhusundhar/URL-Shortener-with-Analytics',
    isFeatured: true,
    accentColor: '#D97706'
  },
  {
    id: 'coding-practice',
    title: 'Algorithmic Problem Solving & Practice',
    tagline: 'Verified data structures & algorithms implementations in Java and C++',
    description: 'Dedicated repositories tracking structured problem-solving across core Data Structures, Algorithms, and competitive programming platforms.',
    fullDescription: 'A structured collection of algorithms and data structures implemented in Java and C++, featuring solutions to LeetCode challenges spanning Arrays, Hash Tables, Trees, Graphs, Dynamic Programming, and Recursion.',
    technologies: [
      'Java',
      'C++',
      'Data Structures',
      'Algorithms',
      'LeetCode'
    ],
    highlights: [
      'Clean implementations of core data structures from scratch',
      'Solutions focused on optimal time and space complexity',
      'Active LeetCode practice and continuous problem solving',
      'Public repositories for Java and LeetCode problems'
    ],
    category: 'Algorithms',
    githubUrl: 'https://github.com/madhusundhar/leetcode-problems',
    liveUrl: 'https://leetcode.com/u/madhusundhar/',
    isFeatured: false,
    accentColor: '#7C3AED'
  }
];

export const JOURNEY_DATA: JourneyMilestone[] = [
  {
    year: '2024 – 2027',
    title: 'B.Tech in Artificial Intelligence & Data Science',
    organization: 'Karpagam Academy of Higher Education',
    type: 'Education',
    description: 'Undergraduate engineering studies focusing on machine learning, data engineering, neural networks, algorithms, and full-stack software development.',
    tags: ['Artificial Intelligence', 'Data Science', 'Machine Learning', 'Algorithms']
  },
  {
    year: '28 Apr 2025 – 16 May 2025',
    title: 'Full Stack Intern',
    organization: 'Neural Arc Global Pvt Ltd',
    type: 'Internship',
    description: 'Completed an intensive engineering internship focused on Python, Django, and modern web technologies. Gained practical exposure to full-stack web application development and backend services.',
    tags: ['Python', 'Django', 'Web Technologies', 'REST APIs', 'Full-Stack']
  },
  {
    year: '2021 – 2024',
    title: 'Diploma in Electrical and Electronics Engineering',
    organization: 'Sri Ramakrishna Mission Polytechnic College',
    type: 'Education',
    description: 'Built foundational knowledge in circuit theory, microcontrollers, embedded systems, and electronics, bridging hardware sensors with software.',
    tags: ['Embedded Systems', 'Microcontrollers', 'Circuit Design', 'IoT']
  },
  {
    year: '2021',
    title: 'Secondary School Education (SSLC)',
    organization: 'Sri Sowdeswari Vidyalaya Model Metric Higher Secondary School',
    type: 'Education',
    description: 'Completed secondary schooling with a strong academic foundation in Mathematics and Physical Sciences.',
    tags: ['Secondary Education', 'Mathematics', 'Science']
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: 'Google Cloud Computing Certification',
    issuer: 'NPTEL',
    badge: 'Cloud & Infrastructure',
    skills: ['GCP Architecture', 'Cloud Storage', 'Compute Engine', 'Networking']
  },
  {
    title: 'Certified System Administrator (CSA)',
    issuer: 'ServiceNow',
    badge: 'Enterprise Platform',
    skills: ['ITSM Workflows', 'Database Schemas', 'User Administration', 'Platform Security']
  },
  {
    title: 'Certified Application Developer (CAD)',
    issuer: 'ServiceNow',
    badge: 'Application Development',
    skills: ['Server-Side Scripting', 'Client Scripting', 'REST Integration', 'UI Actions']
  },
  {
    title: 'Foundation of AI and Generative AI',
    issuer: 'Infosys Springboard',
    badge: 'Artificial Intelligence',
    skills: ['Generative AI', 'Deep Learning Basics', 'Prompt Engineering', 'LLM Concepts']
  }
];

export const PERSONAL_INTERESTS: PersonalInterest[] = [
  {
    id: 'football',
    title: 'Football',
    category: 'Sport & Athleticism',
    highlight: 'Position: Forward (Striker)',
    description: 'Football is one of my greatest passions. Playing as a forward requires speed, positional awareness, and decisive execution under pressure.',
    details: [
      'Inspiration: Cristiano Ronaldo',
      'Admire his unmatched discipline, relentless work ethic, and mental toughness',
      'Brings high energy, tactical communication, and team spirit onto the pitch'
    ],
    accentColor: '#DC2626'
  },
  {
    id: 'cricket',
    title: 'Cricket',
    category: 'Sport & Strategy',
    highlight: 'Position: Opening Batsman',
    description: 'Cricket teaches timing, patience, and adaptability. As an opening batsman, setting a solid foundation against the new ball requires focus and composure.',
    details: [
      'Role: Opening Batsman',
      'Focus on shot selection, strike rotation, and adapting to match tempo',
      'Value team leadership, coordination, and building decisive partnerships'
    ],
    accentColor: '#2563EB'
  },
  {
    id: 'gaming',
    title: 'Gaming & BGMI',
    category: 'Tactical Reflexes',
    highlight: 'Tactical Play & Communication',
    description: 'Competitive mobile gaming, particularly BGMI, sharpens situational awareness, rapid strategic decisions, and high-stakes squad coordination.',
    details: [
      'Active player in BGMI (Battlegrounds Mobile India)',
      'Sharpens split-second reflex decisions and spatial tactics',
      'Strong emphasis on squad communication and clutch performance'
    ],
    accentColor: '#D97706'
  },
  {
    id: 'technology',
    title: 'Technology & Exploration',
    category: 'Lifelong Curiosity',
    highlight: 'Continuous Learning & Building',
    description: 'Beyond coursework, I am fascinated by exploring emerging developer tools, modern cloud infrastructure, backend patterns, and generative AI.',
    details: [
      'Experimenting with the Gemini API and intelligent autonomous agents',
      'Deepening backend microservice patterns in Python and Go/Java',
      'Building practical digital utilities that streamline real-world friction'
    ],
    accentColor: '#4F46E5'
  }
];
