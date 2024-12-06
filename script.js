const array=[31,28,21,31,99,42,83,21,99];
console.log("Max is "+maxNum(array));
console.log(removeDup(array));
function maxNum(arr){
    let max=arr[0];
    for (let i of arr){
        if(max<i){
            max=i;
        }
    }
    return max;
}

function removeDup(arr){
    console.log(31,28,21,31,99,42,83,21,99);
    for(let i=0;i<arr.length;i++){
        for(j=i+1;j<=arr.length;j++){
            if(arr[i]==arr[j]){
                console.log(arr[j]);
                arr.splice(j,1);
            }
        }
    }
    return arr;
}
