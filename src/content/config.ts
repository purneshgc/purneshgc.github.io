import { defineCollection, z } from "astro:content";

/**
 * ABOUT COLLECTION
 * A single markdown file (src/content/about/about.md) holding the bio
 * shown on the homepage. Edit the file's body freely — no frontmatter
 * fields are required beyond the ones below.
 */
const about = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().default("About Me"),
  }),
});

/**
 * PROJECTS COLLECTION
 * One markdown file per project in src/content/projects/.
 * Copy this frontmatter template into a new file to add a project:
 *
 * ---
 * title: "Project Name"
 * description: "One or two sentence summary of what the project does."
 * githubUrl: "https://github.com/YOUR_USERNAME/your-repo"
 * skills: ["Python", "Network Security"]   # must match skill "name" fields
 * status: "completed"                       # "completed" | "in-progress"
 * date: 2026-01-15
 * image: ""                                 # optional, path under /public
 * ---
 * Body text (optional, shown on a future detail page if you add one).
 */
const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    githubUrl: z.string().url(),
    skills: z.array(z.string()).default([]),
    status: z.enum(["completed", "in-progress"]),
    date: z.coerce.date(),
    image: z.string().optional(),
  }),
});

/**
 * SKILLS COLLECTION
 * One markdown file per skill in src/content/skills/.
 * The file's slug (filename minus .md) is used as the URL: /skills/<slug>.
 * Copy this frontmatter template into a new file to add a skill:
 *
 * ---
 * name: "Network Security"
 * slug: "network-security"
 * shortDescription: "One-line summary shown on the skills grid card."
 * tryhackmeBadges:
 *   - name: "Network Fundamentals"
 *     imageUrl: "https://tryhackme-badges.s3.amazonaws.com/YOUR_ID.png"
 *     link: "https://tryhackme.com/room/networkfundamentals"
 * relatedProjects: ["project-file-slug-1", "project-file-slug-2"]
 * ---
 * Longer description goes here in the markdown body — this is rendered
 * in full on the skill's detail page.
 */
const skills = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    //slug: z.string(),
    shortDescription: z.string(),
    tryhackmeBadges: z
      .array(
        z.object({
          name: z.string(),
          imageUrl: z.string(),
          link: z.string().url().optional(),
        })
      )
      .default([]),
    // Slugs (filenames without .md) of entries in the "projects" collection.
    relatedProjects: z.array(z.string()).default([]),
  }),
});

/**
 * TIMELINE COLLECTION
 * One markdown file per learning-log entry in src/content/timeline/.
 * Copy this frontmatter template into a new file to add an entry:
 *
 * ---
 * date: 2026-09-10
 * title: "Completed the 'Pickle Rick' room"
 * summary: "Short one or two sentence recap of what I did/learned."
 * link: "https://tryhackme.com/room/picklerick"   # optional
 * tags: ["tryhackme", "web"]                        # optional
 * ---
 * No body text needed — everything shows in the summary field.
 */
const timeline = defineCollection({
  type: "content",
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    summary: z.string(),
    link: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { about, projects, skills, timeline };
