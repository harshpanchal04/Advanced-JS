// task 1
Array.prototype.sum = function(){
    if(typeof(this[0]) !=='number' && typeof(this[0]) !=='string'){
        console.log(2);
        console.log(typeof(this[0]));
        return "Wrong Input !";
    }
    let alltype = typeof(this[0]);
    for(let p=1;p<this.length;p++){
        if(typeof(this[p])!==alltype){
            console.log(1);
            return "Wrong Input !";
        }
    }
        if(typeof(this[0])==='number' || typeof(this[0]) === 'string' ){
            var s = 0;
            if(typeof(this[0]) === 'string'){
                s = "";
            }
            console.log(s);
            for(let i=0;i<this.length;i++){
                s+=this[i];
            }
            return s;
        }
}

// task 2
// Doing it for nested arrays (...)

// task 3
// in .jsv -> add attributes prototype in .jsv components