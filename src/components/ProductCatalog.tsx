import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { listProducts } from "../service/productService";

function ProductCatalog() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchName, setSearchName] = useState("");
  const [searchBrand, setSearchBrand] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    // Debounce: busca após 500ms sem digitar
    const timeoutId = setTimeout(() => {
      fetchProducts();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchName, searchBrand, searchCategory]);

  async function fetchProducts() {
    setLoading(true);
    try {
      const filters: any = {
        active: true, // Apenas produtos ativos
        limit: 50
      };

      if (searchName.trim()) {
        filters.name = searchName.trim();
      }
      if (searchBrand.trim()) {
        filters.brand = searchBrand.trim();
      }
      if (searchCategory.trim()) {
        filters.category = searchCategory.trim();
      }

      const response = await listProducts(filters);
      
      if (response.data.status === 200) {
        setProducts(response.data.data.items || []);
        
        // Extrai categorias e marcas únicas para filtros
        const uniqueCategories = [...new Set(response.data.data.items.map((p: any) => p.category))] as string[];
        const uniqueBrands = [...new Set(response.data.data.items.map((p: any) => p.brand))] as string[];
        setCategories(uniqueCategories.sort());
        setBrands(uniqueBrands.sort());
      }
    } catch (error: any) {
      console.error("Erro ao buscar produtos:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }

  function formatPrice(price: any) {
    if (!price) return "R$ 0,00";
    const numPrice = typeof price === 'string' ? parseFloat(price) : typeof price === 'object' && price.toNumber ? price.toNumber() : price;
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(numPrice);
  }

  function clearFilters() {
    setSearchName("");
    setSearchBrand("");
    setSearchCategory("");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="img/celltechform1.png" 
                alt="CELLTECH Logo" 
                className="h-12 w-auto mr-3"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">CELLTECH</h1>
                <p className="text-sm text-gray-600">Catálogo de Produtos</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => navigate("/")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                VOLTAR
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Barra de Pesquisa e Filtros */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Busca por Nome */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Buscar por Nome
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                  className="w-full px-4 py-3 pl-10 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white text-gray-900"
                  placeholder="Digite o nome do produto..."
                />
                <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Filtro por Marca */}
            <div className="w-full md:w-48">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Marca
              </label>
              <select
                value={searchBrand}
                onChange={(e) => setSearchBrand(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white text-gray-900"
              >
                <option value="">Todas as marcas</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            {/* Filtro por Categoria */}
            <div className="w-full md:w-48">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Categoria
              </label>
              <select
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white text-gray-900"
              >
                <option value="">Todas as categorias</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Botão Limpar Filtros */}
            <div className="flex items-end">
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-xl transition-colors"
              >
                Limpar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Produtos */}
      <div className="container mx-auto px-4 py-12">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Carregando produtos...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <p className="mt-4 text-gray-600 text-lg">Nenhum produto encontrado</p>
            <p className="text-gray-500 text-sm mt-2">Tente ajustar os filtros de busca</p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {products.length} {products.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200"
                >
                  <div className="mb-4">
                    {product.imageUrl ? (
                      <img 
                        src={product.imageUrl}
                        alt={product.name} 
                        className="w-full h-48 object-contain rounded-lg mx-auto bg-gray-100"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "img/iphonewhite.jpg"; // Fallback
                        }}
                      />
                    ) : (
                      <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                        <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{product.brand} - {product.model}</p>
                  <p className="text-2xl font-bold text-green-600 mb-3">{formatPrice(product.price)}</p>
                  {product.description && (
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  )}
                  <button 
                    onClick={() => navigate(`/products/${product.id}`)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors w-full"
                  >
                    Ver Detalhes
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductCatalog;

