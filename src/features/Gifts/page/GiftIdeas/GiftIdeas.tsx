import useAuth from "@/features/Auth/hooks/useAuth";
import Button from "@/ui/Button/Button";
import ErrorElement from "@/ui/ErrorElement/ErrorElement";

import GiftList from "../../components/GiftList/GiftList";
import useGift from "../../hooks/useGift";

import styles from "./GiftIdeas.module.scss";

const GiftIdeas = () => {
  const { logout } = useAuth();
  const { gifts, getGifts, error, loading, dataError } = useGift({});

  return (
    <main className={styles.container}>
      <p className={styles.title}>
        Discover the <span>Perfect</span> Gift, Every Time.
      </p>
      <ErrorElement message={error?.message} />
      <ErrorElement message={dataError?.message} />
      <GiftList listOfGifts={gifts} />
      <Button onClick={getGifts} disabled={loading}>
        See more
      </Button>
      <p className={styles.logout} onClick={logout}>
        Logout
      </p>
    </main>
  );
};
export default GiftIdeas;
