var app = new Vue({
    el: "#root",
    data: {
        index: 0,
        new_item: '',
        show: false,
        x: [],
        y: [],
        xgd: '',
        gs: '',
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
                id: 2,
                name: '氰化物',
                limit: 0.01,
                result_end: '',
                input_v: 50,
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
                id: 3,
                name: '锰',
                limit: 0.05,
                result_end: '',
                input_v: 50,
                items: [{
                    v: 0,
                    a: 0.008
                },
                {
                    v: 0.5,
                    a: 0.012
                },
                {
                    v: 1,
                    a: 0.024
                },
                {
                    v: 3,
                    a: 0.036
                },
                {
                    v: 5,
                    a: 0.045
                },
                {
                    v: 7,
                    a: 0.067
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
        ],
        selected: {
                id: 1,
                name: '铁',
                limit: 0.05,
                result_end: '',
                input_v: 50,
                items:[{
                    v: '7',
                    a: '0.42'
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
            }
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
    },
    
    computed: {
        
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
            return ((this.xgd - this.a) / this.b).toFixed(4);
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
    var range, el = document.getElementById('hint');
    if (el.setSelectionRange) {
        el.focus();
        el.setSelectionRange(el.value.length, el.value.length)
    } else {
        range = el.createTextRange();
        range.collapse(false);
        range.select();
    }
};

function show_chart() {
    focus_move();
    var data = getTableContent(getId());
    var name = getName();
    chart = Highcharts.chart('container', {
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
    })
}