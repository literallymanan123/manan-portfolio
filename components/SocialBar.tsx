export default function SocialBar() {
  return (
    <div className="fixed left-8 bottom-10 z-40 hidden lg:flex flex-col gap-4 text-sm text-zinc-500">

      <a href="#" className="hover:text-white transition">
        GitHub
      </a>

      <a href="#" className="hover:text-white transition">
        LinkedIn
      </a>

      <a href="#" className="hover:text-white transition">
        Resume
      </a>

    </div>
  );
}