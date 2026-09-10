import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// ─────────────────────────────────────────────────────────────────────────
// GITHUB PAGES SETTINGS — edit these two lines for your repo, then push.
//
// If deploying to a USER/ORG site named "<username>.github.io":
//   site: "https://<username>.github.io"
//   base: "/"
//
// If deploying to a PROJECT site at "https://<username>.github.io/<repo>":
//   site: "https://<username>.github.io"
//   base: "/<repo>"
// ─────────────────────────────────────────────────────────────────────────
export default defineConfig({
  site: "https://YOUR_USERNAME.github.io",
  base: "/YOUR_REPO_NAME", // set to "/" if this is a <username>.github.io user site
  output: "static",
  integrations: [tailwind(), mdx()],
});
