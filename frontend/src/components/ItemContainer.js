import React from "react";
import { Card, CardHeader,useDisclosure, CardBody, CardFooter, SimpleGrid, Heading, Text, Button, Badge } from '@chakra-ui/react'
import ItemModal from "./ItemModal"

const ItemContainer = ({ productList }) => {
  return (
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      {productList ? (
        productList.map((product) => (
          <ItemCard key={product.id} product={product} />
        ))
      ) : (
        <Text>No Products</Text>
      )}
    </SimpleGrid>
  );
};

const ItemCard = ({ product }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Card>
      <CardHeader>
        <Heading size='md'>{product.title}</Heading>
      </CardHeader>
      <CardBody>
        <Text fontSize="lg" fontWeight="bold" color="teal.500">
          ${product.price}
        </Text>
        <Text>
          {product.sold ? (
            <Badge colorScheme="green">Sold</Badge>
          ) : (
            <Badge colorScheme="red">Sale</Badge>
          )}
        </Text>
        <Badge colorScheme="blue">{product.category}</Badge>
      </CardBody>
      <CardFooter>
        <Button onClick={onOpen}>View</Button>
        <ItemModal isOpen={isOpen} onClose={onClose} image={product.image} desc={product.description} />
      </CardFooter>
    </Card>
  );
};

export default ItemContainer;
