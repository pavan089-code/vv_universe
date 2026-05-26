export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919966233225"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-50 group"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition" />

      {/* Button */}
      <div className="relative flex items-center">

  <span className="absolute left-16 opacity-0 group-hover:opacity-100 
  bg-black text-white text-xs px-3 py-1 rounded-md transition whitespace-nowrap">
    Chat on WhatsApp
  </span>

  <div className="flex items-center justify-center w-14 h-14 rounded-full 
  bg-green-500 text-white shadow-lg 
  hover:scale-110 hover:shadow-green-500/40 transition duration-300">
    {/* SVG */}

        {/* WhatsApp Icon (SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7"
          fill="currentColor"
          >
          <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.897.76 5.63 2.083 8.015L.26 31.604l7.357-1.81A15.94 15.94 0 0016 32c8.837 0 16-7.164 16-16S24.837.396 16 .396zm0 29.06c-2.583 0-5.1-.68-7.312-1.97l-.523-.31-4.364 1.074 1.166-4.252-.34-.544A13.943 13.943 0 012.06 16c0-7.686 6.254-13.94 13.94-13.94S29.94 8.314 29.94 16 23.686 29.456 16 29.456zm7.696-10.463c-.42-.21-2.484-1.224-2.87-1.362-.386-.14-.667-.21-.947.21-.28.42-1.087 1.362-1.333 1.642-.246.28-.49.315-.91.105-.42-.21-1.77-.652-3.37-2.08-1.245-1.11-2.084-2.48-2.33-2.9-.246-.42-.026-.647.185-.856.19-.19.42-.49.63-.736.21-.245.28-.42.42-.7.14-.28.07-.525-.035-.736-.105-.21-.947-2.28-1.297-3.12-.34-.817-.687-.706-.947-.72l-.807-.014c-.28 0-.736.105-1.12.525s-1.47 1.435-1.47 3.495 1.505 4.05 1.715 4.33c.21.28 2.96 4.52 7.17 6.33.998.43 1.777.687 2.383.88 1 .318 1.91.273 2.63.166.803-.12 2.484-1.014 2.835-1.993.35-.98.35-1.82.245-1.994-.105-.175-.385-.28-.805-.49z" />
        </svg>
            </div>
          
          </div>
    </a>
  );
}
