type ListProps = {
  list: string[];
  deleteHandler: (id: string) => void;
};

const FieldParamsList = ({ list, deleteHandler }: ListProps) => {
  const onDelete = (value: string) => {
    deleteHandler(value);
  };
  return (
    <div
      className={`w-full h-fit flex gap-1 flex-wrap ${
        list.length ? "p-2" : ""
      }`}
    >
      {list.map((item, index) => (
        <div
          key={index}
          className={`h-fit w-fit px-2 py-1 rounded-full  flex items-center gap-1 border shadow-sm`}
        >
          <p className=" text-xs">{item}</p>
          <img
            className="size-2.5"
            src="/delete.svg"
            onClick={() => onDelete(item)}
          />
        </div>
      ))}
    </div>
  );
};

export default FieldParamsList;
