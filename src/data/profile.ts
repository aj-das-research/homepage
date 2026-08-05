import cvPdf from "@/assets/media/cv/CV_Abhijit_Das_MBZUAI.pdf?url";
import profilePhoto from "@/assets/media/profile_photo/homepage-profile.jpeg";

export const profile = {
  name: "Abhijit Das",
  role: "PhD in Machine Learning, MBZUAI",
  secondaryRole: "CTO, MedOS Limited",
  location: "MBZUAI, UAE",
  headline: "I build scientific foundation models and agentic systems for personalized medicine.",
  heroSummary:
    "Machine learning researcher working on scientific foundation models, autonomous discovery for personalized medicine, AI alignment and interpretability, and scalable inference.",
  summary:
    "PhD student and AI research engineer working on scientific foundation models and world models, autonomous discovery for personalized medicine, AI for AI (alignment, safety, interpretability), and scalable edge inference.",
  /** Compact three-part copy for the homepage About column. */
  homeBio: {
    about: [
      "I am a PhD student in Machine Learning at MBZUAI and CTO of MedOS Limited, based in Abu Dhabi. My path into this work grew from a simple conviction: if AI is to matter in science and medicine, it must earn trust where the cost of being wrong is highest. That belief shapes how I study, build, and lead. I am open to internships and visiting researcher positions \u2014 please reach out. My CV is available here.",
    ],
    researchInterests: [
      {
        title: "Scientific Foundation Models and World Models",
        detail:
          "pretraining, post-training, causal RL, visual CoT, test-time adaptation for multimodal LLMs, and diffusion models",
      },
      {
        title: "Autonomous Scientific Discovery for Personalized Medicine",
        detail:
          "self-evolving agents for drug discovery, wellness, and vitality",
      },
      {
        title: "AI for AI",
        detail: "alignment, safety, and mechanistic interpretability",
      },
      {
        title: "AI Scalability",
        detail:
          "inference optimization, edge AI models, agent-native memory, and knowledge distillation",
      },
    ],
    medicineVision:
      "In the next five years, AI in medicine will shift from narrow predictors to scientific partners: foundation and world models that simulate biology, agents that propose and refine personalized interventions for drug discovery and wellness, and systems that remain aligned, interpretable, and fast enough for the edge of care. The winners will not be the largest models \u2014 they will be the ones clinicians and scientists can trust to discover, explain, and act under real constraints.",
  },
  longBio: [
    "I am a PhD student and AI Research Engineer based in the UAE, with three years of experience developing and deploying computer-vision, multimodal, and real-time inference systems. I have built vision pipelines operating at 76 FPS, sub-second streaming ASR systems, and scalable model-serving infrastructure using PyTorch, C++, Docker, and cloud platforms.",
    "My research centres on scientific foundation models and world models, autonomous agents for personalized medicine, AI for AI (alignment, safety, and mechanistic interpretability), and the scalability stack that lets these systems run at the edge of care.",
    "Alongside research, I care about the engineering that makes it real: inference optimization, knowledge distillation, agent-native memory, and hardware-aware deployment inside clinical and discovery workflows.",
    "I welcome opportunities in academia and research labs \u2014 including full-time roles, visiting fellowships, and internships. A copy of my CV is available here.",
    "You can reach me at abhijit.das@mbzuai.ac.ae.",
  ],
  email: "abhijit.das@mbzuai.ac.ae",
  phone: "+91 8101969424",
  scholar: "https://scholar.google.com/citations?user=L3Rf6kkAAAAJ&hl=en",
  github: "https://github.com/aj-das-research",
  linkedin: "https://www.linkedin.com/in/abhijit-das-b91220233/",
  mbzuaiUrl: "https://mbzuai.ac.ae/",
  medosUrl: "https://www.medos.tech",
  cvUrl: cvPdf,
  photoUrl: profilePhoto,
  quote: {
    text: "All models are wrong, but some are useful.",
    author: "George Box",
  },
  researchAreas: [
    {
      title: "Scientific Foundation Models and World Models",
      description:
        "Pretraining, post-training, causal RL, visual CoT, test-time adaptation for multimodal LLMs, and diffusion models.",
    },
    {
      title: "Autonomous Scientific Discovery for Personalized Medicine",
      description:
        "Self-evolving agents for drug discovery, wellness, and vitality.",
    },
    {
      title: "AI for AI",
      description: "Alignment, safety, and mechanistic interpretability.",
    },
    {
      title: "AI Scalability",
      description:
        "Inference optimization, edge AI models, agent-native memory, and knowledge distillation.",
    },
  ],
};

export const currently = [
  { title: "Research Engineer I", org: "MBZUAI", period: "Jan 2026 \u2014 Present" },
  { title: "Co-Founder & CTO", org: "MedOS Limited", period: "Mar 2026 \u2014 Present" },
  { title: "Behavioral drift in autonomous agents", org: "ICLR 2027, ongoing", period: "with James Chua" },
];

