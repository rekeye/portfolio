import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) =>
        rule.required().error("This field is mandatory before publishing"),
    }),
    defineField({
      name: "slug",
      type: "slug",
      validation: (rule) =>
        rule.required().error("This field is mandatory before publishing"),
    }),
    defineField({
      name: "year",
      type: "string",
      validation: (rule) =>
        rule.required().error("This field is mandatory before publishing"),
    }),
    defineField({
      name: "role",
      type: "string",
      validation: (rule) =>
        rule.required().error("This field is mandatory before publishing"),
    }),
    defineField({
      name: "summary",
      type: "text",
      validation: (rule) =>
        rule.required().error("This field is mandatory before publishing"),
    }),
    defineField({
      name: "heroImage",
      type: "imageWithAlt",
      validation: (rule) =>
        rule.required().error("This field is mandatory before publishing"),
    }),
    defineField({ name: "overview", type: "text" }),
    defineField({ name: "detailImage", type: "imageWithAlt" }),
    defineField({ name: "problem", type: "text" }),
    defineField({ name: "approach", type: "text" }),
    defineField({ name: "outcome", type: "text" }),
    defineField({
      name: "gallery",
      type: "array",
      of: [{ type: "imageWithAlt" }],
    }),
    defineField({ name: "stack", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "url", type: "url" }),
    defineField({ name: "repo", type: "url" }),
    defineField({ name: "order", type: "number" }),
  ],
});
