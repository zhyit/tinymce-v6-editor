(() => {
    // 基础数学
    const LATEX_BASIC = [
        '\\pm', '\\infty', '=', '\\neq', '~', '\\times', '\\div', '!', '\\propto', '<', '\\ll', '>', '\\gg', '\\le', '\\geq', '\\mp', '\\cong', '\\approx', '\\equiv', '\\forall',
        '\\complement', '\\partial', '\\sqrt', '\\cbrt', '\\qdrt', '\\cup', '\\cap', '\\emptyset', '%', '°', '℉', '℃', '∆', '∇', '∃', '∄', '∈', '∋', '←', '↑',
        '\\rightarrow', '\\downarrow', '\\leftrightarrow', '\\therefore', '+', '-', '\\lnot', '\\alpha', '\\beta', '\\gamma', '\\delta', '\\varepsilon', '\\epsilon', '\\theta', '\\vartheta', '\\mu', '\\pi', '\\rho', '\\sigma', '\\tau',
        '\\varphi', '\\omega', '\\ast', '\\bullet', '\\vdots', '\\cdots', '⋰', '⋱', 'ℵ', 'ℶ', '∎',
    ]
    // 希腊字母（小写）
    const LATEX_GREEK_ALPHABET_LOWERCASE = [
        '\\alpha', '\\beta', '\\gamma', '\\delta', '\\varepsilon', '\\epsilon', '\\zeta', '\\eta', '\\theta', '\\vartheta', '\\iota', '\\kappa', '\\lambda', '\\mu', '\\nu', '\\xi', 'o', '\\pi', '\\varpi', '\\rho',
        '\\varrho', '\\sigma', '\\varsigma', '\\tau', '\\upsilon', '\\varphi', '\\phi', '\\chi', '\\psi', '\\omega'
    ]
    // 希腊字母（大写）
    const LATEX_GREEK_ALPHABET_CAPITAL = [
        '\\Alpha', '\\Beta', '\\Gamma', '\\Delta', '\\Epsilon', '\\Zeta', '\\Eta', '\\Theta', '\\Iota', '\\Kappa', '\\Lambda', '\\Mu', '\\Nu', '\\Xi', 'O', '\\Pi', '\\Rho', '\\Sigam', '\\Tau', '\\Upsilon', '\\Phi', '\\Chi', '\\Psi', '\\Omega',
    ]
    // 字母类符号
    const LATEX_LETTER_SYMBOL = []
    // 运算符 - 常用二元运算符
    const LATEX_CALCULATE_SYMBOL_BINARY = [
        '+', '-', '\\div', '\\times', '\\pm', '\\mp', '\\propto', '/', '\\ast', '\\circ', '\\bullet', '\\cdot', '\\cap', '\\cup', '\\uplus', '\\sqcap', '\\sqcup', '\\land', '\\vee',
    ]
    // 运算符 - 常用关系运算符
    const LATEX_CALCULATE_SYMBOL_RELATIONSHIP = [
        '=', '\\neq', '<', '>', '\\le', '\\geq', '\\nless', '\\nleq', '\\ngt', '\\ngeq', '\\equiv', '\\sim', '\\simeq', '\\approx', '\\cong', '\\nequiv', '\\nsimeq', '\\napprox', '\\ncong', '\\propto',
        '\\ll', '\\gg', '\\in', '\\ni', '\\notin', '\\subset', '\\supset', '\\subseteq', '\\supseteq', '\\prec', '\\succ', '\\preccurlyeq', '\\succcurlyeq', '\\sqsubset', '\\sqsupset', '\\sqsubseteq', '\\sqsupseteq', '\\parallel', '\\bot', '\\vdash',
        '\\dashv', '\\bowtie', '\\asymp'
    ]
    // 运算符 - 常用N元运算符
    const LATEX_CALCULATE_SYMBOL_N = [
        '\\bowtie', '\\asymp', '\\sum', '\\int', '\\iint', '\\iiint', '\\oint', '\\oiint', '\\oiiint', '\\cwint', '\\coint', '\\aoint', '\\prod', '\\amalg', '\\bigcap', '\\bigcup', '\\bigwedge', '\\bigvee', '\\bigodot', '\\bigotimes', '\\bigoplus', '\\biguplus', '\\bigudot',
    ]
    // 运算符 - 高级二元运算符
    const LATEX_CALCULATE_SYMBOL_HIGH = [
        '\\dotplus', '\\dotminus', '\\setminus', '\\Cap', '\\Cup', '\\boxminus', '\\boxtimes', '\\boxdot', '\\boxplus', '\\divideontimes', '\\ltimes', '\\rtimes', '\\leftthreetimes', '\\rightthreetimes', '\\curlywedge', '\\curlyvee', '\\odash',
        '\\intercal', '\\oplus', '\\ominus', '\\otimes', '\\oslash', '\\odot', '\\oast', '\\ocirc', '\\dag', '\\ddag', '\\star', '\\diamond', '\\wr', '\\triangle', '\\bigwedge', '\\bigvee', '\\bigodot', '\\bigotimes', '\\bigoplus', '\\bigsqcap', '\\bigsqcup', '\\biguplus', '\\bigudot',
    ]
    // 运算符 - 高级关系运算符
    const LATEX_CALCULATE_SYMBOL_RELATION = [
        '\\therefore', '\\because', '\\lll', '\\ggg', '\\leqq', '\\geqq', '\\lesssim', '\\gtrsim', '\\lessdot', '\\gtrdot', '\\lessgtr', '\\lesseqgtr', '\\gtrless', '\\gtreqless', '\\Doteq', '\\fallingdotseq', '\\risingdotseq', '\\backsim', '\\approxeq', '\\backsimeq',
        '\\preccurlyeq', '\\succcurlyeq', '\\curlyeqprec', '\\curlyeqsucc', '\\precsim', '\\succsim', '\\eqless', '\\eqgtr', '\\subseteq', '\\supseteq', '\\vartriangleleft', '\\vartriangleright', '\\trianglelefteq', '\\trianglerighteq', '\\models', '\\Subset', '\\Supset', '\\sqsubset', '\\sqsupset', '\\Vdash',
        '\\Vvdash', '\\eqcirc', '\\circeq', '\\Deltaeq', '\\bumpeq', '\\Bumpeq', '\\propto', '\\between', '\\pitchfork', '\\doteq', '\\bowtie',
    ]
    // 箭头
    const LATEX_SYMBOL_ARROW = [
        '\\gets', '\\rightarrow', '\\uparrow', '\\downarrow', '\\leftrightarrow', '\\updownarrow', '\\Leftarrow', '\\Rightarrow', '\\Uparrow', '\\Downarrow', '\\Leftrightarrow', '\\Updownarrow', '\\longleftarrow', '\\longrightarrow', '\\longleftrightarrow', '\\Longleftarrow', '\\Longrightarrow', '\\Longleftrightarrow', '\\nearrow', '\\nwarrow',
        '\\searrow', '\\swarrow', '\\nleftarrow', '\\nrightarrow', '\\nleftrightarrow', '\\nLeftarrow', '\\nRightarrow', '\\nLeftrightarrow', '\\dashleftarrow', '\\dashrightarrow', '\\mapstoleft', '\\mapsto', '\\longmapstoleft', '\\longmapsto', '\\hookleftarrow', '\\hookrightarrow', '\\leftharpoonup', '\\leftharpoondown', '\\rightharpoonup', '\\rightharpoondown',
        '\\upharpoonleft', '\\upharpoonright', '\\downharpoonleft', '\\downharpoonright', '\\leftrightharpoons', '\\rlhar', '\\leftleftarrows', '\\rightrightarrows', '\\upuparrows', '\\downdownarrows', '\\leftrightarrows', '\\rightleftarrows', '\\looparrowleft', '\\looparrowright', '\\leftarrowtail', '\\rightarrowtail', '\\Lsh', '\\Rsh', '\\ldsh', '\\rdsh',
        '\\Lleftarrow', '\\Rrightarrow', '\\twoheadleftarrow', '\\twoheadrightarrow', '\\curvearrowleft', '\\curvearrowright', '\\circlearrowleft', '\\circlearrowright', '\\multimap', '\\leftrightwavearrow', '\\leftwavearrow', '\\rightwavearrow', '\\leftsquigarrow', '\\rightsquigarrow',
    ]
    // 求反关系运算符
    const LATEX_CALCULATE_SYMBOL_NEGATE = [
        '\\neq', '\\nless', '\\ngt', '\\nleq', '\\ngeq', '\\nequiv', '\\nsim', '\\nsimeq', '\\napprox', '\\ncong', '\\nasymp', '\\lneqq', '\\gneqq', '\\nprec', '\\nsucc', '\\npreccurlyeq', '\\nsucccurlyeq', '\\notin', '\\notni', '\\nsub',
        '\\nsup', '\\nsubseteq', '\\nsupseteq', '⊊', '⊋', '⋢', '⋣', '⋦', '⋧', '⋨', '⋩', '⋪', '⋫', '⋬', '⋭', '∤', '∦', '⊬', '⊭', '⊮',
        '\\nVDash', '\\nexists'
    ]
    // 几何图形
    const LATEX_GEOMETRY = [
        '\\rightangle', '\\angle', '\\angmsd', '\\angsph', '\\angrtvb', '\\righttriangle', '\\epar', '\\bot', '\\nmid', '\\parallel', '\\nparallel', '\\colon', '\\Colon', '\\therefore', '\\because', '\\qed',
    ]
    // 分式
    const LATEX_FRACTION = ['\\frac{x1}{x2}', '\\sfrac{x1}', '\\sfrac{x1}', '{\\frac{x1}{x2}}']
    // 常用分式
    const LATEX_COMMON_FRACTION = ['\\frac{dy}{dx}', '\\frac{\\Delta y}{\\Delta x}', '\\frac{\\partial y}{\\partial x}', '\\frac{\\delta y}{\\delta x}', '\\frac{\\pi}{2}']
    // 上标、下标
    const LATEX_SUPER_SUB_UNDER = ['x1_{x2}','x1_{x2}', 'x1_{x2}^{x3}', '_{x1}^{x2}x3']
    // 常用的上标、下标
    const LATEX_COMMON_SUPER_SUB_UNDER = ['x_{y^2}', 'e^{-i\\omega t}', 'x^2', '{_1^n}Y']
    // 根式
    const LATEX_RADICAL = ['\\sqrt{x}', '\\sqrt[x1]{x2}', '\\sqrt[2]{x1}', '\\sqrt[3]{x1}']
    // 常用的根式
    const LATEX_COMMON_RADICAL = ['\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}', '\\sqrt{a^2+b^2}']
    // 积分、二重积分、三重积分
    const LATEX_CALCULUS = ['\\int{x1}', '\\int_{x3}^{x1}{x2}', '\\int\\limits_{x3}^{x1}{x2}', '\\iint{x1}', '\\iint_{x3}^{x1}{x2}', '\\iint\\limits_{x3}^{x1}{x2}', '\\iiint{x1}', '\\iiint_{x3}^{x1}{x2}', '\\iiint\\limits_{x3}^{x1}{x2}']
    // 围道积分、曲面积分、体积积分
    const LATEX_CONTOUR_INTEGRAL = ['\\oint{x1}', '\\oint_{x3}^{x1}{x2}', '\\oint\\limits_{x3}^{x1}{x2}', '\\oiint{x1}', '\\oiint_{x3}^{x1}{x2}', '\\oiint\\limits_{x3}^{x1}{x2}', '\\oiiint{x1}', '\\oiint_{x3}^{x1}{x2}', '\\oiiint\\limits_{x3}^{x1}{x2}']
    // 微分
    const LATEX_DIFFERENTIAL = ['dx', 'dy', 'd\\theta']
    // 大型运算符 - 求和
    const LATEX_BIG_CALCULATE_SUM = ['\\sum{x1}', '\\sum\\limits_{x3}^{x1}{x2}', '\\sum_{x3}^{x1}{x2}', '\\sum\\limits_{x2}{x1}', '\\sum_{x2}{x1}']
    // 大型运算符 - 乘积和副积
    const LATEX_BIG_CALCULATE_PRODUCT = [
        '\\prod{x1}', '\\prod\\limits_{x3}^{x1}{x2}', '\\prod_{x3}^{x1}{x2}', '\\prod\\limits_{x2}{x1}', '\\prod_{x2}{x1}',
        '\\amalg{x}', '\\mathop{\\amalg}\\limits_{x3}^{x1}{x2}', '\\amalg_{x3}^{x1}{x2}', '\\mathop{\\amalg}\\limits_{x2}{x1}', '\\amalg_{x2}{x1}'
    ]
    // 大型运算符 - 并集和交集
    const LATEX_BIG_CALCULATE_UNION = [
        '\\bigcup{x1}', '\\bigcup\\limits_{x3}^{x1}{x2}', '\\bigcup_{x3}^{x1}{x2}', '\\bigcup\\limits_{x2}{x1}', '\\bigcup_{x2}{x1}',
        '\\bigcap{x1}', '\\bigcap\\limits_{x3}^{x1}{x2}', '\\bigcap_{x3}^{x1}{x2}', '\\bigcap\\limits_{x2}{x1}', '\\bigcap_{x2}{x1}',
        '\\bigvee{x1}', '\\bigvee\\limits_{x3}^{x1}{x2}', '\\bigvee_{x3}^{x1}{x2}', '\\bigvee\\limits_{x2}{x1}', '\\bigvee_{x2}{x1}',
        '\\bigwedge{x1}', '\\bigwedge\\limits_{x3}^{x1}{x2}', '\\bigwedge_{x3}^{x1}{x2}', '\\bigwedge\\limits_{x2}{x1}', '\\bigwedge_{x2}{x1}',
    ]
    // 大型运算符 - 常用大型运算符
    const LATEX_BIG_CALCULATE_COMMON = [
        '\\sum\\limits_{k}\\binom{n}{k}', '\\sum\\limits_{i=0}^{n}{x1}',
        '\\sum\\limits_{\\mathop{0\\le{i}\\le{m}}\\limits_{0<{j}<{n}}}{P\\left(i,j\\right)}', '\\prod\\limits_{k=1}^{n}A_k',
        '\\bigcup\\limits_{n=1}^{m}\\left(X_n\\cap Y_n\\right)'
    ]
    // 括号
    const LATEX_BRACKET = [
        '\\left({x1}\\right)', '\\left[{x1}\\right]', '\\left\\{{x1}\\right\\}', '\\left\\langle{x1}\\right\\rangle',
        '\\left\\lfloor{x1}\\right\\rfloor', '\\left\\lceil{x1}\\right\\rceil', '\\left|{x1}\\right|', '\\parallel{x1}\\parallel',
        '\\left[{x1}\\right[', '\\left]{x1}\\right]', '\\left]{x1}\\right[', '\\lefthollowsquarebrackets{x1}\\righthollowsquarebrackets',
    ]
    // 带分隔符的括号
    const LATEX_BRACKET_DIVIDE = [
        '\\left({x1}\\middle|{x2}\\right)', '\\left\\{{x1}\\middle|{x2}\\right\\}', '\\left\\langle{x1}\\middle|{x2}\\right\\rangle', '\\left\\langle{x1}\\middle|{x2}\\middle|{x3}\\right\\rangle'
    ]
    // 单括号
    const LATEX_BRACKET_SINGLE= [
        '\\left({x1}\\right.', '\\left.{x1}\\right)', '\\left[{x1}\\right.', '\\left.{x1}\\right]',
        '\\left\\{{x1}\\right.', '\\left.{x1}\\right\\}', '\\left\\langle{x1}\\right.', '\\left.{x1}\\right\\rangle',
        '\\left\\lfloor{x1}\\right.', '\\left.{x1}\\right\\rfloor', '\\left\\lceil{x1}\\right.', '\\left.{x1}\\right\\rceil',
        '\\left|{x1}\\right.', '\\left.{x1}\\right|', '\\lefthollowsquarebrackets{x1}', '{x1}\\righthollowsquarebrackets'
    ]
    // 事例和堆栈
    const LATEX_BRACKET_CASE = [
        '\\{_{2}^{1}', '\\left\\{\\begin{matrix}{x1}\\\\{x2}\\\\{x3}\\end{matrix}\\right.', '{{x1}\\atop{x2}}', '\\binom{x1}{x2}',
    ]
    // 常用括号
    const LATEX_BRACKET_COMMON = [
        'f\\left(x\\right)=\\left\\{\\begin{matrix} -x, &x\\lt0 \\\\ x, &x\\ge 0\\end{matrix}\\right.', '\\binom{n}{k}', '\\left\\langle{n\\atop k}\\right\\rangle'
    ]
    // 三角函数
    const LATEX_FUN_TRIANGLE = [
        '\\sin{x1}', '\\cos{x1}', '\\tan{x1}', '\\csc{x1}', '\\sec{x1}', '\\cot{x1}'
    ]
    // 反函数
    const LATEX_FUN_INVERSE = [
        '\\sin^{-x1}{x2}', '\\cos^{-x1}{x2}', '\\tan^{-x1}{x2}', '\\csc^{-x1}{x2}', '\\sec^{-x1}{x2}', '\\cot^{-x1}{x2}'
    ]
    // 双曲函数
    const LATEX_FUN_HYPERBOLIC = [
        '\\sinh^{-x1}{x2}', '\\cosh^{-x1}{x2}', '\\tanh^{-x1}{x2}', '\\csch^{-x1}{x2}', '\\sech^{-x1}{x2}', '\\coth^{-x1}{x2}'
    ]
    // 常用函数
    const LATEX_FUN_COMMON = [
        '\\sin{\\theta}', '\\cos{2x}', '\\tan{\\theta}=\\frac{\\sin{\\theta}}{\\cos{\\theta}}'
    ]
    // 标注符号
    const LATEX_SYMBOL_MARK = [
        '̇\\mathop{x}\\limits^{\\bullet}', '\\mathop{x}\\limits^{\\unicode{x2025}}', '\\mathop{x}\\limits^{\\cdots}', '\\mathop{x}\\limits^{\\verticalflippingconnectbelow}',
        '\\mathop{x}\\limits^{\\caron}', '\\mathop{x}\\limits^{\\modifierletteracuteaccent}', '\\mathop{x}\\limits^{\\modifierlettergraveaccent}', '\\mathop{x}\\limits^{\\combiningdoublebrevebelow}',
        '\\mathop{x}\\limits^{\\modifierletterlowtilde}', '\\overline{x}', '\\overline{\\overline{x}}', '\\overbrace {x}', '\\underbrace {x}',
        '\\overbrace {x}\\limits^{x2}', '\\underbrace {x1}\\limits_{x2}', '\\overleftarrow{x}', '\\overrightarrow{x}', '\\overleftrightarrow{x}',
        '\\xleftharpoonup[x]{}', '\\xrightharpoonup[x]{}'
    ]
    // 带框公式
    const LATEX_SYMBOL_BOXED_FORMULA = [
        '\\boxed{x}', '\\boxed{a^2=b^2+c^2}',
    ]
    // 顶线和底线
    const LATEX_SYMBOL_OVER_UNDER = [
        '\\overline{x}', '\\underline{x}',
    ]
    // 常用标注符号对象
    const LATEX_SYMBOL_MARK_COMMON = [
        '\\overline{A}', '\\overline{ABC}', '\\overline{x⊕y}'
    ]
    // 极限和对数
    const LATEX_LIMIT_FUN = [
        'log_{x1}{x2}', 'log{x}', '\\mathop{lim}\\limits_{x1}{x2}', '\\mathop{min}\\limits_{x1}{x2}', '\\mathop{max}\\limits_{x1}{x2}', 'ln{x}'
    ]
    // 极限和对数 -- 常用函数
    const LATEX_LIMIT_COMMON = [
        '\\mathop{lim}\\limits_{n→∞}\\begin{pmatrix}1+\\frac{1}{n}\\end{pmatrix}^n', '\\mathop{max}\\limits_{0≤x≤1} xe^{-x^2}'
    ]
    // 运算符 - 基本运算符
    const LATEX_CALCULATE_SYMBOL_BASE= [
        ':=', '==', '+=', '-=', '\\underline{\\underline{def}}','\\underline{\\underline{m}}','\\underline{\\underline{∆}}',
    ]
    //  运算符 - 运算符结构
    const LATEX_CALCULATE_SYMBOL_STRUCTURE = [
        '\\overleftarrow{x}', '\\overrightarrow{x}', '\\underleftarrow{x}', '\\underrightarrow{x}',
        '\\xLeftarrow[x]{}', '\\xRightarrow[x]{}', '\\xLeftarrow[]{x}','\\xRightarrow[]{x}',
        '\\xleftrightarrow[x]{}', '\\xleftrightarrow[]{x}', '\\xLeftrightarrow[x]{}', '\\xLeftrightarrow[]{x}'
    ]
    //  运算符 - 常用运算符结构
    const LATEX_CALCULATE_SYMBOL_STRUCTURE_COMMON = [
        '\\underrightarrow{yields}', '\\underrightarrow{∆}'
    ]
    const a = [
        '\\begin{matrix} {x1} & {x2} \\end{matrix}'
    ]

    window.LATEX_BASIC = LATEX_BASIC;
    window.LATEX_GREEK_ALPHABET_LOWERCASE = LATEX_GREEK_ALPHABET_LOWERCASE;
    window.LATEX_GREEK_ALPHABET_CAPITAL = LATEX_GREEK_ALPHABET_CAPITAL;
    window.LATEX_LETTER_SYMBOL = LATEX_LETTER_SYMBOL;
    window.LATEX_CALCULATE_SYMBOL_BINARY = LATEX_CALCULATE_SYMBOL_BINARY;
    window.LATEX_CALCULATE_SYMBOL_RELATIONSHIP = LATEX_CALCULATE_SYMBOL_RELATIONSHIP;
    window.LATEX_CALCULATE_SYMBOL_N = LATEX_CALCULATE_SYMBOL_N;
    window.LATEX_CALCULATE_SYMBOL_HIGH = LATEX_CALCULATE_SYMBOL_HIGH;
    window.LATEX_CALCULATE_SYMBOL_RELATION = LATEX_CALCULATE_SYMBOL_RELATION;
    window.LATEX_SYMBOL_ARROW = LATEX_SYMBOL_ARROW;
    window.LATEX_CALCULATE_SYMBOL_NEGATE = LATEX_CALCULATE_SYMBOL_NEGATE;
    window.LATEX_GEOMETRY = LATEX_GEOMETRY;
    window.LATEX_FRACTION = LATEX_FRACTION;
    window.LATEX_COMMON_FRACTION = LATEX_COMMON_FRACTION;
    window.LATEX_SUPER_SUB_UNDER = LATEX_SUPER_SUB_UNDER;
    window.LATEX_COMMON_SUPER_SUB_UNDER = LATEX_COMMON_SUPER_SUB_UNDER;
    window.LATEX_RADICAL = LATEX_RADICAL;
    window.LATEX_COMMON_RADICAL = LATEX_COMMON_RADICAL;
    window.LATEX_CALCULUS = LATEX_CALCULUS;
    window.LATEX_CONTOUR_INTEGRAL = LATEX_CONTOUR_INTEGRAL;
    window.LATEX_DIFFERENTIAL = LATEX_DIFFERENTIAL;
    window.LATEX_BIG_CALCULATE_SUM = LATEX_BIG_CALCULATE_SUM;
    window.LATEX_BIG_CALCULATE_PRODUCT = LATEX_BIG_CALCULATE_PRODUCT;
    window.LATEX_BIG_CALCULATE_UNION = LATEX_BIG_CALCULATE_UNION;
    window.LATEX_BIG_CALCULATE_COMMON = LATEX_BIG_CALCULATE_COMMON;
    window.LATEX_BRACKET = LATEX_BRACKET;
    window.LATEX_BRACKET_DIVIDE = LATEX_BRACKET_DIVIDE;
    window.LATEX_BRACKET_SINGLE = LATEX_BRACKET_SINGLE;
    window.LATEX_BRACKET_CASE = LATEX_BRACKET_CASE;
    window.LATEX_BRACKET_COMMON = LATEX_BRACKET_COMMON;
    window.LATEX_FUN_TRIANGLE = LATEX_FUN_TRIANGLE;
    window.LATEX_FUN_INVERSE = LATEX_FUN_INVERSE;
    window.LATEX_FUN_HYPERBOLIC = LATEX_FUN_HYPERBOLIC;
    window.LATEX_FUN_COMMON = LATEX_FUN_COMMON;
    window.LATEX_SYMBOL_MARK = LATEX_SYMBOL_MARK;
    window.LATEX_SYMBOL_BOXED_FORMULA = LATEX_SYMBOL_BOXED_FORMULA;
    window.LATEX_SYMBOL_OVER_UNDER = LATEX_SYMBOL_OVER_UNDER;
    window.LATEX_SYMBOL_MARK_COMMON = LATEX_SYMBOL_MARK_COMMON;
    window.LATEX_LIMIT_FUN = LATEX_LIMIT_FUN;
    window.LATEX_LIMIT_COMMON = LATEX_LIMIT_COMMON;
    window.LATEX_CALCULATE_SYMBOL_BASE = LATEX_CALCULATE_SYMBOL_BASE;
    window.LATEX_CALCULATE_SYMBOL_STRUCTURE = LATEX_CALCULATE_SYMBOL_STRUCTURE;
    window.LATEX_CALCULATE_SYMBOL_STRUCTURE_COMMON = LATEX_CALCULATE_SYMBOL_STRUCTURE_COMMON;

    window.MathJax = {
        options: {
            processHtmlClass: 'math-tex', //可以设置处理class
            ignoreHtmlClass: '.*' //可以设置忽略一些class
        },
        loader: {load: ['[tex]/physics', "[tex]/mathtools"]},
        tex: {
            inlineMath: [["$", "$"], ["\\(", "\\)"]],   //行内公式选择符
            displayMath: [["$$", "$$"], ["\\[", "\\]"]],   //段内公式选择符
            packages: {'[+]': ['physics', 'mathtools']},
            macros: {
                ngt: "\\not\\gt",  // ≯
                nequiv: "\\not\\equiv", // ≢
                nsimeq: "\\not\\simeq", // ≄
                napprox: "\\not\\approx", // ≉
                oiint: "\\mathop{\\huge {\\unicode{x222F}}}",  // ∯
                oiiint: "\\mathop{\\huge {\\unicode{x2230}}}", // ∰
                cwint: "\\mathop{\\huge {\\unicode{x2231}}}",   // ∱
                coint: "\\mathop{\\huge \\unicode{x2232}}", // ∲
                aoint: "\\mathop{\\huge \\unicode{x2233}}", // ∳
                bigudot: "\\mathop{\\huge {\\unicode{x228D}}}", // ⊍
                dotminus: "\\mathop{{\\unicode{x02238}}}", // ∸
                odash: "\\mathop{{\\unicode{x229D}}}", // ⊝
                oast: "\\mathop{{\\unicode{x229D}}}", // ⊛
                ocirc: "\\mathop{{\\unicode{x229A}}}", // ⊛
                dag: "\\mathop{{\\unicode{x2020}}}", // †
                ddag: "\\mathop{{\\unicode{x2021}}}", // ‡
                bigsqcap: "\\mathop{\\LARGE {\\unicode{x2293}}}", // ⊓
                eqless: "\\mathop{{\\unicode{x22DC}}}", // ⋜
                eqgtr: "\\mathop{{\\unicode{x22DD}}}", // ⋝
                Deltaeq: "\\mathop{{\\unicode{x225C}}}", // ≜
                mapstoleft: "\\mathop{{\\unicode{x225C}}}", // ↤
                longmapstoleft: "\\mathop{{\\unicode{x27FB}}}", // ⟻
                rlhar: "\\mathop{{\\unicode{x21CC}}}", // ⇌
                ldsh: "\\mathop{{\\unicode{x21B2}}}", // ↲
                rdsh: "\\mathop{{\\unicode{x21B3}}}", // ↳
                leftrightwavearrow: "\\mathop{{\\unicode{x21AD}}}", // ↭
                leftwavearrow: "\\mathop{{\\unicode{x219C}}}", // ↜
                rightwavearrow: "\\mathop{{\\unicode{x219D}}}", // ↝
                leftsquigarrow: "\\mathop{{\\unicode{x21DC}}}", // ⇜
                // rightsquigarrow: "\\mathop{{\\unicode{x21DD}}}", // ⇝
                nasymp: "\\mathop{{\\unicode{x226D}}}", // ≭
                npreccurlyeq: "\\mathop{{\\unicode{x22E0}}}", // ⋠
                nsucccurlyeq: "\\mathop{{\\unicode{x22E1}}}", // ⋡
                notni: "\\mathop{{\\unicode{x220C}}}", // ∌
                nsub: "\\mathop{{\\unicode{x2284}}}", // ⊄
                nsup: "\\mathop{{\\unicode{x2285}}}", // ⊅
                rightangle: "\\mathop{{\\unicode{x221F}}}", // ∟
                angmsd: "\\mathop{{\\unicode{x2221}}}", // ∡
                angsph: "\\mathop{{\\unicode{x2222}}}", // ∢
                angrtvb: "\\mathop{{\\unicode{x22BE}}}", // ⊾
                righttriangle: "\\mathop{{\\unicode{x25FF}}}", // ◿
                epar: "\\mathop{{\\unicode{x22D5}}}", // ⋕
                Colon: "\\mathop{{\\unicode{x2237}}}", // ∷
                qed: "\\mathop{{\\unicode{x220E}}}", // ∎
                lefthollowsquarebrackets: "\\mathop{{\\unicode{x27E6}}}", // ⟦
                righthollowsquarebrackets: "\\mathop{{\\unicode{x27E7}}}", // ⟧
                verticalflippingconnectbelow: "\\mathop{{\\unicode{x2054}}}", // ⁔
                caron: "\\mathop{{\\unicode{x02C7}}}", //ˇ
                modifierletteracuteaccent: "\\mathop{{\\unicode{x02CA}}}", //ˊ
                modifierlettergraveaccent: "\\mathop{{\\unicode{x02CB}}}", //ˋ
                combiningdoublebrevebelow: "\\mathop{{\\unicode{x035C}}}", //͜
                modifierletterlowtilde: "\\mathop{{\\unicode{x02F7}}}", //˷
            }
        }
    };
})()
