//Exercise #2: At Least Five Function

function atLeastFive(array, target) {
  let roomResult = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] > target) {
      roomResult.push("true")
    }
  }
  return roomResult.length
} 

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];


// Using `atLeastFive` function here
function result (callbackOperation, room, score, roomNumber) {
    if (callbackOperation(room,score) > 4) { 
      return 'นักเรียนห้องที่ ' + roomNumber + ' ผ่านเกณฑ์ ✅'
    } else {
      return 'นักเรียนห้องที่ ' + roomNumber + ' ไม่ผ่านเกณฑ์ ❌'
    }
}

let scoreRoom1Result = result(atLeastFive,studentScoresRoom1,70,1);
let scoreRoom2Result = result(atLeastFive,studentScoresRoom2,70,2);
let scoreRoom3Result = result(atLeastFive,studentScoresRoom3,70,3);

console.log(scoreRoom1Result)
console.log(scoreRoom2Result)
console.log(scoreRoom3Result)