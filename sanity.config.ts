"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { about, link, fact } from "@/schemas/about";
import { imageWithAlt } from "@/schemas/imageWithAlt";
import { project } from "@/schemas/project";
import { settings } from "@/schemas/settings";

export default defineConfig({
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [structureTool()],
  schema: { types: [imageWithAlt, project, about, fact, link, settings] },
});
