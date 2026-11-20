import { describe, expect, it } from "vitest";
import { cleanLeadText, validateLead } from "./lead-validation";

describe("cleanLeadText", () => {
  it("remove quebras de linha e limita o tamanho", () => {
    expect(cleanLeadText(" Ana\nSilva ", 20)).toBe("Ana Silva");
  });

  it("retorna vazio para valores não textuais", () => {
    expect(cleanLeadText(123, 20)).toBe("");
  });
});

describe("validateLead", () => {
  it("aceita um lead com dados mínimos válidos", () => {
    expect(
      validateLead({ name: "Ana Silva", phone: "(11) 99999-9999", consent: true }),
    ).toEqual({
      valid: true,
      name: "Ana Silva",
      phone: "(11) 99999-9999",
    });
  });

  it("recusa lead sem consentimento", () => {
    expect(
      validateLead({ name: "Ana Silva", phone: "11999999999", consent: false }).valid,
    ).toBe(false);
  });

  it("recusa nome curto ou telefone curto", () => {
    expect(validateLead({ name: "A", phone: "123", consent: true }).valid).toBe(false);
  });
});
