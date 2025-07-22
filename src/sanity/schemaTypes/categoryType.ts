import { BookIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "historietas-category",
  title: "Category",
  type: "document",
  icon: BookIcon,
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
