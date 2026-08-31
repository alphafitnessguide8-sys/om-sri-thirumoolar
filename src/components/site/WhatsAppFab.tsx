export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/919952232078"
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-30 group"


    >
      <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.72_0.18_145)] to-[oklch(0.55_0.16_150)] text-white shadow-elevated group-hover:scale-110 transition">
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor">
          <path d="M16 .5C7.45.5.5 7.45.5 16c0 2.82.74 5.47 2.04 7.78L.5 31.5l7.92-2.07A15.45 15.45 0 0016 31.5C24.55 31.5 31.5 24.55 31.5 16S24.55.5 16 .5zm0 28.2c-2.45 0-4.83-.66-6.91-1.91l-.49-.29-4.7 1.23 1.25-4.58-.32-.5A12.7 12.7 0 113 16c0 7.01 5.7 12.7 13 12.7zm7.27-9.5c-.4-.2-2.36-1.16-2.73-1.3-.37-.13-.64-.2-.9.2s-1.04 1.3-1.27 1.57c-.23.27-.47.3-.87.1-.4-.2-1.69-.62-3.21-1.98-1.19-1.06-1.99-2.37-2.22-2.77-.23-.4-.02-.62.18-.82.18-.18.4-.47.6-.7.2-.23.27-.4.4-.67.13-.27.07-.5-.03-.7-.1-.2-.9-2.16-1.23-2.96-.32-.78-.65-.67-.9-.68l-.77-.01c-.27 0-.7.1-1.07.5-.37.4-1.4 1.37-1.4 3.34 0 1.97 1.43 3.87 1.63 4.14.2.27 2.83 4.32 6.85 6.06.96.41 1.7.66 2.28.85.96.3 1.83.26 2.52.16.77-.12 2.36-.97 2.7-1.9.33-.93.33-1.74.23-1.9-.1-.16-.37-.27-.77-.47z"/>
        </svg>
      </span>
    </a>
  );
}
