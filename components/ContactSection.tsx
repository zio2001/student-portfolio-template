import { siteContent } from "@/data/siteContent";
import Reveal from "./Reveal";

export default function ContactSection() {
  const { contact } = siteContent;

  return (
    <section id="contact" className="scroll-mt-24 py-16 md:py-24">
      <Reveal>
        <h2 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Contact</h2>
      </Reveal>

      <div className="mt-8 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
            <h3 className="text-lg font-semibold text-zinc-900">연락처</h3>
            <div className="mt-5 space-y-3 text-zinc-700">
              <a href={`mailto:${contact.email}`} className="block hover:text-fuchsia-700">
                📧 {contact.email}
              </a>
              <a href={`tel:${contact.phone.replace(/-/g, "")}`} className="block hover:text-fuchsia-700">
                ☎ {contact.phone}
              </a>
              <p>📍 {contact.location}</p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.1}>
          <form className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
            <h3 className="text-lg font-semibold text-zinc-900">문의 폼</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <input className="input" placeholder="이름" name="name" />
              <input className="input" placeholder="이메일" name="email" type="email" />
            </div>
            <input className="input mt-4" placeholder="제목" name="subject" />
            <textarea className="input mt-4 min-h-32" placeholder="문의 내용을 작성해 주세요." name="message" />
            <button
              type="submit"
              className="mt-4 inline-flex rounded-full bg-fuchsia-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-800"
            >
              문의 보내기
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
