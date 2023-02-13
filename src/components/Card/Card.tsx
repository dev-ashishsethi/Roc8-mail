import { useDispatch, useSelector } from 'react-redux'
import { markAsRead, openMail } from '../../actions'
import { MailBody } from '../../reducer/mailBodyReducer'
import { AppState } from '../../store/reducer'
import { AppDispatch } from '../../store/store'
import './Card.css'

type emailFrom = {
	email: string
	name: string
}
interface CardProps {
	mail: {
		id: string
		date: Date
		subject: string
		short_description: string
		from: emailFrom
		read: boolean
		unread: boolean
		favourite: boolean
	}
}

export const Card = ({ mail }: CardProps) => {
	const dispatch: AppDispatch = useDispatch()
	const mailDetail = useSelector<AppState, MailBody>(
		(state) => state.mailDetail,
	)
	return (
		<section
			className={mailDetail.id === mail.id ? `card card-border` : 'card'}
			onClick={() => {
				dispatch(openMail(mail.id))
				dispatch(markAsRead(mail.id))
			}}>
			<section
				className='avatar'
				data-name={mail.from?.name[0].toUpperCase()}
			/>
			<section
				className={mailDetail.id !== '0' ? 'card-info desc' : 'card-info'}>
				<p>
					<label>From:</label>{' '}
					<strong>
						{mail.from?.name} &lt;{mail.from?.email}&gt;
					</strong>{' '}
				</p>
				<p>
					<label>Subject:</label> <strong>{mail?.subject}</strong>{' '}
				</p>
				<p className={mailDetail.id !== '0' ? 'desc' : ''}>
					{mail?.short_description}
				</p>
				<p>
					<label className='date'>
						{' '}
						{new Date(mail?.date).toLocaleString()}
					</label>
					{mail.favourite && <strong className='favourite'>Favourite</strong>}
				</p>
			</section>
		</section>
	)
}
