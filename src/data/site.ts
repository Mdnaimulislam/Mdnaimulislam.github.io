export interface ProfileLink {
  label: string;
  href: string;
  icon: 'email' | 'scholar' | 'github' | 'linkedin' | 'orcid' | 'cv' | 'page';
  handle?: string;
}

export interface Interest {
  label: string;
  detail: string;
}

export const site = {
  name: 'Mohammod Naimul Islam Suvon',
  shortName: 'Mohammod Suvon',
  role: 'AI Research Engineer',
  group: 'Centre for Machine Intelligence',
  institution: 'University of Sheffield',
  location: 'Sheffield, United Kingdom',
  email: 'm.suvon@sheffield.ac.uk',
  url: 'https://mdnaimulislam.github.io',
  /**
   * Biography. Plain paragraphs; inline <a> is allowed and rendered as HTML.
   * Keep it factual and short — three paragraphs at most.
   */
  bio: [
    'I am an AI Research Engineer at the <a href="https://www.sheffield.ac.uk/machine-intelligence">Centre for Machine Intelligence</a>, University of Sheffield, working with <a href="https://haipinglu.github.io/">Professor Haiping Lu</a>. I am also a part-time PhD student in the <a href="https://www.sheffield.ac.uk/cs">School of Computer Science</a>.',
    'My research is on multimodal machine learning for healthcare. I develop methods that estimate cardiovascular measurements normally obtained by invasive catheterisation from routinely collected imaging and clinical data, working with clinicians at <a href="https://www.sth.nhs.uk/">Sheffield Teaching Hospitals NHS Foundation Trust</a>.',
    'I am a core maintainer of <a href="https://github.com/pykale/pykale">PyKale</a>, a multimodal learning library in the PyTorch ecosystem, and I build and run the community activities of the <a href="https://multimodalai.github.io/">UK Open Multimodal AI Network</a>.',
  ],
  interests: [
    {
      label: 'Multimodal learning',
      detail: 'Representation learning, variational autoencoders, modality fusion, transfer learning',
    },
    {
      label: 'Medical imaging and signals',
      detail: 'Cardiac MRI, chest radiographs, 12- and 6-lead electrocardiograms',
    },
    {
      label: 'Clinical AI',
      detail: 'Cardiovascular haemodynamics, pulmonary hypertension, point-of-care models',
    },
    {
      label: 'Research software',
      detail: 'PyKale, reproducible multimodal pipelines, open benchmarks',
    },
  ] as Interest[],
  /** Google Scholar figures. Update the numbers and `asOf` together. */
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
  {
    label: 'University profile',
    href: 'https://www.sheffield.ac.uk/cs/people/research-staff/mohammod-naimul-islam-suvon',
    icon: 'page',
  },
  { label: 'CV', href: '/Mohammod_Suvon_CV.pdf', icon: 'cv' },
];
