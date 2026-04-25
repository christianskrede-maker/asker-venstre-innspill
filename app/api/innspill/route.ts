import { redirect } from "next/navigation";
import { Resend } from "resend";

export async function POST(request: Request) {
  const formData = await request.formData();

  const kapittel = String(formData.get("kapittel") || "Ukjent kapittel");
  const innspill = String(formData.get("innspill") || "");
  const kontaktinfo = String(formData.get("kontaktinfo") || "Anonym");
  const foreslattKandidat = String(formData.get("foreslattKandidat") || "");

  const resend = new Resend(process.env.RESEND_API_KEY);

  const isNominasjon = kapittel.trim().toLowerCase() === "nominasjonsinnspill";

  await resend.emails.send({
    from: "Asker Venstre <onboarding@resend.dev>",
    to: isNominasjon
      ? ["tobiaswaage@live.com", "elisabeth.holter.schoyen@gmail.com"]
      : ["christianskrede@gmail.com"],
    subject: `Innspill til ${kapittel}`,
    text: `
Nytt innspill til Asker Venstre

Tema:
${kapittel}

Foreslått kandidat:
${foreslattKandidat || "Ikke oppgitt"}

Innspill:
${innspill}

Kontaktinfo:
${kontaktinfo}
    `,
  });

  redirect("/");
}
