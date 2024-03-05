// Progression 1 - Create a Manager array and return it

function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [managerName, managerAge, currentTeam, trophiesWon];
}

let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

// Write your function here


let managerDetails = createManager(managerName, managerAge, currentTeam, trophiesWon);
console.log(managerDetails);


// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

// Progression 2 - Create a formation object and return it
var formation = [4, 4, 3];

// Write your function here
function createFormation(formationArray) {
  return {
    defender: formationArray[0],
    midfield: formationArray[1],
    forward: formationArray[2],
  };
}
var formation = [];

// Write your function here
function createFormation(formationArray) {
  if (formationArray.length === 0) {
    return null;
  }

  return {
    defender: formationArray[0],
    midfield: formationArray[1],
    forward: formationArray[2],
  };
}
// Don't edit the following code
try {
  var formationObject = createFormation(formation);
} catch (e) {
  // do nothing
}

// Progression 3 - Filter players that debuted in _ year
s
function filterByDebut(year) {


  if (!year || isNaN(year)) {
    
    return [];
  }

 
  let filteredPlayers = players.filter(player => player.debut === year);

  return filteredPlayers;
}


expect(result.length).toBe(1);
expect(result[0]).toEqual({
  name: 'David Silva',
  age: 32,
  debutYear: 2005,
  team: 'Manchester City',
  position: 'Midfielder',
  country: 'Spain',
  url: 'https://media.guim.co.uk/cf0a8b9a85d5cab6f42e5a7172a056b2a2aff541/0_560_4618_2771/500.jpg',
  awards: [
    { name: 'PFA Premier League Team of the Year', year: 2014 }
  ]
});




// Progression 4 - Filter players that play at the position ___

function filterByPosition(position) {
  
  if (!position || typeof position !== 'string') {
    
    return [];
  }

 
  let lowercasePosition = position.toLowerCase();

  
  let filteredPlayers = players.filter(player => player.position.toLowerCase() === lowercasePosition);

  return filteredPlayers;
}




// Progression 5 - Filter players that have won __ award

function filterByAward(awardName) {
  if (!awardName) {
    
    return [];
  }

  const filteredPlayers = players.filter(player =>
    player.awards.some(award => award.name === awardName)
  );

  return filteredPlayers;
}




// Progression 6 - Filter players that won __ award __ times



function filterByAwardxTimes(awardName, noOfTimes) {
  if (!awardName || !noOfTimes || isNaN(noOfTimes) || noOfTimes <= 0) {
   
    return [];
  }

  
  const filteredPlayers = players.filter(player =>
    player.awards.filter(award => award.name === awardName).length === noOfTimes
  );

  return filteredPlayers;
}



// Progression 7 - Filter players that won __ award and belong to __ country



function filterByAwardxCountry(awardName, country) {
  if (!awardName || !country) {
    
    return [];
  }

  
  const filteredPlayers = players.filter(player =>
    player.awards.some(award => award.name === awardName) && player.country === country
  );

  return filteredPlayers;
}



// Progression 8 - Filter players that won at least __ awards, belong to __ team, and are younger than __

function filterPlayersByAwardsTeamAndAge(awardCount, team, maxAge) {
  return players.filter(player => player.awards.length >= awardCount && player.team === team && player.age < maxAge);
}


function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  if (!noOfAwards || !team || !age) {

    return [];
  }

  const filteredPlayers = players.filter(player =>
    player.awards.filter(award => award.name).length >= noOfAwards &&
    player.team === team &&
    player.age < age
  );

  return filteredPlayers;
}

// Progression 9 - Sort players in descending order of their age

function sortPlayersByAgeDescending() {
  return players.sort((a, b) => b.age - a.age);
}


// Progression 10 - Sort players belonging to ___ team in descending order of awards won

function sortPlayersByTeamAndAwards(team) {
  return players.filter(player => player.team === team)
                .sort((a, b) => b.awards.length - a.awards.length);
}


// Challenge 1 - Sort players that have won ___ award __ times and belong to ____ country in alphabetical order of their names

function sortPlayersByAwardAndCountry(award, times, country) {
  return players.filter(player => player.awards.filter(a => a === award).length === times && player.country === country)
                .sort((a, b) => a.name.localeCompare(b.name));
}





// Challenge 2 - Sort players that are older than ___ years in alphabetical order
// Sort the awards won by them in reverse chronological order
function sortPlayersByAgeAndAwards(age) {
  let filteredPlayers = players.filter(player => player.age > age);
  filteredPlayers.sort((a, b) => a.name.localeCompare(b.name));
  filteredPlayers.forEach(player => player.awards.sort().reverse());
  return filteredPlayers;
}



