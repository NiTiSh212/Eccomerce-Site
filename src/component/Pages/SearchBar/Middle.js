import React, { useEffect, useState } from "react";
import Pcard from "../Cards/Pcard";

function Middle() {
    const [searching, setSearching] = useState([]);
    const [data, setData] = useState([]);
    const [category, setCategory] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const url = "https://fakestoreapi.com/products/";

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                setData(result);
            });
    }, []);

    const handleCategoryClick = (categoryValue) => {
        setCategory(categoryValue.toLowerCase());
        // setSearchTerm("");
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    useEffect(() => {
        const filteredData = data.filter((item) => {
            if (category && item.category.toLowerCase().includes(category)) {
                return item.title.toLowerCase().includes(searchTerm);
            }
            if (!category) {
                return item.title.toLowerCase().includes(searchTerm);
            }
            return false;
        });
        setSearching(filteredData);
    }, [category, data, searchTerm]);

    return (
        <div className="mid">
            <div className="search-bar">
                <input
                    type="search"
                    placeholder="Enter the product name"
                    className="input-search"
                    onChange={handleSearchChange}
                    value={searchTerm}
                />
            </div>
            <div className="For-row-middle">
                    <div className="filter">
                    <div className="filter-searches">
                        <button onClick={() => handleCategoryClick("men's clothing")}>MEN</button>
                        <button onClick={() => handleCategoryClick("jewelery")}>JEWELRY</button>
                        <button onClick={() => handleCategoryClick("electronics")}>ELECTRONIC</button>
                        <button onClick={() => handleCategoryClick("women's clothing")}>WOMEN</button>
                    </div>  
                    </div>
                    
                <div className="middle1">
                    {searching.map((item) => (
                        <Pcard key={item.id} value={item} />
                    ))}
                    {searching.length === 0 && <p>No item found</p>}
                </div>
            </div>

        </div>
    );
}

export default Middle;
