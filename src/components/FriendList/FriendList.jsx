import friendListStyles from './friendListStyles.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
       <li className="item">
         <span className={isOnline ? "status online" : "status offline"}></span>
         <img className="avatar" src={avatar} alt="User avatar" width="68" />
            <p className="friend-name">{name}</p>
       </li> 
    )
}

export const FriendList = ({ friends }) => {
    return (
    <ul className="friend-list">
        {friends.map(friend => {
            return <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                key={friend.id} />
      })}
        </ul>
    )
}
