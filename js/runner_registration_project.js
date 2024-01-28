let raceNumber = Math.floor(Math.random() * 1000);
//Test for Random Number Function . Comment Out
//console.log(raceNumber);

// Registrant Order & Runner Age Script
let registrantOrder = Math.floor(Math.random() * 4000);
 let runnerAge = Math.floor(Math.random() * 95);


//Conditional For Registrant Status
if (registrantOrder <= 1000 && runnerAge >= 18 ) {
  registrationStatus = 'Early, Adult Registrant' ; }
  else if (registrantOrder >=1000 && runnerAge >= 18) {
    registrationStatus = 'Late, Adult Registrant'
  }
  else {registrationStatus = 'Youth Registrant';
  }

// Code For Racer Number
  if (registrationStatus === 'Early, Adult Registrant') { 
    finalRaceNumber = (raceNumber + 1000) ;}
  else {finalRaceNumber = raceNumber;}  

//Code for Runner Times

if (registrationStatus === 'Early, Adult Registrant') { 
    runTime = ( `As an ${registrationStatus}, your run start time is 9:30 AM!`) ;}
 else if (registrationStatus === 'Late, Adult Registrant') { 
    runTime = (`As a ${registrationStatus}, your run start time is 11:00 AM!`) ;}   
  else {runTime = (`As a ${registrationStatus}, your run start time is 12:30 PM! `);}


// Final Output
  console.log (`Thank you for registering for the big race. Your Runner Number is ${finalRaceNumber}. ${runTime} Good Luck!`)
