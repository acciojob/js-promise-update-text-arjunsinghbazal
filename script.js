//your JS code here. If required.
function rel(){
return new Promise((resolve,reject)=>{
	setTimeout(
		()=>{
			resolve('Hello, world!');
		},1000);
});
}
rel().then((message)=>{
	const out = document.querySelector("#output");
	out.innerText=message;
});