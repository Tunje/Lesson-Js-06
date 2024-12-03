// Variables for the DOM elements
let start = false;
let tottime = 10;
let randomIndex = 0;
let time = tottime;
let timer;
let score = 0;
let word = 0;

function getRandomIndex(arrayLength) 
  {
  return Math.floor(Math.random() * arrayLength);
  }
function updateTextContent(selector, text) 
  {
  document.querySelector(selector).textContent = text;
  }
function uppdateDisplayFunction(selector, type) 
  {
  document.querySelector(selector).style.display = type;
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
      updateTextContent('#score',score)
      randomIndex = getRandomIndex(words.length);
      updateTextContent('#word', words[randomIndex]);
      console.log(randomIndex);
      uppdateDisplayFunction('#end-game-container', 'none');
    }
    /// countdown
    if(start === true)
    {
      timer = setInterval(() => 
      {
        time -= 0.1;
        time = (Math.round(time * 10) / 10);
        updateTextContent('#time',time)
        if(time <= 0)
        {
          time = tottime;
          start = false;
          clearInterval(timer);          
          updateTextContent('#time',time);
          updateTextContent('#word','');
          uppdateDisplayFunction('#end-game-container', 'flex');
          updateTextContent('#end-game-container','You lose! your score: '+score);
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
      updateTextContent('#time',time)
      score += 1
      updateTextContent('#score',score)
      randomIndex = getRandomIndex(words.length);
      updateTextContent('#word', words[randomIndex]);
      console.log(words[randomIndex]);
      event.target.value = '';
      }
    }
});
