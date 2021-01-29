
// DATA TYPES
// Object - innehåller ett eller flera värden

// Används för klasser, objekt och json
// Använder sig av key:value pairs

// JS object 1

/* var person = {
    firstName: "Viktoria",
    lastName: "Pettersson",
} */

// JS object 2 (ser ut som JSON och strukturerar upp på samma sätt men kan ej parsa)

/* var person = {
    "firstName": "Viktoria",
    "lastName": "Pettersson",   
} */

//JSON Object

/* var json = '{ "firsName": "Viktoria", "lastName": "Pettersson"}'
var person = JSON.parse(json)
console.log(person) */

//Convert to json

// var json = JSON.stringify(person)
// console.log(json)

/* var person = {
    firstName: 'Viktoria',
    lastName: 'Pettersson',
    age: 23,
    face: {
        hair: 'brunt',
        eyes: 'brun'
    },
    height: 162,
    fullName: function() {
        return `${this.firstName} ${this.firstName}`
        //This refererar till ens egna objekt. Ex vems förnamn ska sägas, mitt eller någon annans. Jo mitt.
    },
    favocolors: ["pink", "blue", "green"]
} */

// //Hämta information

/* person.firstName
console.log(person.face.eyes)

person['firstName']
console.log(person['firstName'])
console.log(person.height)

let firstName = person.firstName
let lastName = person['lastName']
console.log(firstName)
console.log(lastName) */

//destructing objects

/* let {firstName: fName, lastName: lName} = person
console.log(fName)
console.log(lName) */

//functions in js objects

/* person.fullName()
console.log(person.fullName) */

// Arrays. deklarerar med plural-namn. klassas som ett object

/* const names = ['Tori']
names[0] = "Vickan"

console.log(names)
const person = {
    firstName: "tori"
}
person.firstName = "vickan"
console.log(person.firstName)

const names = ['Tori', 'Erik','Becko']
console.log(names)
console.log(names.length)
console.log(names.indexOf("Tori")) 

const multiarray = ['text', 12, true] */

//dett är inte rekomenderat(att blanda olika typer)

/* const objectarray = [
    {firstname: 'Tori', age: 23, status: true},
    {firstname: 'vickan', age: 43, status: true},
    {firstname: 'sockie', age: 13, status: true}
]
const numberarray = [1,2,3,4,5]

console.log(objectarray[1])
console.log(multiarray[1])
console.log(numberarray[1])
// Loopa igenom arrayer 
objectarray.forEach(function(value,index){
    console.log(value.firstname, index)
}) */

/* let names = [1,2,3] */
// unshift Lägger till värdet i början av en array
/* names.unshift(10) */
// shift -tar bort första värdet i en array
/* names.shift() */
// .push() -lägger till i slutet av en array
/* names.push(20) */
// pop tar bort sista värdet
/* names.pop() */

//Sort sorterar i rätt a-z ordning
/* let names = ["Anna","Benny","Cece"] */
// Sorterar
/* names.sort() */

// Vänder på ordningen
/* names.reverse() */

//Nästla
/* names 
.sort()
.reverse()
.push('e') */

// delete - tar bort ett värde från en specifik position
/* delete names[1] */

//spicle -tar bort/lägg till ett värde från en specifik position
// Första säger. Jag vill starta på position 2, inte ta bort, och lägga till z
/* names.splice(2, 0, "z")
 */
//Andra tar bort
/* names.splice(1, 1) */

//indexOf() - hittar ett specifikt inde av ett värde
/* name.indexOf("Anna")
console.log(names.indexOf("Anna"))

delete.names[names.indexOf("Anna")] */

//lenght - hur många värden innehåller arrayen
/* console.log(names.length) */

// foreach - loopar igenom hela arrayen
//Skapa ett namn som symboliserar värdet

/* names.forEach(function(name,index){
    // console.log(name)
    console.log(index, name)
}) */

//förenkla
/* names.forEach((name,index) => {
    console.log(index, name)
}) */
// // Förenkla ännu mer
/* names.forEach(name => console.log(name)) */

// for-loop
/* for(var i=0; < names.length; i++) {
    console.log(names[i]);
} */

// MAP - för att mappa något
/* let people = [
   { firstname: "hans", lastname: "mattin"},
   { firstname: "anna", lastname: "nyman"},
   { firstname: "tommy", lastname: "lassei"},
   { firstname: "anders", lastname: "andersson"}
]
let firstnames = people.map(person => {
    return person.firstname
})
console.log(firstnames) */
// //filter - filtrera saker
/* let specificpeople = people.filter(person => {
    return person.lastname == "mattin"
})
console.log(specificpeople) */
// //reduce
