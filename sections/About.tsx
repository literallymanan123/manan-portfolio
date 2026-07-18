import Container from "@/components/layout/Container";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#050505] pb-20" style={{ marginTop: "100px" }}>
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-24">
            <h2 className="text-6xl font-light mb-8">about</h2>
            <p className="text-lg text-zinc-400">
              A glimpse into my journey, interests, and what drives me.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
            {/* Left Column - Image & Social Links */}
            <div className="flex flex-col">
              <div className="relative w-full max-w-xs mb-12">
                <Image
                  src="/images/about-photo1.jpeg"
                  alt="Manan"
                  width={300}
                  height={380}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              {/* Social Links */}
              <div className="flex gap-8 text-sm">
                <a href="#" className="text-zinc-400 hover:text-white transition">
                  linkedin
                </a>
                <a href="#" className="text-zinc-400 hover:text-white transition">
                  instagram
                </a>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-8 text-zinc-300 col-span-1 lg:col-span-2 leading-relaxed">
              <p>
                Since school, there was always this habit of making things, DIY stuff, sketching on the last pages of textbooks, just constantly creating something or the other. Looking back, that probably pointed me towards design pretty early on.
              </p>

              <p>
                Studied design and animation, and now have around 2 years of experience, mostly in an early-stage startup where things moved fast and there was a chance to work on a bit of everything.
              </p>

              <p>
                Outside of work, there's a strong pull towards visuals and storytelling, usually through street photography, music, and just noticing small details in everyday life.
              </p>

              <p>
                Right now, just focused on getting better at the craft, building meaningful work, and eventually creating products of my own.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}