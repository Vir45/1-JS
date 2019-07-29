/*4.	Есть строка “I want to become a frontend developer”
Обернуть кажое слово в тег span и вернуть одной строкой*/

let str = 'I want to become a frontend developer';

let toTegSpan = (str) => {
  let arr = str.split(' ');
  let result = arr.map((item) => {
      item = `<span>${item}</span>`;
    return item;
  });
  return result.join(' ')
}


