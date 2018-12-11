// alert('File linked');

var number1 = 5;
var number2 = '10';

// alert(number1+number2);
// alert('My favorite number is ' + number1);

var test = 'This is a test';
var Test = 'This is another Test';

// alert(test);
// alert(Test);

// Variable naming convetions
// Camel case
var myFavNumber;
myFavNumber = 22;

// Partial Case
var MyFavNumber;

// underscores
var my_fav_number;

// alert(myFavNumber);

// Arrays ex) [1, 3, 11, 12]
var colors = ['red', 'blue', 'green', 10];

// alert(colors[1]); blue
// alert(colors[3]); Undefined

// colors[3] = 'orange';
colors.push('orange');

// alert(colors);
// alert(colors.length);

var numbers = [1, 2 , 5, 3];
// var sort = numbers.sort();
// var reverse = numbers.reverse();
// alert(reverse);

// i++ =
// i = i + 1;
// Loops
// for (var i = 0; i < numbers.length; i++){
//     console.log(i + ':' + numbers[i])
// }

// While loop
// var i = 0;
// while (i <= 10) {
//     console.log('i:', i);
//     i++;
// }

// Conditionals
// if (1 === '1'){
//     console.log('TRUE');
// }

// var num1 = 2;
// var num2 = 4;
// if (num1 === num2 || num2 === 4) {
//     console.log('true')
// } else {
//     console.log('false');
// }

// var fruit = 'banana';

// switch(fruit) {
//     case 'banana':
//         alert('BANANA!');
//         break;
//     case 'orange':
//         alert('ORANGE');
//         break;
//     case 'apple':
//         alert('APPLE');
//         break;
//     default:
//         alert('Not one of the fruits!');
//         break;
// }

// Objects
// Object Literal
var person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 21,
    friends: ['Bob', 'Jane'],
    address: {
        street: '111 something st.',
        city: 'Baltimore',
        state: 'MD'
    },
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

// console.log(person.firstName);
// console.log(person.friends[0]);
// console.log(person.address);
// console.log(person.address.city);
// console.log(person.fullName());


//Object constructor
var apple = new Object();
apple.color = 'red';
apple.shape = 'round';
apple.describe = function() {
    return 'Apples are color ' + this.color + ' with shape ' + this.shape;
}
console.log(apple.describe());

// Constructor Pattern
function Fruit(name, color, shape) {
    this.name = name;
    this.color = color;
    this.shape = shape;

    this.describe = function() {
        return 'A ' + this.name + ' is the color ' + this.color
                + ' and is the shape ' + this.shape;
    }
}

var melon = new Fruit('melon', 'green', 'round');
console.log(melon.describe());

// Array of Objects
var users = [
    {
        name: 'John Doe',
        age: 30
    },
    {
        name: 'Tony',
        age: 22
    },
    {
        name: 'Mila Kunis',
        age: 35
    }
]

console.log(users);

function doClick() {
    alert('You clicked me!');
}

function changeHeader() {
    var heading = document.getElementById('milaTitle');
    heading.innerHTML = 'Changed the header!';
}

function showDate() {
    var date = document.getElementById('dateHeader');
    date.innerHTML = Date();
}

function changeBackground(x) {
    console.log(x.value);
    var body = document.getElementById('body');
    body.style.backgroundColor = x.value;
}