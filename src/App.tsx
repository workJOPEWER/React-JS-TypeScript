import React, {useState} from 'react';
import {Navbar} from './components/Navbar';
import {TodoForm} from './components/TodoForm';
import {TodoList} from './components/TodoList';
import {ITodo} from "./interfaces";

const App: React.FC = () => {
    //<never> по умолчанию
    const [todos, setTodos] = useState<ITodo[]>([])

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        }

        const toogleHandler = (id: number) => {}

        const removeHandler = (id: number) => {}

        //перетираем стейт/нет гарантии что это будет предыдущее состояние
        // setTodos([newTodo, ...todos])

        setTodos(prev => [newTodo, ...prev])
    }

    return <>
        <Navbar/>
        <div className={'container'}>

            {/*react*/}
            {/*<TodoForm onAdd={addHandler}/>*/}
            <TodoForm onAdd={addHandler}/>

            <TodoList todos={todos} />
        </div>
    </>

}

export default App;
