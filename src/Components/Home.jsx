import '../Styles/Home.css';
import UserCard from './UserCard';
import { useContext, useEffect } from 'react';
import { ApiContext } from '../Constans/Constans';
import search__Logo from '../images/search-logo.png';

const Home = () => {
  const { loading, userData, error } = useContext(ApiContext);

  useEffect(() => {
    document.title = 'GitSearcher'
  }, [])

  return (
    <div className='home'>
      <div className="home-in">
        {loading ? (
          <div className="loading">
            <div className="loading-round"></div>
          </div>
        ) : (
          <>
            {error ? (
              <div className="error">
                <h3>Error fetching data. Please try again.</h3>
              </div>
            ) : (
              <>
                {userData.length === 0 ? (
                  <div className="no-users">
                    <img src={search__Logo} alt="search-logo" width='500px' height='500px' />
                  </div>
                ) : (
                  <>
                    {userData.map((item) => (
                      <UserCard key={item.id} item={item} />
                    ))}
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
