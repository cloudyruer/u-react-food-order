import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCardButton.module.scss'

const HeaderCardButton = () => {
  return (
    <button className={styles.button}>
      <span className={styles['button__icon']}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles['button__badge']}>3</span>
    </button>
  )
}

export default HeaderCardButton
