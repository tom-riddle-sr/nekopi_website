import React, { useEffect, useState } from 'react'
import styles from "./p1.module.css"
import Twocat from "../Assets/p1_two_cat.jpeg"
import clsx from 'clsx'

const P1 = () => {

  const [collapse_switch, setCollapse_switch] = useState(false)
  useEffect(() => {
    setCollapse_switch(true)
  }, [])
  return (
    <div className={styles.container_p1}>
      <img className={styles.twocat} src={Twocat}></img>
      <div className={styles.container_p1_1}>
        <div className={clsx(styles.container_p1_1_1, collapse_switch && styles.container_p1_1_1_animate)}></div>
        <div className={clsx(styles.container_p1_1_2, collapse_switch && styles.container_p1_1_2_animate)}></div>
      </div>
    </div>
  )
}

export default P1
