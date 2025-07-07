import React from 'react';
import { Navigate } from 'react-router-dom';

export default function SuperuserRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
  const isSuperuser = localStorage.getItem('isSuperuser') === 'true';

  if (!isLoggedIn) return <Navigate to="/login" />;
  if (!isSuperuser) return <Navigate to="/unauthorized" />;

  return children;
}
