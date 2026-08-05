import pubEntrust from "@/assets/media/pub-entrust.jpg";
import pubProton from "@/assets/media/pub-proton.jpg";
import pubGraphDiff from "@/assets/media/pub-graph-diff.jpg";
import pubVillani from "@/assets/media/pub-villani.jpg";
import pubEthical from "@/assets/media/pub-ethical.jpg";
import pubLesion from "@/assets/media/pub-lesion.jpg";
import pubProfonet from "@/assets/media/pub-profonet.jpg";
import pubSeanet from "@/assets/media/pub-seanet.jpg";
import pubPamUnet from "@/assets/media/pub-pam-unet.jpg";
import pubDapodet from "@/assets/media/pub-dapodet.jpg";

export type Publication = {
  title: string;
  authors: string;
  year: string;
  /** Venue if accepted (e.g. "MICCAI 2026"); use "Preprint" otherwise. */
  venue: string;
  /** One-paragraph description of the paper. */
  summary: string;
  /** Figure, teaser image, or GIF. */
  image: string;
  /** Paper / preprint / publisher URL for the title link. */
  href?: string;
  /** Curated for the homepage rather than inferred from array order. */
  featured?: boolean;
};

export const publications: Publication[] = [
  {
    title:
      "EnTrust: Modeling Inter-Modal Conflict for Trustworthy Multimodal Medical Image Analysis",
    authors: "Abhijit Das, Dwarikanath Mahapatra, et al.",
    year: "2026",
    venue: "Preprint",
    summary:
      "When imaging modalities disagree, most fusion models silently average the conflict away. EnTrust models inter-modal conflict explicitly as a first-class signal, letting the network express how much each modality can be trusted for a given case. This yields calibrated predictions and an interpretable account of where and why the modalities diverge.",
    image: pubEntrust,
    href: "https://arxiv.org/abs/2606.21384",
    featured: true,
  },
  {
    title: "PROTON: Prototype-Based Test-Time Online OOD Detection for Medical VLMs",
    authors:
      "Abhijit Das, N. Wasalathilaka, Y. Lu, A. Dukre, D. Mahapatra, S. Khan, I. Razzak",
    year: "2026",
    venue: "MICCAI 2026",
    summary:
      "Deployed medical models constantly meet cases outside their training distribution. PROTON maintains prototype representations that adapt online at test time, flagging out-of-distribution inputs as they arrive rather than after a batch has been processed. It gives clinical vision-language systems a lightweight guardrail that needs no access to the original training data.",
    image: pubProton,
    href: "https://arxiv.org/abs/2606.20913",
    featured: true,
  },
  {
    title:
      "Graph-of-Differences: Anatomy-Structured Difference Alignment for Medical Image Re-Identification",
    authors: "Abhijit Das*, N. Wasalathilaka*, I. Razzak, D. Mahapatra",
    year: "2026",
    venue: "MICCAI 2026",
    summary:
      "Re-identifying the same patient across scans requires reasoning about what changed and what did not. This work represents differences between studies as a graph structured by anatomy, aligning corresponding regions before comparing them. The anatomical structure makes matching robust to acquisition changes while keeping the comparison interpretable region by region.",
    image: pubGraphDiff,
    href: "https://arxiv.org/abs/2606.21368",
    featured: true,
  },
  {
    title:
      "Weight-Decay Turns Transformer Loss Landscapes Villani: Functional-Analytic Foundations for Optimization and Generalization",
    authors: "Abhijit Das, S. Dutta",
    year: "2026",
    venue: "Preprint",
    summary:
      "This theoretical study asks what weight decay actually does to the geometry a transformer optimises over. Using a functional-analytic framing, it shows that weight decay induces Villani-type structure in the loss landscape, which in turn supports well-behaved optimisation and generalisation. The analysis links a common training heuristic to concrete properties of the objective.",
    image: pubVillani,
    href: "https://arxiv.org/abs/2605.06599",
  },
  {
    title: "Ethical Framework for Responsible Foundational Models in Medical Imaging",
    authors:
      "D. Jha, G. Durak, Abhijit Das, J. Sanjotra, O. Susladkar, S. Sarkar, A. Rauniyar, et al.",
    year: "2025",
    venue: "Frontiers in Medicine",
    summary:
      "Foundation models are entering clinical imaging faster than the norms governing them. This paper sets out a practical ethical framework covering data provenance, evaluation, bias auditing, deployment monitoring, and accountability for medical foundation models. It is written to be actionable for research groups and clinical teams rather than purely declarative.",
    image: pubEthical,
    href: "https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2025.1544501/full",
  },
  {
    title:
      "Confidence-guided Semi-supervised Learning for Generalized Lesion Localization in X-ray Images",
    authors:
      "Abhijit Das, V. Gorade, K. Kumar, S. Chakraborty, D. Mahapatra, S. Roy",
    year: "2024",
    venue: "MICCAI 2024",
    summary:
      "Lesion localization suffers when only a small fraction of X-rays carry box-level annotation. This method uses model confidence to decide which unlabelled predictions deserve to be treated as supervision, filtering noisy pseudo-labels before they corrupt training. It generalises across lesion types while relying on a small labelled core set.",
    image: pubLesion,
    href: "https://link.springer.com/chapter/10.1007/978-3-031-72378-0_23",
  },
  {
    title: "ProFONet: Prototypical Feature Space Optimized Network for Few-shot Classification",
    authors: "Abhijit Das, V. Gorade, D. Jha, K. Biswas, P. Raj, U. Bagci",
    year: "2024",
    venue: "ICPR 2024",
    summary:
      "Few-shot classification depends entirely on how well the feature space separates classes from a handful of examples. ProFONet optimises the prototypical feature space directly, shaping the embedding so that class prototypes stay compact and well separated. The result is stronger low-shot accuracy without additional data or larger backbones.",
    image: pubProfonet,
    href: "https://link.springer.com/chapter/10.1007/978-3-031-78183-4_25",
  },
  {
    title:
      "SEANet: Rethinking Skip-Connections Design in Encoder-Decoder Networks via Synergistic Spatial-Spectral Fusion for LDCT Denoising",
    authors: "Abhijit Das, V. Gorade, D. Mahapatra, S. Roy",
    year: "2024",
    venue: "ICPR 2024",
    summary:
      "Low-dose CT denoising must remove noise without erasing the fine structures clinicians rely on. SEANet rethinks the skip connections of an encoder-decoder network, fusing spatial and spectral information so that detail is carried forward while noise is not. The design improves reconstruction quality at reduced radiation dose.",
    image: pubSeanet,
    href: "https://link.springer.com/chapter/10.1007/978-3-031-78198-8_29",
  },
  {
    title: "PAM-UNet: Shifting Attention on Region of Interest in Medical Images",
    authors:
      "Abhijit Das, Debesh Jha, Vandan Gorade, Koushik Biswas, Hongyi Pan, Zheyuan Zhang, Daniela P. Ladner, Yury Velichko, Amir Borhani, Ulas Bagci",
    year: "2024",
    venue: "IEEE EMBC 2024",
    summary:
      "Segmentation networks spend much of their capacity on background that does not matter clinically. PAM-UNet shifts attention onto the region of interest, concentrating representational effort where the anatomy or pathology actually lies. It improves segmentation of small and low-contrast structures while remaining a lightweight U-Net variant.",
    image: pubPamUnet,
    href: "https://arxiv.org/abs/2405.01503",
  },
  {
    title:
      "Enhancing Colonoscopy Outcomes with DAPoDet-based AI for Real-time Sessile Serrated Polyp Detection",
    authors:
      "Abhijit Das, Debesh Jha, Nikhil Tomar, Neethi Dasu, Mark Geissler, Dayang Wang, Mena Bakhit, Kirti Dasu, Tyler Berzin, Ulas Bagci",
    year: "2024",
    venue: "DDW 2024",
    summary:
      "Sessile serrated polyps are flat, subtle, and among the most frequently missed lesions during colonoscopy. DAPoDet detects them in real time on live endoscopic video, running fast enough to sit inside the clinical workflow rather than beside it. The study reports detection performance in a setting that reflects how endoscopists actually work.",
    image: pubDapodet,
    href: "https://www.giejournal.org/article/S0016-5107(24)00898-8/fulltext",
  },
];

export const patents = [
  {
    title:
      "Quantum-Inspired Convolutional Neural Network for Imaging: Bridging Quantum Physics and Deep Learning",
    authors: "Abhijit Das et al.",
  },
  {
    title:
      "Detect Internal Organ Spans in 3D from External Landmarks Using Symbolic Regression",
    authors: "Abhijit Das et al.",
  },
];
