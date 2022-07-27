import React from 'react';
import './RandomPhoto.scss';
import { Button } from 'reactstrap';

function RandomPhoto(props) {
  const { name, imageURL, onImageURLChange, onRandomButtonBlur, set } = props;
  const getRandomImageUrl = () => {
    let randomID = '';
    let setID = '1';
    switch (set) {
      case 'Monsters':
        setID = '2';
        break;
      case 'Robots Head':
        setID = '3';
        break;
      case 'Kittens':
        setID = '4';
        break;
      case 'Humans':
        setID = '5';
        break;
      default:
        break;
    }
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 4; i++) {
      randomID += characters.charAt(Math.trunc(Math.random() * characters.length));
    }
    return { setID, randomID };
  };
  const handleOnClick = async () => {
    if (onImageURLChange) {
      const randomImageURL = await getRandomImageUrl();
      onImageURLChange(randomImageURL);
    }
  };
  return (
    <div className="random-photo">
      <div className="random-photo__button">
        <Button
          outline
          name={name}
          color="primary"
          onClick={handleOnClick}
          onBlur={onRandomButtonBlur}
        >
          Random photo
        </Button>
      </div>
      <div className="random-photo__photo">
        {imageURL && (
          <img
            src={`https://robohash.org/bgset_bg1/set_set${imageURL.setID}/${imageURL.randomID}?size=300x300`}
            alt="Error please click random button again"
          />
        )}
      </div>
    </div>
  );
}

export default RandomPhoto;
