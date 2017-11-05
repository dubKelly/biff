(function navigation() {
	var sections = document.getElementsByTagName('section');
	var sectionIndex;
	var menuBtn = document.getElementsByClassName('menuBtn');
	var navItem = document.getElementsByClassName('navItem');

	// set sectionIndex
	for (var i = 0; i < sections.length; i++) {		// start with landing section and count up
		if (sections[i].classList == undefined) {
			continue;
		}
		if (sections[i].classList.contains('selected')) {
			sectionIndex = i;
		}
	}

	// toggle menu open/close
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

	// click navigation
	for (var i = navItem.length - 1; i >= 0; i--) {
		var targetIndex;

		navItem[i].onclick = function(e) {
			targetIndex = parseInt(e.target.getAttribute('data-targetIndex'), 10);

			sections[targetIndex].classList.add('selected');
		}
	}

	var scrolled = false;
	var reset;

	window.onwheel = function(e) {
		if (!scrolled) {
			scrolled = true;
			
			// TODO: fix scroll bug

			if (e.deltaY > 0 && sectionIndex < sections.length - 1) {
				sections[sectionIndex + 1].classList.add('selected');
				sections[sectionIndex].classList.remove('selected');
				sectionIndex++;
			}
			else if (sectionIndex > 0) {
				sections[sectionIndex - 1].classList.add('selected');
				sections[sectionIndex].classList.remove('selected');
				sectionIndex--;
			}

			reset = setTimeout(function() {
				clearTimeout(reset);
				scrolled = false;
			}, 600);
		}
		else {
			return;
		}
	}
})();
