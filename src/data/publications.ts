export type PubType = 'journal' | 'conference' | 'preprint' | 'abstract';

export interface PublicationLink {
  label: string;
  href: string;
}

export interface Publication {
  /** Stable slug, used for anchors. */
  id: string;
  title: string;
  /** Author string. "M. N. I. Suvon" is emphasised automatically — keep that exact spelling. */
  authors: string;
  /** Full venue name, shown under the title. */
  venue: string;
  /** Short label for the venue chip, e.g. "MICCAI 2024". */
  venueShort: string;
  year: number;
  type: PubType;
  /** Only for work that is not yet published, e.g. "Under major revision". */
  status?: string;
  /** A distinction worth showing, e.g. an early-acceptance note. */
  note?: string;
  authorPosition?: 'first' | 'second' | 'co-author';
  /** Google Scholar citation count at the date in `site.metrics.asOf`. */
  citations?: number;
  /** Ids from research.ts — drives the theme cross-links. */
  themes: string[];
  links: PublicationLink[];
  /** Shown in the default "Selected" view on the homepage. */
  selected?: boolean;
}

export const publications: Publication[] = [
  {
    id: 'ls-emvae-jbhi',
    title: 'Multimodal Latent Fusion of ECG Leads for Early Assessment of Pulmonary Hypertension',
    authors:
      'M. N. I. Suvon, S. Zhou, P. C. Tripathi, W. Fan, S. Alabed, B. Khanal, V. Osmani, A. J. Swift, C. Chen and H. Lu',
    venue: 'IEEE Journal of Biomedical and Health Informatics',
    venueShort: 'IEEE JBHI',
    year: 2025,
    type: 'journal',
    status: 'Under major revision',
    authorPosition: 'first',
    themes: ['low-cost', 'representation'],
    citations: 1,
    selected: true,
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2503.13470' },
      { label: 'Code', href: 'https://github.com/Shef-AIRE/LS-EMVAE' },
    ],
  },
  {
    id: 'tmi-interpretable-hemodynamics',
    title: 'Interpretable Multimodal Learning for Cardiovascular Hemodynamics Assessment',
    authors:
      'P. C. Tripathi, S. Tabakhi, M. N. I. Suvon, L. Schobs, S. Alabed, A. J. Swift, S. Zhou and H. Lu',
    venue: 'IEEE Transactions on Medical Imaging, 45(7), 3637–3648',
    venueShort: 'IEEE TMI',
    year: 2026,
    type: 'journal',
    authorPosition: 'co-author',
    citations: 5,
    themes: ['cardiovascular', 'representation'],
    selected: true,
    links: [
      { label: 'DOI', href: 'https://doi.org/10.1109/TMI.2026.3681722' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2404.04718' },
      { label: 'PubMed', href: 'https://pubmed.ncbi.nlm.nih.gov/41950128/' },
    ],
  },
  {
    id: 'nature-mi-deployment-centric',
    title: 'Towards deployment-centric multimodal AI beyond vision and language',
    authors:
      'X. Liu, J. Zhang, S. Zhou, T. L. van der Plas, A. Vijayaraghavan, A. Grishina, …, M. N. I. Suvon, …, P. H. Charlton and H. Lu',
    venue: 'Nature Machine Intelligence, 7(10), 1612–1624',
    venueShort: 'Nature MI',
    year: 2025,
    type: 'journal',
    authorPosition: 'co-author',
    citations: 15,
    themes: ['open-ai'],
    selected: true,
    links: [
      { label: 'DOI', href: 'https://doi.org/10.1038/s42256-025-01116-5' },
      { label: 'Journal', href: 'https://www.nature.com/articles/s42256-025-01116-5' },
    ],
  },
  {
    id: 'miccai-2024-cardiovae',
    title: 'Multimodal Variational Autoencoder for Low-cost Cardiac Hemodynamics Instability Detection',
    authors:
      'M. N. I. Suvon, P. C. Tripathi, W. Fan, S. Zhou, X. Liu, S. Alabed, V. Osmani, A. J. Swift, C. Chen and H. Lu',
    venue:
      '27th International Conference on Medical Image Computing and Computer-Assisted Intervention, 296–306',
    venueShort: 'MICCAI 2024',
    year: 2024,
    type: 'conference',
    note: 'Early accept, top 11%',
    authorPosition: 'first',
    citations: 12,
    themes: ['cardiovascular', 'low-cost', 'representation'],
    selected: true,
    links: [
      { label: 'DOI', href: 'https://doi.org/10.1007/978-3-031-72378-0_28' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2403.13658' },
      { label: 'Code', href: 'https://github.com/Shef-AIRE/AI4Cardiothoracic-CardioVAE' },
    ],
  },
  {
    id: 'miccai-2023-tensor-pawp',
    title:
      'Tensor-based Multimodal Learning for Prediction of Pulmonary Arterial Wedge Pressure from Cardiac MRI',
    authors: 'P. C. Tripathi, M. N. I. Suvon, L. Schobs, S. Zhou, S. Alabed, A. J. Swift and H. Lu',
    venue:
      '26th International Conference on Medical Image Computing and Computer-Assisted Intervention, 206–215',
    venueShort: 'MICCAI 2023',
    year: 2023,
    type: 'conference',
    authorPosition: 'second',
    citations: 14,
    themes: ['cardiovascular', 'representation'],
    selected: true,
    links: [{ label: 'DOI', href: 'https://doi.org/10.1007/978-3-031-43990-2_20' }],
  },
  {
    id: 'multi-omics-survey',
    title: 'Multimodal Learning for Multi-omics: A Survey',
    authors: 'S. Tabakhi, M. N. I. Suvon, P. Ahadian and H. Lu',
    venue: 'World Scientific Annual Review of Artificial Intelligence, 1, 2250004',
    venueShort: 'World Sci. Rev. AI',
    year: 2023,
    type: 'journal',
    authorPosition: 'second',
    citations: 40,
    themes: ['representation', 'open-ai'],
    selected: true,
    links: [{ label: 'DOI', href: 'https://doi.org/10.1142/S2811032322500047' }],
  },
  {
    id: 'medslip',
    title: 'MeDSLIP: Medical Dual-Stream Language-Image Pre-training for Fine-grained Alignment',
    authors:
      'W. Fan, M. N. I. Suvon, S. Zhou, X. Liu, S. Alabed, V. Osmani, A. J. Swift, C. Chen and H. Lu',
    venue: 'arXiv preprint',
    venueShort: 'Preprint',
    year: 2025,
    type: 'preprint',
    authorPosition: 'second',
    citations: 10,
    themes: ['representation'],
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2403.10635' }],
  },
  {
    id: 'bibm-2022-pah-mortality',
    title: 'Multimodal Learning for Predicting Mortality in Patients with Pulmonary Arterial Hypertension',
    authors: 'M. N. I. Suvon, P. C. Tripathi, S. Alabed, A. J. Swift and H. Lu',
    venue: 'IEEE International Conference on Bioinformatics and Biomedicine, 2704–2710',
    venueShort: 'IEEE BIBM 2022',
    year: 2022,
    type: 'conference',
    authorPosition: 'first',
    citations: 13,
    themes: ['cardiovascular'],
    links: [{ label: 'DOI', href: 'https://doi.org/10.1109/BIBM55620.2022.9995597' }],
  },
  {
    id: 'diabetic-medicine-2025',
    title: 'AI-driven prediction of placebo and treatment responses in painful diabetic neuropathy',
    authors:
      'D. Selvarajah, S. Zhou, M. N. I. Suvon, S. Tesfaye, J. Wild, A. Segerdahl, …, and H. Lu',
    venue: 'Diabetic Medicine, 42',
    venueShort: 'Diabetic Med.',
    year: 2025,
    type: 'abstract',
    authorPosition: 'co-author',
    themes: ['representation'],
    links: [],
  },
  {
    id: 'diabetologia-2024',
    title:
      'Leveraging artificial intelligence for predicting placebo vs treatment response in painful diabetic neuropathy',
    authors:
      'D. Selvarajah, P. C. Tripathi, K. Teh, S. Zhou, M. N. I. Suvon, S. Tesfaye, J. Wild, D. Bennett, A. Segerdahl, D. Steel, L. Colvin and H. Lu',
    venue: 'Diabetologia, 67, S444',
    venueShort: 'Diabetologia',
    year: 2024,
    type: 'abstract',
    authorPosition: 'co-author',
    themes: ['representation'],
    links: [],
  },
  {
    id: 'ijai-admission-prediction',
    title:
      'Masters and Doctor of Philosophy admission prediction of Bangladeshi students into different classes of universities',
    authors: 'M. N. I. Suvon, M. Alam, S. C. Siam, M. Ferdous and R. Khan',
    venue: 'IAES International Journal of Artificial Intelligence, 11(4), 1545–1553',
    venueShort: 'IAES IJ-AI',
    year: 2022,
    type: 'journal',
    authorPosition: 'first',
    citations: 12,
    themes: [],
    links: [{ label: 'DOI', href: 'https://doi.org/10.11591/ijai.v11.i4.pp1545-1553' }],
  },
  {
    id: 'covid-fuzzy-ct',
    title: 'Application of fuzzy logic on CT-scan images of COVID-19 patients',
    authors:
      'F. Noor, M. R. Tanjim, M. J. Rahim, M. N. I. Suvon, F. K. Porna, S. Ahmed, M. A. A. Kaioum and R. Rahman',
    venue: 'International Journal of Intelligent Information and Database Systems, 14(4), 333–348',
    venueShort: 'IJIIDS',
    year: 2021,
    type: 'journal',
    authorPosition: 'co-author',
    citations: 6,
    themes: [],
    links: [{ label: 'DOI', href: 'https://doi.org/10.1504/IJIIDS.2021.118561' }],
  },
  {
    id: 'iemaiccloud-2021-face-mask',
    title: 'Social Distance Measurement and Face Mask Detection Using Deep Learning Models',
    authors: 'M. M. Alam, M. N. I. Suvon and R. Khan',
    venue:
      'International Conference on Intelligent Emerging Methods of Artificial Intelligence and Cloud Computing, 540–549',
    venueShort: 'IEMAICLOUD 2021',
    year: 2021,
    type: 'conference',
    authorPosition: 'second',
    citations: 1,
    themes: [],
    links: [{ label: 'DOI', href: 'https://doi.org/10.1007/978-3-030-92905-3_66' }],
  },
  {
    id: 'icccis-2021-student-review',
    title: 'Automated Student Review System with Computer Vision and Convolutional Neural Network',
    authors: 'S. C. Siam, A. Faisal, N. Mahrab, A. B. Haque and M. N. I. Suvon',
    venue: 'International Conference on Computing, Communication, and Intelligent Systems, 493–497',
    venueShort: 'ICCCIS 2021',
    year: 2021,
    type: 'conference',
    authorPosition: 'co-author',
    citations: 12,
    themes: [],
    links: [{ label: 'DOI', href: 'https://doi.org/10.1109/ICCCIS51004.2021.9397164' }],
  },
  {
    id: 'etcce-2021-wbc-cancer',
    title: 'Towards Efficient Segmentation and Classification of White Blood Cell Cancer Using Deep Learning',
    authors: 'A. Iqbal, M. F. Ahmed, M. N. I. Suvon, S. D. Shuvo and A. Fahmin',
    venue: 'Emerging Technology in Computing, Communication and Electronics, 1–6',
    venueShort: 'ETCCE 2021',
    year: 2021,
    type: 'conference',
    authorPosition: 'co-author',
    citations: 8,
    themes: [],
    links: [{ label: 'DOI', href: 'https://doi.org/10.1109/ETCCE54784.2021.9689839' }],
  },
  {
    id: 'tencon-2021-rice-paddy',
    title:
      'Rice Paddy Disease Detection and Disease Affected Area Segmentation Using Convolutional Neural Networks',
    authors: 'F. Mashroor, I. F. Ishrak, S. M. Alvee, A. Jahan, M. N. I. Suvon and S. Siddique',
    venue: 'IEEE Region 10 Conference (TENCON), 891–896',
    venueShort: 'TENCON 2021',
    year: 2021,
    type: 'conference',
    authorPosition: 'co-author',
    citations: 9,
    themes: [],
    links: [{ label: 'DOI', href: 'https://doi.org/10.1109/TENCON54134.2021.9707192' }],
  },
  {
    id: 'iicaiet-2020-number-plate',
    title: 'Real Time Bangla Number Plate Recognition using Computer Vision and Convolutional Neural Network',
    authors: 'M. N. I. Suvon, M. Ferdous and R. Khan',
    venue: 'IEEE International Conference on Artificial Intelligence in Engineering and Technology, 1–6',
    venueShort: 'IICAIET 2020',
    year: 2020,
    type: 'conference',
    authorPosition: 'first',
    citations: 36,
    themes: [],
    links: [{ label: 'DOI', href: 'https://doi.org/10.1109/IICAIET49801.2020.9257843' }],
  },
];

export const publicationStats = {
  total: publications.length,
  journal: publications.filter((p) => p.type === 'journal').length,
  conference: publications.filter((p) => p.type === 'conference').length,
  firstAuthor: publications.filter((p) => p.authorPosition === 'first').length,
};
