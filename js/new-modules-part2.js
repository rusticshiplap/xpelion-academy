/* ============================================================
   XPELION ACADEMY — NEW MODULES PART 2
   Chemistry, Biology, Statistics & Advanced Topics
   ============================================================ */

/* ── CHEMISTRY: ACIDS, BASES, EQUILIBRIUM, THERMODYNAMICS ─── */
const acidsBasesModule = {
  id: "chemistry-acids-bases",
  title: "Acids & Bases",
  content: `<h3>pH & The Hydronium Ion</h3>
<p>An <strong>acid</strong> donates protons (H⁺); a <strong>base</strong> accepts them. <strong>pH</strong> = −log[H⁺], ranges 0–14. Neutral at pH 7 (25°C).</p>
<div class="formula-box"><span class="label">pH & pOH Relationship</span>pH + pOH = 14
[H⁺][OH⁻] = 1 × 10⁻¹⁴  (Kw, water ion product)</div>
<div class="concept-box"><h4>Acid/Base Classification</h4><p><strong>Strong acids:</strong> HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄ (ionize completely)<br><strong>Strong bases:</strong> Group 1 hydroxides, Ba(OH)₂ (ionize completely)<br><strong>Weak acids/bases:</strong> Partially ionize; have Ka/Kb</p></div>
<div class="example-box"><div class="example-box-header">📝 Example 1: Calculate pH</div><div class="example-box-body"><p><strong>Problem:</strong> A solution has [H⁺] = 1 × 10⁻⁵ M. Calculate pH and pOH.</p></div><div class="example-solution"><strong>Solution</strong><p>pH = −log(1 × 10⁻⁵) = 5<br>pOH = 14 − 5 = 9</p></div></div>
<h3>Titration & Neutralization</h3>
<p>In <strong>acid-base titration</strong>, one solution of known concentration neutralizes the other. At equivalence point, moles of acid = moles of base.</p>
<div class="formula-box"><span class="label">Titration Equation</span>n_acid × M_acid × V_acid = n_base × M_base × V_base
(n = coefficient, M = molarity, V = volume)</div>
<div class="example-box"><div class="example-box-header">📝 Example 2: Titration</div><div class="example-box-body"><p><strong>Problem:</strong> 25 mL of HCl solution requires 40 mL of 0.1 M NaOH to reach equivalence. Find [HCl].</p></div><div class="example-solution"><strong>Solution</strong><p>HCl + NaOH → NaCl + H₂O (1:1)<br>1 · M_HCl · 25 = 1 · 0.1 · 40<br>M_HCl = 4/25 = <strong>0.16 M</strong></p></div></div>
<h3>Buffer Solutions</h3>
<p>A <strong>buffer</strong> resists pH change. Composed of weak acid + its conjugate base (or weak base + its conjugate acid).</p>
<div class="formula-box"><span class="label">Henderson-Hasselbalch Equation</span>pH = pKa + log([base]/[acid])</div>`,
  quiz: [
    { q: "If pH = 3, what is [H⁺]?", options: ["0.001 M", "0.01 M", "0.1 M", "1 M"], answer: 0, explanation: "pH = −log[H⁺], so 3 = −log[H⁺]. [H⁺] = 10⁻³ = 0.001 M." },
    { q: "Which is a strong acid?", options: ["HCN", "CH₃COOH", "HClO₄", "HF"], answer: 2, explanation: "HClO₄ (perchloric acid) is one of the strong acids. The others are weak." },
    { q: "A solution has pOH = 2. What is pH?", options: ["12", "7", "2", "−2"], answer: 0, explanation: "pH + pOH = 14. So pH = 14 − 2 = 12." },
    { q: "In a buffer, adding more acid causes pH to:", options: ["increase greatly", "decrease slightly", "stay unchanged", "increase slightly"], answer: 1, explanation: "Buffer resists change. Added acid is neutralized by the conjugate base." }
  ]
};

