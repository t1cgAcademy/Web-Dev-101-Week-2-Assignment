const titleInput = document.getElementById("titleInput")
const yearInput = document.getElementById("yearInput")

triviaFunc = () => {
  const trivia = document.getElementById("trivia")

  alert("Please enter the letter for the corresponding answer.");
  const value1 = prompt("What was Bruce Willis' first movie?   a: Die Hard, b: Look Who's Talking, c: The First Deadly Sin");
  if (value1 === "c") {
    alert("You got it right!");
  } else {
    alert("Incorrect, Please try again.")
    triviaFunc();
  }

  const value2 = prompt("What year was Bruce Willis Born?   a: 1971, b: 1955, c: 1963");
  //use value collected from prompt, if else statements, operators, and alerts to handle trivia question
  if (value2 === "b") {
    alert("you got it right!")
  } else {
    alert("Incorrect, Please try again")
    triviaFunc();
  }


  const value3 = prompt("In what state does Bruce Willis reside? a: California, b: Montana, c: Florida");
  //use value collected from prompt, if else statements, operators, and alerts to handle trivia question
  if (value3 === "a") {
    alert("you got it right!")
  } else {
    alert("Incorrect, Please try again")
    triviaFunc();
  }
}

toggleHidden = () => {
  const willisVideo = document.getElementById("willisVideo")
  const willisPic = document.getElementById("willisPic")

  willisVideo.classList.toggle("classHidden")
  willisPic.classList.toggle("classHidden")
}

addRow = () => {
  const movieTable = document.getElementById("movieTable")

  const row = movieTable.insertRow(1)
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.innerHTML = titleInput.value;
  cell2.innerHTML = yearInput.value;

  this.resetInputValues()
}

resetInputValues = () => {
  titleInput.value = "";
  yearInput.value = "";
};