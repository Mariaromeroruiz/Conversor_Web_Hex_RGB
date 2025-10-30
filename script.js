
  const boton = document.getElementById('convertirBtn');
  const inputHex = document.getElementById('inputHex');
  boton.addEventListener('click', convertirColor);

function convertirColor() {
  console.log("Función de conversión activada!");
  let hexCode = inputHex.value;
  console.log("Código leído: " + hexCode);
  hexCode = hexCode.replace('#', '');
  console.log("Código limpio: " + hexCode);

}                   
