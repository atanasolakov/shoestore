import React from "react";
import { Search } from "@mui/icons-material";
import "./searchinput.css";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../store/actions";

const SearchInput = () => {
    const dispatch = useDispatch();
    const searchQuery = useSelector((state) => state.search.searchQuery);

    const handleInputChange = (event) => {
        dispatch(setSearchQuery(event.target.value));
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search (keywords, etc)"
                className="search-input"
                value={searchQuery}
                onChange={handleInputChange}
            />
            <Search className="search-icon" />
        </div>
    );
};

export default SearchInput;
