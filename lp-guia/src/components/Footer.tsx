// src/components/Footer.tsx
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <footer className="w-screen bg-black text-gray-300 py-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 font-[Montserrat] mt-16 relative left-1/2 -translate-x-1/2">
      <p className="text-sm text-center sm:text-left">
        © {new Date().getFullYear()} Guia do Clash
      </p>
      <div className="flex items-center gap-2">
        <InstagramIcon className="text-pink-500" fontSize="small" />
        <span className="text-sm">
          Instagram:{" "}
          <a
            href="https://www.instagram.com/guiadoclashroyale"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition-colors duration-300"
          >
            @guiadoclashroyale
          </a>
        </span>
      </div>
    </footer>
  );
}
