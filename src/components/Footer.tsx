import { profile } from '@/content/profile';

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="max-w-container mx-auto px-6 lg:px-10 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="font-mono text-xs text-muted tracking-widest uppercase">
          © 2026 Daniel Beni — {profile.location}
        </div>
        <div className="flex items-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted hover:text-text transition-colors tracking-widest uppercase"
          >
            GitHub ↗
          </a>
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted hover:text-text transition-colors tracking-widest uppercase"
            >
              LinkedIn ↗
            </a>
          )}
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-xs text-muted hover:text-text transition-colors tracking-widest uppercase"
          >
            Email ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
