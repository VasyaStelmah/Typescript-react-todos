import React, { useRef } from "react";
interface TodoFormProps {
  onAdd(title: string): void;
}

export const Form: React.FunctionComponent<TodoFormProps> = (props) => {
  //   const [title,setTitle] = useState<string>('');
  //   const changeHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
  //       setTitle(event.target.value)
  //   }

  const ref = useRef<HTMLInputElement>(null);
  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      console.log(ref.current!);
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
      // console.log(title)
      // setTitle('')
    }
  };
  return (
    <div className="input-field mt2">
      <input
        ref={ref}
        onKeyPress={keyPressHandler}
        // onChange={changeHandler}
        // value={title}
        type="text"
        id="title"
        placeholder="Enter item"
      />
      <label htmlFor="title" className="active">
        Enter item
      </label>
    </div>
  );
};
