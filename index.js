let shiftOn = false;

function checkShift(e) {
  console.log(e);
  if(shiftOn === true) {
    console.log('pizzamania');
  } else if (e.target.checked === true) {
    console.log('poop');
      if(e.shiftKey) {
        console.log("👻");
        shiftOn = true;
      }
  } else {
    return;
  }
}

window.addEventListener('change', checkShift);
window.addEventListener('click', checkShift);
