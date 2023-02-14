import { useDispatch } from 'react-redux'
import { favouriteFilter, readMailFilter, unreadMail } from '../../actions'
import { AppDispatch } from '../../store/store'
import './FilterBar.css'

export const FilterBar = () => {
	const dispatch: AppDispatch = useDispatch()
	return (
		<section className='filter-section'>
			<label className='filter'>FilterBar:</label>
			<input
				type='radio'
				id='unread'
				name='filter'
				onChange={() => dispatch(unreadMail())}
			/>
			<label className='filter pill-badge' htmlFor='unread'>
				Unread
			</label>
			<input
				type='radio'
				id='read'
				name='filter'
				onChange={() => dispatch(readMailFilter())}
			/>
			<label className='filter pill-badge' htmlFor='read'>
				Read
			</label>
			<input
				type='radio'
				id='favourite'
				name='filter'
				onChange={() => dispatch(favouriteFilter())}
			/>
			<label className='filter pill-badge' htmlFor='favourite'>
				Favourite
			</label>
		</section>
	)
}
