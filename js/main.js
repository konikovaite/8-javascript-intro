// skaiciai - number
const PI = 3.141592654;
const nulis = 0;

console.log(PI);
console.log(nulis);



// tekstai - string
const vardas = 'Simona';
let suo = "Aviganis";
console.log(suo);

suo = 'Coli';
console.log(suo);


// logines reiksmes - boolean
const tiesa = true;
const melas = false;

// sarasas - array
const skaiciai = [1, 2, 3, 4];
let abc = ['a', 'b', 'c', 'd', 'e'];
console.log(abc);


var kintamasis = 'as kintu :)';


const mixlist = [1, 'antras', 3, 'forth', [6, 'seven']];
console.log(mixlist);

// Object - objektai
const zmogus = {
    name: 'Simona',
    surname: "Konikovaite",
    age: 1
}

console.log(zmogus);

//-----------------veiksmai----------------------
console.log('------------------------------------------------');
console.log('-----------VEIKSMAI SU KINTAMAISIAIS------------');
console.log('------------------------------------------------');

const s1 = 5;
const s2 = 10;

const suma = s1 + s2;
console.log(suma);
console.log(s1 + s2);
console.log(s1 - s2);
console.log(s1 / s2);
console.log(s1 * s2);

const vidurkis = (s1 + s2) / 2;
console.log(vidurkis);

const vidurkiosaknis = Math.sqrt(vidurkis);
console.log(vidurkiosaknis);

const t1 = 'Labas';
const t2 = 'rytas';
const pasisveikinimas = t1 + t2;
console.log(pasisveikinimas);

const gerasPasisveikinimas = t1 + ' ' + t2;
console.log(gerasPasisveikinimas);

const numbers = [1, 2, 3, 4, 5, [55, 87]];
console.log(numbers);
console.log(numbers[2]);
console.log(numbers[5]);
console.log(numbers[5][1]);

const alter = numbers[0] - numbers[1] + numbers[2] - numbers[3]
console.log(alter);


//--------------------------------------------------------------
console.log('------------------------------------------------');
console.log('-----------KINTAMUJU PALYGINIMAS----------------');
console.log('------------------------------------------------');

const a = 6;
const b = 5;

if(a>b){
    console.log('ok');
}
else console.log('ne'); 

const m = -5;

if(m > 5){
    console.log('daugiau');
}
else {
    console.log('tas kitas');
}

if(m > 0){
    console.log('Teigiamas');
}
else if(m < 0) {
    console.log('Neigiamas');
     }
     else     console.log('skaicius yra 0');


const akys = 'rudos';

if (akys == 'melynos') {
    console.log('aha');
}
else console.log('nop');

const a1 = 'aa';
const a2 = 'b';

// >, <, ==, ===, >=, <=, !==
// nevartotini: ==, != 
if (a1 > a2){
    console.log( true );
} else {
    console.log( false );
    }

    
//-------------------------------SWITCH------------------------
// key - ka jus tikrinate
// value - kam lygu
// po value - ka spausdinam
// break - sustabdo jei randa tinkama atsakyma

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
switch (akys) {
    case'melynos':
        console.log('melynos');
        break;
    case'zalios':
        console.log('zalios');
        break;
    case'rudos':
        console.log('rudos');
        break;
    default:
        console.log('be akiu');
        break;
}




//--------------------------------------------------------------
console.log('------------------------------------------------');
console.log('---------------------CIKLAI---------------------');
console.log('------------------------------------------------');


for (let i=0; i<5; i++) {
    console.log(i, 'labas');
}
for (let i=0; i<1; i++) {
    console.log(i, 'labas');
}


let nuo = 0;
let iki = 4;
let nuoIKIsuma= 0;

for(let i=nuo; i <= iki; i++){
    console.log('sumuoju skaiciu: ', i);
    nuoIKIsuma = nuoIKIsuma + i;
}
console.log('Suma nuo ' + nuo + ' iki ' + iki + ' yra lygi ' + nuoIKIsuma + '.');



console.log('------------------------------------------------');

const paz = [10, 8, 2, 4, 7, 5, 8];
console.log(paz[4]);

console.log('------------------------------------------------');
for(let i=0; i<paz.length; i++){
    console.log(paz[i]);
}

console.log('masyvo ilgis: ' + paz.length);

console.log('------------------------------------------------');

const zodis = 'labas rytas';

for(let i=0; i<zodis.length; i++){
    if (zodis[i] !== ' ') {
        console.log(zodis[i]);
    }
}

console.log('------------------------------------------------');

const atbulas = 'Atbuliaiva';

for(let i=atbulas.length-1; i>=0; i--){
        console.log(atbulas[i]);
}
console.log('------------------------------------------------');
for(let i=0; i<atbulas.length; i++){
    console.log(atbulas[atbulas.length - i-1]);
}

console.log('------------------------------------------------');
for(let i=1; i<atbulas.length+1; i++){
    console.log(atbulas[atbulas.length - i]);
}

//--------------------------------------------------------------
console.log('------------------------------------------------');
console.log('-----------------SUMAVIMAS CIKLE----------------');
console.log('------------------------------------------------');

