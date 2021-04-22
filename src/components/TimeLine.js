/* eslint-disable no-nested-ternary */
import Skeleton from 'react-loading-skeleton';
import usePhotos from '../hooks/use-photos';
import Post from './post/Index.js';

export default function TimeLine() {
  // get photos for logged in users
  const { photos } = usePhotos();
  // on load render react skeleton

  // if we have photos render them

  // if the user has no photos, tell them to create some photos
  return (
    <div className="col-span-3 md:col-span-2">
      {!photos ? (
        <>
          <Skeleton count={4} width={640} height={500} />
        </>
      ) : photos?.length > 0 ? (
        photos.map((content) => <Post key={content.docId} content={content} />)
      ) : (
        <p className="text-center text-2xl">Follow People To See Photos!</p>
      )}
    </div>
  );
}
