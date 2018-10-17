function calculate () {

const hoursTotal = document.querySelector('#hours-total').value;
const hoursDaily = document.querySelector('#hours-daily').value;

const timeToGoal = Math.floor(hoursTotal / hoursDaily);
console.log(timeToGoal);

const yearsToGoal = Math.floor(timeToGoal / 365);
const monthsToGoal = Math.floor((timeToGoal % 365) / 30);
const daysToGoal = Math.floor((timeToGoal % 365) % 30);

const p = document.getElementById('target');
let status;

if( yearsToGoal <= 2) {
  status = 'Junior Developer';
} else if (yearsToGoal > 2 && yearsToGoal <= 5) {
  status = 'Developer';
} else {
  status = 'Senior Developer';
}

if(hoursDaily === '' || hoursTotal === '') {
  msg.innerText = `Unesite obe vrednost!`;
  p.style.display = 'none';
  window.location.reload();
} else {

  p.innerText = `Potrebno vam je  ${timeToGoal} dana ucenja (${yearsToGoal} godina, ${monthsToGoal} meseci i ${daysToGoal} dana) da bi ste postali ${status}.`;

}


}

const button = document.getElementById('button');
button.addEventListener('click', calculate);


