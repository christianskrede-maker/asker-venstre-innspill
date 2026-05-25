import { redirect } from "next/navigation";
import { Resend } from "resend";

const allProgramEmails = [
  "elisabeth.holter-schoyen@politiker.asker.no",
  "helene.e.andersen@icloud.com",
  "brage.skarstein@protonmail.com",
  "christian.skrede@politiker.asker.no",
  "piajosendal@gmail.com",
  "jhhermansen@gmail.com",
  "harald@scandlink.no",
  "eirik-d@online.no",
  "chr.apu@gmail.com",
  "susannebondevik@gmail.com",
];

const chapterRecipients: Record<string, string[]> = {
  "DEG – Hverdagen din i Asker": allProgramEmails,

  "Trygg oppvekst": [
    "elisabeth.holter-schoyen@politiker.asker.no",
    "helene.e.andersen@icloud.com",
    "brage.skarstein@protonmail.com",
  ],

  "Bolig og levende nærmiljø": [
    "christian.skrede@politiker.asker.no",
    "piajosendal@gmail.com",
  ],

  "Jobb, næringsliv og grønn mobilitet": [
    "jhhermansen@gmail.com",
    "harald@scandlink.no",
  ],

  "Kultur, idrett og frivillighet": [
    "brage.skarstein@protonmail.com",
    "eirik-d@online.no",
  ],

  "Helse, omsorg, trygghet og beredskap": [
    "eirik-d@online.no",
    "chr.apu@gmail.com",
  ],

  "Klima, natur og Oslofjorden": [
    "elisabeth.holter-schoyen@politiker.asker.no",
    "susannebondevik@gmail.com",
    "chr.apu@gmail.com",
  ],

  "Demokrati og kommunen": [
    "jhhermansen@gmail.com",
    "helene.e.andersen@icloud.com",
  ],
};

export async function POST(request: Request) {
  const formData = await request.formData();

  const kapittel = String(formData.get("kapittel") || "Ukjent tema");
  const innspill = String(formData.get("innspill") || "");
  const kontaktinfo = String(formData.get("kontaktinfo") || "Anonym");
  const foreslattKandidat = String(formData.get("foreslattKandidat") || "");
  const redirectTo = String(formData.get("redirectTo") || "/");

  const resend = new Resend(process.env.RESEND_API_KEY);

  const isNominasjon = kapittel.trim().toLowerCase() === "nominasjonsinnspill";
  const isValgkamp =
    kapittel.trim().toLowerCase() === "melding til valgkampsjefen";

  const recipients = isNominasjon
    ? ["tobiaswaage@live.com", "elisabeth.holter.schoyen@gmail.com"]
    : isValgkamp
    ? ["venstrepetter@gmail.com"]
    : chapterRecipients[kapittel] || ["christian.skrede@politiker.asker.no"];

  const subject = isValgkamp
    ? "Melding til valgkampsjefen"
    : isNominasjon
    ? "Nominasjonsinnspill – Asker Venstre"
    : `Programinnspill – ${kapittel}`;

  const text = isValgkamp
    ? `
Ny melding til valgkampsjefen

Ønsket frivillig:
${kontaktinfo}

Melding:
${innspill}
    `
    : isNominasjon
    ? `
Nytt nominasjonsinnspill til Asker Venstre

Foreslått kandidat:
${foreslattKandidat || "Ikke oppgitt"}

Begrunnelse / innspill:
${innspill}

Kontaktinfo:
${kontaktinfo}
    `
    : `
Nytt programinnspill til Asker Venstre

Kapittel:
${kapittel}

Innspill:
${innspill}

Kontaktinfo:
${kontaktinfo}
    `;

  await resend.emails.send({
    from: "Asker Venstre <post@askervenstre.com>",
    to: recipients,
    subject,
    text,
  });

  redirect(redirectTo);
}
