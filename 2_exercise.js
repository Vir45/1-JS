/*2.	Есть строка “I want to become a frontend developer” 
Поменять порядок букв в каждом четном слове, чтобы получилось: 
“I tnaw to emoceb a dnetnorf developer”*/

let str1 = 'I want to become a frontend developer';

let changeOrder = (str) => {
 
  let coup = (item) => {
  let result = '';
  for(let i = item.length - 1; i >= 0; i--) {
      result += item[i]
      }
  return result;
}
  
  
  let arr = str.split(' ');
  for (let i = 1; i < arr.length; i+= 2) {
      arr[i] = coup(arr[i]);
      }
return arr.join(' ');
} 

// или 
let str1 = 'I want to become a frontend developer';

let changeOrder = (str) => {
 
  let arr = str.split(' ');
  for (let i = 1; i < arr.length; i+= 2) {
      arr[i] = arr[i].split('').reverse().join('')
      }
return arr.join(' ');
} 

console.log(changeOrder(str1))
