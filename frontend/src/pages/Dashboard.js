import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Card, Flex, ListItem } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement, IconButton, Box, Select, Stack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";


import { BASE_API } from '../config'
import TransTable from '../components/TransTable'
import MonthSelector from '../components/MonthSelector'
import SearchBar from '../components/SearchBar'
import ItemContainer from "../components/ItemContainer";
import PageController from "../components/PageController"
import MonthStat from "../components/MonthStat";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart"
import CardLoading from "../components/loadingComponents/CardLoading";
import MonthLoading from "../components/loadingComponents/MonthLoading";
import PieLoading from "../components/loadingComponents/PieLoading"
import BarLoading from "../components/loadingComponents/BarLoading"
import Navbar from "../components/Navbar"

const Dashboard = () => {
    const [products, setProduct] = useState([])
    const [month, setMonth] = useState(3)
    const [searchQuery, setSearchQuery] = useState("")
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [totalItem, setTotalItems] = useState(0)
    const [totalPage, setTotalPage] = useState(0)
    const [currentPage, setCurrentPage] = useState()
    const [monthStatistics, setMonthStatistics] = useState()
    const [barData, setBarData] = useState()
    const [pieData, setPieData] = useState()
    const [isSearchLoading, setSearchLoading] = useState(true)
    const [isStatLoading, setStatLoading] = useState(true)


    const getMonth = (monthNumber) => {
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        return monthNames[monthNumber - 1];
    }

    const handleMonth = (e) => {
        console.log('Selected Month:', e.target.value);
        e.preventDefault()
        setMonth(e.target.value)
    }
    const getProducts = async () => {
        const response = await fetch(`${BASE_API}/api/product?page=${page}&limit=${limit}&search=${searchQuery}&month=${month}`)
        await new Promise((resolve) => { setTimeout(resolve, 1000) })
        const prod = await response.json()
        
        setSearchLoading(false)
        setProduct(prod.searchData)
        setTotalPage(prod.totalPage)
        setTotalItems(prod.totalItems)
    }

    const changeLimit = (e) => {
        // console.log('page')
        console.log(page)
        setLimit(e.target.value)
    }
    

    const changePage = (e) => {
        setPage(e.target.value)
    }

    // const nextPage = (value) =>{
    //     setPage(value)
    // }
    // const prePage = () =>{
    //     setPage(value)
    // }

    const handleSearchQuery = (e) => {
        e.preventDefault()
        setSearchQuery(e.target.value)
    }

    const getMonthStat = async () => {
        try {
            console.log('getMonthStat')
            const response = await fetch(`${BASE_API}/api/stat/monthStat?month=${month}`);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            setMonthStatistics(result)
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    const getBarChart = async () => {
        try {
            const response = await fetch(`${BASE_API}/api/stat/barchart?month=${month}`)
            const result = await response.json()
            setBarData(result)
        } catch (err) {
            console.log('Error')
        }
    }

    const getPieChart = async () => {
        try {
            const response = await fetch(`${BASE_API}/api/stat/piechart?month=${month}`)
            const result = await response.json()
            setPieData(result)
        } catch (err) {
            console.log('Error')
        }
    }

    const getStat = async () => {
        try {
            const response = await fetch(`${BASE_API}/api/stat/all?month=${month}`)
            await new Promise((resolve) => { setTimeout(resolve, 2000) })
            const result = await response.json()
            setStatLoading(false)

            setMonthStatistics(result.monthStat)
            setBarData(result.barchart)
            setPieData(result.piechart)

            // console.log('all')
            // console.log(pieData)
            // console.log(barData)
        } catch (err) {
            console.log('getStat Error')
        }
    }
    useEffect(() => {
        setSearchLoading(true)
        setStatLoading(true)
        getStat()
    }, [month])

    useEffect(() => {
        getProducts()
    }, [month, searchQuery, limit, page])
    return (
        <div>
            <Navbar/>
            <Flex>
                {/* Product display*/}
                <Box h={"100vh"} maxW={900} flexGrow="1" p="20px" position="relative">
                    <Stack direction={"row"} alignItems="center">
                        <SearchBar searchQuery={searchQuery} handleSearchQuery={handleSearchQuery} />
                        <MonthSelector month={month} handleMonth={handleMonth} />
                    </Stack>
                    <TransTable data={products} />
                    {isSearchLoading ? (
                        <CardLoading />
                    ) : (
                        <><Box overflowY="auto">
                            <ItemContainer productList={products} />
                        </Box>
                            <PageController
                                currentPage={page}
                                totalItem={totalItem}
                                totalPage={totalPage}
                                limit={limit}
                                changeLimit={changeLimit}
                                changePage={changePage}
                                setPage={setPage}
                            />
                        </>
                    )}
                    {/*  */}
                </Box>
                {
                    (isStatLoading && monthStatistics && barData && pieData) ? (
                        <Stack direction="column">
                            <Box w="100%" boxShadow="lg" borderRadius="md" p={4}>
                                <MonthLoading />
                            </Box>
                            <Container>
                                <BarLoading />
                            </Container>
                            <Container>
                                <PieLoading />
                            </Container>
                        </Stack>
                    ) : (
                        <Flex>
                            <Stack flexGrow={1}>
                                <Box w="100%" boxShadow="lg" borderRadius="md" p={4}>
                                    <MonthStat data={monthStatistics} month={getMonth(month)} />
                                </Box>
                                {
                                    barData && (
                                        <Card w="500px" h="300px"
                                        m={5}
                                        p={5}
                                        bg="blue.50"
                                        >

                                            <BarChart BarData={barData} />
                                        </Card>
                                    )
                                }

                                {/* Piechart */}
                                {
                                    pieData && (
                                        <Card  
                                        w="300px" 
                                        m={5}
                                        p={5}
                                        bg="blue.50">
                                            <PieChart PieData={pieData} />
                                        </Card>
                                    )
                                }
                            </Stack>
                        </Flex>

                    )
                }

                {/* Bar chart */}

            </Flex>
        </div>
    )
}

export default Dashboard