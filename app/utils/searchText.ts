export default function searchText(text, search) {
  var indices = [];
  for (
    var pos = text.indexOf(search);
    pos !== -1;
    pos = text.indexOf(search, pos + 1)
  ) {
    indices.push(pos);
  }
  return { indices, length: search.length };
}
