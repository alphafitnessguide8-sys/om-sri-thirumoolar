import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

const SYSTEM_PROMPT = `You are the friendly AI assistant for STM — Om Sri Thirumoolar Siddha & Ayurveda Clinic in Puducherry.

ABOUT STM:
- Location: No: 3, F-Lane, V.V.P Nagar, Thattanchavady, Puducherry – 605009
- Phone: 9952232078
- Working hours: Open every day (Mon–Sun), 7:00 AM – 9:00 PM
- 15+ years of experience, 10,000+ patients treated

DISCIPLINES OFFERED:
1. Siddha — Tamil Nadu's ancient science of life, herbal medicine and balance.
2. Ayurveda — Time-honoured therapies (Abhyanga, Shirodhara) that balance the doshas.
3. Varma Therapy — Subtle pressure on vital points for pain, paralysis, energy blocks.
4. Yoga Therapy — Personalised āsana and prāṇāyāma for strength, calm, clarity.

SPECIALITIES: Pain management, paralysis & nerve care, kidney care, liver care, skin wellness, fertility care, stress & sleep, post-stroke rehab.

STYLE:
- Warm, calm, concise. 2–4 short paragraphs max.
- If asked to book, direct users to the "Book Consultation" page (/appointment) or call 9952232078.
- Never invent prices, doctor names, or medical guarantees. Recommend an in-person consultation for diagnosis.
- Only answer questions related to STM, its treatments, wellness, or working hours. Politely redirect off-topic questions.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as { messages?: UIMessage[] };
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }
        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const gateway = createLovableAiGatewayProvider(key);
        const result = streamText({
          model: gateway("google/gemini-3-flash-preview"),
          system: SYSTEM_PROMPT,
          messages: await convertToModelMessages(messages),
        });

        return result.toUIMessageStreamResponse({ originalMessages: messages });
      },
    },
  },
});
