let user = {
	age:18,
	paid:true,
	blocked:false,
	badUsername:false,
	isAdmin:false
};

user.isAdmin === false && user.age >= 18 && user.age <= 35 &&
user.paid === true && user.badUsername === false &&
user.blocked===false? console.log('Доступ разрешен'):user.isAdmin===true &&
user.age>=18 && user.age<=35? console.log('Доступ разрешен'):
console.log('Доступ запрещен');

