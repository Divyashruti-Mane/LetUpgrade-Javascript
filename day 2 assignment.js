//Program To search a particular character in a string
let data = "Letsupgrade";
console.log(data.search("u"));

// Program To covert minutes to seconds
Function convert(minutes){
    let result = minutes * 60;
    return result;
}
let output = convert(5);
console.log("The conversion of minutes to seconds is: " + output);

//Program to search for an element in the array of strings
// method 1: By Index
let arr = ["Pune", "Mumbai", "Thane", "Satara"];
console.log(arr[0]);

// method 2: By using include()
//Include function is used to know whether the specifiefd element is present in the array or not
let arr = ["Pune", "Mumbai", "Thane", "Satara"];
console.log(arr.includes("Mumbai"));

// To access all elements of array
let arr = ["Pune", "Mumbai", "Thane", "Satara"];
console.log(arr);

//Program to reverse the array
//By using reverse method
let arr = ["Pune", "Mumbai", "Thane", "Satara"];

    console.log(arr.reverse());

//Without using reverse method
let arr = ["Pune", "Mumbai", "Thane", "Satara"];

for(let i=arr.length-1; i>=0; i--) {
    console.log(arr[i]);
}
