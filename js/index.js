let app = new Vue({
    el: "#root",
    data: {
        company: '',
        username: '',
        login_f: true,
        index: 0, //这个是表格索引==序号
        new_item: '', //表格新行
        show_v: true,
        show: false,
        show2: false,
        add: false,
        date_show: false,
        vol_select: [
            50, 100, 250, 1, 25, 10
        ],
        selected: '',
        selected2: '',
        new_opt: {
            st: [],
            judge: false,
            range_large: '',
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
            range_large: '',
            assessment: true,
            unit: 'mg/L',
            v: 1,
            start: 1,
            end: 1,
            id: 1,
            name: '',
            method: '',
            limit: '',
            a0: '',
            a1: '',
            a: '',
            c: 0,
            formula: '',
            instrument_model: '',
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
        sample: {
            id: '',
            v: 3,
            temprature: 20,
            rh: 70,
        },
        names2: [],
        names: [{
                st: [],
                judge: false,
                range_large: 0.5,
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
                range_large: 0.05,
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
                range_large: 0.1,
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
                range_large: 1.0,
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
                range_large: 20,
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
                range_large: 0.2,
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
                range_large: 0.002,
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
                range_large: 0.001,
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
                range_large: 0.3,
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
                range_large: 0.01,
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
                range_large: 0.005,
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
                range_large: 0.01,
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
                range_large: 0.05,
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
                range_large: 1.0,
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
                range_large: 0.1,
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
                range_large: 0.3,
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
                range_large: 1.0,
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
                range_large: 250,
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
            this.get_series();
            this.save_series();
            this.math_formula();
            show_chart();
        },
        selected2(){
            /**
             * 当选择了非比色类项目时，只需要计算，不需要标准系列和曲线
             */
            this.show2 = true;
            this.show = false
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
            this.set_record()
            this.useCount(item.name);
            this.useJudge(item.name)
        },
        submit_result(somes) {
            /**
             * 提交数据到结果数组中
             */
            somes.new_results.id = somes.start;
            somes.results.push(somes.new_results);
            somes.new_results = {
                id: somes.start,
                v: somes.v,
                a: '',
                m: '',
                date: '',
            };
            somes.start = Number(somes.start) + 1;
        },
        del_sample(index) {
            /**
             * 删除样品行
             */
            this.selected.results.splice(index, 1);
        },
        del_sample2(index) {
            /**
             * 删除样品行
             */
            this.selected2.results.splice(index, 1);
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
             * 根据出当前项目的吸光度计算出样品所含物质质量
             */
            let a1 = this.selected2.results[element].a1;
            let a0 = this.selected2.results[element].a0;
            let a = a1 - a0;
            this.selected2.results[element].a = a
            this.selected2.results[element].m = ((a / this.selected2.v).toFixed(3));
            return this.selected2.results[element].m;
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
        save_results(id,st) {
            /**
             * 从输入吸光度后计算得到的结果表格中获取数据,存入localStorage
             */

            this.useJudge(st.name)
            let rows = document.getElementById(id).rows; //获取表格
            let start_item = Number(rows[1].cells[0].innerText); //表格第一个编号
            let end_item = Number(rows[rows.length - 1].cells[0].innerText); //表格最后一个编号
            for (let i = start_item; i <= end_item; i++) {
                let p = (st.name + i + '报告结果');
                let date = new Date();
                date = this.dateFormat(date);
                let res = st.results[i - start_item]
                res.date = date;
                res.v = st.v
                res.limit = st.limit
                res.range_large = st.range_large;
                res.unit = st.unit
                if (res.c < res.range_large) {
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
            somes.st.sort(function (i, j) {
                return Number(i.id) > Number(j.id) ? 1 : -1
            });
        },
        set_record() {
            //最后一次输入记录后的标记
            if (this.selected.judge) {
                this.selected.end = this.selected.start;
            } else {
                this.selected.end = 1;
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
            localStorage.setItem("username", this.username)
            localStorage.setItem("company", this.company)
            this.login_f = false
        },
        init_login() {
            if (localStorage.getItem("company")) {
                this.login_f = false
                this.company = localStorage.getItem("company")
                this.username = localStorage.getItem("username")
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
            let pagecount = item + 'pagecount';
            if (localStorage.getItem(pagecount)) {
                localStorage.setItem(pagecount, Number(localStorage.getItem(pagecount)) + 1);
            } else {
                localStorage.setItem(pagecount, 1);
            }
        },
        useJudge(item) {
            //判断是否保存过报告结果
            let judge = item + 'judge';
            if (localStorage.getItem(judge) !== null) {
                app.selected.judge = true;
                localStorage.setItem(judge, true);
            } else {
                app.selected.judge = false;
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
                text: "加样量(ml)"
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