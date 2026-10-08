# Illustration assets

The homepage and Insights pages use a restrained set of self-hosted SVG illustrations from [unDraw](https://undraw.co/). Keeping the files local avoids runtime requests to an image service and gives both themes the same predictable, bright presentation.

## Asset inventory

| Local file | Placement | Original source | SHA-256 |
| --- | --- | --- | --- |
| `assets/illustrations/building-websites.svg` | Homepage hero | [Building websites](https://undraw.co/illustration/building-websites_k2zp) | `82BA1F1731C4AC409D56D842A756811752DD3CAEABDA45508CA3B58A5E899056` |
| `assets/illustrations/business-decisions.svg` | Custom software vs SaaS | [Business Decisions](https://undraw.co/illustration/business-decisions_7vkl) | `1252C12B8E0E0696BBF81A4CE529F36A9B7773CCF4746B5C052D99BBE9B19106` |
| `assets/illustrations/chat-with-ai.svg` | AI agent vs chatbot | [Chat with AI](https://undraw.co/illustration/chat-with-ai_ir62) | `0933E200E9409253E39E03E15F27122C0BAF293E56E267AA02FCE01574923431` |
| `assets/illustrations/creation-process.svg` | Business process automation | [Creation Process](https://undraw.co/illustration/creation-process_uvp6) | `8CEC7F0E8FFF5446A8B7D5553D29B6EA34BFEE602CF78A5074BF7389DF76E5BF` |
| `assets/illustrations/sharing-ideas.svg` | Homepage direct-answer section | [Sharing Ideas](https://undraw.co/illustration/sharing-ideas_toje) | `E06AFC846EDDC5B78CB4143A932E3F1ED9D5035D1BC0AF1E2E11FDF0F1248719` |

Downloaded from the official unDraw CDN on 2026-10-08. The files are self-hosted, so the website makes no runtime request to unDraw.

## License and handling

The [unDraw license](https://undraw.co/license) permits personal and commercial use, copying, modification, and distribution without attribution or cost. It prohibits repackaging the assets as a competing illustration service and using them for AI or machine-learning training.

Before integration, the SVGs were checked for scripts, event handlers, `foreignObject`, embedded images, and external references; none were present. The automated test scans every SVG in the illustration directory and keeps each file below 25 KB. Keep them rendered through `next/image` rather than injecting their markup into the document.

The homepage figures expose a concise accessible label while their nested decorative images use empty alternative text. Insight images remain decorative companions to nearby article headings. The UI animates only small story-step reveals and restrained image transforms; it does not animate individual SVG paths, and reduced-motion preferences disable the effects.
