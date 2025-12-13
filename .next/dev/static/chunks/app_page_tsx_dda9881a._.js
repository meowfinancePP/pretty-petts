(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/page.tsx
__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './components/WaitlistForm'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(117);
    if ($[0] !== "00276f18d9d2422b52c09a84e5f8debb4483a26df92281c9cc7e88448d7ef36b") {
        for(let $i = 0; $i < 117; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "00276f18d9d2422b52c09a84e5f8debb4483a26df92281c9cc7e88448d7ef36b";
    }
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const featuresRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const missionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const teamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const waitlistRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            once: true
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(heroRef, t0);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            0,
            0.2
        ];
        t2 = [
            1,
            0
        ];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    const heroOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, t1, t2);
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [
            0,
            0.2
        ];
        t4 = [
            1,
            0.95
        ];
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    const heroScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, t3, t4);
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "Home[useEffect()]": ()=>{
                const handleScroll = {
                    "Home[useEffect() > handleScroll]": ()=>{
                        setIsScrolled(window.scrollY > 50);
                    }
                }["Home[useEffect() > handleScroll]"];
                window.addEventListener("scroll", handleScroll);
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["Home[useEffect()]"];
        t6 = [];
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    let t8;
    if ($[8] !== controls || $[9] !== isInView) {
        t7 = ({
            "Home[useEffect()]": ()=>{
                if (isInView) {
                    controls.start("visible");
                }
            }
        })["Home[useEffect()]"];
        t8 = [
            controls,
            isInView
        ];
        $[8] = controls;
        $[9] = isInView;
        $[10] = t7;
        $[11] = t8;
    } else {
        t7 = $[10];
        t8 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    const scrollToSection = _HomeScrollToSection;
    let t9;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = [
            {
                icon: "\uD83C\uDFA8",
                title: "\u0418\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0418\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442",
                description: "\u041D\u0430\u0448 AI \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 3D \u043C\u043E\u0434\u0435\u043B\u0438 \u043F\u0438\u0442\u043E\u043C\u0446\u0435\u0432 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0432\u0430\u0448\u0438\u0445 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0439 \u0437\u0430 30 \u0441\u0435\u043A\u0443\u043D\u0434",
                color: "from-purple-500/20 to-pink-500/20"
            },
            {
                icon: "\uD83D\uDD17",
                title: "\u042D\u043A\u043E-\u0411\u043B\u043E\u043A\u0447\u0435\u0439\u043D",
                description: "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0443\u0433\u043B\u0435\u0440\u043E\u0434\u043D\u043E-\u043D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0439 Polygon \u0434\u043B\u044F \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0432\u043E\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043D\u0430 \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0443\u044E \u0441\u0440\u0435\u0434\u0443",
                color: "from-cyan-500/20 to-blue-500/20"
            },
            {
                icon: "\u2764\uFE0F",
                title: "\u0421\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u041C\u0438\u0441\u0441\u0438\u044F",
                description: "10% \u043E\u0442 \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u0440\u043E\u0434\u0430\u0436\u0438 NFT \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u044F\u0435\u0442\u0441\u044F \u0432 \u043F\u0440\u0438\u044E\u0442\u044B \u0434\u043B\u044F \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445",
                color: "from-pink-500/20 to-rose-500/20"
            },
            {
                icon: "\uD83C\uDF0D",
                title: "\u0413\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u043E\u0435 \u0421\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E",
                description: "\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0439\u0442\u0435\u0441\u044C \u043A \u0442\u044B\u0441\u044F\u0447\u0430\u043C \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u0432 \u043F\u0438\u0442\u043E\u043C\u0446\u0435\u0432 \u043F\u043E \u0432\u0441\u0435\u043C\u0443 \u043C\u0438\u0440\u0443",
                color: "from-emerald-500/20 to-teal-500/20"
            }
        ];
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    const features = t9;
    let t10;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = [
            {
                name: "\u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0412\u043E\u0440\u043E\u043D\u043E\u0432",
                role: "\u041E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u044C & CEO",
                bio: "15 \u043B\u0435\u0442 \u0432 \u0431\u043B\u043E\u043A\u0447\u0435\u0439\u043D-\u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438, \u0441\u043E\u043E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0434\u0432\u0443\u0445 \u0443\u0441\u043F\u0435\u0448\u043D\u044B\u0445 Web3 \u0441\u0442\u0430\u0440\u0442\u0430\u043F\u043E\u0432",
                avatar: "\uD83D\uDC68\u200D\uD83D\uDCBB"
            },
            {
                name: "\u041C\u0430\u0440\u0438\u044F \u0421\u043E\u043A\u043E\u043B\u043E\u0432\u0430",
                role: "CTO",
                bio: "\u042D\u043A\u0441\u043F\u0435\u0440\u0442 \u043F\u043E \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u043E\u043C\u0443 \u0437\u0440\u0435\u043D\u0438\u044E, PhD \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043C\u0430\u0448\u0438\u043D\u043D\u043E\u0433\u043E \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F",
                avatar: "\uD83D\uDC69\u200D\uD83D\uDD2C"
            },
            {
                name: "\u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u041E\u0440\u043B\u043E\u0432",
                role: "Head of Design",
                bio: "\u0411\u044B\u0432\u0448\u0438\u0439 \u0430\u0440\u0442-\u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440 \u0432 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0435\u0439 \u0438\u0433\u0440\u043E\u0432\u043E\u0439 \u0441\u0442\u0443\u0434\u0438\u0438, \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442 \u043F\u043E 3D-\u043C\u043E\u0434\u0435\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E",
                avatar: "\uD83D\uDC68\u200D\uD83C\uDFA8"
            },
            {
                name: "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0430 \u041F\u0435\u0442\u0440\u043E\u0432\u0430",
                role: "Head of Partnerships",
                bio: "10 \u043B\u0435\u0442 \u043E\u043F\u044B\u0442\u0430 \u0432 \u043D\u0435\u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u043C \u0441\u0435\u043A\u0442\u043E\u0440\u0435, \u043E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0441\u0435\u0442\u0438 \u043F\u0440\u0438\u044E\u0442\u043E\u0432 \"\u0414\u043E\u0431\u0440\u044B\u0435 \u0440\u0443\u043A\u0438\"",
                avatar: "\uD83D\uDC69\u200D\uD83D\uDCBC"
            }
        ];
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    const team = t10;
    let t11;
    let t12;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            y: -100
        };
        t12 = {
            y: 0
        };
        $[14] = t11;
        $[15] = t12;
    } else {
        t11 = $[14];
        t12 = $[15];
    }
    const t13 = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`;
    let t14;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 177,
                    columnNumber: 56
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xl font-semibold text-gray-900",
                    children: "PrettyPetts"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 177,
                    columnNumber: 142
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    let t15;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 py-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    t14,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center space-x-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "Home[<button>.onClick]": ()=>scrollToSection(featuresRef)
                                }["Home[<button>.onClick]"],
                                className: "text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium",
                                children: "Технологии"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 184,
                                columnNumber: 167
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "Home[<button>.onClick]": ()=>scrollToSection(missionRef)
                                }["Home[<button>.onClick]"],
                                className: "text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium",
                                children: "Миссия"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 186,
                                columnNumber: 143
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "Home[<button>.onClick]": ()=>scrollToSection(teamRef)
                                }["Home[<button>.onClick]"],
                                className: "text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium",
                                children: "Команда"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 188,
                                columnNumber: 139
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "Home[<button>.onClick]": ()=>scrollToSection(waitlistRef)
                                }["Home[<button>.onClick]"],
                                className: "bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity",
                                children: "Присоединиться"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 190,
                                columnNumber: 140
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 184,
                        columnNumber: 112
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 184,
                columnNumber: 56
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        $[17] = t15;
    } else {
        t15 = $[17];
    }
    let t16;
    if ($[18] !== t13) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
            initial: t11,
            animate: t12,
            className: t13,
            children: t15
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[18] = t13;
        $[19] = t16;
    } else {
        t16 = $[19];
    }
    let t17;
    if ($[20] !== heroOpacity || $[21] !== heroScale) {
        t17 = {
            opacity: heroOpacity,
            scale: heroScale
        };
        $[20] = heroOpacity;
        $[21] = heroScale;
        $[22] = t17;
    } else {
        t17 = $[22];
    }
    let t18;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        $[23] = t18;
    } else {
        t18 = $[23];
    }
    let t19;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1/4 left-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50 animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 226,
                    columnNumber: 61
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-50 animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 226,
                    columnNumber: 177
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[24] = t19;
    } else {
        t19 = $[24];
    }
    let t20;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = {
            opacity: 0,
            y: 20
        };
        $[25] = t20;
    } else {
        t20 = $[25];
    }
    let t21;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = {
            hidden: t20,
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.6,
                    ease: "easeOut"
                }
            }
        };
        $[26] = t21;
    } else {
        t21 = $[26];
    }
    let t22;
    let t23;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "block text-gray-900",
                    children: "Цифровая"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 261,
                    columnNumber: 90
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600",
                    children: "вечность"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 261,
                    columnNumber: 143
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "block text-gray-900",
                    children: "для ваших питомцев"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 261,
                    columnNumber: 257
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed",
            children: "Превращаем воспоминания о любимых питомцах в уникальные цифровые произведения искусства, сохраняя их дух в блокчейне навсегда"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 262,
            columnNumber: 11
        }, this);
        $[27] = t22;
        $[28] = t23;
    } else {
        t22 = $[27];
        t23 = $[28];
    }
    let t24;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            whileHover: {
                scale: 1.05
            },
            whileTap: {
                scale: 0.95
            },
            onClick: {
                "Home[<motion.button>.onClick]": ()=>scrollToSection(waitlistRef)
            }["Home[<motion.button>.onClick]"],
            className: "px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-xl transition-shadow duration-300",
            children: "Начать путешествие"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[29] = t24;
    } else {
        t24 = $[29];
    }
    let t25;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center items-center mb-20",
            children: [
                t24,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    whileHover: {
                        scale: 1.05
                    },
                    whileTap: {
                        scale: 0.95
                    },
                    onClick: {
                        "Home[<motion.button>.onClick]": ()=>scrollToSection(featuresRef)
                    }["Home[<motion.button>.onClick]"],
                    className: "px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-gray-400 transition-colors duration-300",
                    children: "Узнать больше"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 284,
                    columnNumber: 99
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 284,
            columnNumber: 11
        }, this);
        $[30] = t25;
    } else {
        t25 = $[30];
    }
    let t26;
    let t27;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = {
            y: [
                0,
                10,
                0
            ]
        };
        t27 = {
            repeat: Infinity,
            duration: 2
        };
        $[31] = t26;
        $[32] = t27;
    } else {
        t26 = $[31];
        t27 = $[32];
    }
    let t28;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            animate: t26,
            transition: t27,
            className: "absolute bottom-8 left-1/2 transform -translate-x-1/2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-1 h-3 bg-gray-400 rounded-full mt-2"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 313,
                    columnNumber: 204
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 313,
                columnNumber: 120
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 313,
            columnNumber: 11
        }, this);
        $[33] = t28;
    } else {
        t28 = $[33];
    }
    let t29;
    if ($[34] !== controls) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 max-w-7xl mx-auto px-6 py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: "hidden",
                animate: controls,
                variants: t21,
                className: "text-center",
                children: [
                    t22,
                    t23,
                    t25,
                    t28
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 320,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 320,
            columnNumber: 11
        }, this);
        $[34] = controls;
        $[35] = t29;
    } else {
        t29 = $[35];
    }
    let t30;
    if ($[36] !== t17 || $[37] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
            ref: heroRef,
            style: t17,
            className: "min-h-screen flex items-center justify-center relative overflow-hidden",
            children: [
                t18,
                t19,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 328,
            columnNumber: 11
        }, this);
        $[36] = t17;
        $[37] = t29;
        $[38] = t30;
    } else {
        t30 = $[38];
    }
    let t31;
    let t32;
    let t33;
    let t34;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = {
            opacity: 0
        };
        t32 = {
            opacity: 1
        };
        t33 = {
            once: true
        };
        t34 = {
            duration: 0.8
        };
        $[39] = t31;
        $[40] = t32;
        $[41] = t33;
        $[42] = t34;
    } else {
        t31 = $[39];
        t32 = $[40];
        t33 = $[41];
        t34 = $[42];
    }
    let t35;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-6 text-gray-900",
                    children: [
                        "Технология ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600",
                            children: "будущего"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 364,
                            columnNumber: 123
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 364,
                    columnNumber: 46
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "Объединяем передовые технологии с любовью к животным"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 364,
                    columnNumber: 236
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 364,
            columnNumber: 11
        }, this);
        $[43] = t35;
    } else {
        t35 = $[43];
    }
    let t36;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
            ref: featuresRef,
            initial: t31,
            whileInView: t32,
            viewport: t33,
            transition: t34,
            className: "py-32 bg-gradient-to-b from-white to-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6",
                children: [
                    t35,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
                        children: features.map(_HomeFeaturesMap)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 371,
                        columnNumber: 211
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 371,
                columnNumber: 166
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 371,
            columnNumber: 11
        }, this);
        $[44] = t36;
    } else {
        t36 = $[44];
    }
    let t37;
    let t38;
    let t39;
    let t40;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = {
            opacity: 0
        };
        t38 = {
            opacity: 1
        };
        t39 = {
            once: true
        };
        t40 = {
            duration: 0.8
        };
        $[45] = t37;
        $[46] = t38;
        $[47] = t39;
        $[48] = t40;
    } else {
        t37 = $[45];
        t38 = $[46];
        t39 = $[47];
        t40 = $[48];
    }
    let t41;
    let t42;
    let t43;
    let t44;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = {
            opacity: 0,
            x: -50
        };
        t42 = {
            opacity: 1,
            x: 0
        };
        t43 = {
            once: true
        };
        t44 = {
            duration: 0.8
        };
        $[49] = t41;
        $[50] = t42;
        $[51] = t43;
        $[52] = t44;
    } else {
        t41 = $[49];
        t42 = $[50];
        t43 = $[51];
        t44 = $[52];
    }
    let t45;
    let t46;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-4xl md:text-5xl font-bold mb-8 text-gray-900",
            children: [
                "Больше чем ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600",
                    children: "NFT"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 435,
                    columnNumber: 88
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 435,
            columnNumber: 11
        }, this);
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xl text-gray-600 mb-8 leading-relaxed",
            children: "PrettyPetts — это не просто платформа для создания цифрового искусства. Это движение, которое объединяет технологических энтузиастов, владельцев питомцев и благотворительные организации для создания лучшего будущего для животных по всему миру."
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 436,
            columnNumber: 11
        }, this);
        $[53] = t45;
        $[54] = t46;
    } else {
        t45 = $[53];
        t46 = $[54];
    }
    let t47;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start space-x-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl",
                        children: "💰"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 445,
                        columnNumber: 142
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 445,
                    columnNumber: 55
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-lg font-semibold text-gray-900 mb-2",
                            children: "Финансирование приютов"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 445,
                            columnNumber: 189
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Каждый NFT помогает реальным животным в приютах"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 445,
                            columnNumber: 273
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 445,
                    columnNumber: 184
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 445,
            columnNumber: 11
        }, this);
        $[55] = t47;
    } else {
        t47 = $[55];
    }
    let t48;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t41,
            whileInView: t42,
            viewport: t43,
            transition: t44,
            children: [
                t45,
                t46,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        t47,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start space-x-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl",
                                        children: "🌱"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 452,
                                        columnNumber: 258
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 452,
                                    columnNumber: 173
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-lg font-semibold text-gray-900 mb-2",
                                            children: "Экологичность"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 452,
                                            columnNumber: 305
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600",
                                            children: "Используем экологичные блокчейн-решения"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 452,
                                            columnNumber: 380
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 452,
                                    columnNumber: 300
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 452,
                            columnNumber: 129
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 452,
                    columnNumber: 97
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 452,
            columnNumber: 11
        }, this);
        $[56] = t48;
    } else {
        t48 = $[56];
    }
    let t49;
    let t50;
    let t51;
    let t52;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = {
            opacity: 0,
            x: 50
        };
        t50 = {
            opacity: 1,
            x: 0
        };
        t51 = {
            once: true
        };
        t52 = {
            duration: 0.8
        };
        $[57] = t49;
        $[58] = t50;
        $[59] = t51;
        $[60] = t52;
    } else {
        t49 = $[57];
        t50 = $[58];
        t51 = $[59];
        t52 = $[60];
    }
    let t53;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
            ref: missionRef,
            initial: t37,
            whileInView: t38,
            viewport: t39,
            transition: t40,
            className: "py-32 bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-2 gap-16 items-center",
                    children: [
                        t48,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: t49,
                            whileInView: t50,
                            viewport: t51,
                            transition: t52,
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-8xl mb-4",
                                                    children: "🐾"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 488,
                                                    columnNumber: 564
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700 font-medium",
                                                    children: "Цифровое наследие для каждого питомца"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 488,
                                                    columnNumber: 603
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 488,
                                            columnNumber: 535
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 488,
                                        columnNumber: 416
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 488,
                                    columnNumber: 334
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl -z-10"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 488,
                                    columnNumber: 703
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 488,
                            columnNumber: 237
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 488,
                    columnNumber: 175
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 488,
                columnNumber: 135
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 488,
            columnNumber: 11
        }, this);
        $[61] = t53;
    } else {
        t53 = $[61];
    }
    let t54;
    let t55;
    let t56;
    let t57;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t54 = {
            opacity: 0
        };
        t55 = {
            opacity: 1
        };
        t56 = {
            once: true
        };
        t57 = {
            duration: 0.8
        };
        $[62] = t54;
        $[63] = t55;
        $[64] = t56;
        $[65] = t57;
    } else {
        t54 = $[62];
        t55 = $[63];
        t56 = $[64];
        t57 = $[65];
    }
    let t58;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-6 text-gray-900",
                    children: [
                        "Наша ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600",
                            children: "команда"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 522,
                            columnNumber: 117
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 522,
                    columnNumber: 46
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-gray-600 max-w-2xl mx-auto",
                    children: "Профессионалы, объединённые любовью к животным и технологиям"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 522,
                    columnNumber: 229
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 522,
            columnNumber: 11
        }, this);
        $[66] = t58;
    } else {
        t58 = $[66];
    }
    let t59;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
            ref: teamRef,
            initial: t54,
            whileInView: t55,
            viewport: t56,
            transition: t57,
            className: "py-32 bg-gradient-to-b from-gray-50 to-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6",
                children: [
                    t58,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
                        children: team.map(_HomeTeamMap)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 529,
                        columnNumber: 207
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 529,
                columnNumber: 162
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 529,
            columnNumber: 11
        }, this);
        $[67] = t59;
    } else {
        t59 = $[67];
    }
    let t60;
    let t61;
    let t62;
    let t63;
    if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
        t60 = {
            opacity: 0
        };
        t61 = {
            opacity: 1
        };
        t62 = {
            once: true
        };
        t63 = {
            duration: 0.8
        };
        $[68] = t60;
        $[69] = t61;
        $[70] = t62;
        $[71] = t63;
    } else {
        t60 = $[68];
        t61 = $[69];
        t62 = $[70];
        t63 = $[71];
    }
    let t64;
    let t65;
    let t66;
    let t67;
    if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
        t64 = {
            scale: 0
        };
        t65 = {
            scale: 1
        };
        t66 = {
            once: true
        };
        t67 = {
            type: "spring",
            stiffness: 200
        };
        $[72] = t64;
        $[73] = t65;
        $[74] = t66;
        $[75] = t67;
    } else {
        t64 = $[72];
        t65 = $[73];
        t66 = $[74];
        t67 = $[75];
    }
    let t68;
    if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t64,
            whileInView: t65,
            viewport: t66,
            transition: t67,
            className: "text-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-4xl md:text-5xl font-bold mb-2",
                    children: "1,247+"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 591,
                    columnNumber: 110
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-white/90",
                    children: "В списке ожидания"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 591,
                    columnNumber: 175
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 591,
            columnNumber: 11
        }, this);
        $[76] = t68;
    } else {
        t68 = $[76];
    }
    let t69;
    let t70;
    let t71;
    let t72;
    if ($[77] === Symbol.for("react.memo_cache_sentinel")) {
        t69 = {
            scale: 0
        };
        t70 = {
            scale: 1
        };
        t71 = {
            once: true
        };
        t72 = {
            type: "spring",
            stiffness: 200,
            delay: 0.1
        };
        $[77] = t69;
        $[78] = t70;
        $[79] = t71;
        $[80] = t72;
    } else {
        t69 = $[77];
        t70 = $[78];
        t71 = $[79];
        t72 = $[80];
    }
    let t73;
    if ($[81] === Symbol.for("react.memo_cache_sentinel")) {
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t69,
            whileInView: t70,
            viewport: t71,
            transition: t72,
            className: "text-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-4xl md:text-5xl font-bold mb-2",
                    children: "5"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 627,
                    columnNumber: 110
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-white/90",
                    children: "Приютов-партнёров"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 627,
                    columnNumber: 170
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 627,
            columnNumber: 11
        }, this);
        $[81] = t73;
    } else {
        t73 = $[81];
    }
    let t74;
    let t75;
    let t76;
    let t77;
    if ($[82] === Symbol.for("react.memo_cache_sentinel")) {
        t74 = {
            scale: 0
        };
        t75 = {
            scale: 1
        };
        t76 = {
            once: true
        };
        t77 = {
            type: "spring",
            stiffness: 200,
            delay: 0.2
        };
        $[82] = t74;
        $[83] = t75;
        $[84] = t76;
        $[85] = t77;
    } else {
        t74 = $[82];
        t75 = $[83];
        t76 = $[84];
        t77 = $[85];
    }
    let t78;
    if ($[86] === Symbol.for("react.memo_cache_sentinel")) {
        t78 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t74,
            whileInView: t75,
            viewport: t76,
            transition: t77,
            className: "text-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-4xl md:text-5xl font-bold mb-2",
                    children: "30с"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 663,
                    columnNumber: 110
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-white/90",
                    children: "На генерацию NFT"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 663,
                    columnNumber: 172
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 663,
            columnNumber: 11
        }, this);
        $[86] = t78;
    } else {
        t78 = $[86];
    }
    let t79;
    let t80;
    let t81;
    let t82;
    if ($[87] === Symbol.for("react.memo_cache_sentinel")) {
        t79 = {
            scale: 0
        };
        t80 = {
            scale: 1
        };
        t81 = {
            once: true
        };
        t82 = {
            type: "spring",
            stiffness: 200,
            delay: 0.3
        };
        $[87] = t79;
        $[88] = t80;
        $[89] = t81;
        $[90] = t82;
    } else {
        t79 = $[87];
        t80 = $[88];
        t81 = $[89];
        t82 = $[90];
    }
    let t83;
    if ($[91] === Symbol.for("react.memo_cache_sentinel")) {
        t83 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
            initial: t60,
            whileInView: t61,
            viewport: t62,
            transition: t63,
            className: "py-20 bg-gradient-to-r from-purple-600 to-pink-600",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center",
                    children: [
                        t68,
                        t73,
                        t78,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: t79,
                            whileInView: t80,
                            viewport: t81,
                            transition: t82,
                            className: "text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-4xl md:text-5xl font-bold mb-2",
                                    children: "10%"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 699,
                                    columnNumber: 375
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-white/90",
                                    children: "В приюты животных"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 699,
                                    columnNumber: 437
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 699,
                            columnNumber: 276
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 699,
                    columnNumber: 194
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 699,
                columnNumber: 154
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 699,
            columnNumber: 11
        }, this);
        $[91] = t83;
    } else {
        t83 = $[91];
    }
    let t84;
    let t85;
    let t86;
    let t87;
    if ($[92] === Symbol.for("react.memo_cache_sentinel")) {
        t84 = {
            opacity: 0
        };
        t85 = {
            opacity: 1
        };
        t86 = {
            once: true
        };
        t87 = {
            duration: 0.8
        };
        $[92] = t84;
        $[93] = t85;
        $[94] = t86;
        $[95] = t87;
    } else {
        t84 = $[92];
        t85 = $[93];
        t86 = $[94];
        t87 = $[95];
    }
    let t88;
    let t89;
    let t90;
    let t91;
    if ($[96] === Symbol.for("react.memo_cache_sentinel")) {
        t88 = {
            y: 50,
            opacity: 0
        };
        t89 = {
            y: 0,
            opacity: 1
        };
        t90 = {
            once: true
        };
        t91 = {
            duration: 0.6
        };
        $[96] = t88;
        $[97] = t89;
        $[98] = t90;
        $[99] = t91;
    } else {
        t88 = $[96];
        t89 = $[97];
        t90 = $[98];
        t91 = $[99];
    }
    let t92;
    if ($[100] === Symbol.for("react.memo_cache_sentinel")) {
        t92 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t88,
            whileInView: t89,
            viewport: t90,
            transition: t91,
            className: "text-center mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-6 text-gray-900",
                    children: [
                        "Присоединяйтесь к ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600",
                            children: "будущему"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 762,
                            columnNumber: 201
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 762,
                    columnNumber: 117
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-gray-600 max-w-2xl mx-auto mb-8",
                    children: "Станьте частью революции в мире Web3 и помогите животным вместе с нами"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 762,
                    columnNumber: 314
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 762,
            columnNumber: 11
        }, this);
        $[100] = t92;
    } else {
        t92 = $[100];
    }
    let t93;
    let t94;
    let t95;
    let t96;
    if ($[101] === Symbol.for("react.memo_cache_sentinel")) {
        t93 = {
            y: 50,
            opacity: 0
        };
        t94 = {
            y: 0,
            opacity: 1
        };
        t95 = {
            once: true
        };
        t96 = {
            duration: 0.6,
            delay: 0.2
        };
        $[101] = t93;
        $[102] = t94;
        $[103] = t95;
        $[104] = t96;
    } else {
        t93 = $[101];
        t94 = $[102];
        t95 = $[103];
        t96 = $[104];
    }
    let t97;
    if ($[105] === Symbol.for("react.memo_cache_sentinel")) {
        t97 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
            ref: waitlistRef,
            initial: t84,
            whileInView: t85,
            viewport: t86,
            transition: t87,
            className: "py-32 bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-6",
                children: [
                    t92,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: t93,
                        whileInView: t94,
                        viewport: t95,
                        transition: t96,
                        className: "bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-8 md:p-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WaitlistForm, {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 799,
                            columnNumber: 344
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 799,
                        columnNumber: 181
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 799,
                columnNumber: 136
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 799,
            columnNumber: 11
        }, this);
        $[105] = t97;
    } else {
        t97 = $[105];
    }
    let t98;
    let t99;
    if ($[106] === Symbol.for("react.memo_cache_sentinel")) {
        t98 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-2 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 807,
                            columnNumber: 66
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xl font-semibold",
                            children: "PrettyPetts"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 807,
                            columnNumber: 152
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 807,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400",
                    children: "Объединяем технологии и любовь к животным для создания лучшего будущего"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 807,
                    columnNumber: 216
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 807,
            columnNumber: 11
        }, this);
        t99 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold mb-6",
            children: "Навигация"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 808,
            columnNumber: 11
        }, this);
        $[106] = t98;
        $[107] = t99;
    } else {
        t98 = $[106];
        t99 = $[107];
    }
    let t100;
    let t101;
    if ($[108] === Symbol.for("react.memo_cache_sentinel")) {
        t100 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t99,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-3 text-gray-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "Home[<button>.onClick]": ()=>scrollToSection(heroRef)
                                }["Home[<button>.onClick]"],
                                className: "hover:text-white transition-colors",
                                children: "Главная"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 818,
                                columnNumber: 66
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 818,
                            columnNumber: 62
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "Home[<button>.onClick]": ()=>scrollToSection(featuresRef)
                                }["Home[<button>.onClick]"],
                                className: "hover:text-white transition-colors",
                                children: "Технологии"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 820,
                                columnNumber: 112
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 820,
                            columnNumber: 108
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "Home[<button>.onClick]": ()=>scrollToSection(missionRef)
                                }["Home[<button>.onClick]"],
                                className: "hover:text-white transition-colors",
                                children: "Миссия"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 822,
                                columnNumber: 115
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 822,
                            columnNumber: 111
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "Home[<button>.onClick]": ()=>scrollToSection(teamRef)
                                }["Home[<button>.onClick]"],
                                className: "hover:text-white transition-colors",
                                children: "Команда"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 824,
                                columnNumber: 111
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 824,
                            columnNumber: 107
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 818,
                    columnNumber: 22
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 818,
            columnNumber: 12
        }, this);
        t101 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold mb-6",
            children: "Ресурсы"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 827,
            columnNumber: 12
        }, this);
        $[108] = t100;
        $[109] = t101;
    } else {
        t100 = $[108];
        t101 = $[109];
    }
    let t102;
    let t103;
    if ($[110] === Symbol.for("react.memo_cache_sentinel")) {
        t102 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t101,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-3 text-gray-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "hover:text-white transition-colors",
                                children: "Документация"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 837,
                                columnNumber: 67
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 837,
                            columnNumber: 63
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "hover:text-white transition-colors",
                                children: "Блог"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 837,
                                columnNumber: 151
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 837,
                            columnNumber: 147
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "hover:text-white transition-colors",
                                children: "ЧаВо"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 837,
                                columnNumber: 227
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 837,
                            columnNumber: 223
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "hover:text-white transition-colors",
                                children: "Контакты"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 837,
                                columnNumber: 303
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 837,
                            columnNumber: 299
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 837,
                    columnNumber: 23
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 837,
            columnNumber: 12
        }, this);
        t103 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold mb-6",
            children: "Сообщество"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 838,
            columnNumber: 12
        }, this);
        $[110] = t102;
        $[111] = t103;
    } else {
        t102 = $[110];
        t103 = $[111];
    }
    let t104;
    if ($[112] === Symbol.for("react.memo_cache_sentinel")) {
        t104 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-4 gap-12",
            children: [
                t98,
                t100,
                t102,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t103,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-3 text-gray-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "hover:text-white transition-colors",
                                        children: "Twitter"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 847,
                                        columnNumber: 128
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 847,
                                    columnNumber: 124
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "hover:text-white transition-colors",
                                        children: "Discord"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 847,
                                        columnNumber: 207
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 847,
                                    columnNumber: 203
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "hover:text-white transition-colors",
                                        children: "Instagram"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 847,
                                        columnNumber: 286
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 847,
                                    columnNumber: 282
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "hover:text-white transition-colors",
                                        children: "Telegram"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 847,
                                        columnNumber: 367
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 847,
                                    columnNumber: 363
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 847,
                            columnNumber: 84
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 847,
                    columnNumber: 73
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 847,
            columnNumber: 12
        }, this);
        $[112] = t104;
    } else {
        t104 = $[112];
    }
    let t105;
    if ($[113] === Symbol.for("react.memo_cache_sentinel")) {
        t105 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "bg-gray-900 text-white py-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6",
                children: [
                    t104,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-gray-800 mt-12 pt-8 text-center text-gray-400",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "© 2024 PrettyPetts. Все права защищены. Сделано с ❤️ для животных по всему миру."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 854,
                            columnNumber: 186
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 854,
                        columnNumber: 107
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 854,
                columnNumber: 61
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 854,
            columnNumber: 12
        }, this);
        $[113] = t105;
    } else {
        t105 = $[113];
    }
    let t106;
    if ($[114] !== t16 || $[115] !== t30) {
        t106 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative min-h-screen bg-white",
            children: [
                t16,
                t30,
                t36,
                t53,
                t59,
                t83,
                t97,
                t105
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 861,
            columnNumber: 12
        }, this);
        $[114] = t16;
        $[115] = t30;
        $[116] = t106;
    } else {
        t106 = $[116];
    }
    return t106;
}
_s(Home, "jMNvHnyPqZMCMAZILn1JT1GVb60=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = Home;
function _HomeTeamMap(member, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.6,
            delay: index_0 * 0.1
        },
        whileHover: {
            scale: 1.05
        },
        className: "bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-6xl mb-6 text-center",
                children: member.avatar
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 884,
                columnNumber: 97
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-bold text-center mb-2 text-gray-900",
                children: member.name
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 884,
                columnNumber: 161
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-purple-600 text-center font-medium mb-4",
                children: member.role
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 884,
                columnNumber: 244
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600 text-center",
                children: member.bio
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 884,
                columnNumber: 321
            }, this)
        ]
    }, index_0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 871,
        columnNumber: 10
    }, this);
}
function _HomeFeaturesMap(feature, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.6,
            delay: index * 0.1
        },
        whileHover: {
            y: -10
        },
        className: `bg-gradient-to-br ${feature.color} p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-4xl mb-6",
                children: feature.icon
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 900,
                columnNumber: 125
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-bold mb-4 text-gray-900",
                children: feature.title
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 900,
                columnNumber: 176
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-700",
                children: feature.description
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 900,
                columnNumber: 249
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 887,
        columnNumber: 10
    }, this);
}
function _HomeScrollToSection(ref) {
    ref.current?.scrollIntoView({
        behavior: "smooth"
    });
}
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_page_tsx_dda9881a._.js.map