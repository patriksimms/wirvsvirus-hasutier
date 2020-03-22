function handlePLZ(input) {
  const reg = new RegExp("^(([1-9]{1}[0-9]{4})|([0-9]{1}[1-9]{1}[0-9]{3}))$");
  const plz = reg.test(input.value,);

  if (!plz) input.value = "Keine valide PLZ";
}