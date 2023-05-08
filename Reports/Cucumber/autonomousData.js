var display2018 =[];
var display2019 =[];
var display2022 =[];

var combinedLine =[
    { x: 0, y: 7.0628, name: "All Programs: r<sup>2</sup> of 0.6398, y=0.8411x+7.0628" },
    { x: 72, y: 67.622, name: "All Programs: r<sup>2</sup> of 0.6398, y=0.8411x+7.0628" },
];
var autonomousLine =[
    { x: 0, y: 7.0892, name: "Autonomous: r<sup>2</sup> of 0.4885, y=0.8389x+7.9533" },
    { x: 72, y: 70.4924, name: "Autonomous: r<sup>2</sup> of 0.4885, y=0.8389x+7.9533" },

];
var otherLine =[
    { x: 0, y: 5.2779, name: "Non-autonomous: r<sup>2</sup> of 0.5671, y=0.8861x+4.4317" },
    { x: 72, y:67.8099, name: "Non-autonomous: r<sup>2</sup> of 0.5671, y=0.8861x+4.4317"  },
];
var lineData = [];


var all2019Data = [
  { x: 3, y: 1, name: "(2019) Oklahoma State", color: "green" },
  { x: 1, y: 2, name: "(2019) Penn State", color: "green" },
  { x: 2, y: 3, name: "(2019) Ohio State", color: "green" },
  { x: 4, y: 4, name: "(2019) Iowa", color: "green" },
  { x: 6, y: 5, name: "(2019) Missouri", color: "green" },
  { x: 5, y: 6, name: "(2019) Michigan", color: "green" },
  { x: 7, y: 7, name: "(2019) Cornell", color: "orange" },
  { x: 10, y: 8, name: "(2019) Nebraska", color: "green" },
  { x: 8, y: 9, name: "(2019) Minnesota", color: "green" },
  { x: 16, y: 10, name: "(2019) Iowa State", color: "green" },
  { x: 11, y: 11, name: "(2019) Virginia Tech", color: "green" },
  { x: 34, y: 12, name: "(2019) Pittsburgh", color: "green" },
  { x: 34, y: 13, name: "(2019) Wyoming", color: "orange" },
  { x: 13, y: 14, name: "(2019) Lehigh", color: "orange" },
  { x: 19, y: 15, name: "(2019) North Carolina", color: "green" },
  { x: 13, y: 16, name: "(2019) Northern Iowa", color: "orange" },
  { x: 36, y: 17, name: "(2019) Army West Point", color: "orange" },
  { x: 15, y: 18, name: "(2019) Princeton", color: "orange" },
  { x: 9, y: 19, name: "(2019) Rutgers", color: "green" },
  { x: 17, y: 20, name: "(2019) NC State", color: "green" },
  { x: 25, y: 21, name: "(2019) Oklahoma", color: "green" },
  { x: 53, y: 22, name: "(2019) Buffalo", color: "orange" },
  { x: 18, y: 23, name: "(2019) Lock Haven", color: "orange" },
  { x: 21, y: 24, name: "(2019) Wisconsin", color: "green" },
  { x: 41, y: 25, name: "(2019) Binghamton", color: "orange" },
  { x: 39, y: 26, name: "(2019) North Dakota State", color: "orange" },
  { x: 49, y: 27, name: "(2019) American", color: "orange" },
  { x: 23, y: 28, name: "(2019) Virginia", color: "green" },
  { x: 37, y: 29, name: "(2019) Navy", color: "orange" },
  { x: 56, y: 30, name: "(2019) Columbia", color: "orange" },
  { x: 53, y: 31, name: "(2019) Ohio", color: "orange" },
  { x: 32, y: 32, name: "(2019) Old Dominion", color: "orange" },
  { x: 33, y: 33, name: "(2019) Michigan State", color: "green" },
  { x: 44, y: 34, name: "(2019) Brown", color: "orange" },
  { x: 40, y: 35, name: "(2019) Stanford", color: "green" },
  { x: 29, y: 36, name: "(2019) Purdue", color: "green" },
  { x: 37, y: 37, name: "(2019) Rider", color: "orange" },
  { x: 45, y: 38, name: "(2019) Campbell", color: "orange" },
  { x: 56, y: 39, name: "(2019) Air Force", color: "orange" },
  { x: 29, y: 40, name: "(2019) Fresno State", color: "orange" },
  { x: 12, y: 41, name: "(2019) Arizona State", color: "green" },
  { x: 47, y: 42, name: "(2019) Appalachian State", color: "orange" },
  { x: 63, y: 43, name: "(2019) Clarion", color: "orange" },
  { x: 22, y: 44, name: "(2019) Northwestern", color: "green" },
  { x: 53, y: 45, name: "(2019) Indiana", color: "green" },
  { x: 28, y: 46, name: "(2019) Central Michigan", color: "orange" },
  { x: 56, y: 47, name: "(2019) Chattanooga", color: "orange" },
  { x: 49, y: 48, name: "(2019) Bucknell", color: "orange" },
  { x: 26, y: 49, name: "(2019) Illinois", color: "green" },
  { x: 49, y: 50, name: "(2019) George Mason", color: "orange" },
  { x: 31, y: 51, name: "(2019) Utah Valley", color: "orange" },
  { x: 41, y: 52, name: "(2019) CSU Bakersfield", color: "orange" },
  { x: 20, y: 53, name: "(2019) Oregon State", color: "green" },
  { x: 45, y: 54, name: "(2019) Penn", color: "orange" },
  { x: 61, y: 55, name: "(2019) Northern Illinois", color: "orange" },
  { x: 43, y: 56, name: "(2019) West Virginia", color: "green" },
  { x: 56, y: 57, name: "(2019) Kent State", color: "orange" },
  { x: 49, y: 58, name: "(2019) Northern Colorado", color: "orange" },
  { x: 70, y: 59, name: "(2019) Hofstra", color: "orange" },
  { x: 70, y: 60, name: "(2019) Sacred Heart", color: "orange" },
  { x: 63, y: 61, name: "(2019) South Dakota State", color: "orange" },
  { x: 24, y: 62, name: "(2019) Duke", color: "green" },
  { x: 70, y: 63, name: "(2019) Cal Baptist", color: "orange" },
  { x: 70, y: 64, name: "(2019) Harvard", color: "orange" },
  { x: 27, y: 65, name: "(2019) Maryland", color: "green" },
  { x: 56, y: 66, name: "(2019) Drexel", color: "orange" },
  { x: 63, y: 67, name: "(2019) VMI", color: "orange" },
  { x: 63, y: 68, name: "(2019) Bloomsburg", color: "orange" },
  { x: 63, y: 69, name: "(2019) Edinboro", color: "orange" },
  { x: 63, y: 70, name: "(2019) Franklin & Marshall", color: "orange" },
  { x: 70, y: 71, name: "(2019) Cleveland State", color: "orange" },
  { x: 63, y: 72, name: "(2019) The Citadel", color: "orange" },
  { x: 61, y: 73, name: "(2019) SIU Edwardsville", color: "orange" },
  { x: 63, y: 74, name: "(2019) Gardner-Webb", color: "orange" },
  { x: 48, y: 75, name: "(2019) Cal Poly", color: "orange" },
  { x: 70, y: 75, name: "(2019) Davidson", color: "orange" },
];

