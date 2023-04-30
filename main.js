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

const headerContainer = document.querySelector('#header');
const questionList = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');


let score = 0;
let questionIdx = 0;

submitBtn.onclick = checkAnswer;

showQuestion();
// clearPage();

function clearPage() {
    headerContainer.innerHTML = ''; 
    questionList.innerHTML = ''; 
}

function showQuestion() {

    const headerTemple = `<h2 class="title">%title%</h2>`;
    const title = headerTemple.replace('%title%', questions[questionIdx].question);

    headerContainer.innerHTML = title;

    const answersText = questions[questionIdx].answers;
 
    for (const answerText of answersText) {
        const questionTemple = 
        `<li>
          <label>
            <input type="radio" class="answer" name="answer" />
            <span>%answer%</span>
          </label>
        </li>`;
        const answerHtml = questionTemple.replace('%answer%', answerText);

        questionList.innerHTML += answerHtml;
    }

}


function checkAnswer() {
    
}
