var app = new Vue({
    el: '#app',
    data: {
        seen: false,
        n: 8,
        nd: 10,
        x1: 0,
        x2: 1,
        x3: 2,
        x4: 3,
        x5: 4,
        x6: 5,
        x7: 6,
        x8: 7,
        y1: 0.001,
        y2: 0.002,
        y3: 0.003,
        y4: 0.004,
        y5: 0.005,
        y6: 0.006,
        y7: 0.007,
        y8: 0.008,
    },
    computed: {

        //计算回归方程
        x_: function(){
            return (this.x1 + this.x2 + this.x3 + this.x4 + this.x5 + this.x6 + this.x7 + this.x8) / this.n
        },
        y_: function(){
            return (this.y1 + this.y2 + this.y3 + this.y4 + this.y5 + this.y6 + this.y7 + this.y8) / this.n
        },
        xy_sum: function(){
            return (this.x1 * this.y1) + (this.x2 * this.y2) + (this.x3 * this.y3) + (this.x4 * this.y4) + (this.x5 * this.y5) + (this.x6 * this.y6) + (this.x7 * this.y7) + (this.x8 * this.y8)
        },
        x_2: function(){
            return (this.x1 * this.x1) + (this.x2 * this.x2) + (this.x3 * this.x3) + (this.x4 * this.x4) + (this.x5 * this.x5) + (this.x6 * this.x6) + (this.x7 * this.x7) + (this.x8 * this.x8)
        },
        b: function(){
            return (this.xy_sum - this.n * this.x_ * this.y_) / (this.x_2 - this.n * this.x_ * this.x_)
        },
        a: function(){
            return this.y_ - this.b * this.x_ * this.x_
        },
        r_1: function(){
            return (this.x1 - this.x_) * (this.y1 - this.y_) + (this.x2 * this.x_) * (this.y2 - this.y_) + (this.x3 - this.x_) * (this.y3 - this.y_) + (this.x4 - this.x_) * (this.y4 - this.y_) + (this.x5 - this.x_) * (this.y5 - this.y_) + (this.x6 - this.x_) * (this.y6 - this.y_) + (this.x7 - this.x_) * (this.y7 - this.y_) + (this.x8 - this.x_) * (this.y8 - this.y_)
        },
        r_21: function(){
            return (this.y1 - this.y_) * (this.y1 - this.y_) + (this.y2 - this.y_) * (this.y2 - this.y_) + (this.y3 - this.y_) * (this.y3 - this.y_) + (this.y4 - this.y_) * (this.y4 - this.y_) + (this.y5 - this.y_) * (this.y5 - this.y_) + (this.y6 - this.y_) * (this.y6 - this.y_) + (this.y7 - this.y_) * (this.y7 - this.y_) + (this.y8 - this.y_) * (this.y8 - this.y_)
        },
        r_22: function(){
            return (this.x1 - this.x_) * (this.x1 - this.x_) + (this.x2 - this.x_) * (this.x2 - this.x_) + (this.x3 - this.x_) * (this.x3 - this.x_) + (this.x4 - this.x_) * (this.x4 - this.x_) + (this.x5 - this.x_) * (this.x5 - this.x_) + (this.x6 - this.x_) * (this.x6 - this.x_) + (this.x7 - this.x_) * (this.x7 - this.x_) + (this.x8 - this.x_) * (this.x8 - this.x_)
        },
        r_2: function(){
            return Math.sqrt((this.r_21) * (this.r_22))
        },
        r: function(){
            return this.r_1 / this.r_2
        },
        funcs: function(){
            if(this.a >= 0){
                return "y = " + this.b.toFixed(4) + "x + " + this.a.toFixed(4)
            }else{
                var a = -(this.a)
                return "y = " + this.b.toFixed(4) + "x - " + a.toFixed(4)
            }
            
        }
    },
    methods: {
        submitN: function () {
            chart = Highcharts.chart("container", {

                title: {
                    text: "硫酸盐标准曲线"
                },
                subtitle: {
                    text: "subtitle"                
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
                    name: "Fe",
                    data: [this.y1, this.y2, this.y3, this.y4, this.y5, this.y6, this.y7, this.y8]
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
            })
        }
    }
})