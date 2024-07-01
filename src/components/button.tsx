type ButtonPropsType = {
  label: string;
  onClickAction: () => void;
};

export default function Button({ label, onClickAction }: ButtonPropsType) {
  return (
    <button
      className='py-4 px-2 mt-4 bg-chalk rounded-sm transition hover:bg-opacity-80'
      onClick={onClickAction}
    >
      {label}
    </button>
  );
}
