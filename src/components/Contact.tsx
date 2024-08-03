import { ContactParam } from "@/models/contactType";
import { Button } from "./ui/button";
import ContactAvatar from "./ContactAvatar";
import { useDeleteContactMutation } from "@/API/contactsAPI";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import TagsList from "./TagsList";

type ContactProps = {
  contact: ContactParam;
};

const Contact = ({ contact }: ContactProps) => {
  const firstName = contact.fields["first name"]
    ? contact.fields["first name"][0].value
    : "";
  const lastName = contact.fields["last name"]
    ? contact.fields["last name"][0].value
    : "";
  const email = contact.fields?.email ? contact.fields?.email[0].value : "-";
  const [deleteContact, queryState] = useDeleteContactMutation();
  const navigate = useNavigate();
  const deleteHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    try {
      deleteContact(contact.id).unwrap();
      toast.success("Contact was deleted!");
    } catch (err) {
      toast.error("Something went wrong! Try again");
    }
  };

  return (
    <li
      className="w-full h-fit border-gray-400 border shadow-sm rounded-md p-4"
      onClick={() => navigate(`contact/${contact.id}`)}
    >
      <div className="flex gap-2 items-center">
        <ContactAvatar
          className="size-12"
          src={contact.avatar_url}
          firstName={firstName}
          lastName={lastName}
        />
        <p>
          {firstName} {lastName}
        </p>
      </div>
      <p className="mt-3">
        <span className="text-sm text-gray-500">Email: </span>
        {email}
      </p>
      <TagsList tags={contact.tags} />
      <div className="flex justify-end">
        <Button
          variant="ghost"
          className="p-2 mr-0 ml-auto"
          disabled={queryState.isLoading}
          onClick={deleteHandler}
        >
          <img className="size-6" src="/bin.svg" alt="delete" />
        </Button>
      </div>
    </li>
  );
};

export default Contact;
