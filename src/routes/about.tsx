import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Code2, Github, ArrowLeft } from "lucide-react";
import { siteConfig } from "../lib/site-config";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Tentang Developer — NimeHub" },
      { name: "description", content: "Informasi developer dan cara mendukung NimeHub." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="mx-auto min-h-[60vh] max-w-4xl px-4 py-10 sm:py-16">
      <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"><ArrowLeft className="h-4 w-4" /> Kembali ke Beranda</Link>
      <section className="rounded-3xl border border-border bg-card p-6 sm:p-10">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Code2 className="h-7 w-7" /></div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Tentang Developer</p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Halo, saya {siteConfig.developer}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">Saya mengembangkan NimeHub sebagai tempat untuk menjelajahi anime, melihat jadwal tayang, dan mengelola daftar tontonan dalam satu pengalaman yang praktis. Terima kasih sudah berkunjung dan ikut mendukung pengembangan proyek ini.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border p-5"><h2 className="font-bold text-foreground">Tentang NimeHub</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Katalog dan informasi anime subtitle Indonesia. Ketersediaan sumber video dapat berubah mengikuti layanan pihak ketiga.</p></div>
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5"><Heart className="h-5 w-5 text-primary" /><h2 className="mt-2 font-bold text-foreground">Bantu layanan tetap berjalan</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Dukungan sukarela membantu biaya domain, server, pemeliharaan, dan pengembangan fitur baru. Pindai QRIS berikut menggunakan aplikasi pembayaran yang mendukung QRIS.</p><a href="/images/donation-qris.jpg" target="_blank" rel="noreferrer" className="mt-4 block overflow-hidden rounded-xl border border-border bg-background"><img src="/images/donation-qris.jpg" alt="Poster QRIS donasi dari Hanz Developer" loading="lazy" className="h-auto w-full object-contain" /></a><p className="mt-3 text-xs leading-5 text-muted-foreground">Sebelum membayar, pastikan nama penerima dan nominal sudah benar. Setelah transfer, simpan screenshot bukti pembayaran dan kirimkan kepada developer.</p>{siteConfig.donationUrl ? <a href={siteConfig.donationUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex rounded-xl bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">Info Donasi</a> : null}</div>
        </div>
        <div className="mt-8 border-t border-border pt-6"><a href="https://github.com/hanz712" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"><Github className="h-4 w-4" /> GitHub Developer</a></div>
      </section>
    </main>
  );
}
