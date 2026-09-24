const files = [
  'Hackverse.jpeg',
  'webdev.jpeg',
  'Robotic.jpeg',
  'scrabble2023.jpeg',
  'scraable2024.jpeg',
  'pitching and teammate.jpeg',
];

export default async function CertifsView({
  searchParams,
}: {
  searchParams: Promise<{ i?: string }>;
}) {
  const { i } = await searchParams;
  const index = Math.min(Math.max(Number(i ?? 0), 0), files.length - 1);
  const f = files[index];
  return (
    <main style={{ background: '#111', color: '#fff', margin: 0, padding: 0 }}>
      <div style={{ fontFamily: 'monospace', fontSize: 14, padding: '4px 8px' }}>
        [{index}] {f}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/certifications/${encodeURIComponent(f)}`}
        alt={f}
        style={{ display: 'block', width: '100vw', height: 'calc(100vh - 28px)', objectFit: 'contain' }}
      />
    </main>
  );
}
