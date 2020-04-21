function copyShort() {
  var copyText = arguments.callee.caller.arguments['0'].target;
  var target = document.getElementById('copyBuffer');
  var numberColumn = copyText.innerText;
  var tempDescription = shortDescription.replace("{numberColumn}", numberColumn);
  target.value = tempDescription;
  target.select();
  target.setSelectionRange(0, 99999)
  document.execCommand("copy");
  //alert("Copied the text: " + target.value);
}

function copyLong() {
  var copyText = arguments.callee.caller.arguments['0'].target;
  var target = document.getElementById('copyBuffer');
  var numberColumn = copyText.parentElement.parentElement.previousSibling.textContent;
  var par = copyText.parentElement;
  var dev = par.children[0].textContent;
  var iast = par.children[1].textContent.replace(/\//g, "");
  var tempDescription = dev + " " + iast + " " + longDescrtiption.replace("{numberColumn}", numberColumn);
  target.value = tempDescription;
  target.select();
  target.setSelectionRange(0, 99999);
  document.execCommand("copy");
  //alert("Copied the text: " + target.value);
}

const shortDescription = "(Коссович 2016: {numberColumn})";
const longDescrtiption = "// Коссович К. А. Санскрито-русский словарь / 3-е изд., пред. А. А. Вигасина, испр. и доп. М. Ю. Гасунса. — М.: «АБВ», 2016. — (серия „Bibliotheca Sanscritica“, 10). — стлб. {numberColumn}.\"";
