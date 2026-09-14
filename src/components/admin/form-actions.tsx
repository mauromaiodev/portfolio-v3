type Props = {
  submitLabel: string;
  hrefCancel?: string;
};

export function FormActions({ submitLabel, hrefCancel = "/admin" }: Props) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <button
        type="submit"
        className="inline-flex h-11 items-center rounded-lg bg-pink px-5 text-sm font-medium text-surface"
      >
        {submitLabel}
      </button>
      <a
        href={hrefCancel}
        className="inline-flex h-11 items-center rounded-lg border border-border px-5 text-sm text-comment hover:text-foreground"
      >
        Cancelar
      </a>
    </div>
  );
}
