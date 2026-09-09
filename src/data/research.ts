export interface ResearchArea {
  id: string;
  title: string;
  body: string;
  /**
   * Figure from the paper named in `figureCredit`, stored as
   * /img/research/<id>.webp and .jpg.
   */
  figureAlt: string;
  figureCredit: string;
  /** Publication ids from publications.ts. Two at most. */
  keyWork: string[];
}

export const researchAreas: ResearchArea[] = [
  {
    id: 'cardiovascular',
    title: 'Cardiovascular multimodal AI',
    body: 'Estimating invasive haemodynamic measurements from non-invasive data. The models combine cardiac MRI with electronic health records to predict pulmonary arterial wedge pressure and related parameters, with interpretability built into the pipeline rather than added afterwards. Validated on the ASPIRE registry with clinicians at Sheffield Teaching Hospitals.',
    figureAlt:
      'Five-stage pipeline: CMR preprocessing and registration, sample filtering, tensor-based CMR feature extraction, graph attention over electronic health record features, then fusion and classification.',
    figureCredit: 'tmi-interpretable-hemodynamics',
    keyWork: ['tmi-interpretable-hemodynamics', 'miccai-2023-tensor-pawp'],
  },
  {
    id: 'low-cost',
    title: 'Low-cost and point-of-care models',
    body: 'Transferring representations learned from large unlabelled datasets to the tests a district hospital already runs. Chest X-ray and ECG streams are pre-trained on MIMIC-CXR and MIMIC-IV-ECG, then fine-tuned on a much smaller labelled cohort, so cardiac assessment does not depend on a specialist scan being available.',
    figureAlt:
      'Tri-stream multimodal pre-training on chest X-ray and ECG producing a shared latent space, whose frozen weights are fine-tuned on the ASPIRE registry to classify pulmonary arterial wedge pressure.',
    figureCredit: 'miccai-2024-cardiovae',
    keyWork: ['miccai-2024-cardiovae', 'bibm-2022-pah-mortality'],
  },
  {
    id: 'representation',
    title: 'Multimodal representation learning',
    body: 'Architectures for fusing modalities that carry different, and sometimes conflicting, information. A hierarchical modality expert combines product-of-experts and mixture-of-experts fusion with a latent alignment loss, treating each ECG lead as its own modality so a twelve-lead model can transfer to a six-lead one. The same questions recur in multi-omics integration.',
    figureAlt:
      'Lead-specific encoders map each ECG lead to its own latent distribution, which a hierarchical modality expert fuses in two levels, product-of-experts then mixture-of-experts, into a joint representation.',
    figureCredit: 'ls-emvae-jbhi',
    keyWork: ['ls-emvae-jbhi', 'multi-omics-survey'],
  },
];
