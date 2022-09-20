//Varibles
let nam = document.getElementById("name");
let sjt = document.getElementById("sjt_veille");
let btnAdd = document.getElementById("add");
let results = [];

//Add Student with subjects in localStorage
btnAdd.addEventListener("click", addToLocalStorage);
addToLocalStorage = () => {
  results.push({
    Nom: nam.value,
    "Sujet de veille": sjt.value,
  });
  localStorage.setItem("students", JSON.stringify([...results]));
};
