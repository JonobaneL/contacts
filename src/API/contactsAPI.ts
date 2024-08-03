import { ContactParam } from "@/models/contactType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "/api/",
  prepareHeaders: (headers, _) => {
    const token = import.meta.env.VITE_API_KEY;
    headers.set("Authorization", `Bearer ${token}`);
    return headers;
  },
});

type ResponseProps = {
  resources: ContactParam[];
};
type ContactResponse = {
  resources: ContactParam[];
};

export const contactsAPI = createApi({
  reducerPath: "contactsAPI",
  baseQuery: baseQuery,
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    getAllContacts: builder.query<ResponseProps, void>({
      query: () => ({
        url: "contacts/",
        params: {
          sort: "created:desc",
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.resources.map(({ id }) => ({
                type: "Contact" as const,
                id,
              })),
              { type: "Contact", id: "LIST" },
            ]
          : [{ type: "Contact", id: "LIST" }],
    }),
    getContact: builder.query<ContactResponse, string>({
      query: (contact_id: string) => ({
        url: `contact/${contact_id}`,
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.resources.map(({ id }) => ({
                type: "Contact" as const,
                id,
              })),
              { type: "Contact", id: "ITEM" },
            ]
          : [{ type: "Contact", id: "ITEM" }],
    }),
    deleteContact: builder.mutation({
      query: (contactID: string) => ({
        url: `contact/${contactID}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Contact", id: "LIST" }],
    }),
    addNewContact: builder.mutation({
      query: (data) => ({
        url: "contact/",
        method: "POST",
        body: {
          record_type: "person",
          privacy: {
            edit: null,
            read: null,
          },
          fields: data,
          owner_id: null,
        },
      }),
      invalidatesTags: [{ type: "Contact", id: "LIST" }],
    }),
    addTags: builder.mutation({
      query: ({ id, tags }) => ({
        url: `contacts/${id}/tags`,
        method: "PUT",
        body: {
          tags: tags,
        },
      }),
      invalidatesTags: [{ type: "Contact", id: "ITEM" }],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useDeleteContactMutation,
  useAddNewContactMutation,
  useGetContactQuery,
  useAddTagsMutation,
} = contactsAPI;
