import { ContactParam } from "@/models/contactType";
import TagsList from "./TagsList";

import AddTagForm from "./AddTagForm";

type SectionProps = {
  contact: ContactParam | undefined;
};

const TagsSection = ({ contact }: SectionProps) => {
  return (
    <div>
      {contact?.tags.length == 0 ? (
        <p className="mt-2 text-gray-500 text-sm">
          This contact doesn't have any tags
        </p>
      ) : (
        <TagsList tags={contact?.tags || []} />
      )}
      <div className="mt-3 border w-full max-w-[30rem] rounded-md p-2">
        <h2 className="text-gray-500 font-medium mb-2">Add new tags</h2>
        <AddTagForm contactId={contact?.id} tags={contact?.tags || []} />
      </div>
    </div>
  );
};

export default TagsSection;
