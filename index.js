 function toLower(char){
var output = ""
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i<char.length; i++){
    for (var j = 0; j<upper.length; j++){
      if (char[i] == upper[j]){
       output += lower[j]
      } 
    }
      
    }
return output;
}
function conSTRtoLower(str){
  var lower = ""
  for (var i = 0; i<str.length; i++){
    lower = lower + toLower(str[i]);
  }
  return lower;
}
var name = ["MA","SA","I","SCH","OOL"]
for (var i = 0; i<name.length; i++){
  name[i] = conSTRtoLower(name[i]);
}
console.log(name);