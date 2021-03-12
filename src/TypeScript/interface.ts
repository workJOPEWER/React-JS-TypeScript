//тип который служит для объектом или классов,
// где мы указываем поля, функции и элементы должны присутствовать
//не компилируются только на этапе разработки

interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '12345',
    size: {
        width: 10,
        height: 5
    }
}

// можно переопределить данные
rect2.color = 'black'
// rect2.id = '3232' - ошибка. рид онли.

//указываем к какому типу относится объект
const rect3 = {} as Rect
const rect4 = <Rect>{}

// Наследование интерфейсов

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

//Взаимодействие с классами

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

//объект с большим количеством динамических ключей

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}