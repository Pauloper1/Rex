import React, { useEffect, useState } from "react";
import { Box, Input, Text, Button, VStack, Stack, HStack, Container } from "@chakra-ui/react";

const PageController = ({ currentPage, totalItem, totalPage, limit, changeLimit, changePage }) => {

    const [nextDisable, setNextDisable] = useState(false)
    const [preDisable, setPreDisable] = useState(false)
    const handleNext = () => {
        if (currentPage == totalPage) {
            setNextDisable(true)
        }
    }
    const handlePre = () => {
        if (currentPage == 1) {
            setPreDisable(true)
        }

    }

    return (
        <Stack m={4} direction="row" className="page-controller" justify="space-around">

            <HStack>
                <Text fontSize="md">Page No:</Text>
                <Input variant="outline" size="xs" width="50px" mr={2} value={currentPage} onChange={changePage} />
            </HStack>

            <HStack>
                <Button colorScheme="blue" size="xs" mr={2} onClick={handleNext}>
                    Next
                </Button>
                <Button colorScheme="blue" size="xs" onClick={handlePre}>
                    Previous
                </Button>
            </HStack>

            <HStack>
                <Text ml={4} fontSize="md" >
                    Per Page
                </Text>
                <Input variant="outline" size="xs" width="50px" value={limit} onChange={changeLimit} />
            </HStack>

        </Stack>
    );
};

export default PageController;
