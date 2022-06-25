alert('Hello! This is a simple calculator I made with javascript. Have fun!');
let operator = prompt('Enter the operation you would like to perform(+, -, * or /)');
let n1 = parseFloat(prompt('Enter the first number:'));
let n2 = parseFloat(prompt('Enter the second number:'));

if (operator == '+'){
    result = n1 + n2;
    alert('Answer is '+ result.toString());
}

else if (operator == '-'){
    result = n1 - n2;
    alert('Answer is '+ result.toString());
}

else if (operator == '*'){
    result = n1 * n2;
    alert('Answer is '+ result.toString());
}

else if (operator == '/'){
    result = n1 / n2;
    alert('Answer is '+ result.toString());
}

else{
    alert('Enter only +, -, * or /');
}

