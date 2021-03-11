import React, {useRef} from 'react';

//входящие свойства в компонент
interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    //обрабатываем состояние input и изменяем локальный стейт

    // // const [title, setTitle] = useState('')
    // const [title, setTitle] = useState<string>('')

    const ref = useRef<HTMLInputElement>(null)

    // //обрабатываем событие
    // //event тип ChangeEvent-> тип HTMLInputElement
    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }
    //обрабатываем нажатие клавиши enter
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value) //all ok
            ref.current!.value = ''
            // console.log(title)
            // setTitle('')
        }
    }

    return (
        <div className="input-field mt2">
            <input
                // onChange={changeHandler}
                // value={title}
                ref={ref}
                type="text"
                id="title"
                placeholder="Введите название дела"
                onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className="active">
                Введите название дела
            </label>
        </div>
    )
}