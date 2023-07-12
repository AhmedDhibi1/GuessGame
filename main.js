let coding = ["javascript", "java", "python", "cpp", "c", "ruby", "pascal", "csharp", "flutter"].map((e) => e.toUpperCase());
let footballer = ["messi", "cristiano ronaldo", "ibrahimovic", "iniesta", "mbappe", "haaland", "benzema", "neymar", "xavi"].map((e) => e.toUpperCase());
let scientist = ["newton", "einstein", "galilio", "jong", "maxwell", "faraday", "tesla", "gauss", "schrodinger", "bohr", "boltzman"].map((e) => e.toUpperCase());
let actors = ["jason statham", "john cena", "the rock", "camelia clarck", "tom cruise"].map((e) => e.toUpperCase());
let sports = ["football", "handball", "basketball", "tennis", "mini football", "regbie", "table tennis"].map((e) => e.toUpperCase());
let subjects = ["math", "physics", "history", "languages", "sports", "computer science", "science", "chemstry"].map((e) => e.toUpperCase());
let rel = ["programming languages", "footballer", "scientist", "actors", "sports", "subjects"].map((e) => e.toUpperCase());

function getRandomNumber(n) {
  return Math.floor(Math.random() * (n + 1));
}

let randomnumber = getRandomNumber(rel.length - 1);

let relation = document.querySelector(".related");
let timer = document.querySelector(".timing");
let WrongAnswers = document.getElementById('wrong');
let answer = document.querySelector(".answer");
let mainres = document.querySelector(".mainres");
let final_result = document.querySelector(".final_result");
let result = document.querySelector(".result")
let score = document.querySelector(".score");
let close = document.querySelector(".closing");
let chosenword = "";

relation.textContent = rel[randomnumber];

if (relation.textContent === "PROGRAMMING LANGUAGES") {
  let random = getRandomNumber(coding.length - 1);
  let selectedLanguage = coding[random];
  chosenword = selectedLanguage;
  for (let i = 0; i < selectedLanguage.length; i++) {
    let letter = document.createElement('div');
    letter.textContent = selectedLanguage[i];
    letter.classList.add("letters_answer");
    answer.appendChild(letter);
  }
} else if (relation.textContent === "FOOTBALLER") {
  let random = getRandomNumber(footballer.length - 1);
  let selectedfootballer = footballer[random];
  chosenword = selectedfootballer;
  for (let i = 0; i < selectedfootballer.length; i++) {
    let letter = document.createElement('div');
    letter.classList.add("letters_answer");
    letter.textContent = selectedfootballer[i];
    answer.appendChild(letter);
  }
} else if (relation.textContent === "SCIENTIST") {
  let random = getRandomNumber(scientist.length - 1);
  let selectedscientist = scientist[random];
  chosenword = selectedscientist;
  for (let i = 0; i < selectedscientist.length; i++) {
    let letter = document.createElement('div');
    letter.textContent = selectedscientist[i];
    letter.classList.add("letters_answer");
    answer.appendChild(letter);
  }
} else if (relation.textContent === "ACTORS") {
  let random = getRandomNumber(actors.length - 1);
  let selectedactors = actors[random];
  chosenword = selectedactors;
  for (let i = 0; i < selectedactors.length; i++) {
    let letter = document.createElement('div');
    letter.textContent = selectedactors[i];
    letter.classList.add("letters_answer");
    answer.appendChild(letter);
  }
} else if (relation.textContent === "SPORTS") {
  let random = getRandomNumber(sports.length - 1);
  let selectedsports = sports[random]
  chosenword = selectedsports;
  for (let i = 0; i < selectedsports.length; i++) {
    let letter = document.createElement('div');
    letter.textContent = selectedsports[i];
    letter.classList.add("letters_answer");
    answer.appendChild(letter);
  }
} else if (relation.textContent === "SUBJECTS") {
  let random = getRandomNumber(subjects.length - 1);
  let selectedsubjects = subjects[random];
  chosenword = selectedsubjects;
  for (let i = 0; i < selectedsubjects.length; i++) {
    let letter = document.createElement('div');
    letter.textContent = selectedsubjects[i];
    letter.classList.add("letters_answer");
    answer.appendChild(letter);
  }
}

let randomLetters = getRandomNumber(answer.children.length - 2);
for (let i = 0; i < randomLetters; i++) {
  let randompositions = getRandomNumber(answer.children.length - 1);
  answer.children[randompositions].classList.add("empty");
}

let wrong_number = 0;
let letters =document.querySelectorAll(".letters");
for (let i = 0; i < letters.length; i++) {
    letters[i].textContent = letters[i].textContent.toUpperCase();
  letters[i].addEventListener('click', function () {
    for (let j = 0; j < answer.children.length; j++) {
      if (answer.children[j].classList.contains("empty")) {
        answer.children[j].classList.remove("empty");

        if (letters[i].textContent !== answer.children[j].textContent) {
          wrong_number++;
          WrongAnswers.textContent = wrong_number;
        }

        answer.children[j].textContent = letters[i].textContent;
        break;
      }
    }

    if (wrong_number >= 3) {
      mainres.classList.add("final_res");
      final_result.classList.add("final_result_visibility");
      result.classList.add("looser");
      result.textContent = "looser";
      score.textContent = `score :  0`;
    }
  });
}

let t = 61;
setInterval(mytime, 1000);

function mytime() {
  if (t > 0) {
    t--;
    document.querySelector(".timing").textContent = `${t}`;
  } else if (wrong_number >= 0) {
    mainres.classList.add("final_res");
    final_result.classList.add("final_result_visibility");
    result.classList.add("looser");
    result.textContent = "looser";
    score.textContent = `score : ${(randomLetters - wrong_number)}`;

  }
}

close.addEventListener('click', function () {
  mainres.classList.remove("final_res");
  final_result.classList.remove("final_result_visibility");
  location.reload();
});



