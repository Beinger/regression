let app = new Vue({
    el: "#app",
    data: {
        T: "",
        H: "",
        company: "",
        numbering: "",
        index: 0,
        login_f: true,
        add_or_edit: false,
        submit_show: false,
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
        bise: false,
        ganguan: false,
        diding: false,
        cal: false,
        date_show: false,
        vol_s: [
            50,100,250,1,25,10
        ],
        s1: "",
        s2: "",
        s3: "",
        s4: "",
        s5: "",
        colorimetric: {//比色法

        },
        titration:{//滴定法

        },
        traits: {//感官性状 
        },
        microorganism: {//微生物

        },
        radioactivity: {//放射性

        }
    }
})