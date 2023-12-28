import styles from "./ErrorElement.module.scss";

const ErrorElement = ({ message }: { message: string | undefined | null }) => {
  if (!message) return null;

  return (
    <p className={styles.error}>
      {message.split("\n").map((message: string) => {
        return (
          <span key={message}>
            - {message}
            <br />
          </span>
        );
      })}
    </p>
  );
};
export default ErrorElement;
