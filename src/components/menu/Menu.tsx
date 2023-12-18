import styles from './Menu.module.css'
import { MenuButton } from '../menu-button/MenuButton'
import rawData from "../../../public/data.json";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export type JSONData = typeof rawData;

interface MenuProps {
  json: JSONData;
}
export const Menu: React.FC<MenuProps> = ({json}) => {
    const [data, setData] = useState<JSONData | undefined>(undefined);
    useEffect(() => {
      if (json && json !== data) {
        setData(json);
      }
    }, [json, data]);
  
    
    let visibility = 'visible';
    const appState = useSelector((state: RootState) => state.app.value)
    appState == 'menu' ? visibility = 'visible' : visibility = 'hidden';



  return (  
    <div className={`${styles.container} ${visibility}`}>
        {data?.map((item) => {return <MenuButton key={item.id} text={item.lang} logo={item.logo}/>})}
    </div>
  )
}
