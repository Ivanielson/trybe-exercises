let angle1 = 50;
let angle2 = 60;
let angle3 = 90;

let result = angle1 + angle2 + angle3;

if (result === 180) {
  console.log(true);
} else if(angle1 < 0 || angle2 < 0 || angle3 < 0) {
  console.log("Um ou mais dos ângolos informados, não correspondem a um ângulo válido.");
} else {
  console.log(false);
}