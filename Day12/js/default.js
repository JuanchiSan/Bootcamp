/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function() {
	var area = document.getElementById('codePlace');
	if (!area.value) {
            area.value = window.localStorage.getItem('value');
	}
	document.querySelector('#saveCode').addEventListener('click', function() {
            window.localStorage.setItem('value', area.value);
            window.localStorage.setItem('timestamp', (new Date()).getTime());
	}, false);
})();
