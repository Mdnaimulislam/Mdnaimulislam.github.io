export interface ResearchTheme {
  id: string;
  title: string;
  /** One sentence naming the problem, not the method. */
  question: string;
  body: string;
  /** Data the work draws on — shown as small chips. */
  modalities: string[];
  /** Publication ids from publications.ts, surfaced as cross-links. */
  keyWork: string[];
}

export const researchThemes: ResearchTheme[] = [
  {
    id: 'cardiovascular',
    title: 'Cardiovascular multimodal AI',
    question:
      'Can we measure heart and lung pressures without threading a catheter into a patient?',
    body: 'Diagnosing pulmonary hypertension and related conditions depends on right heart catheterisation, an invasive procedure that carries risk and is only available in specialist centres. I develop models that combine cardiac MRI, chest radiographs, electrocardiograms and routine clinical variables to estimate the same haemodynamic parameters (mean pulmonary arterial pressure, wedge pressure and right atrial pressure) and to predict mortality risk. The work is validated on the ASPIRE registry with clinicians at Sheffield Teaching Hospitals.',
    modalities: ['Cardiac MRI', 'Chest X-ray', '12-lead ECG', 'Clinical tabular'],
    keyWork: ['tmi-interpretable-hemodynamics', 'miccai-2024-cardiovae', 'miccai-2023-tensor-pawp', 'bibm-2022-pah-mortality'],
  },
  {
    id: 'low-cost',
    title: 'Low-cost and point-of-care clinical AI',
    question:
      'How does a model trained on specialist scans keep working in a clinic that does not have them?',
    body: 'A method that needs cardiac MRI is useless in general practice. I study how to transfer what a model learns from expensive, centralised modalities into the cheap tests that are already everywhere, such as a handheld six-lead ECG or a plain chest radiograph. That means pre-training on large unlabelled datasets such as MIMIC-IV-ECG and MIMIC-CXR, then fine-tuning on much smaller labelled cohorts, and keeping the model honest when a modality is missing at inference time.',
    modalities: ['6-lead ECG', 'Chest X-ray', 'MIMIC', 'UK Biobank'],
    keyWork: ['ls-emvae-jbhi', 'miccai-2024-cardiovae'],
  },
  {
    id: 'representation',
    title: 'Multimodal representation learning',
    question: 'What is the right way to fuse modalities that disagree, and to explain the result?',
    body: 'The methodological core of my work. I build variational autoencoder architectures with hierarchical modality experts that mix product-of-experts and mixture-of-experts fusion, latent alignment losses that keep shared and modality-specific representations coherent, and tensor-based fusion for imaging and tabular data. Interpretability is part of the design rather than an afterthought, because a haemodynamic estimate a cardiologist cannot interrogate will not be used. The same questions recur outside imaging, in multi-omics integration and in vision-language pre-training.',
    modalities: ['VAEs', 'Expert fusion', 'Transfer learning', 'Multi-omics'],
    keyWork: ['ls-emvae-jbhi', 'multi-omics-survey', 'medslip', 'tmi-interpretable-hemodynamics'],
  },
  {
    id: 'open-ai',
    title: 'Open and deployment-centric AI',
    question: 'What has to change for multimodal research to survive contact with deployment?',
    body: 'Most multimodal AI research optimises benchmarks that look nothing like a hospital. I contribute to the argument for a deployment-centric alternative, and I build the infrastructure behind it: PyKale, one of four multimodal libraries in the PyTorch Landscape, and the community events, tutorials and website of the UK Open Multimodal AI Network.',
    modalities: ['PyKale', 'PyTorch', 'UKOMAIN', 'Benchmarks'],
    keyWork: ['nature-mi-deployment-centric', 'multi-omics-survey'],
  },
];
