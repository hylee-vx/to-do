function newItem() {

  //adds new item to the list of items
  const li = $('<li></li>');
  const inputValue = $('input').val();
  li.append(inputValue);

}
