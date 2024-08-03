import { Skeleton } from "./ui/skeleton";

const ContactSkeleton = () => {
  return (
    <div>
      <div className="flex gap-2 items-center">
        <Skeleton className="size-16 rounded-full" />
        <Skeleton className="w-1/3 rounded-sm h-5" />
      </div>
      <Skeleton className="w-2/3 rounded-sm h-5 mt-3" />
      <div className="flex gap-2 mt-2">
        <Skeleton className="w-14 rounded-full h-6" />
        <Skeleton className="w-14 rounded-full h-6" />
        <Skeleton className="w-14 rounded-full h-6" />
      </div>
    </div>
  );
};

export default ContactSkeleton;
