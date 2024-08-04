import React from 'react'
import { lazy, Suspense } from 'react';
const RemoteComponent = React.lazy(() => import('remoteApp/MicroFrontend'));


const RemoteApp = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <RemoteComponent />
  </Suspense>)
}

export default RemoteApp
