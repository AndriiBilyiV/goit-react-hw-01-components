import css from './friendList.module.css';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
       <li className={css.item}>
            <span className={clsx(css.status, isOnline ?  css.online : css.offline)}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="68" />
            <p className={css.friendName}>{name}</p>
       </li> 
    )
}

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
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
