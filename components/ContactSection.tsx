import { siteContent } from "@/data/siteContent";

export default function ContactSection() {
  const { contact } = siteContent;

  return (
    <section id="contact" className="scroll-mt-24 py-16 md:py-24">
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">{contact.title}</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-zinc-600">{contact.description}</p>

      <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-6 md:p-8">
        <div className="grid gap-4 text-sm md:text-base">
          <a className="text-zinc-700 underline-offset-4 hover:underline" href={`mailto:${contact.email}`}>
            이메일: {contact.email}
          </a>
          <a
            className="text-zinc-700 underline-offset-4 hover:underline"
            href={contact.instagram}
            target="_blank"
            rel="noreferrer"
          >
            Instagram: {contact.instagram}
          </a>
          <a
            className="text-zinc-700 underline-offset-4 hover:underline"
            href={contact.behance}
            target="_blank"
            rel="noreferrer"
          >
            Behance: {contact.behance}
          </a>
        </div>
      </div>
    </section>
  );
}
