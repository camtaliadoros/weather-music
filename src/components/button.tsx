type ButtonPropsType = {
  label: string;
  onClickAction: () => void;
};

export default function Button({ label, onClickAction }: ButtonPropsType) {
  return <button onClick={onClickAction}>{label}</button>;
}
