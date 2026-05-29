import { defineField, defineType } from "sanity";

export const settings = defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  fields: [
    defineField({
      name: "available",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "currentRole",
      type: "string",
    }),
  ],
});
