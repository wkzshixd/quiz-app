import styles from '../menu-button/MenuButton.module.css'
import { useDispatch } from 'react-redux';
import { question} from '../slices/appSlice'

interface MenuButtonProps {
  text: string;
  logo: string;
}


export const MenuButton = ({text, logo} : MenuButtonProps) => {
  
  const dispatch = useDispatch();

  function handleClick () {
    dispatch(question(text))
  }

  return (
    <>   
    <div 
      className={styles.container} 
      onClick={handleClick}
      >
      <img className={styles.logo} src={logo}/>
      <label className={styles.text}>{text}</label>
    </div>

    </>

  )
}
