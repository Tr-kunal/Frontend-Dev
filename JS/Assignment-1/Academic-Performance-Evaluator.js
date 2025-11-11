const marks = [78, 82, 90, 67, 85];

const sum = marks.reduce((acc,mark)=>acc+mark,0);
const avg = sum/marks.length;
const percentage = avg;

const anyDetained = marks.some(mark=>mark<35);
let result;
if(anyDetained){
    result="Detained";
}else if(percentage>=85){
    result="Promoted with Distinction"
}else if(percentage>=50 && percentage<=84 ){
    result="Promoted";
}else{
    result="Detained";
}

console.log("Marks:", sum);
console.log("Average:", avg);
console.log("Percentage:", percentage);
console.log("Result:", result);