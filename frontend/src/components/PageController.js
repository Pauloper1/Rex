import React, { useEffect, useState } from "react";
import { Box, Input, Text, Button, VStack, HStack, Container } from "@chakra-ui/react";

const PageController = ({currentPage, totalItem, totalPage, limit, changeLimit, changePage}) => {

    const [nextDisable, setNextDisable] = useState(false)
    const [preDisable, setPreDisable] = useState(false)
    const handleNext = () =>{
        if(currentPage == totalPage){
            setNextDisable(true)
        }
    }
    const handlePre = ()=>{
        if(currentPage == 1){
            setPreDisable(true)
        }

    }

    return (
        <HStack>
            <Container>
                <Text fontSize="md">Page No:</Text>
                <Input variant="outline" size="xs" width="50px" mr={2} value={currentPage} onChange={changePage}/>

                <Button colorScheme="blue" size="xs" mr={2} onClick={handleNext}>
                    Next
                </Button>
                <Button colorScheme="blue" size="xs" onClick={handlePre}>
                    Previous
                </Button>

                <Text ml={4} fontSize="md" >
                    Per Page
                </Text>
                <Input variant="outline" size="xs" width="50px" value={limit} onChange={changeLimit}/>
            </Container>
        </HStack>
    );
};

export default PageController;
