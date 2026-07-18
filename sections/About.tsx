import Container from "@/components/layout/Container";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center px-6 pt-32 pb-24"
    >
      <Container>

        {/* Centered Wrapper */}
        <div className="flex w-full justify-center">

          {/* Glass Box */}
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
              p-10
              shadow-[0_8px_40px_rgba(0,0,0,0.25)]
              backdrop-blur-2xl
              md:p-14
              lg:p-16
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

            {/* Main Content */}
            <div className="relative grid items-center gap-16 md:grid-cols-[300px_1fr]">

              {/* Image */}
              <div className="mx-auto w-full max-w-[260px]">

                <div
                  className="
                    rounded-2xl
                    border
                    border-white/[0.12]
                    bg-white/[0.04]
                    p-3
                    shadow-xl
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

              </div>

              {/* Text */}
              <div className="space-y-6 text-base leading-8 text-zinc-300">

                <p>
                  Since school, there was always this habit of making things,
                  DIY stuff, sketching on the last pages of textbooks, just
                  constantly creating something or the other. Looking back,
                  that probably pointed me towards design pretty early on.
                </p>
                <br></br>

                <p>
                  Started developing and designing real life experiences in
                  the form of websites, and that later transformed into
                  professional full-stack development. 
                </p>
                <br></br>

                <p>
                  Outside of work, there's a strong pull towards visuals and
                  storytelling, usually through street videography, music, and
                  just noticing small details in everyday life.
                </p>

                <p>
                  Right now, just focused on getting better at the work,
                  building meaningful things, and eventually creating products
                  of my own.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Section Label */}
        <div className="mt-16 pl-6 md:pl-10 lg:pl-16">

          <div className="w-full lg:w-[42%] shrink-0 h-full relative z-10">
            <h1
              className="proj-item absolute left-4 bottom--20 text-[clamp(4rem,8vw,7.5rem)] leading-none font-normal text-white"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              about
            </h1>
          </div>

        </div>

      </Container>
    </section>
  );
}