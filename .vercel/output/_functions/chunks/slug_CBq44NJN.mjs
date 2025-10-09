function slugifyTag(input) {
  return encodeURIComponent(
    input.trim().toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-")
  );
}

export { slugifyTag as s };
