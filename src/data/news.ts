export interface NewsItem {
  /** Short date label, e.g. "Jul 2026". */
  date: string;
  /** One sentence. Inline <a> is allowed and rendered as HTML. */
  text: string;
}

/**
 * Newest first. Papers and talks only — accepted or published work, and
 * invited or conference talks.
 */
export const news: NewsItem[] = [
  {
    date: 'Jul 2026',
    text: '“Interpretable Multimodal Learning for Cardiovascular Hemodynamics Assessment” published in <a href="https://doi.org/10.1109/TMI.2026.3681722">IEEE Transactions on Medical Imaging</a>.',
  },
  {
    date: 'Jan 2026',
    text: 'Talk on model-based PD-1 gating in CD8 T cells at AI, Engineering Biology and Beyond, University of Bristol.',
  },
  {
    date: 'Oct 2025',
    text: '“Towards deployment-centric multimodal AI beyond vision and language” published in <a href="https://doi.org/10.1038/s42256-025-01116-5">Nature Machine Intelligence</a>.',
  },
  {
    date: 'Sep 2025',
    text: 'Talk on LS-EMVAE at the Third Workshop on Multimodal AI, Barbican Centre, London.',
  },
  {
    date: 'Oct 2024',
    text: '“Multimodal Variational Autoencoder for Low-cost Cardiac Hemodynamics Instability Detection” accepted at <a href="https://doi.org/10.1007/978-3-031-72378-0_28">MICCAI 2024</a> as an early accept, in the top 11% of submissions.',
  },
];
