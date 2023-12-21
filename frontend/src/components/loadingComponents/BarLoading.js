import { Skeleton, Box, Card } from '@chakra-ui/react';

const BarChartLoading = () => {
  const barStyle = {
    height: '150px',
    width: '20px',
    borderRadius: '4px',
    marginRight: '4px',
  };

  return (
    <Card w="500px" h="300px"
    m={5}
    p={5}
    bg="blue.50"
    display="flex"
    justify="space-around"
    >
      <Skeleton style={barStyle} />
      <Skeleton style={barStyle} />
      <Skeleton style={barStyle} />
    </Card>
  );
};

export default BarChartLoading;
