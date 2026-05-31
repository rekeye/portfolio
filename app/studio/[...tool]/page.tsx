import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";
import { notFound } from "next/navigation";

export default function StudioPage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return <NextStudio config={config} />;
}
