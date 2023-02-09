import styles from './Comment.module.css'

import formatTimeAgo from "@/utils/formatTimeAgo"

export default function Comment({ name, comment, createdAt }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <p className={styles.name}>{name}</p>
        <p className={styles.time}>{formatTimeAgo(createdAt)}</p>
      </div>
      <p>{comment}</p>
    </div>
  )
}