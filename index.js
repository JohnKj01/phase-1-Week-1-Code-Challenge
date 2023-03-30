function calculateGrade() {
    const marksInput = document.getElementById("marks");
    const marks = Number(marksInput.value);
    //linking html to js
    let grade;
    if (marks > 79) {
      grade = "A";
    } else if (marks >= 60) {
      grade = "B";
    } else if (marks >= 50) {
      grade = "C";
    } else if (marks >= 40) {
      grade = "D";
    } else {
      grade = "E";
    }
    //looping through the marks until the marks fit a grade
  }
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `The students grade is ${grade}.`;
  //declaring resultant grade
  let form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
  console.log(form);
    //submit event
  
  function checkSpeed() {
    const speed = document.getElementById("speed").value;
  //linking speed to the function
    if (speed < 70) {
      document.getElementById("momentum").innerHTML = "Ok";
    } else {
      const points = Math.floor((speed - 70) / 5);
      if (points >= 12) {
        document.getElementById("momentum").innerHTML = "Licence suspended";
      } else {
        document.getElementById("momentum").innerHTML = `Points: ${points}`;
      }//looping through possible verdicts to find the right consequence
    }
  }
  
  
  
  function calculateSalary() {
      
    const basicSalary = parseFloat(document.getElementById("basic-salary").value);
  
    const benefits = parseFloat(document.getElementById("benefits").value);
  
    const grossSalary = basicSalary + benefits;
  
    let payeeTax = 0;
    if (grossSalary <= 24000) {
      payeeTax = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
      payeeTax = (grossSalary - 24000) * 0.25;
    } else {
      payeeTax = (grossSalary - 32333) * 0.3;
    }
  
  
  
    let nhifDeduction = 0;
    if (grossSalary <= 5999) {
      nhifDeduction = 150;
    } else if (grossSalary <= 7999) {
      nhifDeduction = 300;
    } else if (grossSalary <= 11999) {
      nhifDeduction = 400;
    } else if (grossSalary <= 14999) {
      nhifDeduction = 500;
    } else if (grossSalary <= 19999) {
      nhifDeduction = 600;
    } else if (grossSalary <= 24999) {
      nhifDeduction = 750;
    } else if (grossSalary <= 29999) {
      nhifDeduction = 850;
    } else if (grossSalary <= 34999) {
      nhifDeduction = 900;
    } else if (grossSalary <= 39999) {
      nhifDeduction = 950;
    } else if (grossSalary <= 44999) {
      nhifDeduction = 1000;
    } else if (grossSalary <= 49999) {
      nhifDeduction = 1100;
    } else if (grossSalary <= 59999) {
      nhifDeduction = 1200;
    } else if (grossSalary <= 69999) {
      nhifDeduction = 1300;
    } else if (grossSalary <= 79999) {
      nhifDeduction = 1400;
    } else if (grossSalary <= 89999) {
      nhifDeduction = 1500;
    } else if (grossSalary <= 99999) {
      nhifDeduction = 1600;
    } else {
      nhifDeduction = 1700;
    }
  
    // Calculate the NSSF Deductions.
    const nssfDeduction = Math.min(grossSalary * 0.06, 1800);
  // Calculate the net salary
    const netSalary = grossSalary - payeeTax - nhifDeduction - nssfDeduction;
  // Output the results
    const outputElement = document.getElementById("salary");
    outputElement.innerHTML = `<strong>Gross Salary: </strong> ${grossSalary.toFixed(
      2
    )}
    <strong style="color:blue">Payee Tax: </strong> ${payeeTax.toFixed(2)}<br>
    <strong style="color:red">NHIF Deduction: </strong> ${nhifDeduction.toFixed(
      2
    )}<strong style="color:red">NSSF Deduction: </strong>${nssfDeduction.toFixed(
      2
    )}<strong style="color:green" >YOUR NET SALARY IS: </strong>${netSalary.toFixed(
      2
    )}`;
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    console.log(form);
  }