export interface ProfileLink {
  label: string;
  href: string;
  icon: 'email' | 'scholar' | 'github' | 'linkedin' | 'orcid' | 'cv';
  /** Shown in the compact footer/contact rail as well as the hero. */
  handle?: string;
}

export const site = {
  name: 'Mohammod Naimul Islam Suvon',
  shortName: 'Mohammod Suvon',
  initials: 'MS',
  role: 'AI Research Engineer',
  group: 'Centre for Machine Intelligence',
  institution: 'University of Sheffield',
  location: 'Sheffield, United Kingdom',
  email: 'm.suvon@sheffield.ac.uk',
  url: 'https://mdnaimulislam.github.io',
  /**
   * One-line positioning statement used in the hero and in page metadata.
   */
  tagline:
    'Multimodal machine learning for cardiovascular health, built to work with the tests clinics already have.',
  /**
   * Homepage introduction. Two short paragraphs — the first says what the work
   * is for, the second says how it is done and where it goes.
   */
  intro: [
    'I build multimodal machine learning methods that read several kinds of clinical data at once, including cardiac MRI, chest radiographs, electrocardiograms and routine clinical measurements, and turn them into measurements that normally require an invasive catheter. The aim is practical: bring cardiovascular assessment closer to the point of care, where the expensive scan is often unavailable.',
    'I work at the Centre for Machine Intelligence at the University of Sheffield with Professor Haiping Lu, alongside clinicians at Sheffield Teaching Hospitals NHS Foundation Trust, and I am also a part-time PhD student in the School of Computer Science. Much of what I build is released as open-source software, and I help maintain PyKale and run the community events of the UK Open Multimodal AI Network.',
  ],
  interests: [
    'Multimodal learning',
    'Medical imaging',
    'Cardiovascular AI',
    'Representation learning',
    'Low-cost clinical AI',
    'Open-source ML',
  ],
  /**
   * Google Scholar figures. Read from the public profile — update the numbers
   * and `asOf` together when you refresh them.
   */
  metrics: {
    citations: 194,
    hIndex: 9,
    i10Index: 9,
    asOf: 'September 2026',
    source: 'https://scholar.google.com/citations?user=DGYUifQAAAAJ&hl=en',
  },
  cvPath: '/Mohammod_Suvon_CV.pdf',
  officeAddress: 'Regent Court, 211 Portobello, Sheffield S1 4DP',
} as const;

export const links: ProfileLink[] = [
  { label: 'Email', href: 'mailto:m.suvon@sheffield.ac.uk', icon: 'email', handle: 'm.suvon@sheffield.ac.uk' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=DGYUifQAAAAJ&hl=en', icon: 'scholar' },
  { label: 'GitHub', href: 'https://github.com/Mdnaimulislam', icon: 'github', handle: 'Mdnaimulislam' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/md-naimul/', icon: 'linkedin', handle: 'md-naimul' },
  { label: 'ORCID', href: 'https://orcid.org/0000-0001-9962-315X', icon: 'orcid', handle: '0000-0001-9962-315X' },
  { label: 'CV', href: '/Mohammod_Suvon_CV.pdf', icon: 'cv' },
];
