//Array of quotes
const quotes = [
    "The best is yet to come.",
    "This too shall pass.",
    "You are stronger than you think.",
    "Believe in yourself.",
    "Stay hungry, stay foolish.",
    "The road to success is always under construction.",
    "Your life does not get better by chance, it gets better by change.",
    "Whether you think you can or you can't, you're right.- Henry Ford",
   "The best way to predict your future is to create it. - Abraham Lincoln",
   "If you're offered a seat on a rocket ship, don't ask what seat! Just get on. - Sheryl Sandberg",
   "Luck is what happens when preparation meets opportunity. - Seneca",
   "It does not matter how slowly you go, as long as you do not stop. -Confucius ",
   "You cannot control the behavior of others, but you can always choose how you respond to it. - Roy T. Bennett",
   "Happiness is a butterfly, which when pursued, is always just beyond your grasp, but which, if you will sit down quietly, may alight upon you.",
   "A creative man is motivated by the desire to achieve, not by the desire to beat others. - AynRand",
   "The future belongs to those who believe in the beauty of their dreams.- Eleanor Roosevelt",
   "The best way to find yourself is to lose yourself in the service of others.- Mahatma Gandhi",
   "A comfort zone is a beautiful place but nothing ever grows there. - Unknown",
   "Every day may not be good, but there's something good in every day. - Alice Morse Earle",
   "Everything you've ever wanted is on the other side of fear.-GeorgeAddair"
  ]
  
  //Function to generate a random quote
  function generateQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length)
      const randomQuote = quotes[randomIndex]
      document.getElementById('quote').innerText = randomQuote
  }
  
  //addEventListener
  document.getElementById('generate-button').addEventListener('click', generateQuote)
  //initial call to display the first quote
  generateQuote()
