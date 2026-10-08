"use client";

import { useState } from "react";
import { site } from "@/lib/site-data";

type FormState = {
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  brief: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  company: "",
  phone: "",
  email: "",
  service: "",
  brief: "",
  consent: false,
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [message, setMessage] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.brief.trim() || !form.consent) {
      setMessage("Please complete the required fields and confirm consent before continuing.");
      return;
    }

    const lines = [
      "Hello GRWSURE INFOTECH, I'd like to discuss a project.",
      `Name: ${form.name.trim()}`,
      form.company.trim() ? `Company: ${form.company.trim()}` : "",
      `Phone: ${form.phone.trim()}`,
      form.email.trim() ? `Email: ${form.email.trim()}` : "",
      form.service ? `Area: ${form.service}` : "",
      `Project brief: ${form.brief.trim()}`,
    ].filter(Boolean);

    const url = `https://wa.me/${site.phoneInternational.replace("+", "")}?text=${encodeURIComponent(lines.join("\n"))}`;
    setMessage("Opening WhatsApp with your project details. You can review the message before sending.");
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <label>
          <span>Name <em>*</em></span>
          <input name="name" autoComplete="name" value={form.name} onChange={(event) => update("name", event.target.value)} required />
        </label>
        <label>
          <span>Company / organization</span>
          <input name="organization" autoComplete="organization" value={form.company} onChange={(event) => update("company", event.target.value)} />
        </label>
        <label>
          <span>Phone / WhatsApp <em>*</em></span>
          <input name="tel" type="tel" autoComplete="tel" value={form.phone} onChange={(event) => update("phone", event.target.value)} required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" value={form.email} onChange={(event) => update("email", event.target.value)} />
        </label>
      </div>
      <label>
        <span>What can we help with?</span>
        <select name="service" value={form.service} onChange={(event) => update("service", event.target.value)}>
          <option value="">Select an area</option>
          <option>Custom software</option>
          <option>Web application</option>
          <option>Mobile application</option>
          <option>AI agent</option>
          <option>Business automation</option>
          <option>ERP or CRM</option>
          <option>UI/UX design</option>
        </select>
      </label>
      <label>
        <span>Project brief <em>*</em></span>
        <textarea
          name="brief"
          rows={6}
          placeholder="What happens today, who uses it, and what would a better outcome look like?"
          value={form.brief}
          onChange={(event) => update("brief", event.target.value)}
          required
        />
      </label>
      <label className="check-field">
        <input type="checkbox" name="consent" checked={form.consent} onChange={(event) => update("consent", event.target.checked)} required />
        <span>I agree to share these details with GRWSURE INFOTECH through WhatsApp for this project enquiry.</span>
      </label>
      <button className="button button-primary button-submit" type="submit">Continue on WhatsApp</button>
      <p className="form-status" aria-live="polite">{message}</p>
      <p className="form-note">No information is sent until you review and send the prepared message in WhatsApp.</p>
    </form>
  );
}
