let sample = new Vue({
    el: "#app",
    data: {
        company: '',
        username: '',
        reg_s: /报告结果$/g,
        reg_st: /^[\u4e00-\u9fa5]+/g,
        new_list: [],
        name: '',
        obj: {
            key: [],
            value: []
        }
    },
    computed: {
        // report_number() {
        //     /**
        //      * 计算出最大的样品编号
        //      */
        //     let n = 0;
        //     for (let i = 0; i < localStorage.length; i++) {
        //         let x = localStorage.key(i);
        //         if (this.reg_s.test(x)) {
        //             this.reg_s.lastIndex = 0;
        //             if (localStorage.getItem(x) > n) {
        //                 n = localStorage.getItem(x);
        //             }
        //         }
        //     }
        //     return n;
        // },
        storage() {
            /**
             * 整理数据显示在表格里
             */
            //先把所有结果存储找出来，存入obj.value
            this.local_get()
            //算出结果里面最大的样品编号
            let max = this.find_max(this.obj.value)
            //然后根据id进行分类
            let item = []
            for(let i=1; i<max; i++){
                for(let n=0; n<this.obj.value.length; n++){
                    if(Number(this.obj.value[n].id) == i){
                        item.push(this.obj.value[n])
                    }
                }
                this.new_list.push(item)
                item = []
            }
            return this.new_list;
        },
    },
    created: function(){
        this.get_login_info()
    },
    methods: {
        get_login_info(){
            this.company = localStorage.getItem("company")
            this.username = localStorage.getItem("username")
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
        local_get(){
            /**
             * 把localStorage中的结果报告数据整理出来，存入obj.value中
             */
            for (let i = 0; i < localStorage.length; i++) {
                let x = localStorage.key(i);
                if(this.reg_s.test(x)){
                    this.reg_s.lastIndex = 0
                    let y = localStorage.getItem(x);
                    let name = this.reg_st.exec(x)
                    this.reg_st.lastIndex = 0
                    y = eval(JSON.parse(y));
                    y.name = name[0]
                    this.obj.value.push(y)
                }
            }
        },
        find_max(arr){
            //这里的arr是[{},{},{}....]
            let max = 0;
            for (let i = 0; i < arr.length; i++) {
                if (Number(arr[i].id) > max) {
                    max = Number(arr[i].id)
                }
            }
            return max+1
        },
        sort_obj(arr) {
            /**
             * 根据里面的数字把数组进行归类
             */
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
        f_n(num, length) {
            /**
             * 格式化编号数字，不足三位的前面加0
             */
            return (Array(length).join('0') + num).slice(-length);
        },
    }
})