var all2022Data = [
  { x: 3, y: 1, name: "(2022) Iowa", color: "green" },
  { x: 1, y: 2, name: "(2022) Penn State", color: "green" },
  { x: 2, y: 3, name: "(2022) Michigan", color: "green" },
  { x: 17, y: 4, name: "(2022) Iowa State", color: "green" },
  { x: 13, y: 5, name: "(2022) Ohio State", color: "green" },
  { x: 10, y: 6, name: "(2022) NC State", color: "green" },
  { x: 14, y: 7, name: "(2022) Wisconsin", color: "green" },
  { x: 7, y: 8, name: "(2022) Cornell", color: "orange" },
  { x: 9, y: 9, name: "(2022) Missouri", color: "green" },
  { x: 14, y: 10, name: "(2022) Oklahoma State", color: "green" },
  { x: 41, y: 11, name: "(2022) Michigan State", color: "green" },
  { x: 4, y: 12, name: "(2022) Arizona State", color: "green" },
  { x: 8, y: 13, name: "(2022) Virginia Tech", color: "green" },
  { x: 12, y: 14, name: "(2022) Oregon State", color: "green" },
  { x: 27, y: 15, name: "(2022) Penn", color: "orange" },
  { x: 20, y: 16, name: "(2022) Rutgers", color: "green" },
  { x: 39, y: 17, name: "(2022) Central Michigan", color: "orange" },
  { x: 5, y: 18, name: "(2022) Nebraska", color: "green" },
  { x: 30, y: 19, name: "(2022) Purdue", color: "green" },
  { x: 44, y: 20, name: "(2022) South Dakota State", color: "orange" },
  { x: 6, y: 21, name: "(2022) Northwestern", color: "green" },
  { x: 16, y: 22, name: "(2022) Princeton", color: "orange" },
  { x: 20, y: 23, name: "(2022) Northern Iowa", color: "orange" },
  { x: 25, y: 24, name: "(2022) Lehigh", color: "orange" },
  { x: 24, y: 25, name: "(2022) Pittsburgh", color: "green" },
  { x: 34, y: 26, name: "(2022) North Dakota State", color: "orange" },
  { x: 11, y: 27, name: "(2022) Minnesota", color: "green" },
  { x: 18, y: 28, name: "(2022) North Carolina", color: "green" },
  { x: 29, y: 29, name: "(2022) Oklahoma", color: "green" },
  { x: 61, y: 30, name: "(2022) Buffalo", color: "orange" },
  { x: 28, y: 31, name: "(2022) Appalachian State", color: "orange" },
  { x: 36, y: 32, name: "(2022) Campbell", color: "orange" },
  { x: 23, y: 33, name: "(2022) Wyoming", color: "orange" },
  { x: 61, y: 34, name: "(2022) Ohio", color: "orange" },
  { x: 19, y: 35, name: "(2022) Stanford", color: "green" },
  { x: 48, y: 36, name: "(2022) Navy", color: "orange" },
  { x: 54, y: 37, name: "(2022) Lock Haven", color: "orange" },
  { x: 48, y: 38, name: "(2022) Bucknell", color: "orange" },
  { x: 22, y: 39, name: "(2022) Cal Poly", color: "orange" },
  { x: 48, y: 40, name: "(2022) Maryland", color: "green" },
  { x: 46, y: 41, name: "(2022) Clarion", color: "orange" },
  { x: 56, y: 42, name: "(2022) Kent State", color: "orange" },
  { x: 32, y: 43, name: "(2022) West Virginia", color: "green" },
  { x: 52, y: 44, name: "(2022) Harvard", color: "orange" },
  { x: 31, y: 45, name: "(2022) Virginia", color: "green" },
  { x: 61, y: 46, name: "(2022) Gardner-Webb", color: "orange" },
  { x: 56, y: 47, name: "(2022) Cleveland State", color: "orange" },
  { x: 36, y: 48, name: "(2022) Binghamton", color: "orange" },
  { x: 25, y: 49, name: "(2022) Illinois", color: "green" },
  { x: 33, y: 50, name: "(2022) Drexel", color: "orange" },
  { x: 48, y: 51, name: "(2022) Duke", color: "green" },
  { x: 56, y: 52, name: "(2022) Chattanooga", color: "orange" },
  { x: 41, y: 53, name: "(2022) Army West Point", color: "orange" },
  { x: 68, y: 54, name: "(2022) George Mason", color: "orange" },
  { x: 54, y: 55, name: "(2022) Columbia", color: "orange" },
  { x: 44, y: 56, name: "(2022) Northern Colorado", color: "orange" },
  { x: 56, y: 57, name: "(2022) Indiana", color: "green" },
  { x: 46, y: 58, name: "(2022) Bloomsburg", color: "orange" },
  { x: 35, y: 59, name: "(2022) Rider", color: "orange" },
  { x: 39, y: 60, name: "(2022) Northern Illinois", color: "orange" },
  { x: 41, y: 61, name: "(2022) The Citadel", color: "orange" },
  { x: 36, y: 62, name: "(2022) Air Force", color: "orange" },
  { x: 61, y: 63, name: "(2022) Hofstra", color: "orange" },
  { x: 52, y: 64, name: "(2022) Utah Valley", color: "orange" },
  { x: 68, y: 65, name: "(2022) Davidson", color: "orange" },
  { x: 68, y: 66, name: "(2022) Brown", color: "orange" },
  { x: 61, y: 67, name: "(2022) Franklin & Marshall", color: "orange" },
  { x: 56, y: 68, name: "(2022) CSU Bakersfield", color: "orange" },
  { x: 68, y: 69, name: "(2022) VMI", color: "orange" },
  { x: 68, y: 70, name: "(2022) SIUE", color: "orange" },
  { x: 68, y: 71, name: "(2022) Little Rock", color: "orange" },
  { x: 61, y: 72, name: "(2022) Edinboro", color: "orange" },
  { x: 68, y: 73, name: "(2022) Sacred Heart", color: "orange" },
  { x: 68, y: 74, name: "(2022) Bellarmine", color: "orange" },
  { x: 68, y: 75, name: "(2022) American", color: "orange" },
  { x: 68, y: 76, name: "(2022) LIU", color: "orange" },
  { x: 68, y: 77, name: "(2022) California Baptist", color: "orange" },
  { x: 68, y: 78, name: "(2022) Presbyterian", color: "orange" },
];

