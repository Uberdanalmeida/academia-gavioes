import { NextResponse } from "next/server";
import { cleanLeadText, validateLead } from "@/lib/lead-validation";

type LeadPayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  plan?: unknown;
  consent?: unknown;
  website?: unknown;
};

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }

  if (cleanLeadText(payload.website, 100)) {
    return NextResponse.json({ ok: true });
  }

  const validation = validateLead(payload);
  const email = cleanLeadText(payload.email, 120);
  const plan = cleanLeadText(payload.plan, 80);

  if (!validation.valid) {
    return NextResponse.json(
      { error: "Informe seu nome, telefone e aceite a política de privacidade." },
      { status: 422 },
    );
  }

  const lead = {
    name: validation.name,
    phone: validation.phone,
    email,
    plan,
    createdAt: new Date().toISOString(),
  };
  const webhookUrl = process.env.LEADS_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });

      if (!response.ok) {
        console.error("Falha ao enviar lead:", response.status);
        return NextResponse.json(
          { error: "Não foi possível enviar seus dados agora." },
          { status: 502 },
        );
      }
    } catch (error) {
      console.error("Erro ao enviar lead:", error);
      return NextResponse.json(
        { error: "Não foi possível enviar seus dados agora." },
        { status: 502 },
      );
    }
  } else {
    return NextResponse.json(
      { error: "O atendimento está temporariamente indisponível." },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
