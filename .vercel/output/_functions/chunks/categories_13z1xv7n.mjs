function toSlug(input) {
  return input.trim().toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
}
function toTitleFromSlug(slug) {
  return slug.replace(/[-_]+/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
}
const categoryMetaBySlug = {
  "growth": {
    title: "Growth",
    description: "Frameworks and tactics for sustainable product growth."
  },
  "engineering": {
    title: "Engineering",
    description: "Notes on building reliable, fast web products."
  }
};
function getCategoryMeta(slugOrName) {
  const slug = toSlug(slugOrName);
  const custom = categoryMetaBySlug[slug] ?? {};
  const fallbackTitle = toTitleFromSlug(slug);
  return {
    slug,
    title: custom.title ?? fallbackTitle,
    description: custom.description ?? `${fallbackTitle} articles and notes.`
  };
}
function slugifyCategory(name) {
  return toSlug(name);
}

export { getCategoryMeta as g, slugifyCategory as s };
