import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'

const Cart = () => {
  if (Cookies.get('jwt_token') === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div>
      <Header />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png "
        alt="cart"
      />
    </div>
  )
}
export default Cart
