import React, { useEffect, useState } from 'react'
import styles from "./loading.module.css"
import Pic1 from "../Assets/loading_black.png"
import Pic2 from "../Assets/nekopi.svg"
import Pic3 from "../Assets/loading_white.png"
import clsx from "clsx"
const Loading = () => {
  const [animate_switch, setAnimate_switch] = useState(false)

  useEffect(() => {
    setAnimate_switch(true)
  }, [])

  return (
    <div className={styles.loading}>
      <div className={styles.loading_1}>
        <img className={clsx(styles.pic1, animate_switch && styles.pic_animate)} src={Pic1}></img>
        <img className={clsx(styles.pic2, animate_switch && styles.loading_1_animate)} src={Pic2}></img>
        <img className={clsx(styles.pic3, animate_switch && styles.pic_animate)} src={Pic3}></img>
      </div>
    </div>
  )
}

export default Loading
