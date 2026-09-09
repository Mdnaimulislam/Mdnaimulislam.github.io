export interface Appointment {
  role: string;
  org: string;
  unit?: string;
  location: string;
  start: string;
  end: string;
}

export const appointments: Appointment[] = [
  {
    role: 'AI Research Engineer',
    org: 'University of Sheffield',
    unit: 'Centre for Machine Intelligence',
    location: 'Sheffield, UK',
    start: 'Sep 2023',
    end: 'Present',
  },
  {
    role: 'Research Assistant, Machine Learning for Medical Image Analysis',
    org: 'University of Sheffield',
    location: 'Sheffield, UK',
    start: 'Apr 2023',
    end: 'Aug 2023',
  },
  {
    role: 'Research and Course Support, Turing Network Development Award',
    org: 'University of Sheffield',
    location: 'Sheffield, UK',
    start: 'Sep 2022',
    end: 'Mar 2023',
  },
  {
    role: 'Senior Software Engineer',
    org: 'Robo Tech Valley',
    location: 'Dhaka, Bangladesh',
    start: 'Jan 2021',
    end: 'Aug 2021',
  },
  {
    role: 'Teaching Assistant',
    org: 'North South University',
    location: 'Dhaka, Bangladesh',
    start: 'Spring 2020',
    end: 'Summer 2021',
  },
  {
    role: 'Full Stack Web Developer, Internship',
    org: 'BUET E-learning Research and Development Lab',
    location: 'Dhaka, Bangladesh',
    start: 'Sep 2020',
    end: 'Dec 2020',
  },
];

export interface Degree {
  degree: string;
  field: string;
  org: string;
  location: string;
  start: string;
  end: string;
  distinction?: string;
}

export const education: Degree[] = [
  {
    degree: 'PhD',
    field: 'Computer Science (part-time)',
    org: 'University of Sheffield',
    location: 'Sheffield, UK',
    start: 'Feb 2024',
    end: 'Present',
  },
  {
    degree: 'MSc',
    field: 'Computer Science with Speech and Language Processing',
    org: 'University of Sheffield',
    location: 'Sheffield, UK',
    start: 'Sep 2021',
    end: 'Sep 2022',
    distinction: 'Distinction',
  },
  {
    degree: 'BSc',
    field: 'Computer Science and Engineering',
    org: 'North South University',
    location: 'Dhaka, Bangladesh',
    start: 'Jan 2017',
    end: 'Aug 2020',
    distinction: 'Cum Laude',
  },
];

export interface Award {
  title: string;
  org: string;
  year: string;
  detail?: string;
}

export const awards: Award[] = [
  {
    title: 'Fretwell-Downing Prize',
    org: 'Department of Computer Science, University of Sheffield',
    year: '2022',
    detail: 'Awarded for the best MSc dissertation in the department.',
  },
  {
    title: 'Academic Performance Distinction Award',
    org: 'University of Sheffield',
    year: '2022',
    detail: 'MSc, academic year 2021/22.',
  },
  {
    title: 'Cum Laude',
    org: 'North South University',
    year: '2020',
    detail: 'BSc academic performance distinction.',
  },
  {
    title: 'Academic Excellence Scholarship',
    org: 'North South University',
    year: '2017–2020',
    detail: 'Merit scholarship covering 25% of tuition fees.',
  },
];

export interface Talk {
  title: string;
  event: string;
  venue: string;
  date: string;
}

export const talks: Talk[] = [
  {
    title:
      'Model-Based PD-1 High/Low Gating in CD8 T Cells for Tumour Microenvironment Profiling from Single-Cell Surface Proteomics',
    event: 'AI, Engineering Biology and Beyond',
    venue: 'University of Bristol',
    date: 'January 2026',
  },
  {
    title: 'Multimodal Latent Fusion of ECG Leads for Early Assessment of Pulmonary Hypertension',
    event: 'Third Workshop on Multimodal AI',
    venue: 'Barbican Centre, London',
    date: 'September 2025',
  },
  {
    title: 'Multimodal Variational Autoencoder for Low-cost Cardiac Hemodynamics Instability Detection',
    event: 'Second Workshop on Multimodal AI',
    venue: 'University of Sheffield',
    date: 'June 2024',
  },
  {
    title: 'Multimodal Cardiothoracic Disease Prediction',
    event: 'First Multimodal AI Research Sprint',
    venue: 'Alan Turing Institute, London',
    date: 'November 2023',
  },
];

export interface ServiceGroup {
  heading: string;
  items: string[];
}

export const service: ServiceGroup[] = [
  {
    heading: 'Organising and chairing',
    items: [
      'Executive Chair, MICCAI Workshop on Advancing Data Solutions in Medical Imaging AI, Morocco, October 2024',
      'Organiser, EMBC Workshop on Open Biomedical Multimodal AI Research: From Pixels to Molecules, Copenhagen, July 2025',
      'Organiser, Mini-Hackathon on Multimodal AI, Third Workshop on Multimodal AI, London, September 2025',
      'Technical support at five UK Open Multimodal AI Network workshops, forums and research sprints, 2023–2026',
    ],
  },
  {
    heading: 'Journal reviewing',
    items: [
      'Nucleic Acids Research',
      'IEEE Transactions on Cognitive and Developmental Systems',
      'Bioinformatics',
      'IEEE Access',
      'Pest Management Science',
    ],
  },
  {
    heading: 'Conference and workshop reviewing',
    items: [
      'International Conference on Medical Image Computing and Computer Assisted Intervention, 2025 and 2026',
      'MICCAI Workshop on Advancing Data Solutions in Medical Imaging AI, 2024',
      'International Conference on Recent Trends in Image Processing and Pattern Recognition, 2023',
    ],
  },
  {
    heading: 'Grant applications',
    items: [
      'Co-applicant, NIHR Programme Development Grant (PIs: Prof. Andy Swift and Prof. David G. Kiely), submitted',
      'Co-applicant, UKRI Generative AI Hub Dataset Creation Challenge (PI: Dr Chen Chen), submitted',
    ],
  },
];

export interface Software {
  name: string;
  role: string;
  description: string;
  href: string;
  meta?: string;
}

export const software: Software[] = [
  {
    name: 'PyKale',
    role: 'Core contributor and maintainer',
    description:
      'Knowledge-aware machine learning from multiple sources, part of the PyTorch ecosystem and one of four multimodal libraries in the PyTorch Landscape.',
    href: 'https://github.com/pykale/pykale',
    meta: '480+ stars',
  },
  {
    name: 'UK Open Multimodal AI Network',
    role: 'Creator and core maintainer of the network website',
    description:
      'The public home of the EPSRC-funded UKOMAIN network, covering events, funding calls, resources and the multimodal AI landscape explorer.',
    href: 'https://multimodalai.github.io/',
    meta: '2023–2026',
  },
  {
    name: 'Open Biomedical Multimodal AI tutorials',
    role: 'Core contributor',
    description:
      'Hands-on teaching material for multimodal AI in biomedicine, used at the EMBC 2025 workshop and network events.',
    href: 'https://github.com/pykale/mmai-tutorials',
  },
  {
    name: 'Introduction to Transparent Machine Learning',
    role: 'Contributor',
    description:
      'An online learning course in responsible AI supported by the Alan Turing Institute.',
    href: 'https://github.com/alan-turing-institute/Intro-to-transparent-ML-course',
    meta: '2022',
  },
  {
    name: 'EduBot',
    role: 'Creator and maintainer',
    description: 'Software for connecting with an educational robot.',
    href: 'https://github.com/Mdnaimulislam/EduBot-FinalApp',
  },
];
