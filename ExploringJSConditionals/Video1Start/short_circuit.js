function isAdult(age) {
  return age && age >= 18;
}

//console.log(isAdult(19));

function countToFive(start = 1) {
  for (var i = start; i <= 5; i += 1){
    console.log(i);
  }
}

//countToFive();

function greet(name) {
  name && console.log('Hi, ' + name + '!');
}

greet('Emily');