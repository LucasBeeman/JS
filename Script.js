document.getElementById("pageTitle").innerHTML = "Lucas Beeman's calculator";

function addition()
{
    let numberOne = parseFloat(document.getElementById("numberOne").value);
    let numberTwo = parseFloat(document.getElementById("numberTwo").value);
    alert(numberOne + numberTwo);
}

function subtraction()
{
    let numberOne = parseFloat(document.getElementById("numberOne").value);
    let numberTwo = parseFloat(document.getElementById("numberTwo").value);
    alert(numberOne - numberTwo);
}

function multiplication()
{
    let numberOne = parseFloat(document.getElementById("numberOne").value);
    let numberTwo = parseFloat(document.getElementById("numberTwo").value);
    alert(numberOne * numberTwo);
}

function division()
{
    let numberOne = parseFloat(document.getElementById("numberOne").value);
    let numberTwo = parseFloat(document.getElementById("numberTwo").value);
    alert(numberOne / numberTwo);
}

