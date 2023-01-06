import "./App.css";
import BakeryItem from "./components/BakeryItem.js"
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import Grid from '@mui/material/Unstable_Grid2'
import {Radio, RadioGroup, Checkbox, Box, Typography, FormLabel, FormControl, FormGroup, FormControlLabel } from "@mui/material"
import FilterBar from "./components/FilterBar";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { style } from "@mui/system";
import {itemInformation, filterGroupInformation} from './data';


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;});
/* ############################################################## */


function App() {
/*
  TODO: use useState to create a state variable to hold the state of the cart
*/
const [cart, setCart] = useState({
  prods: [], 
  total: 0});
const [type, setType] = useState({filters: ["All"]});
const [sorted, setSort] = useState(false);


const updateCart = (index) => {
  const bakeryItem = bakeryData[index];
  const itemName = bakeryItem.name;
  const currentCart = cart.prods;

  if (currentCart.includes(itemName)) {
    const newCart = currentCart.filter((item) => item !== itemName);
    const updatedTotal = cart.total - bakeryItem.price
    setCart({prods: newCart, total: updatedTotal})
    console.log(newCart)
    console.log(itemName)
  }
  else {
    const newList = cart.prods.concat(itemName)
    const updatedTotal = cart.total + bakeryItem.price
    setCart({prods: newList, total: updatedTotal})
  }
}

const selectFilterType = (event) => {
    if (event.target.name === 'All') {
    setType({filters: ['All']})
  } else if (type.filters.includes('All')) {
      const newList = type.filters.filter((item) => item !== 'All').concat(event.target.name);
      setType({filters: newList});
  } else if (type.filters.includes(event.target.name)) {
    const newList = type.filters.filter((item) => item !== event.target.name);
    if (newList.length === 0) {
      setType({filters: ['All']})
    } else {
      setType({filters: newList});
  }
  } else {
    const newList = type.filters.concat(event.target.name);
    setType({filters: newList});
    
  }
}

const matchesFilterType = item => {
  if (type.filters.includes('All')) {
    return true;
  }  else if (type.filters.includes(item.type)) {
    return true;
  } else {
    return false;
  }
}




/* const sortedArray = filteredData.sort((a, b) => {
  return a.price - b.price;
  }) */
const cleanData = bakeryData.filter(matchesFilterType);
const selectSort = item => {
  if (sorted) {
    setSort(false)
  } else {
    setSort(true)
  }}

if (sorted) {
  cleanData.sort((a, b) => {
    return a.price - b.price;
  })
}


return (
    <Grid container style={{ background: '#f65555' }} spacing={4} sx={{px: 8, py: 1}}>
    <Grid xs={9} spacing={10}>
      <h1 style={{fontFamily: "Monospace", fontSize: 50, textAlign: "center", color: "white"}}>NYT Cooking Recipe Box</h1> {/* TODO: personalize your bakery (if you want) */}
      <Grid container spacing={12}>
       <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Filters</FormLabel>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox checked={type.filters.includes('All')} onChange={selectFilterType} name="All" />
            }
            label="None"
          />
          <FormControlLabel
            control={
              <Checkbox checked={type.filters.includes('Lunch')} onChange={selectFilterType} name="Lunch" />
            }
            label="Lunch"
          />
          <FormControlLabel
            control={
              <Checkbox checked={type.filters.includes('Dinner')} onChange={selectFilterType} name="Dinner" />
            }
            label="Dinner"
          />
          <FormControlLabel
            control={
              <Checkbox checked={type.filters.includes('Dessert')} onChange={selectFilterType} name="Dessert" />
            }
            label="Dessert"
          />
        </FormGroup>
        </FormControl>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Sort by</FormLabel>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox checked={sorted} onChange={selectSort} name="All" />
            }
            label="Cook time: low to high"
          /> 
        </FormGroup>
        </FormControl>
        </Grid>
        <Grid container spacing={12}>
      {cleanData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components            
          <Grid key={index} xs={4}>
            <BakeryItem item={item} updateCart={updateCart} index={index}>
            </BakeryItem>
          </Grid> 
        ))}
      </Grid>
    </Grid>
    <Grid xs>
      <h2 style={{fontFamily: "Monospace", fontSize: 40, textAlign: "center", color: "white"}}>Selected Recipes</h2>
      {Object.keys(cart).map((name) => (
        <Typography mt={2} key={name}>
        </Typography>
      ))} {/* TODO: render a list of items in the cart */}
          {Object.keys(cart.prods).length === 0 ? (
          <Typography align='center' fontStyle='italic' color="white">What are we making tonight?</Typography>
          ) : (
          <Typography align='center' color="white" mt={2}>
            {Object.keys(cart.prods).map((itemName) => (<p>{cart.prods[itemName]}</p>))}
            Total:  
             {cart.total.toFixed(2)} hours
          </Typography>
        )}   
    </Grid>
  </Grid>

);
}


export default App;
