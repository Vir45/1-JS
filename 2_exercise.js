/*2.	Есть строка “I want to become a frontend developer” 
Поменять порядок букв в каждом четном слове, чтобы получилось: 
“I tnaw to emoceb a dnetnorf developer”*/

let str = 'I want to become a frontend developer';

let coup = (str) => {
    let result = '';
    for(let i = str.length - 1; i >= 0; i--) {
        result += str[i]
        }
    return result;
  }
  
  let changeOrder = (str) => {
    let arr = str.split(' ');
    for (let i = 1; i < arr.length; i+= 2) {
        arr[i] = coup(arr[i]);
        }
  return arr;
  } 
