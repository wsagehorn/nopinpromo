
//Credit to panicsteve's cloud-to-butt for the structure

//TODO: figure out how to filter things past the first page, in other words, rerun on page change.


walk(document.body);

function walk(node) 
{
	
	var child, next;
	var blockedNames = ["Promoted by"];  //list of things to block
	var name; 

	switch ( node.nodeType )  
	{
		case 1:  // Element
			if (node.attributes.getNamedItem("class") && node.attributes.getNamedItem("class").value == "creditName") {
				for (var i = 0; i < blockedNames.length; ++i) {
					if (node.firstChild.data == blockedNames[i]) {
						node.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.textContent = " "; // lol
					}
				}
			}
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;
	}
}



