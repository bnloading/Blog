import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET || "",
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2023-05-03",
});

if (
  !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  !process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET
) {
  console.error("Sanity configuration error: Missing project ID or dataset.");
}
