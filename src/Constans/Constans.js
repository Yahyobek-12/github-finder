// ApiProvider.js
import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchClicked, setSearchClicked] = useState(false); // New state

  useEffect(() => {
    if (!searchQuery || !searchClicked) {
      setUserData([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    fetch(`https://api.github.com/search/users?q=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.items) {
          setUserData(data.items);
        } else {
          setUserData([]);
          setError("No users found.");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setUserData([]);
        setError("Error fetching data. Please try again.");
        setLoading(false);
      });
  }, [searchQuery, searchClicked]); // Add searchClicked to dependency array

  const handleSearchClick = () => {
    setSearchClicked(true);
  };

  return (
    <ApiContext.Provider value={{ searchQuery, setSearchQuery, userData, loading, error, handleSearchClick }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