const chemicalEquilibriumModule = {
  id: "chemistry-equilibrium",
  title: "Chemical Equilibrium",
  content: `<h3>Equilibrium Constant (Kc & Kp)</h3>
<p>For reaction: aA + bB ⇌ cC + dD, the <strong>equilibrium constant</strong> K expresses the ratio of products to reactants at equilibrium.</p>
<div class="formula-box"><span class="label">Equilibrium Constant (Kc)</span>Kc = [C]^c [D]^d / [A]^a [B]^b
(concentrations at equilibrium, exponents = stoichiometric coefficients)</div>
<div class="concept-box"><h4>Interpreting K</h4><p>K >> 1: Equilibrium favors products (right)<br>K << 1: Equilibrium favors reactants (left)<br>K ≈ 1: Significant amounts of both</p></div>
<div class="example-box"><div class="example-box-header">📝 Example 1: Calculate Kc</div><div class="example-box-body"><p><strong>Problem:</strong> At equilibrium: [H₂]=0.1 M, [I₂]=0.1 M, [HI]=1 M. Find Kc for H₂+I₂⇌2HI</p></div><div class="example-solution"><strong>Solution</strong><p>Kc = [HI]² / ([H₂][I₂])<br>Kc = (1)² / (0.1 · 0.1)<br>Kc = 1 / 0.01 = <strong>100</strong></p></div></div>
<h3>Le Chatelier's Principle</h3>
<p>When a system at equilibrium is disturbed (temperature, pressure, concentration), it shifts to counteract the change.</p>
<div class="example-box"><div class="example-box-header">📝 Example 2: Pressure Effect</div><div class="example-box-body"><p><strong>Problem:</strong> For N₂O₄ ⇌ 2NO₂, if pressure increases, in which direction does equilibrium shift?</p></div><div class="example-solution"><strong>Solution</strong><p>Left side: 1 mole gas<br>Right side: 2 moles gas<br>Pressure increase favors fewer moles → shifts <strong>LEFT</strong></p></div></div>
<h3>Solubility Product (Ksp)</h3>
<p>For poorly soluble salt: Ksp = [cation]^m [anion]^n, where m, n are stoichiometric coefficients.</p>
<div class="formula-box"><span class="label">Solubility Relationship</span>For AgCl: Ksp = [Ag⁺][Cl⁻]
s = solubility, Ksp = s²</div>`,
  quiz: [
    { q: "If Kc = 0.01, the equilibrium favors:", options: ["products", "reactants", "neither", "depends on T"], answer: 1, explanation: "Kc << 1 means products/reactants is small → favors reactants." },
    { q: "For PCl₅⇌PCl₃+Cl₂, if volume decreases, equilibrium shifts:", options: ["right", "left", "no change", "to products"], answer: 1, explanation: "Left: 1 mole, Right: 2 moles. Decrease volume → shift to fewer moles (left)." },
    { q: "For AgBr (Ksp = 5×10⁻¹³), the molar solubility is:", options: ["2.2×10⁻⁷ M", "5×10⁻¹³ M", "√(5×10⁻¹³) M", "25×10⁻²⁶ M"], answer: 2, explanation: "For salt AB: Ksp = s². So s = √Ksp = √(5×10⁻¹³) ≈ 7×10⁻⁷ M." }
  ]
};

