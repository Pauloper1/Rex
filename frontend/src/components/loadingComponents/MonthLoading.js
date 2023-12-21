import { Skeleton, SkeletonText } from '@chakra-ui/react';
import { Card, Box, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from "@chakra-ui/react";

const MonthLoading = () => {

  return (
    <>
    <Card>
      <Stat>
        <StatLabel>Total Sale</StatLabel>
        <SkeletonText mt='4' noOfLines={1} spacing='4' skeletonHeight='2' />
        <StatHelpText>
        <SkeletonText mt='4' noOfLines={1} spacing='4' skeletonHeight='2' />
        </StatHelpText>
      </Stat>

      <Stat mt={4}>
        <StatLabel>Items Sold</StatLabel>
        <SkeletonText mt='4' noOfLines={1} spacing='4' skeletonHeight='2' />
      </Stat>

      <Stat mt={4}>
        <StatLabel>Items For Sale</StatLabel>
        <SkeletonText mt='4' noOfLines={1} spacing='4' skeletonHeight='2' />
      </Stat>
    </Card>
    </>
  );
};

export default MonthLoading;
