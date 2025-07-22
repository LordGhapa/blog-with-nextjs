import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const tagType = defineType({
  name: "historietas-tag",
  title: "Category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "internationalizedArrayString",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title.0.value",
      },
    }),
  ],
  preview: {
    select: {
      title: "title.0.value",
    },
  },
});
