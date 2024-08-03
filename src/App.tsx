import { useGetAllContactsQuery } from "./API/contactsAPI";
import ContactsList from "./components/ContactsList";
import AddContactForm from "./components/AddContactForm";
import ContactsLoader from "./components/ContactsLoader";

function App() {
  const { data, isLoading } = useGetAllContactsQuery();
  return (
    <main className="w-full max-w-[1280px] min-w-[400px] mx-auto">
      <header className="pt-10 pb-4 top-0 sticky w-full bg-white z-50">
        <h1 className="font-semibold text-2xl text-gray-700">Contacts</h1>
        <AddContactForm />
      </header>
      {isLoading ? (
        <ContactsLoader />
      ) : (
        <ContactsList contacts={data?.resources} />
      )}
    </main>
  );
}

export default App;