export const skills = [
  {
    label: "Efficient ML",
    items:
      "Real-time inference, model compilation, latency and throughput optimization, resource-constrained deployment.",
  },
  {
    label: "Research",
    items:
      "Foundation-model pretraining, simulative world models, conformal prediction and uncertainty/risk control, test-time and OOD adaptation, faithful multimodal reasoning and hallucination mitigation, mechanistic interpretability.",
  },
  { label: "ML Frameworks", items: "PyTorch, TensorFlow, Hugging Face, vLLM." },
  { label: "Systems", items: "Python, C++, Docker, FastAPI, AWS, GCP, WASM, WebGPU." },
  {
    label: "Model Optimization",
    items:
      "Quantization, pruning, knowledge distillation, mixed-precision inference, ONNX / TensorRT / TFLite.",
  },
];

export const education = [
  {
    school: "Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)",
    place: "Abu Dhabi, UAE",
    degree: "Ph.D. in Machine Learning",
    period: "Fall 2026 \u2014 enrolled",
    notes: [],
  },
  {
    school: "Maulana Abul Kalam Azad University of Technology",
    place: "West Bengal, India",
    degree: "B.Tech in Computer Science and Engineering",
    period: "Graduated 2023",
    notes: [
      "Thesis: Attention Capsules for Robust Medical Imaging (100/100).",
      "Adding attention inside vanilla CapsNet routing yields faster routing and robust performance at scale.",
      "GPA: 9.2 / 10.",
    ],
  },
];

export const experience = [
  {
    org: "MBZUAI",
    role: "Research Engineer I",
    place: "Onsite \u2014 Abu Dhabi, UAE",
    period: "Jan 2026 \u2014 Present",
    points: [
      "Faithful reasoning and hallucination control in medical vision-language and foundation models via counterfactual, anatomy-guided, and contrastive decoding (PCCD, CAST, Transductive Conformal Decoding).",
      "Risk-controlled, uncertainty-aware adaptation for trustworthy clinical deployment: atlas-aware and open-vocabulary conformal prediction with online OOD detection (CARTA, OpenCP, PROTON).",
      "Annotation- and data-efficient learning under distribution shift for medical imaging: structured active learning under correlated outputs and black-box foundation-model prompting.",
      "Mechanistic interpretability of VLMs and self-improving agentic systems for automated evaluation and tool use (State Blindness, ViTA, GEM).",
    ],
  },
  {
    org: "MedOS Limited",
    role: "Co-Founder & CTO",
    place: "UAE",
    period: "Mar 2026 \u2014 Present",
    points: [
      "Founding technical lead setting the AI research and engineering direction for a clinical AI platform.",
      "Building the first dedicated clinical AI assistant, with FDA approval as a priority track.",
    ],
  },
  {
    org: "Innovxcare AI",
    role: "AI Engineer",
    place: "Onsite \u2014 Bengaluru, India",
    period: "Jun 2025 \u2014 Jan 2026",
    points: [
      "Developed Spark App for real-time radiology reporting in an expert-in-the-loop framework, aligning textual dictations with imaging data.",
      "Built real-time ASR pipelines on open-source foundation models with sub-second streaming latency and domain adaptation.",
      "Optimized and packaged inference pipelines using C++, WASM, and WebGPU backends for resource-constrained clinical environments.",
    ],
  },
  {
    org: "Wipro GE Healthcare",
    role: "AI Researcher",
    place: "Onsite \u2014 Bengaluru, India",
    period: "Feb 2025 \u2014 Jun 2025",
    points: [
      "Designed a Quantum-inspired Convolutional Neural Network (QCNN) with improved robustness to correlated noise for CT/MR denoising.",
      "LLM finetuning for MR/CT Radiology Information System series-description understanding and reasoning.",
      "Symbolic regression to detect and localize internal organ spans from external landmarks in multi-view RGB streams.",
    ],
  },
  {
    org: "OnFinanceAI",
    role: "AI Engineer \u2014 Founding Team",
    place: "Onsite \u2014 Bengaluru, India",
    period: "Jun 2024 \u2014 Oct 2024",
    points: [
      "Built an in-house VLM for financial chart understanding and reasoning based on the GLM vision model.",
      "Team lead of Voice-2-Compliance, India's first generative AI-powered voice-based compliance solution for BFSI, adopted by the National Stock Exchange.",
    ],
  },
  {
    org: "Jio Institute",
    role: "Research Assistant",
    place: "Onsite \u2014 Navi Mumbai, India",
    period: "May 2023 \u2014 May 2024",
    points: [
      "Label-efficient neural networks.",
      "Complementary geometric representations (spectral and Euclidean spaces) in CNNs.",
    ],
  },
  {
    org: "Feinberg School of Medicine, Northwestern University",
    role: "Research Fellow",
    place: "Remote",
    period: "Dec 2023 \u2014 May 2024",
    points: [
      "AI for liver health (HCC, cirrhosis, interventional therapy), supervised by Dr. Ulas Bagci.",
      "Developed a real-time endoscopy polyp-detection system achieving 76 FPS.",
    ],
  },
];

export const awards = [
  {
    title: "Featured at Digestive Disease Week 2024",
    detail:
      "Recognized for contribution to real-time sessile serrated polyp detection on video using DAPO-Det.",
  },
];
