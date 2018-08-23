var app = new Vue({
    el: "#root",
    data: {
        index: 0,  //这个是表格索引==序号
        new_item: '',   //表格新行
        show: false, 
        x: [],
        y: [],
        xgd: '',
        gs: '',
        table_show: true,
        charts: document.getElementById("line").html,
        names: [
            {
                id: 1,
                name: '氨氮',
                limit: 0.05,
                result_end: '',
                input_v: 50,
                items: [{
                    v: 0,
                    a: 0.005
                },
                {
                    v: 1,
                    a: 0.010
                },
                {
                    v: 3,
                    a: 0.020
                },
                {
                    v: 5,
                    a: 0.029
                },
                {
                    v: 7,
                    a: 0.039
                },
                {
                    v: 10,
                    a: 0.055
                }],
                
                standard_series: []
            },
            {
                id: 2,
                name: '氰化物-异烟酸-吡唑酮分光光度法',
                limit: 0.002,
                result_end: '',
                input_v: 250,
                items: [{
                    v: 0,
                    a: 0.004
                },
                {
                    v: 0.1,
                    a: 0.016
                },
                {
                    v: 0.3,
                    a: 0.035
                },
                {
                    v: 0.5,
                    a: 0.053
                },
                {
                    v: 0.7,
                    a: 0.073
                },
                {
                    v: 0.9,
                    a: 0.092
                }],
                standard_series: []
            },
            {
                id: 3,
                name: '锰',
                limit: 0.05,
                result_end: '',
                input_v: 50,
                items: [{
                    v: 0,
                    a: 0.002
                },
                {
                    v: 10,
                    a: 0.008
                },
                {
                    v: 30,
                    a: 0.024
                },
                {
                    v: 50,
                    a: 0.038
                },
                {
                    v: 70,
                    a: 0.053
                },
                {
                    v: 90,
                    a: 0.068
                }],
                standard_series: [{
                    1: 0.001,
                    2: 0.003,
                    3: 0.004,
                    4: 0.005,
                    5: 0.006,
                    6: 0.007,
                    7: 0.008
                }]
            },
            {
                id: 4,
                name: '氟化物-离子选择电极法',
                limit: 0.2,
                result_end: '',
                input_v: 10,
                items: [{
                    v: 0,
                    a: 0.371
                },
                {
                    v: 2.5,
                    a: 0.432
                },
                {
                    v: 5,
                    a: 0.473
                },
                {
                    v: 10,
                    a: 0.559
                },
                {
                    v: 20,
                    a: 0.724
                },
                {
                    v: 40,
                    a: 1.053
                }],
                standard_series: []
            },
            {
                id: 5,
                name: '硝酸盐氮-麝香草酚分光光度法',
                limit: 0.5,
                result_end: '',
                input_v: 1,
                items: [{
                    v: 0,
                    a: 0.007
                },
                {
                    v: 0.5,
                    a: 0.030
                },
                {
                    v: 1,
                    a: 0.047
                },
                {
                    v: 3,
                    a: 0.130
                },
                {
                    v: 5,
                    a: 0.197
                },
                {
                    v: 7,
                    a: 0.278
                },
                {
                    v: 10,
                    a: 0.405
                }],
                standard_series: []
            },
            {
                id: 6,
                name: '铝-铬天青S分光光度法',
                limit: 0.008,
                result_end: '',
                input_v: 25,
                items: [{
                    v: 0,
                    a: 0.004
                },
                {
                    v: 0.5,
                    a: 0.066
                },
                {
                    v: 1,
                    a: 0.143
                },
                {
                    v: 2,
                    a: 0.300
                },
                {
                    v: 3,
                    a: 0.446
                },
                {
                    v: 4,
                    a: 0.585
                },
                {
                    v: 5,
                    a: 0.725
                }],
                standard_series: []
            },
            {
                id: 7,
                name: '挥发酚-4-氨基安替比林直接分光光度法',
                limit: 0.002,
                result_end: '',
                input_v: 250,
                items: [{
                    v: 0,
                    a: 0.006
                },
                {
                    v: 0.5,
                    a: 0.016
                },
                {
                    v: 1,
                    a: 0.028
                },
                {
                    v: 3,
                    a: 0.070
                },
                {
                    v: 5,
                    a: 0.121
                },
                {
                    v: 7,
                    a: 0.162
                },
                {
                    v: 10,
                    a: 0.234
                }],
                standard_series: []
            },
            {
                id: 8,
                name: '汞-双硫腙分光光度法',
                limit: 0.001,
                result_end: '',
                input_v: 25,
                items: [{
                    v: 0,
                    a: 0.006
                },
                {
                    v: 0.5,
                    a: 0.423
                },
                {
                    v: 1,
                    a: 0.441
                },
                {
                    v: 2,
                    a: 0.474
                },
                {
                    v: 4,
                    a: 0.531
                },
                {
                    v: 6,
                    a: 0.598
                },
                {
                    v: 8,
                    a: 0.660
                }],
                standard_series: []
            },
            {
                id: 9,
                name: '阴离子合成洗涤剂-二氮杂菲萃取分光光度法',
                limit: 0.025,
                result_end: '',
                input_v: 100,
                items: [{
                    v: 0,
                    a: 0.019
                },
                {
                    v: 5,
                    a: 0.041
                },
                {
                    v: 10,
                    a: 0.075
                },
                {
                    v: 20,
                    a: 0.128
                },
                {
                    v: 30,
                    a: 0.185
                },
                {
                    v: 40,
                    a: 0.233
                },
                {
                    v: 50,
                    a: 0.290
                }],
                standard_series: []
            },
            {
                id: 10,
                name: '硒-双硫腙分光光度法',
                limit: 0.001,
                result_end: '',
                input_v: 250,
                items: [{
                    v: 0,
                    a: 0.024
                },
                {
                    v: 1,
                    a: 0.035
                },
                {
                    v: 2,
                    a: 0.047
                },
                {
                    v: 4,
                    a: 0.068
                },
                {
                    v: 6,
                    a: 0.088
                },
                {
                    v: 8,
                    a: 0.110 
                }],
                standard_series: []
            },
            {
                id: 11,
                name: '镉-双硫腙分光光度法',
                limit: 0.01,
                result_end: '',
                input_v: 25,
                items: [{
                    v: 0,
                    a: 0.207
                },
                {
                    v: 0.25,
                    a: 0.216
                },
                {
                    v: 0.5,
                    a: 0.224
                },
                {
                    v: 1,
                    a: 0.242
                },
                {
                    v: 2,
                    a: 0.273
                },
                {
                    v: 4,
                    a: 0.336
                }],
                standard_series: []
            },
            {
                id: 12,
                name: '铅-双硫腙分光光度法',
                limit: 0.01,
                result_end: '',
                input_v: 50,
                items: [{
                    v: 0,
                    a: 0.434
                },
                {
                    v: 0.5,
                    a: 0.451
                },
                {
                    v: 1,
                    a: 0.471
                },
                {
                    v: 2,
                    a: 0.502
                },
                {
                    v: 4,
                    a: 0.567
                },
                {
                    v: 6,
                    a: 0.630
                }],
                standard_series: []
            },
            {
                id: 13,
                name: '六价铬-二苯碳酰二肼分光光度法',
                limit: 0.004,
                result_end: '',
                input_v: 50,
                items: [{
                    v: 0,
                    a: 0.002
                },
                {
                    v: 0.5,
                    a: 0.012
                },
                {
                    v: 1,
                    a: 0.019
                },
                {
                    v: 2,
                    a: 0.034
                },
                {
                    v: 4,
                    a: 0.069
                },
                {
                    v: 6,
                    a: 0.103
                }],
                standard_series: []
            },
            {
                id: 14,
                name: '铜-二乙基二硫氨基甲酸钠分光光度法',
                limit: 0.02,
                result_end: '',
                input_v: 100,
                items: [{
                    v: 0,
                    a: 0.038
                },
                {
                    v: 2,
                    a: 0.080
                },
                {
                    v: 4,
                    a: 0.121
                },
                {
                    v: 6,
                    a: 0.160
                },
                {
                    v: 8,
                    a: 0.201
                },
                {
                    v: 10,
                    a: 0.238
                }],
                standard_series: []
            },
            {
                id: 15,
                name: '锰-过硫酸铵分光光度法',
                limit: 0.05,
                result_end: '',
                input_v: 50,
                items: [{
                    v: 0,
                    a: 0.002
                },
                {
                    v: 10,
                    a: 0.008
                },
                {
                    v: 30,
                    a: 0.024
                },
                {
                    v: 50,
                    a: 0.038
                },
                {
                    v: 70,
                    a: 0.053
                },
                {
                    v: 90,
                    a: 0.068
                }],
                standard_series: []
            },
            {
                id: 16,
                name: '铁-二氮杂菲分光光度法',
                limit: 0.05,
                result_end: '',
                input_v: 50,
                items: [{
                    v: 0,
                    a: 0.095
                },
                {
                    v: 5,
                    a: 0.122
                },
                {
                    v: 10,
                    a: 0.149
                },
                {
                    v: 20,
                    a: 0.196
                },
                {
                    v: 30,
                    a: 0.246
                },
                {
                    v: 40,
                    a: 0.290
                }],
                standard_series: []
            },
            {
                id: 17,
                name: '锌-双硫腙分光光度法',
                limit: 0.05,
                result_end: '',
                input_v: 10,
                items: [{
                    v: 0,
                    a: 0.748
                },
                {
                    v: 0.5,
                    a: 0.811
                },
                {
                    v: 1,
                    a: 0.890
                },
                {
                    v: 2,
                    a: 1.036
                },
                {
                    v: 4,
                    a: 1.32
                },
                {
                    v: 6,
                    a: 1.602
                }],
                standard_series: []
            },
            {
                id: 18,
                name: '硫酸盐-硫酸钡分光光度法（热法）',
                limit: 5,
                result_end: '',
                input_v: 50,
                items: [{
                    v: 0,
                    a: 0.029
                },
                {
                    v: 3,
                    a: 0.355
                },
                {
                    v: 5,
                    a: 0.574
                },
                {
                    v: 7,
                    a: 0.784
                },
                {
                    v: 10,
                    a: 1.137
                }],
                standard_series: []
            },
        ],
        selected: ''
    },
    methods: {
        add_item() {
            this.selected.items.push(this.new_item);
        },
        del(index) {
            this.selected.items.splice(index, 1);
        },
        get_cols(id){
            this.x = [];
            this.y = [];
            var cols = document.getElementById(id).rows;
            for(var i=1; i<cols.length; i++){
                var value1 = Number(cols[i].cells[1].innerText);
                var value2 = Number(cols[i].cells[2].innerText);
                var value = [];
                value.push(value1,value2);
                this.x.push(value1);
                this.y.push(value2);
                this.selected.standard_series.push(value);
            }
            this.math_show();
            this.show = !this.show;
        },
        sum(arr1, arr2){
            var result = 0;
            for(var i=0; i<arr1.length; i++){
                result += (arr1[i] * arr2[i]);
            }
            return result;
        },
        sum_1(arr3){
            var z = 0;
            for(var i=0; i<arr3.length; i++){
                z += arr3[i];
            }
            return z;
        },
        average(arr){
            var over = this.sum_1(arr);
            return over/arr.length;
        },
        math_show(){
            this.gs = "";
            if (this.a >= 0){
                this.gs = "<p>回归方程为：y = " + this.b +"x + " + this.a + "</p><p>相关系数为：r = " + this.r + "</p>";

            }else{
                var a = -(this.a);
                this.gs = "<p>回归方程为：y = " + this.b +"x - " + a + "</p><p>相关系数为：r = " + this.r + "</p>";
            }
        },
        show_table(){
            this.table_show = !this.table_show;
        },
    },
    
    computed: {
        write_chart(){
            return this.charts;
        },
        
        b(){
            var n = this.x.length;
            var x_ = [];
            for(var i=0; i<n; i++){
                x_.push(this.x[i] * this.x[i]);
            }
            var over =  this.sum(this.y, this.x) - n * this.average(this.x) * this.average(this.y);
            var under = this.sum_1(x_) - n * (this.average(this.x) * this.average(this.x));
            return (over / under).toFixed(4);
        },
        a(){
            return (this.average(this.y) - this.b * this.average(this.x)).toFixed(4);
        },
        r(){
            var n = this.x.length;
            var over = this.sum(this.y,this.x) - n * this.average(this.x) * this.average(this.y);
            var under = Math.sqrt((this.sum(this.x,this.x) - n * this.average(this.x) * this.average(this.x)) * (this.sum(this.y,this.y) - n * this.average(this.y) * this.average(this.y)));
            return (over / under).toFixed(4);
        },
        result(){
            return ((this.xgd - this.a) / this.b).toFixed(2);
        },
        result_c(){
            return (this.result / this.selected.input_v).toFixed(2);
        },
        calculation(){
            if(this.result_c > this.selected.limit){
                this.selected.result_end = this.result_c;
            }else{
                this.selected.result_end = '<' + this.selected.limit;
            }
            return this.selected.result_end;
        }
    }
});

function getTableContent(id) {
    var myTable = document.getElementById(id).rows;
    var data = [];
    for(var i=1; i<myTable.length; i++){
        var arr = [];
        arr.push(myTable[i].innerText.split('\t'));
        arr[0][1] = Number(arr[0][1]);
        arr[0][2] = Number(arr[0][2]);
        data.push(arr[0].slice(1,3));
    }
    return data;
};
function getId(){
    return app.selected.id;
};

function getName(){
    return app.selected.name;
};

function focus_move() {
    window.scrollTo(0, document.documentElement.clientHeight);
};

function show_chart() {
    var data = getTableContent(getId());
    var name = getName();
    chart = Highcharts.chart('line', {
        title: {
            text: "标准回归曲线"
        },
        subtitle: {
            text: name
        },
        xAxis:{
            title:{
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
            data: data
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