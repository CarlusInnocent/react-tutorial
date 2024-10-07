import { PostItem } from "./Post-Item";
import styles from "./Posts.module.css";

export function Posts(){
    return(
        <div className={styles.posts}>
            <div className={styles.postTitle}>
                <h1 className={styles.miniHeading}>POSTS</h1>
                <button className={styles.refreshButton}>RE-FRESH</button>
            </div>
            <section className={styles.postsArea}>
                <PostItem image="./src/components/images/aci.jpeg" name="Carlus Innocent" age={24} verified={true}/>
                <PostItem image="./src/components/images/eve.jpeg" name="Eve" age={25} verified={false}/>
                <PostItem image="./src/components/images/addie.jpeg" name="Addie" age={23} verified={true}/>
            </section>
        </div>
    );
}
