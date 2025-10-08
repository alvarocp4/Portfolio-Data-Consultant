function calculateReadingTimeFromHtml(html, wordsPerMinute = 200) {
  if (!html) return 1;
  const text = html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/&[a-zA-Z#0-9]+;/g, " ").replace(/\s+/g, " ").trim();
  const words = text ? text.split(" ").length : 0;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}
function calculateReadingTimeFromMarkdown(markdown, wordsPerMinute = 200) {
  if (!markdown) return 1;
  const text = markdown.replace(/^---[\s\S]*?---/m, " ").replace(/```[\s\S]*?```/g, " ").replace(/`[^`]*`/g, " ").replace(/<[^>]+>/g, " ").replace(/!\[[^\]]*\]\([^\)]*\)/g, " ").replace(/\[[^\]]*\]\([^\)]*\)/g, " ").replace(/^\s{0,3}(#{1,6}|>|\*|-|\+|\d+\.)\s+/gm, " ").replace(/[\*_]{1,3}([^\*_]+)[\*_]{1,3}/g, "$1").replace(/\s+/g, " ").trim();
  const wordMatches = text.match(/[A-Za-zÀ-ÖØ-öø-ÿ0-9]+/g);
  const words = wordMatches ? wordMatches.length : 0;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export { calculateReadingTimeFromMarkdown as a, calculateReadingTimeFromHtml as c };
