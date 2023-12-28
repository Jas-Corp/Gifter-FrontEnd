import { gift } from "../../types/gift";

import styles from "./Gift.module.scss";

const Gift = ({ gift }: { gift: gift }) => {
  return (
    <article className={styles.gift}>
      <h4>{gift.title}</h4>
      <p>{gift.description}</p>
      <img src={gift.image_url} alt="A image of a gift" />
    </article>
  );
};
export default Gift;
