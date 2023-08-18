let myImage = document.querySelector('img');

myImage.onclick = function() {
	let imgSrc = myImage.getAttribute('src');
	if(imgSrc == 'git.png'){
		myImage.setAttribute('src','js.png');
	}else{
		myImage.setAttribute('src','git.png');
	}
}
