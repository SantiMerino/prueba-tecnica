
// Product interface from API
export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

// Order for products 
export interface FavoriteProduct extends Product {
  addedAt: number;
}

// Favorite & recent view typing
export type ProductsState = {
  viewed: FavoriteProduct[];
  favorites: FavoriteProduct[];
};
