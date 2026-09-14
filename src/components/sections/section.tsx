type Props = {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
};

/**
 * Shared public section shell with consistent spacing and hierarchy.
 */
export function Section({ id, kicker, title, children }: Props) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border py-16 md:py-24">
      <p className="font-mono text-xs tracking-[0.18em] text-purple uppercase">
        {kicker}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        {title}
      </h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}
