import { Profile } from 'components/Profile/Profile';
import user from '../data/user.json';
import { Statistics } from './Statisics/Statistics';
import data from '../data/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transaction from '../data/transactions.json'

export const App = () => {
  return (

    <div className='main'>
      <Profile  username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <div className='conteiner'>
      <Statistics stats={data} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory item={transaction} />
        
      </div>
    </div> 
  );
};