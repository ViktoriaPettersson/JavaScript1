// If-statement 
// En if-sats är till för att kolla om ett påstående är sant eller falskt.

// if, else if, else
// (compare statement) ? true-actions : false-actions

/* 

bad practise
--------------------
if
else if
else if
else if
else if
else if
else

good practise
--------------------
if 
else if
else

if
else
--------------------
==      lika med
<       mindre än
>       större än
!=      inte lika med
<=      mindre eller lika med
>=      större eller lika med
&&      och
||      eller
!       inte lika med

===     lika med och jämför samma datatyp
&&&     

*/

/* var employees = [
    { firstname: 'Tori', lastname: 'Pettersson', age: 23},
    { firstname: 'Viktoria', lastname: 'Andersson', age: 33},
    { firstname: 'Becko', lastname: 'Södergren', age: 26},
    { firstname: 'Erik', lastname: 'Petsson', age: 13},
    { firstname: 'Cece', lastname: 'Pettersson', age: 22},
] */

//förenklad form

/* if (1 == 1) 
    console.log(true)

else 
    console.log(false); */

//Mer förenklad. Man behöver avsluta den tidigare med ; för att den under ska skrivas ut 
/* 
(1 == 1) ? console.log(true) : console.log(false) */

// generarar samma som den ovan trots att den ena är ett tal och den andra är text. Dock är det fortfarande icke-sant påstående.
// Ifall man väljer !== (inte sant) så blir svaret true
/* if(1 == '1') {
    console.log(true)
}
else {
    console.log(false)
}

//blir falskt med ===
if(1 === '1')
{
    console.log(true)
}
else {
    console.log(false)
}

if(1 === 1 || 1 < 2)
{
    console.log(true)
}
else{
    console.log(false)
}

let sorted = []
let letter = '';

employees.forEach(person => {
   
    let index = 0;
    const {firstname, lastname} = person */

    //hämta ett tecken
    // console.log(firstname[0])

/*     if(sorted.length === 0)
        {
        letter.push(firstname[0]);
        letter.sort();
        }
  

    index = letter.indexOf(firstname[0])
    console.log(index)

    sorted.splice(index, 0, person) */
    //Kan hämta flera tecken
    /* console.log(firstname.substring(0,1)) 
}) */

/* console.log(sorted) */

// Nästlade if-satser
// dålig lösning - ett bättre sätt är att använda en switch

/* let value = 5;

if(value === 1) { console.log('Värdet är ett'); }
else if(value === 2) { console.log('Värdet är två'); }
else if(value === 3) { console.log('Värdet är tre'); }
else if(value === 4) { console.log('Värdet är fyra'); }
else if(value === 5) { console.log('Värdet är fem'); }
else {} */

// switch, funger inte i alla lägen. När det går att jämflra lika med värden så fungerar den bra

/* let value = 4;

switch(value) {
    case 1: {console.log('Värdet är ett'); break; }
    case 2: {console.log('Värdet är två'); break; }
    case 3: {console.log('Värdet är tre'); break; }
    case 4: {console.log('Värdet är fyra'); break; }
    case 5: {console.log('Värdet är fem'); break; }

    default: { console.log('värdet finns inte i switchen'); break; }
}
 */

// LOOPAR

/* let names = ["hej", "detta", "är", "en", "array"]; */
//foreach för arrayer

//FOR OF. Loopar ALLT som finns i listan. Kallas forEach i andra språk

/* 
  for (let item of fooditems)

*/

// ForEach. Loopar igenom en array.

/* 

    fooditems.forEach(value => {

    })

*/

//for-loop loopa något ett givet antal gånger. i kan vara vad som helst, en variabel som oftast är 0. 
// Så länge i är mindre än 10 så ska den lägga på en och när den kommer upp til 10 så avslutas loopen

/* for (let i=0; i < names.length; i++) {
    console.log(names[i])
} */

//While. Så länge något är på ett visst sätt så vill vi att det ska vara på det här sättet.

/* 
let index= 0;

while (index < names.length) {
    console.log(names[index])
    index++;
}
*/

//do while - kommer göra actions minst en gång

/* let index = 0;
do {
    console.log(names[index])
    index++;
} while(index < names.length) */

/* 
NÄR SKA JAG GÖRA VAD

while/do-while vill vi använda till ett visst tillstånd är uppnåt.

    Är jag uppkopplad? Nej, okej då försöker jag
    koppla upp mig. Så länge det är true gör detta : så länge det är för varm, kör fläkten.

for-of när vi vill loopa igenom alla objekt oavsett hur många det än är. Som i en array eller liknande

forEach när vi vill loopa igenom alla värden i en array

for när vi vill loopa ett givet/visst antal gånger såsåom de 10 sista meddelanden

*/

// Methods

/* let na = []
na.push();

let user = {
    fullName: function() {
        return ''
    }
}
user.fullName() */

//funktioner -till för att underlätta och slippa repetera sig

/* function calc(num1, num2) {
    let sum = num1 + num2
    console.log(sum)
}

calc(1,1)
calc(5,5)
 */

// olika ätt att skriva funktioner, första är gamla och andra är det nya sättet att skriva
/*  function funk1() {
     console.log('function')

 }
 const funk2 = () => {
    console.log('arrow-function')
 }

 funk1()
 funk2() */

 // funktioner med parametrar

 /* function funk1(firstname, lastname) {
let fullname = `${firstname} ${lastname}`
    console.log(fullname)

}
const funk2 = (firstname, lastname = 'Larsson') => {
    let _fullname = `${firstname} ${lastname}`
    console.log(_fullname)
}

let outside = 1 
const dispalyfooditemWithParameters1 = (value) => {
    value += 10
    console.log('inside' + value)
}

funk1("Tori", "Pettersson")
funk2("Hans") */

// Förenkla arrow-function
/* 
const funk6 = namn => {
    console.log(namn)
}
const funk3 = namn => console.log(namn);
const funk5 = () => console.log("hejsan")
 */

 // Självkörande funktion som startar sig själv
/*  function run() {
     console.log("running")
 }(); 
 */

 // callback functions, funktion i en funktion
/*  const funk1 = (callback) => {
    let value = "hej"
    callback(value);
 }

funk1(value => {
    console.log(value)
});
 */

