//Varibles
let nameInput = document.getElementById("name");
let sjtInput = document.getElementById("sjt_veille");
let btnAdd = document.getElementById("add");
let results = [];
let table = document.querySelector("table");
let id=0

//Add Student with subjects in localStorage
const displayStudents = () => {
  let nom = nameInput.value;
  let sujet_veille = sjtInput.value;
  let template = `<tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'><th scope='row' class='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>${nom}</th><td class='py-4 px-6'>${sujet_veille}</td></tr>`;
  if (nom && sujet_veille) {
    table.innerHTML += template;
  }
  results.push({
    id:id++,
    nom,
    sujet_veille,
  });
};
btnAdd.addEventListener("click", displayStudents);

//Skipping wekeend
const skippingWekeend = (date, days) => {
  let d = moment(new Date(date)).add(Math.floor(days / 5) * 7, "d");
  let remaining = days % 5;
  while (remaining) {
    d.add(1, "d");
    if (d.day() !== 0 && d.day() !== 6) remaining--;
  }
  return d.format("YYYY-MM-DD");
};


