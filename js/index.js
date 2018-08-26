var app = new Vue({
    el: "#root",
    data: {
        index: 0,  //这个是表格索引==序号
        new_item: '',   //表格新行
        x: [],
        y: [],
        xgd: '',
        gs: '',
        show: false,
        names: [
            {
                id: 1,
                name: '氨氮',
                limit: 0.05,
                standard_series: [],
                items: [[
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
                ]],
                results_save:[{
                    id: '',
                    input_v: 50,
                    xgd: '',
                    m: '',
                    result: ''
                }],
            },
            {
                id: 2,
                name: '氰化物-',
                
                limit: 0.002,
                standard_series: [],
                items: [[
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
                ]],
                results:[]
            },
            {
                id: 3,
                name: '锰',
                limit: 0.05,
                standard_series: [],
                items: [[
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
                ]],
                results:[]
            },
            {
                id: 4,
                name: '氟化物-离子选择电极法',
                limit: 0.2,
                standard_series: [],
                items: [[
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
                ]],
                results:[]
            },
            {
                id: 5,
                name: '硝酸盐氮-麝香草酚分光光度法',
                limit: 0.5,
                standard_series: [],
                items: [[
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
                ]],
                results:[]
            },
            {
                id: 6,
                name: '铝-铬天青S分光光度法',
                limit: 0.008,
                standard_series: [],
                items: [[
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
                ]],
                results:[]
            },
            {
                id: 7,
                name: '挥发酚-4-氨基安替比林直接分光光度法',
                limit: 0.002,
                standard_series: [],
                items: [[
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
                ]],
                results:[]
            },
            {
                id: 8,
                name: '汞-双硫腙分光光度法',
                limit: 0.001,
                standard_series: [],
                items: [[
                    0,
                    0.006
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
                ]],
                results:[]
            },
            {
                id: 9,
                name: '阴离子合成洗涤剂-二氮杂菲萃取分光光度法',
                limit: 0.025,
                standard_series: [],
                items: [[
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
                ]],
                results:[]
            },
            {
                id: 10,
                name: '硒-双硫腙分光光度法',
                limit: 0.001,
                standard_series: [],
                items: [[
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
                ]],
                results:[]
            },
            {
                id: 11,
                name: '镉-双硫腙分光光度法',
                limit: 0.01,
                standard_series: [],
                items: [[
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
                ]],
                results:[]
            },
            {
                id: 12,
                name: '铅-双硫腙分光光度法',
                limit: 0.01,
                standard_series: [],
                items: [[
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
                ]],
                results:[]
            },
            {
                id: 13,
                name: '六价铬-二苯碳酰二肼分光光度法',
                limit: 0.004,
                standard_series: [],
                items: [[
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
                ]],
                results_save:{
                    id: '',
                    input_v: 50,
                    xgd: '',
                    m: '',
                    result: '',
                }
            },
            {
                id: 14,
                name: '铜-二乙基二硫氨基甲酸钠分光光度法',
                limit: 0.02,
                standard_series: [],
                items: [[
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
                ]],
                results:[]
            },
            {
                id: 15,
                name: '锰-过硫酸铵分光光度法',
                limit: 0.05,
                standard_series: [],
                items: [[
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
                ]],
                results:[]
            },
            {
                id: 16,
                name: '铁-二氮杂菲分光光度法',
                limit: 0.05,
                standard_series: [],
                items: [[
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
                ]],
                results:[]
            },
            {
                id: 17,
                name: '锌-双硫腙分光光度法',
                limit: 0.05,
                standard_series: [],
                items: [[
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
                ]],
                results:[]
            },
            {
                id: 18,
                name: '硫酸盐-硫酸钡分光光度法（热法）',
                limit: 5,
                standard_series: [],
                items: [[
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
                ]],
                results:[]
            },
        ],
        selected: ''
    },
    methods: {
        set_show() {
            /**
             * 当选择了项目时，显示标准系列的列表
             */
            this.show = true
        },

        get_series() {
            /**
             * 从localStorage中获取保存的标准系列,同时渲染出标准系列表格。
             */
            if (myStorage.getItem(this.selected.name)) {
                /**
                 * 如果数据不存在于localStorage,就要从data的默认值中取出
                 * 默认系列，否则就从localStorage中取值
                 */
                var data = myStorage.getItem(this.selected.name);
                var new_data = [];
                data = data.split(',');
                data = data.map(Number);
                var x = [];
                for (var i = 0; i < data.length / 2; i++) {
                    x[i] = data.slice(i * 2, i * 2 + 2);
                    new_data.push(x[i]);
                }
                this.selected.standard_series = new_data;
            } else {
                this.selected.standard_series = this.selected.items
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
        add_yangPin(){
            /**
             * 增加样品行
             */
            this.selected.results_save.push(this.new_item);
        },
        del_yangPin(index){
            this.selected.results_save.splice(index, 1);
        },
        save_series(id) {
            /**
             * 从页面的表格中取值，做好回归分析的准备。
             * 同时，把数据存入所选项目的standard_series中。
             */
            this.x = []; //标准系列的加样量数据
            this.y = []; //标准系列的吸光度数据
            var rows = document.getElementById(id).rows;
            for (var i = 1; i < rows.length; i++) {
                var value1 = Number(rows[i].cells[1].innerText);
                var value2 = Number(rows[i].cells[2].innerText);
                var value = [];
                value.push(value1, value2);
                this.x.push(value1);
                this.y.push(value2);
                this.names[this.selected.id - 1].standard_series[i - 1] = value;
            }
            myStorage.setItem(this.selected.name, this.names[this.selected.id - 1].standard_series)
        },
        sum(arr1, arr2) {
            var result = 0;
            for (var i = 0; i < arr1.length; i++) {
                result += (arr1[i] * arr2[i]);
            }
            return result;
        },
        sum_1(arr3) {
            var z = 0;
            for (var i = 0; i < arr3.length; i++) {
                z += arr3[i];
            }
            return z;
        },
        average(arr) {
            var over = this.sum_1(arr);
            return over / arr.length;
        },
        math_show() {
            this.gs = "";
            if (this.a >= 0) {
                this.gs = "<p>回归方程为：y = " + this.b + "x + " + this.a + "</p><p>相关系数为：r = " + this.r + "</p>";

            } else {
                var a = -(this.a);
                this.gs = "<p>回归方程为：y = " + this.b + "x - " + a + "</p><p>相关系数为：r = " + this.r + "</p>";
            }
        },
        show_table() {
            this.save_series(this.selected.id);
            this.math_show();
            show_chart();
        },
        result(id) {
            return ((this.selected.results_save[id].xgd - this.a) / this.b).toFixed(2);
        },
        result_c(id) {
            return (this.result(id) / this.selected.results_save[id].input_v).toFixed(2);
        },
        calculation(id) {
            if (this.result_c(id) > this.selected.limit) {
                this.selected.results_save[id].result = this.result_c(id);
            } else {
                this.selected.results_save[id].result = '<' + this.selected.limit;
            }
            return this.selected.results_save[id].result;
        },
    },

    computed: {
        b() {
            var n = this.x.length;
            var x_ = [];
            for (var i = 0; i < n; i++) {
                x_.push(this.x[i] * this.x[i]);
            }
            var over = this.sum(this.y, this.x) - n * this.average(this.x) * this.average(this.y);
            var under = this.sum_1(x_) - n * (this.average(this.x) * this.average(this.x));
            return (over / under).toFixed(4);
        },
        a() {
            return (this.average(this.y) - this.b * this.average(this.x)).toFixed(4);
        },
        r() {
            var n = this.x.length;
            var over = this.sum(this.y, this.x) - n * this.average(this.x) * this.average(this.y);
            var under = Math.sqrt((this.sum(this.x, this.x) - n * this.average(this.x) * this.average(this.x)) * (this.sum(this.y, this.y) - n * this.average(this.y) * this.average(this.y)));
            return (over / under).toFixed(4);
        },
    }
});

function getTableContent(id) {
    var myTable = document.getElementById(id).rows;
    var data = [];
    for (var i = 1; i < myTable.length; i++) {
        var arr = [];
        arr.push(myTable[i].innerText.split('\t'));
        arr[0][1] = Number(arr[0][1]);
        arr[0][2] = Number(arr[0][2]);
        data.push(arr[0].slice(1, 3));
    }
    return data;
};
function focus_move() {
    window.scrollTo(0, document.documentElement.clientHeight);
};



function show_data() {
    var x = localStorage.getItem(app.selected.name);
    alert(x);
};

function show_chart() {
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
            data: app.selected.standard_series
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
    focus_move();
}
(function useCount() {
    var pagecount = 'pagecount';
    if (myStorage.getItem(pagecount)) {
        myStorage.setItem(pagecount, Number(myStorage.getItem(pagecount)) + 1);
    } else {
        myStorage.setItem(pagecount,1);
    }
})();