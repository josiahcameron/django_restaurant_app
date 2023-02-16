import "./App.css";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Menu from "./Components/Menu/Menu";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";


function App() {
  const [MENU_ITEMS, setMenuItems] = useState(null)

  // This function will run any time a menu item is added
  useEffect(()=> {
    const getMenuItems = async() => {
      const response = await fetch("/api_v1/menu_items/")

      // Creates an error message to display if fetch request isn't working; throw will stop the next step from executing
      if(!response.ok){
        throw new Error("Network response was not ok");
      }

      // Variable that represents the json response to get thrown into fetch request
      const data = await response.json();
    
      // Gets the menu items from your json data
      setMenuItems(data)
    };

    getMenuItems();
    // Dependencies array; any time the value changes it will fire off the fetch request
  },[]);


  const addMenuItem = async ()=>{
    const menu_item = {
      name: '',
      description: '',
      price: 0,
      image: '',
      type: ''
    }

    const options = {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "X-CSRFToken": Cookies.get("csrftoken")
      },
      body: JSON.stringify(menu_item),
    }

    const response = await fetch("/api_v1/menu_items/", options)
    if(!response.ok){
      throw new Error("Network response not Ok")
    }

    const data = response.json();
    setMenuItems([...MENU_ITEMS, data])
    };

  

    if (!MENU_ITEMS){
      return <div>Fetching data ...</div>
    }

    // const menu_itemsHTML = MENU_ITEMS.map(menu_item => (
    //   <li key={menu_item.id}>{menu_item.name}</li>
    // ))


  
  return (
    
    <div className="full-app">
      <button type="button" onClick={addMenuItem}></button>
    <Navbar bg="light" expand="lg" fixed="top" >
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto navbar">
          <Nav.Link href="#">All Items</Nav.Link>
          <Nav.Link href="#">Entrees</Nav.Link>
          <Nav.Link href="#">Desserts</Nav.Link>
          <Nav.Link href="#">Sides</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    <div>
    <Menu MENU_ITEMS={MENU_ITEMS}/>;
    </div>
    </div>
  );
}




export default App;
