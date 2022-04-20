//iteration 1
const hacker1 = "Juan"
console.log(`The driver name is ${hacker1}`);

const hacker2 = "Rodrigo"
console.log(`The driver name is ${hacker2}`);
//iteration 2
function equalityNames(){
  let firstHacker = hacker1.length
  let secondHacker = hacker2.length
  if (firstHacker > secondHacker) {
    return (`The driver has the longest name, it has ${firstHacker} characters`)
  }
  
  else if (firstHacker < secondHacker){
    
    return (`It seems that the navigator has the longest name, it has 7 characters`);
    
  }
  
  else (firstHacker === secondHacker){
    return ("Wow, you both have equally long names, XX characters!")
  }
    
}
equalityNames();


//iteration 3


const divide = hacker1.toUpperCase().split (' ')
for(let i= 0; i< hacker1.length; i++){
    console.log(divide[i])
}
const divide1 = hacker2.split(' ')
for(let i=0; i< hacker2.length; i++){
    console.log(hacker2.reverse[i]);
}

function compareNames (hacker1, hacker2) {
  if (hacker1.localeCompare(hacker2) < 0) {
      return ("Driver's name go first")
  } 
  else if (hacker1.localeCompare(hacker2) = 0) {
      return ("You both have same names!")
  }
  else {
      return ("Navigator's name goes first")
  }
}
console.log(compareNames(hacker1,hacker2));
// iteration 4
const variable2 = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
const variable3 = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
function firstVariable(){
  const variable1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  return variable1.length
}
firstVariable();
//
function secondVariable(){
  const variable2 = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
  return variable2.length
}
secondVariable();
//
function thirdVariable(){
  const variable3 = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
  return variable3.length
}
thirdVariable();



