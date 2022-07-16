function checkUser(user) {
	age = user.age >= 18 && user.age <= 35;
	normal = user.paid && !user.blocked && !user.badUsername;
	(age && (user.isAdmin || normal)) ? console.log('Доступ разрешен') : console.log('Доступ запрещен')
}

let user = {
	age: 18,
	paid: true,
	blocked: false,
	badUsername: false,
	isAdmin: false
};

checkUser(user);
