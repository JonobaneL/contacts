import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { nameValidation } from "@/utils/formValidation";
import { useAddNewContactMutation } from "@/API/contactsAPI";
import Field from "./ui/Field";
import { covertContact } from "@/utils/convertContact";
import { toast } from "sonner";
import { AddContactFormParams } from "@/models/formsTypes";

const AddContactForm = () => {
  const emailreg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const [addContact, queryState] = useAddNewContactMutation();
  const onSubmit = async (data: AddContactFormParams) => {
    const contact = covertContact(data);
    try {
      await addContact(contact).unwrap();
      toast.success("Contact was added!");
      reset();
    } catch (err) {
      toast.error("Something went wrong!Try again");
    }
  };
  const { register, handleSubmit, formState, reset } =
    useForm<AddContactFormParams>({
      mode: "onBlur",
    });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex mt-3 gap-2">
      <Field
        error={formState.errors["first name"]?.message}
        {...register("first name", {
          validate: (value, formValues) =>
            nameValidation(value, formValues, "last name"),
        })}
        placeholder="First Name"
      />
      <Field
        error={formState.errors["last name"]?.message}
        {...register("last name", {
          validate: (value, formValues) =>
            nameValidation(value, formValues, "first name"),
        })}
        placeholder="Last Name"
      />
      <Field
        error={formState.errors["email"]?.message}
        {...register("email", {
          required: "This field cant be empty",
          pattern: {
            value: emailreg,
            message: "Enter valid email",
          },
        })}
        placeholder="Email"
      />
      <Button type="submit" disabled={queryState.isLoading}>
        Save
      </Button>
    </form>
  );
};

export default AddContactForm;
