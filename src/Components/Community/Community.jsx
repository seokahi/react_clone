import styles from "./community.module.css";

const Community = () => {
    return (
        <div className={styles.container}>
        <h2 className={styles.tit}>Where To Get Support</h2>
        <span className={styles.def}>React has a community of millions of developers.</span>
        <p className={styles.explanation}>On this page we’ve listed some React-related communities that you can be a part of;</p>
        </div>
    )
}

export default Community