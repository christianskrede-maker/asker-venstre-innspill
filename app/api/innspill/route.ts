import { redirect } from "next/navigation";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData = await request.formData();

  const kapittel = String(formData.get("kapittel") || "Ukjent kapittel");
  const innspill = String(formData.get("innspill") || "");
  const kontaktinfo = String(formData.get("kontaktinfo") || "Anonym");

  await resend.emails.send({
    from: "Asker Venstre <onboarding@resend.dev>",
    to: "christianskrede@gmail.com",
    subject: `Innspill til ${kapittel}`,
    text: `
Nytt innspill til Asker Venstres programarbeid

Kapittel:
${kapittel}

Innspill:
${innspill}

Kontaktinfo:
${kontaktinfo}
    `,
  });

  redirect("/");
}
