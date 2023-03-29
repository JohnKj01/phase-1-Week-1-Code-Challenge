const btn1=document.getElementById("btn1");
console.log(btn1);
btn1.addEventListener("click".studentGradeCalculator(marks));
let studentMarks=document.getElementById(gradeid);
function studentGradeCalculator(marks){
    marks=studentMarks.value;

    const checkNumber=isNaN(studentMarks);
    if (checkNumber===false){
        if (studentMarks>100 || studentMarks<0){
            console.log("invalid marks");
            marks= "invalid marks";
        }
        else if (studentMarks>=0 && studentMarks<40){
            console.log("E");
            marks= "E";
        }
        else if (studentMarks>=40 && studentMarks<50){
            console.log("D");
            marks= "D";
        }
        else if (studentMarks>=50 && studentMarks<60){
            console.log("C");
            marks= "C";
        }
        else if (studentMarks>=60 && studentMarks<80){
            console.log("B");
            marks= "B"
        }
        else if (studentMarks>79 ){
            console.log("A");
            marks="A";
        }
        else {
            console.log("  Not a number");
            marks=  "Not a number";
        }
    }
}
document.getElementById("output1").innerHTML=marks;
