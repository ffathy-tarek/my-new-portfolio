/**
 * projects.data.js
 * Single source of truth for all portfolio project data.
 * Import this in Projects.jsx and ProjectModal.jsx.
 */

export const PROJECTS = [
  {
    id: 'home-maintenance',
    title: 'Home Maintenance Service Marketplace Platform',
    dates: 'Nov 2025 – Jul 2026',
    role: 'DEPI Graduation Team Project',
    shortSummary:
      'A production-oriented multi-service marketplace platform connecting customers with verified home service providers through a secure booking system.',
    image: '/projects/home-maintenance.png',
    techBadges: [
      'ASP.NET Core Web API',
      'Entity Framework Core',
      'SQL Server',
      'JWT Authentication',
      'Clean Architecture',
    ],
    badgeColor: '#00f2fe',
    // ─── Modal Detail ───────────────────────────────────────────
    technicalStack: [
      'ASP.NET Core Web API',
      'Entity Framework Core',
      'SQL Server',
      'JWT Authentication',
      'Refresh Tokens',
      'Clean Architecture',
      'Repository Pattern',
      'AutoMapper',
      'RESTful APIs',
      'Dependency Injection',
      'Swagger',
      'Git & GitHub',
    ],
    engineeringDecisions: [
      {
        title: 'Clean Architecture',
        body: 'Layered architecture separating business logic, data access, and API layers for maximum maintainability and testability.',
      },
      {
        title: 'Secure Auth',
        body: 'JWT Authentication with Refresh Tokens and Role-Based Authorization ensuring fine-grained access control across user types.',
      },
      {
        title: 'Booking Workflow',
        body: 'Provider approval, availability scheduling, automated time slots, full booking lifecycle management, and payment verification pipeline.',
      },
    ],
    myContributions: [
      'Developed Provider onboarding workflow and service listing management.',
      'Built secure account management system (profile updates, password change).',
      'Implemented JWT Role-Based Authorization for Customers, Providers, and Admins.',
      'Engineered Admin moderation features for provider verification and dispute resolution.',
      'Performed end-to-end QA testing across all booking lifecycle stages.',
    ],
    technicalImpact: [
      'Scalable RESTful backend architecture ready for horizontal scaling.',
      'Enhanced security posture through layered JWT + Refresh Token strategy.',
      'Structured business logic using clean separation of concerns.',
      'Booking consistency enforced using relational constraints and transactions.',
    ],
    links: {
      github: 'https://github.com/lunarae-mai/Home-Maintenance-Service-Marketplace',
      demo: 'https://drive.google.com/file/d/18Cpnet0KLE0QnKaETJaZOCWmSEDwF3ac/view',
      live: null,
    },
  },

  {
    id: 'attendance-system',
    title: 'Attendance & Grades Management System',
    dates: 'Feb 2026 – Apr 2026',
    role: 'Academic Team Project',
    shortSummary:
      'Web-based system helping instructors efficiently manage student records, attendance tracking, and grade management in one unified interface.',
    image: '/projects/attendance-system.png',
    techBadges: ['React.js', 'JavaScript', 'Firebase', 'CSS', 'Responsive Design'],
    badgeColor: '#3b82f6',
    technicalStack: [
      'React.js',
      'JavaScript',
      'Firebase',
      'Firestore',
      'CSS',
      'Mobile-First Responsive Design',
    ],
    engineeringDecisions: [
      {
        title: 'Modular React Architecture',
        body: 'Component-based design with clear separation between data-fetching, UI, and business logic layers for maximum maintainability.',
      },
      {
        title: 'Firebase & Firestore',
        body: 'Real-time cloud data synchronization enabling instant updates across all connected sessions without page refreshes.',
      },
      {
        title: 'Mobile-First Design',
        body: 'Responsive-first approach ensuring full functionality on phones and tablets — critical for instructors on the go.',
      },
    ],
    myContributions: [
      'Delivered features in sprint-based Agile iterations with the team.',
      'Developed reusable UI components for student tables, attendance sheets, and grade forms.',
      'Implemented complete CRUD operations for student record management.',
      'Integrated attendance tracking with real-time Firestore synchronization.',
      'Built cloud-synced grade management module with validation and error handling.',
    ],
    technicalImpact: [
      'Complete student CRUD reducing manual record-keeping overhead.',
      'Organized attendance tracking dashboard with clear visual hierarchy.',
      'Real-time data persistence with zero server management overhead via Firebase.',
    ],
    links: {
      github: 'https://github.com/ffathy-tarek/Attendance_Grades_System',
      demo: null,
      live: 'https://attendance-wep-system.vercel.app/',
    },
  },

  {
    id: 'brick-breaker',
    title: 'Brick Breaker Game',
    dates: 'Oct 2024',
    role: 'Academic Team Project',
    shortSummary:
      'Feature-complete 2D desktop arcade game engineered from scratch using Java and OpenGL, delivering full gameplay in a 4-day sprint.',
    image: '/projects/brick-breaker.png',
    techBadges: ['Java', 'OpenGL', 'OOP', 'Agile'],
    badgeColor: '#a78bfa',
    technicalStack: ['Java', 'OpenGL', 'Object-Oriented Programming', 'Agile Principles'],
    engineeringDecisions: [
      {
        title: 'Component-Based Architecture',
        body: 'Clean separation of game logic, rendering pipeline, and input handling into distinct components for maintainability and testability.',
      },
      {
        title: 'Custom Collision Engine',
        body: 'Built using bounding-box detection and velocity-vector analysis — no external physics libraries, giving full control over gameplay feel.',
      },
      {
        title: 'Frame-Rate Independent Updates',
        body: 'Decoupled rendering from game logic using delta-time, ensuring consistent physics simulation across different hardware.',
      },
    ],
    myContributions: [
      'Designed and implemented the collision detection system from scratch.',
      'Built multi-level dynamic difficulty scaling system.',
      'Implemented both single-player and 2-player local co-op game modes.',
      'Collaborated in a 4-member Agile team delivering under a 4-day deadline.',
    ],
    technicalImpact: [
      'Enhanced gameplay physics with frame-rate independent simulation.',
      'Optimized rendering loops reducing draw call overhead.',
      'Reduced I/O overhead through efficient event batching.',
    ],
    links: {
      github: 'https://github.com/ffathy-tarek/brick-breaker-java-OpenGl',
      demo: 'https://drive.google.com/drive/folders/19rYzrnzuasIGQYeJFxKU-Sz1mtVe6XUx?hl=ar',
      live: null,
    },
  },

  {
    id: 'ecommerce-db',
    title: 'E-Commerce Database System',
    dates: 'Jan 2026 – Feb 2026',
    role: 'Personal Project',
    shortSummary:
      'Production-grade normalized relational database schema designed for real-world transactional workloads with optimized query execution plans.',
    image: '/projects/ecommerce-db.png',
    techBadges: ['SQL Server', 'ERD Modeling', 'Database Normalization', 'Query Optimization'],
    badgeColor: '#34d399',
    technicalStack: [
      'SQL Server',
      'ERD Modeling',
      'Database Normalization (3NF)',
      'Query Optimization',
      'Execution Plan Analysis',
    ],
    engineeringDecisions: [
      {
        title: 'Third Normal Form (3NF)',
        body: 'Full normalization eliminating transitive dependencies, ensuring data integrity and reducing update anomalies across all entities.',
      },
      {
        title: 'Strategic Indexing',
        body: 'Composite and covering indexes placed based on query access patterns — avoiding over-indexing while maximizing read performance.',
      },
      {
        title: 'Referential Integrity',
        body: 'Strict foreign key constraints with cascading rules enforcing data consistency even under concurrent transactional loads.',
      },
    ],
    myContributions: [
      'Designed the full ERD covering Customers, Products, Orders, Inventory, and Payments.',
      'Implemented complex multi-table SQL JOINs for reporting and analytics queries.',
      'Optimized execution plans to reduce estimated subtree costs for high-volume queries.',
      'Applied 3NF normalization across all entity relationships.',
      'Documented schema decisions with rationale for future maintainers.',
    ],
    technicalImpact: [
      'Optimized query execution plans reducing logical read counts significantly.',
      'Reduced disk I/O costs for high-volume transactional workloads.',
      'Schema designed to handle millions of orders with minimal performance degradation.',
    ],
    links: {
      github: null,
      demo: null,
      live: null,
    },
  },
]
