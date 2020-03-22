function handleChange(input) {
  if (input.value < 0) input.value = 0;
  if (input.value > 100) input.value = 100;
}

function compare()
{
  const firstNumber = document.getElementById("first").value;
  const secondNumber = document.getElementById("second").value;
  if(firstNumber == secondNumber)
  {
    alert("The numbers are equal");
  }
  else if(firstNumber > secondNumber)
  {
    alert("The first number is larger");
  }
  else
  {
    alert("The second number is larger");
  }
}
