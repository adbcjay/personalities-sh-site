import { personas, categories } from "@/data/registry";
import { getStarsMap } from "@/lib/github";
import BrowseClient from "@/components/BrowseClient";

export default async function BrowsePage() {
  const stars = await getStarsMap();

  return <BrowseClient personas={personas} categories={categories} stars={stars} />;
}
