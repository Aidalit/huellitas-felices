"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "./componentes/header";
import Footer from "./componentes/footer";

export default function Home() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const validateEmail = (email) => {
    // Validación básica de correo
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError("");
      router.push("/home");
    } else {
      setError("Por favor ingresa un correo válido.");
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col justify-center items-center bg-pink-50">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md flex flex-col gap-4 w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold text-pink-700 text-center mb-2">
            Iniciar sesión
          </h2>
          <label className="text-pink-600 font-medium">
            Correo electrónico
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300 text-black"
            placeholder="tucorreo@email.com"
            required
          />

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600 transition"
          >
            Acceder
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
