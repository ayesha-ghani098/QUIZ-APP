window.onload = function() {
    questionshow(0);
}

let Questions = [{
        id: "1",
        question: "Which JavaScript is also called client-side JavaScript.",
        options: {
            a: "a: Microsoft",
            b: "b: Navigator",
            c: "c: LiveWire",
            d: "d: Native"
        },
        correctAnswer: "b: Navigator"
    },
    {
        id: "2",
        question: "Which JavaScript is also called server-side JavaScript.",
        options: {
            a: "a: Microsoft",
            b: "b: Navigator",
            c: "c: LiveWire",
            d: "d: Native"
        },
        correctAnswer: "c: LiveWire"
    },
    {
        id: "3",
        question: "Which of the following is not a valid JavaScript variable name?",
        options: {
            a: "a: 2names",
            b: "b: _first_and_last_names",
            c: "c: FirstAndLast",
            d: "d: None of the above"
        },
        correctAnswer: "a: 2names"
    },
    {
        id: "4",
        question: "Which tag that can enclose number of JavaScript statements?",
        options: {
            a: "a: Script",
            b: "b: Body",
            c: "c: Head",
            d: "d: Title"
        },
        correctAnswer: "a: Script"
    },
    {
        id: "4",
        question: "Choose the client-side JavaScript object?",
        options: {
            a: "a: Database",
            b: "b: Cursor",
            c: "c: Client",
            d: "d: FileUpload"
        },
        correctAnswer: "d: FileUpload"
    },
]

function Submitform(e) {
    e.preventDefault();
    // navigation to queries.html page
    location.href = "queries.html";

    let name = document.getElementById('name').value;
    sessionStorage.setItem("name", name);



}
let points = 0;
let query_counter = 0;
var h2 = document.getElementById('h22');


function Next() {
    let ans_selected = document.querySelector("li.option.active").innerHTML;

    if (ans_selected == Questions[query_counter].correctAnswer) {
        points += 1;
        sessionStorage.setItem("point", points);
    }
    if (query_counter == Questions.length - 1) {
        location.href = "result.html";
        return;
    }

    query_counter++;
    questionshow(query_counter);


}





function questionshow(counter) {
    let question = document.getElementById('questions');
    // question.innerHTML = "<h2>" + Questions[counter].question + "</h2>"
    question.innerHTML = `<h2> ${Questions[counter].question} </h2>
    <ul class="option-body">
    <li class="option">${Questions[counter].options["a"]}</li>
    <li class="option">${Questions[counter].options["b"]}</li>
    <li class="option">${Questions[counter].options["c"]}</li>
    <li class="option">${Questions[counter].options["d"]}</li>
    </ul>
    `;
    Active();
}

function Active() {
    let opt = document.querySelectorAll("li.option");
    for (let i = 0; i < opt.length; i++) {
        opt[i].onclick = function() {
            for (let j = 0; j < opt.length; j++) {
                if (opt[j].classList.contains("active")) {
                    opt[j].classList.remove("active");
                }
            }
            opt[i].classList.add("active");
        }
    }

}

var names = sessionStorage.getItem("name");
document.getElementById('heading1').innerHTML = "Hey! " + names;
var pointt = sessionStorage.getItem("point");
if (pointt <= 2) {
    document.getElementById('heading2').innerHTML = "Fair! You have scored " + pointt;
} else if (pointt > 2 && pointt <= 4) {
    document.getElementById('heading2').innerHTML = "Good! You have scored " + pointt;
} else if (pointt == 5) {
    document.getElementById('heading2').innerHTML = "Bravo! You have scored " + pointt;
}