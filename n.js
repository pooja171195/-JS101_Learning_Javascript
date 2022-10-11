let arr=[4,7,8,6,9,0,7];

let bag="";

for(let i=0; i<arr.length; i++){
  if(arr[i]<arr[i+1] && arr[i]<arr[i-1]){
    bag+=arr[i]+" ";
  }
}
console.log(bag);