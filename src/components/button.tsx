import { PropagateLoader } from 'react-spinners';

type ButtonPropsType = {
  label: string;
  onClickAction: () => void;
  loading: boolean;
  classes: string;
};

export const Button = ({
  label,
  onClickAction,
  loading,
  classes,
}: ButtonPropsType) => {
  return (
    <button
      className={`m-4 h-16 ring-1 ring-chalk rounded-full text-chalk transition hover:bg-chalk hover:bg-opacity-30  ${classes}`}
      onClick={onClickAction}
    >
      <PropagateLoader
        className='h-4'
        color='#F8F9FA'
        loading={loading}
        size={16}
      />
      {!loading && label}
    </button>
  );
};
