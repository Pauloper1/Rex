import React, { useEffect, useState } from "react";
import { Box, Input, Text, Button, VStack, Stack, HStack, Container } from "@chakra-ui/react";

const PageController = ({ currentPage, totalItem, totalPage, limit, changeLimit, changePage, setPage }) => {

    console.log(currentPage)
    console.log(limit)
    const [nextDisable, setNextDisable] = useState(false)
    const [preDisable, setPreDisable] = useState(false)
    const handleNext = () => {
        console.log(currentPage)
        console.log(totalPage)
        console.log('Next button')

        setPage(currentPage+1)
    }
    const handlePre = () => {
        console.log('Pre button')

        setPage(currentPage-1)
    }

    return (
        <Stack
            m={10}
            p={5}
            direction="row"
            className="page-controller"
            justify="space-around"
            position="absolute"
            bottom={0}
            left={0}
            right={0}>

            <HStack>
                <Text fontSize="md">Page No:</Text>
                <Input
                    variant="outline"
                    size="xs"
                    width="50px"
                    mr={2}
                    value={currentPage}
                    onChange={(e) => setPage(e.target.value)} />
            </HStack>

            <HStack>
                <Button isDisabled={preDisable} colorScheme="blue" size="md" mr={2} onClick={handlePre}>
                    Previous
                </Button>
                <Button isDisabled={nextDisable} colorScheme="blue" size="md" onClick={handleNext}>
                    Next
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
