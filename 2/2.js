function elemCreator(elem,callback){
    let div=document.createElement(elem)
    div.innerHTML='maede naseri'
    callback(div)
    document.body.append(div)
}
const callback=function (elem){
    elem.style.backgroundColor='red'
}
elemCreator('div',callback)

