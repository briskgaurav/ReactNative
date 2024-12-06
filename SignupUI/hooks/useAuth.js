import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/config/firebase.config';

export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Set user if authenticated
      } else {
        setUser(null); // Set null if user is logged out
      }
    });
    return unsubscribe; // Clean up on unmount
  }, []);

  return { user };
};


