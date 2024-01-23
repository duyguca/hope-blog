import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, hope dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <div className={styles.responsiveImg}>
            <Image
              src="/tech.jpg"
              alt="tech photo"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </h1>
          <p classname={styles.postDesc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
