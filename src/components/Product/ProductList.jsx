import React, { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import "./productcard.css";
import data from "../../db/data";
import { useSelector } from "react-redux";
import Brands from "../Sidebar/Brands/Brands";

const filterProducts = (products, searchQuery, categoryFilter, colorFilter, priceFilter, brandFilter) => {
    return products.filter((product) => {
        const titleMatches = product.title.toLowerCase().includes(searchQuery.toLowerCase());
        const categoryMatches = categoryFilter.toLowerCase() === "all" || product.category.toLowerCase() === categoryFilter.toLowerCase();
        const colorMatches = colorFilter.toLowerCase() === "all" || product.color.toLowerCase() === colorFilter.toLowerCase();
        const priceMatches =
            priceFilter.toLowerCase() === "all" ||
            (priceFilter.toLowerCase() === "over 150 $" ? parseFloat(product.newPrice) > 150 :
                parseFloat(product.newPrice) >= parseFloat(priceFilter.split("-")[0]) &&
                parseFloat(product.newPrice) <= parseFloat(priceFilter.split("-")[1]));
        const brandMatches = brandFilter.toLowerCase() === "all" || product.company.toLowerCase() === brandFilter.toLowerCase();

        return titleMatches && categoryMatches && colorMatches && priceMatches && brandMatches;
    });
};

const sortFunctions = {
    lowestToHighest: (a, b) => parseFloat(a.newPrice) - parseFloat(b.newPrice),
    highestToLowest: (a, b) => parseFloat(b.newPrice) - parseFloat(a.newPrice),
    AtoZ: (a, b) => a.title.localeCompare(b.title),
    ZtoA: (a, b) => b.title.localeCompare(a.title),
};

const sortProducts = (products, sortingOption) => {
    if (sortingOption && sortFunctions[sortingOption]) {
        return [...products].sort(sortFunctions[sortingOption]);
    }

    return products;
};

const ProductList = () => {
    const [visibleProducts, setVisibleProducts] = useState(6);
    const searchQuery = useSelector((state) => state.search.searchQuery);
    const categoryFilter = useSelector((state) => state.search.categoryFilter);
    const colorFilter = useSelector((state) => state.search.colorFilter);
    const priceFilter = useSelector((state) => state.search.priceFilter);
    const brandFilter = useSelector((state) => state.search.brandFilter);
    const sorting = useSelector((state) => state.search.sorting);

    const filteredProducts = useMemo(
        () => filterProducts(data, searchQuery, categoryFilter, colorFilter, priceFilter, brandFilter),
        [data, searchQuery, categoryFilter, colorFilter, priceFilter, brandFilter]
    );

    const sortedProducts = useMemo(() => sortProducts(filteredProducts, sorting), [
        filteredProducts,
        sorting,
    ]);

    const handleShowMore = () => {
        setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6);
    };

    return (
        <>
            <div className={'product-list-container'}>
                <Brands />
                {sortedProducts.length > 0 ?  ( <div className="product-list" >
                    {sortedProducts.slice(0, visibleProducts).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>) : ( <div className={'no-products'}>No Products to show</div>) }
                {sortedProducts.length > visibleProducts && (
                    <button onClick={handleShowMore} className="show-more-button">
                        Show More ({visibleProducts} of {sortedProducts.length})
                    </button>
                )}
            </div>
        </>
    );
};

export default ProductList;
