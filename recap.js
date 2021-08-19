//1. variable
var favBook = '4 hour work with';

//2. array
var bookList = ['positioning', 'hooked', 'start with why', 'shoe dog'];
var showDogIndex = bookList.indexOf('shoe dog');
bookList[1]='happy life';
bookList.push('crazy life');
bookList.pop();

//3. conditionals
if(bookList[1] == 'hooked'){
    console.log('i am hooked');
}
else{
    console.log('i am not hoooked');
}

//4. loop
//while loop
var i=0;//loop variable
while(i<15){
    console.log(i);
    console.log('looping looping looping');
    i++;
}
//for loop

for(var i=0; i<15; i++){
    console.log(i);
}