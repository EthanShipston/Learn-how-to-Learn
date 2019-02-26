function onOpen() {
  var ui = DocumentApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Colouring')
      .addItem('Red', 'changeRed')
      .addSeparator()
      .addItem('Blue', 'changeBlue')
      .addSeparator()
      .addItem('Yellow', 'changeYellow')
      .addToUi();
}

function changeRed() {
  DocumentApp.getUi() // Or DocumentApp or FormApp.
  var selection = DocumentApp.getActiveDocument().getSelection();  

}

function changeBlue() {
  .alert('Under construction, come back later.')

}

function changeYellow() {
  .alert('Under construction, come back later.')
}
