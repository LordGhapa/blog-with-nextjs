import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.documentTypeListItem("historietas-post").title("Posts"),
      S.documentTypeListItem("historietas-category").title("Categories"),
      S.documentTypeListItem("historietas-tag").title("tags"),
      S.documentTypeListItem("historietas-author").title("Authors"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          ![
            "historietas-post",
            "historietas-category",
            "historietas-tag",
            "historietas-author",
          ].includes(item.getId()!),
      ),
    ]);
