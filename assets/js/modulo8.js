let kkkk = "salve mano";

console.log (kkkk.indexOf('mano'));

let yay = kkkk.substring(5, 10);

console.log (yay);

let amem = kkkk.replace('mano', 'amem');

console.log(amem.charAt(6) + ' ' + amem);

let numero = 2313.231223;

numero.toFixed(4);

console.log(numero);

let array = ['tazts', 'eodas', 'fiuans'];

console.log(array.toString());

let array2 = ['lpslad', 'difasd', 'ucnau'];

let array3 = array.concat(array2);

console.log(array3);

array3.sort();

array3.splice(-1, 1);

console.log(array3);

let vasco = [2,65,12,86];

let vasco2 = vasco.map(function(item) {
    return item * 2;
})

console.log(vasco2);

let vasco3 = [
    {id:1, nome:'santriga'},
    {id:2, nome:'sasdsdfvs'},
    {id:3, nome:'mauwdoa'},
];

let vasco4 = vasco3.find(function (item) {
    return (item.id == 3) ? true : false;
});

console.log(vasco4);