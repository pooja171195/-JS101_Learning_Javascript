// ["Rice", "Dal", "Salt"]
// [2, 3, 1]
// [60, 50, 20]


var data ={
  Rice : 2,
  R_price:60,
  Dal : 3,
  D_price:50,
  Salt : 1,
  S_price:20,

 total:function(){
   console.log((this.Rice*this.R_price)+(this.Dal*this.D_price)+(this.Salt*this.S_price));
 }
};
data.total();