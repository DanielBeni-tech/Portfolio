import { profile } from '@/content/profile';

export function Footer() {
  return (
    <footer className="px-3 pb-3 md:px-6 md:pb-6">
      <div className="mx-auto max-w-[1440px] border-t border-line py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-line">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photos/daniel-portrait.jpeg"
              alt="Daniel Beni"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div>
            <span className="font-bold text-sm">{profile.name}</span>
            <p className="font-mono text-[10px] text-muted uppercase tracking-wider">
              {profile.location}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-muted hover:text-ink transition-colors uppercase tracking-wider"
            >
              {social.label} ↗
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-xs text-muted hover:text-ink transition-colors uppercase tracking-wider"
          >
            Email ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
