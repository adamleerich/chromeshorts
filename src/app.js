chrome.tabs.query({'active': true}, function(tab) {
	alert('You are trying to find the name of the current tab.')
});

document.querySelector('.import').addEventListener('click', () => {
  confirm('You clicked the button.')
});

document.querySelector('.recipe-name').innerText = response.recipeName;
