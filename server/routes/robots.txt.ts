export default defineEventHandler((event) => {
  const host = getRequestHost(event);
  const customDomain = process.env.NUXT_PUBLIC_CUSTOM_DOMAIN || "";

  const isCustomDomain =
    host === customDomain || host === "www." + customDomain;

  const content = isCustomDomain
    ? "User-agent: *\nAllow: /"
    : "User-agent: *\nDisallow: /";

  setHeader(event, "Content-Type", "text/plain");
  return content;
});

function getRequestHost(event: any) {
  return event.node.req.headers.host || "";
}
