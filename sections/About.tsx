import Container from "@/components/layout/Container";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center py-20"
    >
      <Container>
        <div className="flex justify-center">

          <div
            className="
              relative
              w-full
              max-w-5xl
              overflow-hidden
              rounded-[2rem]
              border
              border-white/[0.12]
              bg-white/[0.035]
              px-8
              py-10
              shadow-[0_8px_40px_rgba(0,0,0,0.25)]
              backdrop-blur-2xl
              md:px-12
              md:py-12
            "
          >

            {/* Soft Glass Highlight */}
            <div
              className="
                pointer-events-none
                absolute
                -top-40
                left-1/2
                h-72
                w-[500px]
                -translate-x-1/2
                rounded-full
                bg-white/[0.05]
                blur-3xl
              "
            />

            {/* Header */}
            <div className="relative mb-10 text-center">

              <h2 className="text-5xl font-light tracking-tight md:text-6xl">
                about
              </h2>

              <p className="mt-4 text-base text-zinc-400">
                A glimpse into my journey, interests, and what drives me.
              </p>

            </div>

            {/* Main Content */}
            <div className="relative grid items-center gap-12 md:grid-cols-[260px_1fr]">

              {/* Image */}
              <div className="mx-auto w-full max-w-[220px]">

                <div
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/[0.12]
                    bg-white/[0.04]
                    p-2
                  "
                >

                  <Image
                    src="/images/about-photo1.jpeg"
                    alt="Manan"
                    width={300}
                    height={380}
                    className="h-auto w-full rounded-xl object-cover"
                  />

                </div>

                {/* Social Links */}
                <div className="mt-6 flex justify-center gap-6 text-xs">

                  <a
                    href="#"
                    className="text-zinc-400 transition hover:text-white"
                  >
                    linkedin
                  </a>

                  <a
                    href="#"
                    className="text-zinc-400 transition hover:text-white"
                  >
                    instagram
                  </a>

                </div>

              </div>

              {/* Text */}
              <div className="space-y-5 text-sm leading-7 text-zinc-300 md:text-base">

                <p>
                  Since school, there was always this habit of making things,
                  DIY stuff, sketching on the last pages of textbooks, just
                  constantly creating something or the other. Looking back,
                  that probably pointed me towards design pretty early on.
                </p>

                <p>
                  Studied design and animation, and now have around 2 years of
                  experience, mostly in an early-stage startup where things
                  moved fast and there was a chance to work on a bit of
                  everything.
                </p>

                <p>
                  Outside of work, there's a strong pull towards visuals and
                  storytelling, usually through street photography, music, and
                  just noticing small details in everyday life.
                </p>

                <p>
                  Right now, just focused on getting better at the craft,
                  building meaningful work, and eventually creating products
                  of my own.
                </p>

              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}