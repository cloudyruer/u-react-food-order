import MealItemForm from './MealItemForm'
import styles from './MealItem.module.scss'

const MealItem = ({ id, name, description, price }) => {
  const priceFix = `$${price.toFixed(2)}`

  return (
    <li className={styles.meal}>
      <div>
        <h3 className={styles['meal__name']}>{name}</h3>
        <div className={styles['meal__description']}>{description}</div>
        <div className={styles['meal__price']}>{priceFix}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  )
}

export default MealItem
