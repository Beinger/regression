let root = new Vue({
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
    methods: {
        get_storage() {
            let reg_std = new RegExp("[\\u4E00-\\u9FFF]+", "g");
            let reg_result = new RegExp("[\\u4E00-\\u9FFF]+[1-9999][报告结果]", "g")
            let names = [];
            for (let i = 0; i < localStorage.length; i++) {
                let get_key = localStorage.key(i);
                this.items.push(this.item);
                if (reg_std.test(get_key)) {
                    this.items[i].name = get_key;
                    names.push(get_key);
                }
                if (reg_result.test(get_key)) {
                    if (get_key.search(names[i])) {
                        let number = get_key.replace(/^[^\d]*(\d+)[^\d]*$/, "$1");
                        this.items[i].id = number;
                        this.items[i].result = localStorage.getItem(get_key);
                    }
                }
            }
            for (let n = 0; n < names.length; n++) {
                if (this.items[n].result > this.items[n].range[1] || this.items[n].result < this.items[n].range[0]) {
                    this.items[n].judgment = "不合格";
                } else {
                    this.items[n].judgment = "合格";
                }
            }

        }
    },
})