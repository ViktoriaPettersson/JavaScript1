// 
/* multi line comment = shift alt a */
// Console = använd för felsökning i utvecklingsmiljö

console.log("Här loggar vi");
console.warn(".warn() = varningstext");
console.error("felmeddelande");

// document.body.innerText = "Detta är en innerText";
// document.body.innerHTML = "<h1>Detta är en innerHTML<h1>";
// document.getElementById('results').innerHTML = "Detta är resultatet";

// console.log(document.getElementById('results').innerText);

// document.getElementsByTagName('div')
// console.log(document.getElementsByTagName('div'))

// document.getElementsByClassName('box');
// console.log(document.getElementsByClassName('box')[2].innerHTML)

// document.getElementsByName('firstname')
// console.log(document.getElementsByName('firstname')[0].value)

// document.querySelector('box')
// console.log(document.querySelector('.box'))

// document.querySelectorAll('.box')
// console.log(document.querySelectorAll('.box'))

/* 

data types

variabel = nått vi lagrar infromation i

string          = text
number          = heltal, decimaltal
boolean         = true/false
null            = totalt tomt
undified        = odefinerat värde
object          = ett object/klass som innehåller ett eller fler värden
array           = en lista med värden

camelCase       = Javascript, Java, C, C++
pascal          = c#, pascal, turbo pascal 
_private        = en variabel som bara finns just nu

ex camalCase = firstName, lastName, email, postalCode, city osv
*/

/* Deklarera variabler

*/

// name = "viktoria"
// var name = "viktoria"
// let name = "viktoria"
// const name = "viktoria"

name = "viktoria"   //Global deklarering. Inte bra
var name = "viktoria" //Global deklarering. Inte bra

let firstName = "viktoria"   //Lokal deklarering (Gör detta)
firstName = "tori"
const lastName = "pettersson"; //Kan inte deklarera något nytt. Den är konstant

console.log(firstName)
console.log(lastName)

/* String

*/

name = "Tori"
name = 'tori'
name = `tori`       // shift +


texten = `jag är "bäst" i 'hela' världen`
text = `Jag heter ${name}`
console.log(text)

console.log(texten.length)
console.log(texten.indexOf("är"))
console.log(texten.replace("bäst","grymast"))
console.log(texten.toUpperCase(""))
console.log(texten.concat(" trallala ",texten))
console.log(texten.trim())


// Number

let num = 1;

console.log(num)

/* 
   + lägg till
   - ta bort
   x gångra
   / dela
   % division remainder 
   ++ öka med 1
   -- minska med 1

   = lika med
   += lägg till
   -= ta bort från
   x= gångra och lägg till
   /= dela och lägg till
   %= division remainder 

*/

// Boolean 

let status = true
console.log(status)

// Null och Underfined
// Null har inget värde, har ingen datatyp
// Men i Js är samma sak som ett tomt object

