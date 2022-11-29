var texto = 'marvel mola!'
var textoTransform = '';

for (var i = 0; i < texto.length; i++) {

  if (i !== texto.length - 1) {
    textoTransform = textoTransform + texto[i] + '-';
  } else {
    textoTransform = textoTransform + texto[i]
  }
}
console.log(textoTransform)