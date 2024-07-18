
function ProductList(props){

    return(
        <div>
        <h2>Product Title</h2>
        <img style={{height:`${props.imageHeight}px`}} src="https://m.media-amazon.com/images/I/61TXenWNoQL._AC_SX679_.jpg" alt="" />
        <p>Price:$</p>
      </div>
    )
}


export default ProductList