import React from 'react';
import { useRoutes } from 'react-router-dom';
// đâyt là 1 customHook hỗ trợ quản lý các tuyến đường của trang
const useRouteCustom = () => {
  const route = useRoutes();
  return route;
};

export default useRouteCustom;
