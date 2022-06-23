import styles from "./blog.module.css"
const Blog = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.tit}>How to Upgrade to <br></br>the React 18 Release<br></br>Candidate</h2>
            <span className={styles.date}>March 08, 2022 by <strong className={styles.strong}>Rick Hanlon</strong></span>
            <p className={styles.explanation}>Our next major version, React 18, is available today as a Release Candidate (RC). </p>
        </div>
    )
}

export default Blog