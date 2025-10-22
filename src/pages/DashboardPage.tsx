function DashboardPage() {
  return (
    <main className="flex-1 p-5">
      <h1 className="text-white text-2xl font-bold mb-3">
        Dashboard
      </h1>
      <p className="text-white text-base">
        Esta é a página do dashboard
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-800 p-4 rounded">
          <h3 className="text-white font-bold">Card 1</h3>
          <p className="text-gray-300">Conteúdo do card</p>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <h3 className="text-white font-bold">Card 2</h3>
          <p className="text-gray-300">Conteúdo do card</p>
        </div>
      </div>
    </main>
  );
}

export default DashboardPage;