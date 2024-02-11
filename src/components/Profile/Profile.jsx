import css from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span className={css.count}>{followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span className={css.count}>{views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span className={css.count}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
