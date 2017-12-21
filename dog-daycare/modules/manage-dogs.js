var dogList = [];
function createDog(name) {
  const Dog = new Dog(name);
  console.log(`Dog ${Dog.name} created and added to dog list`);
}
function removeDog(name) {
let index = dogList.indexOf[name];
if (index >= 0) {
  dogList.splice(index, 1)
} else {
  console.log('Invalid index: the list number of the dog you were trying to find was not greater than or equal to zero')
}
}
function signIn(dog) {
  // TODO: add sign in function
}
// TODO: add sign out function