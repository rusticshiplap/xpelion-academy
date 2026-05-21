/* ============================================================
   XPELION ACADEMY — NEW EDUCATIONAL MODULES
   High school depth content: Algebra II, Geometry (advanced),
   Physics, Chemistry, Biology, Statistics
   ============================================================ */

/* ── ALGEBRA II: QUADRATIC EQUATIONS & SYSTEMS ────────────── */
const algebraIIModules = {
  id: "quadratic-equations",
  title: "Quadratic Equations & Solutions",
  content: `<h3>Standard Form & The Quadratic Formula</h3>
<p>A <strong>quadratic equation</strong> has the form ax² + bx + c = 0 (a ≠ 0). The graph is a parabola opening upward (a > 0) or downward (a < 0).</p>
<div class="formula-box"><span class="label">Quadratic Formula</span>x = (−b ± √(b² − 4ac)) / (2a)</div>
<div class="concept-box"><h4>The Discriminant (Δ = b² − 4ac)</h4><p>Δ > 0: Two distinct real roots<br>Δ = 0: One repeated real root<br>Δ < 0: Two complex conjugate roots (no real solutions)</p></div>
<h3>Methods to Solve Quadratics</h3>
<p><strong>Factoring:</strong> If ax² + bx + c factors, set each factor to 0. <strong>Completing the square:</strong> Rewrite as (x + p)² = q. <strong>Graphing:</strong> Find x-intercepts.</p>
<div class="example-box"><div class="example-box-header">📝 Example 1: Quadratic Formula</div><div class="example-box-body"><p><strong>Problem:</strong> Solve 2x² − 5x − 3 = 0</p></div><div class="example-solution"><strong>Solution</strong><p>a = 2, b = −5, c = −3<br>Δ = (−5)² − 4(2)(−3) = 25 + 24 = 49<br>x = (5 ± 7) / 4<br>x = 3 or x = −1/2</p></div></div>
<div class="example-box"><div class="example-box-header">📝 Example 2: Completing the Square</div><div class="example-box-body"><p><strong>Problem:</strong> Solve x² + 6x − 7 = 0</p></div><div class="example-solution"><strong>Solution</strong><p>x² + 6x = 7<br>x² + 6x + 9 = 7 + 9<br>(x + 3)² = 16<br>x + 3 = ±4<br>x = 1 or x = −7</p></div></div>
<div class="example-box"><div class="example-box-header">📝 Example 3: Complex Roots</div><div class="example-box-body"><p><strong>Problem:</strong> Solve x² + 2x + 5 = 0</p></div><div class="example-solution"><strong>Solution</strong><p>Δ = 4 − 20 = −16 < 0 (no real roots)<br>x = (−2 ± √(−16)) / 2 = (−2 ± 4i) / 2<br>x = −1 ± 2i</p></div></div>
<h3>Vertex Form & Graphing</h3>
<p>Vertex form: y = a(x − h)² + k, where (h, k) is the vertex. The axis of symmetry is x = h.</p>
<div class="example-box"><div class="example-box-header">📝 Example 4: Find Vertex</div><div class="example-box-body"><p><strong>Problem:</strong> Rewrite y = x² − 4x + 7 in vertex form.</p></div><div class="example-solution"><strong>Solution</strong><p>Complete the square:<br>y = (x² − 4x + 4) − 4 + 7<br>y = (x − 2)² + 3<br>Vertex: (2, 3), Opens upward</p></div></div>`,
  quiz: [
    { q: "How many real solutions does 3x² − 2x + 1 = 0 have?", options: ["0", "1", "2", "3"], answer: 0, explanation: "Δ = 4 − 12 = −8 < 0, so no real solutions." },
    { q: "Solve x² − 8x + 16 = 0", options: ["x = 0, 8", "x = 4", "x = −4, 4", "x = 2, 8"], answer: 1, explanation: "(x−4)² = 0, so x = 4 (repeated root)." },
    { q: "What is the vertex of y = −2(x+1)² + 5?", options: ["(1, 5)", "(−1, 5)", "(−2, 5)", "(1, −5)"], answer: 1, explanation: "Vertex form y = a(x−h)²+k: h = −1, k = 5." },
    { q: "For y = x² − 6x + 8, what is the axis of symmetry?", options: ["x = 3", "x = −3", "x = 2", "x = 6"], answer: 0, explanation: "Axis: x = −b/(2a) = 6/2 = 3." },
    { q: "Solve: (x − 3)² = 25", options: ["x = 5, 1", "x = 8, −2", "x = 28, −22", "x = 3"], answer: 1, explanation: "x − 3 = ±5, so x = 8 or x = −2." },
    { q: "Which equation represents a parabola opening downward?", options: ["y = 2x²", "y = −x² + 3", "y = (x−1)²", "y = |x|"], answer: 1, explanation: "When a < 0, the parabola opens downward. Here a = −1." }
  ]
};

