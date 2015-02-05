/*
  This function should accept a number as a parameter.
  It should return the value of the number times 2.
*/
var doubler = function(number) {
   return number * 2;  
}

/*
  This function should accept an array of numbers as a parameter.
  It should return an array, with each number in the array being doubled.
*/
var arrayDoubler = function(array) {
/*So, we're setting up a variable that starts at the beginning of the
 array (0), checks to make sure that it's position is less than the
  total number of elements in the array (and therefore that this is the
   first trip through the array) and then adds one to the count so that
    the next trip through the array checks the next element of the array.*/
  for (var i = 0; i < array.length; i++) {
 /*We then use the doubler function on each element of the array, doubling it
 return a doubled array*/
    array[i] = doubler(array[i]);
  }
    return array; 
}


/*
  This function should accept two numbers as parameters.
  It should return the first number, divided by the second number.
*/
var divide = function(numerator, denominator) {
  return numerator / denominator;
}

/*
  This function should accept two parameters: an array of numbers, and another number.
  It should return an array, with each member of the array being divided by the parameter number.
*/
var arrayDivide = function(array, denominator) {
/*As long as the position of the variable i is less than the length of 
the array */
    for (var i = 0; i < array.length; i++) {
 /*Each number in the array is divided by the denominator*/
      array[i] = divide(array[i], denominator);
    }
 /*And returned into a new array */   
    return array;
}

/*
  This function should accept two numbers as parameters.
  It should return the sum of the two numbers.
*/
var sum = function(a, b) {
  return a + b;
}

/*
  This function should accept an array as a parameter.
  It should return the sum of all the members in the array.
*/
var arraySum = function(array) {
/* We create a variable for the addition of each individual array of
numbers to go into*/
  var sums = 0;
  /*This sends each individual number of the array through the loop,
  progressively, and moves the array up a notch.*/
  for (var i = 0; i < array.length; i++) {
  /*This adds var sums (starting at zero) to each individiual number as 
  moves through the loop.*/
    sums = sum(sums, array[i]);
  }
/*returns the total after the loop is closed*/
  return sums;
}

/*
  This function should accept two numbers as parameters.
  It should return the lower of the two numbers.
*/
var minimum = function(a, b) {
  if (a>b) {
    return b;
  }
  return a;
}

/*
  This function should accept an array as a parameter.
  It should return the lowest value in the array.
  If the array has a length = 0, it should return undefined.
*/
var arrayMinimum = function(array) {

  if (array.length === 0) {
    return undefined
  }

    var leastValue = array[0];

    for (var i = 0; i < array.length; i++) {
/*We need a variable for the least of the array components to load into.
We will use the minimum function on each component of the array*/ 
      leastValue = minimum(leastValue, array[i]);
      
    }

  return leastValue;
}

/*
  This function should accept a string as a parameter.
  It should return true if the string ends with a period.
  Otherwise, it should return false.
*/
var endsInPeriod = function(string) {
  var count = (string.length);

    if (string[(count - 1)] === ".") {
      return true;
    }
    return false;
}

/*
  This functions hould accept an array of strings as a parameter.
  It should return an array, consisting of only the strings 
    from the original array which end with a period.
*/
var arrayEndsInPeriod = function(array) {
var arrayPeriod = []

    for (var i = 0; i < array.length; i++) {
        
        var word = array[i]; 
        
        if (endsInPeriod(word)) {
          arrayPeriod.push(word);
        }


    }
    return arrayPeriod;
}

/*
  This function should accept a number as a parameter.
  It should return true if the number is a multiple of 3.
  Otherwise, it should return false.
*/
var multiple3 = function(number) {
  if (number % 3 === 0) {
    return true;
  }
  return false;
}

/*
  This function should accept an array of numbers as a paramter.
  It should return an array, consisting of only the numbers
    from the original array which are multiples of 3.
*/
var arrayMultiple3 = function(array) {
var arrayThirds = []

    for (var i = 0; i < array.length; i++) {
        
        var word = array[i]; 
        
        if (multiple3(word)) {
          arrayThirds.push(word);
        }


    }
    return arrayThirds;
}






