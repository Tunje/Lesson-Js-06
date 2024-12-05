// Variables for the DOM elements
let start = false;
let tottime = 10;
let randomIndex = 0;
let time = tottime;
let timer;
let score = 0;
let word = 0;

// DOM elements
const scoreElement = document.querySelector('#score');
const timeElement = document.querySelector('#time');
const wordElement = document.querySelector('#word');
const endGameContainer = document.querySelector('#end-game-container');


function getRandomIndex(arrayLength) 
  {
  return Math.floor(Math.random() * arrayLength);
  }
  function updateTextContent(element, text) 
    {
    element.textContent = text;
    }
  
  function uppdateDisplayFunction(element, type) 
    {
    element.style.display = type; // Directly use the passed DOM element
    }
  

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

// start
document.addEventListener('keyup',function(event)
{
  if(start === false)
  {
    if(event.key === 'Enter' && start === false)
    {
      start = true;
      console.log(start);
      score = 0;  
      updateTextContent(scoreElement,score)
      randomIndex = getRandomIndex(words.length);
      updateTextContent(wordElement, words[randomIndex]);
      console.log(randomIndex);
      uppdateDisplayFunction(endGameContainer, 'none');
    }
    /// countdown
    if(start === true)
    {
      timer = setInterval(() => 
      {
        time -= 0.1;
        time = (Math.round(time * 10) / 10);
        updateTextContent(timeElement,time)
        if(time <= 0)
        {
          time = tottime;
          start = false;
          clearInterval(timer);          
          updateTextContent(timeElement,time);
          updateTextContent(wordElement,'');
          uppdateDisplayFunction(endGameContainer, 'flex');
          updateTextContent(endGameContainer,'You lose! your score: '+score);
        }
      }, 100);
    }
  }

  if(event.key === 'Enter' && start === true)
    {
    word = event.target.value;
    console.log(word);
    if(word === words[randomIndex])
      {
      time += 3;
      updateTextContent(timeElement,time)
      score += 1
      updateTextContent(scoreElement,score)
      randomIndex = getRandomIndex(words.length);
      updateTextContent(wordElement, words[randomIndex]);
      console.log(words[randomIndex]);
      event.target.value = '';
      }
    }
});
