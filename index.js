var app = new Vue({
    el: "#root",
    data: {
        items: [{
            v: "",
            a: ""
        }],
        index: 0,
        new_item: '',
        x: [],
        y: [],
        show: false
    },
    methods: {
        add_item() {
            this.items.push(this.new_item, this.new_item, this.new_item);
        },
        del(index) {
            this.items.splice(index, 1);
        },
        add_y(){
            var row_x = document.getElementById("mt").rows;
            for(var i=1; i<row_x.length; i++){
                this.y.push(parseFloat(row_x[i].cells[2].innerText));
            }
        },
        add_x(){
            var row_x = document.getElementById("mt").rows;
            for(var i=1; i<row_x.length; i++){
                this.x.push(parseFloat(row_x[i].cells[1].innerText));
            }
        },
        add(){
            this.y = [];
            this.x = [];
            this.add_y();
            this.add_x();
            this.show = !this.show;
        },

    },
    
    computed: {
        
        sum(arr1, arr2){
            var result = 0;
            for(var i=0; i<arr1.length; i++){
                result += (arr1[i] * arr2[i]);
            }
            return result;
        },
        sum_1(arr){
            var z = 0;
            for(var i=0; i<arr.length; i++){
                z += arr[i];
            }
            return z;
        },
        average(arr){
            return this.sum_1(arr)/arr.length;
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
        math_show(){
            if (this.a >= 0){
                return "<p>回归方程为：y = " + this.b +"x + " + this.a + "</p><p>相关系数为：r = " + this.r + "</p>";

            }else{
                var a = -(this.a);
                return "<p>回归方程为：y = " + this.b +"x - " + a + "</p><p>相关系数为：r = " + this.r + "</p>";
            }
        }
    }
});

function getTableContent(id) {
    var myTable = document.getElementById(id);
    var data = [
        [],
        []
    ];
    for (var i = 1, rows = myTable.rows.length; i < rows; i++) {
        data[0].push(Number(myTable.rows[i].cells[1].innerText));
        data[1].push(Number(myTable.rows[i].cells[2].innerText));
    }
    return data;
};

function show_chart() {

    var data = getTableContent("mt");
    chart = Highcharts.chart('container2', {
        title: {
            text: "标准回归曲线"
        },
        subtitle: {
            text: "水中铁"
        },
        xAxis:{
            title:{
                text: "加样量"
            }
        },
        yAxis: {
            title: {
                text: "吸光度"
            }
        },
        legend: {
            layout: "vertical",
            align: "right",
            verticalAlign: "middle"
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 0
            }
        },
        series: [{
            name: "吸光度",
            data: data[1]
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