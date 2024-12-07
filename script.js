//ARRAY
const array=[31,28,21,31,99,42,83,21,99];
const arr1=[31,20,30,40];
const arr2=[21,31,99,42];
console.log("array: ",array);
console.log("Max is "+maxNum(array));
console.log("Array without duplicates: ",removeDup(array));
console.log("Reversed array: ",reversed(array));
console.log("Second largest of the array: ", seclarge(array));
console.log("is[31,20,30,40] subset of array? ",subset(array,arr1));
console.log("is[21,31,99,42] subset of array? ",subset(array,arr2),"\n");

//to find maximum number of the array
function maxNum(arr){
    let max=arr[0];
    for (let i of arr){
        if(max<i){
            max=i;
        }
    }
    return max;
}

//to remove duplicates from the array
function removeDup(arr){
    for(let i=0;i<arr.length;i++){
        for(j=i+1;j<=arr.length;j++){
            if(arr[i]==arr[j]){
                arr.splice(j,1);
            }
        }
    }
    return arr;
}

//reversed array
function reversed(arr){
    let rev=[];
    for (x of arr){
        rev.unshift(x);
    }
    return rev;
}

//second largest number
function seclarge(arr){
    let x=arr[0]>arr[1]?arr[0]:arr[j];
    let y=arr[0]>arr[1]?arr[1]:arr[0];
    for(let i=2;i<=arr.length;i++){
        if(arr[i]>x){
            x,y=arr[i],x;
        }
    }
    return y;
}

//is array subset
function subset(arr,sub){
    for (x of sub){
        if(arr.includes(x)===false) return false;
    }
    return true;
}

//STRING
let str="SHOOTING STAR FOUNDATION";
console.log("string: ",str);
let rev="";
console.log("Reversed string: ",revStr(str));
console.log("is SHOOTING STAR palindrome? ",pal(str));
console.log("vowels count in string: ",vowel(str));
console.log("largest string: ",longStr(str));
let str1="abab";
let str2="aabb";
console.log("are 'abab' and 'aabb' anagram? ",anagram(str1,str2),"\n");

//Reverse String
function revStr(str){
    
    for (x of str){
        rev=x+rev;
    }
    return rev;
}

//Palindrome
function pal(str){
    return (rev===str) ;
}

//vowel count
function vowel(str){
    let count=0;
    for ( x of str){
        if(['A','E','I','O','U'].includes(x)) count++;
    }
    return count;
}

//largest substring
function longStr(str){
    let strArr=str.split(" ");
    let long=strArr[0];
    for(x of strArr){
        if(x.length>long.length) long=x;
    }
    return long;
}

//anagram
function anagram(str1,str2){
    return str1.toLowerCase().split('').sort().join('')===str2.toLowerCase().split('').sort().join('');
}

//DATATYPES
//isArray
console.log("is [31,28,21,31,99,42,83,21,99] array? ",Array.isArray([31,28,21,31,99,42,83,21,99]));
//string to number
console.log("'12345' to number",Number('12345'));
//isInt
console.log("is 12345 int? ",Number.isInteger(123456));
//typeOf
console.log("type of 'Shooting star' ",typeof "Shooting");
//isNull
let n=null;
console.log("is null",(n===null)?true:false,"\n");

//OPERATORS
//swapping
let a=10;
let b=20;
a,b=b,a;
console.log(a,b);
console.log("is 20 even or odd? ",oddOrEve(20));
console.log("square of 24: ",sqre(24));
console.log("is age=20 is minor or adult: ",tern(20));
console.log("is 25 divisible by 4? ",div(25,4),"\n");

//even or odd
function oddOrEve(n){
    for (let x=2;x<n/2;x++){
        if(n%x==0) return "even";
    }
    return "odd";
}

//square
function sqre(n){
    return n*n;
}

//ternary operator
function tern(n){
    return (n<18?"minor":"adult");
}

//isDivisible
function div(a,b){
    return (a%b===0)?"yes":"no";
}

//MIXED PROBLEMS
console.log("sum of 21,23,42,56,78: ",sum([21,23,42,56,78]));
console.log("[22,32,[55,26],[9,38,[1,2]]] as 1D aray: ",flatten([22,32,[55,26],[9,38,[1,2]]]));
console.log("[1,3,5,2,4,3,1,6] Frequency of each element: ",freq([1,3,5,2,4,3,1,6]));
console.log("is '123' contains only number: ",num("123"));
console.log("First letter caps: ",caps("shooting stars"));
//sum of array
function sum(arr){
    let s=0;
    for(x of arr){
        s+=x;
    }
    return s;
}

//flatten the array
function flatten(arr){
    return arr.flat(Infinity);
}

function freq(arr){
    let freq={};
    arr.forEach(element => {
        freq[element]=(freq[element]||0)+1;
    });
    return freq;
}
function num(val){
    return !isNaN(val);
}
function caps(str){
    let arr=str.split(" ");
    let final=[];
    for(x of arr){
        let f=x.charAt(0).toUpperCase()+x.slice(1).toLowerCase();
        final.push(f);
    }
    return final;
}

//ADDITIONAL QUESTIONS
console.log("[1,2,3,4],[4,5,6,1] intersects: ",intersect([1,2,3,4],[4,5,6,1]));
console.log("['ksj','asddf','j','fsd'] Sorted by length: ",sorting(['ksj','asddf','j','fsd']))
console.log("Factorial of 5: ",fact(5));
console.log("[1,3,5],[2,4,6,8,9] merging two arrays: ",merge([1,3,5],[2,4,6,8,9]))
console.log("Truthy values of [1,null,89,undefined,0,2]: ",falsy([1,null,89,undefined,0,2]))
function intersect(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}
function sorting(arr) {
    return arr.sort((a, b) => a.length - b.length);
}
function fact(n) {
    if (n === 0 || n === 1) return 1;
    return n * fact(n - 1);
}
function merge(arr1, arr2) {
    return arr1.concat(arr2).sort((a, b) => a - b);
}
function falsy(arr) {
    let result = [];
    arr.forEach(function(item) {
        if (item) {
            result.push(item);
        }
    });
    return result;
}