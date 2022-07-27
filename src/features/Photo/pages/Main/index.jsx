import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhotoList from 'features/Photo/components/PhotoList';
import { Container } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { removePhoto } from 'features/Photo/photoSlice';

function MainPage(props) {
  const photos = useSelector((state) => state.photos);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePhotoRemoveClick = (photo) => {
    const action = removePhoto(photo.id);
    dispatch(action);
  };
  const handlePhotoEditClick = (photo) => {
    console.log(photo);
    navigate(`/photos/${photo.id}`);
  };

  return (
    <div className="photo-main">
      <Container className="text-center">
        <div className="py-5">
          <Link to="/photos/add">Add new photo</Link>
        </div>
        <PhotoList
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
}

export default MainPage;
