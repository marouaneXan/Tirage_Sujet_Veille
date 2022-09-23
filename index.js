//letibles
let nameInput = document.getElementById("name");
let sjtInput = document.getElementById("sjt_veille");
let btnAdd = document.getElementById("add");
let results = [];
let D = moment().format("YYYY-MM-DD");
let table1 = document.querySelector("#table1");
let table2 = document.querySelector("#table2");
let id = 0;
let counter = 1;

//Add Student with subjects in localStorage
const displayStudents = () => {
  let nom = nameInput.value;
  let sujet_veille = sjtInput.value;
  results.push({
    id: id++,
    nom,
    sujet_veille,
  });
  let template = `<tr data-id=${id} class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'><th scope='row' class='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>${nom}</th><td class='py-4 px-6'>${sujet_veille}</td></tr>`;
  if (nom && sujet_veille) {
    table1.innerHTML += template;
  } else {
    alert("Entrer tout les champs");
  }
  return results;
};
btnAdd.addEventListener("click", displayStudents);

//Skipping wekeend
function skippingWekeend(date, days) {
  let d = moment(new Date(date)).add(Math.floor(days / 5) * 7, "d");
  let remaining = days % 5;
  while (remaining) {
    d.add(1, "d");
    if (d.day() !== 0 && d.day() !== 6) remaining--;
  }
  return d.format("YYYY-MM-DD");
}

//Get Random Student

const getRandomStudent = () => {
  let randomStudent = results[Math.floor(Math.random() * results.length)];
  results = results.filter((item) => item.id !== randomStudent.id);
  document.querySelector(`[data-id="${randomStudent.id + 1}"]`).remove();

  let day = skippingWekeend(D, counter++);
  let template = `<tr id="list" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
  <td id="nameone" scope="row"
  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">${randomStudent.nom}</td>
  <td id="subj" class="py-4 px-6">${randomStudent.sujet_veille}</td>
  <td id="subj" class="py-4 px-6">${day}</td>
</tr>`;
  table2.innerHTML += template;
  return randomStudent
}


function Export() {
  html2canvas(document.getElementById('table2'), {
      onrendered: function (canvas) {
          var data = canvas.toDataURL();
          var docDefinition = {
              content: [{
                  image: data,
                  width: 500
              }]
          };
          pdfMake.createPdf(docDefinition).download("HtmlToPdf.pdf");
      }
  });
}
