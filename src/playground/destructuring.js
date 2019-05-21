// Object Destructuring
/* 
const person = {
    name: 'Peter',
    age: 25,
    location: {
        city: 'England',
        temp: 42
    }
};

const {name: firstName = 'Anonymous', age} = person;
//const name = person.name;
//const age = person.age;

console.log(`${firstName} is ${age}.`);

const {city, temp: temperature } = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}.`);
}
 */

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);


// Array Destructuring
const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

//const city = address[1];
//const state = address[2];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const item2 = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, ,mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}.`)
const [itemName2, ,mediumPrice2] = item2;
console.log(`A medium ${itemName2} costs ${mediumPrice2}.`)