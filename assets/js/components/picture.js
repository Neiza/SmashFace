"use strict"

const ClassmatePicture = () => {
  const classmatePicture = $('<div class="classmatePicture-container"></div>');
  const img = $('<img class="picture"></img>');

  classmatePicture.append(img);
    return classmatePicture;
}
