import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../service/productService";

function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      if (!id) {
        setError("ID do produto não fornecido");
        setLoading(false);
        return;
      }

      const productId = parseInt(id);
      if (isNaN(productId)) {
        setError("ID do produto inválido");
        setLoading(false);
        return;
      }

      try {
        const response = await getProduct(productId);
        if (response.data.status === 200) {
          setProduct(response.data.data);
        } else if (response.data.status === 404) {
          setError("Produto não encontrado");
        } else {
          setError("Erro ao carregar produto");
        }
      } catch (err: any) {
        if (err.response?.status === 404) {
          setError("Produto não encontrado");
        } else {
          setError("Erro ao carregar produto");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  function formatPrice(price: any) {
    if (!price) return "R$ 0,00";
    const numPrice = typeof price === 'string' ? parseFloat(price) : typeof price === 'object' && price.toNumber ? price.toNumber() : price;
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(numPrice);
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
                <p className="text-sm text-gray-600">Detalhes do Produto</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => navigate("/products")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                CATÁLOGO
              </button>
              <button
                onClick={() => navigate("/")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                HOME
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600">Carregando produto...</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <svg className="w-12 h-12 mx-auto text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-red-700 text-lg font-semibold">{error}</p>
              <button
                onClick={() => navigate("/products")}
                className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Voltar ao Catálogo
              </button>
            </div>
          ) : product ? (
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Header com gradiente */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-700 px-8 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{product.name}</h2>
                    <p className="text-blue-100">{product.brand} - {product.model}</p>
                  </div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Imagem */}
                  <div>
                    {product.imageUrl ? (
                      <img 
                        src={product.imageUrl}
                        alt={product.name} 
                        className="w-full h-96 object-contain rounded-xl bg-gray-100"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "img/iphonewhite.jpg";
                        }}
                      />
                    ) : (
                      <div className="w-full h-96 bg-gray-100 rounded-xl flex items-center justify-center">
                        <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Informações */}
                  <div className="space-y-6">
                    {/* Preço */}
                    <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
                      <p className="text-sm text-green-700 font-semibold mb-2">Preço</p>
                      <p className="text-4xl font-bold text-green-600">{formatPrice(product.price)}</p>
                    </div>

                    {/* Categoria */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        Categoria
                      </label>
                      <div className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900">
                        {product.category}
                      </div>
                    </div>

                    {/* Status */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Status
                      </label>
                      <div className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                          product.active 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {product.active ? 'Ativo' : 'Arquivado'}
                        </span>
                      </div>
                    </div>

                    {/* Descrição */}
                    {product.description && (
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                          <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Descrição
                        </label>
                        <div className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 min-h-[100px]">
                          {product.description}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Botões */}
                <div className="flex gap-4 pt-8 mt-8 border-t border-gray-200">
                  <button
                    onClick={() => navigate("/products")}
                    className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                  >
                    Voltar ao Catálogo
                  </button>
                  <button
                    onClick={() => navigate("/")}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                  >
                    Voltar para Home
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

