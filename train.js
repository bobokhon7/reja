// A-TASK:
// Shunday 2 parametrli function tuzing,
// hamda birinchi parametrdagi letterni ikkinchi
// parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return

function letterCount(a, b) {
  let arr = [];
  let changeArr = b.split("");
  for (i = 0; i < changeArr.length; i++) {
    if (a == changeArr[i]) {
      arr.push(changeArr[i]);
    }
  }
  return arr.length > 0 ? arr.length : `there is no  letter ${a} in ${b} word`;
}

console.log(letterCount("e", "engineer"));
// console.log(letterCount("b", "letsgoo"));

////// async function

/// first wait to run synchronous function after that run asynchronous function

// console.log("Jackma Advice");

// const list = [
//   "be Good student",
//   "follow your boss and make mistakes",
//   "do own jobs and run it",
//   "do what your are good at",
//   "make investment ot young generation",
//   "take a rest, but no need in age",
// ];

// async function giveAdvice(a) {
//   if (typeof a !== "number") throw new Error("insert Number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return list[5];
//     // setTimeout(function () {
//     //   callback(null, list[5]);
//     // }, 5000);
//   }
// }

// console.log("passed 0");

// //then catch
// giveAdvice(20)
//   .then((data) => {
//     console.log("answer", data);
//   })
//   .catch((err) => {
//     console.log("ERROR", err);
//   });

// console.log("passed 1");

////////// async and await ////////////////////////////////////////////////////

// async function run() {
//   let answer = await giveAdvice(23);
//   console.log(answer);
//   answer = await giveAdvice(34);
//   console.log(answer);
// }
// run();

// //////////////////////////////////////////////////// Callback Functions ////////////////////////////////////////////////////
/// single thread and multi process explantion
/// no need to wait to first or second request being done

// console.log("Jackma Advice");

const list = [
  "be Good student",
  "follow your boss and make mistakes",
  "do own jobs and run it",
  "do what your are good at",
  "make investment ot young generation",
  "take a rest, but no need in age",
];

function giveAdvice(a, callback) {
  if (typeof a !== "number") callback("insert Number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setTimeout(function () {
      callback(null, list[5]);
    }, 5000);
  }
}

console.log("passed 0");
giveAdvice(70, (err, data) => {
  if (err) console.log("ERROR:", err);
  else {
    console.log("Answer:", data);
  }
});

console.log("passed 1");