const thermodynamicsModule = {
  id: "chemistry-thermodynamics",
  title: "Thermodynamics & Enthalpy",
  content: `<h3>Heat & Energy Changes</h3>
<p><strong>Enthalpy (H):</strong> Total heat content. <strong>ΔH:</strong> Heat absorbed/released by system. Negative ΔH = exothermic; positive = endothermic.</p>
<div class="formula-box"><span class="label">Heat & Temperature</span>q = m · c · ΔT
(q = heat, m = mass, c = specific heat capacity, ΔT = change in T)</div>
<div class="example-box"><div class="example-box-header">📝 Example 1: Calorimetry</div><div class="example-box-body"><p><strong>Problem:</strong> 50 g of water (c = 4.18 J/g·°C) is heated from 20°C to 80°C. Calculate q.</p></div><div class="example-solution"><strong>Solution</strong><p>q = 50 · 4.18 · (80 − 20)<br>q = 50 · 4.18 · 60<br>q = <strong>12,540 J ≈ 12.5 kJ</strong></p></div></div>
<h3>Hess's Law</h3>
<p>If a reaction is the sum of multiple steps, ΔH_total = ΔH₁ + ΔH₂ + … (enthalpies of component reactions).</p>
<div class="example-box"><div class="example-box-header">📝 Example 2: Hess's Law</div><div class="example-box-body"><p><strong>Problem:</strong> Given:<br>(1) C(s) + O₂(g) → CO₂(g)    ΔH = −393 kJ<br>(2) 2CO(g) + O₂(g) → 2CO₂(g)  ΔH = −566 kJ<br>Find ΔH for: 2C(s) + O₂(g) → 2CO(g)</p></div><div class="example-solution"><strong>Solution</strong><p>Use (1) × 2: 2C + 2O₂ → 2CO₂, ΔH = −786 kJ<br>Reverse (2): 2CO₂ → 2CO + O₂, ΔH = +566 kJ<br>Sum: 2C + O₂ → 2CO, ΔH = −786 + 566 = <strong>−220 kJ</strong></p></div></div>
<h3>Entropy & Gibbs Free Energy</h3>
<div class="formula-box"><span class="label">Spontaneity</span>ΔG = ΔH − TΔS
ΔG < 0: Spontaneous
ΔG > 0: Non-spontaneous
ΔG = 0: At equilibrium</div>`,
  quiz: [
    { q: "What type of reaction has ΔH < 0?", options: ["endothermic", "exothermic", "neither", "both"], answer: 1, explanation: "Negative ΔH means heat is released → exothermic." },
    { q: "200 g water is heated. Specific heat of water = 4.18 J/g°C. For ΔT = 10°C, q = ?", options: ["8.36 J", "83.6 J", "836 J", "8360 J"], answer: 3, explanation: "q = 200 · 4.18 · 10 = 8,360 J." },
    { q: "For a reaction: ΔH = −100 kJ, ΔS = 200 J/K, T = 300 K. Is it spontaneous at this T?", options: ["Yes", "No", "At equilibrium", "Cannot determine"], answer: 0, explanation: "ΔG = −100,000 − 300(200) = −160,000 J < 0 → spontaneous." }
  ]
};

/* ── BIOLOGY: PHOTOSYNTHESIS, RESPIRATION, DNA/PROTEIN ────── */
const photosynthesisModule = {
  id: "biology-photosynthesis",
  title: "Photosynthesis: Light & Dark Reactions",
  content: `<h3>The Big Picture</h3>
<p><strong>Photosynthesis:</strong> Plants convert light energy, water, and CO₂ into glucose (stored energy) and O₂. Occurs in chloroplasts. Overall equation:</p>
<div class="formula-box"><span class="label">Photosynthesis Equation</span>6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂</div>
<h3>Light-Dependent Reactions (Light Reactions)</h3>
<p>Occur in thylakoid membranes. Light absorbed by chlorophyll excites electrons → splits water → produces ATP & NADPH (energy carriers).</p>
<div class="concept-box"><h4>Key Products</h4><p><strong>ATP:</strong> Adenosine triphosphate (energy currency)<br><strong>NADPH:</strong> Reduced coenzyme (electron/H⁺ donor)<br><strong>O₂:</strong> Byproduct from water splitting</p></div>
<div class="example-box"><div class="example-box-header">📝 Example 1: Light Reactions</div><div class="example-box-body"><p><strong>Problem:</strong> What are the inputs and outputs of the light reactions?</p></div><div class="example-solution"><strong>Solution</strong><p><strong>Inputs:</strong> Light (photons), H₂O<br><strong>Outputs:</strong> ATP, NADPH, O₂<br>These products power the Calvin cycle (dark reactions).</p></div></div>
<h3>Light-Independent Reactions (Calvin Cycle / Dark Reactions)</h3>
<p>Occurs in stroma. Uses ATP & NADPH from light reactions to fix CO₂ into glucose via three phases:</p>
<div class="concept-box"><h4>Calvin Cycle Phases</h4><p><strong>1. Carbon fixation:</strong> RuBP + CO₂ → 3-PG (catalyzed by RuBisCO)<br><strong>2. Reduction:</strong> 3-PG → G3P (uses ATP & NADPH)<br><strong>3. Regeneration:</strong> G3P → RuBP (uses ATP)</p></div>
<div class="example-box"><div class="example-box-header">📝 Example 2: Calvin Cycle Inputs</div><div class="example-box-body"><p><strong>Problem:</strong> To produce 1 glucose (net), how many turns of the Calvin cycle are needed?</p></div><div class="example-solution"><strong>Solution</strong><p>Each turn fixes 1 CO₂ → produces 1 G3P<br>Glucose = 6 carbons = 6 G3P<br><strong>6 turns needed</strong><br>Uses: 6 ATP (regeneration) + 6 ATP (reduction) + 6 NADPH = 18 ATP, 12 NADPH</p></div></div>`,
  quiz: [
    { q: "Light reactions occur in the:", options: ["stroma", "thylakoid", "mitochondria", "ribosome"], answer: 1, explanation: "Light reactions occur in thylakoid membranes (stacked in grana)." },
    { q: "The Calvin cycle directly requires:", options: ["light", "chlorophyll", "ATP & NADPH", "O₂"], answer: 2, explanation: "Calvin cycle uses ATP and NADPH (products of light reactions) but doesn't directly use light." },
    { q: "RuBisCO catalyzes the fixation of CO₂ with:", options: ["glucose", "RuBP", "G3P", "ATP"], answer: 1, explanation: "RuBisCO (ribulose bisphosphate carboxylase/oxygenase) catalyzes RuBP + CO₂ → 3-PG." }
  ]
};

