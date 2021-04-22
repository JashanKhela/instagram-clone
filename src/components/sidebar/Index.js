import useUser from '../../hooks/use-user';
import User from './User';
import Suggestions from './Suggestions';

export default function SideBar() {
  const { user } = useUser();

  return (
    <div className="p-4">
      <User username={user?.username} fullName={user?.fullname} />
      <Suggestions
        userId={user?.userId}
        following={user?.following}
        loggedInUserDocId={user?.docId}
      />
    </div>
  );
}
