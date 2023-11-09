import React from 'react'
import styles from "./p4.module.css"
import Pic1 from "../Assets/p4_0degree.svg"
import Pic2 from "../Assets/p4_30degree.svg"
import Pic3 from "../Assets/p4_60degree.svg"
import Pic4 from "../Assets/p4_90degree.svg"
import Pic5 from "../Assets/p4_-60degree.svg"
import Pic6 from "../Assets/p4_-30degree.svg"
import Blacktail from "../Assets/p4_blacktail.png"
const P4 = () => {
  return (
    <div className={styles.container_p4}>
      <div className={styles.container_p4_1}>
        <p className={styles.p1}>features</p>
        <div className={styles.container_p4_1_1}>
          <p className={styles.p2}>かわいいだけじゃにゃい！
            マルチに役立つ6つの機能。</p>
          <p className={styles.p3}>雨の日も晴れの日も使える兼用タイプで、
            UVカット・遮光・遮熱・撥水・防水に対応した
            ポリウレタンコーティング加工生地を採用。</p>
        </div>
        <div className={styles.container_p4_1_2}>
          <div className={styles.div_p4_1_2_1}>
            <img className={styles.pic1} src={Pic1} />
            <p className={styles.p5}>UVカット率<br></br>
              99.9%</p></div>
          <div className={styles.div_p4_1_2_2}>
            <img className={styles.pic2} src={Pic2} />
            <p className={styles.p5}>UPF50+<br></br>
              （10段階中最高値）</p></div>

          <div className={styles.div_p4_1_2_3}>
            <img className={styles.pic3} src={Pic3} />
            <p className={styles.p5}>  撥水・
              防水効果</p>
          </div>
          <div className={styles.div_p4_1_2_4}>
            <img className={styles.pic4} src={Pic4} />
            <p className={styles.p5}> 遮熱効果</p>
          </div>
          <div className={styles.div_p4_1_2_5}>
            <img className={styles.pic5} src={Pic5} />
            <p className={styles.p5}> 遮光率
              99.9%</p>
          </div>
          <div className={styles.div_p4_1_2_6}>
            <img className={styles.pic6} src={Pic6} />
            <p className={styles.p5}>晴雨兼用
            </p></div>

        </div>
      </div>
      {/* <img className={styles.blacktail} src={Blacktail} /> */}

    </div>
  )
}

export default P4
