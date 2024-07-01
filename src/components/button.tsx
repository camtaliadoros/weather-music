type ButtonPropsType = {
  label: string;
  onClickAction: () => void;
};

export default function Button({ label, onClickAction }: ButtonPropsType) {
  return (
    <button
      className='py-4 px-2 mt-4 ring-1 ring-chalk rounded-full text-chalk transition hover:bg-chalk hover:text-black'
      onClick={onClickAction}
    >
      {label}
    </button>
  );
}
