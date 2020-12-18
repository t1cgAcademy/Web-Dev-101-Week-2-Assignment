// Populate question array below with questions and answers about your celebrity
questionArray = [
    "What was Bruce Willis' first movie?   a: Die Hard, b: Look Who's Talking, c: The First Deadly Sin",
    "What year was Bruce Willis Born?   a: 1971, b: 1955, c: 1963",
    "In what state does Bruce Willis reside? a: California, b: Montana, c: Florida",
  ];
  
  const titleInput = document.getElementById('titleInput');
  const yearInput = document.getElementById('yearInput');
  const triviaContent = document.getElementById('triviaContent');
  const triviaInput = document.getElementById('triviaInput');
  const answerButton = document.getElementById('answerButton');
  const answerResult = document.getElementById('answerResult');
  const nextQuestion = document.getElementById('nextQuestion');
  const resetGame = document.getElementById('resetGame');
  const willisVideo = document.getElementById('willisVideo');
  const willisPic = document.getElementById('willisPic');
  const movieTable = document.getElementById('movieTable');
  const messageContainer = document.getElementById('messageContainer');

  
  
  
  triviaFunc = () => {
    triviaContent.classList.toggle('classHidden');
    triviaInput.classList.toggle('classHidden');
    answerButton.classList.toggle('classHidden');
    nextQuestion.classList.toggle('classHidden');
    resetGame.classList.toggle('classHidden');
    triviaContent.innerHTML = questionArray[0];
  };
  
  enterAnswer = () => {
    answerResult.classList.toggle('classHidden');
    switch (questionArray.indexOf(triviaContent.innerHTML)) {
      case 0:
        questionOneHandler();
        break;
      case 1:
        questionTwoHandler();
        break;
      case 2:
        questionThreeHandler();
        break;
    }
  };
  
  questionOneHandler = () => {
    if(triviaInput.value == 'c') {
      answerResult.innerHTML = 'Correct';
    } else {
      nextQuestion.classList.toggle('classHidden');
      answerResult.innerHTML = "Incorrect, please reset game";
    }
   
    resetInputValues();
  };
  
  questionTwoHandler = () => {
    if(triviaInput.value == 'b') {
      answerResult.innerHTML = 'Correct';
    } else {
      nextQuestion.classList.toggle('classHidden');
      answerResult.innerHTML = "Incorrect, please reset game";
    }
    resetInputValues();
  };
  
  questionThreeHandler = () => {
    if(triviaInput.value == 'a') {
      answerResult.innerHTML = 'Correct, you win!';
    } else {
      nextQuestion.classList.toggle('classHidden');
      answerResult.innerHTML = "Incorrect, please reset game";
    }
    resetInputValues();
    nextQuestion.classList.toggle('classHidden');
  };
  
  nextQuestionFunc = () => {
    if (questionArray.indexOf(triviaContent.innerHTML) === 0) {
      triviaContent.innerHTML = questionArray[1];
      answerResult.classList.toggle('classHidden');
    } else if (questionArray.indexOf(triviaContent.innerHTML) === 1) {
      triviaContent.innerHTML = questionArray[2];
      answerResult.classList.toggle('classHidden');
    } else {
      triviaContent.innerHTML = 'GAME OVER';
    }
  };
  
  toggleHidden = () => {
    // toggle classHidden for celebrityVideo (willisVideo), celebrityPic (willisPic), and the answerButton
    willisVideo.classList.toggle('classHidden');
    willisPic.classList.toggle('classHidden');
  };
  
  addRow = () => {
    const rowCount = movieTable.rows.length;
    const row = movieTable.insertRow(rowCount);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
  
    cell1.innerHTML = titleInput.value;
    cell2.innerHTML = yearInput.value;
    this.resetInputValues();
  };
  
  resetInputValues = () => {
    titleInput.value = '';
    yearInput.value = '';
    triviaInput = '';
  };
  
  resetGameFunc = () => {
    triviaInput.classList.toggle('classHidden');
    triviaContent.classList.toggle('classHidden');
    answerButton.classList.toggle('classHidden');
    answerResult.classList.toggle('classHidden');
    resetGame.classList.toggle('classHidden');

    triviaContent.innerHTML = '';
    answerResult.innerHTML = '';

    resetInputValues();
  };
  
  deleteRowFunc = () => {
    const rowCount = movieTable.rows.length;
    movieTable.deleteRow(rowCount - 1);
  }
  
  postMessage = () => {
    const comment = document.getElementById('message').value;
    const newMessage = document.createElement("P");
    newMessage.id = "messageCard";
    messageContainer.innerHTML = new Date() + ":" + comment;
    newMessage.onclick = deleteMessage = () => {
      newMessage.parentNode.removeChild(newMessage);
    }
    messageContainer.append(newMessage);
  }