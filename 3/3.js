let count=0
function counterMaker(){
    return  function counter(num=0){
        console.log(count+=num)
    }
}
const counter = counterMaker()
console.log(counter());
console.log(counter());
console.log(counter(1));
console.log(counter());
console.log(counter(3));
console.log(counter(7));
console.log(counter(-5));