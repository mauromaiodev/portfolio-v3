import { deleteTestimonialAction } from "@/app/admin/actions";
import { AdminShell } from "@/components/admin/admin-shell";
import { PrimaryLink } from "@/components/admin/primary-link";
import { getPortfolio } from "@/db/queries";
import { requireAdmin } from "@/lib/require-admin";
import Link from "next/link";

export default async function TestimonialsPage() {
  await requireAdmin();
  const { testimonials } = await getPortfolio();

  return (
    <AdminShell
      title="Depoimentos"
      action={<PrimaryLink href="/admin/testimonials/new">Novo depoimento</PrimaryLink>}
    >
      <ul className="divide-y divide-border rounded-xl border border-border">
        {testimonials.map((item) => (
          <li key={item.id} className="flex flex-wrap items-center justify-between gap-3 px-4 py-4">
            <p className="font-medium">{item.name}</p>
            <div className="flex gap-3 text-sm">
              <Link href={`/admin/testimonials/${item.id}`} className="text-cyan">
                Editar
              </Link>
              <form action={deleteTestimonialAction.bind(null, item.id)}>
                <button type="submit" className="text-red">
                  Excluir
                </button>
              </form>
            </div>
          </li>
        ))}
      </ul>
    </AdminShell>
  );
}
