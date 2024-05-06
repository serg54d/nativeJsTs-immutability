export type UserType = {
	name: string;
	hair: number
	address: { city: string, house: number }
}

export type LaptopType = {
	title: string
}

export type UserWithLaptopType = UserType & {
	laptop: LaptopType
}

export type UserWithBookType = UserType & {
	books: string[]
}

export type CompanyType = {
	id: number, title: string
}

export type WithCompaniesType = {
	companies: Array<{ id: number, title: string }>
}




export function makeHairstyle(u: UserType, power: number) {
	const copy = {
		...u,
		hair: u.hair / power
	}

	return copy
}

export function moveUser(u: UserWithLaptopType, address: string) {
	const copy = {
		...u,
		address: { ...u.address, city: address },
	}
	// copy.address.city = address

	return copy
}


export function upgradeUserLaptop(u: UserWithLaptopType, newLaptop: string) {
	const copy = {
		...u,
		laptop: { ...u.laptop, title: newLaptop }
	}
	// copy.address.city = address

	return copy
}

export function moveUserToOtherHouser(u: UserWithLaptopType & UserWithBookType, house: number) {
	const copy = {
		...u,
		address: { ...u.address, house: house }
	}
	// copy.address.city = address

	return copy
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBookType, newBook: string) {
	const copy = {
		...u,
		books: [...u.books, newBook]
	}
	// copy.address.city = address

	return copy
}

export function updateBook(u: UserWithLaptopType & UserWithBookType, oldBook: string, newBook: string) {
	const copy = {
		...u,
		books: u.books.map(el => el === oldBook ? el = newBook : el)
	}
	// copy.address.city = address

	return copy
}

export function removeBook(u: UserWithLaptopType & UserWithBookType, removeBook: string) {
	const copy = {
		...u,
		books: u.books.filter(el => el !== removeBook)
	}
	// copy.address.city = address

	return copy
}

export function addCompanies(u: UserWithLaptopType & WithCompaniesType, newCompanies: { id: number, title: string }) {
	const copy = {
		...u,
		companies: [...u.companies, { ...newCompanies }]
	}
	// copy.address.city = address

	return copy
}

export function updateCompanyTitle(u: UserWithLaptopType & WithCompaniesType, oldTitleCompany: string, newTitleCompany: string) {
	const copy = {
		...u,
		companies: u.companies.map(el => el.title === oldTitleCompany ? {
			...el, title: newTitleCompany
		} : el)
	}
	// copy.address.city = address

	return copy
}

export function updateCompanyTitle2(u: UserWithLaptopType & WithCompaniesType, id: number, newTitleCompany: string) {
	const copy = {
		...u,
		companies: u.companies.map(el => el.id === id ? {
			...el, title: newTitleCompany
		} : el)
	}
	// copy.address.city = address

	return copy
}


export function updateCompanyTitle3(companies: { [key: string]: Array<CompanyType> }, userName: string, companyId: number, newTitle: string) {
	let companyCopy = { ...companies }
	// copy.address.city = address
	companyCopy[userName] = companyCopy[userName].map(el => el.id === companyId ? {
		...el, title: newTitle
	} : el)
	return companyCopy
} 