// 1.) create a promise

const p = new Promise((resolve, reject) => {
	const numberOfCustomers = 2;

	if (numberOfCustomers > 5) {
		resolve('Success');
	} else {
		reject('Not Enough Promotion');
	}
});
	

// 2.) Consume a promise with .then() & .catch()
// p.then(value => {
// console.log(value);
// }).catch(reason => {
// console.log(reason)
// });

// 3.) Consume a promise with async/away & try/catch (also remember TOP LEVEL await)
const checkResults = async () => {
	try {
		const value = await p;
		
		console.log(value);
	} catch (reason) {
		console.log(reason);
	}
};
checkResults();

// 4) Why & Where use promises in web development
// Vast majority of your code is synchronous.
// const a = 1;
// const b = 2;
// const c = 3;
// This is no problem, because these operations are very fast,
// so they only freeze our program for a very short amount of time.

// However, some operations may take a long time. We want to use
// asynchronous code for them so they don't freeze our program for
// so long. Asynchronous code was commonly implemented with
// callback functions, but now increasingly with promises.

// Most common examples of using promises in web development:
// - On frontend: Network requests (e.g. Fetch API or Axios library)
// - On backend: Interacting with file system (e.g. reading a file)

// 5) Fetch API (most common example of promises)

fetch('https://reqres.in/api/users')
	.then(res => res.json())
	.then(data => {
		console.log(data.data[4].email);
		document.getElementById('target').innerHTML = data.data[0].email;
	})
	.catch(error => console.log(error));

// arrow function on one line has implicit return

 
