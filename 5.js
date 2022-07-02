function checkUser(user) {
	age = user.age >= 18 && user.age <= 35;
	normal = user.paid && !user.blocked && !user.badUsername;
	if (user.isAdmin && age || normal && age)
		console.log('Доступ разрешен');
	else
		console.log('Доступ запрещен');
}

let user = {
	age: 18,
	paid: true,
	blocked: false,
	badUsername: false,
	isAdmin: false
};

checkUser(user);
