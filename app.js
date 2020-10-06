
const fs = require('fs');

const firstNameMale = ['Charles', 'Scott', 'Robert', 'Warren', 'Henry', 'Alexander', 'Kevin']

const firstNameFemale = ['Jean', 'Lorna', 'Suzanne', 'Ororo', 'Katherine', 'Anna', 'Elizabeth']

const lastName = ['Xavier', 'Summers', 'Drake', 'Worthington', 'McCoy', 'Grey', 'Dane', 'Chan']

const gender = ['M', 'F']

const randChoice = arr => Math.floor(Math.random() * (arr.length));

let people = [];

const createPerson = () => {

  for (let i = 0; i <= 20; i++) {
    let person = {};

    person.gender = gender[randChoice(gender)];

    person.firstName = (person.gender === 'M') ?
      firstNameMale[randChoice(firstNameMale)] :
      firstNameFemale[randChoice(firstNameFemale)];

    person.lastName = lastName[randChoice(lastName)];

    person.age = Math.floor(Math.random() * (78 - 18 + 1)) + 18;

    people.push(person);
  }

  return people;
};

let data = createPerson();

data = JSON.stringify(data);

fs.writeFile('people.json', data, (err) => {
  if (err) {
    console.log('Something went wrong');
    throw err;
  }
  console.log('File has been successfully generated! Check people.json');
});

