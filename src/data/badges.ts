// Build a list of available PNG badges from src/assets/badges
// Using Vite's import.meta.glob to keep imports clean and centralized

const modules = import.meta.glob('../assets/badges/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
});

type BadgeItem = { name: string; badge: string, url: string };

function toNiceName(filePath: string): string {
  const base = filePath.split('/').pop() || '';
  const withoutExt = base.replace(/\.[^.]+$/, '');
  // strip trailing "-badget" or "-badge" (case-insensitive)
  const withoutBadge = withoutExt.replace(/-?badg?e?$/i, '');
  // normalize separators to spaces
  const normalized = withoutBadge.replace(/[_-]+/g, ' ');
  // insert space between camelCase words: AirflowDAG -> Airflow DAG
  const spaced = normalized.replace(/([a-z])([A-Z])|([A-Z]+)([A-Z][a-z])/g, '$1$3 $2$4')
  const trimmed = spaced.trim().replace(/\s{2,}/g, ' ');
  // Title case each word
  return trimmed.replace(/\b\w/g, (m) => m.toUpperCase());
}

const badgeUrls: Record<string, string> = {
  "AWS Cloud Practitioner CLFC02": "https://www.credly.com/badges/95583c83-15a0-4da4-8124-568f33757c78/linked_in_profile",
  "Airflow DAG Authoring": "https://www.credly.com/badges/e8161f22-c99f-40d3-aa1b-0f01971c8af8/linked_in_profile",
  "Airflow Fundamentals": "https://www.credly.com/badges/2633ba79-a94d-4ceb-85a6-912d665dad4a/linked_in_profile"
};

export const badges: BadgeItem[] = Object.entries(modules)
  .map(([path, url]) => {
    const name = toNiceName(path); // define name primero
    return { name, badge: url as string, url: badgeUrls[name] || "#"};
  })
  .sort((a, b) => b.name.localeCompare(a.name));
export type { BadgeItem }