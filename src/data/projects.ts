// Centralized project data
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  icon: string;
  status: 'Completed' | 'In Progress';
  year: string;
  overview?: string;
  features?: string[];
  technologies?: string[];
  challenges?: string;
  results?: string;
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projectsData: Record<string, Project> = {
  markit: {
    id: 'markit',
    title: 'MarkIT',
    subtitle: 'AI-Powered Educational Technology Platform',
    description: 'AI-powered exam management system with GPT generation and YOLOv5 computer vision for automated grading.',
    gradient: 'from-blue-500 to-cyan-500',
    icon: '📝',
    status: 'Completed',
    year: '2024',
    overview: 'MarkIT is a revolutionary AI-powered exam management system that transforms traditional paper-based examinations into a modern, automated workflow. Built by NCAI, this comprehensive platform leverages cutting-edge artificial intelligence to solve critical challenges in educational assessment, from intelligent exam creation to automated grading using advanced computer vision.',
    features: [
      'AI-Powered Exam Generation using GPT models for intelligent content creation',
      'Advanced Computer Vision Processing with YOLOv5 for bubble detection',
      'ArUco Marker Technology for automatic paper alignment and orientation',
      'Automated Grading with confidence scoring and batch processing',
      'Comprehensive Student Management with class administration',
      'Advanced Analytics & Reporting with performance dashboards',
      'Multi-Format Question Generation (multiple choice, true/false, short answer)',
      'Real-time Processing with live status updates and progress tracking',
      'Quality Assurance with AI validation for educational relevance',
      'Scalable AI Infrastructure with GPU acceleration and cloud deployment'
    ],
    technologies: [
      'React 18 with TypeScript (Frontend)',
      'FastAPI with Python (Backend)',
      'PyTorch with YOLOv5 (Computer Vision)',
      'OpenCV (Image Processing)',
      'SQLAlchemy ORM (Database)',
      'GPT Integration (AI Content Generation)',
      'ArUco Marker Detection',
      'CUDA GPU Acceleration',
      'Computer Vision Pipeline',
      'RESTful APIs'
    ],
    challenges: 'Building an AI system that could accurately detect and grade bubble sheets using computer vision, implementing intelligent exam generation with GPT models, creating a scalable platform for educational institutions, and ensuring high accuracy in automated grading while maintaining educational standards.',
    results: '90% time reduction in exam creation and grading, 95%+ accuracy in bubble detection and grading, 5-10x faster processing than manual grading, scalable solution handling 1000+ papers per batch, and comprehensive analytics for educational improvement. The platform transforms traditional assessment workflows into modern, AI-powered processes.',
    images: [],
    liveUrl: '',
    githubUrl: '',
  },
  shikayat: {
    id: 'shikayat',
    title: 'Shikayat',
    subtitle: 'AI-Powered Citizen Complaint Intelligence System',
    description: 'AI-powered citizen complaint intelligence system for transparent government-citizen communication.',
    gradient: 'from-purple-500 to-pink-500',
    icon: '📢',
    status: 'Completed',
    year: '2024',
    // Shikayat uses a custom SystemArchitecture component
  },
  stonksai: {
    id: 'stonksai',
    title: 'StonksAI',
    subtitle: 'AI-Powered Stock Market Analysis',
    description: 'AI-powered stock market analysis and prediction platform for informed trading decisions.',
    gradient: 'from-green-500 to-emerald-500',
    icon: '📈',
    status: 'In Progress',
    year: '2024',
  },
  spotterai: {
    id: 'spotterai',
    title: 'SpotterAI',
    subtitle: 'Intelligent Object Detection System',
    description: 'Intelligent object detection and tracking system using computer vision and deep learning.',
    gradient: 'from-orange-500 to-red-500',
    icon: '🎯',
    status: 'Completed',
    year: '2023',
  },
  histree: {
    id: 'histree',
    title: 'Histree',
    subtitle: 'Interactive Historical Data Visualization',
    description: 'Interactive historical data visualization platform for exploring and analyzing historical events.',
    gradient: 'from-indigo-500 to-blue-500',
    icon: '🌳',
    status: 'In Progress',
    year: '2024',
  },
  parkit: {
    id: 'parkit',
    title: 'ParkIT',
    subtitle: 'Smart Parking Management Solution',
    description: 'Smart parking management solution with real-time availability tracking and reservation system.',
    gradient: 'from-teal-500 to-cyan-500',
    icon: '🅿️',
    status: 'Completed',
    year: '2023',
  },
};

// Export as array for listing pages
export const projectsList = Object.values(projectsData);

