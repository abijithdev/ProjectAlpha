import { products } from "./[id]";

export default function handler(req, res) {
    const { page = 1, limit = 10, search = "", min_price, max_price, min_rating, max_rating } = req.query;

    const filteredProducts = products.filter((product) => {
        const titleMatch = product.title.toLowerCase().includes(search.toLowerCase());
        const descriptionMatch = product.description.toLowerCase().includes(search.toLowerCase());
        const brandMatch = product.brand.toLowerCase().includes(search.toLowerCase());
        const categoryMatch = product.category.toLowerCase().includes(search.toLowerCase());
        const priceMatch = (min_price ? product.price >= Number(min_price) : true) && (max_price ? product.price <= Number(max_price) : true);
        const ratingMatch = (min_rating ? product.rating >= Number(min_rating) : true) && (max_rating ? product.rating <= Number(max_rating) : true);

        return (titleMatch || descriptionMatch || brandMatch || categoryMatch) && priceMatch && ratingMatch;
    });

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const data = filteredProducts.slice(startIndex, endIndex);

    const pagination = {
        total: filteredProducts.length,
        pages: Math.ceil(filteredProducts.length / limit),
        page: Number(page),
        limit: Number(limit),
        ...(min_price ? { min_price: Number(min_price) } : {}),
        ...(max_price ? { max_price: Number(max_price) } : {}),
        ...(min_rating ? { min_rating: Number(min_rating) } : {}),
        ...(max_rating ? { max_rating: Number(max_rating) } : {}),
        ...(search ? { search_query: search } : {})
    }

    res.status(200).json({ data, pagination });
}
