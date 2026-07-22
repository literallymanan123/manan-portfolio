"use client";

import { FormEvent, useState } from "react";
import Container from "@/components/layout/Container";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Contact() {
  useGSAP(() => {
    gsap.from(".contact-item", {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 1.2,
      ease: "power3.out",
    });
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSending(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("Message sent successfully.");

      form.reset();
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen px-6 pt-32 pb-24"
    >
      <Container>
        <div className="relative min-h-screen w-full">

          {/* Glass Contact Form */}
          <div
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-full
              max-w-2xl
              rounded-3xl
              border
              border-white/10
              bg-white/[0.04]
              p-10
              backdrop-blur-2xl
              shadow-[0_20px_80px_rgba(0,0,0,0.35)]
              md:p-14
            "
          >
            <div className="mb-12">

              <h2
                className="
                  contact-item
                  max-w-lg
                  text-4xl
                  font-normal
                  leading-tight
                  tracking-[-0.04em]
                  text-white
                  md:text-5xl
                "
                style={{
                  fontFamily: "var(--font-serif)",
                }}
              >
                Let's create something meaningful together.
              </h2>
            </div>
            <br></br>

            <form
              onSubmit={handleSubmit}
              className="contact-item space-y-8"
            >
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/20
                    bg-white/5
                    p-4
                    text-lg
                    text-white
                    outline-none
                    transition-colors
                    focus:border-white/40
                    placeholder:text-white/40
                  "
                />
              </div>
              <br></br>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/20
                    bg-white/5
                    p-4
                    text-lg
                    text-white
                    outline-none
                    transition-colors
                    focus:border-white/40
                    placeholder:text-white/40
                  "
                />
              </div>
              <br></br>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={4}
                  required
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-white/20
                    bg-white/5
                    p-4
                    text-lg
                    text-white
                    outline-none
                    transition-colors
                    focus:border-white/40
                    placeholder:text-white/40
                  "
                />
              </div>
              <br></br>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className="
                  group
                  flex
                  items-center
                  gap-4
                  text-sm
                  uppercase
                  tracking-[0.2em]
                  text-white
                  transition-opacity
                  hover:opacity-60
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                {isSending ? "Sending..." : "Send message"}

                {!isSending && (
                  <span
                    className="
                      text-xl
                      transition-transform
                      duration-300
                      group-hover:translate-x-2
                    "
                  >
                    →
                  </span>
                )}
              </button>
              <br></br>

              {/* Status Message */}
              {status && (
                <p className="text-sm text-white/60">
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* Social Links */}
          <div className="absolute bottom-8 right-6 md:bottom-12 md:right-12 flex gap-4 z-20">
            <a
              href="https://github.com/literallymanan123"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:text-white hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/manan-chhabra-881a47290"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:text-white hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://instagram.com/literallymanan"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:text-white hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>

        </div>
      </Container>
    </section>
  );
}