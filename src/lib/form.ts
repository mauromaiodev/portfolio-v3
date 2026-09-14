export function field(form: FormData, key: string) {
  return String(form.get(key) ?? "").trim();
}

export function lines(value: string) {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

export function optionalUrl(value: string) {
  return value.length > 0 ? value : null;
}

export function intField(form: FormData, key: string, fallback = 0) {
  const raw = field(form, key);
  const parsed = Number.parseInt(raw, 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}
