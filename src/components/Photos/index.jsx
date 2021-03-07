import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Photo from './Photo';
import { loadPhotos } from '../../redux/action';
import { useEffect } from 'react';
import { BoxLoading } from 'react-loadingg';

function Photos() {
  const photos = useSelector((state) => state.photos.items);
  const loadingPhotos = useSelector((state) => state.photos.loadingPhotos);
  const dispatch = useDispatch();

  const albumId = parseInt(useParams().albumId);

  const filteredPhotos = photos.filter((photo) => photo.albumId === albumId);

  useEffect(() => {
    if (albumId) {
      dispatch(loadPhotos(albumId));
    }
  }, [dispatch, albumId]);

  return (
    <div className="col-md-4">
      {loadingPhotos ? (
        <BoxLoading />
      ) : (
        <div className="photo_one">
          {filteredPhotos.map((photo) => {
            return <Photo key={photo.id} photo={photo} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Photos;
