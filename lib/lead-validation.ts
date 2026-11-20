export function cleanLeadText(value: unknown, maxLength: number) {
  return typeof value === "string"
    ? value.trim().replace(/[\r\n]+/g, " ").slice(0, maxLength)
    : "";
}

export function validateLead(payload: {
  name?: unknown;
  phone?: unknown;
  consent?: unknown;
}) {
  const name = cleanLeadText(payload.name, 80);
  const phone = cleanLeadText(payload.phone, 30);

  return {
    valid: name.length >= 2 && phone.length >= 8 && payload.consent === true,
    name,
    phone,
  };
}
