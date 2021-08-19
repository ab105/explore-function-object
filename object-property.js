var computer = {
    price: 29000,
    storage:'150 gb',
    color: 'silver',
    processor: 'intel i5'
}
//console.log(computer);//to see the all property of computer object
console.log(computer.color);//to see color property of computer object
console.log(computer.processor);
var computerPrice = computer.price;
// console.log(computerPrice); 

//set a object property value
computer.price = 20000;
console.log(computer);

//different ways to set a value of an object property
var pricePropertyName = 'price';
computer.price = 21000;
computer['price'] =15000;
computer[pricePropertyName] = 10000;

var storageProperty = 'storage';
computer[storageProperty] = '512 gb';

computer['storage'] = '1 tb';

computer.storage = '5 tb';

console.log(computer);
