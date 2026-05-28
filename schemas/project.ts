import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "slug", type: "slug" }),
    defineField({ name: "year", type: "string" }),
    defineField({ name: "role", type: "string" }),
    defineField({ name: "summary", type: "text" }),
    defineField({ name: "heroImage", type: "image" }),
    defineField({ name: "heroAlt", type: "text" }),
    defineField({ name: "overview", type: "text" }),
    defineField({ name: "detailImage", type: "image" }),
    defineField({ name: "detailAlt", type: "text" }),
    defineField({ name: "problem", type: "text" }),
    defineField({ name: "approach", type: "text" }),
    defineField({ name: "outcome", type: "text" }),
    defineField({ name: "gallery", type: "array", of: [{ type: "image" }] }),
    defineField({ name: "stack", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "url", type: "url" }),
    defineField({ name: "repo", type: "url" }),
  ],
});
