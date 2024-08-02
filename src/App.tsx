import { useGetAllContactsQuery } from "./API/contactsAPI";
import { Button } from "./components/ui/button";

function App() {
  const { data, error, isLoading } = useGetAllContactsQuery("");
  console.log(error);
  console.log(data);
  return (
    <main className="w-full pt-20">
      <h1>Contacts</h1>
      <Button>Click!</Button>
    </main>
  );
}

export default App;
