type Props = {};
export const GradientText = ({ text }: { text: string }) => {
  return <h1 className={styles["color-transition"]}>{text}</h1>;
};

export default GradientText;
