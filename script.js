//make comments like this in the script.js file
//by adding two slashes at the start of lines of code you can 'comment out' the code
//it's helpful to write comments to keep track of what each line of code does

//a function to select random item from a list (do not edit)
const buttonEmail = document.getElementById("poem");
function getRandomFromList(list) {
  return list[Math.floor(Math.random() * list.length)];
}
var i = 0;
var speed = 50;

//function for network error message
const sent1 = [
  "i miss you.",
  "maybe it was for the best.",
  "reconnecting...",
  "memory not found.",
  "you're thinking about me again.",
  "you're missing me again.",
  "connection has been lost.",
  "i can't remember.",
  "you can't remember.",
  "person not found.",
  "stop looking for me."
];

const buttonRetry = document.getElementById("button-network");

function changeResultsError() {
  const paragraph = document.getElementById("networkError");
  paragraph.innerText = getRandomFromList(sent1);
}
buttonRetry.addEventListener("click", changeResultsError);
//end of network error function

//function dropdown menu (do not edit this first part)
function addEval(evalText) {
  const subjectContent = document.getElementById("subject-content");
  subjectContent.innerText = evalText;
}
//when selected in the dropdown menu, the x variables trigger the associated text. Edit the x variables (and make sure to also update them in the index.html file) and edit the associated text/emojis within the quotes
//think about what use you might have for a dropdown menu: you could have someone select their 'mood' and give them an appropriate song, a bit of good or bad advice, an emoji, etc.
function dropdownFunction() {
  var x = document.getElementById("subject").value;
  if (x === "yellow tulip") {
    addEval("hopeless love and unrequited love");
  } else if (x === "forget-me-not") {
    addEval("true love and memories");
  } else if (x === "white lotus") {
    addEval("estranged love");
  } else if (x === "white cyclamen") {
    addEval("timid hope, shyness, resignation and goodbye");
  } else if (x === "blue rose") {
    addEval("attaining the impossible");
  }
}
//end of dropdown function

//start of haiku function
//lists of variables: replace all of the 5 and 7 syllable constants in the two arrays below. The more constants you write, the more variety you will have in your poem
const fiveSyllables = [
  "i spun around",
  "i was ready to move on",
  "are they gone?",
  "i did my best",
  "it was unravelling",
  "i shut the door",
  "i was still a child",
  "like a baby bird",
  "i didn't want to hear it",
  "again and again",
  "over and over",
  "like a set of die",
  "i have to admit i was relieved",
  "i looked out the window",
  "the coulds started to gather",
  "i want to say it's inhuman",
  "they chased me in my dreams",
  "i ran from them",
  "i didn't understand",
  "this made little sense to me",
  "then i would step into the dark"
];
const sevenSyllables = [
  "it was almost unsettling to watch",
  "i vaguely remembered something",
  "i feel nothing for these individuals",
  "i have always enjoyed throwing things away",
  "this is the way the world ends",
  "they were like great towering sculptures",
  "i looked at them and they seemed to be disappearing",
  "i touched their cheek and they touched mine"
];
//code for haiku function (do not edit)
const buttonHaiku = document.getElementById("button-haiku");
function changeResults() {
  const paragraph = document.getElementById("haiku-1-1");
  const paragraphTwo = document.getElementById("haiku-1-2");
  const paragraphThree = document.getElementById("haiku-1-3");
  const paragraphFour = document.getElementById("haiku-2-1");
  const paragraphFive = document.getElementById("haiku-2-2");
  const paragraphSix = document.getElementById("haiku-2-3");
  const paragraphSeven = document.getElementById("haiku-3-1");
  const paragraphEight = document.getElementById("haiku-3-2");
  const paragraphNine = document.getElementById("haiku-3-3");
  paragraph.innerText = getRandomFromList(fiveSyllables);
  paragraphTwo.innerText = getRandomFromList(sevenSyllables);
  paragraphThree.innerText = getRandomFromList(fiveSyllables);
  paragraphFour.innerText = getRandomFromList(fiveSyllables);
  paragraphFive.innerText = getRandomFromList(sevenSyllables);
  paragraphSix.innerText = getRandomFromList(fiveSyllables);
  paragraphSeven.innerText = getRandomFromList(fiveSyllables);
  paragraphEight.innerText = getRandomFromList(sevenSyllables);
  paragraphNine.innerText = getRandomFromList(fiveSyllables);
}
buttonHaiku.addEventListener("click", changeResults);
//end of haiku function

