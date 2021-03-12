
//базовый пример

class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}

// class Car {
//   readonly model: string
//   readonly numberOfWheels: number = 4
//
//   constructor(theModel: string) {
//     this.model = theModel //перезаписать только в конструкторе
//   }
// }

//принимает в конструктор значение записываем в поле.
// короткая запись выше
class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {}
}

// модификаторы:
// protected -> класс и наследники. У инстанса (объекта) нет доступа.
// private -> только в классе
// public -> публичные данные

class Animal {
    protected voice: string = ''
    public color: string = 'black'

    constructor() {
        this.go()
    }

    private go() {
        console.log('Go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat() //инстанса
cat.setVoice('test')
console.log(cat.color)
// cat.voice

// абстрактные классы
//этап разработки
//наследование
//tsc некомпелируется

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render')
    }

    info(): string {
        return 'This is info';
    }
}