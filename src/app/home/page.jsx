"use client";
import { useServices } from "@/data/providers/ServicesProvider";
import { useEffect, useState } from "react";
import Header from "../componentes/header";
import Footer from "../componentes/footer";

const HomePage = () => {
  const { getProducts } = useServices();
  const [pets, setPets] = useState([]);

  const loadPets = async () => {
    const pets = await getProducts();
    console.log(pets);
    setPets(pets);
  };

  useEffect(() => {
    loadPets();
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-pink-50 py-10 px-4">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-pink-600">
          🐾 Conoce a nuestras mascotas 🐾
        </h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pets.length > 0 ? (
            pets.map((pet) => (
              <div
                key={pet.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl"
              >
                <img
                  src={pet.imageUrl}
                  alt={pet.name}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-pink-700 mb-2 text-center">
                    {pet.name}
                  </h2>
                  <p className="text-sm text-gray-600 text-center mb-2">
                    {pet.species} · {pet.breed} · {pet.age} años
                  </p>
                  <p className="text-gray-700 text-base text-center mb-4">
                    {pet.description}
                  </p>
                  <div className="flex justify-center">
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition">
                      Ver Perfil
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg">
              No hay mascotas disponibles por ahora.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
