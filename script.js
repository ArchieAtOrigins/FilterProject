const arry = ['Francis', 'Robert', 'Wilson', 'Daryl', 'Kane', 'Molly', 'Ralph', 'Herbert', 'Shelley', 'Andrew', 'Rumplestiltskin', 'Abercrombe', 'Ned', 'Kenderstadt']

var func = function(name) {
	return name.charAt(0) == "R" || name.charAt(0) == "D" || name.length < 4;
}

var newArry = arry.filter(func);
console.log(newArry);

// Filter is run on an Array. It will take each item in the array and run/filter it through the function. The parameter in the function represents the item in the array currently being run through the function. Fun, eh?!
// ******Next challenge. Can you place the function inside the filter ()? Can it be an arrow function?*******
