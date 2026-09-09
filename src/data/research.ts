export interface ResearchArea {
  id: string;
  title: string;
  body: string;
  /** Publication ids from publications.ts. Two at most — this is a pointer, not a list. */
  keyWork: string[];
}

export const researchAreas: ResearchArea[] = [
  {
    id: 'cardiovascular',
    title: 'Cardiovascular multimodal AI',
    body: 'Estimating invasive haemodynamic measurements from non-invasive data. The models combine cardiac MRI, chest radiographs, electrocardiograms and routine clinical variables to predict mean pulmonary arterial pressure, pulmonary arterial wedge pressure and mortality risk in pulmonary hypertension, and are validated on the ASPIRE registry.',
    keyWork: ['tmi-interpretable-hemodynamics', 'miccai-2024-cardiovae'],
  },
  {
    id: 'low-cost',
    title: 'Low-cost and point-of-care models',
    body: 'Transferring representations learned from specialist modalities to the tests available in general practice. Pre-training on large unlabelled datasets such as MIMIC-IV-ECG and MIMIC-CXR, then fine-tuning on much smaller labelled cohorts for six-lead electrocardiogram and chest radiograph settings.',
    keyWork: ['ls-emvae-jbhi'],
  },
  {
    id: 'representation',
    title: 'Multimodal representation learning',
    body: 'Architectures for fusing modalities that carry different, and sometimes conflicting, information: hierarchical modality experts combining mixture- and product-of-experts, latent alignment losses, and tensor-based fusion of imaging with tabular data. The same problems recur in multi-omics integration and in vision-language pre-training.',
    keyWork: ['multi-omics-survey', 'medslip'],
  },
  {
    id: 'open-ai',
    title: 'Deployment-centric multimodal AI',
    body: 'What multimodal methods need in order to work outside a benchmark: evaluation that reflects clinical use, graceful behaviour when a modality is missing at inference time, and implementations that survive the move from one study to the next.',
    keyWork: ['nature-mi-deployment-centric'],
  },
];
