(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/WaitlistForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/components/WaitlistForm.tsx
__turbopack_context__.s([
    "default",
    ()=>WaitlistForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function WaitlistForm() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(48);
    if ($[0] !== "2241c859539fc68114cb23458fc8521c15b920f45cfa52a17d0868936c8cfec9") {
        for(let $i = 0; $i < 48; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2241c859539fc68114cb23458fc8521c15b920f45cfa52a17d0868936c8cfec9";
    }
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [petName, setPetName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [waitlistCount, setWaitlistCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1247);
    let t0;
    if ($[1] !== email) {
        t0 = ({
            "WaitlistForm[handleSubmit]": (e)=>{
                e.preventDefault();
                if (email && email.includes("@")) {
                    setSubmitted(true);
                    const interval = setInterval({
                        "WaitlistForm[handleSubmit > setInterval()]": ()=>{
                            setWaitlistCount(_WaitlistFormHandleSubmitSetIntervalSetWaitlistCount);
                        }
                    }["WaitlistForm[handleSubmit > setInterval()]"], 100);
                    setTimeout({
                        "WaitlistForm[handleSubmit > setTimeout()]": ()=>{
                            clearInterval(interval);
                            setTimeout({
                                "WaitlistForm[handleSubmit > setTimeout() > setTimeout()]": ()=>{
                                    setSubmitted(false);
                                    setEmail("");
                                    setPetName("");
                                }
                            }["WaitlistForm[handleSubmit > setTimeout() > setTimeout()]"], 5000);
                        }
                    }["WaitlistForm[handleSubmit > setTimeout()]"], 3000);
                }
            }
        })["WaitlistForm[handleSubmit]"];
        $[1] = email;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const handleSubmit = t0;
    if (submitted) {
        let t1;
        let t2;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center animate-pulse",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-4xl",
                    children: "✨"
                }, void 0, false, {
                    fileName: "[project]/app/components/WaitlistForm.tsx",
                    lineNumber: 55,
                    columnNumber: 160
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/WaitlistForm.tsx",
                lineNumber: 55,
                columnNumber: 12
            }, this);
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-2xl md:text-3xl font-bold mb-4 text-gray-900",
                children: "Добро пожаловать в будущее!"
            }, void 0, false, {
                fileName: "[project]/app/components/WaitlistForm.tsx",
                lineNumber: 56,
                columnNumber: 12
            }, this);
            $[3] = t1;
            $[4] = t2;
        } else {
            t1 = $[3];
            t2 = $[4];
        }
        let t3;
        if ($[5] !== waitlistCount) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",
                children: [
                    "#",
                    waitlistCount
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/WaitlistForm.tsx",
                lineNumber: 65,
                columnNumber: 12
            }, this);
            $[5] = waitlistCount;
            $[6] = t3;
        } else {
            t3 = $[6];
        }
        let t4;
        if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600 mb-2",
                children: "Вы стали частью революции"
            }, void 0, false, {
                fileName: "[project]/app/components/WaitlistForm.tsx",
                lineNumber: 73,
                columnNumber: 12
            }, this);
            $[7] = t4;
        } else {
            t4 = $[7];
        }
        let t5;
        if ($[8] !== email) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-500",
                children: [
                    "Подтверждение отправлено на ",
                    email
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/WaitlistForm.tsx",
                lineNumber: 80,
                columnNumber: 12
            }, this);
            $[8] = email;
            $[9] = t5;
        } else {
            t5 = $[9];
        }
        let t6;
        if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 flex justify-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-medium",
                        children: "Ранний доступ"
                    }, void 0, false, {
                        fileName: "[project]/app/components/WaitlistForm.tsx",
                        lineNumber: 88,
                        columnNumber: 60
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-medium",
                        children: "Скидка 50%"
                    }, void 0, false, {
                        fileName: "[project]/app/components/WaitlistForm.tsx",
                        lineNumber: 88,
                        columnNumber: 169
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/WaitlistForm.tsx",
                lineNumber: 88,
                columnNumber: 12
            }, this);
            $[10] = t6;
        } else {
            t6 = $[10];
        }
        let t7;
        if ($[11] !== t3 || $[12] !== t5) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-200 text-center",
                children: [
                    t1,
                    t2,
                    t3,
                    t4,
                    t5,
                    t6
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/WaitlistForm.tsx",
                lineNumber: 95,
                columnNumber: 12
            }, this);
            $[11] = t3;
            $[12] = t5;
            $[13] = t7;
        } else {
            t7 = $[13];
        }
        return t7;
    }
    let t1;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-2xl md:text-3xl font-bold mb-4 text-gray-900",
                    children: "Забронируйте место в истории"
                }, void 0, false, {
                    fileName: "[project]/app/components/WaitlistForm.tsx",
                    lineNumber: 106,
                    columnNumber: 44
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "Ограниченное количество мест для первых участников"
                }, void 0, false, {
                    fileName: "[project]/app/components/WaitlistForm.tsx",
                    lineNumber: 106,
                    columnNumber: 143
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/WaitlistForm.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[14] = t1;
    } else {
        t1 = $[14];
    }
    let t2;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm font-medium text-gray-700",
            children: "Список ожидания"
        }, void 0, false, {
            fileName: "[project]/app/components/WaitlistForm.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[15] = t2;
    } else {
        t2 = $[15];
    }
    let t3;
    if ($[16] !== waitlistCount) {
        t3 = waitlistCount.toLocaleString();
        $[16] = waitlistCount;
        $[17] = t3;
    } else {
        t3 = $[17];
    }
    let t4;
    if ($[18] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center mb-3",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm font-bold text-purple-600",
                    children: [
                        t3,
                        "+ участников"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/WaitlistForm.tsx",
                    lineNumber: 128,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/WaitlistForm.tsx",
            lineNumber: 128,
            columnNumber: 10
        }, this);
        $[18] = t3;
        $[19] = t4;
    } else {
        t4 = $[19];
    }
    const t5 = `${Math.min(waitlistCount / 2000 * 100, 100)}%`;
    let t6;
    if ($[20] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-2 bg-gray-100 rounded-full overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-1000",
                style: {
                    width: t5
                }
            }, void 0, false, {
                fileName: "[project]/app/components/WaitlistForm.tsx",
                lineNumber: 137,
                columnNumber: 72
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/WaitlistForm.tsx",
            lineNumber: 137,
            columnNumber: 10
        }, this);
        $[20] = t5;
        $[21] = t6;
    } else {
        t6 = $[21];
    }
    const t7 = Math.max(0, 2000 - waitlistCount);
    let t8;
    if ($[22] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs text-gray-500 mt-2 text-center",
            children: [
                "Осталось ",
                t7,
                " мест из 2000"
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/WaitlistForm.tsx",
            lineNumber: 148,
            columnNumber: 10
        }, this);
        $[22] = t7;
        $[23] = t8;
    } else {
        t8 = $[23];
    }
    let t9;
    if ($[24] !== t4 || $[25] !== t6 || $[26] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8",
            children: [
                t4,
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/WaitlistForm.tsx",
            lineNumber: 156,
            columnNumber: 10
        }, this);
        $[24] = t4;
        $[25] = t6;
        $[26] = t8;
        $[27] = t9;
    } else {
        t9 = $[27];
    }
    let t10;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: "Ваш email *"
        }, void 0, false, {
            fileName: "[project]/app/components/WaitlistForm.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[28] = t10;
    } else {
        t10 = $[28];
    }
    let t11;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "WaitlistForm[<input>.onChange]": (e_0)=>setEmail(e_0.target.value)
        })["WaitlistForm[<input>.onChange]"];
        $[29] = t11;
    } else {
        t11 = $[29];
    }
    let t12;
    if ($[30] !== email) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "email",
                    value: email,
                    onChange: t11,
                    placeholder: "you@example.com",
                    className: "w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 placeholder-gray-400",
                    required: true
                }, void 0, false, {
                    fileName: "[project]/app/components/WaitlistForm.tsx",
                    lineNumber: 182,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/WaitlistForm.tsx",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        $[30] = email;
        $[31] = t12;
    } else {
        t12 = $[31];
    }
    let t13;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: "Имя питомца (опционально)"
        }, void 0, false, {
            fileName: "[project]/app/components/WaitlistForm.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[32] = t13;
    } else {
        t13 = $[32];
    }
    let t14;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = ({
            "WaitlistForm[<input>.onChange]": (e_1)=>setPetName(e_1.target.value)
        })["WaitlistForm[<input>.onChange]"];
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    let t15;
    if ($[34] !== petName) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: petName,
                    onChange: t14,
                    placeholder: "\u041A\u0430\u043A \u0437\u043E\u0432\u0443\u0442 \u0432\u0430\u0448\u0435\u0433\u043E \u043B\u044E\u0431\u0438\u043C\u0446\u0430?",
                    className: "w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300 placeholder-gray-400"
                }, void 0, false, {
                    fileName: "[project]/app/components/WaitlistForm.tsx",
                    lineNumber: 206,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/WaitlistForm.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[34] = petName;
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    let t16;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg rounded-xl hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300",
            children: "🚀 Забронировать место"
        }, void 0, false, {
            fileName: "[project]/app/components/WaitlistForm.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-600 mb-4",
            children: "Присоединяясь, вы получаете:"
        }, void 0, false, {
            fileName: "[project]/app/components/WaitlistForm.tsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[37] = t17;
    } else {
        t17 = $[37];
    }
    let t18;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-2 h-2 rounded-full bg-green-500 animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/app/components/WaitlistForm.tsx",
                    lineNumber: 228,
                    columnNumber: 52
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-700",
                    children: "Ранний доступ к платформе"
                }, void 0, false, {
                    fileName: "[project]/app/components/WaitlistForm.tsx",
                    lineNumber: 228,
                    columnNumber: 119
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/WaitlistForm.tsx",
            lineNumber: 228,
            columnNumber: 11
        }, this);
        $[38] = t18;
    } else {
        t18 = $[38];
    }
    let t19;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-2 h-2 rounded-full bg-purple-500 animate-pulse",
                    style: {
                        animationDelay: "0.3s"
                    }
                }, void 0, false, {
                    fileName: "[project]/app/components/WaitlistForm.tsx",
                    lineNumber: 235,
                    columnNumber: 52
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-700",
                    children: "Бесплатный NFT аирдроп"
                }, void 0, false, {
                    fileName: "[project]/app/components/WaitlistForm.tsx",
                    lineNumber: 237,
                    columnNumber: 12
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/WaitlistForm.tsx",
            lineNumber: 235,
            columnNumber: 11
        }, this);
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    let t20;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center pt-6 border-t border-gray-100",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap justify-center gap-4 text-sm",
                    children: [
                        t18,
                        t19,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-2 h-2 rounded-full bg-pink-500 animate-pulse",
                                    style: {
                                        animationDelay: "0.6s"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/WaitlistForm.tsx",
                                    lineNumber: 244,
                                    columnNumber: 187
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-700",
                                    children: "Эксклюзивные бонусы"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/WaitlistForm.tsx",
                                    lineNumber: 246,
                                    columnNumber: 16
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/WaitlistForm.tsx",
                            lineNumber: 244,
                            columnNumber: 146
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/WaitlistForm.tsx",
                    lineNumber: 244,
                    columnNumber: 75
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/WaitlistForm.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[40] = t20;
    } else {
        t20 = $[40];
    }
    let t21;
    if ($[41] !== handleSubmit || $[42] !== t12 || $[43] !== t15) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "space-y-6",
            children: [
                t12,
                t15,
                t16,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/WaitlistForm.tsx",
            lineNumber: 253,
            columnNumber: 11
        }, this);
        $[41] = handleSubmit;
        $[42] = t12;
        $[43] = t15;
        $[44] = t21;
    } else {
        t21 = $[44];
    }
    let t22;
    if ($[45] !== t21 || $[46] !== t9) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-200",
            children: [
                t1,
                t9,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/WaitlistForm.tsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[45] = t21;
        $[46] = t9;
        $[47] = t22;
    } else {
        t22 = $[47];
    }
    return t22;
}
_s(WaitlistForm, "ERj4zOR6C1Ar/EwcX5yBk0yKN6I=");
_c = WaitlistForm;
function _WaitlistFormHandleSubmitSetIntervalSetWaitlistCount(prev) {
    return prev + 1;
}
var _c;
__turbopack_context__.k.register(_c, "WaitlistForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/page.tsx - ОБНОВЛЕННЫЙ КОД (с удалением Команды и добавлением Marketplace)
__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$WaitlistForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/WaitlistForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(108);
    if ($[0] !== "a7d49c97e1721021b23216d2b2f27a8afa3ddcc8a8e8fa5637bd6cf1edb9991c") {
        for(let $i = 0; $i < 108; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a7d49c97e1721021b23216d2b2f27a8afa3ddcc8a8e8fa5637bd6cf1edb9991c";
    }
    const [, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const featuresRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const missionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
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
                icon: "\uD83E\uDD16",
                title: "\u0418\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0418\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442",
                description: "\u041D\u0430\u0448 AI \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 3D \u043C\u043E\u0434\u0435\u043B\u0438 \u043F\u0438\u0442\u043E\u043C\u0446\u0435\u0432 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0432\u0430\u0448\u0438\u0445 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0439 \u0437\u0430 30 \u0441\u0435\u043A\u0443\u043D\u0434",
                color: "from-purple-500/10 via-purple-500/5 to-transparent",
                borderColor: "border-purple-500/20",
                iconBg: "bg-gradient-to-br from-purple-500 to-purple-600"
            },
            {
                icon: "\uD83D\uDD17",
                title: "\u042D\u043A\u043E-\u0411\u043B\u043E\u043A\u0447\u0435\u0439\u043D",
                description: "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0443\u0433\u043B\u0435\u0440\u043E\u0434\u043D\u043E-\u043D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0439 Polygon \u0434\u043B\u044F \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0432\u043E\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043D\u0430 \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0443\u044E \u0441\u0440\u0435\u0434\u0443",
                color: "from-cyan-500/10 via-cyan-500/5 to-transparent",
                borderColor: "border-cyan-500/20",
                iconBg: "bg-gradient-to-br from-cyan-500 to-blue-500"
            },
            {
                icon: "\u2764\uFE0F",
                title: "\u0421\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u041C\u0438\u0441\u0441\u0438\u044F",
                description: "10% \u043E\u0442 \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u0440\u043E\u0434\u0430\u0436\u0438 NFT \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u044F\u0435\u0442\u0441\u044F \u0432 \u043F\u0440\u0438\u044E\u0442\u044B \u0434\u043B\u044F \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445",
                color: "from-pink-500/10 via-pink-500/5 to-transparent",
                borderColor: "border-pink-500/20",
                iconBg: "bg-gradient-to-br from-pink-500 to-rose-500"
            },
            {
                icon: "\uD83C\uDF0D",
                title: "\u0413\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u043E\u0435 \u0421\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E",
                description: "\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0439\u0442\u0435\u0441\u044C \u043A \u0442\u044B\u0441\u044F\u0447\u0430\u043C \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u0432 \u043F\u0438\u0442\u043E\u043C\u0446\u0435\u0432 \u043F\u043E \u0432\u0441\u0435\u043C\u0443 \u043C\u0438\u0440\u0443",
                color: "from-emerald-500/10 via-emerald-500/5 to-transparent",
                borderColor: "border-emerald-500/20",
                iconBg: "bg-gradient-to-br from-emerald-500 to-teal-500"
            }
        ];
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    const features = t9;
    let t10;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 pointer-events-none overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-purple-100 rounded-full blur-[120px] opacity-30 animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 142,
                    columnNumber: 78
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-pink-100 rounded-full blur-[120px] opacity-30 animate-pulse delay-1000"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 142,
                    columnNumber: 209
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-100/20 rounded-full blur-[120px] opacity-20"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 142,
                    columnNumber: 353
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    let t12;
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            y: -100,
            opacity: 0
        };
        t12 = {
            y: 0,
            opacity: 1
        };
        t13 = {
            duration: 0.6
        };
        $[14] = t11;
        $[15] = t12;
        $[16] = t13;
    } else {
        t11 = $[14];
        t12 = $[15];
        t13 = $[16];
    }
    let t14;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = {
            scale: 1.05
        };
        $[17] = t14;
    } else {
        t14 = $[17];
    }
    let t15;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "flex items-center space-x-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                whileHover: t14,
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
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 181,
                            columnNumber: 186
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 181,
                        columnNumber: 150
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-lg font-bold text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 181,
                        columnNumber: 295
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 181,
                columnNumber: 66
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    let t16;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = [
            {
                label: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438",
                ref: featuresRef
            },
            {
                label: "\u041C\u0438\u0441\u0441\u0438\u044F",
                ref: missionRef
            },
            {
                label: "Marketplace",
                href: "/market"
            }
        ].map({
            "Home[(anonymous)()]": (item)=>item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: item.href,
                    className: "text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors relative group",
                    children: [
                        item.label,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 198,
                            columnNumber: 201
                        }, this)
                    ]
                }, item.label, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 198,
                    columnNumber: 50
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    whileHover: {
                        y: -2
                    },
                    whileTap: {
                        y: 0
                    },
                    onClick: {
                        "Home[(anonymous)() > <motion.button>.onClick]": ()=>scrollToSection(item.ref)
                    }["Home[(anonymous)() > <motion.button>.onClick]"],
                    className: "text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors relative group",
                    children: [
                        item.label,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 204,
                            columnNumber: 170
                        }, this)
                    ]
                }, item.label, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 198,
                    columnNumber: 358
                }, this)
        }["Home[(anonymous)()]"]);
        $[19] = t16;
    } else {
        t16 = $[19];
    }
    let t17;
    let t18;
    let t19;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = {
            scale: 1.05
        };
        t18 = {
            scale: 0.95
        };
        t19 = ({
            "Home[<motion.button>.onClick]": ()=>scrollToSection(waitlistRef)
        })["Home[<motion.button>.onClick]"];
        $[20] = t17;
        $[21] = t18;
        $[22] = t19;
    } else {
        t17 = $[20];
        t18 = $[21];
        t19 = $[22];
    }
    let t20;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:flex items-center space-x-8",
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    whileHover: t17,
                    whileTap: t18,
                    onClick: t19,
                    className: "relative px-6 py-2.5 rounded-full text-sm font-medium overflow-hidden group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:from-purple-700 group-hover:to-pink-700 transition-all duration-300"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 233,
                            columnNumber: 220
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "relative text-white",
                            children: "Присоединиться"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 233,
                            columnNumber: 382
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 233,
                    columnNumber: 71
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 233,
            columnNumber: 11
        }, this);
        $[23] = t20;
    } else {
        t20 = $[23];
    }
    let t21;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
            initial: t11,
            animate: t12,
            transition: t13,
            className: "fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl shadow-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        t15,
                        t20,
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
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 240,
                                    columnNumber: 396
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 240,
                                columnNumber: 317
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 240,
                            columnNumber: 273
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 240,
                    columnNumber: 212
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 240,
                columnNumber: 151
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[24] = t21;
    } else {
        t21 = $[24];
    }
    let t22;
    if ($[25] !== heroOpacity || $[26] !== heroScale) {
        t22 = {
            opacity: heroOpacity,
            scale: heroScale
        };
        $[25] = heroOpacity;
        $[26] = heroScale;
        $[27] = t22;
    } else {
        t22 = $[27];
    }
    let t23;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = {
            opacity: 0,
            y: 40
        };
        $[28] = t23;
    } else {
        t23 = $[28];
    }
    let t24;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = {
            hidden: t23,
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.8,
                    ease: [
                        0.16,
                        1,
                        0.3,
                        1
                    ],
                    staggerChildren: 0.1
                }
            }
        };
        $[29] = t24;
    } else {
        t24 = $[29];
    }
    let t25;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = {
            hidden: {
                opacity: 0,
                y: 20
            },
            visible: {
                opacity: 1,
                y: 0
            }
        };
        $[30] = t25;
    } else {
        t25 = $[30];
    }
    let t26;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
            variants: t25,
            className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "block text-gray-900",
                    children: "Цифровая"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 303,
                    columnNumber: 112
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500",
                    children: "вечность"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 303,
                    columnNumber: 165
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "block text-gray-900",
                    children: "для ваших питомцев"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 303,
                    columnNumber: 294
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 303,
            columnNumber: 11
        }, this);
        $[31] = t26;
    } else {
        t26 = $[31];
    }
    let t27;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
            variants: {
                hidden: {
                    opacity: 0,
                    y: 20
                },
                visible: {
                    opacity: 1,
                    y: 0
                }
            },
            className: "text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed",
            children: "Превращаем воспоминания о любимых питомцах в уникальные цифровые произведения искусства, сохраняя их дух в блокчейне навсегда"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 310,
            columnNumber: 11
        }, this);
        $[32] = t27;
    } else {
        t27 = $[32];
    }
    let t28;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = {
            hidden: {
                opacity: 0,
                y: 20
            },
            visible: {
                opacity: 1,
                y: 0
            }
        };
        $[33] = t28;
    } else {
        t28 = $[33];
    }
    let t29;
    let t30;
    let t31;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = {
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)"
        };
        t30 = {
            scale: 0.95
        };
        t31 = ({
            "Home[<motion.button>.onClick]": ()=>scrollToSection(waitlistRef)
        })["Home[<motion.button>.onClick]"];
        $[34] = t29;
        $[35] = t30;
        $[36] = t31;
    } else {
        t29 = $[34];
        t30 = $[35];
        t31 = $[36];
    }
    let t32;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            whileHover: t29,
            whileTap: t30,
            onClick: t31,
            className: "relative px-8 py-4 rounded-full text-lg font-semibold overflow-hidden group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 group-hover:from-purple-700 group-hover:via-purple-600 group-hover:to-pink-600 transition-all duration-300"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 364,
                    columnNumber: 160
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "relative text-white",
                    children: "Начать путешествие"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 364,
                    columnNumber: 364
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 364,
            columnNumber: 11
        }, this);
        $[37] = t32;
    } else {
        t32 = $[37];
    }
    let t33;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: t28,
            className: "flex flex-col sm:flex-row gap-4 justify-center items-center mb-20",
            children: [
                t32,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/market",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        className: "px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-300",
                        children: "Смотреть NFT"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 371,
                        columnNumber: 142
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 371,
                    columnNumber: 121
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 371,
            columnNumber: 11
        }, this);
        $[38] = t33;
    } else {
        t33 = $[38];
    }
    let t34;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = {
            hidden: {
                opacity: 0,
                y: 20
            },
            visible: {
                opacity: 1,
                y: 0
            }
        };
        $[39] = t34;
    } else {
        t34 = $[39];
    }
    let t35;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: t34,
            className: "relative max-w-4xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                children: [
                    "\uD83D\uDC15",
                    "\uD83D\uDC08",
                    "\uD83D\uDC07",
                    "\uD83E\uDD9C"
                ].map(_HomeAnonymous)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 398,
                columnNumber: 77
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 398,
            columnNumber: 11
        }, this);
        $[40] = t35;
    } else {
        t35 = $[40];
    }
    let t36;
    if ($[41] !== controls) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: "hidden",
                animate: controls,
                variants: t24,
                className: "text-center",
                children: [
                    t26,
                    t27,
                    t33,
                    t35
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 405,
                columnNumber: 87
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 405,
            columnNumber: 11
        }, this);
        $[41] = controls;
        $[42] = t36;
    } else {
        t36 = $[42];
    }
    let t37;
    let t38;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = {
            y: [
                0,
                10,
                0
            ]
        };
        t38 = {
            repeat: Infinity,
            duration: 2
        };
        $[43] = t37;
        $[44] = t38;
    } else {
        t37 = $[43];
        t38 = $[44];
    }
    let t39;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            animate: t37,
            transition: t38,
            className: "absolute bottom-8 left-1/2 transform -translate-x-1/2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-6 h-10 border border-gray-300 rounded-full flex justify-center backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-1 h-3 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mt-2"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 429,
                    columnNumber: 219
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 429,
                columnNumber: 120
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 429,
            columnNumber: 11
        }, this);
        $[45] = t39;
    } else {
        t39 = $[45];
    }
    let t40;
    if ($[46] !== t22 || $[47] !== t36) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
            ref: heroRef,
            style: t22,
            className: "min-h-screen flex items-center justify-center relative pt-16",
            children: [
                t36,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 436,
            columnNumber: 11
        }, this);
        $[46] = t22;
        $[47] = t36;
        $[48] = t40;
    } else {
        t40 = $[48];
    }
    let t41;
    let t42;
    let t43;
    let t44;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = {
            opacity: 0
        };
        t42 = {
            opacity: 1
        };
        t43 = {
            once: true,
            margin: "-100px"
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
    let t47;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = {
            opacity: 0,
            y: 20
        };
        t46 = {
            opacity: 1,
            y: 0
        };
        t47 = {
            once: true
        };
        $[53] = t45;
        $[54] = t46;
        $[55] = t47;
    } else {
        t45 = $[53];
        t46 = $[54];
        t47 = $[55];
    }
    let t48;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-medium text-gradient bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",
                children: "ТЕХНОЛОГИЯ БУДУЩЕГО"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 496,
                columnNumber: 141
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 496,
            columnNumber: 11
        }, this);
        $[56] = t48;
    } else {
        t48 = $[56];
    }
    let t49;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t45,
            whileInView: t46,
            viewport: t47,
            className: "text-center mb-20",
            children: [
                t48,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 max-w-3xl mx-auto",
                    children: [
                        "Объединяем передовые технологии с",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600",
                            children: "любовью к животным"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 503,
                            columnNumber: 239
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 503,
                    columnNumber: 105
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 503,
            columnNumber: 11
        }, this);
        $[57] = t49;
    } else {
        t49 = $[57];
    }
    let t50;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
            ref: featuresRef,
            initial: t41,
            whileInView: t42,
            viewport: t43,
            transition: t44,
            className: "py-32 relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    t49,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
                        children: features.map(_HomeFeaturesMap)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 510,
                        columnNumber: 197
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 510,
                columnNumber: 136
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 510,
            columnNumber: 11
        }, this);
        $[58] = t50;
    } else {
        t50 = $[58];
    }
    let t51;
    let t52;
    let t53;
    let t54;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = {
            opacity: 0
        };
        t52 = {
            opacity: 1
        };
        t53 = {
            once: true,
            margin: "-100px"
        };
        t54 = {
            duration: 0.8
        };
        $[59] = t51;
        $[60] = t52;
        $[61] = t53;
        $[62] = t54;
    } else {
        t51 = $[59];
        t52 = $[60];
        t53 = $[61];
        t54 = $[62];
    }
    let t55;
    let t56;
    let t57;
    let t58;
    if ($[63] === Symbol.for("react.memo_cache_sentinel")) {
        t55 = {
            opacity: 0,
            x: -30
        };
        t56 = {
            opacity: 1,
            x: 0
        };
        t57 = {
            once: true
        };
        t58 = {
            duration: 0.8
        };
        $[63] = t55;
        $[64] = t56;
        $[65] = t57;
        $[66] = t58;
    } else {
        t55 = $[63];
        t56 = $[64];
        t57 = $[65];
        t58 = $[66];
    }
    let t59;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-medium text-gradient bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent",
                children: "НАША МИССИЯ"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 574,
                columnNumber: 139
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 574,
            columnNumber: 11
        }, this);
        $[67] = t59;
    } else {
        t59 = $[67];
    }
    let t60;
    let t61;
    if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-900",
            children: [
                "Больше чем",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600",
                    children: "NFT"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 582,
                    columnNumber: 104
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 582,
            columnNumber: 11
        }, this);
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg text-gray-600 mb-8 leading-relaxed",
            children: "PrettyPetts — это не просто платформа для создания цифрового искусства. Это движение, которое объединяет технологических энтузиастов, владельцев питомцев и благотворительные организации для создания лучшего будущего для животных по всему миру."
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 583,
            columnNumber: 11
        }, this);
        $[68] = t60;
        $[69] = t61;
    } else {
        t60 = $[68];
        t61 = $[69];
    }
    let t62;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-4 p-4 rounded-2xl hover:bg-gray-50/50 transition-colors duration-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xl",
                        children: "💰"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 592,
                        columnNumber: 246
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 592,
                    columnNumber: 123
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-lg font-semibold text-gray-900 mb-1",
                            children: "Финансирование приютов"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 592,
                            columnNumber: 292
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Каждый NFT помогает реальным животным в приютах"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 592,
                            columnNumber: 376
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 592,
                    columnNumber: 287
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 592,
            columnNumber: 11
        }, this);
        $[70] = t62;
    } else {
        t62 = $[70];
    }
    let t63;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t55,
            whileInView: t56,
            viewport: t57,
            transition: t58,
            children: [
                t59,
                t60,
                t61,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        t62,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-4 p-4 rounded-2xl hover:bg-gray-50/50 transition-colors duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl",
                                        children: "🌱"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 599,
                                        columnNumber: 370
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 599,
                                    columnNumber: 246
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-lg font-semibold text-gray-900 mb-1",
                                            children: "Экологичность"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 599,
                                            columnNumber: 416
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600",
                                            children: "Используем экологичные блокчейн-решения"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 599,
                                            columnNumber: 491
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 599,
                                    columnNumber: 411
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 599,
                            columnNumber: 134
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 599,
                    columnNumber: 102
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 599,
            columnNumber: 11
        }, this);
        $[71] = t63;
    } else {
        t63 = $[71];
    }
    let t64;
    let t65;
    let t66;
    let t67;
    if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
        t64 = {
            opacity: 0,
            x: 30
        };
        t65 = {
            opacity: 1,
            x: 0
        };
        t66 = {
            once: true
        };
        t67 = {
            duration: 0.8
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
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
            ref: missionRef,
            initial: t51,
            whileInView: t52,
            viewport: t53,
            transition: t54,
            className: "py-32 relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-2 gap-16 items-center",
                    children: [
                        t63,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: t64,
                            whileInView: t65,
                            viewport: t66,
                            transition: t67,
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-500/10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aspect-[4/3] bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 flex items-center justify-center p-12",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-6xl mb-6",
                                                    children: "🐾"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 635,
                                                    columnNumber: 595
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-bold text-white mb-3",
                                                    children: "Цифровое наследие"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 635,
                                                    columnNumber: 634
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-300",
                                                    children: "Для каждого питомца навсегда"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 635,
                                                    columnNumber: 707
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 635,
                                            columnNumber: 566
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 635,
                                        columnNumber: 439
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 635,
                                    columnNumber: 350
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl -z-10 blur-xl"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 635,
                                    columnNumber: 786
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-3xl -z-10 blur-xl"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 635,
                                    columnNumber: 916
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 635,
                            columnNumber: 253
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 635,
                    columnNumber: 191
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 635,
                columnNumber: 135
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 635,
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
            opacity: 0
        };
        t70 = {
            opacity: 1
        };
        t71 = {
            once: true
        };
        t72 = {
            duration: 0.8
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
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
            initial: t69,
            whileInView: t70,
            viewport: t71,
            transition: t72,
            className: "py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-8",
                    children: [
                        {
                            value: "1,247+",
                            label: "\u0412 \u0441\u043F\u0438\u0441\u043A\u0435 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F",
                            suffix: "\uD83D\uDC65"
                        },
                        {
                            value: "5",
                            label: "\u041F\u0440\u0438\u044E\u0442\u043E\u0432-\u043F\u0430\u0440\u0442\u043D\u0451\u0440\u043E\u0432",
                            suffix: "\uD83C\uDFE0"
                        },
                        {
                            value: "30\u0441",
                            label: "\u041D\u0430 \u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044E NFT",
                            suffix: "\u26A1"
                        },
                        {
                            value: "10%",
                            label: "\u0412 \u043F\u0440\u0438\u044E\u0442\u044B \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445",
                            suffix: "\u2764\uFE0F"
                        }
                    ].map(_HomeAnonymous2)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 669,
                    columnNumber: 165
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 669,
                columnNumber: 109
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 669,
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
            opacity: 0
        };
        t75 = {
            opacity: 1
        };
        t76 = {
            once: true,
            margin: "-100px"
        };
        t77 = {
            duration: 0.8
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
    let t79;
    let t80;
    let t81;
    if ($[86] === Symbol.for("react.memo_cache_sentinel")) {
        t78 = {
            y: 50,
            opacity: 0
        };
        t79 = {
            y: 0,
            opacity: 1
        };
        t80 = {
            once: true
        };
        t81 = {
            duration: 0.6
        };
        $[86] = t78;
        $[87] = t79;
        $[88] = t80;
        $[89] = t81;
    } else {
        t78 = $[86];
        t79 = $[87];
        t80 = $[88];
        t81 = $[89];
    }
    let t82;
    if ($[90] === Symbol.for("react.memo_cache_sentinel")) {
        t82 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-medium text-gradient bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",
                children: "ПРИСОЕДИНЯЙТЕСЬ"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 749,
                columnNumber: 141
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 749,
            columnNumber: 11
        }, this);
        $[90] = t82;
    } else {
        t82 = $[90];
    }
    let t83;
    if ($[91] === Symbol.for("react.memo_cache_sentinel")) {
        t83 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t78,
            whileInView: t79,
            viewport: t80,
            transition: t81,
            className: "text-center mb-16",
            children: [
                t82,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900",
                    children: [
                        "Станьте частью",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600",
                            children: "революции"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 756,
                            columnNumber: 219
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 756,
                    columnNumber: 122
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-600 max-w-2xl mx-auto",
                    children: "В мире Web3 и помогите животным вместе с нами"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 756,
                    columnNumber: 333
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 756,
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
            y: 50,
            opacity: 0
        };
        t85 = {
            y: 0,
            opacity: 1
        };
        t86 = {
            once: true
        };
        t87 = {
            duration: 0.6,
            delay: 0.2
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
    if ($[96] === Symbol.for("react.memo_cache_sentinel")) {
        t88 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-br from-white to-gray-50"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 793,
            columnNumber: 11
        }, this);
        $[96] = t88;
    } else {
        t88 = $[96];
    }
    let t89;
    if ($[97] === Symbol.for("react.memo_cache_sentinel")) {
        t89 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
            ref: waitlistRef,
            initial: t74,
            whileInView: t75,
            viewport: t76,
            transition: t77,
            className: "py-32",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    t83,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: t84,
                        whileInView: t85,
                        viewport: t86,
                        transition: t87,
                        className: "relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-purple-500/10",
                        children: [
                            t88,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative p-8 md:p-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$WaitlistForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 800,
                                    columnNumber: 393
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 800,
                                columnNumber: 355
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 800,
                        columnNumber: 188
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 800,
                columnNumber: 127
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 800,
            columnNumber: 11
        }, this);
        $[97] = t89;
    } else {
        t89 = $[97];
    }
    let t90;
    let t91;
    if ($[98] === Symbol.for("react.memo_cache_sentinel")) {
        t90 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 808,
                                columnNumber: 183
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 808,
                            columnNumber: 66
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xl font-semibold",
                            children: "PrettyPetts"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 808,
                            columnNumber: 244
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 808,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 leading-relaxed",
                    children: "Объединяем технологии и любовь к животным для создания лучшего будущего"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 808,
                    columnNumber: 308
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 808,
            columnNumber: 11
        }, this);
        t91 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold mb-6 text-gray-200",
            children: "Навигация"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 809,
            columnNumber: 11
        }, this);
        $[98] = t90;
        $[99] = t91;
    } else {
        t90 = $[98];
        t91 = $[99];
    }
    let t92;
    let t93;
    if ($[100] === Symbol.for("react.memo_cache_sentinel")) {
        t92 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t91,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: _HomeButtonOnClick,
                                className: "text-gray-400 hover:text-white transition-colors duration-300 hover:pl-2",
                                children: "Главная"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 819,
                                columnNumber: 51
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 819,
                            columnNumber: 47
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "Home[<button>.onClick]": ()=>scrollToSection(featuresRef)
                                }["Home[<button>.onClick]"],
                                className: "text-gray-400 hover:text-white transition-colors duration-300 hover:pl-2",
                                children: "Технологии"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 819,
                                columnNumber: 198
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 819,
                            columnNumber: 194
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "Home[<button>.onClick]": ()=>scrollToSection(missionRef)
                                }["Home[<button>.onClick]"],
                                className: "text-gray-400 hover:text-white transition-colors duration-300 hover:pl-2",
                                children: "Миссия"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 821,
                                columnNumber: 153
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 821,
                            columnNumber: 149
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/market",
                                className: "text-gray-400 hover:text-white transition-colors duration-300 hover:pl-2 block",
                                children: "Marketplace"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 823,
                                columnNumber: 149
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 823,
                            columnNumber: 145
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 819,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 819,
            columnNumber: 11
        }, this);
        t93 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold mb-6 text-gray-200",
            children: "Ресурсы"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 824,
            columnNumber: 11
        }, this);
        $[100] = t92;
        $[101] = t93;
    } else {
        t92 = $[100];
        t93 = $[101];
    }
    let t94;
    let t95;
    if ($[102] === Symbol.for("react.memo_cache_sentinel")) {
        t94 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t93,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-3",
                    children: [
                        "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F",
                        "\u0411\u043B\u043E\u0433",
                        "\u0427\u0430\u0412\u043E",
                        "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
                    ].map(_HomeAnonymous3)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 834,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 834,
            columnNumber: 11
        }, this);
        t95 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold mb-6 text-gray-200",
            children: "Сообщество"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 835,
            columnNumber: 11
        }, this);
        $[102] = t94;
        $[103] = t95;
    } else {
        t94 = $[102];
        t95 = $[103];
    }
    let t96;
    if ($[104] === Symbol.for("react.memo_cache_sentinel")) {
        t96 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-4 gap-12 mb-12",
            children: [
                t90,
                t92,
                t94,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t95,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-3",
                            children: [
                                "Twitter",
                                "Discord",
                                "Instagram",
                                "Telegram"
                            ].map(_HomeAnonymous4)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 844,
                            columnNumber: 86
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 844,
                    columnNumber: 76
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 844,
            columnNumber: 11
        }, this);
        $[104] = t96;
    } else {
        t96 = $[104];
    }
    let t97;
    if ($[105] === Symbol.for("react.memo_cache_sentinel")) {
        t97 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "bg-gray-900 text-white pt-16 pb-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    t96,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-gray-800 pt-8 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400",
                            children: "© 2024 PrettyPetts. Все права защищены. Сделано с ❤️ для животных по всему миру."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 851,
                            columnNumber: 185
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 851,
                        columnNumber: 126
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 851,
                columnNumber: 65
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 851,
            columnNumber: 11
        }, this);
        $[105] = t97;
    } else {
        t97 = $[105];
    }
    let t98;
    if ($[106] !== t40) {
        t98 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative min-h-screen bg-white overflow-x-hidden",
            children: [
                t10,
                t21,
                t40,
                t50,
                t68,
                t73,
                t89,
                t97
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 858,
            columnNumber: 11
        }, this);
        $[106] = t40;
        $[107] = t98;
    } else {
        t98 = $[107];
    }
    return t98;
}
_s(Home, "7iI5g0DcUEmBRXbvMuAlYIXZsyE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = Home;
function _HomeAnonymous4(item_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#",
            className: "text-gray-400 hover:text-white transition-colors duration-300 hover:pl-2 block",
            children: item_1
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 867,
            columnNumber: 27
        }, this)
    }, item_1, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 867,
        columnNumber: 10
    }, this);
}
function _HomeAnonymous3(item_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#",
            className: "text-gray-400 hover:text-white transition-colors duration-300 hover:pl-2 block",
            children: item_0
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 870,
            columnNumber: 27
        }, this)
    }, item_0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 870,
        columnNumber: 10
    }, this);
}
function _HomeButtonOnClick() {
    return window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function _HomeAnonymous2(stat, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            scale: 0.9
        },
        whileInView: {
            opacity: 1,
            scale: 1
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.6,
            delay: index_0 * 0.1
        },
        className: "text-center group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent",
                children: stat.value
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 890,
                columnNumber: 36
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-600 flex items-center justify-center gap-2",
                children: [
                    stat.label,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                        children: stat.suffix
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 890,
                        columnNumber: 262
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 890,
                columnNumber: 180
            }, this)
        ]
    }, index_0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 879,
        columnNumber: 10
    }, this);
}
function _HomeFeaturesMap(feature, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 30
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
            y: -8
        },
        className: `relative rounded-3xl border ${feature.borderColor} bg-gradient-to-br ${feature.color} p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-lg`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-2xl",
                            children: feature.icon
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 906,
                            columnNumber: 324
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 906,
                        columnNumber: 217
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold mb-4 text-gray-900",
                        children: feature.title
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 906,
                        columnNumber: 378
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 leading-relaxed",
                        children: feature.description
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 906,
                        columnNumber: 451
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 906,
                columnNumber: 186
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-white/10 to-transparent rounded-full group-hover:scale-125 transition-transform duration-500"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 906,
                columnNumber: 527
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 893,
        columnNumber: 10
    }, this);
}
function _HomeAnonymous(emoji, i) {
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
            delay: 0.5 + i * 0.1
        },
        whileHover: {
            y: -8,
            scale: 1.05
        },
        className: "relative aspect-square rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-4xl group-hover:scale-110 transition-transform duration-300",
                children: emoji
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 920,
                columnNumber: 225
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:via-purple-500/10 group-hover:to-pink-500/5 transition-all duration-300"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 920,
                columnNumber: 322
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 909,
        columnNumber: 10
    }, this);
}
function _HomeScrollToSection(ref) {
    if (ref.current) {
        ref.current.scrollIntoView({
            behavior: "smooth"
        });
    }
}
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_44328cb8._.js.map