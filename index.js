const quizData = [{
    question: "Javascript is an _______ language?",
    a: "Object-oriented",
    b: "Object-based",
    c: "Procedural",
    d: "None of the above",
    correct: "a",
},
{
    question: " Which of the following methods is used to access HTML elements using Javascript?",
    a: "getElementbyId",
    b: "getElementsByClassName",
    c: "Both a and b",
    d: "None of the above",
    correct: "c",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: " Upon encountering empty statements, what does the Javascript Interpreter do?",
    a: "Throws an error",
    b: "Ignore the Statements",
    c: "Gives an warning",
    d: "None of the above",
    correct: "b",
},
{
    question: "Which of the following is not javascript data types?",
    a: "Null type",
    b: "Undefined type",
    c: "Number type",
    d: "All of the mentioned",
    correct: "d",
},
{
    question: " Where is Client-side JavaScript code is embedded within HTML documents?",
    a: "A URL that uses the special javascript:code",
    b: "A URL that uses the special javascript:protocol",
    c: "A URL that uses the special javascript:encoding",
    d: "A URL that uses the special javascript:stack",
    correct: "b",
},
{
    question: "Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine?",
    a: "will work perfectly well on a Windows Machine",
    b: "will be displayed as JavaScript text on the browser",
    c: "will throw errors and exceptions",
    d: "must be restricted to a Unix Machine only",
    correct: "a",
},
{
    question: "Arrays in JavaScript are defined by which of the following statements",
    a: "It is an ordered list of values",
    b: "It is an ordered list of objects",
    c: "It is an ordered list of string",
    d: "It is an ordered list of functions",
    correct: "a",
},
{
    question: "What keyword is used to check whether a given property is valid or not?",
    a: "in",
    b: "is in",
    c: "exists",
    d: "lies",
    correct: "b",
},
{
    question: "What is the use of the noscript tag in Javascript?",
    a: "The contents are displayed by non-JS-based browsers",
    b: "Clears all cookies and cache",
    c: "Both a and b",
    d: "None of the above",
    correct: "a",
}

];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='checkbox']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
        <h4 class="w-100"> Thanks for Taking the Quiz</h4>
    </div>
`
}
loadQuestion(index);