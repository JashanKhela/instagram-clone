import useUser from '../../hooks/use-user';
import User from './User';
import Suggestions from './Suggestions';

export default function SideBar() {
  const { user } = useUser();

  return (
    <div className="hidden md:block p-4">
      <User username={user?.username} fullName={user?.fullName} />
      <Suggestions
        userId={user?.userId}
        following={user?.following}
        loggedInUserDocId={user?.docId}
      />
    </div>
  );
}
