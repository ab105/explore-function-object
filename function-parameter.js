function bringsinghara(taka){
    console.log('singara er jonno dise ',taka);
    console.log('mama singara den');
    var singaraPrice = 10;
    var singaraQuantity = taka/singaraPrice; //250 takay koyta singara pabo sheita count kore dibe
    return singaraQuantity;
}
var money=250;
var singara = bringsinghara(money);
console.log('ai nen singara ',singara);