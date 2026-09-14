import { AdminShell } from "@/components/admin/admin-shell";
import { ProfileForm } from "@/components/admin/profile-form";
import { getProfileRow } from "@/db/queries";
import { requireAdmin } from "@/lib/require-admin";

export default async function AdminProfilePage() {
  await requireAdmin();
  const profile = await getProfileRow();

  return (
    <AdminShell title="Perfil">
      <ProfileForm profile={profile} />
    </AdminShell>
  );
}
