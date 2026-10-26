// Classify display labels without changing the source data or inferring identity
// from a provider, agent framework or harness. Unknown versions alone don't count.
export function hasUnknownModel(model) {
  const value = String(model ?? "").trim();
  if (!value || /^(?:unknown\b|unnamed\b|not identified\b|not (?:disclosed|established|specified)$|undisclosed$|unspecified$|n\/a$)/i.test(value)) return true;
  if (/\bunderlying models?(?:\s+at\s+exposure)?(?:\s+(?:and\s+)?versions?)?\s+(?:not disclosed|not established|unknown|unverified)\b/i.test(value)) return true;
  if (/\b(?:model name|exact name|names?)\s+(?:not disclosed|unknown)\b/i.test(value)) return true;
  return /^(?:unreleased\s+(?:non-frontier\s+)?(?:internal\s+)?(?:research\s+)?|internal\s+(?:unreleased\s+)?(?:research\s+)?)models?$/i.test(value);
}
