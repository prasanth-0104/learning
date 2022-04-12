let num1 = 516546321496845651365461n;
let num2 = 6n;
num3 = 0xff;
let valve = num1 + num2;
console.log(valve, num3);

let n1 = 5;
let n2 = 5;
let result = n1 + n2;
console.log(result);

let user1 = "prasanth \nDevaraj";
console.log(user1);

let user2 = "prasanth \tDevaraj";
console.log(user2);

let user3 = "prasanth D\bDevaraj";
console.log(user3);

let user4 = "prasanth \vDevaraj";
console.log(user4);

let fn = "prasanth";
let ln = "devaraj";

let user5 = fn + ln;
console.log(user5);

let user = fn + " " + ln;
console.log(user);

// Boolean Data Type
//  it will  give true or false result

let bool1 = 5 < 6;
console.log(bool1);

let bool = 5 > 6;
console.log(bool, typeof bool);

let num4 = 6401017;
console.log(num4, typeof num4);

let num5 = String(6401017);
console.log(num5, typeof num5);

let name6 = "123";
console.log(name6, typeof name6);

let name7 = Number("123");
console.log(name7, typeof name7);

let as = 8;
console.log(as, typeof as);

let sa = 8 + " ";
console.log(sa, typeof sa);

let saa = 8 - " ";
console.log(saa, typeof saa);

let bool2 = 6;
bool2 = !bool2;
console.log(bool2, typeof bool2);

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean("prasanth"));

let x = 8 + " ";
let resultx = x - 2;
console.log(resultx, typeof resultx);

let y = 8 + " ";
let resulty = y + 2;
console.log(resulty, typeof resulty);

let ys = "123 dp ";
// let resultys = ys + "23";
console.log(ys, typeof ys);

let xs = parseInt("123 dp ");
// let resultxs = xs - "23";
console.log(xs, typeof xs);

// Arithmetic operators
// + - * / % ++ -- **

let num6 = 6;
// num6 += 2;
// num6 -= 2;
// num6 *= 2;
// num6 /= 2;
num6 %= 2;
// num6 ** 2;
// num6++;
// ++num6;
console.log(num6);

let num7 = 4;
let x7 = num7++;
let x8 = ++num7;
console.log(x7, num7);
console.log(x8, num7);

// for cubic valve or power vave of any num
let numm = 2;
let resultnumm = 2 * 2 * 2;
console.log(resultnumm);

console.log(Math.pow(2, 10));

// comparsion operators
// < <= > >= == === != !==

let xz = 6;
let ba = 6;
let data = xz >= ba;
console.log(data);

let ma = "name";
let bs = "names";
let datas = ma < bs;
console.log(datas);

// in this case string is converted to num
let sst = "10";
let nuu = 10;
let res = sst == nuu;
console.log(res);

// so always use triple equals symbol
let sstt = "10";
let nuuu = 10;
let ress = sstt === nuuu;
console.log(ress);

// logical operators
// &&, ||, !
// first read truth table for AND OR NOT

let m1 = 5,
  m2 = 6,
  m3 = 7;
let resultAND = m1 < m2 && m1 < m3;
// used to compare two valves or result at a same time
// m1 < m2 result 1 true
// m1 < m3 result 2 true
// resultm will be true
console.log(resultAND);

let resultOR = m1 > m2 || m1 > m3;
console.log(resultOR);

let resultNOT = !resultOR;
console.log(resultNOT);

// conditional statement
// if, else, else if

// in the case comparsion of two valves
// if = true
// else = flase

// in the case comparsion of 3 valves
// if = true,
// else if = use this in case if = false
// else = use this in case else if = false

let hi = 5,
  hello = 8;
let resultss = hi < hello;
if (resultss) {
  console.log("its right");
} else {
  console.log("its wrong");
}

let u = 1,
  uu = 2,
  uuu = 3;
if (u > uu && u > uuu) {
  console.log("u is greastest");
} else if (uu > uuu) {
  console.log("uu is greastest");
} else {
  console.log("uuu is  greastest");
}

// Ternary operator
// ? :
// instead of using if and else, use ?:
// find a given num is even or odd

let Num = 11;
// normal method
// any num divided by 2 and remainder is o its even
// use reminder operator
// let resultNum = Num % === 0
if (Num % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}
// above merhod is wrong
// use of ternary operator
let resultNum = Num % 2 === 0 ? "even" : "odd";
console.log(resultNum);

// switch statement
// switch case break
// instead of using if and else
let day = "holiday";
switch (day) {
  case "mon":
    console.log("5 AM");
    break;
  case "tue":
  case "wen":
  case "thue":
  case "fri":
    console.log("6 AM");
    break;
  case "sat":
  case "sun":
    console.log("7 AM");
    break;
  default:
    console.log("cricket");
    break;
}

// Template Literal
// Backtick method(``)
// result will be wording type
// ex:- the addition of 5 and 5 is 10.
let l = 500;
l1 = 50;
let rl = l + l1;
console.log(rl);
// above is normal method
console.log(`The addition of ${l} and ${l1} 
is ${rl}`);
// above is template literal method
// gives the result as it is v type (single line or new line)

// loop - repeating operations
// while loop, do while loop, for loop & nested loop
// Loop procedure = Initialiation, condition, increament or decreament

// while loop
let p = 1;
while (p <= 5) {
  console.log("hi", p);
  p++;
}

// do while loop
let k = 10;

do {
  console.log("oooo", k);
  k++;
} while (k <= 5);
{
}

// for loop
// assign all 3 steps in one line

for (let c = 1; c <= 5; c++) {
  console.log("hello", c);
}

// nested loop
for (let d = 1; d <= 5; d++) {
  console.log("valve", d);

  for (let f = 5; f >= 0; f--) console.log("dec", f);
}

// for loop
for (let bn = 1; bn <= 100; bn++) {
  if (bn % 9 === 0) {
    console.log(bn);
  }
}
// while loop
let o = 12345;
while (o > 0) {
  console.log(o % 10);
  o = parseInt(o / 10);
}

// object

let name5 = {};
console.log(name5, typeof {});

// complex object
// object inside  an object

let object = {
  name: "prasanth",
  tech: "js",

  laptop: {
    cpu: "i7",
    ram: 16,
    brand: "hp",
  },
};

delete object.laptop.brand;
console.log(object.name, object.laptop /*object.laptop.brand.length*/);

// for in loop
// print all the properties

for (let key in object) {
  console.log(key, object[key]);
}

// functions

function greet() {
  console.log("hi prasanth");
}

greet();

function greet(user7) {
  console.log("hi prasanth" + " " + user7);
}

let user7 = "prasanth";

greet(user7);

// function return

function greet1() {
  return "hello";
}

console.log(greet1());

// example-2
function greet2() {
  return 100;
}
let nnn = greet2();
let rest = nnn;
console.log(rest);

// function passing

function greet3(my_name) {
  return `my name is ${my_name}`;
}
let my_name = "prasanth";
let final = greet3(my_name);
console.log(final);

// function expression

let add = function (num1, num2) {
  return num1 + num2;
};
let resultadd = add(5, 50);
console.log(resultadd);
