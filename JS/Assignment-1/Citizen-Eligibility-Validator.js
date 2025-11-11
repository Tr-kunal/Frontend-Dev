const age = 22;
const isCitizen = true;

if (isCitizen && age >= 18) {
    if (age >= 18 && age < 21) {
        console.log("Eligible to vote only.");
    } else {
        console.log("Eligible for all services.");
    }
} else if (!isCitizen && age >= 18) {
    console.log("Only age criteria met — not a citizen.");
} else {
      console.log("Not eligible yet.");
}
