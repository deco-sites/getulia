import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 454,
  site: "getulia",
  domains: ["deco-sites-getulia.deno.dev"],
});