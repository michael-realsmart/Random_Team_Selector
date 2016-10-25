//CREATE ALL OF THE VARIABLES 
var input = document.getElementById("input");
var submit = document.getElementById("submit");
var output = document.getElementById("output");
var teamRed = document.getElementById("teamRed");
var teamBlue = document.getElementById("teamBlue");
var myArray = [];
var list = '';
var list2 = '';
var list3 = '';

//SHUFFLE FUNCTION USED IN LOWDASH
function shuffle(array) {
    var counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        var index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        var temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

//ADD THE USERS/PLAYERS
submit.addEventListener('click', function(e) { // watch the item called sumbit for a click event

  e.preventDefault(); //no idea especially the e part
  myArray.push(input.value); //take the values from input and push it to myArray
  output.innerHTML = myArray.toString(); //not sure
  input.value = ''; //empty the input field after all the above is complete
  list = '';

  for (var i = 0, l = myArray.length; i < l; i++) {
    list += '<li>' + myArray[i] + '</li>';
  }
  
  output.innerHTML = list;

});

//SHUFFLE AND DISPLAY THE TWO TEAMS
function myFunction() {

	shuffle(myArray);
	console.log(myArray);
	var team1 = myArray.slice(0, myArray.length / 2);
	var team2 = myArray.slice(myArray.length / 2, myArray.length)
	console.log(team1);
	console.log(team2);
	list2 = '';
	list3 = '';

	for (var i = 0, l = team1.length; i < l; i++) {
    list2 += '<li><span class="glyphicon glyphicon-user"></span>' + team1[i] + '</li>';
  }
	
	teamRed.innerHTML = list2;

	for (var i = 0, l = team2.length; i < l; i++) {
    list3 += '<li><span class="glyphicon glyphicon-user"></span>' + team2[i] + '</li>';
  }
	
	teamBlue.innerHTML = list3;
};
