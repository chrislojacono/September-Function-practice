const BestInShow = (type) => {
    if(type === 'meow'){
        return 'I like Cats'
    }
    else{
    return `My Favorite Breed of dog is ${type}.`
    }
}
const dogType = BestInShow('poodle');

