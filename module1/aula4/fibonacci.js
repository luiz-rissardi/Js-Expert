class Fibonacci{
    *execute( number , acc=0){
        if(number==0){
            return  0
        }

        yield acc;
        yield * this.execute(number-1,acc+number)
    }
}

module.exports = {
    Fibonacci
}