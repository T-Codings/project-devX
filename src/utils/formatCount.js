// src/utils/formatCount.js
export function formatCount(n) {
  const x = Number(n) || 0;

  if (x >= 1_000_000_000) return `${Math.round(x / 1_000_000_000)}b`;
  if (x >= 1_000_000) return `${Math.round(x / 1_000_000)}m`;
  if (x >= 1_000) return `${Math.round(x / 1_000)}k`;

  return String(x);
}
