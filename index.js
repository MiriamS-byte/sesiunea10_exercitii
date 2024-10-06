const fructe = ["mar", "portocala"];
const legume = ["morcov", "broccoli"];
const alimente = fructe.concat(legume);
console.log(alimente);

fructe.push("banana");
console.log(fructe);

const indexOfStruguri = fructe.indexOf("struguri");
console.log(indexOfStruguri);


let dateNow = new Date();
let yearNow = dateNow.getFullYear();
console.log(yearNow);
dateNow.setDate(dateNow.getDate() + 5)
console.log(dateNow);

let otherDate = new Date("2024-10-12");
let milisecDiference = otherDate - dateNow;
console.log(milisecDiference, "milisecunde");

let myPerson = {
        name: "Miriam",
        age: 40,
        town: "Timisoara"
    }

console.log(myPerson);
myPerson.name = "Roxana";
myPerson.age = 41;
console.log(myPerson);


let carti = [
    {
    titlu: "Carte1",
    autor: "Autor1",
    anPublicare: 2000,
    },
    {
    titlu: "Carte2",
    autor: "Autor2",
    anPublicare: 1995,
    }

]
console.log(carti);
carti.push({titlu: "Carte3", autor: "Autor3", anPublicare: 2024});
console.log(carti);


