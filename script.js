//your JS code here. If required.
function rel(){
return new Promise((reslove,reject)=>{
	setTimeout(
		()=>{
			resolve('Hello, world!');
		},1000);
});
}
rel().then((message)=>{
	const out = document.getElementById("ouput");
	out.textContent=message;
});