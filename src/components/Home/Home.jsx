import './Home.css'
import me from '../../images/mac-5.jpg'
import { Link } from 'react-router-dom'

const Home = ({ userData }) => {
  return (
    <div className='home'>
      {userData && (
        <div className="user-card">
        <div className="top-result">
            <img src={userData.avatar_url} alt="user-avatar" className='user-avatar' />
            <h3>{userData.login}</h3>
        </div>
        <div className="middle-result">
            <p>followers: {userData.followers}</p>
            <p>following: {userData.following}</p>
            <p>repos: {userData.public_repos}</p>
        </div>
        <div className="bio">
            <p>bio: {userData.bio}</p>
        </div>
        <div className="created">
            <p>join: {userData.created_at}</p>
            <p>type: user</p>
        </div>
        <div className="footer-result">
            <Link to={userData.html_url} target='_blank' className='links'>user profile</Link>
            <Link to={userData.blog} target='_blank' className='links'>{userData.company}</Link>
        </div>
      </div>
      )}
    </div>
  )
}

export default Home
