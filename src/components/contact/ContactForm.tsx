"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { services } from "@/lib/content";

interface FormValues {
  name: string;
  contact: string;
  service: string;
  message: string;
}

type Errors = Partial<Record<keyof FormValues, string>>;

const inputClass =
  "w-full border border-line bg-paper px-4 py-3 text-sm text-ink transition-colors placeholder:text-faint focus:border-ink focus:outline-none";

export function ContactForm() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    contact: "",
    service: "General inquiry",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  function setField(field: keyof FormValues, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate(): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.contact.trim())
      next.contact = "Please add a phone number or email.";
    if (!values.message.trim())
      next.message = "Please tell us a little about your project.";
    else if (values.message.trim().length < 10)
      next.message = "A little more detail helps us respond better.";
    return next;
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const message = [
      "Hello VIVAME Design,",
      "",
      `Name: ${values.name}`,
      `Contact: ${values.contact}`,
      `Service: ${values.service}`,
      "",
      values.message,
    ].join("\n");

    const url = `${site.phones[0].wa}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div>
        <label
          htmlFor="cf-name"
          className="mb-2 block text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink"
        >
          Name
        </label>
        <input
          id="cf-name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => setField("name", e.target.value)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "cf-name-error" : undefined}
          className={inputClass}
          placeholder="Your name"
        />
        {errors.name && (
          <p id="cf-name-error" className="mt-2 text-xs text-red-700">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="cf-contact"
          className="mb-2 block text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink"
        >
          Phone or email
        </label>
        <input
          id="cf-contact"
          type="text"
          autoComplete="tel"
          value={values.contact}
          onChange={(e) => setField("contact", e.target.value)}
          aria-invalid={!!errors.contact}
          aria-describedby={errors.contact ? "cf-contact-error" : undefined}
          className={inputClass}
          placeholder="How can we reach you?"
        />
        {errors.contact && (
          <p id="cf-contact-error" className="mt-2 text-xs text-red-700">
            {errors.contact}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="cf-service"
          className="mb-2 block text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink"
        >
          Service
        </label>
        <select
          id="cf-service"
          value={values.service}
          onChange={(e) => setField("service", e.target.value)}
          className={inputClass}
        >
          <option>General inquiry</option>
          {services.map((service) => (
            <option key={service.slug}>{service.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="cf-message"
          className="mb-2 block text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink"
        >
          Your project
        </label>
        <textarea
          id="cf-message"
          rows={5}
          value={values.message}
          onChange={(e) => setField("message", e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "cf-message-error" : undefined}
          className={`${inputClass} resize-y`}
          placeholder="Tell us about your space, timeline, and what you're hoping to achieve."
        />
        {errors.message && (
          <p id="cf-message-error" className="mt-2 text-xs text-red-700">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" className="btn btn-dark w-full sm:w-auto">
        Send via WhatsApp
      </button>
      <p className="text-xs leading-5 text-faint">
        Submitting opens WhatsApp with your message pre-filled — nothing is
        stored on this site.
      </p>
    </form>
  );
}
