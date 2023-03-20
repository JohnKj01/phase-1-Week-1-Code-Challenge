/*a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade as follows: 
A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40.*/
var students = [['John', 73], ['Val', 92], ['Omosh', 68], ['Cate', 83], ['Joy', 74]];
var Avgmarks = 0;
for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}
console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 40){
          console.log("Grade : F");      
          } 
        else if (avg > 40) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 49) 
             {
                console.log("Grade : C"); 
        } else if (avg < 60) {
                console.log("Grade : B"); 
        } else if (avg < 79) {
                console.log("Grade : A"); 
}



/*Challenge 2: Speed Detector (Toy Problem)
Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70,
it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70),
it should give the driver one demerit point and print the total number of demerit points. */
checkSpeed(130);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  }

  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) console.log("License suspended");
  else console.log("Points", points);
}

/*Challenge 3: Net Salary Calculator (Toy Problem)
Given the basic salary and benefits of an employee, write a program that would calculate 
the Payee Tax, NHIF, NSSF Deductions and net salary.*/
var salaryPerMonth = document.getElementById('txt_salary');
var monthsPerAnnum = document.getElementById('txt_annum');
var basicSalaryPerAnnum = document.getElementById('txt_basic');
var Salary = document.getElementById('txt_gross');
var CalcButton = document.getElementById('calc');


CalcButton.addEventListener('click',DoCalculation)
console.log(basicSalaryPerMonth, annualSalary)

function DoCalculation(){
var basicSalary = Number(monthsPerAnnum.value) * Number(salaryPerMonth.value);
var SalarywithTax = basicSalary * 21/100;
basicSalaryPerAnnum.value=basicSalary;
Salary.value= basicSalary - SalarywithTax;
console.log(SalarywithTax);
console.log(salaryPerHour.value);
}