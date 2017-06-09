" use strict"

const Sede = () => {
  const sedeDiv = $("<div class='sede-container'></div>");
  const select = $('<select value="sede" id="Sede"></select>');
  const peruOption = $('<option value="Perú">Perú</option>');
  const mexicoOption = $('<option value="México">México</option>');

  sedeDiv.append(select);
  select.append(peruOption);
  select.append(mexicoOption);

  return sedeDiv;
}
