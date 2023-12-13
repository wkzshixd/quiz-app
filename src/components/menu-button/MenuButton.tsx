import styles from '../menu-button/MenuButton.module.css'


interface MenuButtonProps {
  id : string;
  text: string;
  logo: string;
}


export const MenuButton = ({id, text, logo} : MenuButtonProps) => {
  return (
    <div className={styles.container} id={id} onClick={() => console.log('x?')}>
      <img className={styles.logo} src={logo}/>
      <label className={styles.text}>{text}</label>
    </div>
  )
}
