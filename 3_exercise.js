/*3.	Есть строка “class-list: green-color big-bLock”
Вернуть строку в camelCase = “classList: greenColor bigBLock”*/

let str = 'class-list: green-color big-bLock';

let camelCaseDo = (str) => {
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    let arrtwo = arr[i].split('');
      if (arrtwo.indexOf('-') >= 0) {
        arrtwo[(arrtwo.indexOf('-') + 1)] = arrtwo[(arrtwo.indexOf('-') + 1)].toUpperCase();
        arrtwo.splice(arrtwo.indexOf('-'), 1)
      };
    arr[i] = arrtwo.join('') 
  }
  return arr.join(' ')
}

console.log(camelCaseDo(str))