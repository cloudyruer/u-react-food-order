import { useContext } from 'react'

import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'
import styles from './HeaderCardButton.module.scss'

const HeaderCardButton = ({ onShowCart }) => {
  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce(
    (acc, cur) => acc + cur.amount,
    0
  )

  return (
    <button className={styles.button} onClick={onShowCart}>
      <span className={styles['button__icon']}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles['button__badge']}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCardButton
