export const onRequestPost: PagesFunction = async ({ request, env }) => {
  const formData = await request.formData();
  const name = formData.get("name") || "";
  const email = formData.get("email") || "";
  const message = formData.get("message") || "";

  if (!name || !email || !message) {
    return new Response("Missing fields", { status: 400 });
  }

  const res = await fetch(env.N8N_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });

  if (!res.ok) {
    return new Response("Upstream error", { status: 502 });
  }

  return new Response("Form submitted successfully!", { status: 200 });
};