var all2018Data =[{ x: 4, y: 1, name: '(2018) NC State', color: 'green' },
{ x: 12, y: 2, name: '(2018) South Dakota State', color: 'orange' },
{ x: 8, y: 3, name: '(2018) Virginia Tech', color: 'green' },
{ x: 2, y: 4, name: '(2018) Ohio State', color: 'green' },
{ x: 10, y: 5, name: '(2018) Arizona State', color: 'green' },
{ x: 7, y: 6, name: '(2018) Cornell', color: 'orange' },
{ x: 13, y: 7, name: '(2018) Oklahoma State', color: 'green' },
{ x: 3, y: 8, name: '(2018) Iowa', color: 'green' },
{ x: 17, y: 9, name: '(2018) Wyoming', color: 'orange' },
{ x: 4, y: 10, name: '(2018) Michigan', color: 'green' },
{ x: 15, y: 11, name: '(2018) Lehigh', color: 'orange' },
{ x: 6, y: 12, name: '(2018) Missouri', color: 'green' },
{ x: 9, y: 13, name: '(2018) Nebraska', color: 'green' },
{ x: 1, y: 14, name: '(2018) Penn State', color: 'green' },
{ x: 24, y: 15, name: '(2018) Northwestern', color: 'green' },
{ x: 35, y: 16, name: '(2018) Drexel', color: 'orange' },
{ x: 45, y: 17, name: '(2018) Rider', color: 'orange' },
{ x: 36, y: 18, name: '(2018) Navy', color: 'orange' },
{ x: 16, y: 19, name: '(2018) Lock Haven', color: 'orange' },
{ x: 50, y: 20, name: '(2018) Appalachian State', color: 'orange' },
{ x: 13, y: 21, name: '(2018) Illinois', color: 'green' },
{ x: 36, y: 22, name: '(2018) Edinboro', color: 'orange' },
{ x: 17, y: 23, name: '(2018) Minnesota', color: 'green' },
{ x: 62, y: 24, name: '(2018) Binghamton', color: 'orange' },
{ x: 38, y: 25, name: '(2018) Central Michigan', color: 'orange' },
{ x: 24, y: 26, name: '(2018) Northern Iowa', color: 'orange' },
{ x: 34, y: 27, name: '(2018) Stanford', color: 'green' },
{ x: 28, y: 28, name: '(2018) Purdue', color: 'green' },
{ x: 20, y: 29, name: '(2018) North Carolina', color: 'green' },
{ x: 11, y: 30, name: '(2018) Rutgers', color: 'green' },
{ x: 17, y: 31, name: '(2018) Wisconsin', color: 'green' },
{ x: 48, y: 32, name: '(2018) Chattanooga', color: 'orange' },
{ x: 22, y: 33, name: '(2018) Kent State', color: 'orange' },
{ x: 56, y: 34, name: '(2018) American', color: 'orange' },
{ x: 40, y: 35, name: '(2018) Penn', color: 'orange' },
{ x: 56, y: 36, name: '(2018) Campbell', color: 'orange' },
{ x: 21, y: 37, name: '(2018) Oregon State', color: 'green' },
{ x: 61, y: 38, name: '(2018) Oklahoma', color: 'green' },
{ x: 50, y: 39, name: '(2018) Old Dominion', color: 'orange' },
{ x: 45, y: 40, name: '(2018) North Dakota State', color: 'orange' },
{ x: 65, y: 41, name: '(2018) Air Force', color: 'orange' },
{ x: 30, y: 42, name: '(2018) West Virginia', color: 'green' },
{ x: 43, y: 43, name: '(2018) Utah Valley', color: 'orange' },
{ x: 42, y: 44, name: '(2018) Army West Point', color: 'orange' },
{ x: 50, y: 45, name: '(2018) Brown', color: 'orange' },
{ x: 22, y: 46, name: '(2018) Duke', color: 'green' },
{ x: 28, y: 47, name: '(2018) Hofstra', color: 'orange' },
{ x: 50, y: 48, name: '(2018) Clarion', color: 'orange' },
{ x: 40, y: 49, name: '(2018) Eastern Michigan', color: 'orange' },
{ x: 45, y: 50, name: '(2018) Iowa State', color: 'orange' },
{ x: 56, y: 51, name: '(2018) Harvard', color: 'orange' },
{ x: 55, y: 52, name: '(2018) Indiana', color: 'green' },
{ x: 72, y: 53, name: '(2018) Bloomsburg', color: 'orange' },
{ x: 26, y: 54, name: '(2018) Princeton', color: 'orange' },
{ x: 65, y: 55, name: '(2018) Michigan State', color: 'green' },
{ x: 65, y: 56, name: '(2018) Ohio', color: 'orange' },
{ x: 33, y: 57, name: '(2018) CSU Bakersfield', color: 'orange' },
{ x: 27, y: 58, name: '(2018) Maryland', color: 'green' },
{ x: 31, y: 59, name: '(2018) Virginia', color: 'green' },
{ x: 65, y: 60, name: '(2018) Buffalo', color: 'orange' },
{ x: 72, y: 61, name: '(2018) SIU Edwardsville', color: 'orange' },
{ x: 31, y: 62, name: '(2018) Pittsburgh', color: 'green' },
{ x: 38, y: 63, name: '(2018) Northern Colorado', color: 'orange' },
{ x: 48, y: 64, name: '(2018) Northern Illinois', color: 'orange' },
{ x: 56, y: 65, name: '(2018) Franklin & Marshall', color: 'orange' },
{ x: 56, y: 66, name: '(2018) George Mason', color: 'orange' },
{ x: 65, y: 67, name: '(2018) Gardner-Webb', color: 'orange' },
{ x: 43, y: 68, name: '(2018) Columbia', color: 'orange' },
{ x: 65, y: 69, name: '(2018) Cleveland State', color: 'orange' },
{ x: 50, y: 70, name: '(2018) Bucknell', color: 'orange' },
{ x: 62, y: 71, name: '(2018) Fresno State', color: 'orange' },
{ x: 72, y: 72, name: '(2018) VMI', color: 'orange' },
{ x: 72, y: 73, name: '(2018) Davidson', color: 'orange' },
{ x: 72, y: 74, name: '(2018) Sacred Heart', color: 'orange' },
{ x: 65, y: 75, name: '(2018) The Citadel', color: 'orange' },
{ x: 62, y: 76, name: '(2018) Cal Poly', color: 'orange' }
];