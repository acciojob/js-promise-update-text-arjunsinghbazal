//your JS code here. If required.
function rel(){
return new Promise((reslove,reject)=>{
	setTimeout(
		()=>{
			console.log("Hello, world!");
		},1000);
});
}
rel();