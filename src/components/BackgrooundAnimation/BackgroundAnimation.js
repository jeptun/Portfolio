import React from 'react';
import { BgImages } from '../../constants/constants';
import { BgImg } from '../Projects/ProjectsStyles';

const BackgroundAnimation = () => (
  <div>
  {BgImages.map(({image, id}) => (
    <BgImg key={id} src={image}  />
    ))}
  </div>
);

export default BackgroundAnimation;