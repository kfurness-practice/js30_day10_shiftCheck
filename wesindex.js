const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // check if they had the shift key down
  //check that they are checking it, not unchecking
  let inBetween = false;
  if(e.shiftKey && this.checked) {
    // go ahead and do what we please.
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      if(checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("start checking");
      }
      console.log(checkbox);
      if( inBetween) {
        checkbox.checked = true;
      }
    })
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
