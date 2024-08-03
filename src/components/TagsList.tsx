import { TagParam } from "@/models/contactType";

type ListProps = {
  tags: TagParam[];
};

const TagsList = ({ tags }: ListProps) => {
  return (
    <div className="flex flex-wrap gap-1 mt-2">
      {tags.map((item) => (
        <div
          key={item.id}
          className="h-fit w-fit min-w-8 text-center px-2 py-1 rounded-full border shadow-sm cursor-default text-sm"
        >
          {item.tag}
        </div>
      ))}
    </div>
  );
};

export default TagsList;
