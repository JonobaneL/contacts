import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type AvatarProps = {
  className: string;
  src: string;
  firstName: string;
  lastName: string;
};
const ContactAvatar = ({
  src,
  firstName,
  lastName,
  className,
}: AvatarProps) => {
  return (
    <Avatar className={className}>
      <AvatarImage src={src} />
      <AvatarFallback>
        {firstName[0] || "U"}
        {lastName[0] || "S"}
      </AvatarFallback>
    </Avatar>
  );
};

export default ContactAvatar;
