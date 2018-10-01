var app = new Vue({
    el: "#root",
    data: {
        T: "",
        H: "",
        submit_show: false,
        selected_opt: [],
        d1: {
            "id": 1,
            "assessment": "合格",
            "unit": "无量纲",
            "name": "臭和味",
            "range": "无异臭和异味",
            "c": "无异臭和异味"
        },
        d2: {
            "id": 1,
            "assessment": "合格",
            "unit": "无量纲",
            "name": "肉眼可见物",
            "range": "无",
            "c": "无"
        },
        d3: {
            "id": 1,
            "assessment": "合格",
            "unit": "MPN/100ml",
            "name": "总大肠菌群",
            "range": "不得检出",
            "c": "未检出"
        },
        d4: {
            "id": 1,
            "assessment": "合格",
            "unit": "MPN/100ml",
            "name": "大肠埃希氏菌",
            "range": "不得检出",
            "c": "未检出"
        },
        d5: {
            "id": 1,
            "assessment": "合格",
            "unit": "MPN/100ml",
            "name": "耐热大肠菌群",
            "range": "不得检出",
            "c": "未检出"
        },
        pend_project: [],
        numbering: "",
        company: "",
        username: "",
        login_f: true,
        index: 0, //这个是表格索引==序号
        new_item: "", //表格新行
        add_edit: false,
        show1: false,
        show2: false,
        show3: false,
        add: false,
        date_show: false,
        vol_select: [
            50, 100, 250, 1, 25, 10
        ],
        selected1: "",
        selected2: "",
        selected3: "",
        slt1: "",
        slt2: "",
        slt3: "",

        new_opt1: {
            st: [],
            judge: false,
            category: 1,
            range_max: "",
            assessment: true,
            unit: "mg/L",
            start: 1,
            end: 1,
            id: 1,
            name: "",
            method: "",
            limit: "",
            a: 0,
            b: 1,
            r: 1,
            formula: "",
            x: [],
            y: [],
            standard_series: [],
            instrument_model: "分光光度计",
            GB: "GB/T 5750.5-2006",
            items: [],
            result: {
                id: 1,
                v: "",
                a: "",
                m: "",
                c: "",
                date: ""
            },
        },
        new_opt2: {
            st: [],
            judge: false,
            category: 2,
            range_max: "",
            assessment: true,
            unit: "mg/L",
            start: 1,
            end: 1,
            name: "",
            method: "",
            limit: "",
            instrument_model: "",
            GB: "GB/T 5750.5-2006",
            items: [],
            result: {
                id: 1,
                v: "",
                coefficient: "",
                K: "",
                a0: "",
                a1: "",
                m: "",
                c: "",
                date: ""
            },
        },
        new_opt3: {
            st: [],
            judge: false,
            category: 3,
            range_max: "",
            assessment: true,
            unit: "mg/L",
            start: 1,
            end: 1,
            name: "",
            method: "",
            limit: "",
            instrument_model: "",
            GB: "GB/T 5750.5-2006",
            items: [],
            result: {
                id: "",
                v: "",
                c: "",
                date: ""
            },
        },
        names3: [{
                st: [],
                judge: false,
                category: 3,
                range_min: 6.5,
                range_max: 8.5,
                assessment: true,
                unit: "无量纲",
                start: 1,
                end: 1,
                name: "酸碱度",
                method: "玻璃电极法",
                limit: 0,
                instrument_model: "精密pH计、pH玻璃电极、饱和甘汞电极、温度计",
                GB: "GB/T 5750.4-2006",
                items: [],
                result: {
                    id: "",
                    v: 50,
                    c: "",
                    date: "",
                },
            },
            {
                st: [],
                judge: false,
                category: 3,
                range_min: "",
                range_max: 15,
                assessment: true,
                unit: "度",
                start: 1,
                end: 1,
                name: "色度",
                method: "铂-钴标准比色法",
                limit: 5,
                instrument_model: "比色计",
                GB: "GB/T 5750.4-2006",
                items: [],
                result: {
                    id: "",
                    v: 50,
                    c: "",
                    date: "",
                },
            },
            {
                st: [],
                judge: false,
                category: 3,
                range_min: "",
                range_max: 3,
                assessment: true,
                unit: "NTU",
                start: 1,
                end: 1,
                name: "浑浊度",
                method: "福尔马肼标准",
                limit: 0.5,
                instrument_model: "散射式浊度仪",
                GB: "GB/T 5750.4-2006",
                items: [],
                result: {
                    id: "",
                    v: 50,
                    c: "",
                    date: "",
                },
            },
        ],
        names2: [{
                st: [],
                judge: false,
                category: 2,
                range_max: 250,
                range_min: "",
                assessment: true,
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "氯化物",
                method: "硝酸银容量法",
                limit: 5,
                instrument_model: "滴定管、架",
                GB: "GB/T 5750.4-2006",
                items: [],
                result: {
                    id: 1,
                    v: 10,
                    a0: 0.05,
                    a1: "",
                    coefficient: 500,
                    c: "",
                    date: ""
                },
            },
            {
                st: [],
                judge: false,
                category: 2,
                range_max: 1000,
                range_min: "",
                assessment: true,
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "总硬度",
                method: "EDTA-na_2滴定法",
                limit: 1,
                coefficient: 1000.9,
                instrument_model: "滴定管、架",
                GB: "GB/T 5750.4-2006",
                items: [],
                result: {
                    id: 1,
                    v: 50,
                    a0: 0.05,
                    a1: "",
                    coefficient: 1000.9,
                    c: "",
                    date: ""
                },
            },
            {
                st: [],
                judge: false,
                category: 2,
                range_max: 3,
                range_min: "",
                assessment: true,
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "耗氧量",
                method: "酸性高锰酸钾滴定法",
                limit: "0.05",
                coefficient: 80,
                instrument_model: "滴定管、架",
                GB: "GB/T 5750.7-2006",
                items: [],
                result: {
                    id: 1,
                    v: 100,
                    a0: 0.05,
                    a1: "",
                    coefficient: 80,
                    K: 1,
                    c: "",
                    date: ""
                },
            },
        ],
        names1: [{
                st: [],
                judge: false,
                category: 1,
                range_max: 0.5,
                range_min: "",
                assessment: true,
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "氨氮",
                method: "纳氏试剂分光光度法",
                limit: 0.05,
                a: 0,
                b: 1,
                r: 1,
                formula: "",
                x: [],
                y: [],
                standard_series: [],
                instrument_model: "分光光度计",
                GB: "GB/T 5750.5-2006",
                items: [
                    [
                        0,
                        0.005
                    ],
                    [
                        1,
                        0.010
                    ],
                    [
                        3,
                        0.020
                    ],
                    [
                        5,
                        0.029
                    ],
                    [
                        7,
                        0.039
                    ],
                    [
                        10,
                        0.055
                    ]
                ],
                result: {
                    id: 1,
                    v: 50,
                    a: "",
                    m: "",
                    c: "",
                    date: ""
                },
            },
            {
                st: [],
                judge: false,
                category: 1,
                range_max: 0.05,
                range_min: "",
                assessment: true,
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "氰化物",
                a: 0,
                method: "异烟酸-吡唑酮分光光度法",
                b: 1,
                r: 1,
                formula: "",
                x: [],
                y: [],
                limit: 0.002,
                standard_series: [],
                instrument_model: "分光光度计",
                GB: "GB/T 5750.5-2006",
                items: [
                    [
                        0,
                        0.004
                    ],
                    [
                        0.1,
                        0.016
                    ],
                    [
                        0.3,
                        0.035
                    ],
                    [
                        0.5,
                        0.053
                    ],
                    [
                        0.7,
                        0.073
                    ],
                    [
                        0.9,
                        0.092
                    ]
                ],
                result: {
                    id: 1,
                    v: 250,
                    a: "",
                    m: "",
                    c: "",
                    date: "",
                },
            },
            {
                st: [],
                judge: false,
                category: 1,
                range_max: 0.1,
                range_min: "",
                assessment: true,
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "锰",
                limit: 0.05,
                method: "过硫酸铵分光光度法",
                a: 0,
                b: 1,
                r: 1,
                formula: "",
                x: [],
                y: [],
                standard_series: [],
                instrument_model: "分光光度计",
                GB: "GB/T 5750.6-2006",
                items: [
                    [
                        0,
                        0.002
                    ],
                    [
                        10,
                        0.008
                    ],
                    [
                        30,
                        0.024
                    ],
                    [
                        50,
                        0.038
                    ],
                    [
                        70,
                        0.053
                    ],
                    [
                        90,
                        0.068
                    ]
                ],
                result: {
                    id: 1,
                    v: 50,
                    a: "",
                    m: "",
                    c: "",
                    date: "",
                },
            },
            {
                st: [],
                judge: false,
                category: 1,
                range_max: 1.0,
                range_min: "",
                assessment: true,
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "氟化物",
                limit: 0.2,
                method: "离子选择电极法",
                a: 0,
                b: 1,
                r: 1,
                formula: "",
                x: [],
                y: [],
                standard_series: [],
                instrument_model: "氟离子选择电极和甘汞电极、精密酸度计、电磁搅拌器",
                GB: "GB/T 5750.5-2006",
                items: [
                    [
                        0,
                        0.371
                    ],
                    [
                        2.5,
                        0.432
                    ],
                    [
                        5,
                        0.473
                    ],
                    [
                        10,
                        0.559
                    ],
                    [
                        20,
                        0.724
                    ],
                    [
                        40,
                        1.053
                    ]
                ],
                result: {
                    id: 1,
                    v: 25,
                    a: "",
                    m: "",
                    c: "",
                    date: "",
                },
            },
            {
                st: [],
                judge: false,
                category: 1,
                range_max: 20,
                range_min: "",
                assessment: true,
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "硝酸盐氮",
                limit: 0.5,
                method: "麝香草酚分光光度法",
                a: 0,
                b: 1,
                r: 1,
                formula: "",
                x: [],
                y: [],
                standard_series: [],
                instrument_model: "分光光度计",
                GB: "GB/T 5750.5-2006",
                items: [
                    [
                        0,
                        0.007
                    ],
                    [
                        0.5,
                        0.030
                    ],
                    [
                        1,
                        0.047
                    ],
                    [
                        3,
                        0.130
                    ],
                    [
                        5,
                        0.197
                    ],
                    [
                        7,
                        0.278
                    ],
                    [
                        10,
                        0.405
                    ]
                ],
                result: {
                    id: 1,
                    v: 1,
                    a: "",
                    m: "",
                    c: "",
                    date: "",
                },
            },
            {
                st: [],
                judge: false,
                category: 1,
                range_max: 0.2,
                range_min: "",
                assessment: true,
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "铝",
                limit: 0.008,
                method: "铬天青S分光光度法",
                a: 0,
                b: 1,
                r: 1,
                formula: "",
                x: [],
                y: [],
                standard_series: [],
                instrument_model: "酸度计、分光光度计",
                GB: "GB/T 5750.6-2006",
                items: [
                    [
                        0,
                        0.004
                    ],
                    [
                        0.5,
                        0.066
                    ],
                    [
                        1,
                        0.143
                    ],
                    [
                        2,
                        0.300
                    ],
                    [
                        3,
                        0.446
                    ],
                    [
                        4,
                        0.585
                    ],
                    [
                        5,
                        0.725
                    ]
                ],
                result: {
                    id: 1,
                    v: 100,
                    a: "",
                    m: "",
                    c: "",
                    date: ""
                },
            },
            {
                st: [],
                judge: false,
                category: 1,
                range_max: 0.002,
                range_min: "",
                assessment: true,
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "挥发酚",
                limit: 0.002,
                method: "4-氨基安替吡啉三氯甲烷萃取分光光度法",
                a: 0,
                b: 1,
                r: 1,
                formula: "",
                x: [],
                y: [],
                standard_series: [],
                instrument_model: "全玻璃整流器、分液漏斗、分光光度计",
                GB: "GB/T 5750.4-2006",
                items: [
                    [
                        0,
                        0.006
                    ],
                    [
                        0.5,
                        0.016
                    ],
                    [
                        1,
                        0.028
                    ],
                    [
                        3,
                        0.070
                    ],
                    [
                        5,
                        0.121
                    ],
                    [
                        7,
                        0.162
                    ],
                    [
                        10,
                        0.234
                    ]
                ],
                result: {
                    id: 1,
                    v: 50,
                    a: "",
                    m: "",
                    c: "",
                    date: ""
                },
            },
            {
                st: [],
                judge: false,
                category: 1,
                range_max: 0.001,
                range_min: "",
                assessment: true,
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "汞",
                limit: 0.001,
                method: "双硫腙分光光度法",
                a: 0,
                b: 1,
                r: 1,
                formula: "",
                x: [],
                y: [],
                standard_series: [],
                instrument_model: "分液漏斗、分光光度计",
                GB: "GB/T 5750.6-2006",
                items: [
                    [
                        0,
                        0.406
                    ],
                    [
                        0.5,
                        0.423
                    ],
                    [
                        1,
                        0.441
                    ],
                    [
                        2,
                        0.474
                    ],
                    [
                        4,
                        0.531
                    ],
                    [
                        6,
                        0.598
                    ],
                    [
                        8,
                        0.660
                    ]
                ],
                result: {
                    id: 1,
                    v: 50,
                    a: "",
                    m: "",
                    c: "",
                    date: ""
                },
            },
            {
                st: [],
                judge: false,
                category: 1,
                range_max: 0.3,
                range_min: "",
                assessment: true,
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "阴离子合成洗涤剂",
                limit: 0.05,
                method: "亚甲蓝分光光度法",
                a: 0,
                b: 1,
                r: 1,
                formula: "",
                x: [],
                y: [],
                standard_series: [],
                instrument_model: "分液漏斗、分光光度计",
                GB: "GB/T 5750.4-2006",
                items: [
                    [
                        0,
                        0.019
                    ],
                    [
                        5,
                        0.041
                    ],
                    [
                        10,
                        0.075
                    ],
                    [
                        20,
                        0.128
                    ],
                    [
                        30,
                        0.185
                    ],
                    [
                        40,
                        0.233
                    ],
                    [
                        50,
                        0.290
                    ]
                ],
                result: {
                    id: 1,
                    v: 50,
                    a: "",
                    m: "",
                    c: "",
                    date: ""
                },
            },
            {
                st: [],
                judge: false,
                category: 1,
                range_max: 0.01,
                range_min: "",
                assessment: true,
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "硒",
                limit: 0.001,
                method: "二氨基联苯胺分光光度法",
                a: 0,
                b: 1,
                r: 1,
                formula: "",
                x: [],
                y: [],
                standard_series: [],
                instrument_model: "分液漏斗、电热板、振荡器、分光光度计",
                GB: "GB/T 5750.6-2006",
                items: [
                    [
                        0,
                        0.024
                    ],
                    [
                        1,
                        0.035
                    ],
                    [
                        2,
                        0.047
                    ],
                    [
                        4,
                        0.068
                    ],
                    [
                        6,
                        0.088
                    ],
                    [
                        8,
                        0.110
                    ]
                ],
                result: {
                    id: 1,
                    v: 50,
                    a: "",
                    m: "",
                    c: "",
                    date: ""
                },
            },
            {
                st: [],
                judge: false,
                category: 1,
                range_max: 0.005,
                range_min: "",
                assessment: true,
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "镉",
                limit: 0.005,
                method: "双硫腙分光光度法",
                a: 0,
                b: 1,
                r: 1,
                formula: "",
                x: [],
                y: [],
                standard_series: [],
                instrument_model: "分液漏斗、分光光度计",
                GB: "GB/T 5750.6-2006",
                items: [
                    [
                        0,
                        0.207
                    ],
                    [
                        0.25,
                        0.216
                    ],
                    [
                        0.5,
                        0.224
                    ],
                    [
                        1,
                        0.242
                    ],
                    [
                        2,
                        0.273
                    ],
                    [
                        4,
                        0.336
                    ]
                ],
                result: {
                    id: 1,
                    v: 100,
                    a: "",
                    m: "",
                    c: "",
                    date: ""
                },
            },
            {
                st: [],
                judge: false,
                category: 1,
                range_max: 0.01,
                range_min: "",
                assessment: true,
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "铅",
                limit: 0.01,
                method: "双硫腙分光光度法",
                a: 0,
                b: 1,
                r: 1,
                formula: "",
                x: [],
                y: [],
                standard_series: [],
                instrument_model: "分液漏斗、分光光度计",
                GB: "GB/T 5750.6-2006",
                items: [
                    [
                        0,
                        0.434
                    ],
                    [
                        0.5,
                        0.451
                    ],
                    [
                        1,
                        0.471
                    ],
                    [
                        2,
                        0.502
                    ],
                    [
                        4,
                        0.567
                    ],
                    [
                        6,
                        0.630
                    ]
                ],
                result: {
                    id: 1,
                    v: 50,
                    a: "",
                    m: "",
                    c: "",
                    date: ""
                },
            },
            {
                st: [],
                judge: false,
                category: 1,
                range_max: 0.05,
                range_min: "",
                assessment: true,
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "六价铬",
                limit: 0.004,
                method: "二苯碳酰二肼分光光度法",
                a: 0,
                b: 1,
                r: 1,
                formula: "",
                x: [],
                y: [],
                standard_series: [],
                instrument_model: "分光光度计",
                GB: "GB/T 5750.6-2006",
                items: [
                    [
                        0,
                        0.002
                    ],
                    [
                        0.5,
                        0.012
                    ],
                    [
                        1,
                        0.019
                    ],
                    [
                        2,
                        0.034
                    ],
                    [
                        4,
                        0.069
                    ],
                    [
                        6,
                        0.103
                    ]
                ],
                result: {
                    id: 1,
                    v: 50,
                    a: "",
                    m: "",
                    c: "",
                    date: ""
                }
            },
            {
                st: [],
                judge: false,
                category: 1,
                range_max: 1.0,
                range_min: "",
                assessment: true,
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "铜",
                limit: 0.02,
                method: "二乙基二硫代氨基甲酸钠分光光度法",
                a: 0,
                b: 1,
                r: 1,
                formula: "",
                x: [],
                y: [],
                standard_series: [],
                instrument_model: "分液漏斗、分光光度计",
                GB: "GB/T 5750.6-2006",
                items: [
                    [
                        0,
                        0.038
                    ],
                    [
                        2,
                        0.080
                    ],
                    [
                        4,
                        0.121
                    ],
                    [
                        6,
                        0.160
                    ],
                    [
                        8,
                        0.201
                    ],
                    [
                        10,
                        0.238
                    ]
                ],
                result: {
                    id: 1,
                    v: 50,
                    a: "",
                    m: "",
                    c: "",
                    date: ""
                },
            },
            {
                st: [],
                judge: false,
                category: 1,
                range_max: 0.1,
                range_min: "",
                assessment: true,
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "锰",
                limit: 0.05,
                method: "过硫酸铵分光光度法",
                a: 0,
                b: 1,
                r: 1,
                formula: "",
                x: [],
                y: [],
                standard_series: [],
                instrument_model: "分光光度计",
                GB: "GB/T 5750.6-2006",
                items: [
                    [
                        0,
                        0.002
                    ],
                    [
                        10,
                        0.008
                    ],
                    [
                        30,
                        0.024
                    ],
                    [
                        50,
                        0.038
                    ],
                    [
                        70,
                        0.053
                    ],
                    [
                        90,
                        0.068
                    ]
                ],
                result: {
                    id: 1,
                    v: 50,
                    a: "",
                    m: "",
                    c: "",
                    date: ""
                },
            },
            {
                st: [],
                judge: false,
                category: 1,
                range_max: 0.3,
                range_min: "",
                assessment: true,
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "铁",
                limit: 0.05,
                method: "二氮杂菲分光光度法",
                a: 0,
                b: 1,
                r: 1,
                formula: "",
                x: [],
                y: [],
                standard_series: [],
                instrument_model: "分光光度计",
                GB: "GB/T 5750.6-2006",
                items: [
                    [
                        0,
                        0.095
                    ],
                    [
                        5,
                        0.122
                    ],
                    [
                        10,
                        0.149
                    ],
                    [
                        20,
                        0.196
                    ],
                    [
                        30,
                        0.246
                    ],
                    [
                        40,
                        0.290
                    ]
                ],
                result: {
                    id: 1,
                    v: 50,
                    a: "",
                    m: "",
                    c: "",
                    date: ""
                },
            },
            {
                st: [],
                judge: false,
                category: 1,
                range_max: 1.0,
                range_min: "",
                assessment: true,
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "锌",
                limit: 0.05,
                method: "双硫腙分光光度法",
                a: 0,
                b: 1,
                r: 1,
                formula: "",
                x: [],
                y: [],
                standard_series: [],
                instrument_model: "分液漏斗、分光光度计",
                GB: "GB/T 5750.6-2006",
                items: [
                    [
                        0,
                        0.748
                    ],
                    [
                        0.5,
                        0.811
                    ],
                    [
                        1,
                        0.890
                    ],
                    [
                        2,
                        1.036
                    ],
                    [
                        4,
                        1.32
                    ],
                    [
                        6,
                        1.602
                    ]
                ],
                result: {
                    id: 1,
                    v: 50,
                    a: "",
                    m: "",
                    c: "",
                    date: ""
                },
            },
            {
                st: [],
                judge: false,
                category: 1,
                range_max: 250,
                range_min: "",
                assessment: true,
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "硫酸盐",
                limit: 5,
                method: "铬酸钡分光光度法",
                a: 0,
                b: 1,
                r: 1,
                formula: "",
                x: [],
                y: [],
                standard_series: [],
                instrument_model: "电磁搅拌器、分光光度计",
                GB: "GB/T 5750.5-2006",
                items: [
                    [
                        0,
                        0.029
                    ],
                    [
                        3,
                        0.355
                    ],
                    [
                        5,
                        0.574
                    ],
                    [
                        7,
                        0.784
                    ],
                    [
                        10,
                        1.137
                    ]
                ],
                result: {
                    id: 1,
                    v: 50,
                    a: "",
                    m: "",
                    c: "",
                    date: ""
                },
            },
        ],
    },
    created() {
        this.init_login()
        this.get_opt(this.names1,1)
        this.get_opt(this.names2,2)
        this.get_opt(this.names3,3)
    },
    watch: {
        selected1() {
            /**
             * 当选择了项目时，显示标准系列的列表
             */
            // this.get_opt(this.names1, 1)
            this.show1 = true;
            this.show2 = false;
            this.show3 = false;
            this.get_series();
            this.save_series();
            this.math_formula();
            show_chart();
        },
        selected2() {
            /**
             * 当选择了滴定类项目时，只需要计算，不需要标准系列和曲线
             */
            // this.get_opt(this.names2, 2)
            this.show2 = true;
            this.show3 = false;
            this.show1 = false;
        },
        selected3() {
            /**
             * 感官性状
             */
            // this.get_opt(this.names3, 3)
            this.show1 = false;
            this.show2 = false;
            this.show3 = true;
        }
    },
    methods: {
        save_opt(s,index) {
            /**
             * 增加项目
             */
            let p = s.name + s.category + 'par'
            s.st = []
            s.judge = false
            s.category = 3
            s.assessment = true
            s.start = 1
            s.end = 1
            s.items = []
            switch(index){
                case 2:
                    s.result = {
                        id: "",
                        v: "",
                        coefficient: "",
                        K: "",
                        a0: "",
                        a1: "",
                        m: "",
                        c: "",
                        date: ""
                    }
                    break
                case 3:
                    s.result = {
                    id: "",
                    v: "",
                    c: "",
                    date: ""
                    }
                    break
                default:
                    s.a = 0,
                    s.b = 1,
                    s.r = 1,
                    s.formula = "",
                    s.x = []
                    s.y = []
                    s.standard_series = []
                    s.result = {
                        id: 1,
                        v: "",
                        a: "",
                        m: "",
                        c: ""
                    }
            }
            let x = JSON.stringify(s)
            localStorage.setItem(p, x)
        },
        search_opt(x, ns) {
            for (let m = 0; m < x.length; m++) {
                x[m] = JSON.parse(x)
                for (let a = 0; a < ns.length; a++) {
                    if (x[m].name == ns[a].name) {
                        ns[a] = x[m]
                    }else{
                        ns.push(x[m])
                        break
                    }
                }
            }
        },
        get_opt(ns, index) {
            let x = []
            let n = localStorage.length
            let reg = new RegExp(index+'par$')
            for (let i = 0; i < n; i++) {
                let key = localStorage.key(i)
                let v = localStorage.getItem(key)
                if (reg.test(key)) {
                    // reg.lastIndex = 0
                            x.push(v)
                        // case "2":
                        //     x2.push(v)
                        //     break
                        // case "3":
                        //     x3.push(v)
                        //     break
                    }
                    // reg_n.lastIndex = 0
                }
            this.search_opt(x,ns)
            // this.search_opt(x1, s1)
            // this.search_opt(x2, s2)
            // this.search_opt(x3, s3)
        },
        printContent(id) {
            /**
             * 打印部分记录，并保存
             */
            let subOutputRankPrint = document.getElementById(id);
            console.log(subOutputRankPrint.innerHTML);
            let newContent = subOutputRankPrint.innerHTML;
            let oldContent = document.body.innerHTML;
            document.body.innerHTML = newContent;
            window.print();
            window.location.reload();
            document.body.innerHTML = oldContent;
            return false;

        },

        date_y() {
            /**
             * 控制记录日期是否显示在页面上
             */
            this.date_show = !this.date_show;
        },
        get_list() {
            /**
             * 从标准系列表格中获取数据，存入数据组中，同时存入localStorage中。
             */
            let rows = document.getElementById(this.selected1.id).rows;
            for (let i = 1; i < rows.length; i++) {
                let value1 = Number(rows[i].cells[1].innerText);
                let value2 = Number(rows[i].cells[2].innerText);
                let value = [];
                value.push(value1, value2);
                this.selected1.x.push(value1);
                this.selected1.y.push(value2);
                this.selected1.standard_series[i - 1] = value;
            }
            localStorage.setItem(this.selected1.name, this.selected1.standard_series);
            this.get_series();
            this.save_series();
            this.math_formula();
            show_chart();
        },
        get_series() {
            /**
             * 从localStorage中获取保存的标准系列,如果是第一次使用，
             * 会调用默认的标准系列,同时渲染出标准系列表格。
             * 同时，把数据存入所选项目的standard_series中。
             */
            let series_data = localStorage.getItem(this.selected1.name);
            if (series_data !== null) {
                series_data = series_data.split(",");
                series_data = series_data.map(Number);
                let new_data = [];
                let x = [];
                for (let i = 0; i < series_data.length / 2; i++) {
                    x[i] = series_data.slice(i * 2, i * 2 + 2);
                    new_data.push(x[i]);
                }
                this.selected1.standard_series = new_data;
            } else {
                this.selected1.standard_series = this.selected1.items
            }
        },
        save_series() {
            /**
             * 从页面的标准系列表格中取值，做好回归分析的准备。
             */
            this.selected1.x = []; //标准系列的加样量数据
            this.selected1.y = []; //标准系列的吸光度数据
            let rows = this.selected1.standard_series;
            for (let i = 0; i < rows.length; i++) {
                this.selected1.x[i] = rows[i][0];
                this.selected1.y[i] = rows[i][1];
            }
        },
        cal_b() {
            /**
             * 根据当前项目的标准系列算出标准回归公式的回归系数
             */
            this.selected1.b = 0;
            let n = this.selected1.x.length;
            let x_ = [];
            for (let i = 0; i < n; i++) {
                x_.push(this.selected1.x[i] * this.selected1.x[i]);
            }
            let over = this.sum(this.selected1.y, this.selected1.x) - n * this.average(this.selected1.x) * this.average(this.selected1.y);
            let under = this.sum_1(x_) - n * (this.average(this.selected1.x) * this.average(this.selected1.x));
            this.selected1.b = (over / under);
        },
        cal_a() {
            /**
             * 根据当前项目的标准系列算出标准回归公式的斜率
             */
            this.selected1.a = 1;
            this.selected1.a = (this.average(this.selected1.y) - this.selected1.b * this.average(this.selected1.x));
        },
        cal_r() {
            /*
             * 根据当前项目的标准系列算出标准系列的相关系数
             */
            this.selected1.r = 1;
            let n = this.selected1.x.length;
            let over = this.sum(this.selected1.y, this.selected1.x) - n * this.average(this.selected1.x) * this.average(this.selected1.y);
            let under = Math.sqrt((this.sum(this.selected1.x, this.selected1.x) - n * this.average(this.selected1.x) * this.average(this.selected1.x)) * (this.sum(this.selected1.y, this.selected1.y) - n * this.average(this.selected1.y) * this.average(this.selected1.y)));
            this.selected1.r = (over / under);
        },
        math_formula() {
            /**
             * 当计算结果小于最小检出限时，应当报告为<最小检出限
             */
            this.cal_b();
            this.cal_a();
            this.cal_r();
            this.selected1.formula = "";
            if (this.selected1.a >= 0) {
                this.selected1.formula = "<p>回归方程为：y = " + this.selected1.b.toFixed(4) + "x + " + this.selected1.a.toFixed(4) + "</p><p>相关系数为：r = " + this.selected1.r.toFixed(4) + "</p>";

            } else {
                let a = -(this.selected1.a);
                this.selected1.formula = "<p>回归方程为：y = " + this.selected1.b.toFixed(4) + "x - " + a.toFixed(4) + "</p><p>相关系数为：r = " + this.selected1.r.toFixed(4) + "</p>";
            }

        },
        add_item() {
            /**
             * 在标准系列列表中增加一行
             */
            this.selected1.standard_series.push(this.new_item);
        },

        del(index) {
            /**
             * 在列表中删除本行
             */
            this.selected1.standard_series.splice(index, 1);
        },
        add_sample(s) {
            /**
             * 增加样品行
             */
            this.add = true;
            this.mystorages(s)
            this.set_record(s)
            this.useCount(s);
            this.useJudge(s)
        },
        work(s) {
            this.save_result(s)
            this.mystorages(s)
        },
        // del_sample(s, index) {
        //     /**
        //      * 删除样品行
        //      */
        //     s.results.splice(index, 1);
        // },
        sum(arr1, arr2) {
            /**
             * 功能函数
             * 两个列表一一对应的相乘然后求总和
             */
            let result = 0;
            for (let i = 0; i < arr1.length; i++) {
                result += (arr1[i] * arr2[i]);
            }
            return result;
        },
        sum_1(arr) {
            /**
             * 功能函数
             * 列表中数据求和
             */
            let z = 0;
            for (let i = 0; i < arr.length; i++) {
                z += arr[i];
            }
            return z;
        },
        average(arr) {
            /**
             * 功能函数
             * 求列表数据的平均值
             */
            let over = this.sum_1(arr);
            return over / arr.length;
        },
        get_m(s) {
            /**
             * 根据出当前项目的吸光度计算出样品所含物质质量
             */
            let st = s.result;
            st.m = (((st.a - s.a) / s.b).toFixed(3));
            return st.m;
        },

        get_c2(s) {
            /**
             * 根据出当前项目的标准消耗量计算出样品所含物质浓度
             */
            let coefficient = s.result.coefficient;
            let a0 = s.result.a0;
            let a1 = s.result.a1;
            let K = s.result.K;
            let v = s.result.v;
            let a = a1 - a0;
            if (s == this.selected3) {
                s.result.c = s.result.c
            } else if (s.a == "耗氧量") {
                s.result.c = (a * coefficient * K / v).toFixed(2)
            } else {
                s.result.c = (a * coefficient / v).toFixed(2);
            }
            return s.result.c;
        },
        get_c(s) {
            /**
             * 根据当前项目的加样体积和质量算出样品中物质的浓度
             */
            let v = s.result.v;
            let m = s.result.m;

            if (s.name == "硫酸盐") {
                s.result.c = (1000 * m / v).toFixed(1);
            } else {
                s.result.c = (m / v).toFixed(2);
            }
            return s.result.c
        },
        get_range(s) {
            let max = s.range_max;
            let min = s.range_min;
            let range = "";
            switch (s.name) {
                case "酸碱度":
                    range = min + "-" + max;
                    break;
                case "臭和味":
                case "肉眼可见物":
                    range = "---";
                    break;
                default:
                    range = "<" + max;
            }
            return range;
        },
        save_result(s) {
            /**
             * 从输入吸光度后计算得到的结果表格中获取数据,存入localStorage
             */

            let res = s.result
            switch (s) {
                case this.selected3:
                    {
                        res.c = s.result.c;
                        switch (s.name) {
                            case "酸碱度":
                                res.assessment = (res.c > s.range_max || res.c < s.range_min) ? "不合格" : "合格"
                                break
                            default:
                                res.assessment = (res.c > s.range_max) ? "不合格" : "合格"
                        }
                        break
                    }
                case this.selected2:
                    {
                        res.c = this.get_c2(s);
                        res.assessment = (res.c > s.range_max) ? "不合格" : "合格";
                        break;
                    }
                default:
                    {
                        res.limit = s.limit
                        res.m = this.get_m(s);
                        res.c = this.get_c(s);
                        res.assessment = (res.c > s.range_max) ? "不合格" : "合格"
                    }
            }
            res.date = this.dateFormat(new Date());
            res.id = s.start;
            res.unit = s.unit;
            res.range = this.get_range(s);
            let str = JSON.stringify(res); //格式化后才能存入 
            let p = (s.name + s.start + "报告结果");
            localStorage.setItem(p, str);
            res.a = "";
            res.a1 = "";
            res.c = "";
            this.save_r(s)
        },
        save_r(s) {
            this.d1.id = s.start;
            this.d2.id = s.start;
            this.d3.id = s.start;
            this.d4.id = s.start;
            this.d5.id = s.start;
            let a1 = JSON.stringify(this.d1);
            let a2 = JSON.stringify(this.d2);
            let a3 = JSON.stringify(this.d3);
            let a4 = JSON.stringify(this.d4);
            let a5 = JSON.stringify(this.d5);
            localStorage.setItem("臭和味" + s.start + "报告结果", a1)
            localStorage.setItem("肉眼可见物" + s.start + "报告结果", a2)
            localStorage.setItem("总大肠菌群" + s.start + "报告结果", a3)
            localStorage.setItem("大肠埃希氏菌" + s.start + "报告结果", a4)
            localStorage.setItem("耐热大肠菌群" + s.start + "报告结果", a5)

            let n = s.name + "end";
            s.start = Number(s.start) + 1
            localStorage.setItem(n, s.start);
        },
        mystorages(s) {
            /**
             * 从localStorage中获取保存的结果，存入st数组
             */
            s.st = [];
            let n = s.name + "end";
            if (localStorage.getItem(n) !== null) {
                let keys = this.get_key(s);
                for (let i = 0; i < keys.length; i++) {
                    let x = (s.name + keys[i] + "报告结果");
                    let p = localStorage.getItem(x);
                    p = (JSON.parse(p));
                    p.limit = s.limit
                    p.range_max = s.range_max;
                    p.range_min = s.range_min;
                    p.unit = s.unit
                    s.st.push(p);
                }
                s.start = Number(localStorage.getItem(n));
            }
            //对结果依据编号从小到大进行排序
            s.st.sort(function (i, j) {
                return Number(i.id) > Number(j.id) ? 1 : -1
            });
        },
        set_record(s) {
            //最后一次输入记录后的标记,将成为下次打开是的开始编号
            s.end = (s.judge) ? s.start : 1
        },
        get_key(s) {
            /**
             * 获取localStorage中当前项目的结果记录中的首项id
             */
            let keys = [];
            var n = localStorage.length;
            for (let i = 0; i < n; i++) {
                let k = localStorage.key(i);
                if (k.search(s.name) != -1) {
                    if (k.search("报告结果") != -1) {
                        let number = k.replace(/^[^\d]*(\d+)[^\d]*$/, "$1");
                        //这个正则表达式获取字符串中的数字
                        keys.push(number);
                    }
                }
            }
            keys = keys.map(Number);
            keys.sort(function (i, j) {
                return i > j ? 1 : -1
            });
            return keys;
        },
        f_n(num, length) {
            /**
             * 格式化编号数字，不足三位的前面加0
             */
            return (Array(length).join("0") + num).slice(-length);
        },
        login_s() {
            /**
             * 把机构名称和机构代号存入localStorage
             */
            localStorage.setItem("company", this.company)
            localStorage.setItem("numbering", this.numbering)
            this.login_f = false
        },
        login_env() {
            /**
             *把当天的温湿度存入localStorage 
             */
            let date = new Date()
            date = this.dateFormat(date)
            let temprature = "T" + date
            let humidity = "H" + date
            localStorage.setItem(temprature, this.T)
            localStorage.setItem(humidity, this.H)
        },
        get_env(date) {
            /**
             * 获取特定日期的温度和湿度
             */
            date = this.dateFormat(date)
            let temprature = "T" + date
            let humidity = "H" + date
            let env = new Object
            env.T = localStorage.getItem(temprature)
            env.H = localStorage.getItem(humidity)
            this.T = (env.T)
            this.H = (env.H)
            return env
        },
        init_login() {
            /**
             * 初始化得到单位名称、机构编号、当日温度和湿度
             */
            if (localStorage.getItem("company")) {
                this.login_f = false
                this.company = localStorage.getItem("company")
                this.numbering = localStorage.getItem("numbering")
            }
            this.get_env(new Date())
        },
        //时间格式化函数，此处仅针对yyyy-MM-dd的格式进行格式化
        dateFormat(time) {
            var date = new Date(time);
            var year = date.getFullYear();
            /* 在日期格式中，月份是从0开始的，因此要加0
             * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
             * */
            var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            return year + "-" + month + "-" + day;
        },

        useCount(s) {
            //计数页面登录次数
            let pagecount = s.name + "pagecount";
            if (localStorage.getItem(pagecount)) {
                localStorage.setItem(pagecount, Number(localStorage.getItem(pagecount)) + 1);
            } else {
                localStorage.setItem(pagecount, 1);
            }
        },
        useJudge(s) {
            //判断是否保存过报告结果
            let judge = s.name + "judge";
            if (localStorage.getItem(judge) !== null) {
                s.judge = true;
                localStorage.setItem(judge, true);
            } else {
                s.judge = false;
                localStorage.setItem(judge, false);
            }
        },
    },
    computed: {

        recived_date() {
            let date = new Date();
            return this.dateFormat(date)
        },
        test_date() {
            let date = new Date();
            return this.dateFormat(date)

        },
    }
});
let series_data = [];