const cellularRespirationModule = {
  id: "biology-cellular-respiration",
  title: "Cellular Respiration: Aerobic Pathways",
  content: `<h3>Glucose Oxidation & ATP Production</h3>
<p><strong>Cellular respiration:</strong> Catabolism of glucose yields ATP (energy). Aerobic respiration requires O₂; occurs in mitochondria.</p>
<div class="formula-box"><span class="label">Aerobic Respiration Summary</span>C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~32 ATP
(Theoretical max ≈ 38 ATP per glucose)</div>
<h3>Glycolysis</h3>
<p>First stage: glucose (6C) → 2 pyruvate (3C) in cytoplasm. Net: 2 ATP + 2 NADH. No O₂ required (anaerobic).</p>
<div class="concept-box"><h4>Key Steps</h4><p><strong>1. Energy investment:</strong> 2 ATP used to activate glucose<br><strong>2. Oxidation & phosphorylation:</strong> 2 NAD⁺ → 2 NADH<br><strong>3. Energy payoff:</strong> 4 ATP produced<br><strong>Net:</strong> +2 ATP, +2 NADH, +2 pyruvate</p></div>
<div class="example-box"><div class="example-box-header">📝 Example 1: Glycolysis</div><div class="example-box-body"><p><strong>Problem:</strong> How much ATP is produced directly by glycolysis from 1 glucose?</p></div><div class="example-solution"><strong>Solution</strong><p>Payoff phase: 4 ATP generated<br>Investment phase: 2 ATP used<br><strong>Net = 2 ATP</strong> (plus 2 NADH)</p></div></div>
<h3>Citric Acid Cycle (Krebs Cycle)</h3>
<p>Occurs in mitochondrial matrix. Pyruvate → Acetyl-CoA → cycles through 8 reactions. Per glucose: 6 CO₂ released, many NADH & FADH₂ produced.</p>
<div class="concept-box"><h4>Per 1 Pyruvate (1 cycle)</h4><p>Produces: 1 GTP, 3 NADH, 1 FADH₂, CO₂</p></div>
<h3>Electron Transport Chain & Oxidative Phosphorylation</h3>
<p>NADH & FADH₂ transfer electrons through protein complexes. Electron energy pumps H⁺ across inner mitochondrial membrane → creates gradient → ATP synthase produces ATP.</p>
<div class="formula-box"><span class="label">Yield from ETC</span>NADH → 2.5 ATP
FADH₂ → 1.5 ATP</div>
<div class="example-box"><div class="example-box-header">📝 Example 2: Total ATP</div><div class="example-box-body"><p><strong>Problem:</strong> Calculate ATP yield from 1 glucose (glycolysis → ETC).</p></div><div class="example-solution"><strong>Solution</strong><p>Glycolysis: 2 ATP + 2 NADH<br>Pyruvate oxidation: 2 NADH<br>Citric acid: 2 GTP + 6 NADH + 2 FADH₂<br>ATP from ETC: (10 NADH × 2.5) + (2 FADH₂ × 1.5) = 25 + 3 = 28 ATP<br>Total: 2 + 2 + 28 ≈ <strong>32 ATP</strong></p></div></div>`,
  quiz: [
    { q: "Glycolysis occurs in the:", options: ["mitochondrial matrix", "cytoplasm", "thylakoid", "ribosome"], answer: 1, explanation: "Glycolysis is a cytoplasmic process that doesn't require the mitochondrion." },
    { q: "The Citric Acid Cycle directly produces how many ATP per glucose?", options: ["2", "4", "6", "32"], answer: 0, explanation: "2 GTP (≈ ATP) per glucose from the cycle. Most ATP comes from the ETC." },
    { q: "What is the primary function of the electron transport chain?", options: ["Fix CO₂", "Split water", "Generate proton gradient for ATP synthesis", "Produce NADH"], answer: 2, explanation: "ETC transfers electrons and pumps H⁺ to create the gradient that drives ATP synthase." }
  ]
};

