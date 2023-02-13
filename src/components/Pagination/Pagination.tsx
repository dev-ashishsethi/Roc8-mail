import { useDispatch } from 'react-redux'
import { fetchInit } from '../../actions'
import { AppDispatch } from '../../store/store'
import './Pagination.css'
export const Pagination = () => {
	const dispatch = useDispatch<AppDispatch>()
	const handlePages = (pageNumber: number) => {
		dispatch(fetchInit(pageNumber))
	}
	return (
		<section>
			Pages:
			<button className='pages-btn' onClick={() => handlePages(1)}>
				1
			</button>
			<button className='pages-btn' onClick={() => handlePages(2)}>
				2
			</button>
		</section>
	)
}