nuo = -18;
iki = 18;
let daliklis = 3;
let kartai = 0;

for(let i=nuo; i<iki; i++){
    console.log(i, daliklis, i/3);
    if(i % daliklis === 0){
        kartai++;
    }
}

console.log('Skaičių intervale tarp ' + nuo + ' ir ' + iki + ', besidalinančių be liekanos iš ' + daliklis + ' yra ' + kartai + ' vienetai.');


//--------------------------------------------------------------
console.log('------------------------------------------------');
console.log('-------------------FUNKCIJOS--------------------');
console.log('------------------------------------------------');

function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());

console.log('------------------------------------------------');


function sumavimas(pirmas, antras) {  // duodam du skaicius
    sum = pirmas + antras;            // liepiam juos susumuoti
    return sum;                       // isimam suma
}
console.log(sumavimas(11, 5));        // pasakom su kokiais skaiciais turi suveikti musu funkcija

console.log('------------------------------------------------');

function daugyba(pirmas, antras) {
    // patikrinti ar skaiciai ok
    // if (typeof(pirmas) !== 'number' && typeof(antras) !== 'number'){  // && ir
    //     return 'abi duotos reiksmes netinkamo tipo';
    // }
    // if (typeof(pirmas) !== 'number'){
    //     return 'ivesta ne skaicius';
    // }
    // if (typeof(antras) !== 'number'){
    //     return 'ivesta ne skaicius';
    // }
    const pirmotipas = typeof(pirmas);
    const antrotipas = typeof(antras); 
    
    // priciumpame skirtingus tipus (ne skaicius)
    if ( pirmotipas !== 'number' && antrotipas !== 'number'){
        return 'abi duotos reiksmes netinkamo tipo';
    }
    if (pirmotipas !== 'number'){
        return 'ivesta ne skaicius';
    }
    if (antrotipas !== 'number'){
        return 'ivesta ne skaicius';
    }
    // ar skaicius tikras
    if (''+pirmas === 'NaN' || ''+antras === 'NaN'){
        return 'Ivestas netinkamas skaicius';
    }
    // mum nereikia bagalybiu
    if(pirmas === Infinity || antras === Infinity){
        return 'nevesk begalybes'
    }

    // jei nesvarbu kas jis NaN ar Infinity
    if( isFinite(pirmas) === false || isFinite(antras) === false){
        return 'bent vienas yra netinkamas';
    }

    // jei viskas ok tai skaiciuojam
    daug = pirmas * antras;
    return daug;
}
console.log('daugybos ats: ', daugyba(8, 8) );


console.log('------------------------------------------------');

let spalva = 'zalia';
if(spalva === 'ruda' || spalva === 'zalia' || spalva === 'melyna'){  // || arba
    console.log('tavo spalva gera');
} else {
    console.log('tavo spalva bloga');
    
}

//--------------------------------------------------------------
console.log('------------------------------------------------');
console.log('----------SKAITMENU SKAICIUS SKAICIUJE----------');
console.log('------------------------------------------------');

function skaitmenuKiekisSkaiciuje(skaicius) {
    // patikrinimai
    // ar skaicius
    if(typeof(skaicius) !== 'number' || isNaN(skaicius) === true ){
        return 'ne skaicius';
    }
    // jei viskas ok
    const skaiciustekstu = ''+skaicius;
    let ilgis = skaiciustekstu.length;

    // pasitikslinimas ar turi taska, kableli
    if(skaiciustekstu.indexOf('.') >= 0){       // klausiam ar yra taskas . (daugiau arba
                                                // lygu uz 0, nes tikrinam kokia jo vieta, 
                                                // jei jo nera tai jo vieta buna -1)
        ilgis--;
    }
    // iskom tasko su liekana
    if (skaicius % 1 !== 0){   // jei yra liekana tai yra taskas
        ilgis--;
    }

    // jei turi minusa
    if (skaicius < 0){
        ilgis--;
    }
    return ilgis;
}

console.log( skaitmenuKiekisSkaiciuje( 0.00000000001) );

//--------------------------------------------------------------
console.log('------------------------------------------------');
console.log('----------didziausias skaicius sarase-----------');
console.log('------------------------------------------------');

function didziausiasSkaiciusSarase( list ) {
    // patikrinimas
    if (Array.isArray(list) === false){                // suzinom ar tai masyvas
        return 'Netinkamo tipo reiksme';
    }
    if (list.length === 0){
        return 'Pateiktas sarasas negali buti tuscias';
    }

    let max = -Infinity;

    for( let i = 0; i < list.length; i++){
        if (typeof(list[i]) !== 'number' || isFinite(list[i]) === false){
            continue;                              // leidzia testi
        }
        if (list[i] > max){
            max = list[i];
        }
    }
    if (max === -Infinity){
        return 'Sarase nebuvo skaisiu ;(';
    }
        return max;
}
console.log(didziausiasSkaiciusSarase( ['a', -5, 8, 15, -4] ) );
console.log(didziausiasSkaiciusSarase( [4, -5, 8, 'asd', -4] ) );
console.log(didziausiasSkaiciusSarase( ['a', 'b', 'c'] ) );




