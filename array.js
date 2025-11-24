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
let arr =[1,2,4,5,6,0,9,7,77]
if(arr.includes(0)){
    let index =arr.indexOf(0)
    arr.splice(index,1)
}else{
    console.log("Array does not contain zero");
}
// var arr = [1, 2, 3, 4, 5];
// if (arr.length < 4 && arr.length>2){
//     arr.push(4)
// } else if(arr.length>4 && arr.length<6){
//     arr.pop()
// } else if(arr.length>5 && arr.length<7){
//     arr.splice(4,3)

// }
//Expected Output arr=[1,2,3,4]
