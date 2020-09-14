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

console.log(loop(nums))

console.log(evenOrOdd(33))