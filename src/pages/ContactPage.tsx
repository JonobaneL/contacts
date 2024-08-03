import { useGetContactQuery } from "@/API/contactsAPI";
import ContactAvatar from "@/components/ContactAvatar";
import ContactSkeleton from "@/components/ContactSkeleton";
import TagsSection from "@/components/TagsSection";
import { Link, useParams } from "react-router-dom";

const ContactPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetContactQuery(id || "");
  const contact = data && data.resources[0];
  const firstName = contact?.fields["first name"]
    ? contact.fields["first name"][0].value
    : "";
  const lastName = contact?.fields["last name"]
    ? contact.fields["last name"][0].value
    : "";
  const email = contact?.fields?.email ? contact.fields?.email[0].value : "-";

  return (
    <main className="w-full max-w-[1280px] min-w-[400px] mx-auto pt-10">
      <Link to="/" className="text-gray-600 text-sm">
        &#129044; Back to contacts
      </Link>
      <h1 className="font-semibold text-2xl text-gray-700 mb-10 mt-4">
        Contact Info
      </h1>
      {isLoading ? (
        <ContactSkeleton />
      ) : (
        <>
          <div className="flex gap-2 items-center">
            <ContactAvatar
              className="size-16"
              src={contact?.avatar_url || ""}
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
        </>
      )}
      <TagsSection contact={contact} />
    </main>
  );
};

export default ContactPage;
