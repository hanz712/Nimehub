import { Link } from "@tanstack/react-router";
import { Heart, UserRound } from "lucide-react";
import { siteConfig } from "../../lib/site-config";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/80 bg-card/80 dark:bg-surface/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Col */}
          <div className="space-y-3 sm:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <div className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center overflow-hidden rounded-xl border border-primary/30 bg-primary/10 shadow-xs ring-1 ring-primary/20">
                <img
                  src="/images/logo.jpg"
                  alt="NimeHub Logo"
                  className="h-full w-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-foreground">
                nime<span className="text-primary font-bold">hub</span>
              </span>
            </Link>
            <p className="max-w-md text-xs text-muted-foreground leading-relaxed">
              Platform streaming dan informasi anime subtitle Indonesia terlengkap, gratis, dan
              tanpa ribet. Seluruh data disediakan oleh API pihak ketiga tanpa menyimpan berkas
              video di server kami.
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs">
              <span className="noir-kicker text-muted-foreground/80">LAYANAN AKTIF · SUB INDO</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-foreground">
              Navigasi
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/ongoing"
                  search={{ page: 1 }}
                  className="hover:text-primary transition-colors"
                >
                  Anime Ongoing
                </Link>
              </li>
              <li>
                <Link
                  to="/tamat"
                  search={{ page: 1 }}
                  className="hover:text-primary transition-colors"
                >
                  Anime Tamat
                </Link>
              </li>
              <li>
                <Link to="/jadwal" className="hover:text-primary transition-colors">
                  Jadwal Rilis
                </Link>
              </li>
              <li>
                <Link to="/genre" className="hover:text-primary transition-colors">
                  Daftar Genre
                </Link>
              </li>
            </ul>
          </div>

          {/* Fitur Pengguna */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-foreground">
              Fitur Pengguna
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link to="/watchlist" className="hover:text-primary transition-colors">
                  Daftar Watchlist
                </Link>
              </li>
              <li>
                <Link to="/riwayat" className="hover:text-primary transition-colors">
                  Riwayat Tontonan
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground/80">Multi Kualitas (360p - 720p HD)</span>
              </li>
              <li>
                <span className="text-muted-foreground/80">Mode Bioskop (Theater)</span>
              </li>
            </ul>
          </div>

          {/* Developer & Support */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-foreground">Tentang NimeHub</h4>
            <p className="text-[11px] text-muted-foreground leading-relaxed">Dikembangkan oleh <strong className="text-foreground">{siteConfig.developer}</strong>.</p>
            <Link to="/about" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"><UserRound className="h-3.5 w-3.5" /> Tentang Developer</Link>
            <a href="#dukungan" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"><Heart className="h-3.5 w-3.5" /> Dukung NimeHub</a>
          </div>

          {/* Legal / Disclaimer */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-foreground">
              Pernyataan
            </h4>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              NimeHub tidak mengunggah atau menyimpan berkas media apa pun. Semua konten
              disediakan oleh layanan pihak ketiga yang tidak berafiliasi.
            </p>
          </div>
        </div>

        <div id="dukungan" className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-5">
          <h4 className="flex items-center gap-2 font-display text-sm font-bold text-foreground"><Heart className="h-4 w-4 text-primary" /> Dukung NimeHub tetap berjalan</h4>
          <p className="mt-2 max-w-3xl text-xs leading-relaxed text-muted-foreground">Biaya domain, server, dan pengembangan membantu menjaga layanan tetap tersedia. Jika ingin membantu, kamu bisa memindai QRIS di bawah. Setelah transfer, kirimkan screenshot bukti pembayaran kepada developer.</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(220px,320px)] sm:items-start">
            <div className="space-y-2 text-xs leading-relaxed text-muted-foreground">
              <p className="font-semibold text-foreground">Cara berdonasi</p>
              <ol className="list-decimal space-y-1 pl-4">
                <li>Buka aplikasi pembayaran yang mendukung QRIS.</li>
                <li>Pindai kode QRIS pada gambar.</li>
                <li>Periksa nama penerima dan nominal sebelum membayar.</li>
                <li>Simpan screenshot bukti transfer dan kirimkan kepada developer.</li>
              </ol>
              <p className="pt-1">Donasi bersifat sukarela. Pastikan nama penerima sesuai sebelum mengonfirmasi pembayaran.</p>
              {siteConfig.donationUrl ? <a href={siteConfig.donationUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground">Info Donasi</a> : null}
            </div>
            <a href="/images/donation-qris.jpg" target="_blank" rel="noreferrer" className="block overflow-hidden rounded-xl border border-border bg-background">
              <img src="/images/donation-qris.jpg" alt="Poster QRIS donasi NimeHub dari Hanz Developer" loading="lazy" className="h-auto w-full object-contain" />
              <span className="block px-3 py-2 text-center text-xs font-semibold text-foreground">Buka gambar QRIS ukuran penuh</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} NimeHub. Dibuat dengan antarmuka modern & responsif.</p>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <Link to="/jadwal" className="hover:text-primary transition-colors">
              Jadwal
            </Link>
            <span>•</span>
            <Link
              to="/ongoing"
              search={{ page: 1 }}
              className="hover:text-primary transition-colors"
            >
              Ongoing
            </Link>
            <span>•</span>
            <Link to="/tamat" search={{ page: 1 }} className="hover:text-primary transition-colors">
              Tamat
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
