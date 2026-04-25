import { redirect } from "next/navigation";
import { Resend } from "resend";

export async function POST(request: Request) {
  const formData = await request.formData();

  const kapittel = String(formData.get("kapittel") || "Ukjent tema");
  const innspill = String(formData.get("innspill") || "");
  const kontaktinfo = String(formData.get("kontaktinfo") || "Anonym");
  const foreslattKandidat = String(formData.get("foreslattKandidat") || "");
  const redirectTo = String(formData.get("redirectTo") || "/");

  const resend = new Resend(process.env.RESEND_API_KEY);

  const isNominasjon = kapittel.trim().toLowerCase() === "nominasjonsinnspill";
  const isValgkamp = kapittel.trim().toLowerCase() === "melding til valgkampsjefen";

  await resend.emails.send({
    from: "Asker Venstre <post@askervenstre.com>",
    to: isNominasjon
      ? ["tobiaswaage@live.com", "elisabeth.holter.schoyen@gmail.com"]
      : isValgkamp
      ? ["venstrepetter@gmail.com"]
      : ["christianskrede@gmail.com"],
    subject: `Innspill til ${kapittel}`,
    text: `
Nytt innspill til Asker Venstre

Tema:
${kapittel}

Foreslått kandidat:
${foreslattKandidat || "Ikke oppgitt"}

Melding / innspill:
${innspill}

Kontaktinfo:
${kontaktinfo}
    `,
  });

  redirect(redirectTo);
}
