export const Profile = ({ username, tag, location, stats, avatar }) => {
    return (
        <div className="profile">
          <div className="description">
            <img
              src={avatar}
              alt="User avatar"
              className="avatar"
            />
                <p className="name">{username}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
        </div>
        <a className='bank-link' title="Check your transactions" href="" >
          <img className='bank-image'
            src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Circle-icons-creditcard.svg" alt="bank card" />
        </a>
          <ul className="stats">
            <li className='stats-item'>
              <span className="label">Followers</span>
              <span className="quantity">{stats.followers}</span>
            </li>
            <li className='stats-item'>
              <span className="label">Views</span>
              <span className="quantity">{stats.views}</span>
            </li>
            <li className='stats-item'>
              <span className="label">Likes</span>
              <span className="quantity">{stats.likes}</span>
            </li>
          </ul>
        </div>
    )
}