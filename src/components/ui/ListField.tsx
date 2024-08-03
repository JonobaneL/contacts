import { useState } from "react";
import FieldParamsList from "./FIeldParamsList";

type FieldProps = {
  validation?: (value: string) => boolean;
  list: string[];
  setList: (value: string[]) => void;
};

const ListField = ({ list, setList }: FieldProps) => {
  const [content, setContent] = useState("");
  const addParam = (value: string) => {
    if (value.length > 0 && !list.includes(value)) setList([...list, value]);
  };
  const onChange = (value: string) => {
    setContent(value);
    if (value.includes(" ")) {
      const tempValue = value.split(" ");
      addParam(tempValue[0]);
      setContent("");
    }
  };
  const onBlur = (value: string) => {
    if (value) {
      addParam(value);
      setContent("");
    }
  };
  const deleteHandler = (value: string) => {
    setList(list.filter((item) => item != value));
  };
  const isListValid = true;
  return (
    <div
      className={`border w-full max-w-[30rem] h-fit border-input bg-transparent  text-sm shadow-sm transition-colors rounded-md has-[:focus]:ring-1 has-[:focus]:ring-primary ${
        isListValid ? "" : "ring-1 ring-red-600"
      }`}
    >
      <FieldParamsList list={list} deleteHandler={deleteHandler} />
      <input
        type="text"
        className="text-sm w-full h-9 px-2 py-1 bg-transparent outline-none"
        placeholder="Enter one or more tags"
        value={content}
        onChange={(e) => onChange(e.target.value)}
        onBlur={(e) => onBlur(e.target.value)}
      />
    </div>
  );
};

export default ListField;
