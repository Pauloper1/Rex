import React from "react";
import { Input, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = ({searchQuery, handleSearchQuery}) => {
    return (
        <form>
            <InputGroup>
                <Input
                    type="text"
                    name="search"
                    placeholder="Search..."
                    variant="filled"
                    size="md"
                    value={searchQuery}
                    onChange={handleSearchQuery}
                />
                <InputRightElement width="3rem">
                    <SearchIcon 
                    size="lg"
                    color="teal"
                    />
                </InputRightElement>
            </InputGroup>
        </form>
    )
}

export default SearchBar