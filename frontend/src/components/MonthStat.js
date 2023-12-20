import React from "react";
import { Box, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from "@chakra-ui/react";


const MonthStat = ({data, month})=>{
    console.log(month)
    return(
        <Box>
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
        {/* <StatHelpText>
          <StatArrow type="increase" />
          5% since last month
        </StatHelpText> */}
      </Stat>

      <Stat mt={4}>
        <StatLabel>items For Sale</StatLabel>
        <StatNumber>{data?.notSoldCount}</StatNumber>
      </Stat>
    </Box>
    )
}

export default MonthStat

