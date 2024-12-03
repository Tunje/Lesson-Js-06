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
      document.querySelector('#score').textContent = score;
      randomIndex = getRandomIndex(words.length);
      document.querySelector('#word').textContent = words[randomIndex];
      console.log(randomIndex);
      document.querySelector('#end-game-container').style.display = 'none';
    }
    /// countdown
    if(start === true)
    {
      timer = setInterval(() => 
      {
        time -= 0.1;
        time = (Math.round(time * 10) / 10);
        document.querySelector('#time').textContent = time;
        if(time <= 0)
        {
          time = tottime;
          start = false;
          clearInterval(timer);
          document.querySelector('#time').textContent = time;
          document.querySelector('#word').textContent = '';
          document.querySelector('#end-game-container').style.display = 'flex';
          document.querySelector('#end-game-container').textContent = 'You lose! your score: '+score;
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
      document.querySelector('#time').textContent = time;
      score += 1
      document.querySelector('#score').textContent = score;
      randomIndex = getRandomIndex(words.length);
      document.querySelector('#word').textContent = words[randomIndex];
      console.log(words[randomIndex]);
      event.target.value = '';
      }
    }
});
