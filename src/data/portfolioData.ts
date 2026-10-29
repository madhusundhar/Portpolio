import type { Project, SkillItem, ExperienceItem, EducationItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Madhusundharan P',
  title: 'Aspiring Software Developer',
  subtitle: 'B.Tech in Artificial Intelligence & Data Science',
  headline: 'Building Digital Experiences That Solve Real Problems.',
  bio: "I'm a B.Tech Artificial Intelligence & Data Science student at Karpagam Academy of Higher Education passionate about software development, full-stack applications, and AI-powered solutions. I love turning complex algorithmic challenges into elegant, practical user experiences.",
  location: 'Coimbatore, Tamil Nadu, India',
  email: 'madhusundhar28@gmail.com',
  phone: '+91-9344676156',
  githubUrl: 'https://github.com/madhusundhar',
  linkedinUrl: 'https://www.linkedin.com/in/madhusundharan-p-5082402a6/',
  leetcodeUrl: 'https://leetcode.com/u/madhusundhar/',
  avatarUrl: 'https://avatars.githubusercontent.com/u/189763396?v=4',
  resumeUrl: '/resume.pdf',
  driveResumeUrl: 'https://drive.google.com/drive/folders/1GnwgbfkSwYS8nX1MIMjkf63TPsXIy5ke',
  roles: [
    'Aspiring Software Developer',
    'Full-Stack Developer',
    'AI & Data Science Enthusiast',
    'Problem Solver'
  ]
};

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  { name: 'Java', category: 'Programming' },
  { name: 'C++', category: 'Programming' },
  { name: 'JavaScript', category: 'Programming' },
  { name: 'Python', category: 'Programming' },
  { name: 'SQL', category: 'Programming' },

  // Frontend
  { name: 'HTML5', category: 'Frontend' },
  { name: 'CSS3', category: 'Frontend' },
  { name: 'React.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Vite', category: 'Frontend' },

  // Backend & APIs
  { name: 'Node.js', category: 'Backend & APIs' },
  { name: 'Express.js', category: 'Backend & APIs' },
  { name: 'Django', category: 'Backend & APIs' },
  { name: 'FastAPI', category: 'Backend & APIs' },
  { name: 'REST APIs', category: 'Backend & APIs' },
  { name: 'Spring Boot', category: 'Backend & APIs' },

  // Databases & Cloud
  { name: 'MySQL', category: 'Databases & Cloud' },
  { name: 'MongoDB', category: 'Databases & Cloud' },
  { name: 'Firebase', category: 'Databases & Cloud' },
  { name: 'Firestore', category: 'Databases & Cloud' },
  { name: 'Google Cloud Run', category: 'Databases & Cloud' },
  { name: 'Google Cloud Platform', category: 'Databases & Cloud' },

  // Tools
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'VS Code', category: 'Tools' },
  { name: 'Power BI', category: 'Tools' },
  { name: 'Postman', category: 'Tools' },

  // AI & Data Science
  { name: 'Machine Learning', category: 'AI & Data Science' },
  { name: 'Model Training', category: 'AI & Data Science' },
  { name: 'Data Visualization', category: 'AI & Data Science' },
  { name: 'Gemini API', category: 'AI & Data Science' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'ai-fitness-platform',
    title: 'AI-Powered Fitness & Wellness Platform',
    tagline: 'Intelligent health tracking & generative AI wellness recommendations',
    description: 'A full-stack fitness and wellness platform integrating AI-powered recommendations, secure authentication, cloud data storage, and serverless deployment.',
    fullDescription: 'Architected an end-to-end fitness tracking ecosystem with predictive wellness recommendations using Google’s Gemini API. The frontend is built with high-performance React and styled with Tailwind CSS, communicating with a lightweight FastAPI Python backend. Data is safely persisted in Google Cloud Firestore with Firebase Auth for identity management, completely containerized and deployed on Google Cloud Run.',
    technologies: [
      'React.js',
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
      'Generative AI fitness routine and meal analysis using Gemini API',
      'Robust token-based authentication with Firebase Auth',
      'Scalable NoSQL document schema in Google Cloud Firestore',
      'Microservices-based asynchronous endpoints via FastAPI',
      'Continuous deployment via Google Cloud Run container service'
    ],
    category: 'AI / ML',
    githubUrl: 'https://github.com/madhusundhar',
    isFeatured: true,
    accentColor: '#8B5CF6'
  },
  {
    id: 'url-shortener-analytics',
    title: 'URL Shortener with Analytics',
    tagline: 'High-speed link shortening with real-time click telemetry & tracking',
    description: 'A full-stack web application for creating, managing, and tracking shortened URLs with user authentication, click analytics, and visit-history tracking.',
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
      'Custom hashing algorithm ensuring collision-resistant unique short keys',
      'User authentication for private URL management and custom aliases',
      'Real-time click tracking engine capturing visitor referrers and timestamps',
      'Interactive analytics dashboard for historical usage visualization'
    ],
    category: 'Full-Stack',
    githubUrl: 'https://github.com/madhusundhar/URL-Shortener-with-Analytics',
    isFeatured: true,
    accentColor: '#38BDF8'
  },
  {
    id: 'erp-student-doc-management',
    title: 'ERP Student Document Management System',
    tagline: 'Institutional document requests, role-based approval pipelines & audit trails',
    description: 'A digital document workflow management system designed for college students, Heads of Departments (HODs), and administrative staff.',
    fullDescription: 'Eliminates paper-based delays in academic document requests (bonafide certificates, grade sheets, transcripts, leave letters). Implements a multi-tiered role-based access control matrix allowing students to submit and monitor requests, department heads to verify, and administrative controllers to issue digitally stamped records.',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Python',
      'Django',
      'MySQL',
      'REST APIs'
    ],
    highlights: [
      'Granular Role-Based Access Control (RBAC) for Students, HODs, and Admins',
      'Dynamic multi-stage request approval and rejection status workflow',
      'Comprehensive audit logging and document lifecycle tracking in MySQL',
      'Clean, accessible dashboard views tailored to institutional branding'
    ],
    category: 'Full-Stack',
    githubUrl: 'https://github.com/madhusundhar',
    isFeatured: true,
    accentColor: '#6366F1'
  },
  {
    id: 'iot-smart-home',
    title: 'IoT-Based Smart Home System',
    tagline: 'Low-latency home automation, voice commands & real-time telemetry',
    description: 'An embedded IoT home automation system featuring voice control, connected appliances, remote monitoring, and an interactive mobile dashboard.',
    fullDescription: 'Engineered an automated residential infrastructure utilizing ESP32 microcontrollers communicating over MQTT protocols to manage smart relays and environmental sensors. Integrated with Firebase Realtime Database and ThingSpeak to stream real-time temperature, humidity, and energy metrics to a responsive mobile dashboard.',
    technologies: [
      'ESP32 / Arduino',
      'MQTT Protocol',
      'Firebase RTDB',
      'ThingSpeak',
      'C++',
      'Sensors & Relays'
    ],
    highlights: [
      'Sub-second latency appliance control through lightweight MQTT broker messaging',
      'Voice control integration with assistant triggers for hands-free automation',
      'Real-time telemetry logging of temperature, humidity, and electrical load',
      'Fail-safe manual overrides with cloud state synchronization'
    ],
    category: 'IoT / Embedded',
    githubUrl: 'https://github.com/madhusundhar',
    isFeatured: true,
    accentColor: '#10B981'
  },
  {
    id: 'algorithmic-practice-leetcode',
    title: 'Algorithms & Data Structures Practice',
    tagline: 'Verified algorithmic problem solving in Java, C++ & competitive platforms',
    description: 'Comprehensive repository of solved data structures, algorithms, and LeetCode problems showcasing structured problem-solving techniques.',
    fullDescription: 'A dedicated repository tracking solutions to complex algorithmic challenges across topics such as Arrays, Hash Maps, Linked Lists, Trees, Graphs, Dynamic Programming, and Recursion. Demonstrates proficiency in time-space complexity optimization and clean code principles in Java and C++.',
    technologies: [
      'Java',
      'C++',
      'Data Structures',
      'Algorithms',
      'LeetCode'
    ],
    highlights: [
      'Implementation of core data structures from scratch (Trees, Graphs, Queues)',
      'Optimal Big-O time and space complexity solutions',
      'Active LeetCode profile with regular practice and problem solving',
      'Structured test cases verifying edge cases and boundary conditions'
    ],
    category: 'Algorithms',
    githubUrl: 'https://github.com/madhusundhar/leetcode-problems',
    liveUrl: 'https://leetcode.com/u/madhusundhar/',
    isFeatured: false,
    accentColor: '#F59E0B'
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Full Stack Intern',
    company: 'Neural Arc Global Pvt Ltd',
    period: '28 April 2025 – 16 May 2025',
    location: 'India',
    type: 'Internship',
    description: [
      'Completed an intensive engineering internship focused on Python, Django, and modern web technologies.',
      'Gained deep practical exposure to full-stack web application development, responsive design, and backend architectural best practices.',
      'Designed RESTful API endpoints and integrated relational database schemas with interactive client-side interfaces.',
      'Collaborated within an agile development cycle on code reviews, performance tuning, and modular code patterns.'
    ],
    technologies: ['Python', 'Django', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'MySQL']
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'B.Tech in Artificial Intelligence & Data Science',
    institution: 'Karpagam Academy of Higher Education',
    period: '2024 – 2027',
    location: 'Coimbatore, Tamil Nadu',
    highlights: [
      'Core coursework: Machine Learning, Artificial Intelligence, Data Structures & Algorithms, Database Systems, Cloud Computing.',
      'Focusing on intelligent systems, neural networks, and scalable full-stack application development.'
    ]
  },
  {
    degree: 'Diploma in Electrical and Electronics Engineering',
    institution: 'Sri Ramakrishna Mission Polytechnic College',
    period: '2021 – 2024',
    location: 'Coimbatore, Tamil Nadu',
    highlights: [
      'Solid foundation in circuit theory, embedded microcontrollers, electronics, and digital logic systems.',
      'Applied embedded systems principles to IoT and automated hardware-software interfaces.'
    ]
  },
  {
    degree: 'Secondary School Education (SSLC)',
    institution: 'Sri Sowdeswari Vidyalaya Model Matric Higher Secondary School',
    period: '2021',
    location: 'Tamil Nadu',
    highlights: [
      'Completed secondary schooling with distinction in Mathematics and Science.'
    ]
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
    skills: ['ITSM', 'Workflows', 'Database Schemas', 'User Administration']
  },
  {
    title: 'Certified Application Developer (CAD)',
    issuer: 'ServiceNow',
    badge: 'Application Development',
    skills: ['Server-Side Scripting', 'Client Scripting', 'REST Integration', 'UI Actions']
  },
  {
    title: 'Foundation of AI and Generative AI Certification',
    issuer: 'Infosys Springboard',
    badge: 'Artificial Intelligence',
    skills: ['Generative AI', 'Deep Learning Basics', 'Prompt Engineering', 'LLM Concepts']
  },
  {
    title: 'Python & AI Fundamentals',
    issuer: 'Infosys Springboard',
    badge: 'Core Programming',
    skills: ['Python OOP', 'Data Structures', 'Data Science Libraries', 'Algorithmic Logic']
  }
];
