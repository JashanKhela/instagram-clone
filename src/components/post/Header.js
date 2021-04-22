import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ username }) => (
  <div className="flex border-b border-gray-primary h-4 p-4 py-8">
    <div className="flex items-center">
      <Link to={`/profile/${username}`} className="flex leading-loose">
        <img
          src={`/images/avatars/${username.toLowerCase()}.jpg`}
          alt={`${username} profile pic`}
          className="rounded-full h-8 w-6 flex mr-3"
        />
        <p className="font-bold">{username}</p>
      </Link>
    </div>
  </div>
);

Header.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Header;
