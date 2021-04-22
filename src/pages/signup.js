import { Link, useHistory } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';
import { doesUserNameExists } from '../services/firebase';

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const isInvalid = password === '' || email === '' || name === '' || username === '';

  const handleSignup = async (event) => {
    event.preventDefault();

    const userNameExists = await doesUserNameExists(username);
    if (!userNameExists.length) {
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);

        // get authed
        await createdUserResult.user.updateProfile({
          displayName: username,
        });

        // store in firestore
        await firebase
          .firestore()
          .collection('users')
          .add({
            userId: createdUserResult.user.uid,
            username: username.toLowerCase(),
            fullName: name,
            emailAddress: email.toLowerCase(),
            following: ['2'],
            followers: [],
            dateCreated: Date.now(),
          });

        history.push(ROUTES.DASHBOARD);
      } catch (error) {
        setName('');
        setEmail('');
        setPassword('');
        setError(error.message);
      }
    } else {
      setUsername('');
      setError('That username is already taken, please try another.');
    }
  };

  useEffect(() => {
    document.title = 'Sign Up - Instagram';
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen px-4 lg:px-0">
      <div className="hidden lg:flex w-5/5 lg:w-3/5">
        <img src="/images/iphone-with-profile.jpg" alt="Iphone With Instagram App" />
      </div>
      <div className="flex flex-col w-full lg:w-2/5 justify-center h-full max-w-md m-auto">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
          <h1 className="flex justify-center w-full">
            <img src="/images/logo.png" alt="Instgram Logo" className="mt-2 w-6/12 mb-4" />
          </h1>

          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
          <form onSubmit={handleSignup} type="POST">
            <input
              type="text"
              aria-label="Enter your full name"
              placeholder="Please Enter Your Full Name"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              value={name || ''}
              onChange={({ target }) => setName(target.value)}
            />
            <input
              type="text"
              aria-label="Enter your username"
              placeholder="Please Enter A Username"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              value={username || ''}
              onChange={({ target }) => setUsername(target.value)}
            />
            <input
              type="text"
              aria-label="Enter your email address"
              placeholder="Please Enter Your Email Address"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              value={email || ''}
              onChange={({ target }) => setEmail(target.value)}
            />
            <input
              type="password"
              aria-label="Enter password"
              placeholder="Password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              value={password || ''}
              onChange={({ target }) => setPassword(target.value)}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${
                isInvalid && 'opacity-50'
              }`}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary rounded">
          <p className="text-sm">
            Already Have An Account?{' '}
            <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
