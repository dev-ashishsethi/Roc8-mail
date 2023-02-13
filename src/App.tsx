import { useLayoutEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { fetchInit } from './actions'
import { initialEmail, InitialStateType } from './reducer'
import { AppDispatch, RootState } from './store/store'
import { Card } from './components/Card/Card'
import { Filter } from './components/Filter/Filter'
import { Mail } from './components/Mail/Mail'
import { AppState } from './store/reducer'
import { MailBody } from './reducer/mailBodyReducer'
import { Pagination } from './components/Pagination/Pagination'

function App() {
	const dispatch: AppDispatch = useDispatch()
	const readMail = useSelector<RootState, InitialStateType>(
		(state) => state.readMail,
	)
	const mailDetail = useSelector<AppState, MailBody>(
		(state) => state.mailDetail,
	)
	useLayoutEffect(() => {
		dispatch(fetchInit(1))
	}, [])

	console.log('api call', readMail)
	return (
		<div className='App'>
			<section className='head'>
				<Filter />
				<Pagination />
			</section>
			<section className={mailDetail.body ? `mail-section` : ''}>
				<section className={mailDetail.body ? 'card-section' : ''}>
					{readMail.filteredMails.map((mail) => {
						return <Card mail={mail} key={mail.id} />
					})}
				</section>
				<Mail />
			</section>
		</div>
	)
}

export default App
