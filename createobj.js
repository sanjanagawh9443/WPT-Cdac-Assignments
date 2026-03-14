Object.prototype.print = function (s) 
{
	for (const key in s) 
    {
		if (!Object.hasOwn(s, key)) continue;
		const element = s[key];
		console.log(key + "   " + element);
	}
}
Object.prototype.display = function () 
{
	console.log(" display protorype ");
}
let e = []
//object   name value Object prototype   array   for 
let b =
 {
	id: 100,
	name: "abc",
	email: "abc@gmail.com",
	
}
b.print(b);