const dnaProteinSynthesisModule = {
  id: "biology-dna-protein",
  title: "DNA Replication & Protein Synthesis",
  content: `<h3>DNA Structure & Replication</h3>
<p><strong>DNA:</strong> Double helix of deoxyribose + phosphate backbone + 4 bases (A, T, G, C). Base pairing: A−T, G−C.</p>
<div class="concept-box"><h4>Semi-conservative Replication</h4><p>Each strand serves as template. DNA polymerase synthesizes new complementary strand 5'→3'.<br><strong>Leading strand:</strong> Continuous synthesis<br><strong>Lagging strand:</strong> Okazaki fragments (discontinuous)</p></div>
<div class="example-box"><div class="example-box-header">📝 Example 1: Complementary DNA</div><div class="example-box-body"><p><strong>Problem:</strong> If a DNA template strand reads 3'-ATCGATCG-5', what is the synthesized strand?</p></div><div class="example-solution"><strong>Solution</strong><p>Synthesized 5'→3': 5'-TAGCTAGC-3'<br>Pairs: A↔T, T↔A, C↔G, G↔C</p></div></div>
<h3>Transcription: DNA → mRNA</h3>
<p>RNA polymerase reads DNA template strand (3'→5') and synthesizes mRNA (5'→3') using complementary bases (U replaces T).</p>
<div class="example-box"><div class="example-box-header">📝 Example 2: Transcription</div><div class="example-box-body"><p><strong>Problem:</strong> DNA template: 3'-ATCGATCG-5'. What is the mRNA?</p></div><div class="example-solution"><strong>Solution</strong><p>mRNA (5'→3'): 5'-UAGCUAGC-3'<br>Note: U replaces T in RNA</p></div></div>
<h3>Translation: mRNA → Protein</h3>
<p>mRNA codons (3 bases) specify amino acids via tRNA. Ribosome reads mRNA, tRNA brings correct aa. Process: initiation → elongation → termination.</p>
<div class="concept-box"><h4>Genetic Code</h4><p><strong>Start codon:</strong> AUG (methionine)<br><strong>Stop codons:</strong> UAA, UAG, UGA<br><strong>Wobble base pairing:</strong> Third position allows some flexibility</p></div>
<div class="example-box"><div class="example-box-header">📝 Example 3: Translation</div><div class="example-box-body"><p><strong>Problem:</strong> mRNA: 5'-AUG-CCU-GAA-UAA-3'. What amino acids are added?</p></div><div class="example-solution"><strong>Solution</strong><p>AUG → Met (start)<br>CCU → Pro<br>GAA → Glu<br>UAA → Stop<br>Protein: Met-Pro-Glu</p></div></div>`,
  quiz: [
    { q: "Chargaff's rules state that in DNA: [A] = [T] and [G] = [C] because:", options: ["random pairing", "base complementarity", "enzyme specificity", "RNA interference"], answer: 1, explanation: "Complementary base pairing (A−T, G−C) ensures equal amounts of paired bases." },
    { q: "In transcription, which DNA strand serves as template?", options: ["leading strand", "lagging strand", "template strand", "both strands equally"], answer: 2, explanation: "RNA polymerase reads the template strand (antisense strand) to make mRNA (sense strand)." },
    { q: "How many nucleotides are in a codon?", options: ["1", "2", "3", "4"], answer: 2, explanation: "A codon consists of 3 consecutive nucleotides, specifying 1 amino acid." },
    { q: "Which is the start codon?", options: ["AUG", "UAA", "GUA", "AGA"], answer: 0, explanation: "AUG is the universal start codon, coding for methionine." }
  ]
};

