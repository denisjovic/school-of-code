function calculate() {

  const expertHours = 10000;
  const beginnerHours = 2000;

  let hoursDaily = document.querySelector('input').value;

  const numOfDaysBeginner = Math.floor(beginnerHours / hoursDaily);
  const numOfDaysExpert = Math.floor(expertHours / hoursDaily);
  const newNimeToExpert = (expertHours - numOfDaysBeginner) / hoursDaily;

  const yearsToBeginner = Math.floor(numOfDaysBeginner / 365);
  const monthsToBeginner = Math.floor((numOfDaysBeginner % 365) / 30);
  const daysToBeginner = Math.floor((numOfDaysBeginner % 365) % 30);

  const yearsToExpert = Math.floor(numOfDaysExpert / 365);
  const monthsToExpert = Math.floor((numOfDaysExpert % 365) / 30);
  const daysToExpert = Math.floor((numOfDaysExpert % 365) % 30);


  const p = document.getElementById('target');
  const p1 = document.getElementById('target1');

  p.innerText = `Da bi smo bili spremni za prvi posao potrebno nam je jos ${numOfDaysBeginner} dana ucenja (${yearsToBeginner} godina, ${monthsToBeginner} meseci i ${daysToBeginner} dana).`
  p1.innerText = `Da bi smo postali ekspert, potrebno nam je ukupuno ${numOfDaysExpert} dana ucenja (${yearsToExpert} godina, ${monthsToExpert} meseci i ${daysToExpert} dana).`

  
  const msg = document.getElementById('msg');
  //msg.innerText = `Molim vas unesite broj sati!`;


  console.log(hoursDaily === '');

  if (hoursDaily === '') {
    msg.innerText = `Molim vas unesite broj sati!`;
    //add alert class to msg
    p.style.display = 'none';
    p1.style.display = 'none';
  }

}




const butt = document.getElementById('button');

butt.addEventListener('click', calculate);

