const messages = ['NO', 'Yes, definitely!', 'Ask me again after breakfast', 'Do not be stupid', 'Ask me again after a nap', 'Yo cannot ask me that', 'What does your heart tell you?', 'Why do you ask me?', 'That I cannot answer', 'You should do whatever you like', 'Haha :D', 'That is a good question'];

let randomNumber = Math.floor(Math.random()*(messages.length+1));

console.log(messages[randomNumber]);