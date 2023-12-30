import type {
  CollectionKey,
  ContentCollectionKey,
  DataCollectionKey,
} from "astro:content";

export function isDataCollection(
  collection: CollectionKey
): collection is DataCollectionKey {
  return ["blogMeta", "people"].includes(collection);
}

export function isContentCollection(
  collection: CollectionKey
): collection is ContentCollectionKey {
  return !isDataCollection(collection);
}
