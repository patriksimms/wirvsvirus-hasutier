function handleChange(input) {
  if (input.value < 0) input.value = 0;
  if (input.value > 100) input.value = 100;
}

function setCookie(bool) {
  const res = bool;
  res.setCookie('offer');
}
