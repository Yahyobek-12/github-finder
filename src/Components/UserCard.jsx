import '../Styles/UserCard.css';
import { Link } from 'react-router-dom';

const UserCard = ({ item }) => {
  return (
    <Link to={`/profile/${item.login}`} className='user-card'>
      <img src={item.avatar_url} alt="user" />
      <h3>{item.login}</h3>
    </Link>
  );
};

export default UserCard;