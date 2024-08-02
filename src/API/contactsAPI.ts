import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const token = "VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://live.devnimble.com/api/v1/",
  prepareHeaders: (headers, _) => {
    const token = "VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn";
    headers.set("Authorization", `Bearer ${token}`);
    return headers;
  },
});

export const contactsAPI = createApi({
  reducerPath: "contactsAPI",
  baseQuery: baseQuery,

  endpoints: (builder) => ({
    getAllContacts: builder.query({
      query: (n) => "contacts/",
    }),
  }),
});

export const { useGetAllContactsQuery } = contactsAPI;
