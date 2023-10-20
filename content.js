const elements = document.getElementsByTagName('*');

for (let i = 0, len=elements.length; i < len; i++) {
    let element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        let node = element.childNodes[j];

        if (node.nodeType === 3) {
            replacer(element,node,'HELLO')
        }
    }
}

function replacer(parentElement,oldTextNode,newText){
    let text = oldTextNode.nodeValue;
    let replacedText = text.replace(/\w/gi, newText);

    if (replacedText != text) {
        parentElement.replaceChild(document.createTextNode(replacedText), oldTextNode);
        parentElement.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
    }
}