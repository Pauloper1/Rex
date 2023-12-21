import React from "react";
import { Box,Stack, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from "@chakra-ui/react";


const MonthStat = ({ data, month }) => {
  // console.log(month)
  return (
    <Stack direction="row" justifyContent="space-around">
      <Stat>
        <StatLabel>Total Sale</StatLabel>
        <StatNumber>{data?.TotalSale}</StatNumber>
        <StatHelpText>
          {month}
        </StatHelpText>
      </Stat>

      <Stat mt={4}>
        <StatLabel>Items Sold</StatLabel>
        <StatNumber>{data?.soldCount}</StatNumber>
      </Stat>

      <Stat mt={4}>
        <StatLabel>Items For Sale</StatLabel>
        <StatNumber>{data?.notSoldCount}</StatNumber>
      </Stat>
    </Stack>
  )
}

export default MonthStat

