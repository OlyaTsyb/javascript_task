/* 1.створити масив та вивести його в консоль:
-з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу


let arrayNumbers = [2, 6, 8, -67, 6.9, -10.5];
    console.log(arrayNumbers);

let arrayString = ["hello", "world", "today is sunny day"];
    console.log(arrayString);

let arrayTogether = [2, 6, 8, "sun", -67, true,  4566.9, -10.5, "all be okey", false];
    console.log(arrayTogether);    

//Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arrayEmpty = [];
    arrayEmpty[0] = "one";
    arrayEmpty[1] = -675;
    arrayEmpty[2] = "{name:'Olya'}";
    arrayEmpty[3] = true;
    arrayEmpty[4] = [34, 765,[5,"one"]];
    console.log(arrayEmpty);

//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for( let first = 0; first < 10; first++){
    document.write("<div>I write my first cycle for</div>");
}

//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for( let first = 0; first < 10; first++){
    document.write(`<div>this cycle has index ${first}</div>`);
}

//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let firstWhile = 0;
while(firstWhile < 20){
    document.write(`<h1>first while cycle</h1>`);
    firstWhile++;
}

//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let cycleWhile = 0;
while(cycleWhile < 20){
    document.write(`<h1>while cycle  has index ${cycleWhile}</h1>`);
    cycleWhile++;
}

///////////Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//for
let numberArray = [25, 89, -786, 45, 98.67, 768, 45, -34, 98.98, -5];
for( let i of numberArray ) {
    console.log(i);
}
// for of 
let numberArraytwo = [25, 89, -786, 45, 98.67, 768, 45, -34, 98.98, -5];
for(let i = 0; i < numberArraytwo.length; i++){
   console.log(numberArraytwo[i]);
}
//while
let numberArraythree = [25, 89, -786, 45, 98.67, 768, 45, -34, 98.98, -5];
let i = 0;
while(i < numberArraythree.length){
    console.log(numberArraythree[i]);
    i++;
}





//Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//for
let stringArray = ["hello", "day", "home work", "while", "true", "false", "seven", "eight", "nine", "ten"];
for(let i = 0; i < stringArray.length; i++){
    console.log(stringArray[i]);
 }
 
//for of 
let stringArraytwo = ["hi", "day", "home work", "while", "true", "false", "seven", "eight", "nine", "ten"];
for(let i of stringArraytwo) {
    console.log(i);
}

//while
let stringArraythree = ["good morning", "day", "home work", "while", "true", "false", "seven", "eight", "nine", "ten"];
let j = 0;
while(j < stringArraythree.length) {
    console.log(stringArraythree[j]);
    j++;
}

// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//for
let differentElements = [true, -56, 134,[3, 7 -987], 45, "school", false, 56, "today","okey"];
for(let k = 0; k <differentElements.length; k++) {
    console.log(differentElements[k]);
}

//for of
let differentElementsTwo = [false, -56, 134,[3, 7 -987], 45, "school", false, 56, "today","good"];
for(let s of differentElementsTwo) {
    console.log(s);
}

//while
let differentElementsThree = ["morning", -56, 134,[3, 7 -987], 45, "school", false, 56, "today","good"];
let k = 0;
while(k < differentElementsThree.length){
    console.log(differentElementsThree[k]);
    k++;
}

//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arrayIf = [2, 6, 8, "sun", -67, true,  4566.9, -10.5, "all be okey", false];
  for(let i = 0;i < arrayIf.length; i++){
      if(typeof arrayIf[i] === "boolean"){
        console.log(arrayIf[i]);
      }
  }

//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let arrayIfNumber = [2, 6, 8, "sun", -67, true,  4566.9, -10.5, "all be okey", false];
  for(let i = 0;i < arrayIfNumber.length; i++){
      if(typeof arrayIfNumber[i] === "number"){
        console.log(arrayIfNumber[i]);
      }
  }
//Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arrayIfString = [2, 6, 8, "sun", -67, true,  4566.9, -10.5, "all be okey", false];
  for(i = 0; i < arrayIfString.length;i++) {
      if(typeof arrayIfString[i] === "string") {
          console.log(arrayIfString[i]);
      }
  }

// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі
// його елементи в циклі.
let emptyArray = [];
  emptyArray[0] = "all be okey";
  emptyArray[1] = true;
  emptyArray[2] = 567;
  emptyArray[3] = [4, 98, "lol"];
  emptyArray[4] = false;
  emptyArray[5] = "hello";
  emptyArray[6] = "world";
  emptyArray[7] = 98.7;
  emptyArray[8] = -67;
  emptyArray[9] = "sunday";
  for(i = 0; i < emptyArray.length; i++) {
      console.log(emptyArray[i]);  
  }

  //Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
  
  for(i = 0;i < 10; i++){
      console.log(+i);
      document.write(+i);
  }
 
  //Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
  for(i = 0;i < 100; i++){
    console.log(+i);
    document.write(+i);
}

//Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for(i = 0;i < 100; i+=2){
    console.log(i);
    document.write(i);
}

//Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for(i = 0;i < 100; i++){
    if(i % 2 == 0){
    console.log(i);
    document.write(i);
    }
}

 //Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
 for(i = 0;i < 100; i++){
    console.log(i % 2);
    document.write(i % 2 == 0);
   
}


//Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for(i = 0;i < 100; i++){
    if(i % 2 !=0){
    console.log(i);
    document.write(i);
    }
}

//Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
for(let min = 0; min < 2;min++){
    for(let seconds = 0; seconds < 60;seconds++){
        console.log(`minute: ${min} seconds: ${seconds}`);
    }
}

//Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
for(let hour = 0; hour < 3; hour++){
    for(let minut = 0 ;minut < 60; minut++){
        for(let sec = 0;sec <60; sec++){
            console.log(`hour :  ${hour} minutes : ${minut} seconds: ${sec}`)
            if(hour == 2 && minut == 20){
                break;
            }
        }    
        if(hour == 2 && minut == 20){
             break; 
        }   
       
    }
}


//Додатково
// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let arr = [ "a", "b", "c"];
let str = "";
for(let i = 0; i < arr.length; i++){
   str = str + arr[i];
   console.log(str);
}


 
//2. перебрати його циклом while
let arr = [ "a", "b", "c"];
let i = 0;
let str = "";
while(i < arr.length ){
    str = str + arr[i];
    i++;
}
    console.log(str);
  
// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let arr = [ "a", "b", "c"];
let str = "";
for(let z of arr){
    str = str + z;
}
console.log(str);
document.write(str);

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.
let arr = [ "a", "b", "c"];
let str = "";
for(let z in arr){
    str = str + arr[z];
}
console.log(str);
document.write(str);

*/

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let arr = [ "a", "b", "c"];
let i = 0;
let str = "";
while(i < arr.length){
    str = str + arr[i];
    i++;
}
console.log(str);


// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

/*
//3. перебрати циклом while та вивести  числа тільки з непарним індексом

let arr = [2,17,13,6,22,31,45,66,100,-18];

let i = 0;
let arr2 = [];
while(i < arr.length ){
    document.write(arr[i]);
    i =i+3 ;

}
/*
//4. перебрати циклом for та вивести  числа тільки з непарним індексом
let arr = [2,17,13,6,22,31,45,66,100,-18];
for(i =0; i < arr.length; i++){
    if(i % 2 !== 0){
        console.log(i);
        document.write(i);
        }
}




//7. замінити кожне число кратне 3 на слово "okten"
//8. вивести масив в зворотньому порядку.
//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)



//3. перебрати циклом while та вивести  числа тільки з непарним індексом
/*
let arr = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while(i < arr.length ){
     if (i % 2 !== 0) {
        console.log(arr[i]);
        document.write(i);
     }
    
    i++;
}
*/
/*
//5. перебрати циклом while та вивести  числа тільки парні  значення
let arr = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while(i < arr.length ){
     if (arr[i] % 2 === 0) {
        console.log(arr[i]);
        document.write(arr[i]);
     }
    
    i++;
}



//6. перебрати циклом for та вивести  числа тільки парні  значення
let arr = [2,17,13,6,22,31,45,66,100,-18];
for(i =0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        console.log(arr[i]);
        document.write(arr[i]);
        }
}
/*

//7. замінити кожне число кратне 3 на слово "okten"
let arr = [2,17,13,6,22,31,45,66,100,-18];
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 3 === 0){
       arr[i] = 'okten'
        }
    console.log(arr);
    
}

//Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () 
//скопіювати значення одного масиву в інший
let arr = [2,17,13,6,22,31,45,66,100,-18];
let arrCopy = [];
for(i =0; i < arr.length; i++){
    arrCopy.push(arr[i]);
    console.log(arrCopy)
}


// Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let arr = [2,17,13,6,22,31,45,66,100,-18];
let arrCopy = [];
for(let i = 0; i < arr.length; i++){
    arrCopy[i] = arr[i];
    console.log(arrCopy)
}
*/
/*
// 8. вивести масив в зворотньому порядку.
let arr = [2,17,13,6,22,31,45,66,100,-18];
let arr2 = [];
for(let i = arr.length - 1 ; i > 0; i--){
    arr2.push(arr[i]);
    console.log(arr2);
    
}

//створити пустий масив та :
//- заповнити його 50 парними числами за допомоги циклу.
//- заповнити його 50 непарними числами за допомоги циклу.
 let arrayPosit = [];
 let arrayNeg = [];

 for(let i = 0;i < 100;i++){
     if(i % 2 === 0){
         arrayPosit.push(i);
        } else if( i % 2 !== 0){
         arrayNeg.push(i);
        }
     }

console.log(arrayPosit);
console.log(arrayNeg)

*/