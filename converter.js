let converter = new Vue({
    el: '#converter',
    data : {
        denomination : "",
        figure : "",
        period :"",
    },
    methods: {
        periodic(event){
            this.period = event.target.value
            console.log(this.period)
            
        },

        converter_func(){
            if (this.period == 'NEW' ){
                this.denomination = this.figure / 1000
    
            }else if(this.period == 'OLD'){
               this.denomination = this.figure * 1000
            } else {
               this.denomination = this.figure /1000
    
            }
            console.log(this.denomination)

        }

    }
})