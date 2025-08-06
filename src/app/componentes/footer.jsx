"use client";
const Footer = () => {
  return (
    <footer className="bg-pink-100 py-6 mt-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <p className="text-pink-700 font-semibold text-lg mb-2">
          🐾 Blog de Mascotas · Compartiendo amor y aventuras 🐾
        </p>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Blog de Mascotas. Todos los derechos
          reservados.
        </p>
        <div className="flex gap-4 mt-2">
          <a href="#" className="text-pink-500 hover:underline">
            Instagram
          </a>
          <a href="#" className="text-pink-500 hover:underline">
            Facebook
          </a>
          <a href="#" className="text-pink-500 hover:underline">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
