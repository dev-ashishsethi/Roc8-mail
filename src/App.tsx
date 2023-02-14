import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { initialMailListing } from './actions'
import { InitialStateType } from './reducer/mailReducer'
import { AppDispatch, RootState } from './store/store'
import { MailListingCard } from './components/MailListingCard/MailListingCard'
import { FilterBar } from './components/FilterBar/FilterBar'
import { filterMail, MailBody } from './components/MailBody/MailBody'
import { AppState } from './store/reducer'
import { Mail } from './reducer/mailBodyReducer'
import { Pagination } from './components/Pagination/Pagination'

function App() {
	const dispatch: AppDispatch = useDispatch()
	const readMail = useSelector<RootState, InitialStateType>(
		(state) => state.readMail,
	)
	const mailDetail = useSelector<AppState, Mail>((state) => state.mailDetail)
	useEffect(() => {
		dispatch(initialMailListing(1))
	}, [])

	return (
		<div className='App'>
			<section className='head'>
				<FilterBar />
				<Pagination />
			</section>
			<section
				className={
					mailDetail.body && filterMail(readMail, mailDetail)
						? `mail-section`
						: ''
				}>
				<section className={mailDetail.body ? 'card-section' : ''}>
					{readMail.filteredMails.map((mail) => {
						return <MailListingCard mail={mail} key={mail.id} />
					})}
				</section>
				<MailBody />
			</section>
		</div>
	)
}

export default App
