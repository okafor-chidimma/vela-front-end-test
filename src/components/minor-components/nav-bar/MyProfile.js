import React from 'react';
import profilePicture from '../../../../assets/navbar/profile-picture.png';
export default () => (
  <div className="center-content">
    <div className="mr2">
      <p className="mb0 tiny-font flex flex-end center-content__p">Hello</p>
      <p className="mt0 center-content__p">Oluwaleke Ojo</p>
    </div>
    <div>
      <img src={profilePicture} alt="profile-picture" />
    </div>
  </div>
);
