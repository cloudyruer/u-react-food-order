import HeaderCardButton from './HeaderCardButton'
import mealsImg from '../../assets/meals.jpg'
import styles from './Header.module.scss'

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onShowCart={onShowCart} />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImg} alt="A table full of delicious food!" />
      </div>
    </>
  )
}

export default Header
