export interface Project {
  id: string;
  title: string;
  /** The research problem in one line. No marketing language. */
  problem: string;
  /** What the project actually contributes. */
  contribution: string;
  modalities: string[];
  /** Small schematic drawn in the site's own visual language — see ProjectDiagram.astro. */
  diagram: 'cardiovae' | 'lsemvae' | 'tensor' | 'pykale';
  venue?: string;
  links: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    id: 'cardiovae',
    title: 'CardioVAE',
    problem:
      'Detecting cardiac haemodynamic instability without a catheter, using only tests a district hospital already runs.',
    contribution:
      'A multimodal variational autoencoder with a tri-stream pre-training strategy that learns shared and modality-specific features from chest X-rays and ECGs. Pre-trained on MIMIC-CXR and MIMIC-IV-ECG, fine-tuned on the ASPIRE registry.',
    modalities: ['Chest X-ray', '12-lead ECG'],
    diagram: 'cardiovae',
    venue: 'MICCAI 2024 · early accept, top 11%',
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2403.13658' },
      { label: 'Code', href: 'https://github.com/Shef-AIRE/AI4Cardiothoracic-CardioVAE' },
    ],
  },
  {
    id: 'ls-emvae',
    title: 'LS-EMVAE',
    problem:
      'A handheld six-lead ECG is available at the point of care, but there is almost no labelled six-lead data to train on.',
    contribution:
      'Treats each ECG lead as its own modality and fuses them with a hierarchical modality expert mechanism combining mixture- and product-of-experts, plus a latent alignment loss. Pre-trained on unlabelled 12-lead data, then transferred to six-lead tasks across the ASPIRE registry and UK Biobank.',
    modalities: ['12-lead ECG', '6-lead ECG'],
    diagram: 'lsemvae',
    venue: 'Under revision at IEEE JBHI',
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2503.13470' },
      { label: 'Code', href: 'https://github.com/Shef-AIRE/LS-EMVAE' },
    ],
  },
  {
    id: 'hemodynamics',
    title: 'Interpretable haemodynamics assessment',
    problem:
      'Clinicians will not act on a pressure estimate they cannot interrogate, however accurate it is.',
    contribution:
      'Tensor-based fusion of cardiac MRI with clinical measurements for pulmonary arterial wedge pressure and related parameters, designed so that the contribution of each modality and region can be inspected.',
    modalities: ['Cardiac MRI', 'Clinical tabular'],
    diagram: 'tensor',
    venue: 'IEEE TMI 2026 · MICCAI 2023',
    links: [
      { label: 'Paper', href: 'https://doi.org/10.1109/TMI.2026.3681722' },
      { label: 'Preprint', href: 'https://arxiv.org/abs/2404.04718' },
    ],
  },
  {
    id: 'pykale',
    title: 'PyKale',
    problem:
      'Multimodal research code rarely survives the move from one paper to the next, let alone into deployment.',
    contribution:
      'A PyTorch library for knowledge-aware machine learning from multiple sources, built around reusable pipelines rather than one-off models. One of four multimodal libraries in the PyTorch Landscape. I am a core contributor and maintainer.',
    modalities: ['PyTorch', 'Open source'],
    diagram: 'pykale',
    venue: '480+ GitHub stars',
    links: [
      { label: 'Website', href: 'https://pykale.github.io/' },
      { label: 'Code', href: 'https://github.com/pykale/pykale' },
    ],
  },
];
