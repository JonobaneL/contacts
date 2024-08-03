import { AddContactFormParams } from "@/models/formsTypes";

export const nameValidation = (
  value: string,
  formValues: AddContactFormParams,
  key: keyof AddContactFormParams
) => {
  if (formValues[key].length > 0) return true;
  if (value.length > 0) return true;
  return "First or Last name is required";
};

export const tagsValidation = {
  validate: (value: string[]) => {
    if (!value.length) return false;
    return true;
  },
};
