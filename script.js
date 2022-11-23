// 1. 
const arr1 = [2,3,4,5];
const arrSub = arr1.map((num) => Math.pow(num,2));
console.log(arrSub);

// 2. 
let arr2 = [1, 2, 3, 4, 5, 6];
let result1 = arr2.reduce((acumulador, valorAtual) => {
if(valorAtual > 0) {
return acumulador + valorAtual
} else {
return acumulador
}
});
console.log(result1)

// 3. 
const arr3 = [1,2,3,4,5]
const result2  = arr3.sort(function(a,b){ return b - a});
console.log(result2);

// 4. 
const arr4 = [1, 2, 3, 4, 5];
const average = arr4.reduce((a, b) => a + b, 0) / arr4.length;
console.log(average);

// 5.
var nome = 'Henrique';
for (var i = 0; i < nome.length; i++) {
console.log(nome.charAt(i));
}