const systemsOfEquationsModule = {
  id: "systems-of-equations",
  title: "Systems of Linear Equations (3 variables)",
  content: `<h3>Solving 3×3 Systems</h3>
<p>A system of three linear equations in three unknowns can be solved using <strong>substitution</strong>, <strong>elimination</strong>, or <strong>Gaussian elimination</strong> (row operations).</p>
<div class="concept-box"><h4>Possible Outcomes</h4><p><strong>Unique solution:</strong> Three planes intersect at one point<br><strong>Infinitely many:</strong> Three planes intersect along a line (dependent)<br><strong>No solution:</strong> Planes don't all meet (inconsistent)</p></div>
<div class="example-box"><div class="example-box-header">📝 Example 1: Elimination Method</div><div class="example-box-body"><p><strong>Problem:</strong> Solve<br>x + y + z = 6<br>2x − y + z = 3<br>x + 2y − z = 2</p></div><div class="example-solution"><strong>Solution</strong><p>Add equations (1) & (2): 3x + 2z = 9 ... (4)<br>Add equations (2) & (3): 3x + y = 5 ... (5)<br>From (5): y = 5 − 3x<br>Substitute into (1): x + (5−3x) + z = 6 → −2x + z = 1<br>Solve (4) & modified: x = 1, z = 3, y = 2<br><strong>Solution: (1, 2, 3)</strong></p></div></div>
<div class="example-box"><div class="example-box-header">📝 Example 2: Gaussian Elimination</div><div class="example-box-body"><p><strong>Problem:</strong> Use row operations on<br>2x + y − z = 8<br>−3x − y + 2z = −11<br>−2x + y + 2z = −3</p></div><div class="example-solution"><strong>Solution</strong><p>Form augmented matrix [A|b] and reduce to row echelon form.<br>R2 + 1.5R1 → eliminates x from row 2<br>R3 + R1 → eliminates x from row 3<br>Continue until triangular, then back-substitute.<br><strong>Result: x = 2, y = 3, z = 1</strong></p></div></div>
<div class="example-box"><div class="example-box-header">📝 Example 3: Dependent System</div><div class="example-box-body"><p><strong>Problem:</strong> Solve<br>x + 2y − z = 5<br>2x + 4y − 2z = 10<br>−x − 2y + z = −5</p></div><div class="example-solution"><strong>Solution</strong><p>Notice equations are scalar multiples. Rows reduce to one unique equation.<br>The system is <strong>dependent</strong> (infinitely many solutions).<br>Solution set: x = 5 − 2y + z (z, y are free parameters)</p></div></div>`,
  quiz: [
    { q: "How many solutions does this system have if all three planes are parallel?", options: ["0", "1", "∞", "3"], answer: 0, explanation: "Three parallel planes never intersect, so the system is inconsistent." },
    { q: "Solve: x+y=3, x−y=1", options: ["(2,1)", "(1,2)", "(3,0)", "(0,3)"], answer: 0, explanation: "Add: 2x=4, x=2. Then y=1." },
    { q: "In Gaussian elimination, which operation is NOT allowed?", options: ["Swap rows", "Multiply row by non-zero", "Add row multiples", "Divide by zero"], answer: 3, explanation: "Division by zero is undefined and not an elementary row operation." },
    { q: "If a system has infinitely many solutions, what is the rank relationship?", options: ["rank(A) = rank([A|b]) < n", "rank(A) ≠ rank([A|b])", "rank(A) = rank([A|b]) = n", "Cannot determine"], answer: 0, explanation: "For dependent systems: rank equals the number of free variables." }
  ]
};

