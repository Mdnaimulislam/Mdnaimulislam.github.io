export interface NewsItem {
  /** Short date label, e.g. "Jul 2026". */
  date: string;
  /** One sentence. Inline <a> is allowed and rendered as HTML. */
  text: string;
}

/** Newest first. Keep to roughly the last two years. */
export const news: NewsItem[] = [
  {
    date: 'Jul 2026',
    text: '“Interpretable Multimodal Learning for Cardiovascular Hemodynamics Assessment” appeared in <a href="https://doi.org/10.1109/TMI.2026.3681722">IEEE Transactions on Medical Imaging</a>.',
  },
  {
    date: 'Jan 2026',
    text: 'Talk on single-cell surface proteomics at AI, Engineering Biology and Beyond, University of Bristol.',
  },
  {
    date: 'Oct 2025',
    text: '“Towards deployment-centric multimodal AI beyond vision and language” appeared in <a href="https://doi.org/10.1038/s42256-025-01116-5">Nature Machine Intelligence</a>.',
  },
  {
    date: 'Sep 2025',
    text: 'Spoke at the Third Workshop on Multimodal AI at the Barbican Centre, London, and organised its mini-hackathon.',
  },
  {
    date: 'Jul 2025',
    text: 'Co-organised the EMBC workshop “Open Biomedical Multimodal AI Research: From Pixels to Molecules” in Copenhagen.',
  },
  {
    date: 'Oct 2024',
    text: 'Executive Chair of the MICCAI workshop on Advancing Data Solutions in Medical Imaging AI, Morocco.',
  },
];
