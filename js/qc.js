let QC_num = ""
let QC_l = []
let QC_l1 = []
let QC_l2 = []
let QC_data = []
let qcName = ""
let qc_lists = []
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

function qc_list(s) {
    let n = localStorage.length
    for (let i = 0; i < n; i++) {
        let qc = s.name + "质控" + i
        var val = localStorage.getItem(qc)
        if (val !== null) {
            val = JSON.parse(val)
            qc_lists.push(val)
        }
        // if (localStorage.key(i) == qc) {
        //     var values = localStorage.getItem(qc)
        //     values = JSON.parse(values)
        //     qc_lists.push(values)
        // }
    }
}

function QC_lists(s){

    let data = app.qc_list(s)
    for(let i=0; i<data.length; i++){
        QC_num = data[i].q_num
        let QC_val = data[i].q_val
        let QC_limit = data[i].q_limit
        let QC_1 = QC_val + QC_limit
        let QC_2 = QC_val - QC_limit
        let up = []
        let mid = []
        let down = []
        let va = []
        va.push(data[i].id)
        va.push(data[i].result)
        QC_data.push(va)
        up.push(data[i].id)
        up.push(QC_1)
        QC_l1.push(up)
        down.push(data[i].id)
        down.push(QC_2)
        QC_l2.push(down)
        mid.push(data[i].id)
        mid.push(QC_val)
        QC_l.push(mid)
        mid = []
        up = []
        down = []
        va = []
    }
    qcName = s.name

}
function QC_chart() {
    /**
     * 用highcharts绘制标准曲线
     */
    //获取当前项目的标准系列数据
    QC_lists(app.selected1)
    let chart1 = Highcharts.chart("line1", {
        title: {
            text: qcName+"质控图"
        },
        subtitle: {
            text: QC_num
        },
        xAxis: {
            title: {
                text: "id"
            },
        },
        yAxis: {
            title: {
                text: "质控值"
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
        series: [
            {
            name: "上线",
            data: QC_l1
            },
            {
            name: "上线",
            data: QC_l
            },
            {
            name: "质控",
            data: QC_data
            },
            {
            name: "下线",
            data: QC_l2
            }
        ],
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
    getTableContent(app.selected1.id);
    //获取当前项目的标准系列数据
    let chart = Highcharts.chart("line", {
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
    })
    chart()
    chart1()
}