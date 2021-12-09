import { useContext, useEffect, useState } from 'react'

import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'
import styles from './HeaderCardButton.module.scss'

const HeaderCardButton = ({ onShowCart }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce(
    (acc, cur) => acc + cur.amount,
    0
  )

  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`

  useEffect(() => {
    if (cartCtx.items.length === 0) return
    setBtnIsHighlighted(true)
    const timeId = setTimeout(() => setBtnIsHighlighted(false), 300)
    return () => clearTimeout(timeId)
  }, [cartCtx.items])

  return (
    <button className={btnClasses} onClick={onShowCart}>
      <span className={styles['button__icon']}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles['button__badge']}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCardButton
