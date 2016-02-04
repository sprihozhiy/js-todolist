var listArr = [];

function addItem() {

  document.getElementById('infoMsg').innerHTML = '';
  var node = document.createElement('li');
  var text = document.getElementById('itemInput').value;
  if(text === null || text === '') {
    document.getElementById('infoMsg').innerHTML = "<p>Couldn't add empty data!</p>";

  } else {
    var textNode = document.createTextNode(text);

  listArr.push(text);
  console.log(listArr);

  node.appendChild(textNode);
  document.getElementById('listBody').appendChild(node);
  document.getElementById('itemInput').value = '';
  }

}

function removeItem() {
  if(listArr.length > 1) {
    var i = listArr.length;
    var list = document.getElementById('listBody');
    list.removeChild(list.childNodes[i]);
    listArr.pop();
    console.log(listArr);
  } else {
    document.getElementById('infoMsg').innerHTML = "<p>Couldn't be less than 1 task!</p>";
  }
}
