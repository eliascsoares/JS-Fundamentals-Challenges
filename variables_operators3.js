var birthDate = new Date(1990, 0, 1); 

var days = Math.floor((new Date() - birthDate) / (1000 * 60 * 60 * 24));

console.log("Days since your birth: " + days);