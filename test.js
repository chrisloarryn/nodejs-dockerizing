// const arr = [2,3,4,3,2,1];
// const ent = 2;

// const myFunc = (array, number) => {
//     let nu = 0;
//     for (const n of array) {
//         n === number ? (nu++) : ''
//     }
//     return nu;
// }

// console.log(myFunc(arr, ent))

// const point1 = {x: -4, y:6}
// const point2 = {x: 8, y:5}
// const point3 = {x: 2, y:-7}

// const calcDistancesAndAverage = (p1, p2, p3) => {
//     const dAB = Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2))
//     const dAC = Math.sqrt(Math.pow((p1.x - p3.x), 2) + Math.pow((p1.y - p3.y), 2))
//     const dBC = Math.sqrt(Math.pow((p2.x - p3.x), 2) + Math.pow((p2.y - p3.y), 2))
//     return (dAB + dAC + dBC) / 3
// }

// console.log('AVERAGE IS::', calcDistancesAndAverage(point1, point2, point3))

function esPalindromo(str) 
{
    return str == str.split('').reverse().join('');
}

console.log(esPalindromo('ese'))