//start of search function
const textWrapper = document.getElementById("text-wrapper");
const textInput = document.getElementById("text-input");
//search function constants
//play with Google search function to come up with search terms most relevant to you. Think about how these search terms tell a story. Replace all of the placeholder text below (phrases in red font) with search terms of your own. If you keep the phrases organised alphabetically, you can ensure you have enough results for each word.
const words = [
  "are you still thinking of me? i'm not sure if i really want to know. i hope that you do, but i also hope that you don't.",
  
  "because of you, there is nothing i feel i cannot face.",

  "can you hear me?",

  "do you still remember me?",
  
  "everything reminds me of you.",
  
  "for how long were our lives intertwined? it feels like forever. it felt like a single second. it feels like too much. it felt like not enough.",
  
  "goodbye.",
  
  "how often do i haunt you? how often do you find yourself lonely and longing for what we once had? how often do you feel empty of me?",
  
  "i often find myself lost in my memories of you. it doesn't take much. take me to church by hosier, season 3 episode 10 of doctor who, snoopy.",
  
  "jokes on you, i won that soccer game after all.",
  
  "kindness does not know our unhappy ending.",
  
  "let me in.",
  
  "my childhood memories are filled with you. every time i think of myself as smaller and more naive i think of you. i wonder what that says about us, whether there's more than our relationship not lasting beyond our teen years.",
  
  "next time, would you stay? would you wait with my until the sun rose?",
  
  "over and over, again and again, i'd choose to stay with you.",
  
  "photos fade beneath my hands until we are no longer recognisable. i see your face in my dreams, haunting me with its clarity, until i wake up and you're gone again. three photos. three photos was all i had of us. they're gone, now.",
  
  "qu",
  
  "remember when we first me? no, neither do i. we were babies, but i imagine we had a good time together.",
  
  "slowly, i've been forgetting your face. what once was clear is now muddled, distorted, lost. i've dug so deep into your details that there's nothing left for me to see.",
  
  "thank you.",
  
  "when we went our seperate ways, i left a part of me with you. i think you left a part of you with me, too. it sits within my heart heavy and heaving and i don't want to let it go. it's selfish of me, i know, but it's all that's left of us now."
];
//search function (do not edit)
function changeText(e) {
  const searchWord = e.target.value.toLowerCase().trim();
  const resultWords = words.filter((word) =>
    word.toLowerCase().startsWith(searchWord)
  );
  // clear exist words
  while (textWrapper.firstChild) {
    textWrapper.removeChild(textWrapper.firstChild);
  }
  if (searchWord != "") {
    for (var i = 0; i < resultWords.length; i++) {
      const line = document.createElement("div");
      line.innerHTML = resultWords[i];
      textWrapper.appendChild(line);
    }

    if (resultWords.length === 0) {
      const line = document.createElement("div");
      line.innerHTML = "no results";
      textWrapper.appendChild(line);
    }
  }
}
textInput.addEventListener("input", changeText);
// end search function code

//start of code for poem

const subjects =
    "i, you, we, they, our souls, our hearts".split(
      ","
    ),
  verbs =
    "search, dig through, sort through, hide within, cry for, yell at, scream at, bleed for, bleed from, remember, reminisce on".split(
      ","
    ),
  objects =
    "our memories, their prejudice, our connection, our love, the wonky park bench, the setting sun, our last meeting, the final meeting place, the end of our connection, our final memory, my heart, your heart, our hearts, our happy ending, our first meeting, our happiest memories, my happiness with you, your happiness with you, your sadness with me, your happiness with me.".split(
      ","
    );
// set up the counter
let counter = 0;

// a function to pull a random item from a list
function getRandomFromList2(list) {
  return list[Math.floor(Math.random() * list.length)];
}
// add a line to the poem constructed from the lists of words
function addLine(indent = false) {
  // create the line
  const line = document.createElement("div");
  if (indent === true) {
    // indent is true so add an indent class
    line.classList.add("indent");
  }
  const text =
    getRandomFromList2(subjects) +
    " " +
    getRandomFromList2(verbs) +
    " " +
    getRandomFromList2(objects);
  const lineText = document.createTextNode(text);
  line.appendChild(lineText);
  // get the poem
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}
// add a blank line to the poem
function addBlankLine() {
  const line = document.createElement("div");
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}
// remove the first line from the poem
function removeFirstLine() {
  const poem = document.getElementById("poem");
  poem.removeChild(poem.childNodes[0]);
}
// implement the rules of the poem
function processPoem() {
  counter++;
  if (counter % 5 === 0) {
    addBlankLine();
  } else if (counter % 5 === 2 || counter % 5 === 4) {
    // if the second or fourth line add the line with an indent
    addLine(true);
  } else {
    addLine();
  }
  if (counter > 15) {
    removeFirstLine();
  }
}
window.setInterval(processPoem, 1000);