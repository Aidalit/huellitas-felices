const Header = () => {
  return (
    <header className="bg-pink-200 py-6 shadow-md">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-pink-700 mb-2 flex items-center gap-2">
          🐾 Blog de Mascotas
        </h1>
        <p className="text-pink-600 text-lg font-medium text-center">
          Historias, consejos y aventuras para amantes de los animales
        </p>
      </div>
    </header>
  );
};

export default Header;
