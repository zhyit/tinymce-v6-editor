// 基础数学
const basic = [
    '\\pm','\\infty','=','\\neq','~','\\times','\\div','!','\\propto','<','\\ll','>','\\gg','\\le','\\geq','\\mp','\\cong','\\approx','\\equiv','\\forall',
    '\\complement','\\partial','\\sqrt','\\cbrt','\\qdrt','\\cup','\\cap','\\emptyset','%','°','℉','℃','∆','∇','∃','∄','∈','∋','←','↑',
    '\\rightarrow','\\downarrow','\\leftrightarrow','\\therefore','+','-','\\lnot','\\alpha','\\beta','\\gamma','\\delta','\\varepsilon','\\epsilon','\\theta','\\vartheta','\\mu','\\pi','\\rho','\\sigma','\\tau',
    '\\varphi','\\omega','\\ast','\\bullet','\\vdots','\\cdots','⋰','⋱','ℵ','ℶ','∎',
]
// 希腊字母（小写）
const greek_alphabet_lowercase = [
    '\\alpha','\\beta','\\gamma','\\delta','\\varepsilon','\\epsilon','\\zeta','\\eta','\\theta','\\vartheta','\\iota','\\kappa','\\lambda','\\mu','\\nu','\\xi','o','\\pi','\\varpi','\\rho',
    '\\varrho','\\sigma','\\varsigma','\\tau','\\upsilon','\\varphi','\\phi','\\chi','\\psi','\\omega'
]
// 希腊字母（大写）
const greek_alphabet_capital = [
    '\\Alpha','\\Beta','\\Gamma','\\Delta','\\Epsilon','\\Zeta','\\Eta','\\Theta','\\Iota','\\Kappa','\\Lambda','\\Mu','\\Nu','\\Xi','O','\\Pi','\\Rho','\\Sigam','\\Tau','\\Upsilon','\\Phi','\\Chi','\\Psi','\\Omega',
]
// 字母类符号
const letter_symbol = []
// 运算符 - 常用二元运算符
const calculate_symbol_binary = [
    '+','-','\\div','\\times','\\pm','\\mp','\\propto','/','\\ast','\\circ','\\bullet','\\cdot','\\cap','\\cup','\\uplus','\\sqcap','\\sqcup','\\land','\\vee',
]
// 运算符 - 常用关系运算符
const calculate_symbol_relationship = [
    '=','\\neq','<','>','\\le','\\geq','\\nless','\\nleq','\\ngt','\\ngeq','\\equiv','\\sim','\\simeq','\\approx','\\cong','\\nequiv','\\nsimeq','\\napprox','\\ncong', '\\propto',
    '\\ll','\\gg','\\in','\\ni','\\notin','\\subset','\\supset','\\subseteq','\\supseteq','\\prec','\\succ','\\preccurlyeq','\\succcurlyeq','\\sqsubset', '\\sqsupset','\\sqsubseteq','\\sqsupseteq','\\parallel','\\bot','\\vdash',
    '\\dashv','\\bowtie','\\asymp'
]
// 运算符 - 常用N元运算符
const calculate_symbol_n = [
    '\\bowtie','\\asymp','\\sum','\\int','\\iint','\\iiint','\\oint','\\oiint','\\oiiint','\\cwint','\\coint','\\aoint','\\prod','\\amalg','\\bigcap','\\bigcup','\\bigwedge','\\bigvee','\\bigodot','\\bigotimes','\\bigoplus','\\biguplus','\\bigudot',
]
// 运算符 - 高级二元运算符
const calculate_symbol_high = [
    '\\dotplus','\\dotminus','\\setminus','\\Cap','\\Cup','\\boxminus','\\boxtimes','\\boxdot','\\boxplus','\\divideontimes','\\ltimes','\\rtimes','\\leftthreetimes','\\rightthreetimes','\\curlywedge','\\curlyvee','\\odash',
    '\\intercal','\\oplus','\\ominus','\\otimes','\\oslash','\\odot','\\oast','\\ocirc','\\dag','\\ddag','\\star','\\diamond','\\wr','\\triangle','\\bigwedge','\\bigvee','\\bigodot','\\bigotimes','\\bigoplus','\\bigsqcap','\\bigsqcup','\\biguplus','\\bigudot',
]
// 运算符 - 高级关系运算符
const calculate_symbol_relation = [
    '\\therefore','\\because','\\lll','\\ggg','\\leqq','\\geqq','\\lesssim','\\gtrsim','\\lessdot','\\gtrdot','\\lessgtr','\\lesseqgtr','\\gtrless','\\gtreqless','\\Doteq','\\fallingdotseq','\\risingdotseq','\\backsim','\\approxeq','\\backsimeq',
    '\\preccurlyeq','\\succcurlyeq','\\curlyeqprec','\\curlyeqsucc','\\precsim','\\succsim','\\eqless','\\eqgtr','\\subseteq','\\supseteq','\\vartriangleleft','\\vartriangleright','\\trianglelefteq','\\trianglerighteq','\\models','\\Subset','\\Supset','\\sqsubset','\\sqsupset','\\Vdash',
    '\\Vvdash','\\eqcirc','\\circeq','\\Deltaeq','\\bumpeq','\\Bumpeq','\\propto','\\between','\\pitchfork','\\doteq','\\bowtie',
]
// 箭头
const symbol_arrow = [
    '\\gets','\\rightarrow','\\uparrow','\\downarrow','\\leftrightarrow','\\updownarrow','\\Leftarrow','\\Rightarrow','\\Uparrow','\\Downarrow','\\Leftrightarrow','\\Updownarrow','\\longleftarrow','\\longrightarrow','\\longleftrightarrow','\\Longleftarrow','\\Longrightarrow','\\Longleftrightarrow','\\nearrow','\\nwarrow',
    '\\searrow','\\swarrow','\\nleftarrow','\\nrightarrow','\\nleftrightarrow','\\nLeftarrow','\\nRightarrow','\\nLeftrightarrow','\\dashleftarrow','\\dashrightarrow','\\mapstoleft','\\mapsto','\\longmapstoleft','\\longmapsto','\\hookleftarrow','\\hookrightarrow','\\leftharpoonup','\\leftharpoondown','\\rightharpoonup','\\rightharpoondown',
    '\\upharpoonleft','\\upharpoonright','\\downharpoonleft','\\downharpoonright','\\leftrightharpoons','\\rlhar','\\leftleftarrows','\\rightrightarrows','\\upuparrows','\\downdownarrows','\\leftrightarrows','\\rightleftarrows','\\looparrowleft','\\looparrowright','\\leftarrowtail','\\rightarrowtail','\\Lsh','\\Rsh','\\ldsh','\\rdsh',
    '\\Lleftarrow','\\Rrightarrow','\\twoheadleftarrow','\\twoheadrightarrow','\\curvearrowleft','\\curvearrowright','\\circlearrowleft','\\circlearrowright','\\multimap','\\leftrightwavearrow','\\leftwavearrow','\\rightwavearrow','\\leftsquigarrow','\\rightsquigarrow',
]
// 求反关系运算符
const calculate_symbol_negate = [
    '\\neq','\\nless','\\ngt','\\nleq','\\ngeq','\\nequiv','\\nsim','\\nsimeq','\\napprox','\\ncong','\\nasymp','\\lneqq','\\gneqq','\\nprec','\\nsucc','\\npreccurlyeq','\\nsucccurlyeq','\\notin','\\notni','\\nsub',
    '\\nsup','\\nsubseteq','\\nsupseteq','⊊','⊋','⋢','⋣','⋦','⋧','⋨','⋩','⋪','⋫','⋬','⋭','∤','∦','⊬','⊭','⊮',
    '\\nVDash','\\nexists'
]
// 几何图形
const geometry = [
    '\\rightangle','\\angle','\\angmsd','\\angsph','\\angrtvb','\\righttriangle','\\epar','\\bot','\\nmid','\\parallel','\\nparallel','\\colon','\\Colon','\\therefore','\\because','\\qed',
]

const init = () => {
    let mathJax_config = document.querySelector('[data-id="math-jax-config-script"]');
    if (!mathJax_config) {
        mathJax_config = document.createElement('script');
        mathJax_config.src = '/tinymce/plugins/mathjax/mathjax-config.js';
        document.head.append(mathJax_config);
        let mathJax = document.querySelector('[data-id="math-jax-script"]');
        if (!mathJax) {
            mathJax = document.createElement('script');
            mathJax.src = '/tinymce/plugins/mathjax/es5/tex-mml-svg.js';
            document.head.append(mathJax);
        }
    }
}
