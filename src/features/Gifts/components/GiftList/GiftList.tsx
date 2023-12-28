import { gift } from "../../types/gift";
import { jsonGiftListToListOfElements } from "../../utils/jsonGiftToElement";

import styles from "./GiftList.module.scss";

const GiftList = ({ listOfGifts }: { listOfGifts: gift[] }) => {
  return (
    <section className={styles.giftList}>
      {jsonGiftListToListOfElements(listOfGifts)}
    </section>
  );
};
export default GiftList;