function getTableContent() {
    /**
     * 从存入的standard_series的标准系列提取数据，以备绘制出标准曲线
     * 同时把数据存入localStorage
     */
    series_data = app.selected1.standard_series;
    localStorage.setItem(app.selected1.name, series_data)
};

function focus_move() {
    /**
     * 移动焦点到页面底部
     */
    // window.scrollTo(0, docuent.documentElement.clientHeight);
    setTimeout(() => {
        let x = Math.ceil(5000)
        let y = 0
        y += x
        window.scrollTo(y, x)
    })
};

function show_chart() {
    /**
     * 用highcharts绘制标准曲线
     */
    getTableContent(app.selected1.id);
    //获取当前项目的标准系列数据
    chart = Highcharts.chart("line", {
        title: {
            text: "标准回归曲线"
        },
        subtitle: {
            text: app.selected1.name
        },
        xAxis: {
            title: {
                text: "加样量(μg)"
            },
        },
        yAxis: {
            title: {
                text: "吸光度"
            },
        },
        legend: {
            layout: "vertical",
            align: "right",
            verticalAlign: "middle"
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: true
                },
                pointStart: 0,
            }
        },
        series: [{
            name: "吸光度",
            data: series_data
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: "horizontal",
                        align: "center",
                        verticalAlign: "bottom"
                    }
                }
            }]
        }
    });
}
