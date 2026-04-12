import { profile } from "../data/siteContent";

export default function ContactSection() {
  return (
    <section id="contact" className="grid gap-4 py-16 md:py-24">
      <h2 className="text-3xl font-semibold text-zinc-950 md:text-4xl">Contact</h2>
      <p className="max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg">
        새로운 프로젝트와 협업 기회를 기다리고 있습니다. 작은 작업이라도 진심을 담아, 보기 좋고
        전달력 있는 결과물로 답하겠습니다.
      </p>
      <div className="space-y-2 text-sm text-zinc-700 md:text-base">
        <p>Email. {profile.email}</p>
        <p>Instagram. {profile.instagram}</p>
        <p>Behance. {profile.behance}</p>
        <p>GitHub. {profile.github}</p>
      </div>
    </section>
  );
}
