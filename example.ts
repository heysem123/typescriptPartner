type hero = {
  name: string
  superPower: string
  age: number
}
type villan = hero & {
  badExp: string
}

const villanArray: villan[] = []
villanArray.push({name:"hero",age:10,superPower:"bad",badExp:"exp"});