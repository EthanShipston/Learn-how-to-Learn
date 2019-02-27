/* Ethan Shipston
2/27/2019
A program which changes all the colour in your document to Red, Green, or Blue
*/
function onOpen() {
  var ui = DocumentApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Colouring')
      .addItem('Red', 'changeRed')
      .addSeparator()
      .addItem('Blue', 'changeBlue')
      .addSeparator()
      .addItem('Green', 'changeGreen')
      .addSeparator()
      .addItem('RGB', 'changeRGB')
      .addToUi();
}

function changeRed() {
  var body = DocumentApp.getActiveDocument().getBody();
  var text = body.editAsText();
  text.setForegroundColor('#FF0000');
}

function changeBlue() {
  var body = DocumentApp.getActiveDocument().getBody();
  var text = body.editAsText();
  text.setForegroundColor('#0000FF');
}

function changeGreen() {
  var body = DocumentApp.getActiveDocument().getBody();
  var text = body.editAsText();
  text.setForegroundColor('#00FF00');
}

function changeRGB() {
  var body = DocumentApp.getActiveDocument().getBody();
  var text = body.editAsText();
  if (text.findText('r') || text.findText('g') || text.findText('b'))
  {
    var i = text.findText('r')
    for (i != [])
    {
      var temp = text.findText('r').getStartOffset();
      DocumentApp.getUi().alert('first r is at ' + temp);
    }
  } 
  else
  {
    DocumentApp.getUi().alert('there are no rs');
  }
}
