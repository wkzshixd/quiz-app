import styles from './Menu.module.css'
import { MenuButton } from '../menu-button/MenuButton'
import rawData from "../../../public/data.json";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export type JSONData = typeof rawData;

export const Menu = (props) => { // FIXME:
    const [data, setData] = useState<JSONData | undefined>(undefined);
    useEffect(() => {
      if (props.json && props.json !== data) {
        setData(props.json);
      }
    }, [props.json, data]);
  
    
    let visibility = 'visible';
    const appState = useSelector((state) => state.app.value) // FIXME:
    appState == 'menu' ? visibility = 'visible' : visibility = 'hidden';



  return (  
    <div className={`${styles.container} ${visibility}`}>
        {data?.map((item) => {return <MenuButton key={item.id} text={item.lang} logo={item.logo}/>})}
    </div>
  )
}
