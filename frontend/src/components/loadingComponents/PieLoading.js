import { SkeletonCircle } from '@chakra-ui/react';

const PieChartLoading = () => {
  // You can adjust the size and other styles based on your design
  const circleStyle = {
    width: '500px',
    height: '500px',
    borderRadius: 'full',
  };

  return (
    <div>
      <SkeletonCircle style={circleStyle} />
      {/* Add as many skeleton circles as needed */}
    </div>
  );
};

export default PieChartLoading;
