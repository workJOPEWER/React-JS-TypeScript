interface Person {
    name: string
    age: number
}

//тип на основе interface
//keyof — предоставляет доступ ко всем именам свойств в структурном типе данных, -
//- а именно к типу T. Keyof похож на Object.keys

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // 'name' | 'email'


let u1: UserKeysNoMeta1 = 'name'
// u1 = '_id' // только 'name' | 'email'