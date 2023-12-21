import { Box, Flex, Heading } from "@chakra-ui/layout";
import React from "react";

const Navbar = () =>{

    return(
        <Flex 
        h={50}
        bg="teal.200"
        mb={5}
        justify="center"
        color="blue.700"
        >
            <Box>
                <Heading>Rex Dasboard</Heading>
            </Box>
        </Flex>
    )
}

export default Navbar