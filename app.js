const App=Vue.createApp({
    data(){
        return{
            name:"",
            firstNum:0,
            secondNum:0,
            total:0,
           
        }
    },
    watch:{
        total(value){
            if(value>50){
                this.total="Opsss!!!!!!! Summation exceed 50";
                console.log(this.error)
            }
        }
    },
    computed:{
        finalTotal(){
            return this.total;
        }
    },
    methods:{
        setName(e){
            this.name=e.target.value;
        },
        setFirstNum(e){
            this.firstNum=e.target.value;
        },
        setSecondNum(e){
            this.secondNum=e.target.value;
        },
        add(){
            this.total=parseInt(this.firstNum)+parseInt(this.secondNum);
            this.firstNum=0;
            this.secondNum=0;
            // console.log(parseInt(this.firstNum))
            // console.log(parseInt(this.secondNum))
        }
    }
});
App.mount('#app');