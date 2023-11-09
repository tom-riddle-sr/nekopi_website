import React from 'react'
import styles from "./p3.module.css"
import Pic1 from "../Assets/p3_umberalla.jpeg"
import Pic2 from "../Assets/p3_whiteumberlla.jpeg"
import Whitetail from "../Assets/p3_whitetail.png"
const P3 = () => {
  return (
    <div className={styles.container_p3}>
      <p className={styles.about}>about</p>
      <div className={styles.container2}>
        <div className={styles.container2_1}>
          <div className={styles.container2_1_1}>雨からも、紫外線からも、
            あにゃたを守る</div>
          <div className={styles.container2_1_2}>急な雨も、真夏の紫外線もガードできる
            優秀にゃんこ傘、ネコピ。
            ネコピと一緒なら、どんなお天気でも気分は上々！
            持っているだけで毎日安心に。</div>
        </div>
        <div className={styles.container2_2}>
          <img className={styles.pic1} src={Pic1}></img>
        </div>
      </div>

      <div className={styles.container3}>
        <div className={styles.container3_1}>
          <img className={styles.pic2} src={Pic2}></img>
        </div>
        <div className={styles.container3_2}>
          <div className={styles.container3_2_1}>毎日連れて歩きたくにゃる</div>
          <div className={styles.container3_2_2}>まん丸の瞳にピンと立ったお耳。
            ちょこんとした鼻にふっくらした丸い口元。
            ふわふわしっぽのカバーに入れたら、
            そのままバッグにイン。
            ネコピと一緒なら、雨の日も楽しくお出かけできちゃう。</div></div>

      </div>
      <img className={styles.whitetail} src={Whitetail}></img>
    </div>

  )
}

export default P3
