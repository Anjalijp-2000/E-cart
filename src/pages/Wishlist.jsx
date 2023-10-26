import React from 'react'
import { Row,Col,Button,Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'
function Wishlist() {
  const dispatch = useDispatch()
  const handleWishlistCart = (product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  return (
    <div style={{marginTop:'100px'}}>
      <Row>
        {
          wishlistArray.length>0?
          wishlistArray.map((product,index)=>(
            <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
          <Card className='shadow-rounded' style={{ width: '18rem', height:'29rem'}}>
        <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
        <Card.Body>
          <Card.Title>{product?.title}</Card.Title>
          <Card.Text>
           <p>{product?.description.slice(0,55)}...</p>
           <h5>$ {product?.price}</h5>
          </Card.Text>
          <div className='d-flex  justify-content-between'>
            <Button onClick={()=>dispatch(removeFromWishlist(product.id))}  className='btn btn-light'>
              <i className='fa-solid fa-trash text-danger fa-2x'></i>
              </Button>
              <Button onClick={()=>handleWishlistCart(product)} className='btn btn-light'>
              <i className='fa-solid fa-cart-plus text-success fa-2x'></i>
              </Button>
            </div>
         
        </Card.Body>
      </Card>
        </Col>
          )):<div style={{height:'60vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
          <img height={'250px'} src="https://media2.giphy.com/media/fscIxPfKjPyShbwUS5/giphy.gif?cid=6c09b9521b4b7adc2ede5194a30481a1994f52968b0d1f9d&rid=giphy.gif&ct=s" alt="" />
          <h3 className='fw-bolder text-primary'>Your Wishlist Is Empty</h3>
          <Link style={{textDecoration:'none'}} className='btn btn-success rounded mt-3' to={'/'}>Back To Home</Link>
        </div>
        }
      </Row>
    </div>
  )
}

export default Wishlist