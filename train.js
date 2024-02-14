// /*D-TASK:

// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin,
// hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method
// ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon
// va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non,
//  5ta lagmon va 6ta cola mavjud!

class Shop {
  // constructor
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  sotish(non) {
    this.non -= non;
  }

  qabul(cola) {
    this.cola += cola;
  }

  qoldiq() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    console.log(
      `hozir ${hours}:${minutes} da ${this.non} ta non va ${this.lagmon} ta lagmon va ${this.cola} ta cola mavjud!`
    );
  }
}
const shop = new Shop(4, 5, 2);
shop.qoldiq();
shop.sotish(3);
shop.qabul(4);
shop.qoldiq();

// const animal_List = [
//   "fox",
//   "ant",
//   "bird",
//   "lion",
//   "wolf",
//   "deer",
//   "frog",
//   "hen",
//   "mole",
//   "duck",
//   "dog",
//   "cock",
//   "cow",
// ];

// const findAnimal = (txt) => {
//   let newArr = [];

//   for (let i = 0; i < animal_List.length; i++) {
//     for (let b = 0; b < animal_List[i].length; b++) {
//       if (animal_List[i][b].includes(txt)) {
//         newArr.push(animal_List[b]);
//       }
//     }
//   }

//   return newArr;
// };

// console.log(findAnimal("fdgwocalt"));

// B-TASK:

// Shunday function tuzing, u 1ta string parametrga ega bolsin,
// hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

// const countDigits = (data) => {
//   let arr = [];
//   let changeArr = data.split("");
//   for (i = 0; i < changeArr.length; i++) {
//     if (!isNaN(changeArr[i])) {
//       arr.push(changeArr[i]);
//     }
//   }

//   return arr.length;
// };
// console.log(countDigits("ad2a54y79wet0sfgb9"));
// A-TASK:
// Shunday 2 parametrli function tuzing,
// hamda birinchi parametrdagi letterni ikkinchi
// parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return

// function letterCount(a, b) {
//   let arr = [];
//   let changeArr = b.split("");
//   for (i = 0; i < changeArr.length; i++) {
//     if (a == changeArr[i]) {
//       arr.push(changeArr[i]);
//     }
//   }
//   return arr.length > 0 ? arr.length : `there is no  letter ${a} in ${b} word`;
// }

// console.log(letterCount("e", "engineer"));
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

// const list = [
//   "be Good student",
//   "follow your boss and make mistakes",
//   "do own jobs and run it",
//   "do what your are good at",
//   "make investment ot young generation",
//   "take a rest, but no need in age",
// ];

// function giveAdvice(a, callback) {
//   if (typeof a !== "number") callback("insert Number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// console.log("passed 0");
// giveAdvice(70, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("Answer:", data);
//   }
// });

// console.log("passed 1");
