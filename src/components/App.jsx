import { Profile } from 'components/Profile';
import user from '../data/user.json';
import { Statistics } from './Statistics';
import data from '../data/data.json';
import { FriendList } from './FriendList';
import friends from '../data/friends.json';
import { TransactionHistory } from './TransactionHistory';
import transaction from '../data/transactions.json'

export const App = () => {
  return (
    <>
      <Profile  username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      
      <Statistics stats={data} title="Upload stats" />
      
      <FriendList friends={friends} />

      <TransactionHistory item={transaction} />
    </> 
  );
};