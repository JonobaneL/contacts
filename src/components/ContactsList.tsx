import { ContactParam } from "@/models/contactType";
import Contact from "./Contact";

type ListProps = {
  contacts: ContactParam[] | undefined;
};

const ContactsList = ({ contacts }: ListProps) => {
  return (
    <ul className="grid gap-2 grid-cols-2">
      {contacts?.map((item) => (
        <Contact key={item.id} contact={item} />
      ))}
    </ul>
  );
};

export default ContactsList;
