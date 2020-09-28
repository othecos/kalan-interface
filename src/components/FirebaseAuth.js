import React, {
  useEffect,
  useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SplashScreen from 'src/components/SplashScreen';
import { setUserData, logout } from 'src/actions/accountActions';
import authService from 'src/services/authService';

function FirebaseAuth({ children }) {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);
  const {auth} = useSelector((state) => state.firebaseReducer);

  useEffect(() => {
    const initAuth = async () => {
      if(auth.isLoaded){
        setLoading(true);
      }else{
        setLoading(false);
      }
    };

    initAuth();
  }, [dispatch]);

  if (isLoading) {
    return <SplashScreen />;
  }
  return children
}

FirebaseAuth.propTypes = {
  children: PropTypes.any
};

export default FirebaseAuth;
