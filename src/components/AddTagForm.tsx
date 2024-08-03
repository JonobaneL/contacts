import { Controller, useForm } from "react-hook-form";
import { Button } from "./ui/button";
import ListField from "./ui/ListField";
import { TagParam } from "@/models/contactType";
import { useAddTagsMutation } from "@/API/contactsAPI";
import { toast } from "sonner";
import { tagsValidation } from "@/utils/formValidation";
import { AddTagsFormParams } from "@/models/formsTypes";

type FormProps = {
  contactId: string | undefined;
  tags: TagParam[];
};

const AddTagForm = ({ contactId, tags }: FormProps) => {
  const { control, handleSubmit, reset } = useForm<AddTagsFormParams>({
    defaultValues: {
      tags: [],
    },
  });
  const [addTags, queryState] = useAddTagsMutation();

  const onSubmit = (data: AddTagsFormParams) => {
    const oldTags = tags.map((item) => item.tag);
    // const newTags = data.tags.map((item) => item.tag);
    try {
      addTags({
        id: contactId,
        tags: [...oldTags, ...data.tags],
      });
      toast.success("Tags was updated");
      reset();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="tags"
        control={control}
        rules={tagsValidation}
        render={({ field }) => (
          <ListField list={field.value} setList={field.onChange} />
        )}
      />
      <Button className="block ml-auto mr-0" disabled={queryState.isLoading}>
        Save
      </Button>
    </form>
  );
};

export default AddTagForm;
