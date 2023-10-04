const person = (name, age) => {
  const sayHi = () => console.log(`Hi. I'm ${name}`)
  const sayAge = () => console.log(`I'm ${age} years old`)
  return {
    name,
    age,
    sayHi,
    sayAge,
  }
}

const john = person('John', 30)
const greeting = john.sayHi() // Hi. I'm John
