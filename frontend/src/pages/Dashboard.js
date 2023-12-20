import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Flex, ListItem } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement, IconButton, Box, Select } from "@chakra-ui/react";
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


const Dashboard = ()=>{
    const [products, setProduct] = useState([])
    const [month, setMonth] = useState(3)
    const [searchQuery, setSearchQuery] = useState("")
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [totalItem, setTotalItems] = useState(0)
    const [totalPage, setTotalPage] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [monthStatistics ,setMonthStatistics] = useState()
    const [barData, setBarData] = useState()
    const [pieData, setPieData] = useState()


    const getMonth = (monthNumber) => {
        console.log('getMonth')
        console.log(monthNumber)
        const monthNames = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
      
        return monthNames[monthNumber - 1];
    }

    const handleMonth = (e)=>{
        console.log('Selected Month:', e.target.value);
        e.preventDefault()
        setMonth(e.target.value)
    }
    const getProducts = async () => {
        const response = await fetch(`${BASE_API}/api/product?page=${page}&limit=${limit}&search=${searchQuery}&month=${month}`)
        const prod = await response.json()
        console.log(prod)
        setProduct(prod.searchData)
        setCurrentPage(prod.currentPage)
        setTotalItems(prod.totalItems)
    }

    const changeLimit = (e)=>{
        setLimit(e.target.value)
    }

    const changePage = (e) =>{
        setPage(e.target.value)
    }

    // const nextPage = (value) =>{
    //     setPage(value)
    // }
    // const prePage = () =>{
    //     setPage(value)
    // }

    const handleSearchQuery = (e)=>{
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
            // console.log(result);
            setMonthStatistics(result)
        } catch (error) {
            console.error('Error fetching products:', error);
          }
    }

    const getBarChart = async()=>{
        try{
            const response = await fetch(`${BASE_API}/api/stat/barchart?month=${month}`)
            const result = await response.json()
            console.log('Barchart')
            console.log(result)
            setBarData(result)
        }catch(err){
            console.log('Error')
        }
    }

    const getPieChart = async()=>{
        try{
            const response = await fetch(`${BASE_API}/api/stat/piechart?month=${month}`)
            const result = await response.json()
            setPieData(result)
        }catch(err){
            console.log('Error')
        }
    }
    useEffect(()=>{
        getMonthStat()
        getBarChart()
        getPieChart()
    }, [month])

    useEffect(()=>{
        getProducts()
    }, [month, searchQuery, limit, page])
    return(
        <div>
            <h1>Dashboard</h1>
            <Flex>
                {/* Transaction Table */}
                <div>
                    <SearchBar searchQuery={searchQuery} handleSearchQuery={handleSearchQuery}/>
                    <MonthSelector month={month} handleMonth={handleMonth}/>
                    <TransTable data={products} />
                    <ItemContainer productList={products}/>
                    <PageController currentPage={currentPage} totalItem={totalItem} totalPage={totalPage} limit={limit} changeLimit={changeLimit} changePage={changePage} />
                    {/*  */}
                </div>
                {/* Month Statistics */}
                <div>
                    <MonthStat data={monthStatistics} month={getMonth(month)}/>
                </div>
                {/* Bar chart */}
                <Container>
                    <BarChart BarData={barData}/>
                </Container>
                {/* Piechart */}
                <Container>
                    <PieChart PieData={pieData}/>
                </Container>
            </Flex>
        </div>
    )
}

export default Dashboard