import { UserWithBookType, UserWithLaptopType, WithCompaniesType, addCompanies, addNewBooksToUser, moveUser, moveUserToOtherHouser, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2, updateCompanyTitle3, upgradeUserLaptop } from "./01"

test('change address', () => {
	let user: UserWithLaptopType = {
		name: 'Serj',
		address: {
			city: 'Voronezh',
			house: 12
		},
		hair: 21,
		laptop: {
			title: 'HP'
		}
	}

	const movedUser = moveUser(user, 'Tokio')

	expect(user).not.toBe(movedUser)
	expect(user.address).not.toBe(movedUser.address)
	expect(user.laptop).toBe(movedUser.laptop)
	expect(movedUser.address.city).toBe('Tokio')
})

test('upgrade laptop user', () => {
	let user: UserWithLaptopType = {
		name: 'Serj',
		address: {
			city: 'Voronezh',
			house: 12
		},
		hair: 21,
		laptop: {
			title: 'HP'
		}
	}

	const movedUser = upgradeUserLaptop(user, 'Asus ROG')

	expect(user).not.toBe(movedUser)
	expect(user.address).toBe(movedUser.address)
	expect(user.laptop).not.toBe(movedUser.laptop)
	expect(movedUser.address.city).toBe(user.address.city)
	expect(movedUser.laptop.title).toBe('Asus ROG')
	expect(user.laptop.title).toBe('HP')
})

test('upgrade house user', () => {
	let user: UserWithBookType & UserWithLaptopType = {
		name: 'Serj',
		address: {
			city: 'Voronezh',
			house: 12
		},
		hair: 21,
		laptop: {
			title: 'HP'
		},
		books: ['book-1', 'book-2', 'book-3']
	}

	const movedUser = moveUserToOtherHouser(user, 99)

	expect(user).not.toBe(movedUser)
	expect(user.books).toBe(movedUser.books)
	expect(user.laptop).toBe(movedUser.laptop)
	expect(user.address.house).not.toBe(movedUser.address)
	expect(movedUser.address.house).toBe(99)
})

test('add new book to user', () => {
	let user: UserWithBookType & UserWithLaptopType = {
		name: 'Serj',
		address: {
			city: 'Voronezh',
			house: 12
		},
		hair: 21,
		laptop: {
			title: 'HP'
		},
		books: ['css', 'js', 'react']
	}

	const movedUser = addNewBooksToUser(user, 'ts')

	expect(user).not.toBe(movedUser)
	expect(user.laptop).toBe(movedUser.laptop)
	expect(user.address).toBe(movedUser.address)
	expect(user.books).not.toBe(movedUser.books)
	expect(movedUser.books[3]).toBe('ts')
	expect(user.books.length).toBe(3)


})

test('update js to ts', () => {
	let user: UserWithBookType & UserWithLaptopType = {
		name: 'Serj',
		address: {
			city: 'Voronezh',
			house: 12
		},
		hair: 21,
		laptop: {
			title: 'HP'
		},
		books: ['css', 'js', 'react']
	}

	const movedUser = updateBook(user, 'js', 'ts')

	expect(user).not.toBe(movedUser)
	expect(user.laptop).toBe(movedUser.laptop)
	expect(user.address).toBe(movedUser.address)
	expect(user.books).not.toBe(movedUser.books)
	expect(movedUser.books[1]).toBe('ts')
})

test('remove js book', () => {
	let user: UserWithBookType & UserWithLaptopType = {
		name: 'Serj',
		address: {
			city: 'Voronezh',
			house: 12
		},
		hair: 21,
		laptop: {
			title: 'HP'
		},
		books: ['css', 'js', 'react']
	}

	const movedUser = removeBook(user, 'js')

	expect(user).not.toBe(movedUser)
	expect(user.laptop).toBe(movedUser.laptop)
	expect(user.address).toBe(movedUser.address)
	expect(user.books).not.toBe(movedUser.books)
	expect(movedUser.books[1]).toBe('react')
})

test('user add new companies', () => {
	let user: UserWithLaptopType & WithCompaniesType = {
		name: 'Serj',
		address: {
			city: 'Voronezh',
			house: 12
		},
		hair: 21,
		laptop: {
			title: 'HP'
		},
		companies: [
			{ id: 1, title: 'RT COD' }, { id: 2, title: 'It-incubator' }
		]
	}

	const movedUser = addCompanies(user, { id: 3, title: 'Yandex' })

	expect(user).not.toBe(movedUser)
	expect(user.laptop).toBe(movedUser.laptop)
	expect(user.address).toBe(movedUser.address)
	expect(user.companies.length).toBe(2)
	expect(movedUser.companies[2].title).toBe('Yandex')

})

test('update name company', () => {
	let user: UserWithLaptopType & WithCompaniesType = {
		name: 'Serj',
		address: {
			city: 'Voronezh',
			house: 12
		},
		hair: 21,
		laptop: {
			title: 'HP'
		},
		companies: [
			{ id: 1, title: 'РТ ЦОД' }, { id: 2, title: 'It-incubator' }
		]
	}

	const movedUser = updateCompanyTitle(user, 'РТ ЦОД', 'RT COD')

	expect(user).not.toBe(movedUser)
	expect(user.laptop).toBe(movedUser.laptop)
	expect(user.address).toBe(movedUser.address)
	expect(user.companies).not.toBe(movedUser)
	expect(movedUser.companies[0].title).toBe('RT COD')

})

test('update name company2', () => {
	let user: UserWithLaptopType & WithCompaniesType = {
		name: 'Serj',
		address: {
			city: 'Voronezh',
			house: 12
		},
		hair: 21,
		laptop: {
			title: 'HP'
		},
		companies: [
			{ id: 1, title: 'РТ ЦОД ' }, { id: 2, title: 'It-incubator' }
		]
	}

	const movedUser = updateCompanyTitle2(user, 1, 'RT COD')

	expect(user).not.toBe(movedUser)
	expect(user.laptop).toBe(movedUser.laptop)
	expect(user.address).toBe(movedUser.address)
	expect(user.companies).not.toBe(movedUser)
	expect(movedUser.companies[0].title).toBe('RT COD')

})

test('update title company', () => {

	let companies = {
		'Serj': [{ id: 1, title: 'РТ ЦОД ' }, { id: 2, title: 'It-incubator' }],
		'Aleks': [{ id: 1, title: 'РТ ЦОД ' }]
	}

	const copy = updateCompanyTitle3(companies, 'Serj', 1, 'RT COD',)

	expect(copy['Serj']).not.toBe(companies['Serj'])
	expect(copy['Aleks']).toBe(companies['Aleks'])
	expect(copy['Serj'][0].title).toBe('RT COD')
})