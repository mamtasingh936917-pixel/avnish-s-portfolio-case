import { supabaseAdmin } from "@/integrations/supabase/client.server";

export type ContactPayload = {
  fullName: string;
  email: string;
  phone: string;
  address?: string | undefined;
  subject: string;
  message: string;
};

async function hashIp(ip: string): Promise<string> {
  const data = new TextEncoder().encode(`portfolio:${ip}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

const sanitize = (value: string, max: number) =>
  value.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, "").trim().slice(0, max);

export async function storeContactMessage(payload: ContactPayload, ip: string) {
  const ipHash = await hashIp(ip || "unknown");

  // Basic spam / rate-limit protection: max 3 messages per IP per hour.
  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const { count, error: countError } = await supabaseAdmin
    .from("contact_messages")
    .select("id", { count: "exact", head: true })
    .eq("ip_hash", ipHash)
    .gte("created_at", since);

  if (countError) throw new Error("STORE_FAILED");
  if ((count ?? 0) >= 3) throw new Error("RATE_LIMITED");

  const { error } = await supabaseAdmin.from("contact_messages").insert({
    full_name: sanitize(payload.fullName, 120),
    email: sanitize(payload.email, 200),
    phone: sanitize(payload.phone, 30),
    address: payload.address ? sanitize(payload.address, 300) : null,
    subject: sanitize(payload.subject, 200),
    message: sanitize(payload.message, 4000),
    ip_hash: ipHash,
  });

  if (error) throw new Error("STORE_FAILED");

  return { ok: true as const };
}
