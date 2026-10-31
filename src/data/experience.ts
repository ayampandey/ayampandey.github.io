export interface Role {
  organisation: string
  context: string
  role: string
  location: string
  period: string
  summary: string
  highlights: string[]
  tags: string[]
}

export interface EarlierRole {
  organisation: string
  role: string
  location: string
  period: string
  summary: string
}

export interface VirtualProgramme {
  organisation: string
  programme: string
  period: string
  summary: string
}

export const experience: Role[] = [
  {
    organisation: 'Khaitan & Co.',
    context: 'Full-service Indian law firm',
    role: 'Intern, Digital & Innovation Team',
    location: 'India',
    period: 'Jun 2025 · Mar – Apr 2026',
    summary:
      'Two internships with the firm’s Digital & Innovation team, working on the use of generative AI in legal workflows and on the quality of model output.',
    highlights: [
      'Designed and refined prompts for structured legal tasks, including extracting and organising clauses from contracts.',
      'Evaluated LLM output for legal accuracy, using Python scripts to test and compare results.',
      'Tested AI-agent and LLM-based workflows for legal work.',
      'Worked on document and workflow automation within the innovation team.',
      'Built and maintained clause libraries drawn from contract documents.',
      'Researched applications of generative AI in Indian law firms.',
    ],
    tags: ['Prompt engineering', 'LLM evaluation', 'AI agent testing', 'Workflow automation', 'Clause libraries'],
  },
  {
    organisation: 'Aluma Solutions',
    context: 'Dubai-based legal technology company',
    role: 'Legal Technology Implementation (Project-based)',
    location: 'Remote',
    period: 'Dec 2025 – May 2026',
    summary:
      'A project-based engagement on legal technology implementation, working between legal requirements and the technical team.',
    highlights: [
      'Supported implementation coordination for legal technology tools, including gathering requirements.',
      'Contributed business rules, validation logic and workflow design for LegalSpendGPT and related work.',
      'Worked with the founder and development team to translate legal requirements into product logic.',
      'Supported QA and testing.',
    ],
    tags: ['Implementation', 'Requirements', 'Business rules', 'Validation logic', 'Workflow design'],
  },
  {
    organisation: 'Legal + AI',
    context: 'US-based legal technology venture',
    role: 'AI Workflow Consultant (Freelance)',
    location: 'Remote, United States',
    period: 'Nov – Dec 2025',
    summary:
      'A freelance engagement with founder Alessandra Colaci, developing structured materials for using AI in legal work.',
    highlights: [
      'Developed structured legal AI workflow materials and prompt-engineering frameworks.',
      'Wrote practitioner guidance and validation checklists for reviewing AI output.',
      'Contributed to materials for an AI for Contract Drafting and Review training programme.',
    ],
    tags: ['Legal AI workflows', 'Prompt engineering', 'Practitioner guidance', 'Validation checklists'],
  },
]

export const earlierExperience: EarlierRole[] = [
  {
    organisation: 'Small Industries Development Bank of India (SIDBI)',
    role: 'Legal Intern',
    location: 'Jaipur',
    period: 'Jan 2023',
    summary:
      'Analysed audit reports and financial documentation, and examined a working capital facility for legal and compliance risk.',
  },
  {
    organisation: 'Judicial Training & Research Institute',
    role: 'Legal Intern',
    location: 'Lucknow',
    period: 'Jul 2022',
    summary:
      'Researched legal matters and drafted case summaries and analyses under the supervision of an Additional District Judge.',
  },
  {
    organisation: 'Rajasthan State Human Rights Commission',
    role: 'Summer Legal Intern',
    location: 'Jaipur',
    period: 'Jun 2022',
    summary:
      'Researched statutes and legal provisions, documented evidence in human-rights matters and assisted with report preparation.',
  },
]

export const virtualProgrammes: VirtualProgramme[] = [
  {
    organisation: 'Latham & Watkins',
    programme: 'Mergers & Acquisitions virtual job simulation',
    period: 'Jan 2025',
    summary:
      'Reviewed transaction documents in a simulated M&A matter, identifying commercial, regulatory and risk-allocation clauses and recommending drafting changes.',
  },
  {
    organisation: 'Clifford Chance',
    programme: 'Cyber Security virtual job simulation',
    period: 'Jul 2023',
    summary:
      'Researched legal and regulatory issues arising from cybersecurity incidents and cross-border data breaches, mapping potential claims and notification duties.',
  },
]

export const certifications = [
  { name: 'Python for Data Science, AI & Development', issuer: 'IBM' },
  { name: 'Introduction to Artificial Intelligence', issuer: 'IBM' },
  { name: 'Complete Python Developer: Zero to Mastery', issuer: 'Udemy' },
  { name: 'Python (Basic)', issuer: 'HackerRank' },
]

export const education = {
  degree: 'B.Sc. (Data Science) + LL.B. (Hons.)',
  institution: 'National Forensic Sciences University',
  location: 'Gandhinagar, Gujarat',
  period: '2021 – 2026',
  detail: 'Integrated five-year programme combining data science with a professional law degree. Graduated 2026.',
}

export const skills = [
  {
    group: 'Law',
    items: [
      'Legal research & analysis',
      'Statutory & case-law interpretation',
      'Corporate & commercial law',
      'Contract drafting & review',
      'Regulatory & compliance analysis',
      'Legal drafting & issue spotting',
    ],
  },
  {
    group: 'Legal engineering & AI',
    items: [
      'Prompt engineering',
      'LLM output evaluation',
      'Workflow design',
      'Requirements & business rules',
      'Validation logic',
      'Legal process automation',
    ],
  },
  {
    group: 'Technical tools',
    items: ['Python', 'pandas', 'scikit-learn', 'LLM APIs', 'Flask', 'React', 'SQLite'],
  },
]
