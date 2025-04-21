(() => {
    window.MathJax = {
        options: {
            // processHtmlClass: 'symbol-main', //可以设置处理class
            // ignoreHtmlClass: '.*' //可以设置忽略一些class
        },
        loader: {load: ["[tex]/mathtools", '[tex]/mhchem', '[tex]/physics']},
        tex: {
            inlineMath: [["$", "$"], ["\\(", "\\)"]],   //行内公式选择符
            displayMath: [["$$", "$$"], ["\\[", "\\]"]],   //段内公式选择符
            packages: {'[+]': ['mathtools', 'mhchem', 'physics']},
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
                Alpha: '\\mathop{{\\unicode{x0391}}}', // A
                Beta: '\\mathop{{\\unicode{x0392}}}', // B
                Epsilon: '\\mathop{{\\unicode{x0395}}}', // E
                Zeta: '\\mathop{{\\unicode{x0396}}}', // Z
                Eta: '\\mathop{{\\unicode{x0397}}}', // Η
                Iota: '\\mathop{{\\unicode{x0399}}}', // Ι
                Kappa: '\\mathop{{\\unicode{x039A}}}', // Κ
                Mu: '\\mathop{{\\unicode{x039C}}}', // Μ
                Nu: '\\mathop{{\\unicode{x039D}}}', // Ν
                Rho: '\\mathop{{\\unicode{x03A1}}}', // Ρ
                Sigam: '\\mathop{{\\unicode{x03A3}}}', // Σ
                Tau: '\\mathop{{\\unicode{x03A4}}}', // Τ
                Chi: '\\mathop{{\\unicode{x03A7}}}', // Χ
                sfrac: ['{}^{#1}\\!/\\!{}_{#2}', 2],  // 定义 \sfrac
                div: '\\mathbin{\\unicode{x00F7}}', // ÷ 因为引入了physics包后会造成显示为 divergence（散度），所以重新定义除号
            }
        },
    };


})()
