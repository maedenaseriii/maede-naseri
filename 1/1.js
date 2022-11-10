const user={}
function  setterGenerator(key){
    return function (value){
        this[key]=value
    }.bind(user)
}
const nameSetter = setterGenerator('name');
nameSetter('maede');
console.log(user);