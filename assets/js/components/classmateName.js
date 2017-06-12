"use strict"

const ClassmateName = () => {
  const classmateDiv = $('<div class="classmateName-container"></div>');
  const formGroup = $('<div class="inputGroup"></div>');
  const labelName = $('<label for="name">Ingresa su nombre</label>');
  const inputName = $('<input type="text" name="name">');
  const button = $('<input type="button" name="" value="COMPROBAR">');


  classmateDiv.append(formGroup);
  formGroup.append(labelName);
  formGroup.append(inputName);
  classmateDiv.append(button);

  return classmateDiv;
}
