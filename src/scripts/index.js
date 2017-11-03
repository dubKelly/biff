var sections = document.getElementsByTagName('section');
var sectionIndex = 0;
var menuBtn = document.getElementsByClassName('menuBtn');

for (var i = 0; i < menuBtn.length; i++) {
	menuBtn[i].onclick = function() {
		var children = sections[sectionIndex].childNodes;
		
		for (var i = children.length - 1; i >= 0; i--) {
			if (children[i].classList == undefined) {
				continue;
			}
			if (children[i].classList.contains('toggle')) {
				children[i].classList.toggle('open');
			}
		}
	}
}
