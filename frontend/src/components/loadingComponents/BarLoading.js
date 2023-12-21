import { Skeleton } from '@chakra-ui/react';

const BarChartLoading = () => {
  const barStyle = {
    height: '150px',
    width: '20px',
    borderRadius: '4px',
    marginRight: '4px',
  };

  return (
    <div style={{ display: 'flex' }}>
      <Skeleton style={barStyle} />
      <Skeleton style={barStyle} />
      <Skeleton style={barStyle} />
    </div>
  );
};

export default BarChartLoading;
