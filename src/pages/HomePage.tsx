function HomePage() {
  return (
    <main className="flex-1 p-5">
      <h1 className="text-white text-2xl font-bold mb-3">
        Página Principal
      </h1>
      <p className="text-white text-base">
        Este é o conteúdo da página principal
      </p>
      <div className="mt-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Botão de exemplo
        </button>
      </div>
    </main>
  );
}

export default HomePage;