/* ── GEOMETRY: TRANSFORMATIONS, CONGRUENCE, SIMILARITY ────── */
const geometryTransformationsModule = {
  id: "geometry-transformations",
  title: "Transformations & Congruence",
  content: `<h3>The Four Rigid Transformations</h3>
<p>A <strong>rigid transformation</strong> (isometry) preserves distance and angle — the image is congruent to the original.</p>
<div class="concept-box"><h4>Four Types</h4><p><strong>Translation (Shift):</strong> Slide without rotation. T(x, y) = (x + a, y + b)<br><strong>Reflection:</strong> Flip across a line. Over y-axis: (x, y) → (−x, y)<br><strong>Rotation:</strong> Turn around a point. 90° CCW about origin: (x, y) → (−y, x)<br><strong>Glide Reflection:</strong> Translation + reflection</p></div>
<div class="example-box"><div class="example-box-header">📝 Example 1: Reflection</div><div class="example-box-body"><p><strong>Problem:</strong> Reflect triangle ABC with vertices A(1,2), B(3,1), C(2,4) across the line y = x.</p></div><div class="example-solution"><strong>Solution</strong><p>Reflection across y = x swaps coordinates: (x, y) → (y, x)<br>A' = (2, 1), B' = (1, 3), C' = (4, 2)</p></div></div>
<div class="example-box"><div class="example-box-header">📝 Example 2: Rotation</div><div class="example-box-body"><p><strong>Problem:</strong> Rotate point P(3, 0) by 90° counterclockwise about the origin.</p></div><div class="example-solution"><strong>Solution</strong><p>90° CCW: (x, y) → (−y, x)<br>P' = (0, 3)</p></div></div>
<h3>Congruence & Proof</h3>
<p>Two figures are <strong>congruent</strong> if one is a rigid transformation of the other. We prove congruence using SSS, SAS, ASA, AAS, HL.</p>
<div class="example-box"><div class="example-box-header">📝 Example 3: Congruence Proof</div><div class="example-box-body"><p><strong>Given:</strong> AB ∥ CD, AB = CD, AC is a transversal. Prove △ABC ≅ △CDA.</p></div><div class="example-solution"><strong>Solution</strong><p>1. AB = CD (given)<br>2. AC = AC (reflexive)<br>3. ∠BAC = ∠DCA (alternate interior, AB ∥ CD)<br>4. △ABC ≅ △CDA (SAS)</p></div></div>`,
  quiz: [
    { q: "Under a reflection across the x-axis, (3, −2) maps to:", options: ["(−3, 2)", "(3, 2)", "(−3, −2)", "(2, 3)"], answer: 1, explanation: "Reflect across x-axis: (x, y) → (x, −y). So (3, −2) → (3, 2)." },
    { q: "A 180° rotation about the origin maps (a, b) to:", options: ["(−a, −b)", "(−a, b)", "(a, −b)", "(b, a)"], answer: 0, explanation: "180° rotation: (x, y) → (−x, −y)." },
    { q: "Which transformation preserves distance and angle?", options: ["Dilation", "Rotation", "Shear", "All of the above"], answer: 1, explanation: "Only rigid transformations (translation, reflection, rotation, glide reflection) preserve distance and angle." }
  ]
};

