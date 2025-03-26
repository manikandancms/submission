

let counter = 0;
const id = setInterval(function() {
  counter = counter + 1;
  console.log(counter);
  if (counter >= 10) {
    clearInterval(id);
    console.log("Interval stopped!");
  }
}, 1000);


/*  let counter = 0;

const id = setInterval(function() {
  counter = counter + 1;
  console.log(counter); 
  },1000)

 clearInterval(id)  */


 /*let intervalId;
let seconds = 10;

function startInterval() {
  intervalId = setInterval(() => {
    console.log(`Seconds remaining: ${seconds}`);
    seconds--;

    if (seconds < 0) {
      clearInterval(intervalId);
      console.log("Interval stopped after 10 seconds.");
    }
  }, 1000); // Run every 1000 milliseconds (1 second)
}

startInterval();*/


 

