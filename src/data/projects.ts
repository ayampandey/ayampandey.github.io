export type ProjectId = 'legalinsight' | 'legal-ai-toolkit' | 'contract-analyzer' | 'judgment-prediction'

export interface Project {
  id: ProjectId
  title: string
  kicker: string
  summary: string
  problem: string
  features: string[]
  decision: string
  stack: string[]
  repo: string
  note?: string
  /** Add a real screenshot (placed in /public/projects/) to show it alongside the project. */
  screenshot?: { src: string; alt: string }
}

// Every statement below is drawn from the public repository's README and source code.
export const projects: Project[] = [
  {
    id: 'legalinsight',
    title: 'LegalInsight',
    kicker: 'Judgment & case analysis',
    summary:
      'A web application that turns unstructured court judgments into a structured, searchable record of cases.',
    problem:
      'Judgments are long, inconsistently formatted and full of noise from the sources they are downloaded from. Finding the court, the parties, the outcome and the arguments usually means reading each one end to end.',
    features: [
      'Upload judgments as PDF or DOCX; a cleaning pass strips signature blocks, page markers and citation headers.',
      'Gemini returns a summary, court, judgment date, parties and three to five key arguments as schema-validated JSON.',
      'Each analysis is stored in SQLite, building a personal case library with keyword search.',
      'A trends dashboard charts the entities that recur most often across the corpus.',
    ],
    decision:
      'The first prototype used local open-source models (spaCy and T5). They worked on clean text but degraded on real-world PDFs, so the back end was re-architected around the Gemini API with a strict response schema, keeping deterministic cleaning in front of every request.',
    stack: ['Python', 'Flask', 'Gemini API', 'SQLite', 'PyPDF2', 'python-docx', 'JavaScript', 'Tailwind CSS', 'Chart.js'],
    repo: 'https://github.com/ayampandey/LegalInsight-Case-Analyzer',
  },
  {
    id: 'legal-ai-toolkit',
    title: 'Legal AI Toolkit',
    kicker: 'Contract analysis & drafting',
    summary:
      'Three contract tools in a single React interface: clause extraction, version comparison and a basic drafting assistant.',
    problem:
      'Everyday contract work, such as locating key clauses, checking what changed between drafts and producing a first draft, is repetitive and usually spread across separate tools.',
    features: [
      'Clause extractor identifies and summarises provisions such as limitation of liability, confidentiality and governing law.',
      'Version comparison takes two drafts and highlights what was added, removed or changed.',
      'Drafting assistant produces a basic template for common documents, such as an NDA, with placeholders to complete.',
      'Accepts pasted text or .txt, .pdf and .docx uploads.',
    ],
    decision:
      'Documents are parsed entirely in the browser (pdf.js for PDFs, Mammoth for Word files), so all three tools share one ingestion path without a server. Clause extraction requests structured JSON from the model rather than free text.',
    stack: ['React', 'Tailwind CSS', 'Gemini API', 'pdf.js', 'Mammoth.js'],
    repo: 'https://github.com/ayampandey/legal-ai-toolkit',
    note: 'Academic demonstration. Output is not legal advice.',
  },
  {
    id: 'contract-analyzer',
    title: 'AI Contract Analyzer',
    kicker: 'Clause extraction',
    summary:
      'A Flask service that scans a folder of contracts and flags confidentiality, indemnification and termination language in each file.',
    problem:
      'Reviewing a batch of contracts for the same handful of provisions is slow, repetitive work.',
    features: [
      'Walks a folder of PDF contracts and extracts text with PyMuPDF.',
      'Flags confidentiality, indemnification and termination language per document.',
      'Returns results as JSON from an /analyze_folder endpoint.',
      'Includes a loader for exploring the CUAD contract dataset.',
    ],
    decision:
      'Uses transparent pattern rules instead of a trained model, so every flag traces back to an explicit, readable expression. It is a simple, auditable baseline.',
    stack: ['Python', 'Flask', 'PyMuPDF', 'Regular expressions'],
    repo: 'https://github.com/ayampandey/AI-Contract-Analyzer',
  },
  {
    id: 'judgment-prediction',
    title: 'Judgment Prediction',
    kicker: 'Machine learning on court judgments',
    summary:
      'An experiment in predicting whether the plaintiff or the defendant prevailed, using the text of Indian Supreme Court judgments.',
    problem:
      'Can the language of a judgment alone carry a usable signal about its outcome? This project tests that question with classical, inspectable machine learning.',
    features: [
      'Extracts text from judgment PDFs, logging empty and scanned files that cannot be read.',
      'Represents each judgment with TF-IDF features (up to 5,000 terms).',
      'Trains a 100-tree Random Forest classifier on labelled outcomes.',
      'Serves predictions for an uploaded PDF through a Flask /predict endpoint.',
    ],
    decision:
      'Kept classical and inspectable: TF-IDF features and a Random Forest rather than a black-box model. Plaintiff wins were the minority class, so the training data is rebalanced by upsampling.',
    stack: ['Python', 'scikit-learn', 'pandas', 'PyMuPDF', 'Flask'],
    repo: 'https://github.com/ayampandey/JudgementPrediction',
    note: 'Exploratory research project, not a validated predictor of case outcomes.',
  },
]
