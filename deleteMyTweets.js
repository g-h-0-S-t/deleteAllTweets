var delTweets = function () {
	window.scrollBy(0, 10000);
	document.querySelectorAll('[aria-label="More"]').forEach(function (v, i, a) {
		v.click();
		document.querySelectorAll('span').forEach(function (v2, i2, a2) {
			if (v2.textContent === 'Delete') {
				v2.click();
				setTimeout(document.querySelector('[data-testid="confirmationSheetConfirm"]').click(), 1000);
			}
			else {
				document.body.click()
			}
		});
	});
	setTimeout(delTweets, 5000);
}

delTweets();