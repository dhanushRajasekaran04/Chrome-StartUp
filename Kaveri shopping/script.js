
function search() {
  var input, filter, boxes, text, i, noResultsMsg;
  input = document.getElementById('searchBar');
  filter = input.value.toUpperCase();
  boxes = document.getElementsByClassName('boxes');
  noResultsMsg = document.getElementById('noResultsMsg');

  var found = false;

  for (i = 0; i < boxes.length; i++) {
      text = boxes[i].getElementsByTagName('h1')[0];
      if (text) {
          if (text.innerHTML.toUpperCase().indexOf(filter) > -1) {
              boxes[i].style.display = '';
              found = true;
          } else {
              boxes[i].style.display = 'none';
          }
      }
  }

  // Show or hide the "No results" message
  if (found) {
      noResultsMsg.style.display = 'none';
  } else {
      noResultsMsg.style.display = 'block';
  }
}


