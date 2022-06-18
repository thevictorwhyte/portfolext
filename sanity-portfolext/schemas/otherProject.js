export default {
  name: "otherProject",
  title: "Other Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "desc",
      title: "Description",
      type: "string",
    },
    {
      name: "sourceUrl",
      title: "Github Source Link",
      type: "string",
    },
    {
      name: "ongoing",
      title: "Ongoing",
      type: "boolean",
    },
    {
      name: "orderNum",
      title: "order",
      type: "number",
    },
  ],
  orderings: [
    {
      title: "Order, Asc",
      name: "orderAsc",
      by: [{ field: "orderNum", direction: "asc" }],
    },
  ],
};
