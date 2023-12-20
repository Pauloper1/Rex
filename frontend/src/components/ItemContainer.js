import React from "react";
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Button, Image, Badge } from '@chakra-ui/react'


const ItemContainer = ({ productList }) => {
    return (
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            {
                productList ? productList.map(((product) => {
                    return (<Card>
                        <Image
                            src={product.image}
                            borderRadius='lg'
                        />
                        <CardHeader>
                            <Heading size='md'>{product.title}</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text fontSize="lg" fontWeight="bold" color="teal.500">
                                ${product.price}
                            </Text>                            <Text>{product.sold ? <Badge colorScheme="green">Sold</Badge> : <Badge colorScheme="red">Sale</Badge>}</Text>
                        </CardBody>
                        <CardFooter>
                            <Button>View</Button>
                        </CardFooter>
                    </Card>)
                }))


                    :
                    <Text>No Products</Text>
            }

        </SimpleGrid>
    )
}

export default ItemContainer