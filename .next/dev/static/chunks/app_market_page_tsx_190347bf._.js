(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/market/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/market/page.tsx - ОБНОВЛЕННЫЙ КОД С НАВИГАЦИЕЙ
__turbopack_context__.s([
    "default",
    ()=>MarketPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// Цвета редкости - вынесены наружу компонента
const rarityColors = {
    common: 'bg-gray-100 text-gray-800',
    rare: 'bg-blue-100 text-blue-800',
    epic: 'bg-purple-100 text-purple-800',
    legendary: 'bg-amber-100 text-amber-800'
};
function MarketPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(60);
    if ($[0] !== "5769a19922fe23126953b18ff19de95de97b0bf132cb79455c689a72b3e7021d") {
        for(let $i = 0; $i < 60; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5769a19922fe23126953b18ff19de95de97b0bf132cb79455c689a72b3e7021d";
    }
    const [, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "MarketPage[useEffect()]": ()=>{
                const handleScroll = {
                    "MarketPage[useEffect() > handleScroll]": ()=>{
                        setIsScrolled(window.scrollY > 50);
                    }
                }["MarketPage[useEffect() > handleScroll]"];
                window.addEventListener("scroll", handleScroll);
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["MarketPage[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [
            {
                id: 1,
                name: "\u041F\u0443\u0448\u0438\u0441\u0442\u044B\u0439 \u0410\u0440\u0438\u0441\u0442\u043E\u043A\u0440\u0430\u0442",
                description: "\u042D\u043B\u0435\u0433\u0430\u043D\u0442\u043D\u044B\u0439 \u043C\u0435\u0439\u043D-\u043A\u0443\u043D \u0441 \u0438\u0437\u0443\u043C\u0440\u0443\u0434\u043D\u044B\u043C\u0438 \u0433\u043B\u0430\u0437\u0430\u043C\u0438",
                price: "0.5 ETH",
                owner: "@catlover42",
                category: "\u041A\u043E\u0448\u043A\u0438",
                emoji: "\uD83D\uDC08",
                gradient: "from-amber-100 to-orange-100",
                borderColor: "border-amber-300",
                rarity: "rare"
            },
            {
                id: 2,
                name: "\u0412\u0435\u0440\u043D\u044B\u0439 \u041A\u043E\u043C\u043F\u0430\u043D\u044C\u043E\u043D",
                description: "\u0417\u043E\u043B\u043E\u0442\u0438\u0441\u0442\u044B\u0439 \u0440\u0435\u0442\u0440\u0438\u0432\u0435\u0440 \u0441 \u0434\u043E\u0431\u0440\u044B\u043C \u0441\u0435\u0440\u0434\u0446\u0435\u043C",
                price: "0.8 ETH",
                owner: "@dogparadise",
                category: "\u0421\u043E\u0431\u0430\u043A\u0438",
                emoji: "\uD83D\uDC15",
                gradient: "from-yellow-100 to-amber-100",
                borderColor: "border-yellow-300",
                rarity: "epic"
            },
            {
                id: 3,
                name: "\u041D\u0435\u0431\u0435\u0441\u043D\u044B\u0439 \u041F\u0435\u0432\u0443\u043D",
                description: "\u041A\u0430\u043D\u0430\u0440\u0435\u0439\u043A\u0430 \u0441 \u0433\u043E\u043B\u043E\u0441\u043E\u043C \u0430\u043D\u0433\u0435\u043B\u0430",
                price: "0.3 ETH",
                owner: "@birdwatcher",
                category: "\u041F\u0442\u0438\u0446\u044B",
                emoji: "\uD83D\uDC26",
                gradient: "from-blue-100 to-cyan-100",
                borderColor: "border-blue-300",
                rarity: "common"
            },
            {
                id: 4,
                name: "\u041C\u043E\u0440\u0441\u043A\u043E\u0439 \u0418\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C",
                description: "\u041B\u044E\u0431\u043E\u043F\u044B\u0442\u043D\u044B\u0439 \u0430\u043A\u0432\u0430\u0440\u0438\u0443\u043C\u043D\u044B\u0439 \u0441\u043E\u043C",
                price: "0.4 ETH",
                owner: "@aquaworld",
                category: "\u0420\u044B\u0431\u044B",
                emoji: "\uD83D\uDC20",
                gradient: "from-cyan-100 to-teal-100",
                borderColor: "border-cyan-300",
                rarity: "rare"
            },
            {
                id: 5,
                name: "\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u043D\u043E\u0439 \u0417\u0430\u044F\u0446",
                description: "\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043A\u0440\u043E\u043B\u0438\u043A \u0441 \u0448\u0435\u043B\u043A\u043E\u0432\u0438\u0441\u0442\u043E\u0439 \u0448\u0435\u0440\u0441\u0442\u044C\u044E",
                price: "0.6 ETH",
                owner: "@bunnyfan",
                category: "\u0413\u0440\u044B\u0437\u0443\u043D\u044B",
                emoji: "\uD83D\uDC07",
                gradient: "from-purple-100 to-pink-100",
                borderColor: "border-purple-300",
                rarity: "legendary"
            },
            {
                id: 6,
                name: "\u041C\u0443\u0434\u0440\u0430\u044F \u0421\u043E\u0432\u0430",
                description: "\u041D\u043E\u0447\u043D\u0430\u044F \u043F\u0442\u0438\u0446\u0430 \u0441 \u0432\u0441\u0435\u0432\u0438\u0434\u044F\u0449\u0438\u043C \u0432\u0437\u0433\u043B\u044F\u0434\u043E\u043C",
                price: "1.2 ETH",
                owner: "@wisdomkeeper",
                category: "\u041F\u0442\u0438\u0446\u044B",
                emoji: "\uD83E\uDD89",
                gradient: "from-gray-100 to-slate-100",
                borderColor: "border-gray-300",
                rarity: "legendary"
            },
            {
                id: 7,
                name: "\u041A\u043E\u0440\u043E\u043B\u0435\u0432\u0441\u043A\u0438\u0439 \u041F\u0438\u0442\u043E\u043D",
                description: "\u0418\u0437\u044F\u0449\u043D\u0430\u044F \u0437\u043C\u0435\u044F \u0441 \u0443\u0437\u043E\u0440\u0447\u0430\u0442\u043E\u0439 \u043A\u043E\u0436\u0435\u0439",
                price: "0.9 ETH",
                owner: "@reptileking",
                category: "\u0420\u0435\u043F\u0442\u0438\u043B\u0438\u0438",
                emoji: "\uD83D\uDC0D",
                gradient: "from-emerald-100 to-green-100",
                borderColor: "border-emerald-300",
                rarity: "epic"
            },
            {
                id: 8,
                name: "\u041F\u0443\u0448\u0438\u0441\u0442\u044B\u0439 \u041A\u043E\u043C\u043E\u0447\u0435\u043A",
                description: "\u041C\u0438\u043D\u0438\u0430\u0442\u044E\u0440\u043D\u044B\u0439 \u0445\u043E\u043C\u044F\u043A \u0441 \u0449\u0435\u043A\u0430\u043C\u0438, \u043F\u043E\u043B\u043D\u044B\u043C\u0438 \u0441\u043E\u043A\u0440\u043E\u0432\u0438\u0449",
                price: "0.25 ETH",
                owner: "@tinyfriends",
                category: "\u0413\u0440\u044B\u0437\u0443\u043D\u044B",
                emoji: "\uD83D\uDC39",
                gradient: "from-rose-100 to-pink-100",
                borderColor: "border-rose-300",
                rarity: "common"
            }
        ];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const nfts = t2;
    let t3;
    if ($[4] !== activeFilter) {
        t3 = activeFilter === "all" ? nfts : nfts.filter({
            "MarketPage[nfts.filter()]": (nft)=>nft.category === activeFilter
        }["MarketPage[nfts.filter()]"]);
        $[4] = activeFilter;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const filteredNFTs = t3;
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [
            {
                id: "all",
                name: "\u0412\u0441\u0435",
                emoji: "\uD83C\uDF1F"
            },
            {
                id: "\u041A\u043E\u0448\u043A\u0438",
                name: "\u041A\u043E\u0448\u043A\u0438",
                emoji: "\uD83D\uDC08"
            },
            {
                id: "\u0421\u043E\u0431\u0430\u043A\u0438",
                name: "\u0421\u043E\u0431\u0430\u043A\u0438",
                emoji: "\uD83D\uDC15"
            },
            {
                id: "\u041F\u0442\u0438\u0446\u044B",
                name: "\u041F\u0442\u0438\u0446\u044B",
                emoji: "\uD83D\uDC26"
            },
            {
                id: "\u0420\u044B\u0431\u044B",
                name: "\u0420\u044B\u0431\u044B",
                emoji: "\uD83D\uDC20"
            },
            {
                id: "\u0413\u0440\u044B\u0437\u0443\u043D\u044B",
                name: "\u0413\u0440\u044B\u0437\u0443\u043D\u044B",
                emoji: "\uD83D\uDC39"
            }
        ];
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const categories = t4;
    const getCategoryEmoji = _MarketPageGetCategoryEmoji;
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 pointer-events-none overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-purple-100 rounded-full blur-[120px] opacity-20"
                }, void 0, false, {
                    fileName: "[project]/app/market/page.tsx",
                    lineNumber: 205,
                    columnNumber: 77
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-cyan-100 rounded-full blur-[120px] opacity-20"
                }, void 0, false, {
                    fileName: "[project]/app/market/page.tsx",
                    lineNumber: 205,
                    columnNumber: 194
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 205,
            columnNumber: 10
        }, this);
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    let t7;
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            y: -100,
            opacity: 0
        };
        t7 = {
            y: 0,
            opacity: 1
        };
        t8 = {
            duration: 0.6
        };
        $[8] = t6;
        $[9] = t7;
        $[10] = t8;
    } else {
        t6 = $[8];
        t7 = $[9];
        t8 = $[10];
    }
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            scale: 1.05
        };
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "flex items-center space-x-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                whileHover: t9,
                className: "flex items-center space-x-2 cursor-pointer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-20 h-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/logo.png",
                            alt: "PrettyPetts Logo",
                            fill: true,
                            className: "object-contain",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/app/market/page.tsx",
                            lineNumber: 244,
                            columnNumber: 185
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/market/page.tsx",
                        lineNumber: 244,
                        columnNumber: 149
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-lg font-bold text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/market/page.tsx",
                        lineNumber: 244,
                        columnNumber: 294
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/market/page.tsx",
                lineNumber: 244,
                columnNumber: 66
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = [
            {
                label: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438",
                href: "/#features"
            },
            {
                label: "\u041C\u0438\u0441\u0441\u0438\u044F",
                href: "/#mission"
            },
            {
                label: "Marketplace",
                href: "/market"
            }
        ].map(_MarketPageAnonymous);
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            scale: 1.05
        };
        t13 = {
            scale: 0.95
        };
        $[14] = t12;
        $[15] = t13;
    } else {
        t12 = $[14];
        t13 = $[15];
    }
    let t14;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:flex items-center space-x-8",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/#waitlist",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: t12,
                        whileTap: t13,
                        className: "relative px-6 py-2.5 rounded-full text-sm font-medium overflow-hidden group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:from-purple-700 group-hover:to-pink-700 transition-all duration-300"
                            }, void 0, false, {
                                fileName: "[project]/app/market/page.tsx",
                                lineNumber: 282,
                                columnNumber: 230
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative text-white",
                                children: "Присоединиться"
                            }, void 0, false, {
                                fileName: "[project]/app/market/page.tsx",
                                lineNumber: 282,
                                columnNumber: 392
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/market/page.tsx",
                        lineNumber: 282,
                        columnNumber: 95
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/market/page.tsx",
                    lineNumber: 282,
                    columnNumber: 71
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 282,
            columnNumber: 11
        }, this);
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    let t15;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
            initial: t6,
            animate: t7,
            transition: t8,
            className: "fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl shadow-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        t10,
                        t14,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "md:hidden text-gray-600",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M4 6h16M4 12h16M4 18h16"
                                }, void 0, false, {
                                    fileName: "[project]/app/market/page.tsx",
                                    lineNumber: 289,
                                    columnNumber: 393
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/market/page.tsx",
                                lineNumber: 289,
                                columnNumber: 314
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/market/page.tsx",
                            lineNumber: 289,
                            columnNumber: 270
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/market/page.tsx",
                    lineNumber: 289,
                    columnNumber: 209
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/market/page.tsx",
                lineNumber: 289,
                columnNumber: 148
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[17] = t15;
    } else {
        t15 = $[17];
    }
    let t16;
    let t17;
    let t18;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = {
            opacity: 0,
            y: 20
        };
        t17 = {
            opacity: 1,
            y: 0
        };
        t18 = {
            duration: 0.6
        };
        $[18] = t16;
        $[19] = t17;
        $[20] = t18;
    } else {
        t16 = $[18];
        t17 = $[19];
        t18 = $[20];
    }
    let t19;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-medium text-gradient bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",
                children: "NFT MARKETPLACE"
            }, void 0, false, {
                fileName: "[project]/app/market/page.tsx",
                lineNumber: 319,
                columnNumber: 141
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        $[21] = t19;
    } else {
        t19 = $[21];
    }
    let t20;
    let t21;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-4xl md:text-6xl font-bold mb-6 text-gray-900",
            children: [
                "Коллекция",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600",
                    children: "цифровых питомцев"
                }, void 0, false, {
                    fileName: "[project]/app/market/page.tsx",
                    lineNumber: 327,
                    columnNumber: 91
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 327,
            columnNumber: 11
        }, this);
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xl text-gray-600 max-w-3xl mx-auto mb-8",
            children: "Исследуйте уникальные NFT, созданные с любовью и заботой. Каждая покупка помогает животным в приютах."
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 328,
            columnNumber: 11
        }, this);
        $[22] = t20;
        $[23] = t21;
    } else {
        t20 = $[22];
        t21 = $[23];
    }
    let t22;
    let t23;
    let t24;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = {
            scale: 0.9,
            opacity: 0
        };
        t23 = {
            scale: 1,
            opacity: 1
        };
        t24 = {
            delay: 0.3,
            type: "spring"
        };
        $[24] = t22;
        $[25] = t23;
        $[26] = t24;
    } else {
        t22 = $[24];
        t23 = $[25];
        t24 = $[26];
    }
    let t25;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t16,
            animate: t17,
            transition: t18,
            className: "text-center mb-12",
            children: [
                t19,
                t20,
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: t22,
                    animate: t23,
                    transition: t24,
                    className: "inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-white tracking-wider",
                            children: "IN DEVELOPMENT"
                        }, void 0, false, {
                            fileName: "[project]/app/market/page.tsx",
                            lineNumber: 361,
                            columnNumber: 268
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-amber-100 text-sm mt-2",
                            children: "Скоро будет доступна полная функциональность"
                        }, void 0, false, {
                            fileName: "[project]/app/market/page.tsx",
                            lineNumber: 361,
                            columnNumber: 348
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/market/page.tsx",
                    lineNumber: 361,
                    columnNumber: 113
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 361,
            columnNumber: 11
        }, this);
        $[27] = t25;
    } else {
        t25 = $[27];
    }
    let t26;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto",
            children: [
                {
                    value: "124",
                    label: "NFT \u043F\u0440\u043E\u0434\u0430\u043D\u043E",
                    color: "from-purple-500 to-pink-500"
                },
                {
                    value: "48",
                    label: "\u0410\u0432\u0442\u043E\u0440\u043E\u0432",
                    color: "from-cyan-500 to-blue-500"
                },
                {
                    value: "1.2K",
                    label: "ETH \u0441\u043E\u0431\u0440\u0430\u043D\u043E",
                    color: "from-emerald-500 to-teal-500"
                },
                {
                    value: "6",
                    label: "\u041F\u0440\u0438\u044E\u0442\u043E\u0432 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043D\u043E",
                    color: "from-amber-500 to-orange-500"
                }
            ].map(_MarketPageAnonymous2)
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 368,
            columnNumber: 11
        }, this);
        $[28] = t26;
    } else {
        t26 = $[28];
    }
    let t27;
    if ($[29] !== activeFilter) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap justify-center gap-3 mb-12",
            children: categories.map({
                "MarketPage[categories.map()]": (category_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        onClick: {
                            "MarketPage[categories.map() > <motion.button>.onClick]": ()=>setActiveFilter(category_0.id)
                        }["MarketPage[categories.map() > <motion.button>.onClick]"],
                        className: `flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all ${activeFilter === category_0.id ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg",
                                children: category_0.emoji
                            }, void 0, false, {
                                fileName: "[project]/app/market/page.tsx",
                                lineNumber: 398,
                                columnNumber: 318
                            }, this),
                            category_0.name
                        ]
                    }, category_0.id, true, {
                        fileName: "[project]/app/market/page.tsx",
                        lineNumber: 392,
                        columnNumber: 55
                    }, this)
            }["MarketPage[categories.map()]"])
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 391,
            columnNumber: 11
        }, this);
        $[29] = activeFilter;
        $[30] = t27;
    } else {
        t27 = $[30];
    }
    let t28;
    if ($[31] !== filteredNFTs) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
            children: filteredNFTs.map({
                "MarketPage[filteredNFTs.map()]": (nft_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NFTCard, {
                        nft: nft_0,
                        getCategoryEmoji: getCategoryEmoji
                    }, nft_0.id, false, {
                        fileName: "[project]/app/market/page.tsx",
                        lineNumber: 408,
                        columnNumber: 52
                    }, this)
            }["MarketPage[filteredNFTs.map()]"])
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 407,
            columnNumber: 11
        }, this);
        $[31] = filteredNFTs;
        $[32] = t28;
    } else {
        t28 = $[32];
    }
    let t29;
    let t30;
    let t31;
    let t32;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = {
            opacity: 0,
            y: 40
        };
        t30 = {
            opacity: 1,
            y: 0
        };
        t31 = {
            once: true
        };
        t32 = {
            duration: 0.8
        };
        $[33] = t29;
        $[34] = t30;
        $[35] = t31;
        $[36] = t32;
    } else {
        t29 = $[33];
        t30 = $[34];
        t31 = $[35];
        t32 = $[36];
    }
    let t33;
    let t34;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-gray-900 mb-4",
            children: "Как работает наш маркетплейс?"
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 447,
            columnNumber: 11
        }, this);
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-600 mb-6",
            children: "Каждый NFT создаётся с помощью нашего ИИ на основе реальных фотографий питомцев. При покупке 10% от суммы автоматически перечисляется выбранному вами приюту для животных. Вы не только приобретаете уникальное цифровое искусство, но и делаете доброе дело."
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 448,
            columnNumber: 11
        }, this);
        $[37] = t33;
        $[38] = t34;
    } else {
        t33 = $[37];
        t34 = $[38];
    }
    let t35;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-3 h-3 rounded-full bg-green-500"
                }, void 0, false, {
                    fileName: "[project]/app/market/page.tsx",
                    lineNumber: 457,
                    columnNumber: 52
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-gray-700",
                    children: "Экологичный блокчейн"
                }, void 0, false, {
                    fileName: "[project]/app/market/page.tsx",
                    lineNumber: 457,
                    columnNumber: 105
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 457,
            columnNumber: 11
        }, this);
        $[39] = t35;
    } else {
        t35 = $[39];
    }
    let t36;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-3 h-3 rounded-full bg-blue-500"
                }, void 0, false, {
                    fileName: "[project]/app/market/page.tsx",
                    lineNumber: 464,
                    columnNumber: 52
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-gray-700",
                    children: "Автоматические пожертвования"
                }, void 0, false, {
                    fileName: "[project]/app/market/page.tsx",
                    lineNumber: 464,
                    columnNumber: 104
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 464,
            columnNumber: 11
        }, this);
        $[40] = t36;
    } else {
        t36 = $[40];
    }
    let t37;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t29,
            whileInView: t30,
            viewport: t31,
            transition: t32,
            className: "mt-24 p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-3xl mx-auto text-center",
                children: [
                    t33,
                    t34,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-center gap-4",
                        children: [
                            t35,
                            t36,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 rounded-full bg-purple-500"
                                    }, void 0, false, {
                                        fileName: "[project]/app/market/page.tsx",
                                        lineNumber: 471,
                                        columnNumber: 355
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-700",
                                        children: "Уникальные 3D модели"
                                    }, void 0, false, {
                                        fileName: "[project]/app/market/page.tsx",
                                        lineNumber: 471,
                                        columnNumber: 409
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/market/page.tsx",
                                lineNumber: 471,
                                columnNumber: 314
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/market/page.tsx",
                        lineNumber: 471,
                        columnNumber: 251
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/market/page.tsx",
                lineNumber: 471,
                columnNumber: 194
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 471,
            columnNumber: 11
        }, this);
        $[41] = t37;
    } else {
        t37 = $[41];
    }
    let t38;
    let t39;
    let t40;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = {
            opacity: 0
        };
        t39 = {
            opacity: 1
        };
        t40 = {
            once: true
        };
        $[42] = t38;
        $[43] = t39;
        $[44] = t40;
    } else {
        t38 = $[42];
        t39 = $[43];
        t40 = $[44];
    }
    let t41;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-gray-900 mb-6",
            children: "Хотите создать NFT своего питомца?"
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 499,
            columnNumber: 11
        }, this);
        $[45] = t41;
    } else {
        t41 = $[45];
    }
    let t42;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t38,
            whileInView: t39,
            viewport: t40,
            className: "mt-20 text-center",
            children: [
                t41,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row gap-4 justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                whileHover: {
                                    scale: 1.05
                                },
                                whileTap: {
                                    scale: 0.95
                                },
                                className: "px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:shadow-lg transition-shadow",
                                children: "Присоединиться к листу ожидания"
                            }, void 0, false, {
                                fileName: "[project]/app/market/page.tsx",
                                lineNumber: 506,
                                columnNumber: 184
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/market/page.tsx",
                            lineNumber: 506,
                            columnNumber: 169
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:border-gray-400 hover:bg-gray-50 transition-colors",
                            children: "Узнать больше о процессе"
                        }, void 0, false, {
                            fileName: "[project]/app/market/page.tsx",
                            lineNumber: 510,
                            columnNumber: 205
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/market/page.tsx",
                    lineNumber: 506,
                    columnNumber: 105
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 506,
            columnNumber: 11
        }, this);
        $[46] = t42;
    } else {
        t42 = $[46];
    }
    let t43;
    if ($[47] !== t27 || $[48] !== t28) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative pt-28 pb-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    t25,
                    t26,
                    t27,
                    t28,
                    t37,
                    t42
                ]
            }, void 0, true, {
                fileName: "[project]/app/market/page.tsx",
                lineNumber: 517,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 517,
            columnNumber: 11
        }, this);
        $[47] = t27;
        $[48] = t28;
        $[49] = t43;
    } else {
        t43 = $[49];
    }
    let t44;
    let t45;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-2 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white text-sm font-bold",
                                children: "P"
                            }, void 0, false, {
                                fileName: "[project]/app/market/page.tsx",
                                lineNumber: 527,
                                columnNumber: 183
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/market/page.tsx",
                            lineNumber: 527,
                            columnNumber: 66
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xl font-semibold",
                            children: "PrettyPetts"
                        }, void 0, false, {
                            fileName: "[project]/app/market/page.tsx",
                            lineNumber: 527,
                            columnNumber: 244
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/market/page.tsx",
                    lineNumber: 527,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 leading-relaxed",
                    children: "Маркетплейс цифровых питомцев. Объединяем искусство, технологии и благотворительность."
                }, void 0, false, {
                    fileName: "[project]/app/market/page.tsx",
                    lineNumber: 527,
                    columnNumber: 308
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 527,
            columnNumber: 11
        }, this);
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold mb-6 text-gray-200",
            children: "Навигация"
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 528,
            columnNumber: 11
        }, this);
        $[50] = t44;
        $[51] = t45;
    } else {
        t44 = $[50];
        t45 = $[51];
    }
    let t46;
    let t47;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t45,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "text-gray-400 hover:text-white transition-colors duration-300 hover:pl-2 block",
                                children: "Главная"
                            }, void 0, false, {
                                fileName: "[project]/app/market/page.tsx",
                                lineNumber: 538,
                                columnNumber: 51
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/market/page.tsx",
                            lineNumber: 538,
                            columnNumber: 47
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#features",
                                className: "text-gray-400 hover:text-white transition-colors duration-300 hover:pl-2 block",
                                children: "Технологии"
                            }, void 0, false, {
                                fileName: "[project]/app/market/page.tsx",
                                lineNumber: 538,
                                columnNumber: 180
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/market/page.tsx",
                            lineNumber: 538,
                            columnNumber: 176
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#mission",
                                className: "text-gray-400 hover:text-white transition-colors duration-300 hover:pl-2 block",
                                children: "Миссия"
                            }, void 0, false, {
                                fileName: "[project]/app/market/page.tsx",
                                lineNumber: 538,
                                columnNumber: 321
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/market/page.tsx",
                            lineNumber: 538,
                            columnNumber: 317
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/market",
                                className: "text-gray-400 hover:text-white transition-colors duration-300 hover:pl-2 block",
                                children: "Marketplace"
                            }, void 0, false, {
                                fileName: "[project]/app/market/page.tsx",
                                lineNumber: 538,
                                columnNumber: 457
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/market/page.tsx",
                            lineNumber: 538,
                            columnNumber: 453
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/market/page.tsx",
                    lineNumber: 538,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 538,
            columnNumber: 11
        }, this);
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold mb-6 text-gray-200",
            children: "Ресурсы"
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 539,
            columnNumber: 11
        }, this);
        $[52] = t46;
        $[53] = t47;
    } else {
        t46 = $[52];
        t47 = $[53];
    }
    let t48;
    let t49;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t47,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-3",
                    children: [
                        "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F",
                        "\u0411\u043B\u043E\u0433",
                        "\u0427\u0430\u0412\u043E",
                        "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
                    ].map(_MarketPageAnonymous3)
                }, void 0, false, {
                    fileName: "[project]/app/market/page.tsx",
                    lineNumber: 549,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 549,
            columnNumber: 11
        }, this);
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold mb-6 text-gray-200",
            children: "Сообщество"
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 550,
            columnNumber: 11
        }, this);
        $[54] = t48;
        $[55] = t49;
    } else {
        t48 = $[54];
        t49 = $[55];
    }
    let t50;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-4 gap-12 mb-12",
            children: [
                t44,
                t46,
                t48,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t49,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-3",
                            children: [
                                "Twitter",
                                "Discord",
                                "Instagram",
                                "Telegram"
                            ].map(_MarketPageAnonymous4)
                        }, void 0, false, {
                            fileName: "[project]/app/market/page.tsx",
                            lineNumber: 559,
                            columnNumber: 86
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/market/page.tsx",
                    lineNumber: 559,
                    columnNumber: 76
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 559,
            columnNumber: 11
        }, this);
        $[56] = t50;
    } else {
        t50 = $[56];
    }
    let t51;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "mt-20 bg-gray-900 text-white pt-16 pb-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    t50,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-gray-800 pt-8 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400",
                            children: "© 2024 PrettyPetts Marketplace. Все права защищены. IN DEVELOPMENT."
                        }, void 0, false, {
                            fileName: "[project]/app/market/page.tsx",
                            lineNumber: 566,
                            columnNumber: 191
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/market/page.tsx",
                        lineNumber: 566,
                        columnNumber: 132
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/market/page.tsx",
                lineNumber: 566,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 566,
            columnNumber: 11
        }, this);
        $[57] = t51;
    } else {
        t51 = $[57];
    }
    let t52;
    if ($[58] !== t43) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative min-h-screen bg-white overflow-x-hidden",
            children: [
                t5,
                t15,
                t43,
                t51
            ]
        }, void 0, true, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 573,
            columnNumber: 11
        }, this);
        $[58] = t43;
        $[59] = t52;
    } else {
        t52 = $[59];
    }
    return t52;
}
_s(MarketPage, "DwGzsmBQD+MftbeKHI8UnJZPu0Q=");
_c = MarketPage;
// Компонент NFT карточки с 3D-анимацией (без изменений)
function _MarketPageAnonymous4(item_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#",
            className: "text-gray-400 hover:text-white transition-colors duration-300 hover:pl-2 block",
            children: item_1
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 584,
            columnNumber: 27
        }, this)
    }, item_1, false, {
        fileName: "[project]/app/market/page.tsx",
        lineNumber: 584,
        columnNumber: 10
    }, this);
}
function _MarketPageAnonymous3(item_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#",
            className: "text-gray-400 hover:text-white transition-colors duration-300 hover:pl-2 block",
            children: item_0
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 587,
            columnNumber: 27
        }, this)
    }, item_0, false, {
        fileName: "[project]/app/market/page.tsx",
        lineNumber: 587,
        columnNumber: 10
    }, this);
}
function _MarketPageAnonymous2(stat, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            delay: 0.1 * index
        },
        className: "bg-white rounded-2xl p-6 shadow-lg border border-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`,
                children: stat.value
            }, void 0, false, {
                fileName: "[project]/app/market/page.tsx",
                lineNumber: 598,
                columnNumber: 76
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-600 text-sm mt-2",
                children: stat.label
            }, void 0, false, {
                fileName: "[project]/app/market/page.tsx",
                lineNumber: 598,
                columnNumber: 193
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/app/market/page.tsx",
        lineNumber: 590,
        columnNumber: 10
    }, this);
}
function _MarketPageAnonymous(item) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: item.href,
        className: "text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors relative group",
        children: [
            item.label,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"
            }, void 0, false, {
                fileName: "[project]/app/market/page.tsx",
                lineNumber: 601,
                columnNumber: 161
            }, this)
        ]
    }, item.label, true, {
        fileName: "[project]/app/market/page.tsx",
        lineNumber: 601,
        columnNumber: 10
    }, this);
}
function _MarketPageGetCategoryEmoji(category) {
    const emojiMap = {
        "\u041A\u043E\u0448\u043A\u0438": "\uD83D\uDC08",
        "\u0421\u043E\u0431\u0430\u043A\u0438": "\uD83D\uDC15",
        "\u041F\u0442\u0438\u0446\u044B": "\uD83D\uDC26",
        "\u0420\u044B\u0431\u044B": "\uD83D\uDC20",
        "\u0413\u0440\u044B\u0437\u0443\u043D\u044B": "\uD83D\uDC39",
        "\u0420\u0435\u043F\u0442\u0438\u043B\u0438\u0438": "\uD83D\uDC0D"
    };
    return emojiMap[category] || "\uD83D\uDC3E";
}
function NFTCard(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(68);
    if ($[0] !== "5769a19922fe23126953b18ff19de95de97b0bf132cb79455c689a72b3e7021d") {
        for(let $i = 0; $i < 68; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5769a19922fe23126953b18ff19de95de97b0bf132cb79455c689a72b3e7021d";
    }
    const { nft, getCategoryEmoji } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            x: 0,
            y: 0
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "NFTCard[handleMouseMove]": (e)=>{
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
                const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
                setMousePosition({
                    x,
                    y
                });
            }
        })["NFTCard[handleMouseMove]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const handleMouseMove = t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            opacity: 0,
            y: 20
        };
        t4 = {
            opacity: 1,
            y: 0
        };
        t5 = {
            once: true
        };
        t6 = {
            duration: 0.5
        };
        $[3] = t3;
        $[4] = t4;
        $[5] = t5;
        $[6] = t6;
    } else {
        t3 = $[3];
        t4 = $[4];
        t5 = $[5];
        t6 = $[6];
    }
    let t7;
    let t8;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "NFTCard[<motion.div>.onMouseEnter]": ()=>setIsHovered(true)
        })["NFTCard[<motion.div>.onMouseEnter]"];
        t8 = ({
            "NFTCard[<motion.div>.onMouseLeave]": ()=>{
                setIsHovered(false);
                setMousePosition({
                    x: 0,
                    y: 0
                });
            }
        })["NFTCard[<motion.div>.onMouseLeave]"];
        $[7] = t7;
        $[8] = t8;
    } else {
        t7 = $[7];
        t8 = $[8];
    }
    const t9 = isHovered ? mousePosition.x : 0;
    const t10 = isHovered ? mousePosition.y : 0;
    const t11 = isHovered ? -8 : 0;
    const t12 = isHovered ? 1.02 : 1;
    let t13;
    if ($[9] !== t10 || $[10] !== t11 || $[11] !== t12 || $[12] !== t9) {
        t13 = {
            rotateY: t9,
            rotateX: t10,
            y: t11,
            scale: t12
        };
        $[9] = t10;
        $[10] = t11;
        $[11] = t12;
        $[12] = t9;
        $[13] = t13;
    } else {
        t13 = $[13];
    }
    let t14;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = {
            type: "spring",
            stiffness: 300,
            damping: 20
        };
        $[14] = t14;
    } else {
        t14 = $[14];
    }
    const t15 = `relative bg-gradient-to-br ${nft.gradient} border-2 ${nft.borderColor} rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden cursor-pointer`;
    let t16;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = {
            transformStyle: "preserve-3d",
            transformOrigin: "center center"
        };
        $[15] = t16;
    } else {
        t16 = $[15];
    }
    const t17 = `px-3 py-1 rounded-full text-xs font-bold ${rarityColors[nft.rarity]}`;
    let t18;
    if ($[16] !== nft.rarity) {
        t18 = nft.rarity.toUpperCase();
        $[16] = nft.rarity;
        $[17] = t18;
    } else {
        t18 = $[17];
    }
    let t19;
    if ($[18] !== t17 || $[19] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-4 right-4 z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: t17,
                children: t18
            }, void 0, false, {
                fileName: "[project]/app/market/page.tsx",
                lineNumber: 759,
                columnNumber: 56
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 759,
            columnNumber: 11
        }, this);
        $[18] = t17;
        $[19] = t18;
        $[20] = t19;
    } else {
        t19 = $[20];
    }
    let t20;
    if ($[21] !== nft.emoji) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-24 h-24 mx-auto bg-white/30 rounded-2xl flex items-center justify-center backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-5xl",
                    children: nft.emoji
                }, void 0, false, {
                    fileName: "[project]/app/market/page.tsx",
                    lineNumber: 768,
                    columnNumber: 156
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/market/page.tsx",
                lineNumber: 768,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 768,
            columnNumber: 11
        }, this);
        $[21] = nft.emoji;
        $[22] = t20;
    } else {
        t20 = $[22];
    }
    let t21;
    if ($[23] !== nft.name) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl font-bold text-gray-900 mb-2",
            children: nft.name
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 776,
            columnNumber: 11
        }, this);
        $[23] = nft.name;
        $[24] = t21;
    } else {
        t21 = $[24];
    }
    let t22;
    if ($[25] !== nft.description) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-600 text-sm mb-4 line-clamp-2",
            children: nft.description
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 784,
            columnNumber: 11
        }, this);
        $[25] = nft.description;
        $[26] = t22;
    } else {
        t22 = $[26];
    }
    let t23;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-gray-500",
            children: "Цена"
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 792,
            columnNumber: 11
        }, this);
        $[27] = t23;
    } else {
        t23 = $[27];
    }
    let t24;
    if ($[28] !== nft.price) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-lg font-bold text-gray-900",
                    children: nft.price
                }, void 0, false, {
                    fileName: "[project]/app/market/page.tsx",
                    lineNumber: 799,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 799,
            columnNumber: 11
        }, this);
        $[28] = nft.price;
        $[29] = t24;
    } else {
        t24 = $[29];
    }
    let t25;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-gray-500",
            children: "Владелец"
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 807,
            columnNumber: 11
        }, this);
        $[30] = t25;
    } else {
        t25 = $[30];
    }
    let t26;
    if ($[31] !== nft.owner) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-right",
            children: [
                t25,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm font-medium text-purple-600",
                    children: nft.owner
                }, void 0, false, {
                    fileName: "[project]/app/market/page.tsx",
                    lineNumber: 814,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 814,
            columnNumber: 11
        }, this);
        $[31] = nft.owner;
        $[32] = t26;
    } else {
        t26 = $[32];
    }
    let t27;
    if ($[33] !== t24 || $[34] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-4",
            children: [
                t24,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 822,
            columnNumber: 11
        }, this);
        $[33] = t24;
        $[34] = t26;
        $[35] = t27;
    } else {
        t27 = $[35];
    }
    let t28;
    if ($[36] !== getCategoryEmoji || $[37] !== nft.category) {
        t28 = getCategoryEmoji(nft.category);
        $[36] = getCategoryEmoji;
        $[37] = nft.category;
        $[38] = t28;
    } else {
        t28 = $[38];
    }
    let t29;
    if ($[39] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm",
            children: t28
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 840,
            columnNumber: 11
        }, this);
        $[39] = t28;
        $[40] = t29;
    } else {
        t29 = $[40];
    }
    let t30;
    if ($[41] !== nft.category) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-700",
            children: nft.category
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 848,
            columnNumber: 11
        }, this);
        $[41] = nft.category;
        $[42] = t30;
    } else {
        t30 = $[42];
    }
    let t31;
    if ($[43] !== t29 || $[44] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex items-center gap-2 px-3 py-1.5 bg-white/50 rounded-full",
            children: [
                t29,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 856,
            columnNumber: 11
        }, this);
        $[43] = t29;
        $[44] = t30;
        $[45] = t31;
    } else {
        t31 = $[45];
    }
    let t32;
    if ($[46] !== t21 || $[47] !== t22 || $[48] !== t27 || $[49] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10",
            children: [
                t21,
                t22,
                t27,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 865,
            columnNumber: 11
        }, this);
        $[46] = t21;
        $[47] = t22;
        $[48] = t27;
        $[49] = t31;
        $[50] = t32;
    } else {
        t32 = $[50];
    }
    let t33;
    let t34;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            whileHover: {
                scale: 1.05
            },
            whileTap: {
                scale: 0.95
            },
            className: "w-full mt-6 py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white font-medium rounded-xl hover:shadow-lg transition-shadow relative z-10",
            children: "Купить сейчас"
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 877,
            columnNumber: 11
        }, this);
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/5 group-hover:via-white/10 group-hover:to-white/5 transition-all duration-300 rounded-3xl"
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 882,
            columnNumber: 11
        }, this);
        $[51] = t33;
        $[52] = t34;
    } else {
        t33 = $[51];
        t34 = $[52];
    }
    let t35;
    if ($[53] !== isHovered) {
        t35 = isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scale: 0,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 0.3
                    },
                    transition: {
                        delay: 0.1
                    },
                    className: "absolute top-1/4 left-1/4 w-4 h-4 bg-purple-300 rounded-full blur-sm"
                }, void 0, false, {
                    fileName: "[project]/app/market/page.tsx",
                    lineNumber: 891,
                    columnNumber: 26
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scale: 0,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 0.3
                    },
                    transition: {
                        delay: 0.2
                    },
                    className: "absolute top-1/3 right-1/4 w-3 h-3 bg-pink-300 rounded-full blur-sm"
                }, void 0, false, {
                    fileName: "[project]/app/market/page.tsx",
                    lineNumber: 899,
                    columnNumber: 93
                }, this)
            ]
        }, void 0, true);
        $[53] = isHovered;
        $[54] = t35;
    } else {
        t35 = $[54];
    }
    let t36;
    if ($[55] !== t13 || $[56] !== t15 || $[57] !== t19 || $[58] !== t20 || $[59] !== t32 || $[60] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            animate: t13,
            transition: t14,
            className: t15,
            style: t16,
            children: [
                t19,
                t20,
                t32,
                t33,
                t34,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 915,
            columnNumber: 11
        }, this);
        $[55] = t13;
        $[56] = t15;
        $[57] = t19;
        $[58] = t20;
        $[59] = t32;
        $[60] = t35;
        $[61] = t36;
    } else {
        t36 = $[61];
    }
    const t37 = isHovered ? 0.95 : 1;
    const t38 = isHovered ? 0.8 : 0;
    let t39;
    if ($[62] !== t37 || $[63] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            animate: {
                scale: t37,
                opacity: t38
            },
            className: "absolute inset-0 bg-gray-900/20 blur-xl rounded-3xl -z-10"
        }, void 0, false, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 930,
            columnNumber: 11
        }, this);
        $[62] = t37;
        $[63] = t38;
        $[64] = t39;
    } else {
        t39 = $[64];
    }
    let t40;
    if ($[65] !== t36 || $[66] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t3,
            whileInView: t4,
            viewport: t5,
            transition: t6,
            className: "relative group",
            onMouseEnter: t7,
            onMouseLeave: t8,
            onMouseMove: handleMouseMove,
            children: [
                t36,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/app/market/page.tsx",
            lineNumber: 942,
            columnNumber: 11
        }, this);
        $[65] = t36;
        $[66] = t39;
        $[67] = t40;
    } else {
        t40 = $[67];
    }
    return t40;
}
_s1(NFTCard, "FCO9xQeRgB/wiDyUMhFX9U4QeMU=");
_c1 = NFTCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "MarketPage");
__turbopack_context__.k.register(_c1, "NFTCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_market_page_tsx_190347bf._.js.map