const similarityModule = {
  id: "similarity-circle-theorems",
  title: "Similarity & Circle Theorems",
  content: `<h3>Similar Figures</h3>
<p>Two figures are <strong>similar</strong> (∼) if corresponding angles are equal and corresponding sides are proportional. Similarity is not rigid — dilation changes size.</p>
<div class="formula-box"><span class="label">Similarity Ratio</span>If △ABC ∼ △DEF with scale factor k, then:
AB/DE = BC/EF = AC/DF = k
Area ratio = k²,  Volume ratio = k³</div>
<div class="example-box"><div class="example-box-header">📝 Example 1: Similar Triangles</div><div class="example-box-body"><p><strong>Problem:</strong> △ABC ∼ △DEF. If AB = 4, BC = 6, and DE = 6, find EF.</p></div><div class="example-solution"><strong>Solution</strong><p>Scale factor k = DE/AB = 6/4 = 3/2<br>EF = BC · k = 6 · (3/2) = 9</p></div></div>
<h3>Circle Theorems</h3>
<div class="concept-box"><h4>Key Circle Theorems</h4><p><strong>Inscribed Angle:</strong> Half the central angle (both subtend the same arc)<br><strong>Tangent-Chord:</strong> Angle between tangent and chord = half the arc<br><strong>Power of a Point:</strong> If two chords intersect inside, PA·PB = PC·PD<br><strong>Tangent Segments:</strong> From external point, two tangent segments are equal</p></div>
<div class="example-box"><div class="example-box-header">📝 Example 2: Inscribed Angle</div><div class="example-box-body"><p><strong>Problem:</strong> In circle O, central angle ∠AOB = 80°. Find the inscribed angle ∠ACB (same arc).</p></div><div class="example-solution"><strong>Solution</strong><p>Inscribed angle = (1/2) · central angle<br>∠ACB = (1/2) · 80° = <strong>40°</strong></p></div></div>
<div class="example-box"><div class="example-box-header">📝 Example 3: Power of a Point</div><div class="example-box-body"><p><strong>Problem:</strong> Two chords intersect at P. One chord has segments PA = 3, PB = 8. The other has PC = 4. Find PD.</p></div><div class="example-solution"><strong>Solution</strong><p>PA · PB = PC · PD<br>3 · 8 = 4 · PD<br>24 = 4 · PD<br>PD = <strong>6</strong></p></div></div>`,
  quiz: [
    { q: "If △ABC ∼ △DEF with scale factor 2, and area of △ABC = 16, what is area of △DEF?", options: ["32", "64", "8", "4"], answer: 1, explanation: "Area ratio = k² = 2² = 4. Area of △DEF = 16 · 4 = 64." },
    { q: "An inscribed angle subtends an arc of 60°. What is the inscribed angle?", options: ["30°", "60°", "120°", "90°"], answer: 0, explanation: "Inscribed angle = (1/2) · arc = (1/2) · 60° = 30°." },
    { q: "Two tangent segments from an external point to a circle are ______.", options: ["equal in length", "perpendicular", "parallel", "proportional"], answer: 0, explanation: "Tangent segments from an external point are always equal in length." }
  ]
};

/* ── PHYSICS: WAVES, OPTICS, MODERN PHYSICS ───────────────── */
const wavesModule = {
  id: "physics-waves",
  title: "Waves & Wave Motion",
  content: `<h3>Wave Fundamentals</h3>
<p>A <strong>wave</strong> is a disturbance that propagates through space, transferring energy without permanent displacement of the medium. Key properties: amplitude, frequency, wavelength, speed.</p>
<div class="formula-box"><span class="label">Wave Relationships</span>Wave speed: v = fλ  (f = frequency, λ = wavelength)
Period: T = 1/f
Energy: E ∝ A² (amplitude squared)</div>
<div class="concept-box"><h4>Wave Types</h4><p><strong>Mechanical:</strong> Requires a medium (sound, water waves)<br><strong>Electromagnetic:</strong> No medium needed (light, radio, X-rays)<br><strong>Transverse:</strong> Oscillates perpendicular to propagation<br><strong>Longitudinal:</strong> Oscillates parallel to propagation</p></div>
<div class="example-box"><div class="example-box-header">📝 Example 1: Wavelength & Frequency</div><div class="example-box-body"><p><strong>Problem:</strong> A sound wave has frequency 440 Hz. If sound travels at 340 m/s, what is the wavelength?</p></div><div class="example-solution"><strong>Solution</strong><p>v = fλ<br>340 = 440 · λ<br>λ = 340/440 ≈ <strong>0.77 m</strong></p></div></div>
<h3>Interference & Standing Waves</h3>
<p><strong>Constructive interference:</strong> Waves align, amplitudes add. <strong>Destructive:</strong> Waves oppose, cancel. <strong>Standing waves:</strong> Nodes (no motion) and antinodes (max motion) form when reflected waves interfere.</p>
<div class="example-box"><div class="example-box-header">📝 Example 2: Standing Wave</div><div class="example-box-body"><p><strong>Problem:</strong> A string fixed at both ends vibrates at the fundamental frequency. If the string length is 1 m, what is the wavelength?</p></div><div class="example-solution"><strong>Solution</strong><p>Fundamental mode (first harmonic): L = λ/2<br>1 = λ/2<br>λ = <strong>2 m</strong></p></div></div>
<h3>Doppler Effect</h3>
<p>Observed frequency changes when source/observer moves relative to the medium.</p>
<div class="formula-box"><span class="label">Doppler Formula</span>f' = f · (v ± v_observer) / (v ∓ v_source)
[Use + when approaching, − when receding]</div>`,
  quiz: [
    { q: "If wavelength doubles and frequency stays constant, wave speed:", options: ["doubles", "halves", "stays same", "quadruples"], answer: 0, explanation: "v = fλ. If λ doubles with f constant, v doubles." },
    { q: "In constructive interference, path difference equals:", options: ["nλ", "(n+½)λ", "λ/2", "none"], answer: 0, explanation: "Constructive: path difference = nλ (n = 0, 1, 2, ...)." },
    { q: "A siren approaches you. The sound frequency you hear is:", options: ["lower than actual", "higher than actual", "same as actual", "zero"], answer: 1, explanation: "When source approaches, wavelength compresses, frequency increases (Doppler effect)." }
  ]
};

