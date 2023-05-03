const testJozska = {
	name: "jest",
	email: "jest@a.a",
	password: "jest",
};
test("On request we should be able to add a user to the database using mock info", async () => {
	const data = {
		name: testJozska.name,
		email: testJozska.email,
		password: testJozska.password,
	};
	const response = await fetch("http://localhost:3000/api/createUser", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name: testJozska.name,
			email: testJozska.email,
			password: testJozska.password,
		}),
	});
	expect(response.status).toBe(200);
});

//update test
test("On request we should be able to update a user in the database using their id", async () => {
	const response = await fetch("http://localhost:3000/api/EditProfile", {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name: testJozska.name,
			email: "Sikerült a teszt :)",
			password: testJozska.password,
		}),
	});
	expect(response.status).toBe(200);
});
test("On request we should be able to delete a user from the database using their name", async () => {
	const response = await fetch("http://localhost:3000/api/deleteUser", {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ name: testJozska.name }),
	});
	expect(response.status).toBe(200);
});
test("On request we should be able to log in and create a session", async () => {
	const response = await fetch("http://localhost:3000/api/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(testJozska),
	});
	expect(response.status).toBe(200);
});
test("On request we should be able to log out and destroy a session", async () => {
	const response = await fetch("http://localhost:3000/api/logout", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
	});
	expect(response.status).toBe(200);
});
test("On request we should be able to create a new event", async () => {
	const response = await fetch("http://localhost:3000/api/createEvent", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name: "testEvent",
			start: "2021-05-05T12:00:00.000Z",
			end: "2021-05-05T13:00:00.000Z",
			public: true,
			organizerId: 1,
		}),
	});
	//throws an error
	expect(response.status).toBe(200);
});
test("On request we should be able to get the session of the request", async () => {
	const response = await fetch("http://localhost:3000/api/getSession", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	//also throws an error
	expect(response.status).toBe(200);
});
