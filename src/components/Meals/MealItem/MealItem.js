import { useContext } from 'react'

import MealItemForm from './MealItemForm'
import styles from './MealItem.module.scss'
import CartContext from '../../../store/cart-context'

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext)

  const priceFix = `$${price.toFixed(2)}`

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id,
      name,
      amount,
      price,
    })
  }

  return (
    <li className={styles.meal}>
      <div>
        <h3 className={styles['meal__name']}>{name}</h3>
        <div className={styles['meal__description']}>{description}</div>
        <div className={styles['meal__price']}>{priceFix}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  )
}

export default MealItem