const opticsModule = {
  id: "physics-optics",
  title: "Light & Geometric Optics",
  content: `<h3>Laws of Reflection & Refraction</h3>
<p>Light reflects and refracts at boundaries. <strong>Law of Reflection:</strong> angle of incidence = angle of reflection (both measured from normal). <strong>Snell's Law:</strong> n₁sin(θ₁) = n₂sin(θ₂).</p>
<div class="formula-box"><span class="label">Snell's Law</span>n₁ sin θ₁ = n₂ sin θ₂
(n = refractive index, θ = angle from normal)</div>
<div class="concept-box"><h4>Refractive Indices (approx)</h4><p>Vacuum: n = 1.00<br>Air: n ≈ 1.00<br>Water: n ≈ 1.33<br>Glass: n ≈ 1.50<br>Diamond: n ≈ 2.42</p></div>
<div class="example-box"><div class="example-box-header">📝 Example 1: Snell's Law</div><div class="example-box-body"><p><strong>Problem:</strong> Light enters glass (n=1.5) from air at 30°. What is the refraction angle in glass?</p></div><div class="example-solution"><strong>Solution</strong><p>1.00 · sin(30°) = 1.50 · sin(θ₂)<br>0.5 = 1.50 · sin(θ₂)<br>sin(θ₂) = 1/3<br>θ₂ ≈ <strong>19.5°</strong></p></div></div>
<h3>Thin Lens Equation</h3>
<div class="formula-box"><span class="label">Lens Equation</span>1/f = 1/d_o + 1/d_i
Magnification: m = −d_i / d_o = h_i / h_o
(f = focal length, d_o = object distance, d_i = image distance)</div>
<div class="example-box"><div class="example-box-header">📝 Example 2: Converging Lens</div><div class="example-box-body"><p><strong>Problem:</strong> A converging lens has focal length f = 10 cm. An object is placed 30 cm away. Find image distance and magnification.</p></div><div class="example-solution"><strong>Solution</strong><p>1/10 = 1/30 + 1/d_i<br>1/d_i = 1/10 − 1/30 = 3/30 − 1/30 = 2/30<br>d_i = 15 cm<br>m = −15/30 = −0.5 (real, inverted, reduced)</p></div></div>
<h3>Mirrors</h3>
<p><strong>Concave (converging):</strong> Curved inward, real images. <strong>Convex (diverging):</strong> Curved outward, always virtual. Mirror equation: same as lens.</p>`,
  quiz: [
    { q: "Light travels from water (n=1.33) to air. Critical angle for total internal reflection?", options: ["sin⁻¹(1.33)", "sin⁻¹(1/1.33) ≈ 49°", "90°", "sin⁻¹(0.75)"], answer: 1, explanation: "At critical angle: n₁sin(θ_c) = n₂·1. So sin(θ_c) = 1/1.33 ≈ 0.752, θ_c ≈ 49°." },
    { q: "A converging lens forms a real, inverted image. The object must be:", options: ["at focal point", "beyond focal length", "between f and 2f", "at infinity"], answer: 1, explanation: "Real, inverted images form when object distance > focal length." },
    { q: "Magnification m = −2 means:", options: ["virtual, upright, 2x", "real, inverted, 2x", "real, upright, 2x", "virtual, inverted, 2x"], answer: 1, explanation: "Negative m → real image, inverted. |m| = 2 → doubled in size." }
  ]
};

