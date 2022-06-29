let user = {
	age:18,
	paid:true,
	blocked:false,
	badUsername:false,
	isAdmin:false
};

if (user.isAdmin === false && user.age >= 18 && user.age <= 35 &&
	user.blocked === false && user.paid === true &&
	user.badUsername === false){
	console.log('Доступ разрешен');
} else if (user.isAdmin === true && user.age >= 18 && user.age <= 35){
	console.log('Доступ разрешен');
} else {
	console.log('Доступ запрещен');
} 
