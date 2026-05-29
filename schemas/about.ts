import { defineField, defineType } from "sanity";

export const about = defineType({
  name: "about",
  type: "document",
  fields: [
    defineField({ name: "prose", type: "string" }),
    defineField({ name: "hobbies", type: "string" }),
    defineField({ name: "facts", type: "array", of: [{ type: "fact" }] }),
    defineField({
      name: "links",
      type: "array",
      of: [{ type: "link" }],
    }),
  ],
});

export const fact = defineType({
  name: "fact",
  type: "object",
  fields: [
    { name: "label", type: "string" },
    { name: "value", type: "string" },
  ],
});

export const link = defineType({
  name: "link",
  type: "object",
  fields: [
    { name: "label", type: "string" },
    { name: "url", type: "url" },
  ],
});
