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
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as { available?: boolean };
          if (!parent?.available && !value) return "This field is required";
          return true;
        }),
    }),
  ],
});
