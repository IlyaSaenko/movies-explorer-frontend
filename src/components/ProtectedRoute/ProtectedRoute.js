import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element: Component, ...props }) {
  const loggedIn = localStorage.getItem('jwt') !== null;
  return <>{loggedIn ? <Component {...props} /> : <Navigate to='/' replace />}</>;
}

export default ProtectedRoute;