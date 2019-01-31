// Populate question array below with questions and answers about your celebrity
questionArray = [
  "What was Bruce Willis' first movie?   a: Die Hard, b: Look Who's Talking, c: The First Deadly Sin",
  'What year was Bruce Willis Born?   a: 1971, b: 1955, c: 1963',
  'In what state does Bruce Willis reside? a: California, b: Montana, c: Florida',
];

// Use getElementByID (you need to add something in front of that to use), to create
// selectors for titleInput, yearInput, triviaContent, triviaInput, answerButton,
// answerResult, nextQuestion, resetGame, celebrityVideo (willisVideo), celebrityPic (willisPic)


triviaFunc = () => {
  // Toggle 'classHidden' for triviaContent, triviaInput, answerButton, nextQuestion, and resetGame tags
  // set the innerHTML of triviaContent to the first question in questionArray
  // (hint: remember bracket notation)
};

enterAnswer = () => {
  // Toggle classHidden of answerResult here
  switch (questionArray.indexOf(triviaContent.innerHTML)) {
    case 0:
      // Call first question handler
      break;
    case 1:
      // Call second question handler
      break;
    case 2:
      // Call third question handler
      break;
  }
};

questionOneHandler = () => {
  //if the answer === 'c' then set the innerHTML of answerResult to 'Correct'
  //If the user enters anything ELSE then first toggle classHidden on nextQuestion
  //and set the innerHTML of answer result to 'Incorrect, please reset game'

  //resetInputValues below should be called OUTSIDE of control structure
  resetInputValues();
};

questionTwoHandler = () => {
  //Use instructions from questionOneHandler as guide here
};

questionThreeHandler = () => {
  //Use instructions from questionOneHandler as guide here
  // toggle class hidden below should be OUTSIDE of control structure
  nextQuestion.classList.toggle('classHidden');
};

nextQuestionFunc = () => {
  if (questionArray.indexOf(triviaContent.innerHTML) === 0) {
    // set triviaContent innerHTML to the second question in the array
    // toggle classHidden for answerResult
  } else if (questionArray.indexOf(triviaContent.innerHTML) === 1) {
    // set triviaContent innerHTML to the third question in the array
    // toggle classHidden for answerResult
  } else {
    // Use triviaContent innerHTML to alert user 'GAME OVER!!'
  }
};

toggleHidden = () => {
  // toggle classHidden for celebrityVideo (willisVideo), celebrityPic (willisPic), and the answerButton
};

addRow = () => {
  const movieTable = document.getElementById('movieTable');
  // Use getElementById to create selector for movieTable
  // Create row variable that inserts 1 row into movie table
  const row = movieTable.insertRow(1);
  // Create cell1 variable that inserts a table cell into the first index of row
  // Create cell2 variable that inserts a table cell into the first index of row

  // Set innerHTML of cell1 to the value of title Input (hint dot notation + value)
  // Set innerHTML of cell2 to the value of title Input (hint dot notation + value)

  this.resetInputValues();
};

resetInputValues = () => {
  // reset titleInput, yearInput, and triviaInput values to empty strings
};

resetGameFunc = () => {
  // toggle class hidden for triviaContent, triviaInput, answerButton, answerResult
  // and resetGame
  // reset triviaContent and answerResult innerHTML to empty strings

  // reset the input values here
};