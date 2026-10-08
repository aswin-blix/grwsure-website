import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GRWSURE INFOTECH",
    short_name: "GRWSURE",
    description: "Custom software, AI, and business automation.",
    start_url: "./",
    display: "standalone",
    background_color: "#fbfbfd",
    theme_color: "#10152f",
    icons: [{ src: "./icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
