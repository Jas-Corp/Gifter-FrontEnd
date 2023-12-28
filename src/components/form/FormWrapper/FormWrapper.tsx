import styles from "./FormWrapper.module.scss";

const FormWrapper = ({
  children,
  onSubmit,
}: {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <form
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(event);
      }}
      className={styles.form}
    >
      {children}
    </form>
  );
};
export default FormWrapper;
