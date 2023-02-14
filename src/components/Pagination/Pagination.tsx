import { useDispatch } from 'react-redux'
import { initialMailListing } from '../../actions'
import { AppDispatch } from '../../store/store'
import './Pagination.css'
export const Pagination = () => {
	const dispatch = useDispatch<AppDispatch>()
	const handlePages = (pageNumber: number) => {
		dispatch(initialMailListing(pageNumber))
	}
	const numberOfPages = 2
	let pages = []
	for (let page = 1; page <= numberOfPages; page++) {
		pages.push(
			<button className='pages-btn' onClick={() => handlePages(page)}>
				{page}
			</button>,
		)
	}
	return (
		<section>
			Pages:
			{pages.map((page) => page)}
			{/* <button className='pages-btn' onClick={() => handlePages(1)}>
				1
			</button>
			<button className='pages-btn' onClick={() => handlePages(2)}>
				2
			</button> */}
		</section>
	)
}
