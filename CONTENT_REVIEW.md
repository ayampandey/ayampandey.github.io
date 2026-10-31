# Content review checklist

Items that need confirmation before this redesign is merged and published. Nothing here has been guessed on the site — where a fact was uncertain it was either phrased conservatively or omitted.

## Must resolve before publishing

- [ ] **GitHub Pages source.** In *Settings → Pages*, switch *Source* from "Deploy from a branch" to **"GitHub Actions"**. The new root `index.html` is a Vite entry point; if Pages keeps serving `main` directly, the live site will render blank. The workflow in `.github/workflows/deploy.yml` only runs on pushes to `main` (or manually).
- [x] **Primary CV updated.** All CV links (nav, hero, contact and no-JavaScript fallback) point to **`/Ayam_Pandey_Resume.pdf`**, served from `public/Ayam_Pandey_Resume.pdf`. The updated CV was added before the redesign was committed.
- [x] **Legacy CV URL updated.** `public/Ayam_Pandey_CV.pdf` is not linked on the new site, but remains available at its previous URL for old links. It is byte-for-byte identical to the updated `public/Ayam_Pandey_Resume.pdf`.

## Experience

- [ ] **Khaitan & Co.: location.** The site now shows two internships (Jun 2025 and Mar – Apr 2026) with the location given as "India", because the old résumé says Bengaluru and the old CV says Remote. Confirm the location for each internship, and confirm that the highlights are acceptable under the firm's confidentiality expectations.
- [ ] **Aluma Solutions: end date.** The site shows **Dec 2025 – May 2026** (provisional) as a completed, project-based engagement. Confirm the final end date.
- [ ] **Aluma Solutions: product name.** LegalSpendGPT is named on the site, at your request. Confirm that the product name is public and that Aluma is comfortable with it being named. LawVu is not mentioned.
- [ ] **Legal + AI: public naming.** The site names founder Alessandra Colaci and the "AI for Contract Drafting and Review" training programme, and describes Legal + AI as a "US-based legal technology venture". Confirm she is comfortable being named, the exact programme title, and the description of the organisation.
- [ ] **Virtual simulations.** Latham & Watkins (Jan 2025) and Clifford Chance (Jul 2023) appear only under "Virtual experience & professional development". Confirm the programme names and whether to name the provider platform.
- [ ] **Earlier internships.** Confirm the SIDBI, JTRI and Rajasthan State Human Rights Commission dates and wording. The supervising judge's name at JTRI is omitted on purpose.

## Education

- [ ] Confirm that the degree has been conferred, with **2026** as the graduation year (the résumé gives June 2026).
- [ ] CGPA is omitted. The legacy site showed 8.0, but the final figure may differ. Add it to `education` in `src/data/experience.ts` if you want it shown.
- [ ] Confirm the certifications listed (IBM ×2, Udemy, HackerRank).

## Projects

- [ ] **Corrected claims from the legacy site.** The legacy site described the Legal AI Toolkit as Python/Flask/LangChain; the repository is React + Tailwind + Gemini API. It described AI Contract Analyzer as BERT-based; the code uses regex rules with PyMuPDF. The new site follows the code.
- [ ] **LegalInsight framing.** The README calls it a "capstone project", but the repository description says "personal project". The site says "personal and academic projects". Confirm which is accurate.
- [ ] **Screenshots.** No genuine screenshots exist in the repo. The visuals are diagrams drawn from the source code (LegalInsight schema, Contract Analyzer rules, Judgment Prediction pipeline) plus one illustration labelled as such (Toolkit). To add real screenshots, place them in `public/projects/` and set `screenshot: { src, alt }` on the project in `src/data/projects.ts`.
- [ ] **Judgment Prediction — methodology note (not shown on the site).** In `outcome.py`, upsampling happens *before* `train_test_split`, so duplicated minority samples can appear in both the training and test sets and inflate the printed accuracy. Don't quote that accuracy anywhere; consider fixing it in the repository.
- [ ] **Repository hygiene (optional, but recruiters will click through).**
  - AI-Contract-Analyzer: the README describes uploading a file via form-data, but `/analyze_folder` expects a JSON `folder_path`. The README also references a `requirements.txt` that doesn't exist.
  - LegalInsight: the README clone URL still has a placeholder username.
  - Legal AI Toolkit: the Gemini key is read on the client (`REACT_APP_…`), so it would be exposed if the app were ever deployed publicly.
  - JudgementPrediction: the `models/*.pkl` files appear to be Git LFS pointers.
- [ ] **Not featured.** `ProjectArgumentum` and `AMLChecker` (shown as "GitHub coming soon" on the legacy site) are not on the new site. Confirm whether either should be added.

## Contact and assets

- [ ] Confirm that `pandeyayam@outlook.com` and the LinkedIn URL (both reused from the legacy site) are current. The phone number from the résumé is intentionally not published.
- [ ] Optional: a professional portrait for the About section (none exists in the repo).
- [ ] Clean-up after launch: `legacy-index.html` (old site, kept for reference, not deployed) and `public/portfolio-preview.png` (old OG image, superseded by `og-image.png`) can be deleted.
