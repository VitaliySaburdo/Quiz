const questions = [
  {
    question: "Какой язык работает в браузере?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: 4,
  },
  {
    question: "Что означает CSS?",
    answers: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    correct: 2,
  },
  {
    question: "Что означает HTML?",
    answers: [
      "Hypertext Markup Language",
      "Hypertext Markdown Language",
      "Hyperloop Machine Language",
      "Helicopters Terminals Motorboats Lamborginis",
    ],
    correct: 1,
  },
  {
    question: "В каком году был создан JavaScript?",
    answers: ["1996", "1995", "1994", "все ответы неверные"],
    correct: 2,
  },
];

const headerContainer = document.querySelector("#header");
const questionList = document.querySelector("#list");
const submitBtn = document.querySelector("#submit");

let score = 0;
let questionIdx = 0;




submitBtn.onclick = checkAnswer;

clearPage();
showQuestion();

function clearPage() {
  headerContainer.innerHTML = "";
  questionList.innerHTML = "";
}

function showQuestion() {
  const headerTemple = `<h2 class="title">%title%</h2>`;
  const title = headerTemple.replace(
    "%title%",
    questions[questionIdx]["question"]
  );

  headerContainer.innerHTML = title;

  const answersText = questions[questionIdx].answers;

	let anserNumber = 1;
	
  for (const answerText of answersText) {
	  const questionTemple = 
		`<li>
          <label>
            <input value="%number%" type="radio" class="answer" name="answer" />
            <span>%answer%</span>
          </label>
        </li>`;
	  
    let answerHtml = questionTemple
      	.replace("%answer%", answerText)
		.replace("%number%", anserNumber);
	  
	  questionList.innerHTML += answerHtml;
	  
    anserNumber++;
  }
}

function checkAnswer() {
  const checkedAnswer = questionList.querySelector("input[type=radio]:checked");

  if (!checkedAnswer) {
    submitBtn.blur();
    return;
  }
  const userAnswer = parseInt(checkedAnswer.value);
  const correctAnswer = questions[questionIdx]["correct"];

  if (userAnswer === correctAnswer) {
    score++;
  }
  if (questionIdx !== questions.length - 1) {
    questionIdx++;
    clearPage();
    showQuestion();
  } else {
    clearPage();
    showResults();
  }
}

function showResults() {
  let title, message;

  const resultTemplate = `<h2 class="title">%title%</h2>
        <h3 class="summary">%message%</h3>
        <p class="result">%result%</p>`;
	
  if (score === questions.length) {
    title = "Congratulations";
    message = "You answered correct all of the questions";
  } else if ((score * 100) / questions.length >= 50) {
    title = "Not bad";
    message = "You answered more than half of the questions";
  } else {
    title = "Try again";
    message = "You answered less than half of the questions";
  }

  let result = `${score} out of ${questions.length}`;

  const finalMessage = resultTemplate
    .replace("%title%", title)
    .replace("%message%", message)
	.replace("%result%", result);
	
	headerContainer.innerHTML = finalMessage;
	
	// Play again

	submitBtn.blur();
	submitBtn.innerHTML = "Play once again";
	submitBtn.onclick = ()=>{history.go()}
}
