// var array1=[1,2,3,4,5];
// var array2=[2,30,1]
// var array3=array1.concat(array2);
// console.log(array3);
// var student_list =["John","Marry","Ali","Sophia"]
// var studentName = "John"

// if (student_list.includes(studentName)) {
//     console.log(`${studentName} is a student`);
// }else{
//     console.log(`${studentName} is not a student`);
// }
// var list = ["John","Katy","Simson"]
/// var firstStudent = list[0];
// var lastStudent = list[list.length - 1];
// console.log(`${firstStudent} is first student in the class`);
// console.log(`${lastStudent} is last student in the class`);
// Please only use the "slice" method. For result. don't use arr[index] syntax
// the slice method returns the remove element. Please search!
// Test Data :
// var list1 = [7, 9, 0, -2]
// var list 2 = [[1],3]
// Expected Output :
// 7
// [1]
// var list1 = [7, 9, 0, -2]
// var list2 = [[1],3]
// var firstElement = list1.slice(0,1)[0];
// var firstElementList2 = list2.slice(0,1)[0];
// console.log(firstElement);
// console.log(firstElementList2);
// var items = ["water", "tea", "milk", "juice"];

// var result = items.splice(2,1,"almond-milk");
// console.log(result);
// console.log(items);


// ["milk"]
// ["water", "tea", "almond-milk", "juice"]
// Remove Zero from the Array If It Exists"
// let arr =[1,2,4,5,6,0,9,7,77]
// if(arr.includes(0)){
//     let index =arr.indexOf(0)
//     arr.splice(index,1)
// }else{s
//     console.log("Array does not contain zero");
// }
// var arr = [1, 2, 3, 4, 5];
// if (arr.length < 4 && arr.length>2){
//     arr.push(4)
// } else if(arr.length>4 && arr.length<6){
//     arr.pop()
// } else if(arr.length>5 && arr.length<7){
//     arr.splice(4,3)

// }
//Expected Output arr=[1,2,3,4]
// let text = "apple-banana-kiwi";
// let fruits=text.split('');
// let result=fruits.join(',');
// console.log(result);
// let message = "hi baby, baby how are you baby";
// let newMessage = message.replace(/baby/g, "daddy");
// console.log(newMessage);


// let str = "   hello world from javascript   ";
// let trimmedStr = str.trim().split('').charAt(0).toUpperCase() + str.trim().slice(1);
// console.log(trimmedStr);
// output: "Hello world from javascript"
// let sentence = "This is a bad day, a really bad day.";
// let cleanedSentence = sentence.replace(/bad/g, "good");
// let str = "JS Version 2025 Update 3";
// let arrstr = str.split(' ');

// let arrayNumbers = [];
// for (let i = 0; i < arrstr.length; i++){
//     if(!isNaN(arrstr[i])){
//         arrayNumbers.push(Number(arrstr[i]));
//     }
  
    
// } 
//   let arrjoined = arrayNumbers.join('');
//     console.log(arrjoined);
// output: "20253"
// let email = "nurlan27@gmail.com";
// let slice=email.slice(0,3).concat("*****");
// console.log(slice);
// output: "nur*****"
// Convert to Uppercase
// Convert the string name to uppercase.
// Given: let name = "john doe";
// Expected Result: "JOHN DOE"
// Find the Length of a String
// Find out how many characters are in the string greeting.
// Given: let greeting = "Hello, how are you?";
// Expected Result: 18
// Replace a Word in a String
// Replace the word "sunny" with "rainy" in the string weather.
// Given: let weather = "Today is a sunny day";
// Expected Result: "Today is a rainy day"
// Extract a Substring
// Extract the word "World" from the string message.
// Given: let message = "Hello World!";
// Expected Result: "World"
// let name = "john doe";
// let upperName = name.toUpperCase();
// console.log(upperName);
// let greeting = "Hello, how are you?";
// let greetingLength = greeting.length;
// console.log(greetingLength);
// let weather = "Today is a sunny day";
// let newWeather = weather.replace("sunny", "rainy");
// console.log(newWeather);
// let message = "Hello World!";
// let substring = message.slice(6, 11);
// console.log(substring);



// Part 2: Array Methods
// Add an Item to an Array
// Add the fruit "Orange" to the fruits array.
// Given: let fruits = ["Apple", "Banana", "Mango"];
// Expected Result: ["Apple", "Banana", "Mango", "Orange"]
// Check if an Array Includes an Item
// Check if the colors array includes "Green".
// Given: let colors = ["Red", "Blue", "Yellow"];
// Expected Result: false
// Combine Two Arrays
// Combine the firstNames array with the lastNames array.
// Given:
// let firstNames = ["John", "Jane"];
// let lastNames = ["Doe", "Smith"];
// Expected Result: ["John", "Jane", "Doe", "Smith"]
// Find the Index of an Item in an Array
// Find the index of "Banana" in the fruits array.
// Given: let fruits = ["Apple", "Banana", "Mango", "Orange"];
// Expected Result: 1
// Bonus Task
// Reverse a String
// Reverse the string "JavaScript" using a combination of string and array methods.
// Given: let word = "JavaScript";
// Expected Result: "tpircSavaJ"

//  let fruits = ["Apple", "Banana", "Mango"]
//     let result=fruits.push("Orange");
//     console.log(result);
//     let colors = ["Red", "Blue", "Yellow"];
//     let hasGreen = colors.includes("Green");
//     console.log(!hasGreen);
//     let firstNames = ["John", "Jane"];
//     let lastNames = ["Doe", "Smith"];
//     let fullNames = firstNames.concat(lastNames);
//     console.log(fullNames);
//     let fruitsList = ["Apple", "Banana", "Mango", "Orange"];
//     let bananaIndex = fruitsList.indexOf("Banana");
//     console.log(bananaIndex);
//     let word = "JavaScript";
//     let reversedWord = word.split('').reverse().join('');
//     console.log(reversedWord);
// var list = [9,9,9,4,6,2]
// var joinedList = list.join('-');
// console.log(joinedList);

//  let fruits = ["Apple", "Banana", "Mango","alma"]
//  let arr=[]
//  for (let index = 0; index < fruits.length; index++) {
//     let element=fruits[index]
//    if (element.toLowerCase()[0]==='a') {
//     arr.push(element)
//    }
    
//  }
//  console.log(arr);
// let sumArray = 5;
// let fac = 1;

// for (let index = 1; index <=sumArray; index++) {
//   fac=index*fac
  
// }
// console.log(fac);
//  Find the Maximum Number
// Task: that takes an array of numbers as an argument and returns the largest number.
// [3, 7, 2, 8, 5]
// Output: 8
// let array=[3, 7, 2, 8, 5]
// let max =array[4]
// for (let index = 0; index < array.length; index++) {
//   if (max<array[index]) {

//     max=array[index]
//   }
    
//   }
//   console.log(max);
  // let word ='hello'
  // let reversedWord=''
  // for (let index = word.length-1; index >= 0; index--) {
  //   reversedWord = reversedWord+word[index]
    
  // }
  // console.log(reversedWord);
numbers=[1, 2, 2]
let sum=0
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
sum= sum +element*element
  
}
console.log(sum);


  


 
















