import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type TrackIconProps = {
  icon: IconDefinition;
  action: undefined | (() => void);
};

export const TrackControlIcon = ({ icon, action }: TrackIconProps) => {
  return (
    <button className='mx-2' onClick={action}>
      <FontAwesomeIcon
        className='h-6 text-chalk transition hover:opacity-70'
        icon={icon}
      />
    </button>
  );
};
