import styles from '../menu-button/MenuButton.module.css'


interface MenuButtonProps {
  text: string;
  logo: string;
}


export const MenuButton = ({text, logo} : MenuButtonProps) => {
  return (
    <div className={styles.container} onClick={() => console.log('x?')}>
      <img className={styles.logo} src={logo}/>
      <label className={styles.text}>{text}</label>
    </div>
  )
}
