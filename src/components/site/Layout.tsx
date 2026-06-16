import { useReveal } from "@/hooks/use-reveal";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";
import { ScrollProgress } from "./ScrollProgress";
import { BackToTop } from "./BackToTop";
import { ChatAssistant } from "./ChatAssistant";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  useReveal();
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFab />
      <BackToTop />
      <ChatAssistant />
    </div>
  );
}
