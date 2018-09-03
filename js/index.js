let app = new Vue({
    el: "#root",
    data: {
        show_v: true,
        index: 0, //这个是表格索引==序号
        new_item: '', //表格新行
        show: false,
        calculation: false,
        add: false,
        vol_select: [
            50, 100, 250, 1, 25, 10
        ],
        names: [{
                st: [],
                v: 50,
                start: 1,
                end: 1,
                id: 1,
                name: '氨氮',
                limit: 0.05,
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
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
                    result: ''
                },
            },
            {
                id: 2,
                st: [],
                v: 250,
                start: 1,
                end: 1,
                name: '氰化物',
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                limit: 0.002,
                standard_series: [],
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
                    result: ''
                },
            },
            {
                id: 3,
                st: [],
                v: 50,
                start: 1,
                end: 1,
                name: '锰',
                limit: 0.05,
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
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
                        1.053
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
                    result: ''
                },
            },
            {
                id: 4,
                st: [],
                v: 25,
                start: 1,
                end: 1,
                name: '氟化物',
                limit: 0.2,
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
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
                    result: ''
                },
            },
            {
                id: 5,
                st: [],
                v: 1,
                start: 1,
                end: 1,
                name: '硝酸盐氮',
                limit: 0.5,
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
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
                    result: ''
                },
            },
            {
                id: 6,
                st: [],
                v: 100,
                start: 1,
                end: 1,
                name: '铝',
                limit: 0.008,
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
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
                    result: ''
                },
            },
            {
                id: 7,
                st: [],
                v: 50,
                start: 1,
                end: 1,
                name: '挥发酚',
                limit: 0.002,
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
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
                    result: ''
                },
            },
            {
                id: 8,
                st: [],
                v: 50,
                start: 1,
                end: 1,
                name: '汞',
                limit: 0.001,
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
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
                    result: ''
                },
            },
            {
                id: 9,
                st: [],
                v: 50,
                start: 1,
                end: 1,
                name: '阴离子合成洗涤剂',
                limit: 0.025,
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
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
                    result: ''
                },
            },
            {
                id: 10,
                st: [],
                v: 50,
                start: 1,
                end: 1,
                name: '硒',
                limit: 0.001,
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
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
                    result: ''
                },
            },
            {
                id: 11,
                st: [],
                v: 100,
                start: 1,
                end: 1,
                name: '镉',
                limit: 0.01,
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
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
                    result: ''
                },
            },
            {
                id: 12,
                st: [],
                v: 50,
                start: 1,
                end: 1,
                name: '铅',
                limit: 0.01,
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
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
                    result: ''
                },
            },
            {
                id: 13,
                st: [],
                v: 50,
                start: 1,
                end: 1,
                name: '六价铬',
                limit: 0.004,
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
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
                    result: ''
                }
            },
            {
                id: 14,
                st: [],
                v: 50,
                start: 1,
                end: 1,
                name: '铜',
                limit: 0.02,
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
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
                    result: ''
                },
            },
            {
                id: 15,
                st: [],
                v: 50,
                start: 1,
                end: 1,
                name: '锰',
                limit: 0.05,
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
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
                    result: ''
                },
            },
            {
                id: 16,
                st: [],
                v: 50,
                start: 1,
                end: 1,
                name: '铁',
                limit: 0.05,
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
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
                    result: ''
                },
            },
            {
                id: 17,
                st: [],
                v: 50,
                start: 1,
                end: 1,
                name: '锌',
                limit: 0.05,
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
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
                    result: ''
                },
            },
            {
                id: 18,
                st: [],
                v: 50,
                start: 1,
                end: 1,
                name: '硫酸盐',
                limit: 5,
                a: 0,
                b: 1,
                r: 1,
                c: 0,
                formula: '',
                x: [],
                y: [],
                standard_series: [],
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
                    v: 25,
                    a: '',
                    m: '',
                    result: ''
                },
            },
        ],
        selected: ''
    },
    watch: {
        /**
         * 当选择了项目时，显示标准系列的列表
         */
        selected: function () {
            this.show = true;
            this.get_series();
            this.save_series();
            this.math_formula();
            show_chart();
        }

    },
    methods: {
        save_results_all() {

        },
        save_results() {
            // for(let n=0; n<this.selected.results.length; n++){
            //     myStorage.removeItem(this.selected.name+n+'报告结果');
            // }
            let rows = document.getElementById("result_table").rows;
            let start_item = Number(rows[1].innerText[0]);
            let end_item = rows.length - 1;
            for (let i = start_item; i < end_item; i++) {
                let p = (this.selected.name + i + '报告结果');
                let str = JSON.stringify(this.selected.results[i - 1]);
                myStorage.setItem(p, str);
            }
            let n = this.selected.name + 'end';
            myStorage.setItem(n, this.selected.end);
        },
        change(item, index) {
            this.selected.results[index] = item;
        },
        set_input() {
            this.show_v = !this.show_v
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
            myStorage.setItem(this.selected.name, this.selected.standard_series);
        },
        get_series() {
            /**
             * 从localStorage中获取保存的标准系列,如果是第一次使用，
             * 会调用默认的标准系列,同时渲染出标准系列表格。
             */
            let series_data = myStorage.getItem(this.selected.name);
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
             * 从页面的表格中取值，做好回归分析的准备。
             * 同时，把数据存入所选项目的standard_series中。
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
            this.selected.b = (over / under).toFixed(4);
        },
        cal_a() {
            /**
             * 根据当前项目的标准系列算出标准回归公式的斜率
             */
            this.selected.a = 1;
            this.selected.a = (this.average(this.selected.y) - this.selected.b * this.average(this.selected.x)).toFixed(4);
        },
        cal_r() {
            /*
             * 根据当前项目的标准系列算出标准系列的相关系数
             */
            this.selected.r = 1;
            let n = this.selected.x.length;
            let over = this.sum(this.selected.y, this.selected.x) - n * this.average(this.selected.x) * this.average(this.selected.y);
            let under = Math.sqrt((this.sum(this.selected.x, this.selected.x) - n * this.average(this.selected.x) * this.average(this.selected.x)) * (this.sum(this.selected.y, this.selected.y) - n * this.average(this.selected.y) * this.average(this.selected.y)));
            this.selected.r = (over / under).toFixed(4);
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
                this.selected.formula = "<p>回归方程为：y = " + this.selected.b + "x + " + this.selected.a + "</p><p>相关系数为：r = " + this.selected.r + "</p>";

            } else {
                let a = -(this.selected.a);
                this.selected.formula = "<p>回归方程为：y = " + this.selected.b + "x - " + a + "</p><p>相关系数为：r = " + this.selected.r + "</p>";
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
        add_sample() {
            /**
             * 增加样品行
             */
            this.add = !this.add;
            this.calculation = true;
            this.mystorages()
        },
        find_element(arrays, attr, value) {
            for (let i = 0; i < arrays.length; i++) {
                if (arrays[i][attr] == value) {
                    return true;
                }
            }
            return false;
        },
        submit_result(index) {
            /**
             * 提交数据到结果数组中
             */

            // if (this.find_element(this.selected.results, 'id', this.selected.start+1)) {
            //     this.selected.results.splice(index, 1);
            // }
            this.selected.new_results.id = this.selected.start;
            this.selected.results.push(this.selected.new_results);
            this.selected.new_results = {
                id: this.selected.end,
                v: this.selected.v,
                a: '',
                m: '',
                result: '',
            };
            this.selected.start = Number(this.selected.start) + 1;
            let n = Number(this.selected.end);
            this.selected.end = n + 1;
        },
        del_sample(index) {
            /**
             * 删除样品行
             */
            this.selected.results.splice(index, 1);
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
        get_id(index) {
            return "YXCDC2018水第" + this.selected.results[index].id + "号";
        },
        get_m(element) {

            /**
             * 根据出当前项目的吸光度计算出样品所含物质质量
             */
            let a = this.selected.results[element].a;
            // let id = this.selected.results[element].id;
            this.selected.results[element].m = (((a - this.selected.a) / this.selected.b).toFixed(3));
            return this.selected.results[element].m;
        },
        get_result(element) {
            /**
             * 根据当前项目的加样体积和质量算出样品中物质的浓度
             */
            let v = this.selected.results[element].v;
            let m = this.selected.results[element].m;
            this.selected.results[element].c = (m / v).toFixed(2);
            let c = this.selected.results[element].c;
            if (c >= this.selected.limit) {
                this.selected.results[element].result = c;
            } else {
                this.selected.results[element].result = ('<' + this.selected.limit);
            }
            return this.selected.results[element].result;
        },
        mystorages() {
            /**
             * 从localStorage中获取保存的结果，存入st数组
             */
            this.selected.st = [];
            let start = Number(this.selected.start);
            for (let i = 1; i < start; i++) {
                let x = (this.selected.name + i + '报告结果');
                let p = myStorage.getItem(x);
                p = eval(JSON.parse(p));
                this.selected.st.push(p);
            }
            let n = (this.selected.name + 'end');
            if(myStorage.getItem(n)){
                this.selected.start = Number(myStorage.getItem(n));
            }else{
                this.selected.start = this.selected.start;
            }
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
    myStorage.setItem(app.selected.name, series_data)
};

function focus_move() {
    /**
     * 移动焦点到页面底部
     */
    window.scrollTo(0, document.documentElement.clientHeight);
};

function show_chart() {
    /**
     * 用highcharts绘制标准曲线
     */
    getTableContent(app.selected.id); //获取当前项目的标准系列数据
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
            // data: app.selected.standard_series
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
(function useCount() {
        //计数页面登录次数
        let pagecount = 'pagecount';
        if (myStorage.getItem(pagecount)) {
            myStorage.setItem(pagecount, Number(myStorage.getItem(pagecount)) + 1);
        } else {
            myStorage.setItem(pagecount, 1);
        }
})();