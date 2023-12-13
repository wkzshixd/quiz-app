import styles from './Menu.module.css'
import { MenuButton } from '../menu-button/MenuButton'
import rawData from "../../../public/data.json";
import { useEffect, useState } from 'react';
type JSONData = typeof rawData;

export const Menu = () => {
    const [data, setData] = useState<JSONData | undefined>(undefined);

    useEffect (() => {
        fetch('./data.json')
        .then(response => response.json())
        .then(json => setData(json))
    }, [])


  return (  
    <div className={styles.container}>
        {data?.map((item) => {return <MenuButton key={item.id} text={item.lang} logo={item.logo}/>})}
    </div>
  )
}
