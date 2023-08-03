import React, { useState } from 'react';
import './brands.css';
import { useDispatch } from 'react-redux';
import { setBrandFilter, setSorting } from '../../../store/actions';
import adidasLogo from './adidas.png';
import pumaLogo from './puma.png';
import nikeLogo from './nike.png';
import vansLogo from './vans.png';
import allLogo from './all.png'

const Brands = () => {
    const [selectedBrand, setSelectedBrand] = useState('All');
    const [sortOrder, setSortOrder] = useState('lowestToHighest');

    const dispatch = useDispatch();

    const brands = [
        { name: 'All', logo: allLogo },
        { name: 'Nike', logo: nikeLogo },
        { name: 'Adidas', logo: adidasLogo },
        { name: 'Puma', logo: pumaLogo },
        { name: 'Vans', logo: vansLogo },
    ];

    const handleBrand = (brand) => {
        setSelectedBrand(brand);
        dispatch(setBrandFilter(brand));
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
        dispatch(setSorting(e.target.value));
    };

    return (
        <>
            <div className={'brands-container'}>
                <div>
                    <h2 className="brands-title">Brands</h2>
                    <div className="brands-flex">
                        {brands.map((brand, index) => (
                            <button
                                key={index}
                                onClick={() => handleBrand(brand.name)}
                                className={` ${selectedBrand === brand.name ? 'selected' : ''}`}
                            >
                                {<img alt={'logo'} src={brand.logo} className="brand-logo" />}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="sort-container">
                    <label htmlFor="sortOrder" className={'dropdown-label'}>Sort</label>
                    <select className={'custom-select'} id="sortOrder" value={sortOrder} onChange={handleSortChange}>
                        <option value="lowestToHighest">Low to High</option>
                        <option value="highestToLowest">High to Low</option>
                        <option value="AtoZ">A to Z</option>
                        <option value="ZtoA">Z to A</option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default Brands;
