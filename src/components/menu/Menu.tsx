import styles from './Menu.module.css'
import { MenuButton } from '../menu-button/MenuButton'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { IData } from '../../data.d'


interface MenuProps {
  json: IData;
}
export const Menu: React.FC<MenuProps> = ({json}) => {
    const [data, setData] = useState<IData>();
    useEffect(() => {
      if (json && json !== data) {
        setData(json);
      }
    }, [json, data]);
  
    
    let visibility = styles.visible;
    const appState = useSelector((state: RootState) => state.app.value)
    appState == 'menu' ? visibility = styles.visible : visibility = styles.hidden;



  return (  
    <div className={`${styles.container} ${visibility}`}>
        {data?.map((item) => {return <MenuButton key={item.id} text={item.lang} logo={item.logo}/>})}
    </div>
  )
}
