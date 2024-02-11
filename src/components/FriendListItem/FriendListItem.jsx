import css from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const className = clsx(isOnline ? css.isOnline : css.isOffline);
  return (
    <div className={css.container}>
      <img src={avatar} alt="Avatar" width="48" height="48" />
      <p>{name}</p>
      <p className={className}> {isOnline ? 'Online' : 'Ofline'}</p>
    </div>
  );
};

export default FriendListItem;
