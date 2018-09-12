let sample = new Vue({
            el: "#app",
            data: {
                items: [],
                item: {
                    judgment: '',
                    name: '',
                    range: [0, 0.1],
                    result: 0,
                    id: 0,
                }
            },
            computed: {
                report_number() {
                    let arr = 0;
                    let reg_end = new RegExp("end$", "g");
                    for (let i = 0; i < localStorage.length; i++) {
                        let x = localStorage.key(i);
                        if (reg_end.test(x)) {
                            if (localStorage.getItem(x) > arr) {
                                arr = localStorage.getItem(x);
                            }
                        }
                    }
                    return arr;
                },
                storage() {
                    let obj = new Object;
                    obj.key = [];
                    obj.value = [];
                    let reg_s = /报告结果$/g;
                    let reg_end = /end$/g;
                    let reg_st = /^[\u4e00-\u9fa5]+/g;
                    let num = 1;
                    let reg_value = /[0-9]+/g;
                    //先把所有结果存储找出来，存入obj.value
                    for (let i = 0; i < localStorage.length; i++) {
                        let x = localStorage.key(i);
                        if(reg_value.test(x)){
                            reg_value.lastIndex = 0
                            let y = localStorage.getItem(x);
                            y = eval(JSON.parse(y));
                            obj.value.push(y)
                        }
                    }
                    //算出结果里面最大的样品编号
                    let max = 0;
                    for (let i = 0; i < obj.value.length; i++) {
                        if (Number(obj.value[i]).id > max) {
                            max = Number(obj.value[i].id);
                        }
                    }
                    //然后根据id进行分类
                    let new_list = []
                    for(let i=0; i<max; i++){
                        let item = []
                        for(let n=0; n<obj.value.length; n++){
                            if(obj.value[n].id == i){
                                item.push(obj.value[n])
                            }
                        }
                        new_list.push(item);
                    }
                    
                    obj.value = new_list;
                    return obj;
                }
            },
            methods: {
                sort_obj(arr) {
                    let new_arr = [];
                    for (let n = 1; n < this.report_number; n++) {
                        let new_a = [];
                        for (let i = 0; i < arr.length; i++) {
                            let a = arr[i].replace(/^[^\d]*(\d+)[^\d]*$/, "$1");
                            if (a == n) {
                                new_a.push(arr[i]);
                            }
                        }
                        new_arr.push(new_a);
                        new_a = [];
                    }
                    return new_arr;
                },
                get_storage() {
                    // reg_std正则表达式筛选字符串的前面所有汉字
                    let reg_std = new RegExp("^[\u4e00-\u9fa5]+$", "g");
                    let reg_result = new RegExp("^[\u4e00-\u9fa5]+[0-9]+报告结果$", "g")
                    let names = []
                    let names_ids = []
                    // let ids = []
                    for (let i = 0; i < localStorage.length; i++) {
                        var get_key = localStorage.key(i);
                        if (reg_std.test(get_key)) {
                            this.item.name = get_key;
                            names.push(get_key);
                        }
                        if (reg_result.test(get_key)) {
                            names_ids.push(get_key);
                        }
                    }
                    // names_ids.sort(function(a,b){
                    //     a = a.replace(/^[^\d]*(\d+)[^\d]*$/, "$1");
                    //     b = b.replace(/^[^\d]*(\d+)[^\d]*$/, "$1");
                    //     return a < b;
                    // });
                    let sorted_arr = this.sort_obj(names_ids);
                    for (let i = 0; i < sorted_arr.length; i++) {
                        for (let n = 0; n < sorted_arr[i].length; n++) {
                            let v = localStorage.getItem(sorted_arr[i][n])
                            value = eval(JSON.parse(v));
                            this.item.id = v.id;
                            this.item.result = v.result
                            this.item.name = sorted_arr[i][n].replace(/^[\u4e00-\u9fa5]*(\u4e00-\u9fa5)[\u4e00-\u9fa5]*$/, "$1")
                            if (this.item.result > this.item.range[0] && this.itme.result < this.item.range[1]) {
                                this.item.judgment = "合格";
                            } else {
                                this.item.judgment = "不合格";
                            }
                        }
                        this.items.push(this.item);
                        this.item = {
                            judgment: '',
                            name: '',
                            range: [0, 0.1],
                            result: 0,
                            id: 0,
                        }
                    }
                    // for (let i = 0; i < names_ids.length; i++) {
                    //     let name = names_ids[i].replace(/^[\u4e00-\u9fa5]*(\u4e00-\u9fa5)[\u4e00-\u9fa5]*$/, "$1")
                    //     let id = names_ids[i].replace(/^[^\d]*(\d+)[^\d]*$/, "$1");
                    //     names_ids.name = name;
                    //     this.item.id = id;
                    //     names_ids.push(get_key);
                    //     this.item.result = localStorage.getItem(get_key);
                    // }
                }
            }
})