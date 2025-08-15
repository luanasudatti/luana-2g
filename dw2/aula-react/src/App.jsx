import React, { useEffect, useState } from "react";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch((err) => console.error("Erro:", err));
  }, []);

  const usuariosFiltrados = usuarios.filter((user) =>
    user.name.toLowerCase().includes(busca.toLowerCase())
  );

  const nomesGrandes = usuarios.reduce((acc, user) => {
    return user.name.length > 5 ? acc + 1 : acc;
  }, 0);

  return (
    <div className="min-h-screen bg-purple-50 p-8 font-sans">
      <h1 className="text-4xl font-bold text-purple-800 text-center mb-8">
        📋 Lista de Usuários
      </h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Buscar por nome"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="border-2 border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded px-4 py-2 w-80 shadow-md transition duration-200"
        />
      </div>

      <div className="text-center mb-6">
        <p className="text-purple-700 font-medium text-lg">
          👤 Usuários com nome maior que 5 letras:{" "}
          <span className="font-bold text-purple-900">{nomesGrandes}</span>
        </p>
      </div>

      <ul className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 space-y-6">
        {usuariosFiltrados.length > 0 ? (
          usuariosFiltrados.map((user) => (
            <li
              key={user.id}
              className="bg-purple-100 border border-purple-200 rounded-lg p-4 hover:bg-purple-200 transition"
            >
              <p className="text-xl font-semibold text-purple-900">{user.name}</p>
              <p className="text-sm text-purple-800">{user.email}</p>
              <p className="text-sm text-purple-700">
                📍 Cidade: {user.address?.city || "Desconhecida"}
              </p>
            </li>
          ))
        ) : (
          <p className="text-center text-purple-700">Nenhum usuário encontrado.</p>
        )}
      </ul>
    </div>
  );
}

export default App;

