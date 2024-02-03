import 'animate.css';
import '../Styles/UserCard.css';
import { Link } from 'react-router-dom';

const UserCard = ({ item }) => {
  return (
    <Link to={`/profile/${item.login}`} className='user-card animate__animated animate__fadeInUp'>
      <img src={item.avatar_url} alt="user" />
      <h3>{item.login.slice(0, 12)}</h3>
    </Link>
  );
};

export default UserCard;