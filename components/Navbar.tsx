"use client";

import Image from "next/image";
import Container from "./layout/Container";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/20 backdrop-blur-md">
      <Container>
        <nav className="flex h-20 items-center justify-between">

          {/* Logo */}

          <a href="/">
            <Image
              src="/images/logo1.png"
              alt="Manan Logo"
              width={70}
              height={15}
              priority
              className="h-auto w-auto object-contain"
            />
          </a>

          {/* Navigation */}

          <div className="flex items-center gap-16 text-xl uppercase tracking-wide">

            <a
              href="/projects"
              className="transition hover:text-white"
            >
              Projects
            </a>

            <a
              href="/about"
              className="transition hover:text-white"
            >
              About
            </a>

            <a
              href="/contact"
              className="transition hover:text-white"
            >
              Contact
            </a>

            {/* Resume Download */}

            <a
              href="/resume.pdf"
              download="Manan_Resume.pdf"
              className="transition hover:text-white"
            >
              Resume
            </a>

          </div>

        </nav>
      </Container>
    </header>
  );
}