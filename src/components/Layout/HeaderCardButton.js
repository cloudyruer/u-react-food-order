import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCardButton.module.scss'

const HeaderCardButton = ({ onShowCart }) => {
  return (
    <button className={styles.button} onClick={onShowCart}>
      <span className={styles['button__icon']}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles['button__badge']}>3</span>
    </button>
  )
}

export default HeaderCardButton
