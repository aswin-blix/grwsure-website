import Image, { type StaticImageData } from "next/image";
import buildingWebsites from "@/assets/illustrations/building-websites.svg";
import businessDecisions from "@/assets/illustrations/business-decisions.svg";
import chatWithAi from "@/assets/illustrations/chat-with-ai.svg";
import creationProcess from "@/assets/illustrations/creation-process.svg";
import sharingIdeas from "@/assets/illustrations/sharing-ideas.svg";

const illustrationByName = {
  "building-websites": buildingWebsites,
  "business-decisions": businessDecisions,
  "chat-with-ai": chatWithAi,
  "creation-process": creationProcess,
  "sharing-ideas": sharingIdeas,
} satisfies Record<string, StaticImageData>;

const sizesByVariant = {
  card: "(max-width: 720px) calc(100vw - 28px), (max-width: 900px) 50vw, 33vw",
  article: "(max-width: 900px) calc(100vw - 28px), 770px",
  hero: "(max-width: 720px) calc(100vw - 68px), (max-width: 900px) 560px, 42vw",
  section: "(max-width: 900px) calc(100vw - 88px), 360px",
} as const;

export function StoryIllustration({
  name,
  preload = false,
  variant = "card",
}: {
  name: keyof typeof illustrationByName;
  preload?: boolean;
  variant?: keyof typeof sizesByVariant;
}) {
  return (
    <Image
      aria-hidden="true"
      alt=""
      className={`story-illustration story-illustration-${variant}`}
      draggable={false}
      preload={preload}
      sizes={sizesByVariant[variant]}
      src={illustrationByName[name]}
      unoptimized
    />
  );
}
