// Accept name and age from the user. Check if the user is a valid voter or not. (Valid - Hello Shery, You are a valid voter. Invalid - Sorry Shery, you can't cast the vote. Part 2 - Print after how many years the user will be eligible)


let userName = prompt('Enter your name:')
let userAge = prompt('Enter your age:')

if(parseInt(userAge) >= 18){
    console.log(`Hello ${userName}, You are a valid voter.`);
} else{
    console.log(`Sorry ${userName}, you can't cast the vote.`);
} 



if(parseInt(userAge) < 18) {
    let userVoteAgeCalculate = 18 - parseInt(userAge)
    console.log(`Hey ${userName} After ${userVoteAgeCalculate} year you will be eligible for vote`);
}