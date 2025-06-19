async function traerDatosDogs() {
  let res = await fetch("https://dog.ceo/api/breeds/list/all");
  let data = await res.json();
  let suggestions = Object.keys(data.message);
  return suggestions;
}

export { traerDatosDogs };