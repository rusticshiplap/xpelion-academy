/* ============================================================
   XPELION ACADEMY — CONTENT DATABASE
   All educational content for math and science topics
   ============================================================ */

const XA = {

  /* ── MATH SUBJECTS ──────────────────────────────────────── */
  math: {
    "arithmetic": {
      id: "arithmetic", title: "Arithmetic & Number Sense",
      icon: "🔢", color: "#4f46e5", level: "K–5",
      description: "Master the foundations of numbers, operations, and numerical reasoning.",
      tags: ["K-12", "Foundations"],
      modules: [
        {
          id: "place-value", title: "Place Value & Number Systems",
          content: `<h3>Understanding Place Value</h3>
<p>Every digit in a number occupies a <strong>place</strong> — and that place determines how much the digit is worth. Our number system is <strong>base-10 (decimal)</strong>, meaning each position is ten times the value of the position to its right.</p>
<div class="concept-box"><h4>Core Concept</h4><p>In the number <strong>4,375</strong>:<br>• 4 is in the <em>thousands</em> place → worth 4,000<br>• 3 is in the <em>hundreds</em> place → worth 300<br>• 7 is in the <em>tens</em> place → worth 70<br>• 5 is in the <em>ones</em> place → worth 5</p></div>
<h3>Expanded Form</h3>
<p>Writing a number in expanded form shows the value of each digit separately.</p>
<div class="formula-box"><span class="label">Expanded Form</span>4,375 = 4,000 + 300 + 70 + 5</div>
<div class="example-box"><div class="example-box-header">📝 Example 1</div><div class="example-box-body"><p><strong>Problem:</strong> Write 52,089 in expanded form and identify the value of the digit 2.</p></div><div class="example-solution"><strong>Solution</strong><p>52,089 = 50,000 + 2,000 + 0 + 80 + 9<br>The digit 2 is in the <em>thousands</em> place, so its value is <strong>2,000</strong>.</p></div></div>
<h3>Comparing & Ordering Numbers</h3>
<p>To compare numbers, start from the <strong>leftmost (greatest) place value</strong> and work right until the digits differ.</p>
<div class="example-box"><div class="example-box-header">📝 Example 2</div><div class="example-box-body"><p><strong>Problem:</strong> Which is greater: 7,204 or 7,240?</p></div><div class="example-solution"><strong>Solution</strong><p>Both have 7 thousands and 2 hundreds. Compare tens: 0 vs 4. Since 4 > 0, we get <strong>7,240 > 7,204</strong>.</p></div></div>`,
          quiz: [
            { q: "What is the value of the digit 6 in the number 36,481?", options: ["6", "600", "6,000", "60,000"], answer: 2, explanation: "The digit 6 is in the thousands place, so its value is 6,000." },
            { q: "Which number has a 4 in the hundreds place?", options: ["1,480", "4,152", "2,401", "14,500"], answer: 0, explanation: "1,480: 1 in thousands, 4 in hundreds, 8 in tens, 0 in ones. The 4 is in the hundreds place." },
            { q: "Write 30,000 + 400 + 7 as a standard number.", options: ["347", "30,047", "30,407", "3,047"], answer: 2, explanation: "30,000 + 400 + 7 = 30,407." }
          ]
        },
        {
          id: "operations", title: "The Four Operations",
          content: `<h3>Addition & Subtraction</h3>
<p>Addition combines quantities; subtraction finds the difference. Both follow the principle of working with <strong>like place values</strong>.</p>
<div class="concept-box"><h4>Key Properties of Addition</h4><p><strong>Commutative:</strong> a + b = b + a<br><strong>Associative:</strong> (a + b) + c = a + (b + c)<br><strong>Identity:</strong> a + 0 = a</p></div>
<h3>Multiplication & Division</h3>
<p>Multiplication is repeated addition. Division is repeated subtraction or splitting into equal groups.</p>
<div class="formula-box"><span class="label">Relationship</span>If a × b = c, then c ÷ a = b and c ÷ b = a</div>
<div class="example-box"><div class="example-box-header">📝 Example: Long Multiplication</div><div class="example-box-body"><p><strong>Problem:</strong> Calculate 348 × 27</p></div><div class="example-solution"><strong>Solution</strong><p>348 × 7 = 2,436<br>348 × 20 = 6,960<br>Total: 2,436 + 6,960 = <strong>9,396</strong></p></div></div>
<h3>Order of Operations (PEMDAS)</h3>
<p>When multiple operations appear, evaluate in this order: <strong>P</strong>arentheses → <strong>E</strong>xponents → <strong>M</strong>ultiplication/Division (left to right) → <strong>A</strong>ddition/Subtraction (left to right).</p>
<div class="example-box"><div class="example-box-header">📝 Example: PEMDAS</div><div class="example-box-body"><p><strong>Problem:</strong> Evaluate 3 + 4 × (8 − 2)² ÷ 12</p></div><div class="example-solution"><strong>Solution</strong><p>(8−2) = 6 → 6² = 36 → 4×36 = 144 → 144÷12 = 12 → 3+12 = <strong>15</strong></p></div></div>`,
          quiz: [
            { q: "Evaluate: 5 + 3 × 4 − 2", options: ["30", "15", "10", "19"], answer: 1, explanation: "Multiply first: 3×4=12. Then 5+12−2 = 15." },
            { q: "What property states that 7 × 8 = 8 × 7?", options: ["Associative", "Distributive", "Commutative", "Identity"], answer: 2, explanation: "The commutative property says order doesn't matter in multiplication (or addition)." },
            { q: "Evaluate: (2 + 6)² ÷ 4", options: ["16", "4", "10", "64"], answer: 0, explanation: "(2+6)=8; 8²=64; 64÷4=16." }
          ]
        }
      ]
    },

    "number-theory": {
      id: "number-theory", title: "Number Theory",
      icon: "∞", color: "#7c3aed", level: "Middle–College",
      description: "Explore primes, divisibility, modular arithmetic, and the deep structure of integers.",
      tags: ["Middle School", "College"],
      modules: [
        {
          id: "primes", title: "Prime Numbers & Factorization",
          content: `<h3>What Is a Prime Number?</h3>
<p>A <strong>prime number</strong> is a natural number greater than 1 whose only positive divisors are 1 and itself. The number 2 is the only even prime — every other even number is divisible by 2, making it composite.</p>
<div class="concept-box"><h4>The Fundamental Theorem of Arithmetic</h4><p>Every integer greater than 1 can be expressed as a product of primes in exactly one way (ignoring order). This is called <strong>prime factorization</strong>.</p></div>
<h3>The Sieve of Eratosthenes</h3>
<p>To find all primes up to n: list numbers 2 through n, then repeatedly strike out multiples of each prime found, starting with 2. The survivors are prime.</p>
<div class="example-box"><div class="example-box-header">📝 Prime Factorization</div><div class="example-box-body"><p><strong>Problem:</strong> Find the prime factorization of 360.</p></div><div class="example-solution"><strong>Solution</strong><p>360 = 2 × 180 = 2 × 2 × 90 = 2² × 2 × 45 = 2³ × 45<br>45 = 3² × 5<br>∴ 360 = <strong>2³ × 3² × 5</strong></p></div></div>
<h3>GCD and LCM</h3>
<p>The <strong>Greatest Common Divisor (GCD)</strong> of two numbers is the largest number that divides both. The <strong>Least Common Multiple (LCM)</strong> is the smallest positive number divisible by both.</p>
<div class="formula-box"><span class="label">Key Identity</span>GCD(a, b) × LCM(a, b) = a × b</div>
<div class="example-box"><div class="example-box-header">📝 GCD & LCM</div><div class="example-box-body"><p><strong>Problem:</strong> Find GCD(48, 36) and LCM(48, 36).</p></div><div class="example-solution"><strong>Solution</strong><p>48 = 2⁴ × 3; 36 = 2² × 3²<br>GCD = 2² × 3 = <strong>12</strong><br>LCM = 2⁴ × 3² = <strong>144</strong><br>Check: 12 × 144 = 1,728 = 48 × 36 ✓</p></div></div>
<h3>Modular Arithmetic</h3>
<p>We say <em>a ≡ b (mod n)</em> if n divides (a − b). This "clock arithmetic" is foundational to cryptography, computer science, and many competition math problems.</p>
<div class="example-box"><div class="example-box-header">📝 Modular Arithmetic</div><div class="example-box-body"><p><strong>Problem:</strong> What is 7²³ mod 5?</p></div><div class="example-solution"><strong>Solution</strong><p>7 ≡ 2 (mod 5). So 7²³ ≡ 2²³ (mod 5).<br>2⁴ ≡ 16 ≡ 1 (mod 5). So 2²³ = 2²⁰ × 2³ ≡ 1⁵ × 8 ≡ 8 ≡ <strong>3</strong> (mod 5).</p></div></div>`,
          quiz: [
            { q: "Which of these numbers is prime?", options: ["51", "57", "59", "55"], answer: 2, explanation: "51=3×17, 57=3×19, 55=5×11. 59 is only divisible by 1 and 59." },
            { q: "What is GCD(84, 60)?", options: ["6", "12", "24", "4"], answer: 1, explanation: "84=2²×3×7; 60=2²×3×5. GCD=2²×3=12." },
            { q: "What is 17 mod 5?", options: ["3", "2", "4", "1"], answer: 1, explanation: "17 = 3×5 + 2, so 17 mod 5 = 2." }
          ]
        }
      ]
    },

    "algebra1": {
      id: "algebra1", title: "Algebra I",
      icon: "x²", color: "#2563eb", level: "8th–9th Grade",
      description: "Linear equations, inequalities, functions, and polynomial expressions.",
      tags: ["K-12", "High School"],
      modules: [
        {
          id: "linear-equations", title: "Linear Equations",
          content: `<h3>What Is a Linear Equation?</h3>
<p>A <strong>linear equation</strong> is an equation where the variable appears only to the first power. Its graph is always a straight line. The standard forms are:</p>
<div class="formula-box"><span class="label">Forms</span>Slope-intercept: y = mx + b
Standard form:    Ax + By = C
Point-slope:      y − y₁ = m(x − x₁)</div>
<div class="concept-box"><h4>Slope (m)</h4><p>Slope measures steepness and direction: m = (y₂ − y₁)/(x₂ − x₁). Positive slope → rises left to right. Negative → falls. Zero → horizontal. Undefined → vertical.</p></div>
<h3>Solving Linear Equations</h3>
<p>The goal is to isolate the variable by applying <strong>inverse operations</strong> equally to both sides.</p>
<div class="example-box"><div class="example-box-header">📝 Example 1: One-step</div><div class="example-box-body"><p>Solve: 3x − 7 = 14</p></div><div class="example-solution"><strong>Solution</strong><p>Add 7 to both sides: 3x = 21<br>Divide by 3: x = <strong>7</strong><br>Check: 3(7)−7 = 14 ✓</p></div></div>
<div class="example-box"><div class="example-box-header">📝 Example 2: Variables on Both Sides</div><div class="example-box-body"><p>Solve: 5x + 3 = 2x + 18</p></div><div class="example-solution"><strong>Solution</strong><p>Subtract 2x: 3x + 3 = 18<br>Subtract 3: 3x = 15<br>Divide: x = <strong>5</strong></p></div></div>
<h3>Systems of Linear Equations</h3>
<p>A system has two equations and two unknowns. Methods: <strong>substitution</strong>, <strong>elimination</strong>, <strong>graphing</strong>.</p>
<div class="example-box"><div class="example-box-header">📝 Example 3: Elimination</div><div class="example-box-body"><p>Solve: 2x + 3y = 12 and 4x − 3y = 6</p></div><div class="example-solution"><strong>Solution</strong><p>Add both equations: 6x = 18 → x = 3<br>Substitute: 2(3)+3y=12 → 6+3y=12 → y = <strong>2</strong><br>Solution: (3, 2)</p></div></div>`,
          quiz: [
            { q: "Solve for x: 4x + 5 = 29", options: ["x = 6", "x = 8", "x = 5", "x = 7"], answer: 0, explanation: "4x = 24, so x = 6. Check: 4(6)+5=29 ✓" },
            { q: "What is the slope of the line 3x − 2y = 10?", options: ["3/2", "−3/2", "2/3", "−2/3"], answer: 0, explanation: "Rewrite: −2y = −3x+10 → y = (3/2)x − 5. Slope = 3/2." },
            { q: "Which point lies on y = 2x − 3?", options: ["(1,1)", "(2,1)", "(3,3)", "(0,3)"], answer: 1, explanation: "y = 2(2)−3 = 1. The point (2,1) satisfies the equation." }
          ]
        },
        {
          id: "polynomials", title: "Polynomials & Factoring",
          content: `<h3>Polynomial Basics</h3>
<p>A <strong>polynomial</strong> is an expression of the form aₙxⁿ + aₙ₋₁xⁿ⁻¹ + … + a₁x + a₀. The <strong>degree</strong> is the highest power of x. The <strong>leading coefficient</strong> is the coefficient of the highest-degree term.</p>
<h3>Factoring Techniques</h3>
<p>Factoring rewrites a polynomial as a product of simpler factors.</p>
<div class="concept-box"><h4>Factoring Checklist</h4><p>1. <strong>GCF</strong> — always factor out the greatest common factor first<br>2. <strong>Difference of squares:</strong> a² − b² = (a+b)(a−b)<br>3. <strong>Perfect square trinomial:</strong> a² ± 2ab + b² = (a ± b)²<br>4. <strong>Trial & error / AC method</strong> for ax² + bx + c</p></div>
<div class="example-box"><div class="example-box-header">📝 Factor: x² + 7x + 12</div><div class="example-box-body"><p>Find two numbers that multiply to 12 and add to 7.</p></div><div class="example-solution"><strong>Solution</strong><p>3 × 4 = 12 and 3 + 4 = 7<br>∴ x² + 7x + 12 = <strong>(x + 3)(x + 4)</strong></p></div></div>
<div class="example-box"><div class="example-box-header">📝 Factor: 6x² + x − 2</div><div class="example-box-body"><p>Using the AC method: a=6, c=−2, so ac=−12. Find factors of −12 that add to 1: 4 and −3.</p></div><div class="example-solution"><strong>Solution</strong><p>6x² + 4x − 3x − 2 = 2x(3x+2) − 1(3x+2) = <strong>(2x−1)(3x+2)</strong></p></div></div>`,
          quiz: [
            { q: "Factor: x² − 16", options: ["(x−4)²", "(x+4)(x−4)", "(x+8)(x−8)", "Cannot be factored"], answer: 1, explanation: "Difference of squares: x²−16 = (x+4)(x−4)." },
            { q: "Factor: x² + 10x + 25", options: ["(x+5)²", "(x+5)(x−5)", "(x−5)²", "(x+10)(x+25)"], answer: 0, explanation: "Perfect square trinomial: (x+5)² = x²+10x+25." },
            { q: "What is the degree of 3x⁴ − 2x² + x − 7?", options: ["1", "2", "4", "3"], answer: 2, explanation: "The highest power of x is 4, so the degree is 4." }
          ]
        }
      ]
    },

    "geometry": {
      id: "geometry", title: "Geometry",
      icon: "△", color: "#0891b2", level: "9th–10th Grade",
      description: "Points, lines, angles, shapes, proofs, and the mathematics of space.",
      tags: ["K-12", "High School"],
      modules: [
        {
          id: "angles-triangles", title: "Angles & Triangles",
          content: `<h3>Angle Relationships</h3>
<p>Angles are classified by measure: <strong>acute</strong> (< 90°), <strong>right</strong> (= 90°), <strong>obtuse</strong> (90°–180°), <strong>straight</strong> (= 180°).</p>
<div class="concept-box"><h4>Key Angle Pairs</h4><p><strong>Complementary:</strong> sum = 90°<br><strong>Supplementary:</strong> sum = 180°<br><strong>Vertical angles:</strong> always congruent<br><strong>Linear pair:</strong> supplementary, share a ray</p></div>
<h3>Triangle Properties</h3>
<p>Every triangle has three sides and three angles. The <strong>Triangle Angle Sum Theorem</strong> states the interior angles always sum to 180°.</p>
<div class="formula-box"><span class="label">Triangle Inequality</span>The sum of any two sides must be greater than the third side:
a + b > c,  a + c > b,  b + c > a</div>
<h3>Special Triangles</h3>
<p><strong>Equilateral:</strong> all sides and angles equal (60° each). <strong>Isosceles:</strong> two equal sides; the angles opposite them are equal. <strong>Right triangle:</strong> one 90° angle; satisfies the Pythagorean Theorem.</p>
<div class="formula-box"><span class="label">Pythagorean Theorem</span>a² + b² = c²   (c = hypotenuse)</div>
<div class="example-box"><div class="example-box-header">📝 Example: Missing Side</div><div class="example-box-body"><p>A right triangle has legs a = 9 and b = 12. Find the hypotenuse c.</p></div><div class="example-solution"><strong>Solution</strong><p>c² = 9² + 12² = 81 + 144 = 225<br>c = √225 = <strong>15</strong><br>This is the classic 3-4-5 triple scaled by 3.</p></div></div>
<h3>Triangle Congruence</h3>
<p>Two triangles are congruent (same shape and size) if they satisfy: <strong>SSS, SAS, ASA, AAS,</strong> or <strong>HL</strong> (right triangles). <em>Note: SSA and AAA do not guarantee congruence.</em></p>`,
          quiz: [
            { q: "Two angles are supplementary. One measures 73°. What is the other?", options: ["17°", "107°", "97°", "117°"], answer: 1, explanation: "Supplementary means sum = 180°. 180°−73° = 107°." },
            { q: "A right triangle has legs 5 and 12. What is the hypotenuse?", options: ["13", "17", "11", "15"], answer: 0, explanation: "5²+12²=25+144=169=13²." },
            { q: "Which congruence postulate uses two sides and the included angle?", options: ["SSS", "ASA", "AAS", "SAS"], answer: 3, explanation: "SAS = Side-Angle-Side, where the angle is between the two sides." }
          ]
        },
        {
          id: "area-volume", title: "Area, Surface Area & Volume",
          content: `<h3>Area Formulas</h3>
<div class="formula-box"><span class="label">2D Shapes</span>Rectangle:        A = lw
Triangle:         A = ½bh
Circle:           A = πr²
Trapezoid:        A = ½(b₁+b₂)h
Parallelogram:    A = bh
Regular polygon:  A = ½ × perimeter × apothem</div>
<h3>Surface Area & Volume</h3>
<div class="formula-box"><span class="label">3D Shapes</span>Cube:       V = s³           SA = 6s²
Rectangular prism: V = lwh     SA = 2(lw+lh+wh)
Cylinder:   V = πr²h         SA = 2πr²+2πrh
Cone:       V = ⅓πr²h        SA = πr²+πrl
Sphere:     V = 4/3 πr³      SA = 4πr²
Pyramid:    V = ⅓Bh          SA = B + ½Pl</div>
<div class="example-box"><div class="example-box-header">📝 Example: Cylinder</div><div class="example-box-body"><p>A cylinder has radius 4 cm and height 10 cm. Find its volume and surface area.</p></div><div class="example-solution"><strong>Solution</strong><p>V = π(4²)(10) = 160π ≈ <strong>502.7 cm³</strong><br>SA = 2π(16) + 2π(4)(10) = 32π + 80π = 112π ≈ <strong>351.9 cm²</strong></p></div></div>`,
          quiz: [
            { q: "What is the area of a triangle with base 8 and height 5?", options: ["40", "13", "20", "80"], answer: 2, explanation: "A = ½bh = ½(8)(5) = 20." },
            { q: "What is the volume of a sphere with radius 3?", options: ["36π", "12π", "9π", "4π"], answer: 0, explanation: "V = 4/3 πr³ = 4/3 π(27) = 36π." }
          ]
        }
      ]
    },

    "trigonometry": {
      id: "trigonometry", title: "Trigonometry",
      icon: "sin", color: "#7c3aed", level: "10th–11th Grade",
      description: "The unit circle, trigonometric functions, identities, and applications to triangles.",
      tags: ["K-12", "High School"],
      modules: [
        {
          id: "trig-functions", title: "The Six Trig Functions",
          content: `<h3>SOH-CAH-TOA</h3>
<p>In a right triangle with angle θ, the sides are labeled: <strong>opposite</strong> (across from θ), <strong>adjacent</strong> (next to θ), and <strong>hypotenuse</strong> (longest side, opposite 90°).</p>
<div class="formula-box"><span class="label">Definitions</span>sin θ = opposite/hypotenuse    csc θ = 1/sin θ
cos θ = adjacent/hypotenuse    sec θ = 1/cos θ
tan θ = opposite/adjacent      cot θ = 1/tan θ</div>
<h3>The Unit Circle</h3>
<p>The unit circle (radius = 1, centered at origin) gives exact values for trig functions at key angles. A point (x, y) on the unit circle at angle θ satisfies cos θ = x, sin θ = y.</p>
<div class="concept-box"><h4>Key Angle Values</h4><p>
θ = 0°: (cos, sin) = (1, 0)<br>
θ = 30°: (√3/2, 1/2)<br>
θ = 45°: (√2/2, √2/2)<br>
θ = 60°: (1/2, √3/2)<br>
θ = 90°: (0, 1)
</p></div>
<div class="example-box"><div class="example-box-header">📝 Example</div><div class="example-box-body"><p>Find all six trig functions for a right triangle with legs 5 and 12.</p></div><div class="example-solution"><strong>Solution</strong><p>Hypotenuse = 13 (Pythagorean triple).<br>sin = 5/13, cos = 12/13, tan = 5/12<br>csc = 13/5, sec = 13/12, cot = 12/5</p></div></div>
<h3>Fundamental Identities</h3>
<div class="formula-box"><span class="label">Pythagorean Identities</span>sin²θ + cos²θ = 1
1 + tan²θ = sec²θ
1 + cot²θ = csc²θ</div>`,
          quiz: [
            { q: "In a right triangle, sin θ = 3/5. What is cos θ?", options: ["4/5", "3/4", "5/3", "5/4"], answer: 0, explanation: "sin²+cos²=1 → 9/25+cos²=1 → cos²=16/25 → cos=4/5." },
            { q: "What is sin(30°)?", options: ["√2/2", "√3/2", "1/2", "1"], answer: 2, explanation: "sin(30°) = 1/2 from the unit circle." },
            { q: "tan(45°) = ?", options: ["√2", "0", "1", "√3"], answer: 2, explanation: "At 45°, sin=cos=√2/2, so tan = sin/cos = 1." }
          ]
        }
      ]
    },

    "calculus": {
      id: "calculus", title: "Calculus",
      icon: "∫", color: "#dc2626", level: "11th Grade–College",
      description: "Limits, derivatives, integrals, and the mathematics of continuous change.",
      tags: ["High School", "College"],
      modules: [
        {
          id: "limits", title: "Limits & Continuity",
          content: `<h3>The Concept of a Limit</h3>
<p>The <strong>limit</strong> of f(x) as x approaches a describes the value f(x) approaches, <em>not necessarily the value at x = a</em>. We write: lim(x→a) f(x) = L.</p>
<div class="concept-box"><h4>Informal Definition</h4><p>As x gets arbitrarily close to a (from either side), f(x) gets arbitrarily close to L. This is independent of what f(a) actually equals — or whether f(a) exists at all.</p></div>
<div class="formula-box"><span class="label">Limit Laws</span>lim[f(x)+g(x)] = lim f(x) + lim g(x)
lim[f(x)·g(x)] = lim f(x) · lim g(x)
lim[f(x)/g(x)] = lim f(x) / lim g(x)   (if lim g(x) ≠ 0)</div>
<h3>Computing Limits</h3>
<div class="example-box"><div class="example-box-header">📝 Example: Indeterminate Form</div><div class="example-box-body"><p>Find lim(x→3) (x² − 9)/(x − 3)</p></div><div class="example-solution"><strong>Solution</strong><p>Direct substitution gives 0/0 (indeterminate). Factor:<br>(x²−9)/(x−3) = (x+3)(x−3)/(x−3) = x+3 (for x≠3)<br>∴ lim(x→3)(x+3) = <strong>6</strong></p></div></div>
<h3>Continuity</h3>
<p>f is <strong>continuous at x = a</strong> if: (1) f(a) exists, (2) lim(x→a) f(x) exists, and (3) lim(x→a) f(x) = f(a). Polynomials, exponentials, trig functions are continuous everywhere on their domains.</p>`,
          quiz: [
            { q: "Find lim(x→2) (x²−4)/(x−2)", options: ["0", "4", "2", "undefined"], answer: 1, explanation: "(x²−4)/(x−2) = (x+2)(x−2)/(x−2) = x+2 → 4 as x→2." },
            { q: "A function f is continuous at x=a if:", options: ["f(a) exists only", "The limit exists only", "f(a) exists, the limit exists, and they are equal", "f(a) = 0"], answer: 2, explanation: "All three conditions must hold for continuity at a point." }
          ]
        },
        {
          id: "derivatives", title: "Derivatives",
          content: `<h3>The Derivative — Rate of Change</h3>
<p>The <strong>derivative</strong> f′(x) measures the instantaneous rate of change of f at x. Geometrically, it is the slope of the tangent line to the graph of f at x.</p>
<div class="formula-box"><span class="label">Definition</span>f′(x) = lim(h→0) [f(x+h) − f(x)] / h</div>
<h3>Differentiation Rules</h3>
<div class="formula-box"><span class="label">Core Rules</span>Constant:     d/dx [c] = 0
Power:        d/dx [xⁿ] = nxⁿ⁻¹
Sum/Diff:     (f ± g)′ = f′ ± g′
Product:      (fg)′ = f′g + fg′
Quotient:     (f/g)′ = (f′g − fg′)/g²
Chain Rule:   d/dx[f(g(x))] = f′(g(x)) · g′(x)</div>
<div class="formula-box"><span class="label">Trig & Exponential</span>d/dx[sin x] = cos x      d/dx[cos x] = −sin x
d/dx[eˣ]  = eˣ           d/dx[ln x] = 1/x
d/dx[aˣ]  = aˣ ln a</div>
<div class="example-box"><div class="example-box-header">📝 Chain Rule Example</div><div class="example-box-body"><p>Differentiate f(x) = sin(3x² + 1)</p></div><div class="example-solution"><strong>Solution</strong><p>Outer: sin(u) → cos(u). Inner: 3x²+1 → 6x<br>f′(x) = cos(3x²+1) · 6x = <strong>6x cos(3x²+1)</strong></p></div></div>
<h3>Applications of Derivatives</h3>
<p><strong>Critical points</strong> occur where f′(x) = 0 or f′(x) is undefined. Use the <strong>First Derivative Test</strong>: if f′ changes from + to −, it's a local max; − to +, a local min. <strong>Inflection points</strong> occur where f″ changes sign.</p>`,
          quiz: [
            { q: "Find d/dx[5x⁴ − 3x² + 7]", options: ["20x³−6x", "20x³−3", "5x³−6x", "20x⁴−6x"], answer: 0, explanation: "Power rule: 4·5x³ − 2·3x + 0 = 20x³ − 6x." },
            { q: "What does f′(x) = 0 at a point tell us?", options: ["f has a zero there", "The tangent is horizontal", "f is discontinuous", "f is increasing"], answer: 1, explanation: "f′=0 means the tangent line slope is zero, so it's horizontal — a potential max, min, or inflection." },
            { q: "Differentiate: g(x) = e^(2x)", options: ["2e^x", "e^(2x)", "2e^(2x)", "xe^(2x)"], answer: 2, explanation: "Chain rule: d/dx[e^u] = e^u·u′ = e^(2x)·2 = 2e^(2x)." }
          ]
        },
        {
          id: "integrals", title: "Integration",
          content: `<h3>The Definite Integral</h3>
<p>The <strong>definite integral</strong> ∫[a to b] f(x) dx represents the signed area between f(x) and the x-axis from x = a to x = b. It is computed as the limit of Riemann sums.</p>
<div class="concept-box"><h4>The Fundamental Theorem of Calculus</h4><p><strong>Part 1:</strong> If F′(x) = f(x), then ∫[a to b] f(x) dx = F(b) − F(a)<br><strong>Part 2:</strong> d/dx[∫[a to x] f(t) dt] = f(x)</p></div>
<div class="formula-box"><span class="label">Antiderivative Rules</span>∫ xⁿ dx = xⁿ⁺¹/(n+1) + C   (n ≠ −1)
∫ eˣ dx = eˣ + C
∫ 1/x dx = ln|x| + C
∫ sin x dx = −cos x + C
∫ cos x dx = sin x + C</div>
<div class="example-box"><div class="example-box-header">📝 Definite Integral</div><div class="example-box-body"><p>Evaluate ∫[1 to 3] (x² + 2) dx</p></div><div class="example-solution"><strong>Solution</strong><p>Antiderivative: F(x) = x³/3 + 2x<br>F(3) = 27/3 + 6 = 9+6 = 15<br>F(1) = 1/3 + 2 = 7/3<br>Answer: 15 − 7/3 = <strong>38/3 ≈ 12.67</strong></p></div></div>`,
          quiz: [
            { q: "Find ∫ 4x³ dx", options: ["12x²+C", "x⁴+C", "4x⁴+C", "x⁴/4+C"], answer: 1, explanation: "∫4x³dx = 4·x⁴/4 + C = x⁴ + C." },
            { q: "Evaluate ∫[0 to 2] 3x dx", options: ["6", "3", "9", "12"], answer: 0, explanation: "F(x)=3x²/2. F(2)−F(0) = 6−0 = 6." }
          ]
        }
      ]
    },

    "statistics": {
      id: "statistics", title: "Statistics & Probability",
      icon: "📊", color: "#059669", level: "9th Grade–College",
      description: "Descriptive statistics, probability theory, distributions, and statistical inference.",
      tags: ["High School", "College"],
      modules: [
        {
          id: "descriptive", title: "Descriptive Statistics",
          content: `<h3>Measures of Center</h3>
<p>The center of a data set can be described by the <strong>mean</strong>, <strong>median</strong>, or <strong>mode</strong>.</p>
<div class="formula-box"><span class="label">Center Measures</span>Mean:   x̄ = (x₁+x₂+…+xₙ)/n  = Σxᵢ/n
Median: Middle value when data is ordered
Mode:   Most frequently occurring value</div>
<h3>Measures of Spread</h3>
<div class="formula-box"><span class="label">Spread Measures</span>Range:             max − min
Variance (pop.):   σ² = Σ(xᵢ−μ)²/n
Std Dev (pop.):    σ = √[Σ(xᵢ−μ)²/n]
IQR:               Q3 − Q1 (middle 50% range)</div>
<div class="example-box"><div class="example-box-header">📝 Example: Full Summary</div><div class="example-box-body"><p>Data: 4, 7, 7, 9, 11, 13, 13, 13, 17<br>Find mean, median, mode, and IQR.</p></div><div class="example-solution"><strong>Solution</strong><p>Mean = (4+7+7+9+11+13+13+13+17)/9 = 94/9 ≈ 10.44<br>Median = 11 (middle of 9 values)<br>Mode = 13 (appears 3 times)<br>Q1 = 7, Q3 = 13, IQR = 6</p></div></div>`,
          quiz: [
            { q: "What is the mean of 2, 4, 6, 8, 10?", options: ["5", "6", "8", "4"], answer: 1, explanation: "(2+4+6+8+10)/5 = 30/5 = 6." },
            { q: "Which measure of center is least affected by outliers?", options: ["Mean", "Mode", "Median", "Range"], answer: 2, explanation: "The median is resistant to extreme values (outliers) because it only depends on the middle value." }
          ]
        },
        {
          id: "probability", title: "Probability Theory",
          content: `<h3>Probability Fundamentals</h3>
<p>Probability measures likelihood, ranging from 0 (impossible) to 1 (certain). P(A) = favorable outcomes / total outcomes (for equally likely outcomes).</p>
<div class="formula-box"><span class="label">Key Rules</span>Complement:       P(Aᶜ) = 1 − P(A)
Addition Rule:    P(A∪B) = P(A)+P(B)−P(A∩B)
Multiplication:   P(A∩B) = P(A)·P(B|A)
Independence:     P(A∩B) = P(A)·P(B)   if A,B independent
Conditional:      P(A|B) = P(A∩B)/P(B)</div>
<div class="example-box"><div class="example-box-header">📝 Bayes' Theorem</div><div class="example-box-body"><p>A disease affects 1% of the population. A test is 95% accurate (true positive rate) and 90% specific (true negative rate). If a random person tests positive, what is the probability they have the disease?</p></div><div class="example-solution"><strong>Solution</strong><p>P(D)=0.01, P(+|D)=0.95, P(+|Dᶜ)=0.10<br>P(+) = 0.95×0.01 + 0.10×0.99 = 0.0095+0.099 = 0.1085<br>P(D|+) = 0.0095/0.1085 ≈ <strong>8.76%</strong><br>This illustrates the base rate fallacy: even with a good test, rare diseases have many false positives.</p></div></div>`,
          quiz: [
            { q: "A bag has 3 red and 5 blue marbles. P(red) = ?", options: ["3/8", "3/5", "5/8", "1/3"], answer: 0, explanation: "P(red) = 3/(3+5) = 3/8." },
            { q: "If P(A) = 0.4 and P(B) = 0.3 and they are independent, P(A∩B) = ?", options: ["0.7", "0.12", "0.1", "0.5"], answer: 1, explanation: "Independent: P(A∩B) = P(A)·P(B) = 0.4×0.3 = 0.12." }
          ]
        }
      ]
    },

    "linear-algebra": {
      id: "linear-algebra", title: "Linear Algebra",
      icon: "[M]", color: "#0f172a", level: "College",
      description: "Vectors, matrices, linear transformations, eigenvalues, and vector spaces.",
      tags: ["College", "Advanced"],
      modules: [
        {
          id: "vectors-matrices", title: "Vectors & Matrix Operations",
          content: `<h3>Vectors</h3>
<p>A <strong>vector</strong> in ℝⁿ is an ordered list of n real numbers. Geometrically, it represents a direction and magnitude in n-dimensional space.</p>
<div class="formula-box"><span class="label">Vector Operations</span>Addition:      u + v = (u₁+v₁, u₂+v₂, …)
Scalar mult:   cu = (cu₁, cu₂, …)
Dot product:   u·v = Σuᵢvᵢ = |u||v|cos θ
Cross product: u×v = (u₂v₃−u₃v₂, u₃v₁−u₁v₃, u₁v₂−u₂v₁)</div>
<h3>Matrices</h3>
<p>A <strong>matrix</strong> is a rectangular array of numbers. An m×n matrix has m rows and n columns. Matrix multiplication AB requires the inner dimensions to match: A is m×n, B is n×p → AB is m×p.</p>
<div class="example-box"><div class="example-box-header">📝 Matrix Multiplication</div><div class="example-box-body"><p>Multiply A = [[1,2],[3,4]] by B = [[5,6],[7,8]]</p></div><div class="example-solution"><strong>Solution</strong><p>AB = [[1·5+2·7, 1·6+2·8],[3·5+4·7, 3·6+4·8]]<br>= [[5+14, 6+16],[15+28, 18+32]] = <strong>[[19,22],[43,50]]</strong></p></div></div>
<h3>Determinants & Inverses</h3>
<div class="formula-box"><span class="label">2×2 Determinant & Inverse</span>det([[a,b],[c,d]]) = ad − bc

A⁻¹ = (1/det(A)) × [[d,−b],[−c,a]]
(exists only if det(A) ≠ 0)</div>`,
          quiz: [
            { q: "If u=(1,2,3) and v=(4,5,6), what is u·v?", options: ["32", "12", "15", "21"], answer: 0, explanation: "1·4+2·5+3·6 = 4+10+18 = 32." },
            { q: "What is det([[3,1],[2,4]])?", options: ["14", "10", "12", "5"], answer: 1, explanation: "3·4 − 1·2 = 12 − 2 = 10." }
          ]
        }
      ]
    },

    "differential-equations": {
      id: "differential-equations", title: "Differential Equations",
      icon: "dy/dx", color: "#b45309", level: "College",
      description: "ODEs, PDEs, modeling real-world phenomena with rates of change.",
      tags: ["College", "Advanced"],
      modules: [
        {
          id: "first-order-ode", title: "First-Order ODEs",
          content: `<h3>What Is a Differential Equation?</h3>
<p>A <strong>differential equation</strong> relates a function to its derivatives. A <strong>first-order ODE</strong> involves only the first derivative. The <strong>order</strong> is the highest derivative present.</p>
<div class="concept-box"><h4>Types of First-Order ODEs</h4><p><strong>Separable:</strong> dy/dx = f(x)g(y) — separate and integrate<br><strong>Linear:</strong> dy/dx + P(x)y = Q(x) — use integrating factor<br><strong>Exact:</strong> M dx + N dy = 0 where ∂M/∂y = ∂N/∂x</p></div>
<div class="example-box"><div class="example-box-header">📝 Separable ODE</div><div class="example-box-body"><p>Solve dy/dx = xy with y(0) = 2</p></div><div class="example-solution"><strong>Solution</strong><p>Separate: dy/y = x dx<br>Integrate: ln|y| = x²/2 + C<br>y = Ae^(x²/2)<br>IVP: 2 = Ae⁰ → A = 2<br>∴ y = <strong>2e^(x²/2)</strong></p></div></div>
<h3>Population & Growth Models</h3>
<p>The equation dP/dt = kP models exponential growth (k>0) or decay (k<0). Its solution P(t) = P₀eᵏᵗ describes radioactive decay, compound interest, and bacterial growth.</p>
<div class="formula-box"><span class="label">Half-life Formula</span>t₁/₂ = ln(2)/k   (for exponential decay, k < 0)</div>`,
          quiz: [
            { q: "The solution to dy/dx = 3y is:", options: ["y=3x+C", "y=Ce^(3x)", "y=3e^x", "y=x³+C"], answer: 1, explanation: "Separate: dy/y=3dx → ln|y|=3x+C → y=Ce^(3x)." },
            { q: "A substance decays by half every 10 years. What is k?", options: ["-ln2/10", "ln2/10", "-10/ln2", "10ln2"], answer: 0, explanation: "t₁/₂=ln2/|k| → 10=ln2/|k| → |k|=ln2/10; decay so k=−ln2/10." }
          ]
        }
      ]
    },

    "discrete-math": {
      id: "discrete-math", title: "Discrete Mathematics",
      icon: "⊕", color: "#64748b", level: "College",
      description: "Logic, proofs, sets, combinatorics, graph theory, and algorithms.",
      tags: ["College", "Computer Science"],
      modules: [
        {
          id: "logic-proofs", title: "Logic & Proof Techniques",
          content: `<h3>Propositional Logic</h3>
<p>A <strong>proposition</strong> is a statement that is either true or false. We combine propositions using <strong>logical connectives</strong>.</p>
<div class="formula-box"><span class="label">Connectives</span>NOT:         ¬p
AND:         p ∧ q  (true only if both true)
OR:          p ∨ q  (true if at least one true)
IMPLIES:     p → q  (false only if p=T, q=F)
BICONDITIONAL: p ↔ q (true if both same)</div>
<div class="concept-box"><h4>Common Proof Techniques</h4><p><strong>Direct proof:</strong> Assume p, derive q logically<br><strong>Contrapositive:</strong> Prove ¬q → ¬p instead of p → q<br><strong>Contradiction:</strong> Assume ¬q, show this leads to a contradiction<br><strong>Induction:</strong> Prove base case + inductive step</p></div>
<div class="example-box"><div class="example-box-header">📝 Proof by Induction</div><div class="example-box-body"><p>Prove: 1+2+3+…+n = n(n+1)/2 for all n ≥ 1</p></div><div class="example-solution"><strong>Solution</strong><p><strong>Base case:</strong> n=1: LHS=1, RHS=1(2)/2=1 ✓<br><strong>Inductive step:</strong> Assume it holds for n=k: 1+…+k = k(k+1)/2<br>For n=k+1: 1+…+k+(k+1) = k(k+1)/2 + (k+1)<br>= (k+1)[k/2 + 1] = (k+1)(k+2)/2 ✓</p></div></div>`,
          quiz: [
            { q: "When is p → q FALSE?", options: ["p=F, q=T", "p=T, q=T", "p=T, q=F", "p=F, q=F"], answer: 2, explanation: "An implication is false only when the hypothesis is true but the conclusion is false." },
            { q: "Which technique assumes the negation of what you want to prove?", options: ["Direct proof", "Contrapositive", "Proof by contradiction", "Induction"], answer: 2, explanation: "Proof by contradiction assumes ¬q (the opposite conclusion) and derives a contradiction." }
          ]
        },
        {
          id: "combinatorics", title: "Combinatorics",
          content: `<h3>The Counting Principles</h3>
<p><strong>Multiplication Principle:</strong> If task A can be done in m ways and task B in n ways, they can be done together in m×n ways. <strong>Addition Principle:</strong> If A and B are mutually exclusive, they can be done in m+n ways.</p>
<div class="formula-box"><span class="label">Permutations & Combinations</span>Permutations (order matters):  P(n,r) = n!/(n−r)!
Combinations (order irrelevant): C(n,r) = n!/(r!(n−r)!)
Binomial Theorem: (a+b)ⁿ = Σ C(n,k) aⁿ⁻ᵏ bᵏ</div>
<div class="example-box"><div class="example-box-header">📝 Combination Example</div><div class="example-box-body"><p>How many ways can a committee of 4 be chosen from 10 people?</p></div><div class="example-solution"><strong>Solution</strong><p>C(10,4) = 10!/(4!·6!) = (10×9×8×7)/(4×3×2×1) = 5040/24 = <strong>210 ways</strong></p></div></div>`,
          quiz: [
            { q: "How many ways can 5 books be arranged on a shelf?", options: ["25", "120", "60", "5"], answer: 1, explanation: "P(5,5) = 5! = 120." },
            { q: "C(8,3) = ?", options: ["56", "24", "168", "336"], answer: 0, explanation: "8!/(3!·5!) = (8×7×6)/(3×2×1) = 336/6 = 56." }
          ]
        }
      ]
    }
  },

  /* ── SCIENCE SUBJECTS ───────────────────────────────────── */
  science: {
    "physics-mechanics": {
      id: "physics-mechanics", title: "Classical Mechanics",
      icon: "⚙️", color: "#1d4ed8", level: "9th Grade–College",
      description: "Newton's laws, kinematics, forces, energy, momentum, and rotation.",
      tags: ["High School", "College"],
      modules: [
        {
          id: "kinematics", title: "Kinematics: Motion in 1D and 2D",
          content: `<h3>Describing Motion</h3>
<p><strong>Kinematics</strong> describes motion without worrying about its cause. Key quantities: <strong>position</strong> (x), <strong>displacement</strong> (Δx), <strong>velocity</strong> (v = Δx/Δt), <strong>acceleration</strong> (a = Δv/Δt).</p>
<div class="concept-box"><h4>Scalar vs. Vector</h4><p>Speed and distance are scalars (magnitude only). Velocity and displacement are vectors (magnitude + direction). Always specify direction for vectors using +/− signs or angles.</p></div>
<div class="formula-box"><span class="label">Kinematic Equations (constant acceleration)</span>v = v₀ + at
x = x₀ + v₀t + ½at²
v² = v₀² + 2a(x−x₀)
x = x₀ + ½(v₀+v)t</div>
<div class="example-box"><div class="example-box-header">📝 Free Fall Example</div><div class="example-box-body"><p>A ball is dropped from 80 m. How long until it hits the ground? (g = 10 m/s²)</p></div><div class="example-solution"><strong>Solution</strong><p>x = x₀ + v₀t + ½at² → 80 = 0 + 0 + ½(10)t²<br>80 = 5t² → t² = 16 → t = <strong>4 seconds</strong></p></div></div>
<h3>Projectile Motion</h3>
<p>Projectiles move with <strong>constant horizontal velocity</strong> and <strong>constant downward acceleration</strong> (g ≈ 9.8 m/s²) simultaneously. Treat x and y motions independently.</p>
<div class="example-box"><div class="example-box-header">📝 Projectile Range</div><div class="example-box-body"><p>A ball is launched at 20 m/s at 30° above horizontal. Find its range.</p></div><div class="example-solution"><strong>Solution</strong><p>v₀ₓ = 20cos30° = 17.3 m/s; v₀ᵧ = 20sin30° = 10 m/s<br>Time of flight: t = 2v₀ᵧ/g = 20/9.8 = 2.04 s<br>Range = v₀ₓ × t = 17.3 × 2.04 ≈ <strong>35.3 m</strong></p></div></div>`,
          quiz: [
            { q: "An object accelerates from 0 to 30 m/s in 5 s. What is its acceleration?", options: ["6 m/s²", "150 m/s²", "5 m/s²", "0.17 m/s²"], answer: 0, explanation: "a = Δv/t = 30/5 = 6 m/s²." },
            { q: "A car travels 100 m in 10 s at constant velocity. What is its speed?", options: ["1000 m/s", "10 m/s", "90 m/s", "0.1 m/s"], answer: 1, explanation: "v = d/t = 100/10 = 10 m/s." },
            { q: "Which kinematic equation uses v₀, v, a, and x but NOT t?", options: ["v=v₀+at", "x=v₀t+½at²", "v²=v₀²+2ax", "x=½(v₀+v)t"], answer: 2, explanation: "v² = v₀² + 2ax does not contain time." }
          ]
        },
        {
          id: "newtons-laws", title: "Newton's Three Laws",
          content: `<h3>Newton's Laws of Motion</h3>
<div class="concept-box"><h4>The Three Laws</h4><p><strong>1st Law (Inertia):</strong> An object at rest stays at rest; an object in motion stays in motion unless acted on by a net external force.<br><br><strong>2nd Law:</strong> F_net = ma. Net force equals mass times acceleration.<br><br><strong>3rd Law:</strong> For every action, there is an equal and opposite reaction.</p></div>
<h3>Free Body Diagrams</h3>
<p>Draw all forces on an object as arrows from its center. Common forces: weight (W=mg downward), normal force (perpendicular to surface), friction, tension, applied force.</p>
<div class="formula-box"><span class="label">Common Forces</span>Weight:         W = mg  (downward)
Normal:         N  (perpendicular to surface)
Friction (kinetic): fₖ = μₖN
Friction (static max): fₛ = μₛN</div>
<div class="example-box"><div class="example-box-header">📝 Atwood Machine</div><div class="example-box-body"><p>Two masses m₁ = 3 kg and m₂ = 5 kg are connected by a string over a frictionless pulley. Find acceleration and tension.</p></div><div class="example-solution"><strong>Solution</strong><p>Net force = (m₂−m₁)g = (5−3)(9.8) = 19.6 N<br>Total mass = 8 kg<br>a = 19.6/8 = <strong>2.45 m/s²</strong><br>T = m₁(g+a) = 3(9.8+2.45) = <strong>36.75 N</strong></p></div></div>`,
          quiz: [
            { q: "A 5 kg object experiences a net force of 20 N. What is its acceleration?", options: ["4 m/s²", "100 m/s²", "15 m/s²", "25 m/s²"], answer: 0, explanation: "a = F/m = 20/5 = 4 m/s²." },
            { q: "Which law explains why you feel pushed back in your seat when a car accelerates?", options: ["1st Law", "2nd Law", "3rd Law", "Law of Gravitation"], answer: 0, explanation: "Your body's inertia (1st law) resists the acceleration — you tend to stay at rest while the car moves forward." }
          ]
        }
      ]
    },

    "chemistry": {
      id: "chemistry", title: "Chemistry",
      icon: "⚗️", color: "#7c2d12", level: "9th Grade–College",
      description: "Atomic structure, periodic trends, bonding, reactions, stoichiometry, and thermodynamics.",
      tags: ["High School", "College"],
      modules: [
        {
          id: "atomic-structure", title: "Atomic Structure & Electron Configuration",
          content: `<h3>Subatomic Particles</h3>
<p>Every atom consists of a dense nucleus (protons + neutrons) surrounded by electrons in shells.</p>
<div class="formula-box"><span class="label">Key Quantities</span>Atomic number (Z):  number of protons
Mass number (A):    protons + neutrons
Neutrons:           A − Z
Electrons (neutral): = Z</div>
<div class="concept-box"><h4>Isotopes</h4><p>Atoms of the same element with different numbers of neutrons are <strong>isotopes</strong>. Carbon-12 (⁶¹²C) and Carbon-14 (⁶¹⁴C) are both carbon atoms but with 6 and 8 neutrons respectively.</p></div>
<h3>Electron Configuration</h3>
<p>Electrons fill orbitals following three rules: <strong>Aufbau principle</strong> (lowest energy first), <strong>Pauli exclusion</strong> (max 2 electrons per orbital, opposite spins), <strong>Hund's rule</strong> (one electron per orbital before pairing).</p>
<div class="formula-box"><span class="label">Filling Order</span>1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → …</div>
<div class="example-box"><div class="example-box-header">📝 Electron Configuration: Iron (Z=26)</div><div class="example-box-body"><p>Write the full electron configuration of Fe.</p></div><div class="example-solution"><strong>Solution</strong><p>1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶<br>Electrons: 2+2+6+2+6+2+6 = 26 ✓<br>Shorthand: [Ar] 4s² 3d⁶</p></div></div>`,
          quiz: [
            { q: "An atom has 17 protons and 18 neutrons. What is its mass number?", options: ["17", "18", "35", "1"], answer: 2, explanation: "Mass number = protons + neutrons = 17 + 18 = 35 (Chlorine-35)." },
            { q: "How many electrons can a p-subshell hold?", options: ["2", "6", "10", "14"], answer: 1, explanation: "A p-subshell has 3 orbitals × 2 electrons each = 6 electrons." },
            { q: "Which rule states electrons occupy separate orbitals before pairing?", options: ["Aufbau", "Pauli Exclusion", "Hund's Rule", "Heisenberg"], answer: 2, explanation: "Hund's Rule: maximize unpaired electrons in a subshell." }
          ]
        },
        {
          id: "stoichiometry", title: "Stoichiometry",
          content: `<h3>The Mole Concept</h3>
<p>A <strong>mole</strong> is 6.022 × 10²³ particles (Avogadro's number). It links microscopic atomic masses to macroscopic measurable quantities.</p>
<div class="formula-box"><span class="label">Molar Conversions</span>Moles = mass (g) / molar mass (g/mol)
Particles = moles × 6.022×10²³
Volume (gas at STP) = moles × 22.4 L</div>
<h3>Balancing Chemical Equations</h3>
<p>A balanced equation has equal numbers of each type of atom on both sides. Use coefficients (not subscripts) to balance.</p>
<div class="example-box"><div class="example-box-header">📝 Stoichiometry Problem</div><div class="example-box-body"><p>How many grams of H₂O form when 4.0 g H₂ reacts completely with O₂? (balanced: 2H₂ + O₂ → 2H₂O)</p></div><div class="example-solution"><strong>Solution</strong><p>Moles H₂ = 4.0/2.0 = 2.0 mol<br>Mole ratio H₂:H₂O = 2:2 = 1:1<br>Moles H₂O = 2.0 mol<br>Mass H₂O = 2.0 × 18.0 = <strong>36.0 g</strong></p></div></div>`,
          quiz: [
            { q: "How many moles are in 44 g of CO₂ (M=44 g/mol)?", options: ["1 mol", "44 mol", "0.5 mol", "88 mol"], answer: 0, explanation: "moles = 44/44 = 1 mol." },
            { q: "How many molecules are in 2 moles of water?", options: ["1.204×10²⁴", "6.022×10²³", "3.011×10²³", "2"], answer: 0, explanation: "2 × 6.022×10²³ = 1.204×10²⁴ molecules." }
          ]
        },
        {
          id: "organic-chemistry", title: "Organic Chemistry Basics",
          content: `<h3>Carbon: The Backbone of Life</h3>
<p>Organic chemistry studies carbon-based compounds. Carbon is unique: it forms 4 bonds, chains of any length, and rings — enabling millions of compounds.</p>
<div class="concept-box"><h4>Functional Groups</h4><p>
<strong>Alkane (−CH₃):</strong> single bonds only, most stable<br>
<strong>Alkene (C=C):</strong> double bond, reactive<br>
<strong>Alkyne (C≡C):</strong> triple bond<br>
<strong>Alcohol (−OH):</strong> hydroxyl group<br>
<strong>Carboxylic acid (−COOH):</strong> acidic<br>
<strong>Amine (−NH₂):</strong> basic, found in amino acids<br>
<strong>Ester (−COO−):</strong> fragrant compounds, fats<br>
<strong>Ketone (C=O, interior):</strong> acetone<br>
<strong>Aldehyde (−CHO):</strong> formaldehyde
</p></div>
<h3>Isomers</h3>
<p><strong>Structural isomers</strong> have the same molecular formula but different connectivity. <strong>Stereoisomers</strong> have the same connectivity but different spatial arrangement. <strong>Enantiomers</strong> are mirror images — crucial in pharmaceuticals where one mirror image may be a drug and the other harmful.</p>`,
          quiz: [
            { q: "Which functional group is found in alcohols?", options: ["-COOH", "-NH₂", "-OH", "-CHO"], answer: 2, explanation: "Alcohols are characterized by the hydroxyl group (−OH)." },
            { q: "Butane (C₄H₁₀) and isobutane are:", options: ["Enantiomers", "Structural isomers", "Identical", "Stereoisomers"], answer: 1, explanation: "Same molecular formula (C₄H₁₀) but different carbon skeleton = structural isomers." }
          ]
        }
      ]
    },

    "biology": {
      id: "biology", title: "Biology",
      icon: "🧬", color: "#15803d", level: "9th Grade–College",
      description: "Cell biology, genetics, evolution, ecology, and the science of living systems.",
      tags: ["High School", "College"],
      modules: [
        {
          id: "cell-biology", title: "Cell Structure & Function",
          content: `<h3>The Cell: Unit of Life</h3>
<p>All living things are made of cells — the smallest unit capable of performing all functions of life. There are two fundamental types: <strong>prokaryotes</strong> (no nucleus; bacteria) and <strong>eukaryotes</strong> (membrane-bound nucleus; plants, animals, fungi).</p>
<div class="concept-box"><h4>Key Organelles (Eukaryotes)</h4><p>
<strong>Nucleus:</strong> houses DNA, controls cell activities<br>
<strong>Ribosome:</strong> site of protein synthesis<br>
<strong>ER (rough):</strong> protein processing and transport<br>
<strong>ER (smooth):</strong> lipid synthesis, detoxification<br>
<strong>Golgi apparatus:</strong> sorting and shipping proteins<br>
<strong>Mitochondria:</strong> ATP production (cellular respiration)<br>
<strong>Chloroplast:</strong> photosynthesis (plants only)<br>
<strong>Lysosome:</strong> digestion of waste (animal cells)<br>
<strong>Vacuole:</strong> storage; large central vacuole in plants<br>
<strong>Cell membrane:</strong> selective permeability (phospholipid bilayer)
</p></div>
<h3>Cell Membrane Transport</h3>
<p><strong>Passive transport</strong> (no energy): diffusion, osmosis, facilitated diffusion. <strong>Active transport</strong> (requires ATP): sodium-potassium pump, endocytosis, exocytosis.</p>
<div class="example-box"><div class="example-box-header">📝 Osmosis Scenario</div><div class="example-box-body"><p>A red blood cell is placed in a hypertonic solution. What happens?</p></div><div class="example-solution"><strong>Solution</strong><p>Hypertonic = more solutes outside. Water moves OUT of the cell (osmosis follows water down its concentration gradient). The cell <strong>shrinks/crenates</strong>. In hypotonic solution (more solutes inside), water moves IN and the cell swells/may lyse.</p></div></div>`,
          quiz: [
            { q: "Which organelle is called the 'powerhouse of the cell'?", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"], answer: 2, explanation: "Mitochondria produce ATP via cellular respiration." },
            { q: "Prokaryotes differ from eukaryotes in that they:", options: ["Have ribosomes", "Have no membrane-bound nucleus", "Have DNA", "Reproduce"], answer: 1, explanation: "Prokaryotes lack a membrane-bound nucleus; their DNA is in the cytoplasm." },
            { q: "Osmosis is the movement of:", options: ["Solutes across a membrane", "Water across a semipermeable membrane", "Ions via pumps", "Proteins via exocytosis"], answer: 1, explanation: "Osmosis = diffusion of water through a semipermeable membrane." }
          ]
        },
        {
          id: "genetics", title: "Genetics & DNA",
          content: `<h3>DNA Structure</h3>
<p>DNA (deoxyribonucleic acid) is a double helix composed of nucleotides. Each nucleotide has a deoxyribose sugar, a phosphate group, and a nitrogenous base. <strong>Base pairing:</strong> A pairs with T (2 bonds), G pairs with C (3 bonds).</p>
<div class="formula-box"><span class="label">Central Dogma</span>DNA → (Transcription) → mRNA → (Translation) → Protein</div>
<h3>Mendelian Genetics</h3>
<p>Gregor Mendel's laws: <strong>Segregation</strong> (each gamete gets one allele for each gene) and <strong>Independent Assortment</strong> (genes for different traits are inherited independently).</p>
<div class="concept-box"><h4>Genotype vs Phenotype</h4><p><strong>Genotype:</strong> the actual alleles (BB, Bb, bb)<br><strong>Phenotype:</strong> the observable trait (brown eyes, blue eyes)<br><strong>Dominant allele (B):</strong> expressed when at least one copy is present<br><strong>Recessive allele (b):</strong> expressed only when homozygous (bb)</p></div>
<div class="example-box"><div class="example-box-header">📝 Punnett Square</div><div class="example-box-body"><p>Two heterozygous tall plants (Tt × Tt) are crossed. What fraction of offspring are short (tt)?</p></div><div class="example-solution"><strong>Solution</strong><p>Punnett square gives: TT, Tt, Tt, tt → 1/4 are tt<br>∴ 25% of offspring are <strong>short</strong><br>Phenotypic ratio: 3 tall : 1 short</p></div></div>`,
          quiz: [
            { q: "Which bases are complementary in DNA?", options: ["A-G and T-C", "A-T and G-C", "A-C and G-T", "A-G and C-T"], answer: 1, explanation: "Adenine pairs with Thymine; Guanine pairs with Cytosine." },
            { q: "A cross Aa × Aa gives what probability of 'aa' offspring?", options: ["50%", "25%", "75%", "0%"], answer: 1, explanation: "Punnett square: AA, Aa, Aa, aa → 1/4 = 25% aa." }
          ]
        },
        {
          id: "evolution", title: "Evolution & Natural Selection",
          content: `<h3>Darwin's Theory of Evolution</h3>
<p>Evolution is the change in heritable traits of populations over generations. Darwin's mechanism: <strong>Natural Selection</strong> — individuals with advantageous traits survive and reproduce more, passing those traits on.</p>
<div class="concept-box"><h4>Four Requirements for Natural Selection</h4><p>1. <strong>Variation:</strong> individuals differ in traits<br>2. <strong>Heritability:</strong> traits are passed to offspring<br>3. <strong>Differential survival:</strong> some variants survive better<br>4. <strong>Differential reproduction:</strong> survivors leave more offspring</p></div>
<h3>Evidence for Evolution</h3>
<p><strong>Fossil record:</strong> shows progression of life forms over time. <strong>Comparative anatomy:</strong> homologous structures (same origin, different function) and vestigial structures. <strong>Biogeography:</strong> species distributions make sense given continental drift. <strong>Molecular biology:</strong> DNA sequence similarities reflect evolutionary relationships.</p>
<h3>Speciation</h3>
<p><strong>Allopatric speciation:</strong> geographic isolation leads to separate evolution. <strong>Sympatric speciation:</strong> new species arise within the same geographic area (e.g., via polyploidy in plants).</p>`,
          quiz: [
            { q: "Which is NOT required for natural selection?", options: ["Variation", "Heritability", "Consciousness", "Differential reproduction"], answer: 2, explanation: "Natural selection is a blind process — it requires variation, heritability, and differential reproduction, not consciousness." },
            { q: "Homologous structures suggest:", options: ["Convergent evolution", "Common ancestry", "No evolutionary relationship", "Identical function"], answer: 1, explanation: "Homologous structures (same origin, different function) provide evidence of common ancestry." }
          ]
        }
      ]
    },

    "physics-em": {
      id: "physics-em", title: "Electricity & Magnetism",
      icon: "⚡", color: "#d97706", level: "11th Grade–College",
      description: "Electric fields, circuits, Gauss's law, magnetic fields, and Maxwell's equations.",
      tags: ["High School", "College"],
      modules: [
        {
          id: "electric-fields", title: "Electric Fields & Coulomb's Law",
          content: `<h3>Electric Charge</h3>
<p>Charge is quantized in units of the elementary charge e = 1.6 × 10⁻¹⁹ C. Like charges repel; opposite charges attract. Charge is conserved.</p>
<div class="formula-box"><span class="label">Coulomb's Law</span>F = k|q₁||q₂|/r²
k = 8.99×10⁹ N·m²/C²  (Coulomb's constant)</div>
<h3>Electric Field</h3>
<p>The <strong>electric field</strong> E at a point is the force per unit positive test charge placed there. Field lines flow from + to −.</p>
<div class="formula-box"><span class="label">Electric Field</span>E = F/q = kQ/r²   (point charge Q at distance r)
Direction: away from +Q, toward −Q</div>
<div class="example-box"><div class="example-box-header">📝 Coulomb's Law Example</div><div class="example-box-body"><p>Two charges q₁ = +2μC and q₂ = −3μC are 0.5 m apart. Find the force between them.</p></div><div class="example-solution"><strong>Solution</strong><p>F = (8.99×10⁹)(2×10⁻⁶)(3×10⁻⁶)/(0.5)²<br>= (8.99×10⁹)(6×10⁻¹²)/0.25<br>= 53.94×10⁻³/0.25 = <strong>0.216 N (attractive)</strong></p></div></div>
<h3>Circuits: Ohm's Law & Kirchhoff's Rules</h3>
<div class="formula-box"><span class="label">Circuit Laws</span>Ohm's Law:     V = IR
Power:          P = IV = I²R = V²/R
Series R:       Rₜ = R₁+R₂+R₃
Parallel R:     1/Rₜ = 1/R₁+1/R₂+1/R₃
KVL: Sum of voltages around a loop = 0
KCL: Sum of currents at a node = 0</div>`,
          quiz: [
            { q: "Two charges each 1C are 1m apart. What is the force? (k=9×10⁹)", options: ["9×10⁹ N", "9 N", "1 N", "9×10⁻⁹ N"], answer: 0, explanation: "F = k(1)(1)/1² = 9×10⁹ N. This is enormous — real charges are tiny fractions of a Coulomb." },
            { q: "Three 6Ω resistors in parallel give a total resistance of:", options: ["18Ω", "6Ω", "3Ω", "2Ω"], answer: 3, explanation: "1/R = 1/6+1/6+1/6 = 3/6 = 1/2, so R = 2Ω." }
          ]
        }
      ]
    },

    "physics-thermo": {
      id: "physics-thermo", title: "Thermodynamics",
      icon: "🌡️", color: "#b91c1c", level: "10th Grade–College",
      description: "Heat, temperature, entropy, and the laws governing energy transfer.",
      tags: ["High School", "College"],
      modules: [
        {
          id: "thermo-laws", title: "The Laws of Thermodynamics",
          content: `<h3>Temperature & Heat</h3>
<p><strong>Temperature</strong> measures average kinetic energy of particles. <strong>Heat</strong> (Q) is energy transferred due to a temperature difference. Heat flows from hot to cold.</p>
<div class="formula-box"><span class="label">Temperature Conversions</span>K = °C + 273.15
°F = (9/5)°C + 32
°C = (°F − 32) × 5/9</div>
<div class="concept-box"><h4>The Four Laws</h4><p><strong>Zeroth Law:</strong> If A=B in temperature and B=C, then A=C (basis of thermometers)<br><strong>First Law:</strong> ΔU = Q − W (energy conservation: internal energy = heat added minus work done)<br><strong>Second Law:</strong> Entropy of an isolated system never decreases; heat flows spontaneously hot→cold<br><strong>Third Law:</strong> Entropy approaches a constant minimum as temperature approaches absolute zero</p></div>
<div class="formula-box"><span class="label">Thermodynamic Quantities</span>Q = mcΔT        (sensible heat)
Q = mL           (latent heat, phase change)
W = PΔV          (work by gas)
ΔS = Q/T          (entropy change, reversible process)</div>
<div class="example-box"><div class="example-box-header">📝 Heat Transfer</div><div class="example-box-body"><p>How much heat is needed to raise 2 kg of water from 20°C to 80°C? (c_water = 4186 J/kg·K)</p></div><div class="example-solution"><strong>Solution</strong><p>Q = mcΔT = 2 × 4186 × (80−20) = 2 × 4186 × 60 = <strong>502,320 J ≈ 502 kJ</strong></p></div></div>`,
          quiz: [
            { q: "What does the First Law of Thermodynamics state?", options: ["Entropy increases", "Energy is conserved", "Heat flows uphill spontaneously", "Absolute zero is unreachable"], answer: 1, explanation: "First Law: ΔU = Q − W, expressing conservation of energy." },
            { q: "Convert 300 K to Celsius:", options: ["573°C", "27°C", "300°C", "−27°C"], answer: 1, explanation: "°C = K − 273.15 = 300 − 273 = 27°C." }
          ]
        }
      ]
    },

    "physics-quantum": {
      id: "physics-quantum", title: "Quantum Mechanics",
      icon: "ψ", color: "#6d28d9", level: "College",
      description: "Wave-particle duality, Schrödinger's equation, uncertainty, and quantum states.",
      tags: ["College", "Advanced"],
      modules: [
        {
          id: "quantum-basics", title: "Foundations of Quantum Theory",
          content: `<h3>The Quantum Revolution</h3>
<p>Classical physics failed to explain blackbody radiation, the photoelectric effect, and atomic spectra. Quantum mechanics emerged in the early 20th century to resolve these failures.</p>
<div class="concept-box"><h4>Wave-Particle Duality</h4><p>Light and matter exhibit both wave and particle properties. A photon has energy E = hf and momentum p = h/λ. An electron has de Broglie wavelength λ = h/p.</p></div>
<div class="formula-box"><span class="label">Key Quantum Relations</span>Photon energy:      E = hf = hc/λ
de Broglie:         λ = h/p = h/(mv)
Heisenberg Uncertainty: ΔxΔp ≥ ℏ/2
Schrödinger (time-indep): Ĥψ = Eψ
h = 6.626×10⁻³⁴ J·s (Planck's constant)</div>
<h3>The Uncertainty Principle</h3>
<p>Heisenberg's Uncertainty Principle: ΔxΔp ≥ ℏ/2. You cannot simultaneously know both position and momentum with arbitrary precision. This is NOT a measurement problem — it is a fundamental feature of quantum reality.</p>
<div class="example-box"><div class="example-box-header">📝 Photoelectric Effect</div><div class="example-box-body"><p>Light of frequency 8×10¹⁴ Hz strikes a metal with work function 2.5 eV. Find the max kinetic energy of emitted electrons. (h = 4.14×10⁻¹⁵ eV·s)</p></div><div class="example-solution"><strong>Solution</strong><p>Photon energy = hf = 4.14×10⁻¹⁵ × 8×10¹⁴ = 3.31 eV<br>KE_max = E_photon − φ = 3.31 − 2.5 = <strong>0.81 eV</strong></p></div></div>`,
          quiz: [
            { q: "The de Broglie wavelength of a particle increases when:", options: ["Its momentum increases", "Its momentum decreases", "Its charge increases", "Its temperature increases"], answer: 1, explanation: "λ = h/p; as momentum decreases, wavelength increases." },
            { q: "What does the Heisenberg Uncertainty Principle say?", options: ["Measurements are always imprecise", "Position and momentum cannot both be precisely known simultaneously", "Energy is quantized", "Light is a wave"], answer: 1, explanation: "ΔxΔp ≥ ℏ/2 is a fundamental limit, not just a technological one." }
          ]
        }
      ]
    },

    "astronomy": {
      id: "astronomy", title: "Astronomy & Astrophysics",
      icon: "🔭", color: "#1e3a5f", level: "All Levels",
      description: "The solar system, stars, galaxies, black holes, and the expanding universe.",
      tags: ["High School", "College"],
      modules: [
        {
          id: "stellar-physics", title: "Stars: Formation, Life, Death",
          content: `<h3>Stellar Formation</h3>
<p>Stars form in nebulae (clouds of gas and dust). Gravity causes collapse → temperature rises → <strong>nuclear fusion</strong> ignites → a star is born. The protostar phase ends when hydrogen fusion begins in the core.</p>
<div class="concept-box"><h4>The HR Diagram</h4><p>The Hertzsprung-Russell (HR) diagram plots luminosity vs. temperature. Most stars lie on the <strong>main sequence</strong> (fusion of H → He). Red giants occupy the upper-right; white dwarfs the lower-left.</p></div>
<h3>Stellar Evolution</h3>
<div class="formula-box"><span class="label">Stellar Life Paths</span>Low mass star (like Sun):
  Main Sequence → Red Giant → White Dwarf → Black Dwarf

High mass star (>8 M☉):
  Main Sequence → Red Supergiant → Supernova →
    Neutron Star (or Black Hole if M > ~3 M☉)</div>
<h3>Black Holes</h3>
<p>When a massive star's core collapses beyond the neutron star stage, nothing — not even light — can escape. The <strong>Schwarzschild radius</strong> defines the event horizon: R_s = 2GM/c². Spaghettification occurs as tidal forces stretch infalling matter.</p>
<div class="formula-box"><span class="label">Schwarzschild Radius</span>R_s = 2GM/c²
For the Sun: R_s ≈ 3 km (but the Sun will never become a black hole)</div>`,
          quiz: [
            { q: "What happens to a star like our Sun at the end of its life?", options: ["Supernova then black hole", "Red giant then white dwarf", "Neutron star", "It expands forever"], answer: 1, explanation: "Low-mass stars become red giants then white dwarfs; they lack the mass for a supernova." },
            { q: "The HR diagram plots:", options: ["Mass vs. age", "Luminosity vs. temperature", "Radius vs. density", "Color vs. distance"], answer: 1, explanation: "HR diagram: luminosity (y-axis) vs. surface temperature (x-axis)." }
          ]
        }
      ]
    },

    "earth-science": {
      id: "earth-science", title: "Earth Science",
      icon: "🌍", color: "#065f46", level: "6th–10th Grade",
      description: "Geology, plate tectonics, weathering, the rock cycle, and Earth's systems.",
      tags: ["K-12", "Middle School"],
      modules: [
        {
          id: "plate-tectonics", title: "Plate Tectonics",
          content: `<h3>The Structure of the Earth</h3>
<p>Earth has four main layers: <strong>inner core</strong> (solid iron-nickel), <strong>outer core</strong> (liquid iron-nickel, generates magnetic field), <strong>mantle</strong> (hot, semi-solid rock, convection currents), <strong>crust</strong> (thin outer shell: oceanic and continental).</p>
<div class="concept-box"><h4>Plate Boundaries</h4><p><strong>Divergent:</strong> plates move apart → new crust forms (mid-ocean ridges)<br><strong>Convergent:</strong> plates collide → subduction, mountains, volcanoes, trenches<br><strong>Transform:</strong> plates slide past each other → earthquakes (e.g., San Andreas Fault)</p></div>
<h3>Evidence for Plate Tectonics</h3>
<p>Evidence includes: identical fossils on opposite sides of oceans, matching rock formations, seafloor spreading (confirmed by magnetic reversal stripes), and GPS measurements showing plates move 2–15 cm/year.</p>
<h3>Earthquakes</h3>
<p>Earthquakes occur when stress along a fault is suddenly released. The <strong>focus</strong> is the underground origin; the <strong>epicenter</strong> is directly above on the surface. The <strong>Richter scale</strong> (logarithmic) measures magnitude — each unit = 10× amplitude, ~31.6× energy.</p>`,
          quiz: [
            { q: "Which type of boundary creates new ocean floor?", options: ["Convergent", "Transform", "Divergent", "Subduction"], answer: 2, explanation: "At divergent boundaries, magma wells up and solidifies, creating new oceanic crust (seafloor spreading)." },
            { q: "Which layer of Earth produces the magnetic field?", options: ["Inner core", "Outer core", "Mantle", "Crust"], answer: 1, explanation: "The liquid outer core (iron-nickel) generates Earth's magnetic field via the dynamo effect." }
          ]
        }
      ]
    },

    "environmental-science": {
      id: "environmental-science", title: "Environmental Science",
      icon: "🌿", color: "#16a34a", level: "9th–12th Grade",
      description: "Ecosystems, climate change, biodiversity, pollution, and sustainability.",
      tags: ["K-12", "High School"],
      modules: [
        {
          id: "ecosystems", title: "Ecosystems & Energy Flow",
          content: `<h3>Ecosystem Structure</h3>
<p>An <strong>ecosystem</strong> includes all living organisms (biotic) and their physical environment (abiotic) in an area. Energy flows through ecosystems via food chains and webs.</p>
<div class="formula-box"><span class="label">Trophic Levels</span>Producers (autotrophs):    plants, algae — capture solar energy
Primary consumers:          herbivores — eat producers
Secondary consumers:        carnivores — eat primary consumers
Tertiary consumers:         eat secondary consumers
Decomposers:                fungi, bacteria — break down dead matter</div>
<div class="concept-box"><h4>The 10% Rule</h4><p>Only ~10% of energy is transferred from one trophic level to the next. The rest is lost as heat. This is why food chains rarely exceed 4–5 levels, and why eating lower on the food chain is more energy-efficient.</p></div>
<h3>Biogeochemical Cycles</h3>
<p><strong>Carbon cycle:</strong> CO₂ → photosynthesis → organic carbon → respiration/decomposition → CO₂. Human burning of fossil fuels is adding CO₂ faster than natural sinks can absorb it.<br><strong>Nitrogen cycle:</strong> N₂ → nitrogen fixation → nitrates → assimilation → denitrification → N₂.<br><strong>Water cycle:</strong> evaporation → condensation → precipitation → runoff/infiltration.</p>`,
          quiz: [
            { q: "If a plant stores 10,000 J of energy, how much reaches a secondary consumer?", options: ["1,000 J", "100 J", "10 J", "1 J"], answer: 1, explanation: "10% rule: plant→primary consumer = 1,000 J; →secondary consumer = 100 J." },
            { q: "Which process converts N₂ gas into usable ammonia?", options: ["Denitrification", "Nitrogen fixation", "Nitrification", "Assimilation"], answer: 1, explanation: "Nitrogen fixation (by certain bacteria) converts atmospheric N₂ into NH₃/NH₄⁺ usable by plants." }
          ]
        }
      ]
    },

    "neuroscience": {
      id: "neuroscience", title: "Neuroscience",
      icon: "🧠", color: "#7e22ce", level: "High School–College",
      description: "Neurons, the brain, neural signaling, perception, learning, and consciousness.",
      tags: ["High School", "College"],
      modules: [
        {
          id: "neurons", title: "Neurons & Action Potentials",
          content: `<h3>The Neuron</h3>
<p>Neurons are specialized cells that transmit electrical signals. Key parts: <strong>dendrites</strong> (receive signals), <strong>cell body/soma</strong> (integrates signals), <strong>axon</strong> (transmits signal away), <strong>myelin sheath</strong> (speeds transmission), <strong>axon terminals</strong> (release neurotransmitters).</p>
<div class="concept-box"><h4>The Action Potential</h4><p>1. <strong>Resting potential:</strong> −70 mV (more K⁺ inside, more Na⁺ outside)<br>2. <strong>Depolarization:</strong> Na⁺ rushes in → membrane potential rises to +40 mV<br>3. <strong>Repolarization:</strong> K⁺ flows out → potential drops<br>4. <strong>Hyperpolarization:</strong> brief dip below resting potential<br>5. <strong>Refractory period:</strong> neuron cannot fire immediately again</p></div>
<h3>Neurotransmitters</h3>
<p>Electrical signals are converted to chemical signals at the synapse. Key neurotransmitters: <strong>Dopamine</strong> (reward, motivation), <strong>Serotonin</strong> (mood, sleep), <strong>GABA</strong> (inhibitory), <strong>Glutamate</strong> (excitatory), <strong>Acetylcholine</strong> (muscle control, memory), <strong>Norepinephrine</strong> (alertness, fight-or-flight).</p>`,
          quiz: [
            { q: "What is the resting membrane potential of a typical neuron?", options: ["+70 mV", "0 mV", "−70 mV", "−40 mV"], answer: 2, explanation: "The resting potential is approximately −70 mV due to unequal ion distributions." },
            { q: "Which neurotransmitter is primarily inhibitory in the CNS?", options: ["Glutamate", "Dopamine", "GABA", "Acetylcholine"], answer: 2, explanation: "GABA (gamma-aminobutyric acid) is the main inhibitory neurotransmitter in the brain." }
          ]
        }
      ]
    }
  }
};

/* ── SEARCH INDEX ───────────────────────────────────────── */
XA.searchIndex = [];
['math','science'].forEach(domain => {
  Object.values(XA[domain]).forEach(subject => {
    XA.searchIndex.push({
      title: subject.title,
      description: subject.description,
      url: `topic.html?domain=${domain}&subject=${subject.id}`,
      type: subject.level,
      domain,
      tags: subject.tags || []
    });
    (subject.modules || []).forEach(mod => {
      XA.searchIndex.push({
        title: `${subject.title} — ${mod.title}`,
        description: `Module: ${mod.title}`,
        url: `topic.html?domain=${domain}&subject=${subject.id}&module=${mod.id}`,
        type: subject.level,
        domain,
        tags: subject.tags || []
      });
    });
  });
});

/* ── HANDOUTS DATA ──────────────────────────────────────── */
XA.handouts = [
  { title: "Algebra Formula Sheet", desc: "Linear, quadratic, polynomial formulas and factoring identities", subject: "Algebra", icon: "📐", grade: "8–12" },
  { title: "Calculus Quick Reference", desc: "Derivatives, integrals, limits, and series formulas", subject: "Calculus", icon: "∫", grade: "11–12" },
  { title: "Geometry Proofs Cheat Sheet", desc: "Triangle congruence, circle theorems, proof templates", subject: "Geometry", icon: "△", grade: "9–10" },
  { title: "Trig Identities Reference", desc: "All fundamental, sum/difference, double/half-angle identities", subject: "Trig", icon: "sin", grade: "10–11" },
  { title: "Statistics Formula Sheet", desc: "Descriptive stats, distributions, hypothesis testing", subject: "Statistics", icon: "📊", grade: "11–12" },
  { title: "Physics Equations Card", desc: "Mechanics, E&M, thermodynamics, and wave equations", subject: "Physics", icon: "⚙️", grade: "9–12" },
  { title: "Chemistry Periodic Trends", desc: "Atomic radius, ionization energy, electronegativity patterns", subject: "Chemistry", icon: "⚗️", grade: "9–11" },
  { title: "Stoichiometry Roadmap", desc: "Step-by-step conversion diagram for mole calculations", subject: "Chemistry", icon: "🧪", grade: "9–11" },
  { title: "Biology Cell Diagram", desc: "Labeled eukaryotic and prokaryotic cell organelles", subject: "Biology", icon: "🧬", grade: "9–11" },
  { title: "Genetics Problem Templates", desc: "Punnett squares, dihybrid crosses, pedigree practice", subject: "Biology", icon: "🔬", grade: "10–12" },
  { title: "Linear Algebra Cheatsheet", desc: "Matrix operations, determinants, eigenvalues, vector spaces", subject: "Linear Algebra", icon: "[M]", grade: "College" },
  { title: "Number Theory Summary", desc: "Primes, GCD, LCM, modular arithmetic, Euler's theorem", subject: "Number Theory", icon: "∞", grade: "College" },
  { title: "Plate Tectonics Map Guide", desc: "Major plates, boundary types, associated hazards", subject: "Earth Science", icon: "🌍", grade: "6–8" },
  { title: "Astronomy Reference Card", desc: "Planet data, star classification, HR diagram, cosmic scale", subject: "Astronomy", icon: "🔭", grade: "9–12" },
  { title: "Probability Cheatsheet", desc: "Counting principles, distributions, Bayes theorem", subject: "Stats/Prob", icon: "🎲", grade: "11–12" }
];

/* ── RESOURCES DATA (AFFILIATE) ─────────────────────────── */
XA.resources = [
  {
    category: "Math", title: "Art of Problem Solving: Precalculus",
    desc: "Rigorous precalculus text widely used in math competitions and accelerated courses.",
    price: "~$35", stars: "★★★★★", icon: "📗", grade: "K-12",
    url: "https://www.amazon.com/s?k=Art+of+Problem+Solving+Precalculus&tag=toppicksmar03-20"
  },
  {
    category: "Math", title: "AP Calculus Prep — Princeton Review",
    desc: "Comprehensive AP Calculus AB & BC prep with full practice exams and strategies.",
    price: "~$20", stars: "★★★★☆", icon: "📘", grade: "K-12",
    url: "https://www.amazon.com/s?k=Princeton+Review+AP+Calculus+Prep&tag=toppicksmar03-20"
  },
  {
    category: "Science", title: "Zumdahl Chemistry (AP Edition)",
    desc: "The definitive AP Chemistry textbook — clear explanations with quantitative rigor.",
    price: "~$89", stars: "★★★★★", icon: "📙", grade: "High School",
    url: "https://www.amazon.com/s?k=Zumdahl+Chemistry+AP+Edition&tag=toppicksmar03-20"
  },
  {
    category: "Science", title: "Fundamentals of Physics — Halliday & Resnick",
    desc: "Classic physics textbook used in college and AP Physics C courses worldwide.",
    price: "~$75", stars: "★★★★★", icon: "📕", grade: "High School",
    url: "https://www.amazon.com/s?k=Halliday+Resnick+Fundamentals+of+Physics&tag=toppicksmar03-20"
  },
  {
    category: "Tools", title: "TI-84 Plus CE Graphing Calculator",
    desc: "The standard graphing calculator for SAT, ACT, AP exams, and algebra through calculus.",
    price: "~$116", stars: "★★★★★", icon: "🖩", grade: "K-12",
    url: "https://www.amazon.com/s?k=TI-84+Plus+CE+graphing+calculator&tag=toppicksmar03-20"
  },
  {
    category: "Tools", title: "Casio fx-991EX Scientific Calculator",
    desc: "Advanced scientific calculator with natural display, great for statistics and precalc.",
    price: "~$23", stars: "★★★★★", icon: "🔢", grade: "K-12",
    url: "https://www.amazon.com/s?k=Casio+fx-991EX+scientific+calculator&tag=toppicksmar03-20"
  },
  {
    category: "Technology", title: "Apple iPad for Students",
    desc: "Ideal for annotating PDFs, using Desmos, and digital note-taking with Apple Pencil.",
    price: "~$329", stars: "★★★★★", icon: "📱", grade: "K-12",
    url: "https://www.amazon.com/s?k=Apple+iPad+student&tag=toppicksmar03-20"
  },
  {
    category: "Technology", title: "Apple Pencil (1st Generation)",
    desc: "Perfect for math handwriting recognition and annotating textbooks on iPad.",
    price: "~$89", stars: "★★★★★", icon: "✏️", grade: "K-12",
    url: "https://www.amazon.com/s?k=Apple+Pencil+1st+generation&tag=toppicksmar03-20"
  },
  {
    category: "Math", title: "Linear Algebra Done Right — Sheldon Axler",
    desc: "The best proof-based linear algebra book — used in top university courses.",
    price: "~$40", stars: "★★★★★", icon: "📗", grade: "College",
    url: "https://www.amazon.com/s?k=Linear+Algebra+Done+Right+Axler&tag=toppicksmar03-20"
  },
  {
    category: "Science", title: "Campbell Biology (AP Edition)",
    desc: "The gold standard biology textbook — comprehensive, visual, and exam-ready.",
    price: "~$79", stars: "★★★★★", icon: "📗", grade: "High School",
    url: "https://www.amazon.com/s?k=Campbell+Biology+AP+Edition&tag=toppicksmar03-20"
  },
  {
    category: "Tools", title: "Geometry Set — Compass & Protractor",
    desc: "Professional geometry tools for constructions, angles, and circle drawing.",
    price: "~$13", stars: "★★★★☆", icon: "📐", grade: "K-12",
    url: "https://www.amazon.com/s?k=student+geometry+set+compass+protractor&tag=toppicksmar03-20"
  },
  {
    category: "Technology", title: "Sony WH-1000XM5 Noise-Canceling Headphones",
    desc: "Stay focused during study sessions with industry-leading active noise cancellation.",
    price: "~$348", stars: "★★★★★", icon: "🎧", grade: "K-12",
    url: "https://www.amazon.com/s?k=Sony+WH-1000XM5+headphones&tag=toppicksmar03-20"
  }
];
