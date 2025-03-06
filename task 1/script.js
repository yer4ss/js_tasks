const mass = [1, 2, 3, 4, 5];
console.log(mass);


const sum = (a, b) => {
   return a + b
}
console.log(sum(5, 6));


const chetny = (num) => num % 2 === 0;
console.log(chetny(5));


const znak = (num) => {
   if (num > 0) {
      return 'plus';
   } else if (num < 0) {
      return 'minus';
   } else {
      return 'zero';
   }
}
console.log(znak(7));


for (let i = 1; i <= 10; i++) {
   console.log(`${i}`);
}


const massLength = (mass) => {
   return mass.length;
}
console.log(massLength([1, 2, 3, 4, 5]));


const massFirstAndLast = (mass) => {
   return `${mass[0]} ${mass[mass.length - 1]}`;
}
console.log(massFirstAndLast([1, 2, 3, 4, 5]));


const massPush = (mass, num) => {
   mass.push(num);
   return mass;
}
console.log(massPush([1, 2, 3, 4, 5], 6));


const massPop = (mass) => {
   mass.pop();
   return mass;
}
console.log(massPop([1, 2, 3, 4, 5]));


const sumOfMass = (mass) => {
   let sum = 0;
   for (let i = 0; i < mass.length; i++) {
      sum += mass[i];
   }
   return sum;
}
console.log(sumOfMass([1, 2, 3, 4, 5]));


const maxOfTwo = (a, b) => {
   if (a > b) {
      return a;
   } else {
      return b;
   }
}
console.log(maxOfTwo(5, 6));


const plusInMass = (mass) => {
   for (let i = 0; i < mass.length; i++) {
      if (mass[i] > 0) {
         return true;
      } else {
         return 'no';
      }
   }
}
console.log(plusInMass([1, -2, -3, -4, -5]));


const massFindNum = (mass, num) => {
   for (let i = 0; i < mass.length; i++) {
      if (mass[i] === num) {
         return true;
      }
   }
   return false;
}
console.log(massFindNum([1, 2, 3, 4, 5], 3));


const replaceInMass = (mass) => {
   for (let i = 0; i < mass.length; i++) {
      if (mass[i] < 0) {
         mass[i] = 0;
      }
   }
   return mass;
}
console.log(replaceInMass([1, -2, -3, -4, -5]));


const yearVisokosny = (year) => {
   if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
      return true;
   } else {
      return false;
   }
}
console.log(yearVisokosny(2025));


const chetnieInMass = (mass) => {
   let chetnie = [];
   for (let i = 0; i < mass.length; i++) {
      if (mass[i] % 2 === 0) {
         chetnie.push(mass[i]);
      }
   }
   return chetnie;
}

const myArray = [1, -2, 3, 4, -5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(chetnieInMass(myArray));


const massi = [1, 2, 3, 4, 5];
for (let i = array.length - 1; i >= 0; i--) {
   console.log(mass[i]);
}


for (let i = 1; i <= 10; i++) {
   console.log(`5 x ${i} = ${5 * i}`);
}


const mass = [1, 2, 3, 4, 5];
console.log(mass);


const sum = (a, b) => {
   return a + b
}
console.log(sum(5, 6));


const chetny = (num) => num % 2 === 0;
console.log(chetny(5));


const znak = (num) => {
   if (num > 0) {
      return 'plus';
   } else if (num < 0) {
      return 'minus';
   } else {
      return 'zero';
   }
}
console.log(znak(7));


for (let i = 1; i <= 10; i++) {
   console.log(`${i}`);
}


const massLength = (mass) => {
   return mass.length;
}
console.log(massLength([1, 2, 3, 4, 5]));


const massFirstAndLast = (mass) => {
   return `${mass[0]} ${mass[mass.length - 1]}`;
}
console.log(massFirstAndLast([1, 2, 3, 4, 5]));


const massPush = (mass, num) => {
   mass.push(num);
   return mass;
}
console.log(massPush([1, 2, 3, 4, 5], 6));


const massPop = (mass) => {
   mass.pop();
   return mass;
}
console.log(massPop([1, 2, 3, 4, 5]));


const sumOfMass = (mass) => {
   let sum = 0;
   for (let i = 0; i < mass.length; i++) {
      sum += mass[i];
   }
   return sum;
}
console.log(sumOfMass([1, 2, 3, 4, 5]));


const maxOfTwo = (a, b) => {
   if (a > b) {
      return a;
   } else {
      return b;
   }
}
console.log(maxOfTwo(5, 6));


const plusInMass = (mass) => {
   for (let i = 0; i < mass.length; i++) {
      if (mass[i] > 0) {
         return true;
      } else {
         return 'no';
      }
   }
}
console.log(plusInMass([1, -2, -3, -4, -5]));


const massFindNum = (mass, num) => {
   for (let i = 0; i < mass.length; i++) {
      if (mass[i] === num) {
         return true;
      }
   }
   return false;
}
console.log(massFindNum([1, 2, 3, 4, 5], 3));


const replaceInMass = (mass) => {
   for (let i = 0; i < mass.length; i++) {
      if (mass[i] < 0) {
         mass[i] = 0;
      }
   }
   return mass;
}
console.log(replaceInMass([1, -2, -3, -4, -5]));


const yearVisokosny = (year) => {
   if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
      return true;
   } else {
      return false;
   }
}
console.log(yearVisokosny(2025));


const chetnieInMass = (mass) => {
   let chetnie = [];
   for (let i = 0; i < mass.length; i++) {
      if (mass[i] % 2 === 0) {
         chetnie.push(mass[i]);
      }
   }
   return chetnie;
}

const myArray = [1, -2, 3, 4, -5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(chetnieInMass(myArray));


const massi = [1, 2, 3, 4, 5];
for (let i = array.length - 1; i >= 0; i--) {
   console.log(mass[i]);
}


for (let i = 1; i <= 10; i++) {
   console.log(`5 x ${i} = ${5 * i}`);
}

