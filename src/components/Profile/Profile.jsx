import css from './profile.module.css'

export const Profile = ({ username, tag, location, stats, avatar }) => {
    return (
        <div className={css.profile}>
          <div className="description">
            <img
              src={avatar}
              alt="User avatar"
              className={css.avatar}
            />
                <p className="name">{username}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>
          <ul className={css.stats}>
          <li className={css.statsItem}>
              <span className={css.label}>Followers</span>
              <span className={css.quantity}>{stats.followers}</span>
            </li>
          <li className={css.statsItem}>
              <span className={css.label}>Views</span>
              <span className={css.quantity}>{stats.views}</span>
            </li>
            <li className={css.statsItem}>
              <span className={css.label}>Likes</span>
              <span className={css.quantity}>{stats.likes}</span>
            </li>
          </ul>
        </div>
    )
}