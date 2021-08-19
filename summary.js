var skycolor = 'white';

var phones = ['iphone', 'shaomi', 'lg', 'samsung'];
phones[3] = 'walton';

//check element exists in an array
if(phones.indexOf('oppo') == -1){
    console.log('oppo amir khan is missing');
}
if(phones.indexOf('lg') != -1){
    console.log('lg is available');
}

//loop
var num =0;
while(num<=10){
    num++;
}

for(var i=0; i<phones.length; i++){

}

//function

function addthreenumbers(num1,num2,num3){
    var total = num1+num2+num3;
    return total;
}
addthreenumbers(1,2,4);

//object

var microphone = {
    brand: 'black berry',
    price:120,
    color: 'black'
}