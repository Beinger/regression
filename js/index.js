var app = new Vue({
    el: "#root",
    data: {
        T: "",
        H: "",
        QC: true,
        qc_input: false,
        submit_show: false,
        selected_opt: [],
        numbering: "", //机构代号
        company: "", //机构名称
        username: "",
        login_f: true, //是否已经注册过
        play: false,
        index: 0, //这个是表格索引==序号
        new_item: "", //表格新行
        add_edit: false, //切换新增和修改
        git_show: false,
        add_opt: false,
        show1: false, //显示第一项
        show2: false, //显示第二项
        show3: false, //显示第三项
        s1: false,
        s2: false,
        s3: false,
        s4: false,
        s5: false,
        s6: false,
        add: false, //显示计算输入框
        date_show: false, //显示日期和评价之类
        vol_select: [ //常用的几种体积选项
            50, 100, 250, 1, 25, 10
        ],
        selected1: "",
        selected2: "",
        selected3: "",
        slt: "",
        // slt1: "",
        // slt2: "",
        // slt3: "",

        new_opt1: {
            id: '',
            st: [],
            QC_c: 10,
            zl: [],
            QC_store: [{
                id: '',
                q_num: '',
                q_val: '',
                q_limit: '',
                a: '', //质控测定值
                result: '',
                q_judge: '',
                date: '',
            }, ],
            store_i: {
                id: '',
                q_num: '',
                q_val: '',
                q_limit: '',
                a: '', //质控测定值
                result: '',
                q_judge: '',
                date: '',
            },
            step: [""],
            judge: false,
            category: 1,
            range_max: "",
            assessment: true,
            unit: "mg/L",
            start: 1,
            end: 1,
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
            id: '',
            st: [],
            QC_c: 10,
            zl: [],
            QC_store: [{
                id: '',
                q_num: '',
                q_val: '',
                q_limit: '',
                a: '', //质控测定值
                result: '',
                q_judge: '',
                date: '',
            }, ],
            store_i: {
                id: '',
                q_num: '',
                q_val: '',
                q_limit: '',
                a: '', //质控测定值
                result: '',
                q_judge: '',
                date: '',
            },
            step: [""],
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
            coefficient: "",
            items: [],
            result: {
                id: 1,
                v: "",
                K: "",
                a0: "",
                a1: "",
                m: "",
                c: "",
                date: ""
            },
        },
        new_opt3: {
            id: '',
            st: [],
            QC_c: 10,
            zl: [],
            QC_store: [{
                id: '',
                q_num: '',
                q_val: '',
                q_limit: '',
                a: '', //质控测定值
                result: '',
                q_judge: '',
                date: '',
            }, ],
            store_i: {
                id: '',
                q_num: '',
                q_val: '',
                q_limit: '',
                a: '', //质控测定值
                result: '',
                q_judge: '',
                date: '',
            },
            step: [""],
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
        new_names: [],
        names: [
            {
                id: 1,
                st: [],
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                category: 3,
                judge: false,
                assessment: true,
                unit: "无量纲",
                method: "(3.1)",
                GB: "GB/T 5750.4-2006",
                step: [
                    "去100ml水样，置于250ML锥形瓶中，振摇后从瓶口嗅水的气味，用适当的文字描述，并按六级记录其强度。",
                    "与此同时，取少量水样放入口中（此水样应对人体无害），不要咽下，品尝水的味道，予以描述，并按六级记录强度。"
                ],
                start: 1,
                end: 1,
                name: "臭和味",
                no_QC: true,
                range_max: "",
                range_min: "",
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
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                category: 3,
                judge: false,
                assessment: true,
                unit: "无量纲",
                method: "(4.1)",
                GB: "GB/T 5740.4-2006",
                step: [
                    "将水样摇匀，在光线明亮处迎光直接观察,记录所观察到的肉眼可见物。"
                ],
                start: 1,
                end: 1,
                name: "肉眼可见物",
                no_QC: true,
                range_max: "",
                range_min: "",
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
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                category: 3,
                judge: false,
                assessment: true,
                method: '(2.1)',
                GB: "GB/T 5740.12-2006",
                unit: "MPN/100ml",
                step: [""],
                start: 1,
                end: 1,
                name: "总大肠菌群",
                range_max: "",
                range_min: "",
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
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                category: 3,
                judge: false,
                assessment: true,
                GB: "GB/T 5740.12-2006",
                unit: "MPN/100ml",
                step: [""],
                start: 1,
                end: 1,
                name: "大肠埃希氏菌",
                range_max: "",
                range_min: "",
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
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                category: 3,
                judge: false,
                start: 1,
                end: 1,
                assessment: true,
                GB: "GB/T 5740.12-2006",
                unit: "MPN/100ml",
                step: [""],
                name: "耐热大肠菌群",
                range_max: "",
                range_min: "",
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
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
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
                end: 1,
                name: "酸碱度",
                method: "(5.1)",
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
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
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
                end: 1,
                name: "色度",
                method: "(1.1)",
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
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                step: ["按仪器使用说明书进行操作，浑浊度超过10NTU时，可用纯水稀释后测定。"],
                judge: false,
                category: 3,
                range_min: "",
                range_max: 3,
                range: "",
                assessment: true,
                unit: "NTU",
                start: 1,
                end: 1,
                name: "浑浊度",
                method: "(2.1)",
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
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                step: [""],
                judge: false,
                category: 2,
                range_min: "",
                range_max: 1000,
                range: "",
                assessment: true,
                unit: "NTU",
                calculation: "ρ(TDS)=(m<sub>1</sub>-m<sub>0</sub>)&times;1000&times;1000/V",
                coefficient: 1000000,
                start: 1,
                end: 1,
                name: "溶解性总固体",
                method: "(8.1)",
                limit: 0.5,
                instrument_model: "分析天平",
                GB: "GB/T 5750.4-2006",
                items: [],
                result: {
                    id: "",
                    v: 50,
                    a0: "",
                    a1: "",
                    c: "",
                    date: "",
                },

            },
            {
                id: 10,
                st: [],
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                step: [""],
                judge: false,
                category: 3,
                range_min: "",
                range_max: 3,
                range: "",
                assessment: true,
                unit: "μg/L",
                start: 1,
                end: 1,
                name: "四氯化碳",
                method: "(1.2)",
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
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                step: [""],
                judge: false,
                category: 3,
                range_min: "",
                range_max: 3,
                range: "",
                assessment: true,
                unit: "μg/L",
                start: 1,
                end: 1,
                name: "三氯甲烷",
                method: "(1)",
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
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
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
                end: 1,
                name: "溴酸盐",
                a: '',
                b: '',
                r: '',
                formula: '',
                x: [],
                y: [],
                items: [],
                limit: 0.001,
                method: "离子色谱法",
                instrument_model: "离子色谱仪",
                GB: "GB/T 5750.10-2006",
                standard_series: '',
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
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                step: [
                    "标准曲线绘制：吸取0,0.1,0.5,2.0,4.0,8.0ml,氯标准使用溶液(1.1.3.9)置于6支10ml具塞比色管中，用",
                    "",
                    "",
                ],
                calculation: "ρ(Cl<sub>2</sub>)=m/V",
                judge: false,
                category: 3,
                range_max: 4.0,
                range_min: 0.05,
                assessment: true,
                range: "",
                unit: "mg/L",
                start: 1,
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
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                step: [
                    "标准曲线绘制：吸取0,0.1,0.5,2.0,4.0,8.0ml,氯标准使用溶液(1.1.3.9)置于6支10ml具塞比色管中，用",
                    "",
                    "",
                ],
                calculation: "ρ(Cl<sub>2</sub>)=m/V",
                judge: false,
                category: 3,
                range_max: 4.0,
                range_min: 0.05,
                assessment: true,
                range: "",
                unit: "mg/L",
                start: 1,
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
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                step: [""],
                calculation: "",
                judge: false,
                category: 1,
                range_max: 0.8,
                range_min: 0.1,
                assessment: true,
                range: "",
                unit: "mg/L",
                start: 1,
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
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                step: [""],
                calculation: "",
                judge: false,
                category: 2,
                range_max: 0.3,
                range_min: 0.02,
                assessment: true,
                range: "",
                unit: "mg/L",
                start: 1,
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
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                step: ["用移液管准确移取100mL水样于250mL锥形瓶中，加入1mL铬酸钾溶液，用硝酸银标准溶液滴定至砖红色沉淀刚刚出现即为滴定终点。",
                    "另取一锥形瓶加入100mL蒸馏水和1mL铬酸钾溶液，用硝酸银标准溶液滴定至砖红色沉淀刚刚出现即为滴定终点，作为空白试验。",
                    "氯化物质量浓度C(mg/L)按下式计算："
                ],
                calculation: '<span>&rho;(Cl)&emsp;=&emsp;(V<sub>1</sub>-V<sub>0</sub>)&times;0.50&times;1000/V</span>',
                judge: false,
                category: 2,
                range_max: 250,
                range_min: "",
                assessment: true,
                range: "",
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "氯化物",
                method: "硝酸银容量法",
                limit: 5,
                instrument_model: "滴定管、架",
                GB: "GB/T 5750.4-2006",
                coefficient: 500,
                items: [],
                result: {
                    id: 1,
                    v: 50,
                    a0: 0.05,
                    a1: "",
                    c: "",
                    date: ""
                },
            },
            {
                id: 18,
                st: [],
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                step: [""],
                calculation: '&rho;(CaCO<sub>3</sub>)&emsp;=&emsp;(V<sub>标</sub>-V<sub>空</sub>) &times; c &times; 100.08 &times; 1000 / V<sub>样</sub>',
                judge: false,
                category: 2,
                range_max: 1000,
                range_min: "",
                assessment: true,
                range: "",
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "总硬度",
                method: "(7.1)EDTA-na_2滴定法",
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
                    c: "",
                    date: ""
                },
            },
            {
                id: 19,
                st: [],
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                step: [""],
                calculation: 'ρ(O2) = [(10+V<sub>1</sub>) &times; K - 10] &times; 0.8',
                judge: false,
                category: 2,
                range_max: 3,
                range_min: "",
                assessment: true,
                range: "",
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "耗氧量",
                method: "(1.1)",
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
                    K: 1,
                    c: "",
                    date: ""
                },
            },
            {
                id: 20,
                st: [],
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                step: [""],
                calculation: "&rho;(ClO<sub>2</sub>) = (m<sub>1</sub>-m<sub>0</sub>)&times;系数/V",
                judge: false,
                category: 2,
                range_max: 0.004,
                range_min: "",
                assessment: true,
                range: "",
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "亚氯酸盐",
                limit: 0.001,
                method: "碘量法",
                instrument_model: "砷化氢发生器、分光光度计",
                GB: "GB/T 5750.10-2006",
                coefficient: 1,
                result: {
                    id: 1,
                    v: 50,
                    a0: "",
                    a1: "",
                    K: 1,
                    c: "",
                    date: ""
                },
            },
            {
                id: 21,
                st: [],
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                step: [""],
                calculation: "&rho;(ClO<sub>4</sub>) = (m<sub>1</sub>-m<sub>0</sub>)&times;系数/V",
                judge: false,
                category: 2,
                range_max: 0.001,
                range_min: "",
                assessment: true,
                range: "",
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "氯酸盐",
                limit: 0.001,
                method: "碘量法",
                instrument_model: "砷化氢发生器、分光光度计",
                GB: "GB/T 5750.10-2006",
                coefficient: 1,
                result: {
                    id: 1,
                    v: 50,
                    a0: "",
                    a1: "",
                    K: 1,
                    c: "",
                    date: ""
                },
            },
            {
                id: 22,
                st: [],
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                step: [""],
                calculation: "ρ(NH<sub>3</sub>-N) = m/V",
                judge: false,
                category: 1,
                range_max: 0.5,
                range_min: "",
                assessment: true,
                range: "",
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "氨氮",
                method: "(9.1)",
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
                        0.1,
                        0.010
                    ],
                    [
                        0.3,
                        0.020
                    ],
                    [
                        0.5,
                        0.029
                    ],
                    [
                        0.7,
                        0.039
                    ],
                    [
                        1.0,
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
                QC_c: 1,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                step: [""],
                calculation: "ρ(CN<sup>-</sup>)=(m&times;V1)/(V&times;V2)<br>注：V<sub>1</sub>=溜出液总体积；V<sub>2</sub>=比色所用溜出液体积；V=水样体积",
                judge: false,
                category: 1,
                range_max: 0.05,
                range_min: "",
                assessment: true,
                range: "",
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "氰化物",
                a: 0,
                method: "(4.1)",
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
                        0.2,
                        0.035
                    ],
                    [
                        0.4,
                        0.053
                    ],
                    [
                        0.5,
                        0.073
                    ],
                    [
                        0.8,
                        0.073
                    ],
                    [
                        1.0,
                        0.073
                    ],
                    [
                        1.5,
                        0.073
                    ],
                    [
                        2.0,
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
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                step: [""],
                calculation: "ρ（F-)=(ρ1&times;V<sub>1</sub>/V<sub>2</sub>)/{log<sup>-1</sup>[(E<sub>2</sub>-E<sub>1</sub>)/K]-1}",
                judge: false,
                category: 1,
                range_max: 1.0,
                range_min: "",
                assessment: true,
                range: "",
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "氟化物",
                limit: 0.2,
                method: "(3.1)",
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
                        0.2,
                        0.432
                    ],
                    [
                        0.4,
                        0.473
                    ],
                    [
                        0.6,
                        0.559
                    ],
                    [
                        0.8,
                        0.724
                    ],
                    [
                        1.0,
                        1.053
                    ],
                    [
                        2.0,
                        1.453
                    ],
                    [
                        3.0,
                        2.053
                    ]
                ],
                result: {
                    id: 1,
                    v: 10,
                    a: "",
                    m: "",
                    c: "",
                    date: "",
                },
            },
            {
                id: 25,
                st: [],
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                step: [""],
                calculation: "ρ(NO<sub>3</sub>-N) = m/V",
                judge: false,
                category: 1,
                range_max: 20,
                range_min: "",
                assessment: true,
                range: "",
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "硝酸盐氮",
                limit: 0.5,
                method: "(5.3)",
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
                        0.05,
                        0.030
                    ],
                    [
                        0.1,
                        0.047
                    ],
                    [
                        0.3,
                        0.130
                    ],
                    [
                        0.5,
                        0.197
                    ],
                    [
                        0.7,
                        0.278
                    ],
                    [
                        1.0,
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
                QC_c: 1,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
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
                end: 1,
                name: "铝",
                limit: 0.008,
                method: "(1.1)",
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
                        0.2,
                        0.036
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
                    v: 25,
                    a: "",
                    m: "",
                    c: "",
                    date: ""
                },
            },
            {
                id: 27,
                st: [],
                QC_c: 1,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                step: [""],
                calculation: "ρ(C<sub>6</sub>H<sub>5</sub>OH)= m/V",
                judge: false,
                category: 1,
                range_max: 0.002,
                range_min: "",
                assessment: true,
                range: "",
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "挥发酚",
                limit: 0.002,
                method: "(9.1)",
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
                        2,
                        0.070
                    ],
                    [
                        4,
                        0.121
                    ],
                    [
                        6,
                        0.162
                    ],
                    [
                        8,
                        0.202
                    ],
                    [
                        10,
                        0.234
                    ]
                ],
                result: {
                    id: 1,
                    v: 250,
                    a: "",
                    m: "",
                    c: "",
                    date: ""
                },
            },
            {
                id: 28,
                st: [],
                QC_c: 1,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
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
                end: 1,
                name: "汞",
                limit: 0.001,
                method: "(8.3)",
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
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
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
                end: 1,
                name: "阴离子合成洗涤剂",
                limit: 0.05,
                method: "(10.1)",
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
                        0.5,
                        0.041
                    ],
                    [
                        1.0,
                        0.075
                    ],
                    [
                        2.0,
                        0.128
                    ],
                    [
                        3.0,
                        0.185
                    ],
                    [
                        4.0,
                        0.233
                    ],
                    [
                        5.0,
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
                QC_c: 1,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
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
                end: 1,
                name: "硒",
                limit: 0.005,
                method: "(7.5)",
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
                    v: 200,
                    a: "",
                    m: "",
                    c: "",
                    date: ""
                },
            },
            {
                id: 31,
                st: [],
                QC_c: 1,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
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
                end: 1,
                name: "镉",
                limit: 0.01,
                method: "(9.1)",
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
                        1,
                        0.224
                    ],
                    [
                        2,
                        0.242
                    ],
                    [
                        4,
                        0.273
                    ],
                    [
                        6,
                        0.336
                    ],
                    [
                        8,
                        0.365
                    ],
                    [
                        10,
                        0.416
                    ]
                ],
                result: {
                    id: 1,
                    v: 25,
                    a: "",
                    m: "",
                    c: "",
                    date: ""
                },
            },
            {
                id: 32,
                st: [],
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
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
                end: 1,
                name: "铅",
                limit: 0.01,
                method: "11.1",
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
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                step: [""],
                calculation: "ρ(Cr<sup>6+</sup>) = m/V",
                judge: false,
                category: 1,
                range_max: 0.05,
                range_min: "",
                assessment: true,
                range: "",
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "六价铬",
                limit: 0.004,
                method: "(10.1)",
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
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
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
                end: 1,
                name: "铜",
                limit: 0.02,
                method: "(4.2)",
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
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
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
                end: 1,
                name: "锰",
                limit: 0.05,
                method: "(3.1)",
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
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
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
                end: 1,
                name: "铁",
                limit: 0.05,
                method: "(2.1)",
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
                        0.5,
                        0.122
                    ],
                    [
                        1.0,
                        0.149
                    ],
                    [
                        2.0,
                        0.196
                    ],
                    [
                        3.0,
                        0.246
                    ],
                    [
                        4.0,
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
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
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
                end: 1,
                name: "锌",
                limit: 0.05,
                method: "(5.1)",
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
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                step: [""],
                calculation: "ρ(SO<sub>4</sub>) = m &times; 1000 / V",
                judge: false,
                category: 1,
                range_max: 250,
                range_min: "",
                assessment: true,
                range: "",
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "硫酸盐",
                limit: 5,
                method: "(1.2)",
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
                QC_c: 1,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                step: [""],
                calculation: "ρ(As) = m/V",
                judge: false,
                category: 1,
                range_max: 0.01,
                range_min: "",
                assessment: true,
                range: "",
                unit: "mg/L",
                start: 1,
                end: 1,
                name: "砷",
                limit: 0.01,
                method: "(6.1)",
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
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
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
                end: 1,
                name: "甲醛",
                limit: 0.001,
                method: "(6.1)",
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
                st: [],
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                judge: false,
                assessment: true,
                range_max: 100,
                range_min: "",
                unit: "MPN/100ml",
                start: 1,
                end: 1,
                name: "菌落总数",
                method: "(1.1)",
                range: 100,
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
                st: [],
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                assessment: true,
                range_max: 0.5,
                unit: "Bq/L",
                start: 1,
                end: 1,
                instrument_model: "低本底α、β检测系统",
                limit: 0.016,
                GB: "GB/T 5750.13-2006",
                name: "总α放射性",
                method: "(1.1)",
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
                st: [],
                QC_c: 10,
                zl: [],
                QC_store: [{
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                }, ],
                store_i: {
                    id: '',
                    q_num: '',
                    q_val: '',
                    q_limit: '',
                    a: '', //质控测定值
                    result: '',
                    q_judge: '',
                    date: '',
                },
                assessment: true,
                range_max: 1,
                unit: "Bq/L",
                start: 1,
                end: 1,
                instrument_model: "低本底α、β检测系统",
                limit: 0.028,
                GB: "GB/T 5750.13-2006",
                name: "总β放射性",
                method: "(2.1)",
                range: "100",
                c: "",
                result: [],
            },
        ],
    },
    created: function () {
        this.init_login()
        this.get_edit_opt()
        this.get_opt()
    },
    watch: {

        selected1() {
            /**
             * 当选择了项目时，显示标准系列的列表
             */
            for (let i = 0; i < this.selected1.items; i++) {
                this.zl.push(this.selected1.items[i][0] * Number(this.selected1.QC_c))
            }
            this.QC = true
            this.show1 = true;
            this.show2 = false;
            this.show3 = false;
            this.get_series();
            this.save_series();
            this.math_formula();
            show_chart();
            this.get_qc(this.selected1)
        },
        selected2() {
            /**
             * 当选择了滴定类项目时，只需要计算，不需要标准系列和曲线
             */
            this.QC = true
            this.show2 = true;
            this.show3 = false;
            this.show1 = false;
            this.get_qc(this.selected2)
        },
        selected3() {
            /**
             * 感官性状
             */
            this.QC = true
            this.show1 = false;
            this.show2 = false;
            this.show3 = true;
            this.get_qc(this.selected3)
        }
    },
    methods: {

        add_new_opt(s){
            this.save_opt(s)
            this.get_opt()
            this.search_opt(s)
            s = this.uniqueUseNotAllEqual(s)
        },
        del_opt(s) {
            //删除项目
            let nns = this.new_names
            for(let i=0; i<nns.length; i++){
                if(nns[i].name == s.name){
                    nns.splice(i,1)
                }
            }
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i)
                if (key.search(s.name) !== -1) {
                    localStorage.removeItem(key)
                }
            }
        },
        edit_opt(x){
            let p = x.name + x.category
            x = JSON.stringify(x)
            localStorage.setItem(p,x)
        },
        get_edit_opt(){
            let s = this.names
            for(let i=0; i<localStorage.length; i++){
                for(let m=0; m<s.length; m++){
                    let p = s[m].name + s[m].category
                    let index = localStorage.key(i)
                    if(index == p){
                        let value = localStorage.getItem(index)
                        value = JSON.parse(value)
                        let obj = Object.assign(s[m], value)
                        s[m] = obj
                    }
                }
            }
        },
        save_opt(s){
            const newLocal = 'par';
            s.id = this.names.length + this.new_names.legend
            let p = s.name + newLocal
            s = JSON.stringify(s)
            localStorage.setItem(p, s)
        },
        get_opt() {
            /**
             * 获取localStorage中的新加项目
             */
            this.new_names = []
            let ns = this.names
            let n = localStorage.length
            let reg = new RegExp('par$')
            for (let i = 0; i < n; i++) {
                let k = localStorage.key(i)
                let v = localStorage.getItem(k)
                if (reg.test(k)) {
                    reg.lastIndex = 0
                    let v_o = JSON.parse(v)
                    for (let m = 0; m < ns.length; m++) {
                        if (v_o.name == ns[m].name) {
                            let obj = Object.assign(ns[m],v_o)
                            ns[m] = obj
                        }
                    }
                    this.new_names.push(v_o)
                }
            }
        },
        search_opt(x) {
            /**
             * 找出重复的项目进行替换
             */
            let arr = []
            for(let i=0; i<x.length; i++){
                if(x.indexOf(x[i]) == -1){
                    arr.push(x[i])
                }
            }
            x = arr
            let ns = this.names
            // let new_str = new Object
            for (let m = 0; m < x.length; m++) {
                for (let a = 0; a < ns.length; a++) {
                    if (x[m].name == ns[a].name) {
                        ns[a] = x[m]
                        x.splice(m,1)
                    }
                }
            }
        },
        uniqueUseNotAllEqual(arr) {
            /**
             * 对项目进行排序
             */
            let temp = []
            let mark = true
            for (let i = 0, j = arr.length; i < j; i++) {
                if (arr[i] !== arr[i]) {
                    mark && temp.indexOf(arr[i]) == -1 ? temp.push(arr[i]) : ''
                    mark = false
                } else {
                    temp.indexOf(arr[i]) == -1 ? temp.push(arr[i]) : ''
                }
            }
            return temp
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
                this.selected1.x[i] = Number(rows[i][0]) * this.selected1.QC_c;
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
                this.selected1.formula = "y = " + this.selected1.b.toFixed(4) + "x + " + this.selected1.a.toFixed(4)
            } else {
                let a = -(this.selected1.a);
                this.selected1.formula = "y = " + this.selected1.b.toFixed(4) + "x - " + a.toFixed(4)
            }
            this.selected1.r = this.selected1.r.toFixed(4)
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
            focus_move()
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
            st.m = (((st.a - s.a) / s.b)* s.QC_c).toFixed(3);
            return st.m;
        },

        get_c2(s) {
            /**
             * 根据出当前项目的标准消耗量计算出样品所含物质浓度
             */
            let coefficient = s.coefficient;
            let a0 = s.result.a0;
            let a1 = s.result.a1;
            let K = s.result.K;
            let v = s.result.v;
            let a = a1 - a0;
            switch (s.category) {
                case 2:
                    {
                        switch (s.name) {
                            case "耗氧量":
                                {
                                    s.result.c = (a * coefficient * K / v).toFixed(2)
                                }
                                break
                            case "溶解性总固体":
                                {
                                    s.result.c = (a * coefficient / v).toFixed(0)
                                }
                                break
                            default:
                                {
                                    s.result.c = (a * coefficient / v).toFixed(2);
                                }
                        }
                    }
                    break
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
            let range = s.range;
            if(min !== "" && min !== undefined && min !== null){
                range = min + "-" + max
            }else{

            switch (s.name) {
                
                // case "酸碱度":
                //     range = min + "-" + max;
                //     break;
                case "臭和味":
                case "肉眼可见物":
                    range = "---";
                    break;
                case "总大肠菌群":
                case "大肠埃希氏菌":
                case "耐热大肠菌群":
                    range = "不得检出";
                    break;
                default:
                    range = "<" + max;
            }
            }
            return range;
        },
        save_result(s) {
            /**
             * 从输入吸光度后计算得到的结果表格中获取数据,存入localStorage
             */

            let res = s.result
            res.date = this.dateFormat(new Date());
            res.id = s.start
            res.c = s.result.c;
            switch (s.category) {
                case 3:
                    {
                        if(s.range_min == "" || s.range_min == null || s.range_min == undefined){
                            if(s.range_max == "" || s.range_max == null || s.range_max == undefined){
                                if(isNaN(res.c) || res.c == 0){
                                    res.assessment = true 
                                }else{
                                    res.assessment = false
                                }
                            }else{
                                res.assessment = (res.c > s.range_max) ?  false: true 
                            }
                        }else{
                            res.assessment = (res.c > s.range_max || res.c < s.range_min) ?  false: true 
                        }
                        break
                    }
                    //     switch (s.name) {
                    //         case "酸碱度":
                    //             res.assessment = (res.c > s.range_max || res.c < s.range_min) ?  false: true 
                    //             break
                    //         default:
                    //             res.assessment = (res.c > s.range_max) ?  false: true 
                    //     }
                    //     break
                    // }
                case 2:
                    {
                        res.c = this.get_c2(s);
                        res.assessment = (res.c > s.range_max) ?  false: true 
                        break;
                    }
                default:
                    {
                        res.m = this.get_m(s);
                        res.c = this.get_c(s);
                        res.assessment = (res.c > s.range_max) ?  false: true 
                    }
            }
            let str = JSON.stringify(res); //格式化后才能存入 
            let p = (s.name + s.start + "报告结果");
            localStorage.setItem(p, str);
            res.assessment = true?"合格":"不合格"
            res.a = "";
            res.a1 = "";
            if(!isNaN(res.c)){
                res.c = ""
            }
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
                    p.unit = s.unit;
                    p.GB = s.GB;
                    p.method = s.method
                    p.range = this.get_range(s)
                    p.assessment = true?"合格":"不合格"
                    s.st.push(p);
                }
                s.start = Number(localStorage.getItem(n));
            }
            //对结果依据编号从小到大进行排序
            s.st.sort(function (i, j) {
                return Number(i.id) > Number(j.id) ? 1 : -1
            });
        },
        get_qc(s) {
            /**
             * 获取质控数据
             */
            this.qc_input = true
            for (let i = 0; i < localStorage.length; i++) {
                let qc = (s.name + "质控" + i);
                if (localStorage.getItem(qc) !== null) {
                    let qc_r = localStorage.getItem(qc)
                    qc_r = JSON.parse(qc_r);
                    qc_r.q_judge = qc_r.q_judge ? '在控' : '失控'
                    s.QC_store.push(qc_r)
                    s.store_i.id = qc_r.id
                }
            }
        },
        save_qc(s) {
            /**
             * 获取质控数据，写入质控数据
             */
            let coef = s.coefficient;
            let v = s.result.v;
            s.store_i.q_num = s.QC_store[s.QC_store.length - 1].q_num
            s.store_i.q_val = s.QC_store[s.QC_store.length - 1].q_val
            s.store_i.q_limit = s.QC_store[s.QC_store.length - 1].q_limit
            s.store_i.id = Number(s.store_i.id) + 1
            s.store_i.date = this.dateFormat(new Date());
            let qc = (s.name + "质控" + s.store_i.id);
            switch (s.category) {
                case 1:
                    s.store_i.result = (((s.store_i.a - s.a) / s.b) * s.QC_c / s.result.v).toFixed(3)
                    break
                case 2:
                    switch (s.name) {
                        case "溶解性总固体":
                            s.store_i.result = ((s.store_i.a - s.result.a0) * coef / v).toFixed(1)
                            break
                        default:
                            s.store_i.result = ((s.store_i.a - s.result.a0) * coef / v).toFixed(2)
                    }
                    break
                case 3:
                    s.store_i.result = s.store_i.a
                    break
            }
            let x = Number(s.store_i.q_val) + Number(s.store_i.q_limit)
            let y = Number(s.store_i.q_val) - Number(s.store_i.q_limit)
            if ((s.store_i.result > x) || (s.store_i.result < y)) {
                s.store_i.q_judge = false
            } else {
                s.store_i.q_judge = true
            }
            let store = JSON.stringify(s.store_i)
            localStorage.setItem(qc, store)
            this.QC = false
            s.QC_store = []
            this.get_qc(s)
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
        deleteAllData() {
            localStorage.clear()
        }
    },
    computed: {
        recived_date() {
            let date = new Date();
            return this.dateFormat(date)
        },
        test_date() {
            let date = new Date();
            return this.dateFormat(date)
        }
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
