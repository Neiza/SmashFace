"use strict"

const Header = () => {
  const header = $("<header></header>");
  const h1 = $("<h1>Smash Face</h1>");
  const p = $("<p></p>");
  p.text("Bienvenida al  juego de Smash Face, tu misión es poder identificar a todas tus compañeras de clase ingresando para ello sus nombres. Tienes 5 oportunidades antes de perde un punto y pasar a la siguiente");
  header.append(h1);
  header.append(p);

  return header;
}
