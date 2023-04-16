var tlEvents = document.querySelectorAll('.tl-event');

tlEvents.forEach((tlEvent, index) => {
	var time = (index / 10) + 's';
	tlEvent.style.animationDelay = time;
});


const toggleTle = (selector, position) => {
	var timelineEvent = document.querySelector(`[data-tle-id="${selector}" ]`);
	if (position === 'right') {
		timelineEvent.style.marginLeft = timelineEvent.style.marginLeft === '12px' ? '100%' : '12px';
	}
	else if (position === 'left') {
		timelineEvent.style.width = timelineEvent.style.width === '88%' ? '0' : '88%';
	}
	timelineEvent.style.padding = getComputedStyle(timelineEvent).getPropertyValue('padding') === '12px' ? '0px' : '12px';
}