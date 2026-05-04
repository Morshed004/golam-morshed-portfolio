import { defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: DocumentTextIcon,

  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
    }),

    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(200),
    }),

    defineField({
      name: "stack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Example: React, Next.js, Tailwind CSS",
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Example: Optimized Performance, Secure Authentication, Real-time Updates",
    }),
    defineField({
      name: "github",
      title: "GitHub Repository",
      type: "url",
      description: "Optional: Link to the GitHub repository",
    }),

    defineField({
      name: "demo",
      title: "Live Demo",
      type: "url",
      description: "Optional: Link to the live project",
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
      subtitle: "description",
    },
  },
});
