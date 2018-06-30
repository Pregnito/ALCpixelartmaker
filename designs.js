// Select size input
let rowNumbers = $('#inputHeight').val();
let columnNumbers = $('#inputWeight').val();
// Select color input
let brushColor = $('#colorPicker').val();

$('#colorPicker').on('change', function() {
  brushColor = $(this).val();
});

// When size is submitted by the user, call makeGrid()
$('#sizePicker').on('click', 'input[type=submit]', function makeGrid(event) {
  event.preventDefault();
  // Select size input
  rowNumbers = $('#inputHeight').val();
  columnNumbers = $('#inputWeight').val();

  // TODO: 
  // 1. clear table content
  $('#pixelCanvas').empty();
  // 1. create columns
  let columnField = '';
  for (let index = 0; index < columnNumbers; index++) {
    columnField += '<td></td>';
  }
  // 3. create all rows and inserts column Field in each
  let rowField = '';
  for (let index = 0; index < rowNumbers; index++) {
    rowField += `<tr>${columnField}</tr>`;
  }
  $('#pixelCanvas').html(rowField);
  return
});

$('#pixelCanvas').on('click', 'td', function (event) {
  $(this).css('background-color', brushColor);
});
