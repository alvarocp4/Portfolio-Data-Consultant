// Build a list of available PNG badges from src/assets/badges
// Using Vite's import.meta.glob to keep imports clean and centralized

const modules = import.meta.glob('../assets/badges/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
});

type BadgeItem = { name: string; badge: string };

function toNiceName(filePath: string): string {
  const base = filePath.split('/').pop() || '';
  const withoutExt = base.replace(/\.[^.]+$/, '');
  // strip trailing "-badget" or "-badge" (case-insensitive)
  const withoutBadge = withoutExt.replace(/-?badg?e?t$/i, '');
  // normalize separators to spaces
  const normalized = withoutBadge.replace(/[_-]+/g, ' ');
  // insert space between camelCase words: AirflowDAG -> Airflow DAG
  const spaced = normalized.replace(/([a-z])([A-Z])/g, '$1 $2');
  const trimmed = spaced.trim().replace(/\s{2,}/g, ' ');
  // Title case each word
  return trimmed.replace(/\b\w/g, (m) => m.toUpperCase());
}

export const badges: BadgeItem[] = Object.entries(modules)
  .map(([path, url]) => ({ name: toNiceName(path), badge: url as string }))
  .sort((a, b) => a.name.localeCompare(b.name));

export type { BadgeItem }