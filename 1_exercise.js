/*	Есть массив const x = [1,4,5,288,3,4,6]; 
Написать функции: 1 отсортировать, 2 суммировать все значения и вернуть результат, 3 найти и удалить все повторяющиеся элементы*/
const x = [1,4,5,288,3,4,6];

let select = (a, b) => a -b;
x.sort(select);

let sum = (x) => {
    let result = 0;
    for(let i = 0; i < x.length; i++) {
    result += x[i];
    }
    return result;
};

let repeatOfValue = (x) => {
    for (let i = 0; i < x.length; i++) {
        for (let j = i + 1; j < x.length; j++) {
          if (x[i] == x[j]) {
            x.splice(j, 1);
            j--;
          }
        }   
     }
    return x
};


