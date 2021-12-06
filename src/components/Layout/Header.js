import HeaderCardButton from './HeaderCardButton'
import mealsImg from '../../assets/meals.jpg'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImg} alt="A table full of delicious food!" />
      </div>
    </>
  )
}

export default Header
