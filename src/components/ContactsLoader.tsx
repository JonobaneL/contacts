import { Skeleton } from "./ui/skeleton";

const ContactsLoader = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <div className="p-4 bg-gray-50 rounded-md" key={index}>
            <div className="flex gap-2 items-center mb-3">
              <Skeleton className="size-12 flex-cover rounded-full" />
              <Skeleton className="h-4 w-full max-w-48" />
            </div>
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="size-8 mr-0 ml-auto mt-1" />
          </div>
        ))}
    </div>
  );
};

export default ContactsLoader;