/* ── STATISTICS: HYPOTHESIS TESTING, CI, REGRESSION ────────── */
const hypothesisTestingModule = {
  id: "statistics-hypothesis",
  title: "Hypothesis Testing & Significance",
  content: `<h3>The Hypothesis Test Framework</h3>
<p>A <strong>hypothesis test</strong> determines if sample data provide sufficient evidence to reject a null hypothesis H₀ in favor of alternative H₁.</p>
<div class="concept-box"><h4>Test Steps</h4><p>1. State H₀ and H₁<br>2. Choose significance level α (typically 0.05)<br>3. Calculate test statistic (z, t, χ², etc.)<br>4. Find p-value (probability data supports H₀)<br>5. Decision: If p < α, reject H₀</p></div>
<div class="formula-box"><span class="label">Z-test (known σ)</span>z = (x̄ − μ₀) / (σ / √n)
(x̄ = sample mean, μ₀ = hypothesized mean)</div>
<div class="example-box"><div class="example-box-header">📝 Example 1: Z-test</div><div class="example-box-body"><p><strong>Problem:</strong> A company claims μ = 50. Sample: n=100, x̄=52, σ=10. Test at α=0.05.</p></div><div class="example-solution"><strong>Solution</strong><p>H₀: μ = 50, H₁: μ ≠ 50<br>z = (52 − 50) / (10/10) = 2<br>p-value ≈ 0.046 < 0.05 → Reject H₀<br><strong>Conclude: evidence sample mean ≠ 50</strong></p></div></div>
<h3>Type I & Type II Errors</h3>
<div class="concept-box"><h4>Error Types</h4><p><strong>Type I (α):</strong> Reject H₀ when true (false positive)<br><strong>Type II (β):</strong> Fail to reject H₀ when false (false negative)<br><strong>Power:</strong> 1 − β = probability detecting true effect</p></div>
<h3>T-test (Unknown σ)</h3>
<p>Use when population σ unknown; sample size small; data approximately normal.</p>
<div class="formula-box"><span class="label">T-test (one sample)</span>t = (x̄ − μ₀) / (s / √n)
(s = sample std dev, df = n − 1)</div>`,
  quiz: [
    { q: "If p-value = 0.02 and α = 0.05, we should:", options: ["fail to reject H₀", "reject H₀", "need more data", "accept H₀"], answer: 1, explanation: "p < α means data is unlikely under H₀ → reject H₀." },
    { q: "Type I error probability equals:", options: ["β", "α", "1−α", "power"], answer: 1, explanation: "Type I error rate is the significance level α." },
    { q: "A hypothesis test is two-tailed if H₁ is:", options: ["μ > μ₀", "μ < μ₀", "μ ≠ μ₀", "μ = μ₀"], answer: 2, explanation: "Two-tailed: H₁: μ ≠ μ₀. One-tailed: μ > or μ <." }
  ]
};

