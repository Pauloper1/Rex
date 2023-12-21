import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Button, Image, Badge } from '@chakra-ui/react'

const CardLoading = () => {
    return (
        <>
            {Array.from({ length: 3 }, (_, i) => (
                <Card key={i}>
                    <Skeleton height="200px" borderRadius="lg" />

                    <CardHeader>
                        <SkeletonText mt="4" noOfLines={2} spacing="4" />
                    </CardHeader>

                    <CardBody>
                        <SkeletonText mt="4" noOfLines={1} spacing="4" />
                        <SkeletonText mt="2" noOfLines={1} spacing="4" />
                        <SkeletonText mt="2" noOfLines={1} spacing="4" />
                    </CardBody>

                    <CardFooter>
                        <SkeletonCircle size="8" mr="2" />
                        <SkeletonCircle size="8" mr="2" />
                        <SkeletonCircle size="8" />
                    </CardFooter>
                </Card>
            ))}
        </>
    );
};

export default CardLoading;
