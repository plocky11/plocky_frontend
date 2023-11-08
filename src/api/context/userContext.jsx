import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext([]);

export function useUserData() {
  const value = useContext(UserContext);
  if (value === undefined) {
    throw new Error('useUserData should be used within UserProvider');
  }
  return value;
}

export function UserProvider({ children }) {
  const [userProfile, setUserProfile] = useState();
  const navigate = useNavigate();

  const fetchUserProfile = useCallback(async () => {
    const userProfileResponse = await Promise.resolve();

    if (!userProfileResponse) {
      navigate('/login');
      return;
    }

    setUserProfile(userProfileResponse);
  }, []);

  useEffect(() => {
    fetchUserProfile();
  }, [children]);

  const value = useMemo(() => [userProfile, setUserProfile]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
