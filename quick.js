let quick = new Vue({
            el: "#quick",
            data: {
                date_show: false,
                company: "",
                numbering: "",
                names: [{
                        id: 1,
                        st: [],
                        category: 3,
                        judge: false,
                        assessment: "合格",
                        unit: "无量纲",
                        method: "嗅气和尝味法",
                        step: [
                            "去100ml水样，置于250ML锥形瓶中，振摇后从瓶口嗅水的气味，用适当的文字描述，并按六级记录其强度。",
                            "与此同时，取少量水样放入口中（此水样应对人体无害），不要咽下，品尝水的味道，予以描述，并按六级记录强度。"
                        ],
                        start: 1,
                        T: 20,
                        H: 65,
                        end: 1,
                        name: "臭和味",
                        range: "无异臭和异味",
                        items: [],
                        result: {
                            id: "",
                            v: "",
                            c: "无异臭和异味",
                            date: "",
                        }
                    },
                    {
                        id: 2,
                        st: [],
                        category: 3,
                        judge: false,
                        assessment: "合格",
                        unit: "无量纲",
                        method: "直接观察法",
                        step: [
                            "将水样摇匀，在光线明亮处迎光直接观察,记录所观察到的肉眼可见物。"
                        ],
                        start: 1,
                        T: 20,
                        H: 65,
                        end: 1,
                        name: "肉眼可见物",
                        range: "无",
                        items: [],
                        result: {
                            id: "",
                            v: "",
                            c: "无",
                            date: "",
                        }
                    },
                    {
                        id: 3,
                        st: [],
                        category: 3,
                        judge: false,
                        assessment: "合格",
                        unit: "MPN/100ml",
                        step: [""],
                        start: 1,
                        T: 20,
                        H: 65,
                        end: 1,
                        name: "总大肠菌群",
                        range: "不得检出",
                        items: [],
                        result: {
                            id: "",
                            v: "",
                            c: "未检出",
                            date: "",
                        }
                    },
                    {
                        id: 4,
                        st: [],
                        category: 3,
                        judge: false,
                        assessment: "合格",
                        unit: "MPN/100ml",
                        step: [""],
                        start: 1,
                        T: 20,
                        H: 65,
                        end: 1,
                        name: "大肠埃希氏菌",
                        range: "不得检出",
                        items: [],
                        result: {
                            id: "",
                            v: "",
                            c: "未检出",
                            date: "",
                        }
                    },
                    {
                        id: 5,
                        st: [],
                        category: 3,
                        judge: false,
                        start: 1,
                        T: 20,
                        H: 65,
                        end: 1,
                        assessment: "合格",
                        unit: "MPN/100ml",
                        step: [""],
                        name: "耐热大肠菌群",
                        range: "不得检出",
                        items: [],
                        result: {
                            id: "",
                            v: "",
                            c: "未检出",
                            date: "",
                        }
                    },
                    {
                        id: 6,
                        st: [],
                        step: [
                            "玻璃电极在使用前应放在纯水中侵泡24h以上。",
                            "仪器校正：仪器开启30min后，按仪器使用说明书操作。",
                            "pH定位：选用一种与被测水样pH接近的标准缓冲溶液，重复定位1~2次，当水样pH<7.0时，使用苯二甲酸氢钾标准缓冲溶液（5.1.3.1）定位，以四硼酸钠或混合磷酸盐标准缓冲溶液复定位；如果水样pH>7.0时，则用四硼酸钠标准缓冲溶液定位，以苯二甲酸氢钾或混合磷酸盐标准缓冲溶液复定位。(注：如发现三种缓冲液的定位值不成线性，应检查玻璃电极的质量。)",
                            "用洗瓶以纯水缓缓淋洗两个电极数次，再以水样淋洗6~8次，然后插入水样中，1min后直接从仪器上读出pH值。(注1：甘汞电极内为氯化钾的饱和溶液，当室温升高后，溶液可能由饱和状态变为不饱和状态，故应保持一定量氯化钾晶体。)(注2：pH值大于9的溶液，应使用高碱玻璃电极测定pH值。)"
                        ],
                        calculation: "直接读数",
                        judge: false,
                        category: 3,
                        range_min: 6.5,
                        range_max: 8.5,
                        range: "",
                        assessment: true,
                        unit: "无量纲",
                        start: 1,
                        T: 20,
                        H: 65,
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
                        id: 7,
                        st: [],
                        step: [
                            "取50ml透明的水样于比色管中。如水样色度过高，可取少量水样，加纯水稀释后比色，结果乘以稀释倍数。",
                            "另取比色管11支分别加入铂钴标准溶液0ml,0.50ml,1.00ml,1.50ml,2.00ml,2.50ml,3.00ml,3.50ml,4.00ml,4.50ml和5.00ml,加纯水至刻度，摇匀，配制色度为0度，5度，10度，15度，20度，25度，30度，35度，40度，45度和50度的标准色列，可长期使用。",
                            "将水样与铂钴标准色列进行比较。如水样与标准色列的色调不一致,即为异色，可用文字描述。"
                        ],
                        judge: false,
                        category: 3,
                        range_min: "",
                        range_max: 15,
                        range: "",
                        assessment: true,
                        unit: "度",
                        start: 1,
                        T: 20,
                        H: 65,
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
                        id: 8,
                        st: [],
                        step: ["按仪器使用说明书进行操作，浑浊度超过10NTU时，可用纯水稀释后测定。"],
                        judge: false,
                        category: 3,
                        range_min: "",
                        range_max: 3,
                        range: "",
                        assessment: true,
                        unit: "NTU",
                        start: 1,
                        T: 20,
                        H: 65,
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
                    {
                        id: 9,
                        st: [],
                        step: [""],
                        judge: false,
                        category: 2,
                        range_min: "",
                        range_max: 1000,
                        range: "",
                        assessment: true,
                        unit: "NTU",
                        calculation: "ρ(TDS)=(m1-m0)*1000*1000/V",
                        start: 1,
                        T: 20,
                        H: 65,
                        end: 1,
                        name: "溶解性总固体",
                        method: "称重法",
                        limit: 0.5,
                        instrument_model: "分析天平",
                        GB: "GB/T 5750.4-2006",
                        items: [],
                        result: {
                            id: "",
                            v: 50,
                            coefficient: 1000000,
                            a0: "",
                            a1: "",
                            c: "",
                            date: "",
                        },

                    },
                    {
                        id: 10,
                        st: [],
                        step: [""],
                        judge: false,
                        category: 3,
                        range_min: "",
                        range_max: 3,
                        range: "",
                        assessment: true,
                        unit: "μg/L",
                        start: 1,
                        T: 20,
                        H: 65,
                        end: 1,
                        name: "四氯化碳",
                        method: "毛细管柱气相色谱法",
                        limit: 0.1,
                        instrument_model: "气相色谱仪",
                        GB: "GB/T 5750.8-2006",
                        items: [],
                        result: {
                            id: "",
                            v: 0.01,
                            c: "",
                            date: "",
                        },
                    },
                    {
                        id: 11,
                        st: [],
                        step: [""],
                        judge: false,
                        category: 3,
                        range_min: "",
                        range_max: 3,
                        range: "",
                        assessment: true,
                        unit: "μg/L",
                        start: 1,
                        T: 20,
                        H: 65,
                        end: 1,
                        name: "三氯甲烷",
                        method: "毛细管柱气相色谱法",
                        limit: 0.2,
                        instrument_model: "气相色谱仪",
                        GB: "GB/T 5750.8-2006",
                        items: [],
                        result: {
                            id: "",
                            v: 0.01,
                            c: "",
                            date: "",
                        },

                    },
                    {
                        id: 12,
                        st: [],
                        step: [""],
                        calculation: "",
                        judge: false,
                        category: 1,
                        range_max: 0.001,
                        range_min: "",
                        assessment: true,
                        range: "",
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
                        end: 1,
                        name: "溴酸盐",
                        limit: 0.001,
                        method: "离子色谱法",
                        instrument_model: "离子色谱仪",
                        GB: "GB/T 5750.10-2006",
                        result: {
                            id: 1,
                            v: 50,
                            a: "",
                            c: "",
                            date: ""
                        },
                    },
                    {
                        id: 13,
                        st: [],
                        step: [
                            "标准曲线绘制：吸取0,0.1,0.5,2.0,4.0,8.0ml,氯标准使用溶液(1.1.3.9)置于6支10ml具塞比色管中，用",
                            "",
                            "",
                        ],
                        calculation: "ρ(Cl2)=m/V",
                        judge: false,
                        category: 1,
                        range_max: 0.05,
                        range_min: 4.0,
                        assessment: true,
                        range: "",
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
                        end: 1,
                        name: "余氯",
                        limit: 0.01,
                        method: "N,N-二乙基对苯二胺(DPD)分光光度法",
                        instrument_model: "分光光度计",
                        GB: "GB/T 5750.11-2006",
                        a: 0,
                        b: 1,
                        r: 1,
                        formula: "",
                        x: [],
                        y: [],
                        standard_series: [],
                        items: [],
                        result: {
                            id: 1,
                            v: 10,
                            a: "",
                            m: "",
                            c: "",
                            date: ""
                        },
                    },
                    {
                        id: 14,
                        st: [],
                        step: [
                            "标准曲线绘制：吸取0,0.1,0.5,2.0,4.0,8.0ml,氯标准使用溶液(1.1.3.9)置于6支10ml具塞比色管中，用",
                            "",
                            "",
                        ],
                        calculation: "ρ(Cl2)=m/V",
                        judge: false,
                        category: 1,
                        range_max: 0.05,
                        range_min: 4.0,
                        assessment: true,
                        range: "",
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
                        end: 1,
                        name: "总氯",
                        limit: 0.01,
                        method: "N,N-二乙基对苯二胺(DPD)分光光度法",
                        instrument_model: "分光光度计",
                        GB: "GB/T 5750.11-2006",
                        a: 0,
                        b: 1,
                        r: 1,
                        formula: "",
                        x: [],
                        y: [],
                        standard_series: [],
                        items: [],
                        result: {
                            id: 1,
                            v: 10,
                            a: "",
                            m: "",
                            c: "",
                            date: ""
                        },
                    },
                    {
                        id: 15,
                        st: [],
                        step: [""],
                        calculation: "",
                        judge: false,
                        category: 1,
                        range_max: 0.001,
                        range_min: "",
                        assessment: true,
                        range: "",
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
                        end: 1,
                        name: "二氧化氯",
                        limit: 0.001,
                        method: "N,N-二乙基对苯二胺硫酸亚铁铵滴定法",
                        instrument_model: "滴定管、架",
                        GB: "GB/T 5750.10-2006",
                        result: {
                            id: 1,
                            v: 50,
                            a0: "",
                            a1: "",
                            m: "",
                            c: "",
                            date: ""
                        },
                    },
                    {
                        id: 16,
                        st: [],
                        step: [""],
                        calculation: "",
                        judge: false,
                        category: 1,
                        range_max: 0.001,
                        range_min: "",
                        assessment: true,
                        range: "",
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
                        end: 1,
                        name: "臭氧",
                        limit: 0.001,
                        method: "碘量法",
                        instrument_model: "滴定管、架",
                        GB: "GB/T 5750.11-2006",
                        result: {
                            id: 1,
                            v: 50,
                            a0: "",
                            a1: "",
                            m: "",
                            c: "",
                            date: ""
                        },
                    },
                    {
                        id: 17,
                        st: [],
                        step: ["用移液管准确移取100mL水样于250mL锥形瓶中，加入1mL铬酸钾溶液，用硝酸银标准溶液滴定至砖红色沉淀刚刚出现即为滴定终点。",
                            "另取一锥形瓶加入100mL蒸馏水和1mL铬酸钾溶液，用硝酸银标准溶液滴定至砖红色沉淀刚刚出现即为滴定终点，作为空白试验。",
                            "氯化物质量浓度C(mg/L)按下式计算："
                        ],
                        calculation: '<img src="img/cl.bmp" />',
                        judge: false,
                        category: 2,
                        range_max: 250,
                        range_min: "",
                        assessment: true,
                        range: "",
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
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
                        id: 18,
                        st: [],
                        step: [""],
                        calculation: '<img src="img/cl.bmp" />',
                        judge: false,
                        category: 2,
                        range_max: 1000,
                        range_min: "",
                        assessment: true,
                        range: "",
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
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
                        id: 19,
                        st: [],
                        step: [""],
                        calculation: 'ρ(O2) = [(10+V1) * K - 10] * 0.8',
                        judge: false,
                        category: 2,
                        range_max: 3,
                        range_min: "",
                        assessment: true,
                        range: "",
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
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
                    {
                        id: 20,
                        st: [],
                        step: [""],
                        calculation: "C = m/V",
                        judge: false,
                        category: 1,
                        range_max: 0.001,
                        assessment: true,
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
                        end: 1,
                        name: "亚氯酸盐",
                        limit: 0.004,
                        method: "碘量法",
                        instrument_model: "砷化氢发生器、分光光度计",
                        GB: "GB/T 5750.10-2006",
                        result: {
                            id: 1,
                            v: 50,
                            a0: "",
                            a1: "",
                            coefficient: 1,
                            K: 1,
                            c: "",
                            date: ""
                        },
                    },
                    {
                        id: 21,
                        st: [],
                        step: [""],
                        calculation: "C = m/V",
                        judge: false,
                        category: 1,
                        range_max: 0.001,
                        range_min: "",
                        assessment: true,
                        range: "",
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
                        end: 1,
                        name: "氯酸盐",
                        limit: 0.001,
                        method: "碘量法",
                        instrument_model: "砷化氢发生器、分光光度计",
                        GB: "GB/T 5750.10-2006",
                        result: {
                            id: 1,
                            v: 50,
                            a0: "",
                            a1: "",
                            coefficient: 1,
                            K: 1,
                            c: "",
                            date: ""
                        },
                    },
                    {
                        id: 22,
                        st: [],
                        step: [""],
                        calculation: "C = m/V",
                        judge: false,
                        category: 1,
                        range_max: 0.5,
                        range_min: "",
                        assessment: true,
                        range: "",
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
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
                        id: 23,
                        st: [],
                        step: [""],
                        calculation: "ρ(CN-)=(m*V1)/(V*V2)",
                        judge: false,
                        category: 1,
                        range_max: 0.05,
                        range_min: "",
                        assessment: true,
                        range: "",
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
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
                        id: 24,
                        st: [],
                        step: [""],
                        calculation: "ρ（F-)=[(ρ1*V1)/V2]/[log-1(E2-E1)/K]-1]",
                        judge: false,
                        category: 1,
                        range_max: 1.0,
                        range_min: "",
                        assessment: true,
                        range: "",
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
                        end: 1,
                        name: "氟化物",
                        limit: 0.2,
                        method: "离子选择电极法(标准加入法)",
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
                        id: 25,
                        st: [],
                        step: [""],
                        calculation: "ρ(NO3-N) = m/V",
                        judge: false,
                        category: 1,
                        range_max: 20,
                        range_min: "",
                        assessment: true,
                        range: "",
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
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
                        id: 26,
                        st: [],
                        step: [""],
                        calculation: "ρ(Al) = m/V",

                        judge: false,
                        category: 1,
                        range_max: 0.2,
                        range_min: "",
                        assessment: true,
                        range: "",
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
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
                        id: 27,
                        st: [],
                        step: [""],
                        calculation: "ρ(C6H5OH)= m/V",
                        judge: false,
                        category: 1,
                        range_max: 0.002,
                        range_min: "",
                        assessment: true,
                        range: "",
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
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
                        id: 28,
                        st: [],
                        step: [""],
                        calculation: "ρ(Hg)= m/V",
                        judge: false,
                        category: 1,
                        range_max: 0.001,
                        range_min: "",
                        assessment: true,
                        range: "",
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
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
                        id: 29,
                        st: [],
                        step: ["略"],
                        calculation: "ρ(DBS) = m/V",
                        judge: false,
                        category: 1,
                        range_max: 0.3,
                        range_min: "",
                        assessment: true,
                        range: "",
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
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
                        id: 30,
                        st: [],
                        step: [""],
                        calculation: "ρ(Se) = m/V",
                        judge: false,
                        category: 1,
                        range_max: 0.01,
                        range_min: "",
                        assessment: true,
                        range: "",
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
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
                        id: 31,
                        st: [],
                        step: [""],
                        calculation: "ρ(Cd)= m/V",
                        judge: false,
                        category: 1,
                        range_max: 0.005,
                        range_min: "",
                        assessment: true,
                        range: "",
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
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
                        id: 32,
                        st: [],
                        step: [""],
                        calculation: "ρ(Pb)= m/V",
                        judge: false,
                        category: 1,
                        range_max: 0.01,
                        range_min: "",
                        assessment: true,
                        range: "",
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
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
                        id: 33,
                        st: [],
                        step: [""],
                        calculation: "ρ(Cr6+) = m/V",
                        judge: false,
                        category: 1,
                        range_max: 0.05,
                        range_min: "",
                        assessment: true,
                        range: "",
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
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
                        id: 34,
                        st: [],
                        step: [""],
                        calculation: "ρ(Cu) = m/V",
                        judge: false,
                        category: 1,
                        range_max: 1.0,
                        range_min: "",
                        assessment: true,
                        range: "",
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
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
                        id: 35,
                        st: [],
                        step: [""],
                        calculation: "ρ(Mn) = m/V",
                        judge: false,
                        category: 1,
                        range_max: 0.1,
                        range_min: "",
                        assessment: true,
                        range: "",
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
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
                        id: 36,
                        st: [],
                        step: [""],
                        calculation: "ρ(Fe) = m/V",
                        judge: false,
                        category: 1,
                        range_max: 0.3,
                        range_min: "",
                        assessment: true,
                        range: "",
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
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
                        id: 37,
                        st: [],
                        step: [""],
                        calculation: "ρ(Zn) = m/V",
                        judge: false,
                        category: 1,
                        range_max: 1.0,
                        range_min: "",
                        assessment: true,
                        range: "",
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
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
                        id: 38,
                        st: [],
                        step: [""],
                        calculation: "ρ(SO4) = m * 1000 / V",
                        judge: false,
                        category: 1,
                        range_max: 250,
                        range_min: "",
                        assessment: true,
                        range: "",
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
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
                                1,
                                0.156
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
                    {
                        id: 39,
                        st: [],
                        step: [""],
                        calculation: "ρ(As) = m/V",
                        judge: false,
                        category: 1,
                        range_max: 0.001,
                        range_min: "",
                        assessment: true,
                        range: "",
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
                        end: 1,
                        name: "砷",
                        limit: 0.001,
                        method: "二乙氨基二硫代甲酸银分光光度法",
                        a: 0,
                        b: 1,
                        r: 1,
                        formula: "",
                        x: [],
                        y: [],
                        standard_series: [],
                        instrument_model: "砷化氢发生器、分光光度计",
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
                        id: 40,
                        st: [],
                        step: [""],
                        calculation: "ρ(HCHO) = m/V",
                        judge: false,
                        category: 1,
                        range_max: 0.001,
                        range_min: "",
                        assessment: true,
                        range: "",
                        unit: "mg/L",
                        start: 1,
                        T: 20,
                        H: 65,
                        end: 1,
                        name: "甲醛",
                        limit: 0.001,
                        method: "4-氨基-3-联氨-5-硫基-1,2,4-三氮杂茂(AHMT)分光光度法",
                        a: 0,
                        b: 1,
                        r: 1,
                        formula: "",
                        x: [],
                        y: [],
                        standard_series: [],
                        instrument_model: "分光光度计",
                        GB: "GB/T 5750.10-2006",
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
                        id: 41,
                        category: 3,
                        judge: false,
                        assessment: "合格",
                        range_max: 100,
                        unit: "MPN/100ml",
                        start: 1,
                        T: 20,
                        H: 65,
                        end: 1,
                        name: "菌落总数",
                        range: "100",
                        items: "",
                        result: {
                            id: "",
                            v: "",
                            c: "",
                            date: "",
                        }
                    },
                    {
                        id: 42,
                        category: 3,
                        assessment: "合格",
                        range_max: 0.5,
                        unit: "Bq/L",
                        start: 1,
                        T: 20,
                        H: 65,
                        end: 1,
                        instrument_model: "低本底α、β检测系统",
                        limit: 0.016,
                        GB: "GB/T 5750.13-2006",
                        name: "总α放射性",
                        range: "100",
                        items: "",
                        result: {
                            id: "",
                            v: "",
                            c: "",
                            date: "",
                        }
                    },
                    {
                        id: 43,
                        category: 3,
                        assessment: "合格",
                        range_max: 1,
                        unit: "Bq/L",
                        start: 1,
                        T: 20,
                        H: 65,
                        end: 1,
                        instrument_model: "低本底α、β检测系统",
                        limit: 0.028,
                        GB: "GB/T 5750.13-2006",
                        name: "总β放射性",
                        range: "100",
                        c: "",
                        result: [],
                    },
                ]
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
    },
    methods: {
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

        f_n(num, length) {
            /**
             * 格式化编号数字，不足三位的前面加0
             */
            return (Array(length).join("0") + num).slice(-length);
        },
    }
})