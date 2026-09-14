type Props = {
  label: string;
  name: string;
  defaultValue?: string | number | null;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  rows?: number;
};

/**
 * Labeled admin input matching button/input height scale.
 */
export function Field({
  label,
  name,
  defaultValue,
  type = "text",
  required,
  textarea,
  rows = 5,
}: Props) {
  const classes =
    "mt-1.5 w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-foreground shadow-[inset_0_1px_2px_rgba(0,0,0,0.18)]";

  return (
    <label className="block text-sm text-comment">
      {label}
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={rows}
          defaultValue={defaultValue ?? ""}
          className={classes}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          defaultValue={defaultValue ?? ""}
          className={`h-11 ${classes}`}
        />
      )}
    </label>
  );
}
