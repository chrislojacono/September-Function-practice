const BestInShow = (type) => {
    if(type === 'meow'){
        return 'I like Cats'
    }
    else{
    return `My Favorite Breed of dog is ${type}.`
    }
}
const dogType = BestInShow('poodle');

const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7

    return ageInDogYears
}

const dogAge = calculateAgeInDogYears(22)


const add = (a, b, c) => {
    return a + b + c

}
console.log(add(22, 34, 57))

const go = (direction, speed) => {
    if(speed > 75){
        return `The car is moving ${direction} at ${speed}mph. SLOW DOWN!!` 
    }
    else{
    return `The car is moving ${direction} at ${speed}mph`
    }
}
const nums = [22, 13, 16, 53, 36, 73]
const evenOrOdd = (num) =>{
    if(num % 2 === 0){
        return 'Even'
    }
    else{
        return 'Odd'
    }
}
const loop = (num) =>{
    let output = ''
    for(let i = 0; i < nums.length; i++){
       output = evenOrOdd(num[i])
       return output
    }
    
}

const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]
const startsWithK = words.filter((word) => word.startsWith("k"));

const joiner = (array) => array.join(', ')

const fisherman = () => {
    const random = Math.random() * 100
    let caught = '';
    if(random <= 33){
      caught = 'Sven hooked a tuna!  :)'  
    }
    else{
        caught = 'Sven came up empty-handed.  :('
    }
    return caught
}

const orderMeal = (sandwich, side, drink, dessert) => {
    let orderObject = {
        "sandwich": sandwich,
        "side": side,
        "drink": drink,
        "dessert": dessert
    }
    return orderObject
}

const timesFive = number => number * 8
 

const square = number => number * number


const bigify = (number, operationFunction) => {
    const result = operationFunction(number)
    return result
}

const objectParam = {
    firstName: "Donald",
    lastName: "McLelland"
}

const chore1 = () => 'took out the trash'
const chore2 = () => 'washed the dishes'
const chore3 = () => 'made his bed'
const chore4 = () => 'cokked dinner'
const chore5 = () => 'cleaned the bathroom'
const chore6 = () => 'mowed the yard'
const choreBoy = (obj, chore) => {
   return  `${obj.firstName} ${obj.lastName} ${chore}`
 }

const lazyDay = (chore, person, day) => `${person.firstName} ${person.lastName} ${chore} on ${day}`

const dayPlanner = (chore1, chore2, chore3, person, day) => `On ${day} ${person.firstName} ${person.lastName} ${chore1}, and ${person.firstName} ${person.lastName} ${chore2}, and ${person.firstName} ${person.lastName} ${chore3}.`