const confidenceIntervalsModule = {
  id: "statistics-ci",
  title: "Confidence Intervals",
  content: `<h3>Margin of Error & CI Formula</h3>
<p>A <strong>confidence interval</strong> is a range [L, U] that contains the population parameter with specified confidence (typically 95%).</p>
<div class="formula-box"><span class="label">Confidence Interval (σ known)</span>CI: x̄ ± z* (σ / √n)
(z* = critical value, e.g., 1.96 for 95%)</div>
<div class="example-box"><div class="example-box-header">📝 Example 1: 95% CI</div><div class="example-box-body"><p><strong>Problem:</strong> Sample of 100 students has mean height 170 cm, σ = 8 cm. Find 95% CI for population mean.</p></div><div class="example-solution"><strong>Solution</strong><p>x̄ = 170, σ = 8, n = 100<br>SE = 8/10 = 0.8<br>CI = 170 ± 1.96(0.8) = 170 ± 1.568<br><strong>CI: (168.43, 171.57) cm</strong><br>Interpretation: 95% confident true mean is in this interval</p></div></div>
<h3>T-based CI (σ unknown)</h3>
<div class="formula-box"><span class="label">Confidence Interval (σ unknown)</span>CI: x̄ ± t* (s / √n)
(t* from t-distribution with df = n − 1)</div>
<h3>Sample Size Planning</h3>
<p>To achieve margin of error E with confidence (1−α): n = (z* σ / E)²</p>`,
  quiz: [
    { q: "For a 95% CI with σ known, z* =", options: ["1.645", "1.96", "2.576", "2.33"], answer: 1, explanation: "For 95% CI (two-tailed), z* = 1.96 (cuts off 2.5% in each tail)." },
    { q: "If CI is (45, 55), the margin of error is:", options: ["5", "10", "45", "50"], answer: 0, explanation: "Margin of error = (55 − 45)/2 = 5." },
    { q: "A narrower CI is achieved by:", options: ["lower confidence", "larger sample size", "higher σ", "all of above"], answer: 1, explanation: "Larger n reduces SE, narrowing CI. Lower confidence also narrows but less desirable." }
  ]
};

const regressionModule = {
  id: "statistics-regression",
  title: "Linear Regression & Correlation",
  content: `<h3>Correlation Coefficient (r)</h3>
<p><strong>Correlation</strong> measures linear association between variables. −1 ≤ r ≤ 1.</p>
<div class="concept-box"><h4>Interpretation</h4><p>r = 1: Perfect positive<br>r = 0: No linear relationship<br>r = −1: Perfect negative<br>r² = coefficient of determination (variance explained)</p></div>
<h3>Linear Regression Line</h3>
<div class="formula-box"><span class="label">Least Squares Regression</span>ŷ = a + bx
b = r(s_y / s_x)
a = ȳ − b x̄
(minimizes sum of squared residuals)</div>
<div class="example-box"><div class="example-box-header">📝 Example 1: Regression</div><div class="example-box-body"><p><strong>Problem:</strong> For study hours (x) vs exam score (y): x̄=5, ȳ=75, r=0.8, s_x=2, s_y=10. Find regression line.</p></div><div class="example-solution"><strong>Solution</strong><p>b = 0.8 · (10/2) = 4<br>a = 75 − 4(5) = 55<br><strong>ŷ = 55 + 4x</strong><br>Interpretation: Each additional study hour → +4 points</p></div></div>
<h3>Residuals & Diagnostics</h3>
<p><strong>Residual:</strong> e = y − ŷ (actual − predicted). Regression assumes residuals are random, normally distributed, constant variance (homoscedasticity).</p>`,
  quiz: [
    { q: "If r² = 0.64, what % of variance in y is explained by x?", options: ["36%", "64%", "80%", "0.64%"], answer: 1, explanation: "r² = 0.64 = 64% → 64% of variance explained." },
    { q: "In regression ŷ = 10 + 2x, the slope is:", options: ["10", "2", "12", "−2"], answer: 1, explanation: "Slope b = 2. Intercept a = 10." },
    { q: "If all points lie exactly on the regression line, r =", options: ["0", "±0.5", "±1", "undefined"], answer: 2, explanation: "Perfect fit → r = ±1 (sign of slope)." }
  ]
};

module.exports = {
  acidsBasesModule,
  chemicalEquilibriumModule,
  thermodynamicsModule,
  photosynthesisModule,
  cellularRespirationModule,
  dnaProteinSynthesisModule,
  hypothesisTestingModule,
  confidenceIntervalsModule,
  regressionModule
};
