import React, { useRef} from "react";

interface IProps {
    onAdd(title:string):void
}


const ToDoComponent: React.FC<IProps> = (props) => {
    // const [title, setTitle] = useState('');
    const ref = useRef<HTMLInputElement>(null);
    // const ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)

const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
        props.onAdd(ref.current!.value);
        console.log(ref.current!.value)
        ref.current!.value=""
    }
}
return (
    <div className='input-field'>
        <input
            // value={title}
            //    onChange={ChangeHandler}
            ref={ref}
            onKeyPress={keyPressHandler}
            type='text'
            id="title"
            placeholder="Введите дело, что нужно сделать"/>
        <label htmlFor="title" className="active">
            Дело
        </label>
    </div>
)
}
export default ToDoComponent;