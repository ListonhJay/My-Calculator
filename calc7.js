let typeArray = [];
let display = document.getElementById("display");

// C L E A R  B U T T O N
function button_clear() {
  console.log(typeArray.length);
  typeArray = [];
  display.innerHTML = [];
}

// N U M P A D
function numpad_button(number) {
  if (typeArray.length === 14) {
    console.log("stop");
  } else {
    display.innerHTML = "";
    typeArray.push(number);
    console.log(typeArray);

    typeArray.forEach(function (i) {
      let digit = document.createElement('div');
      digit.innerHTML = i;
      display.appendChild(digit);
    });
  }
}

// O P E R A T O R S
function operator_button(operator) {
  if (typeArray.length === 14) {
    console.log("stop");
  } else {
    let i = typeArray[typeArray.length - 1];
    if (i === '+' || i === '-' || i === 'x' || i === '/') {
      display.innerHTML = "";
      typeArray[typeArray.length - 1] = operator;
      console.log(typeArray);
      typeArray.forEach(function (i) {
        let digit = document.createElement('div');
        digit.innerHTML = i;
        display.appendChild(digit);
      });
    } else {
      display.innerHTML = "";
      typeArray.push(operator);
      console.log(typeArray);

      typeArray.forEach(function (i) {
        let digit = document.createElement('div');
        digit.innerHTML = i;
        display.appendChild(digit);
      });
    }
  }
}


// O T H E R  B U T T O N S
function decimalButton() {

  if (typeArray.length === 14) {
    console.log("stop");
  } else {
    display.innerHTML = "";
    typeArray.push('.');
    console.log(typeArray);

    typeArray.forEach(function (num) {
      let digit = document.createElement('div');
      digit.innerHTML = num;
      display.appendChild(digit);
    });
  }
}

// E Q U A L S  B U T T O N 
function result_button() {
  let x = 0;
  let xArray = [];
  let y = 0;
  let yArray = [];
  let result = 0;
  let i = 0;
  let operatorIndex;

  //locate operator index
  typeArray.forEach(function (value) {
    if (value === '+' || value === '-' || value === 'x' || value === '/') {
      operatorIndex = i;
      console.log('operator detected at index ' + operatorIndex);
    }
    i++;
  });

  //grab value for 'x' variable
  for (let i = 0; i < operatorIndex; i++) {
    xArray.push(typeArray[i]);
  };
  console.log("xArray: " + xArray);
  //convert xArray to a number or string
  xArray.forEach(function (value) {
    x += value;
    //console.log("x: " + x);
  })
  x = x++;
  console.log("x: " + x);


  //grab value for 'y' variable
  for (let i = operatorIndex + 1; i > operatorIndex; i++) {
    yArray.push(typeArray[i]);
    if (i === typeArray.length - 1) {
      break;
    }
  }
  console.log("yArray: " + yArray);
  //convert yArray to a number or string
  yArray.forEach(function (value) {
    y += value;
    //console.log("y: " + y);
  })
  y = y++;
  console.log("y:" + y);


  //calculate xArray and yArray to the respective operator
  switch (typeArray[operatorIndex]) {
    case '-':
      console.log(x - y);
      result = x - y;
      break;
    case 'x':
      console.log(x * y);
      result = x * y;
      break;
    case '/':
      console.log(x / y);
      result = x / y;
      break;
    default:
      console.log(x + y);
      result = x + y;
      break;
  }
  console.log("op: " + typeArray[operatorIndex]);

  //display result
  display.innerHTML = result;

}
