
function calculate() {

  const expertHours = 10000;
  const beginnerHours = 2000;

  let hoursDaily = document.querySelector('input').value;
  const numOfDays = beginnerHours / hoursDaily;

  const numOfDaysExpert = expertHours / hoursDaily / 365;

  const p = document.getElementById('target');
  p.innerText = "Broj dana ucenja do pocetnika je " + numOfDays;

 // console.log("Broj dana ucenja do pocetnika je " + numOfDays);
  //console.log("Broj dana ucenja do eksperta je " + numOfDaysExpert.toFixed());

}

const butt = document.getElementById('button');

butt.addEventListener('click', calculate);

