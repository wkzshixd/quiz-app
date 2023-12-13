import styles from './Menu.module.css'
import { MenuButton } from '../menu-button/MenuButton'


const data = [
    {
        id: '1',
        name: 'C++',
        logo: './img/c++_logo.png',
        questions: {},
    },
    {
        id: '2',
        name: 'Java',
        logo: './img/java_logo.png',
        questions: {},
    },
    {
        id:'3',
        name: 'Python',
        logo: './img/python_logo.png',
        questions: {},
    }
]


export const Menu = () => {
  return (
    <div className={styles.container}>
        {data.map((lang) => {
            return <MenuButton key={lang.id} id={lang.id} text={lang.name} logo={lang.logo}/>
        })}
    </div>
  )
}
