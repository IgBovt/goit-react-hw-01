import css from './Friendlist.module.css';

import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(({ avatar, id, name, isOnline }) => (
        <li key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
