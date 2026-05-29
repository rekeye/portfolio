import { defineField, defineType } from "sanity";

export const about = defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({ name: "prose", type: "text" }),
    defineField({ name: "hobbies", type: "text" }),
    defineField({ name: "facts", type: "array", of: [{ type: "fact" }] }),
    defineField({
      name: "links",
      type: "array",
      of: [{ type: "link" }],
    }),
    defineField({
      name: "images",
      type: "array",
      of: [{ type: "imageWithAlt" }],
    }),
  ],
  preview: {
    select: {
      title: "trueTitle",
    },
  },
});

export const fact = defineType({
  name: "fact",
  type: "object",
  fields: [
    {
      name: "label",
      type: "string",
      validation: (rule) =>
        rule.required().error("This field is mandatory before publishing"),
    },
    {
      name: "value",
      type: "string",
      validation: (rule) =>
        rule.required().error("This field is mandatory before publishing"),
    },
  ],
});

export const link = defineType({
  name: "link",
  type: "object",
  fields: [
    {
      name: "label",
      type: "string",
      validation: (rule) =>
        rule.required().error("This field is mandatory before publishing"),
    },
    {
      name: "href",
      type: "url",
      validation: (rule) =>
        rule
          .required()
          .uri({ allowRelative: true, scheme: ["https", "mailto"] })
          .error("This field is mandatory before publishing"),
    },
  ],
});
