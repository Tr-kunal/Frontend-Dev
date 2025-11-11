const secret = Math.floor(Math.random() * 50) + 1;
const userGuess = 25;

if (userGuess === secret) {
  console.log("Correct guess!");
} else if (Math.abs(userGuess - secret) <= 3) {
  console.log("Very close! Secret was", secret);
} else if (userGuess > secret) {
  console.log("Too high. Secret was", secret);
} else {
  console.log("Too low. Secret was", secret);
}
