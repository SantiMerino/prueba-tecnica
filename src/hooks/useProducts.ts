import { useCallback } from 'react';
import { Product, ProductsState, FavoriteProduct } from '../types';
import { useLocalStorage } from './useLocalStorage';

// Init viewed & fav states
const initialState: ProductsState = {
  viewed: [],
  favorites: [],
};

export const useProducts = () => {
    // useLocalStorage: Hook personalizado que guarda automáticamente en localStorage para mantener entre sesiones
  const [productsState, setProductsState] = useLocalStorage<ProductsState>('products-state', initialState);

  const addToViewed = useCallback((product: Product) => {
    setProductsState((prevState) => {
      // Remove product if it already exists to avoid duplicates
      const filteredViewed = prevState.viewed.filter((p) => p.id !== product.id);
      
      // Create new entry with timestamp
      const newProduct: FavoriteProduct = {
        ...product,
        addedAt: Date.now(),
      };
      
      // Add to the beginning of the array (most recent first)
      // Limit to 10 most recent items
      return {
        ...prevState,
        viewed: [newProduct, ...filteredViewed].slice(0, 10),
      };
    });
  }, [setProductsState]);

  const toggleFavorite = useCallback((product: Product) => {
    setProductsState((prevState) => {

    // VERIFICAR: ¿Ya es favorito?
      const isFavorite = prevState.favorites.some((p) => p.id === product.id);
      
      if (isFavorite) {
        // Remove from favorites
        return {
          ...prevState,
          favorites: prevState.favorites.filter((p) => p.id !== product.id),
        };
      } else {
        // Add to favorites with timestamp
        const newProduct: FavoriteProduct = {
          ...product,
          addedAt: Date.now(),
        };
        
        return {
          ...prevState,
          favorites: [newProduct, ...prevState.favorites],
        };
      }
    });
  }, [setProductsState]);

 // Verificar si un producto es favorito
  const isProductFavorite = useCallback((productId: number) => {
    return productsState.favorites.some((p) => p.id === productId);
  }, [productsState.favorites]);

   const clearViewed = useCallback(() => {
    setProductsState((prevState) => ({
      ...prevState,
      viewed: [],
    }));
  }, [setProductsState]);

  // Limpiar solo favoritos
  const clearFavorites = useCallback(() => {
    setProductsState((prevState) => ({
      ...prevState,
      favorites: [],
    }));
  }, [setProductsState]);

  // Limpiar TODO favoritos + vistos recientemente
  const clearAll = useCallback(() => {
    setProductsState(initialState);
  }, [setProductsState]);


   // Retornar todo lo que necesita el componente
  return {
    viewed: productsState.viewed,
    favorites: productsState.favorites,
    addToViewed,
    toggleFavorite,
    isProductFavorite,
    clearAll,
    clearFavorites,
    clearViewed
  };
};