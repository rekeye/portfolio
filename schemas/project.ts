import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "slug", type: "slug" }),
    defineField({ name: "description", type: "text" }),
    defineField({ name: "stack", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "url", type: "url" }),
    defineField({ name: "repo", type: "url" }),
    defineField({ name: "order", type: "number" }),
    defineField({ name: "year", type: "number" }),
  ],
});
