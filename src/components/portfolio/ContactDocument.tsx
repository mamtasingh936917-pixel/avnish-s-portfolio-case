import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { sendContactMessage } from "@/lib/contact.functions";
import { PROFILE } from "@/lib/portfolio-data";

const SUCCESS_MESSAGE =
  "Thank you! Your message has been sent successfully. I'll get back to you soon.";
const ERROR_MESSAGE =
  "Something went wrong. Please try again or contact me directly through email.";

const fieldClass =
  "w-full border-0 border-b border-ink/30 bg-transparent px-1 pb-2 pt-3 text-sm text-ink outline-none transition placeholder:text-ink-soft/60 focus:border-seal";

export function ContactDocument() {
  const submit = useServerFn(sendContactMessage);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { fullName: "", email: "", phone: "", address: "", subject: "", message: "" },
  });

  const onSubmit = handleSubmit(async (values) => {
    setStatus("idle");
    try {
      await submit({ data: values });
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  });

  const links = [
    { label: "Email Me", href: `mailto:${PROFILE.email}`, external: false },
    { label: "LinkedIn", href: PROFILE.linkedin, external: true },
    { label: "GitHub", href: PROFILE.github, external: true },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h3 className="font-display text-4xl leading-none tracking-tight text-ink sm:text-5xl">
          LET&apos;S CONNECT
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-6 text-ink/85">
          Have a question, project idea, collaboration opportunity, or simply want to get in touch? Send me a
          message.
        </p>
      </header>

      <section className="border-y border-ink/15 py-5">
        <p className="font-display text-2xl tracking-wide text-ink">{PROFILE.name}</p>
        <dl className="mt-4 grid gap-3 sm:grid-cols-2">
          <div>
            <dt className="label-caps text-ink-soft">Email</dt>
            <dd className="mt-1 text-sm text-ink">
              <a className="underline decoration-seal/50 underline-offset-4" href={`mailto:${PROFILE.email}`}>
                {PROFILE.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="label-caps text-ink-soft">Mobile</dt>
            <dd className="mt-1 text-sm text-ink">
              <a className="underline decoration-seal/50 underline-offset-4" href={`tel:${PROFILE.mobile}`}>
                {PROFILE.mobile}
              </a>
            </dd>
          </div>
          <div className="min-w-0">
            <dt className="label-caps text-ink-soft">LinkedIn</dt>
            <dd className="mt-1 truncate text-sm text-ink">
              <a
                className="underline decoration-seal/50 underline-offset-4"
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                {PROFILE.linkedin}
              </a>
            </dd>
          </div>
          <div className="min-w-0">
            <dt className="label-caps text-ink-soft">GitHub</dt>
            <dd className="mt-1 truncate text-sm text-ink">
              <a
                className="underline decoration-seal/50 underline-offset-4"
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {PROFILE.github}
              </a>
            </dd>
          </div>
        </dl>

        <div className="mt-5 flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-2.5 text-sm font-medium text-paper transition hover:bg-seal"
            >
              {link.label}
              <span aria-hidden>↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* Message paper card */}
      <section className="paper-sheet ruled-lines rounded-sm border border-ink/15 px-5 py-6 sm:px-8">
        <h4 className="font-display text-2xl text-ink">Send Me a Message</h4>

        <form onSubmit={onSubmit} noValidate className="mt-5 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="label-caps text-ink-soft" htmlFor="fullName">
                Full Name
              </label>
              <input id="fullName" placeholder="Enter your name" className={fieldClass} {...register("fullName")} />
              {errors.fullName && <p className="mt-1 text-xs text-destructive">{errors.fullName.message}</p>}
            </div>
            <div>
              <label className="label-caps text-ink-soft" htmlFor="email">
                Gmail / Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className={fieldClass}
                {...register("email")}
              />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
            </div>
            <div>
              <label className="label-caps text-ink-soft" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                inputMode="tel"
                placeholder="Enter your phone number"
                className={fieldClass}
                {...register("phone")}
              />
              {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>}
            </div>
            <div>
              <label className="label-caps text-ink-soft" htmlFor="address">
                Address (Optional)
              </label>
              <input id="address" placeholder="Enter your address" className={fieldClass} {...register("address")} />
            </div>
          </div>

          <div>
            <label className="label-caps text-ink-soft" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              placeholder="What would you like to discuss?"
              className={fieldClass}
              {...register("subject")}
            />
            {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject.message}</p>}
          </div>

          <div>
            <label className="label-caps text-ink-soft" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Write your message here..."
              className={`${fieldClass} resize-y border border-ink/20 px-3 py-2`}
              {...register("message")}
            />
            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="label-caps rounded-sm bg-seal px-7 py-3 text-paper transition hover:bg-ink disabled:opacity-60"
            >
              {isSubmitting ? "Sending…" : "Send Message"}
            </button>
            {status === "success" && (
              <p className="animate-fade-rise text-sm text-ink" role="status">
                {SUCCESS_MESSAGE}
              </p>
            )}
            {status === "error" && (
              <p className="animate-fade-rise text-sm text-destructive" role="alert">
                {ERROR_MESSAGE}
              </p>
            )}
          </div>
        </form>
      </section>

      <footer className="border-t border-ink/15 pt-5 text-center">
        <p className="text-sm text-ink/85">Thank you for visiting my portfolio.</p>
        <p className="hand-note mt-2 text-2xl">— Avnish Singh</p>
      </footer>
    </div>
  );
}
