"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { project } from "@/schemas/project";

export default defineConfig({
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [structureTool()],
  schema: { types: [project] },
});
