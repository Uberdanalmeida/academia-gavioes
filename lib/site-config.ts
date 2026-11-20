export const siteConfig = {
  name: "Academia Gaviões",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
    "contato@academiagavioes.com.br",
  phoneDisplay:
    process.env.NEXT_PUBLIC_CONTACT_PHONE || "Adicionar telefone",
  whatsapp:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") || "",
  address:
    process.env.NEXT_PUBLIC_ADDRESS || "Endereço a confirmar",
  openingHours:
    process.env.NEXT_PUBLIC_OPENING_HOURS || "Horário a confirmar",
};
