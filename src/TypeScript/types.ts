//tsc ...\types.ts
//node ...\types.ts ->install current version

const isFetching: boolean = true;
const isLoading: boolean = false;

//примитивный тип числа
const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

//строка
const message: string = 'Hello Typescript';

//массивы
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ['Hello', 'Typescript'];

// Tuple -массив из разных типов данных
const contact: [string, number] = ['apple', 12345];

// Any
let variable: any = 42;
// ...any помогает перезаписать тип
variable = 'New String';
variable = [];

// void - функция ничего не вернет
function sayMyName(name: string): void {
    console.log(name)
}

sayMyName('Хайзенберг');

// Never -  используется когда функция :
// 1, возращает ошибку и никогда не заканчивается
function throwError(message: string): never {
    throw new Error(message)
}

// 2, функция зациклилась
function infinite(): never {
    while (true) {

    }
}

// Type
// создаем примитивные типы и для них элиасы
type Login = string

const login: Login = 'admin'
// const login2: Login = 2


//потенциально различные типы данные для одной переменной
type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'
// const id3: ID = true

//типы null и undefined
type SomeType = string | null | undefined