const modernPhysicsModule = {
  id: "physics-modern",
  title: "Modern Physics: Relativity & Quanta",
  content: `<h3>Einstein's Relativity</h3>
<p><strong>Special Relativity:</strong> Laws of physics are the same in all inertial frames. Speed of light (c) is constant. Time dilates and length contracts at high speeds.</p>
<div class="formula-box"><span class="label">Time Dilation</span>Δt = γ Δt₀,  where γ = 1/√(1 − v²/c²)
(Δt₀ = proper time, v = velocity)</div>
<div class="formula-box"><span class="label">Mass-Energy Equivalence</span>E = mc²
(m = mass, c = speed of light)</div>
<div class="example-box"><div class="example-box-header">📝 Example 1: Rest Energy</div><div class="example-box-body"><p><strong>Problem:</strong> Calculate the rest energy of an electron (m = 9.11 × 10⁻³¹ kg).</p></div><div class="example-solution"><strong>Solution</strong><p>E = mc²<br>E = (9.11 × 10⁻³¹) · (3 × 10⁸)²<br>E = 8.2 × 10⁻¹⁴ J ≈ <strong>0.51 MeV</strong></p></div></div>
<h3>Quantum Mechanics Basics</h3>
<p><strong>Photon:</strong> Light particle with energy E = hf (h = Planck's constant, 6.63 × 10⁻³⁴ J·s). <strong>Photoelectric effect:</strong> Light ejects electrons from metal if f > f₀.</p>
<div class="formula-box"><span class="label">Photoelectric Effect</span>hf = Φ + KE_max
(Φ = work function)</div>
<div class="example-box"><div class="example-box-header">📝 Example 2: Photon Energy</div><div class="example-box-body"><p><strong>Problem:</strong> What is the energy of a photon with frequency 5 × 10¹⁴ Hz?</p></div><div class="example-solution"><strong>Solution</strong><p>E = hf<br>E = (6.63 × 10⁻³⁴) · (5 × 10¹⁴)<br>E ≈ <strong>3.3 × 10⁻¹⁹ J</strong></p></div></div>
<h3>Atomic & Nuclear Physics</h3>
<p><strong>Bohr Model:</strong> Electrons orbit nucleus in discrete energy levels. Transitions emit/absorb photons. <strong>Nuclear decay:</strong> α, β, γ radiation from unstable nuclei.</p>`,
  quiz: [
    { q: "If an object moves at 0.6c, γ = ?", options: ["0.8", "1.25", "0.6", "1.5"], answer: 1, explanation: "γ = 1/√(1 − 0.36) = 1/√0.64 = 1/0.8 = 1.25." },
    { q: "E = mc² shows that:", options: ["energy depends on velocity", "mass converts to energy", "light is a particle", "time is relative"], answer: 1, explanation: "This equation shows the equivalence of mass and energy." },
    { q: "Photon frequency increases → photon energy:", options: ["decreases", "stays same", "increases", "becomes zero"], answer: 2, explanation: "E = hf. Higher frequency → higher energy." }
  ]
};

module.exports = {
  algebraIIModules,
  systemsOfEquationsModule,
  geometryTransformationsModule,
  similarityModule,
  wavesModule,
  opticsModule,
  modernPhysicsModule
};
