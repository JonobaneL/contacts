import { AddContactFormParams } from "@/models/formsTypes";

export const covertContact = (data: AddContactFormParams) => {
  const contact = Object.keys(data).reduce((prev, key) => {
    if (data[key as keyof AddContactFormParams].length == 0) return prev;
    return {
      ...prev,
      [key]: [
        {
          lable: key,
          value: data[key as keyof AddContactFormParams],
        },
      ],
    };
  }, {});
  return contact;
};
