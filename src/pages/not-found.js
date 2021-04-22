import { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    document.title = 'Not-Found Instagram';
  }, []);
  return (
    <div className="bg-gray-background">
      <div className="mx-auth max-w-screen-lg">
        <p className="text-center text-2xl">This page was not found sorry</p>
      </div>
    </div>
  );
};

export default NotFound;
