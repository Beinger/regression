var app = new Vue({
    el: "#root",
    data: {
        items: [{
            v: "",
            a: ""
        }],
        index: 0,
        new_item: '',
        show: false,
        x: [],
        y: [],
        xgd: '',
        gs: '',
        names:[
            {
                id: 1,
                name: '铁',
                limit: 0.05,
                result_end: '',
                input_v: 50,
                table_data: []
            },
            {
                id: 2,
                name: '铜',
                limit: 0.04,
                result_end: '',
                input_v: 50,
                table_data: []
            },
            {
                id: 3,
                name: '锰',
                limit: 0.05,
                result_end: '',
                input_v: 50,
                table_data: []
            },
        ],
        selected: ''
    },
    methods: {
        add_item() {
            this.items.push(this.new_item, this.new_item, this.new_item);
        },
        del(index) {
            this.items.splice(index, 1);
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
                this.names[this.selected.id-1].table_data.push(value);
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
        }
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
        }
    }
});

function getTableContent(id) {
    var myTable = document.getElementById(id).rows;
    var data = [
    ];
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

function getResult(){
    return app.selected.result_end;
};

function show_chart() {

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
            type: 'line',
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