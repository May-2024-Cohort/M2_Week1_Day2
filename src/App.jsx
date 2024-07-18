import HelloName from "./components/HelloName"
import Weather from "./components/Weather"

import "./App.css"
import ProductList from "./components/ProductList"

function App() {


  const myCity = {
    cityName : "Mumbai"
  }

  return (
    <div id="main-container">
     {/* <HelloName name="Judi" city="Netherlands" pictureSrc="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></HelloName>
     <HelloName name="Daniel" city="Barcelona"></HelloName>
     <HelloName name="Toni"></HelloName> */}

     <Weather nameOfCity = {myCity.cityName}></Weather>
 

     <ProductList imageHeight={50} ></ProductList>
     <ProductList imageHeight={150}></ProductList>
     <ProductList></ProductList>

    </div>
  )
}

export default App
