var app = new Vue({
    el: "#root",
    data: {
        submit_show: false,
        first_opt: false,
        second_opt: false,
        selected_opt: [],
        projects: {
            微生物指标microbe: [
                //微生物指标
                '总大肠菌群',
                '耐热大肠菌群',
                '大肠埃希氏菌',
                '菌落总数',
            ],
            毒理学指标toxicology: [
                //毒理学指标
                '砷',
                '镉',
                '铬(六价)',
                '铅',
                '汞',
                '硒',
                '氟化物',
                '氰化物',
                '硝酸盐氮',
                '四氯化碳',
                '三氯甲烷',
                '溴酸盐',
                '甲醛',
                '亚氯酸盐',
                '氯酸盐',
            ],
            放射性指标radioactivity: [
                //放射性指标
                '总α放射性',
                '总β放射性'
            ],
            感官性状和一般化学指标sensory_chemical: [
                //感官性状和一般化学指标
                'pH',
                '浑浊度',
                '色度',
                '肉眼可见物',
                '臭和味',
                '总硬度',
                '溶解性总固体',
                '挥发酚类',
                '电导率',
                '阴离子合成洗涤剂',
                '铁',
                '锰',
                '铜',
                '锌',
                '铝',
                '硫酸盐',
                '氯化物',
                '耗氧量',
            ],
            消毒剂指标: [
                '游离余氯',
                '总氯',
                '二氧化氯',
                '臭氧',
            ]
        },
        pend_project: [],
        numbering: '',
        company: '',
        username: '',
        login_f: true,
        index: 0, //这个是表格索引==序号
        new_item: '', //表格新行
        show_v: true,
        show: false,
        show2: false,
        show3: false,
        add: false,
        date_show: false,
        vol_select: [
            50, 100, 250, 1, 25, 10
        ],
        selected: '',
        selected2: '',
        selected3: '',
        new_opt: {
            st: [],
            judge: false,
            range_max: '',
            assessment: true,
            unit: 'mg/L',
            v: '',
            start: 1,
            end: 1,
            id: 1,
            name: '',
            method: '',
            limit: '',
            a: 0,
            b: 1,
            r: 1,
            c: 0,
            formula: '',
            x: [],
            y: [],
            standard_series: [],
            instrument_model: '分光光度计',
            GB: 'GB/T 5750.5-2006',
            html: '',
            items: [],
            results: [],
            new_results: {
                id: 1,
                v: '',
                a: '',
                m: '',
                date: ''
            },
        },
        new_opt2: {
            st: [],
            judge: false,
            range_max: '',
            assessment: true,
            unit: 'mg/L',
            v: 1,
            start: 1,
            end: 1,
            id: 1,
            name: '',
            method: '',
            limit: '',
            a0: 0.05,
            a1: '',
            formula: '',
            instrument_model: '',
            GB: 'GB/T 5750.5-2006',
            html: '',
            items: [],
            results: [],
            new_results: {
                id: 1,
                v: '',
                st_v: '',
                K: '',
                a0: '',
                a1: '',
                m: '',
                date: ''
            },
        },
        new_opt3: {
            st: [],
            judge: false,
            range_max: '',
            assessment: true,
            unit: 'mg/L',
            v: 1,
            start: 1,
            end: 1,
            id: 1,
            name: '',
            method: '',
            limit: '',
            instrument_model: '',
            GB: 'GB/T 5750.5-2006',
            items: [],
            results: [],
            new_results: {
                id: '',
                v: '',
                st_v: '',
                c: 7.0,
                date: ''
            },
        },
        names3: [
            {
                st: [],
                judge: false,
                range_min: 6.5,
                range_max: 8.5,
                assessment: true,
                unit: '度',
                v: 1,
                start: 1,
                end: 1,
                id: 1,
                name: '酸碱度',
                method: '',
                limit: '',
                instrument_model: '',
                GB: 'GB/T 5750.4-2006',
                items: [],
                results: [],
                new_results: {
                    id: '',
                    v: '',
                    c: '',
                    date: '',
                },
            },
            {
                st: [],
                judge: false,
                range_min: '',
                range_max: '',
                assessment: true,
                unit: '度',
                v: 1,
                start: 1,
                end: 1,
                id: 1,
                name: '色度',
                method: '',
                limit: '',
                instrument_model: '',
                GB: 'GB/T 5750.4-2006',
                items: [],
                results: [],
                new_results: {
                    id: '',
                    v: '',
                    c: '',
                    date: '',
                },
            },
            {
                st: [],
                judge: false,
                range_min: '',
                range_max: '',
                assessment: true,
                unit: '度',
                v: 1,
                start: 1,
                end: 1,
                id: 1,
                name: '浑浊度',
                method: '',
                limit: '',
                instrument_model: '',
                GB: 'GB/T 5750.4-2006',
                items: [],
                results: [],
                new_results: {
                    id: '',
                    v: '',
                    c: '',
                    date: '',
                },
            },
            {
                st: [],
                judge: false,
                range_min: '',
                range_max: '',
                assessment: true,
                unit: '无量纲',
                v: 50,
                start: 1,
                end: 1,
                id: 1,
                name: '臭和味',
                method: '',
                limit: '',
                instrument_model: '',
                GB: 'GB/T 5750.4-2006',
                items: [],
                results: [],
                new_results: {
                    id: '',
                    v: '',
                    c: '无异臭和异味',
                    date: '',
                },
            },
            {
                st: [],
                judge: false,
                range_min: '',
                range_max: '',
                assessment: true,
                unit: '无量纲',
                v: 1,
                start: 1,
                end: 1,
                id: 1,
                name: '肉眼可见物',
                method: '',
                limit: '',
                instrument_model: '',
                GB: 'GB/T 5750.5-2006',
                items: [],
                results: [],
                new_results: {
                    id: '',
                    v: '',
                    c: '无',
                    date: '',
                },
            },
        ],
        names2: [
            {
                st: [],
                judge: false,
                range_max: 250,
                assessment: true,
                unit: 'mg/L',
                v: 10,
                start: 1,
                end: 1,
                id: 1,
                name: '氯化物',
                method: '滴定法',
                limit: 5,
                st_v: 500,
                a0: 0.05,
                a1: '',
                a: '',
                c: 0,
                instrument_model: '滴定管',
                GB: 'GB/T 5750.4-2006',
                html: '',
                items: [],
                results: [],
                new_results: {
                    id: 1,
                    v: 10,
                    a0: 0.05,
                    a1: '',
                    st_v: 500,
                    c: '',
                    date: ''
                },
            },
            {
                st: [],
                judge: false,
                range_max: 1000,
                assessment: true,
                unit: 'mg/L',
                v: 50,
                start: 1,
                end: 1,
                id: 2,
                name: '总硬度',
                method: '',
                limit: 1,
                st_v: 1000.9,
                a0: 0.05,
                a1: '',
                a: '',
                c: 0,
                instrument_model: '',
                GB: 'GB/T 5750.4-2006',
                items: [],
                results: [],
                new_results: {
                    id: 1,
                    v: 50,
                    a0: 0.05,
                    a1: '',
                    st_v: 1000.9,
                    c: '',
                    date: ''
                },
            },
            {
                st: [],
                judge: false,
                range_max: 3,
                assessment: true,
                unit: 'mg/L',
                v: 100,
                start: 1,
                end: 1,
                id: 1,
                name: '耗氧量',
                method: '酸性高锰酸钾滴定法',
                limit: '0.05',
                st_v: 80,
                a0: 0.05,
                a1: '',
                a: '',
                c: 0,
                instrument_model: '',
                GB: 'GB/T 5750.7-2006',
                items: [],
                results: [],
                new_results: {
                    id: 1,
                    v: 100,
                    a0: 0.05,
                    a1: '',
                    st_v: 80,
                    K: 1,
                    c: '',
                    date: ''
                },
            },
        ],
        names: [
            {
                st: [],
                judge: false,
                range_max: 0.5,
                assessment: true,
                unit: 'mg/L',
                v: 50,
                start: 1,
                end: 1,
                id: 1,
                name: '氨氮',
                method: '',
                limit: 0.05,
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
                instrument_model: '分光光度计',
                GB: 'GB/T 5750.5-2006',
                html: '',
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
                results: [],
                new_results: {
                    id: 1,
                    v: 50,
                    a: '',
                    m: '',
                    date: ''
                },
            },
            {
                id: 2,
                st: [],
                judge: false,
                range_max: 0.05,
                assessment: true,
                unit: 'mg/L',
                v: 250,
                start: 1,
                end: 1,
                name: '氰化物',
                a: 0,
                method: '',
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                limit: 0.002,
                standard_series: [],
                instrument_model: '分光光度计',
                GB: 'GB/T 5750.5-2006',
                html: '',
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
                results: [],
                new_results: {
                    id: 1,
                    v: 250,
                    a: '',
                    m: '',
                },
            },
            {
                id: 3,
                st: [],
                judge: false,
                range_max: 0.1,
                assessment: true,
                unit: 'mg/L',
                v: 50,
                start: 1,
                end: 1,
                name: '锰',
                limit: 0.05,
                method: '',
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
                instrument_model: '分光光度计',
                GB: 'GB/T 5750.6-2006',
                html: '',
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
                results: [],
                new_results: {
                    id: 1,
                    v: 50,
                    a: '',
                    m: '',
                },
            },
            {
                id: 4,
                st: [],
                judge: false,
                range_max: 1.0,
                assessment: true,
                unit: 'mg/L',
                v: 25,
                start: 1,
                end: 1,
                name: '氟化物',
                limit: 0.2,
                method: '',
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
                instrument_model: '分光光度计',
                GB: 'GB/T 5750.5-2006',
                html: '',
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
                results: [],
                new_results: {
                    id: 1,
                    v: 25,
                    a: '',
                    m: '',
                },
            },
            {
                id: 5,
                st: [],
                judge: false,
                range_max: 20,
                assessment: true,
                unit: 'mg/L',
                v: 1,
                start: 1,
                end: 1,
                name: '硝酸盐氮',
                limit: 0.5,
                method: '',
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
                instrument_model: '分光光度计',
                GB: 'GB/T 5750.5-2006',
                html: '',
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
                results: [],
                new_results: {
                    id: 1,
                    v: 1,
                    a: '',
                    m: '',
                },
            },
            {
                id: 6,
                st: [],
                judge: false,
                range_max: 0.2,
                assessment: true,
                unit: 'mg/L',
                v: 100,
                start: 1,
                end: 1,
                name: '铝',
                limit: 0.008,
                method: '',
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
                instrument_model: '分光光度计',
                GB: 'GB/T 5750.6-2006',
                html: '',
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
                results: [],
                new_results: {
                    id: 1,
                    v: 100,
                    a: '',
                    m: '',
                },
            },
            {
                id: 7,
                st: [],
                judge: false,
                range_max: 0.002,
                assessment: true,
                unit: 'mg/L',
                v: 50,
                start: 1,
                end: 1,
                name: '挥发酚',
                limit: 0.002,
                method: '',
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
                instrument_model: '分光光度计',
                GB: 'GB/T 5750.4-2006',
                html: '',
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
                results: [],
                new_results: {
                    id: 1,
                    v: 50,
                    a: '',
                    m: '',
                },
            },
            {
                id: 8,
                st: [],
                judge: false,
                range_max: 0.001,
                assessment: true,
                unit: 'mg/L',
                v: 50,
                start: 1,
                end: 1,
                name: '汞',
                limit: 0.001,
                method: '',
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
                instrument_model: '分光光度计',
                GB: 'GB/T 5750.6-2006',
                html: '',
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
                results: [],
                new_results: {
                    id: 1,
                    v: 50,
                    a: '',
                    m: '',
                },
            },
            {
                id: 9,
                st: [],
                judge: false,
                range_max: 0.3,
                assessment: true,
                unit: 'mg/L',
                v: 50,
                start: 1,
                end: 1,
                name: '阴离子合成洗涤剂',
                limit: 0.05,
                method: '',
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
                instrument_model: '分光光度计',
                GB: 'GB/T 5750.4-2006',
                html: '',
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
                results: [],
                new_results: {
                    id: 1,
                    v: 50,
                    a: '',
                    m: '',
                },
            },
            {
                id: 10,
                st: [],
                judge: false,
                range_max: 0.01,
                assessment: true,
                unit: 'mg/L',
                v: 50,
                start: 1,
                end: 1,
                name: '硒',
                limit: 0.001,
                method: '',
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
                instrument_model: '分光光度计',
                GB: 'GB/T 5750.6-2006',
                html: '',
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
                results: [],
                new_results: {
                    id: 1,
                    v: 50,
                    a: '',
                    m: '',
                },
            },
            {
                id: 11,
                st: [],
                judge: false,
                range_max: 0.005,
                assessment: true,
                unit: 'mg/L',
                v: 100,
                start: 1,
                end: 1,
                name: '镉',
                limit: 0.005,
                method: '',
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
                instrument_model: '分光光度计',
                GB: 'GB/T 5750.6-2006',
                html: '',
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
                results: [],
                new_results: {
                    id: 1,
                    v: 100,
                    a: '',
                    m: '',
                },
            },
            {
                id: 12,
                st: [],
                judge: false,
                range_max: 0.01,
                assessment: true,
                unit: 'mg/L',
                v: 50,
                start: 1,
                end: 1,
                name: '铅',
                limit: 0.01,
                method: '',
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
                instrument_model: '分光光度计',
                GB: 'GB/T 5750.6-2006',
                html: '',
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
                results: [],
                new_results: {
                    id: 1,
                    v: 50,
                    a: '',
                    m: '',
                },
            },
            {
                id: 13,
                st: [],
                judge: false,
                range_max: 0.05,
                assessment: true,
                unit: 'mg/L',
                v: 50,
                start: 1,
                end: 1,
                name: '六价铬',
                limit: 0.004,
                method: '',
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
                instrument_model: '分光光度计',
                GB: 'GB/T 5750.6-2006',
                html: '',
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
                results: [],
                new_results: {
                    id: 1,
                    v: 50,
                    a: '',
                    m: '',
                }
            },
            {
                id: 14,
                st: [],
                judge: false,
                range_max: 1.0,
                assessment: true,
                unit: 'mg/L',
                v: 50,
                start: 1,
                end: 1,
                name: '铜',
                limit: 0.02,
                method: '',
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
                instrument_model: '分光光度计',
                GB: 'GB/T 5750.6-2006',
                html: '',
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
                results: [],
                new_results: {
                    id: 1,
                    v: 50,
                    a: '',
                    m: '',
                },
            },
            {
                id: 15,
                st: [],
                judge: false,
                range_max: 0.1,
                assessment: true,
                unit: 'mg/L',
                v: 50,
                start: 1,
                end: 1,
                name: '锰',
                limit: 0.05,
                method: '',
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
                instrument_model: '分光光度计',
                GB: 'GB/T 5750.6-2006',
                html: '',
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
                results: [],
                new_results: {
                    id: 1,
                    v: 50,
                    a: '',
                    m: '',
                },
            },
            {
                id: 16,
                st: [],
                judge: false,
                range_max: 0.3,
                assessment: true,
                unit: 'mg/L',
                v: 50,
                start: 1,
                end: 1,
                name: '铁',
                limit: 0.05,
                method: '',
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
                instrument_model: '分光光度计',
                GB: 'GB/T 5750.6-2006',
                html: '',
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
                results: [],
                new_results: {
                    id: 1,
                    v: 50,
                    a: '',
                    m: '',
                },
            },
            {
                id: 17,
                st: [],
                judge: false,
                range_max: 1.0,
                assessment: true,
                unit: 'mg/L',
                v: 50,
                start: 1,
                end: 1,
                name: '锌',
                limit: 0.05,
                method: '',
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
                instrument_model: '分光光度计',
                GB: 'GB/T 5750.6-2006',
                html: '',
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
                results: [],
                new_results: {
                    id: 1,
                    v: 50,
                    a: '',
                    m: '',
                },
            },
            {
                id: 18,
                st: [],
                judge: false,
                range_max: 250,
                assessment: true,
                unit: 'mg/L',
                v: 50,
                start: 1,
                end: 1,
                name: '硫酸盐',
                limit: 5,
                method: '',
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
                instrument_model: '分光光度计',
                GB: 'GB/T 5750.5-2006',
                html: '',
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
                results: [],
                new_results: {
                    id: 1,
                    v: 50,
                    a: '',
                    m: '',
                },
            },
        ],
    },
    created() {
        this.init_login()
    },
    watch: {
        selected() {
            /**
             * 当选择了项目时，显示标准系列的列表
             */
            this.show = true;
            this.show2 = false
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
            this.show2 = true;
            this.show3 = false;
            this.show = false
        },
        selected3() {
            /**
             * 感官性状和一般化学指标
             */
            this.show = false;
            this.show2 = false;
            this.show3 = true;
        }
    },
    methods: {
        add_opt() {
            /**
             * 增加比色类项目
             */
            this.names.push(this.new_opt);
        },
        add_opt2() {
            /**
             * 增加非比色类项目
             */
            this.names2.push(this.new_opt2);
        },
        add_opt3() {
            /**
             * 保存感官性状指标
             */
            this.name3.push(this.new_opt3)
        },

        printContent() {
            /**
             * 打印页面函数，从网上抄的
             */
            let subOutputRankPrint = document.getElementById('subOutputRank-print');
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
            let rows = document.getElementById(this.selected.id).rows;
            for (let i = 1; i < rows.length; i++) {
                let value1 = Number(rows[i].cells[1].innerText);
                let value2 = Number(rows[i].cells[2].innerText);
                let value = [];
                value.push(value1, value2);
                this.selected.x.push(value1);
                this.selected.y.push(value2);
                this.selected.standard_series[i - 1] = value;
            }
            localStorage.setItem(this.selected.name, this.selected.standard_series);
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
            let series_data = localStorage.getItem(this.selected.name);
            if (series_data) {
                series_data = series_data.split(',');
                series_data = series_data.map(Number);
                let new_data = [];
                let x = [];
                for (let i = 0; i < series_data.length / 2; i++) {
                    x[i] = series_data.slice(i * 2, i * 2 + 2);
                    new_data.push(x[i]);
                }
                this.selected.standard_series = new_data;
            } else {
                this.selected.standard_series = this.selected.items
            }
        },
        save_series() {
            /**
             * 从页面的标准系列表格中取值，做好回归分析的准备。
             */
            this.selected.x = []; //标准系列的加样量数据
            this.selected.y = []; //标准系列的吸光度数据
            let rows = this.selected.standard_series;
            for (let i = 0; i < rows.length; i++) {
                this.selected.x[i] = rows[i][0];
                this.selected.y[i] = rows[i][1];
            }
        },
        cal_b() {
            /**
             * 根据当前项目的标准系列算出标准回归公式的回归系数
             */
            this.selected.b = 0;
            let n = this.selected.x.length;
            let x_ = [];
            for (let i = 0; i < n; i++) {
                x_.push(this.selected.x[i] * this.selected.x[i]);
            }
            let over = this.sum(this.selected.y, this.selected.x) - n * this.average(this.selected.x) * this.average(this.selected.y);
            let under = this.sum_1(x_) - n * (this.average(this.selected.x) * this.average(this.selected.x));
            this.selected.b = (over / under);
        },
        cal_a() {
            /**
             * 根据当前项目的标准系列算出标准回归公式的斜率
             */
            this.selected.a = 1;
            this.selected.a = (this.average(this.selected.y) - this.selected.b * this.average(this.selected.x));
        },
        cal_r() {
            /*
             * 根据当前项目的标准系列算出标准系列的相关系数
             */
            this.selected.r = 1;
            let n = this.selected.x.length;
            let over = this.sum(this.selected.y, this.selected.x) - n * this.average(this.selected.x) * this.average(this.selected.y);
            let under = Math.sqrt((this.sum(this.selected.x, this.selected.x) - n * this.average(this.selected.x) * this.average(this.selected.x)) * (this.sum(this.selected.y, this.selected.y) - n * this.average(this.selected.y) * this.average(this.selected.y)));
            this.selected.r = (over / under);
        },
        math_formula() {
            /**
             * 当计算结果小于最小检出限时，应当报告为<最小检出限
             */
            this.cal_b();
            this.cal_a();
            this.cal_r();
            this.selected.formula = "";
            if (this.selected.a >= 0) {
                this.selected.formula = "<p>回归方程为：y = " + this.selected.b.toFixed(4) + "x + " + this.selected.a.toFixed(4) + "</p><p>相关系数为：r = " + this.selected.r.toFixed(4) + "</p>";

            } else {
                let a = -(this.selected.a);
                this.selected.formula = "<p>回归方程为：y = " + this.selected.b.toFixed(4) + "x - " + a.toFixed(4) + "</p><p>相关系数为：r = " + this.selected.r.toFixed(4) + "</p>";
            }

        },
        add_item() {
            /**
             * 在标准系列列表中增加一行
             */
            this.selected.standard_series.push(this.new_item);
        },

        del(index) {
            /**
             * 在列表中删除本行
             */
            this.selected.standard_series.splice(index, 1);
        },
        add_sample(item) {
            /**
             * 增加样品行
             */
            this.add = true;
            this.mystorages(item)
            this.set_record(item)
            this.useCount(item);
            this.useJudge(item)
        },
        work(id,somes){
            this.save_results(id,somes)
            this.mystorages(somes)
        },
        submit_result(somes) {
            /**
             * 提交数据到结果数组中
             */
            somes.new_results.id = somes.start;
            somes.new_results.date = this.dateFormat(new Date())
            somes.results.push(somes.new_results);
            if(somes == this.selected){
                somes.new_results= {
                    id: '',
                    v: somes.v,
                    a: '',
                    m: '',
                    c: '',
                    date: ''
                }
            }
            else if(somes == this.selected2){
                somes.new_results = {
                    id: somes.start,
                    v: somes.v,
                    a0: somes.a0,
                    a1: '',
                    st_v: somes.st_v,
                    K: 1,
                    m: '',
                    c: '',
                    date: ''
                }
            }
            else if(somes == this.selected3){
                
                somes.new_results = {
                    id: somes.start,
                    v: somes.v,
                    c: '',
                    date: ''
                }
            }
            somes.start = Number(somes.start)+1
        },
        del_sample(somes,index) {
            /**
             * 删除样品行
             */
            somes.results.splice(index, 1);
        },
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
        get_m(element) {
            /**
             * 根据出当前项目的吸光度计算出样品所含物质质量
             */
            let a = this.selected.results[element].a;
            this.selected.results[element].m = (((a - this.selected.a) / this.selected.b).toFixed(3));
            return this.selected.results[element].m;
        },
        get_m2(element) {
            /**
             * 根据出当前项目的标准消耗量计算出样品所含物质质量
             */
            let st_v = this.selected2.results[element].st_v;
            let a0 = this.selected2.results[element].a0;
            let a1 = this.selected2.results[element].a1;
            let K  = this.selected2.results[element].K;
            let v  = this.selected2.results[element].v;
            let a = a1 - a0;
            if(this.selected2.name=='耗氧量'){
                this.selected2.results[element].m = ((a * st_v * K / v))
            }else{
                this.selected2.results[element].m = ((a * st_v / v).toFixed(3));
            }
            return this.selected2.results[element].m;
        },
        get_c2(element){
            this.get_m2(element)
            this.selected2.results[element].c = this.selected2.results[element].m
            return this.selected2.results[element].c
        },
        get_c(element) {
            /**
             * 根据当前项目的加样体积和质量算出样品中物质的浓度
             */
            let v = this.selected.results[element].v;
            let m = this.selected.results[element].m;
            if (this.selected.name == "硫酸盐") {
                this.selected.results[element].c = (1000 * m / v).toFixed(1);
            } else {
                this.selected.results[element].c = (m / v).toFixed(2);
            }
            return this.selected.results[element].c
        },
        save_results(id, st) {
            /**
             * 从输入吸光度后计算得到的结果表格中获取数据,存入localStorage
             */

            this.useJudge(st)
            let rows = document.getElementById(id).rows; //获取表格
            let start = rows[1].cells[0].innerText; //表格第一个编号
            let end = rows[rows.length - 1].cells[0].innerText; //表格最后一个编号
            start_item = Number(start.slice(8,9))
            end_item = Number(end.slice(8,9))
            for (let i = start_item; i <= end_item; i++) {
                let p = (st.name + i + '报告结果');
                let date = new Date();
                date = this.dateFormat(date);
                let res = st.results[i - start_item]
                res.date = date;
                res.v = st.v
                res.limit = st.limit
                res.range_max = st.range_max;
                res.range_min = st.range_min;
                res.unit = st.unit
                if (st == this.selected2) {
                    if (Number(res.m) < Number(res.range_max)) {
                        res.assessment = "合格"
                    } else {
                        res.assessment = "不合格"
                    }
                } else if(Number(res.c) < Number(res.range_max)){ 
                    res.assessment = "合格"
                } else {
                    res.assessment = "不合格"
                }
                let str = JSON.stringify(res); //格式化后才能存入 
                localStorage.setItem(p, str);
            };
            let n = st.name + 'end';
            localStorage.setItem(n, end_item + 1);
        },
        mystorages(somes) {
            /**
             * 从localStorage中获取保存的结果，存入st数组
             */
            somes.st = [];
            let n = somes.name + 'end';
            if (localStorage.getItem(n) !== null) {
                let keys = this.get_key(somes);
                for (let i = 0; i < keys.length; i++) {
                    let x = (somes.name + keys[i] + '报告结果');
                    let p = localStorage.getItem(x);
                    p = eval(JSON.parse(p));
                    somes.st.push(p);
                }
                somes.start = Number(localStorage.getItem(n));
            }
            //对结果依据编号从小到大进行排序
            somes.st.sort(function (i, j) {
                return Number(i.id) > Number(j.id) ? 1 : -1
            });
        },
        set_record(somes) {
            //最后一次输入记录后的标记
            if (somes.judge) {
                somes.end = somes.start;
            } else {
                somes.end = 1;
            }
        },
        get_key(item) {
            /**
             * 获取localStorage中当前项目的结果记录中的首项id
             */
            let keys = [];
            var n = localStorage.length;
            for (let i = 0; i < n; i++) {
                let k = localStorage.key(i);
                if (k.search(item.name) != -1) {
                    if (k.search('报告结果') != -1) {
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
            return (Array(length).join('0') + num).slice(-length);
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
            date = dateFormat(date)
            let wendu = date + "wendu"
            let shidu = date + "shidu"
            localStorage.setItem(wendu, this.sample.temprature)
            localStorage.setItem(shidu, this.sample.rh)
        },
        get_env(date) {
            /**
             * 获取特定日期的温度和湿度
             */
            let wendu = date + "wendu"
            let shidu = date + "shidu"
            let env = new Object
            env.wendu = localStorage.getItem(wendu)
            env.shidu = localStorage.getItem(shidu)
            return env
        },
        init_login() {
            /**
             * 初始化得到单位名称、机构编号
             */
            if (localStorage.getItem("company")) {
                this.login_f = false
                this.company = localStorage.getItem("company")
                this.numbering = localStorage.getItem("numbering")
            }
        },
        //时间格式化函数，此处仅针对yyyy-MM-dd hh:mm:ss 的格式进行格式化
        dateFormat(time) {
            var date = new Date(time);
            var year = date.getFullYear();
            /* 在日期格式中，月份是从0开始的，因此要加0
             * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
             * */
            var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            // var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
            // var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
            // var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
            // 拼接
            return year + "-" + month + "-" + day;
        },

        useCount(item) {
            //计数页面登录次数
            let pagecount = item.name + 'pagecount';
            if (localStorage.getItem(pagecount)) {
                localStorage.setItem(pagecount, Number(localStorage.getItem(pagecount)) + 1);
            } else {
                localStorage.setItem(pagecount, 1);
            }
        },
        useJudge(item) {
            //判断是否保存过报告结果
            let judge = item.name + 'judge';
            if (localStorage.getItem(judge) !== null) {
                item.judge = true;
                localStorage.setItem(judge, true);
            } else {
                item.judge = false;
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
        report_date() {
            let date = new Date();
            data.day += 15;
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
    series_data = app.selected.standard_series;
    localStorage.setItem(app.selected.name, series_data)
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
    getTableContent(app.selected.id);
    //获取当前项目的标准系列数据
    chart = Highcharts.chart('line', {
        title: {
            text: "标准回归曲线"
        },
        subtitle: {
            text: app.selected.name
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
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    });
}
