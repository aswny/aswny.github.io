/**
 * Renders the favicon, apple touch icon and OpenGraph image into ./public as
 * real .png files.
 *
 * Next.js' `icon.tsx` / `opengraph-image.tsx` file conventions would serve these
 * from extension-less routes (`/icon`, `/opengraph-image`). GitHub Pages hands
 * those out as `application/octet-stream`, which link-preview scrapers reject —
 * so the site ships them as plain static assets instead.
 *
 * Run with `pnpm generate:images` (also wired into `pnpm build`).
 */
import { readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";
import { RESUME_DATA } from "../src/data/resume-data.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");

const BACKGROUND = "#09090b";
const FOREGROUND = "#fafafa";

async function write(name: string, image: ImageResponse) {
  const buffer = Buffer.from(await image.arrayBuffer());
  await writeFile(join(publicDir, name), buffer);
  console.log(`generated public/${name} (${buffer.length} bytes)`);
}

function initialsMark(fontSize: number, borderRadius: number) {
  return h(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: BACKGROUND,
        color: FOREGROUND,
        fontSize,
        fontWeight: 700,
        letterSpacing: "-0.05em",
        borderRadius,
      },
    },
    RESUME_DATA.initials
  );
}

async function openGraphImage() {
  const avatar = await readFile(join(publicDir, "profile.jpeg"));
  const avatarSrc = `data:image/jpeg;base64,${avatar.toString("base64")}`;

  return h(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
      },
    },
    h(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        },
      },
      h("img", {
        src: avatarSrc,
        alt: RESUME_DATA.name,
        style: {
          width: "150px",
          height: "150px",
          borderRadius: "10%",
          marginBottom: "2rem",
        },
      }),
      h(
        "div",
        {
          style: {
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "1rem",
          },
        },
        RESUME_DATA.name
      ),
      h(
        "div",
        {
          style: {
            fontSize: "1.5rem",
            color: "#666",
            maxWidth: "700px",
            lineHeight: "1.4",
          },
        },
        RESUME_DATA.about
      ),
      h(
        "div",
        { style: { fontSize: "1rem", color: "#666", marginTop: "2rem" } },
        RESUME_DATA.personalWebsiteUrl.replace("https://", "")
      )
    )
  );
}

await write(
  "icon.png",
  new ImageResponse(initialsMark(16, 6), { width: 32, height: 32 })
);
await write(
  "apple-icon.png",
  new ImageResponse(initialsMark(88, 0), { width: 180, height: 180 })
);
await write(
  "opengraph-image.png",
  new ImageResponse(await openGraphImage(), { width: 1200, height: 630 })
);
