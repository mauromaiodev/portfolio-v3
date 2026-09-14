import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export function PrimaryLink({ href, children }: Props) {
  return (
    <Link
      href={href}
      className="inline-flex h-11 items-center rounded-lg bg-pink px-4 text-sm font-medium text-surface"
    >
      {children}
    </Link>
  );
}
