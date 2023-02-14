import { useDispatch, useSelector } from 'react-redux'
import { markAsRead, openMail } from '../../actions'
import { InitialStateType } from '../../reducer/mailReducer'
import { Mail } from '../../reducer/mailBodyReducer'
import { AppState } from '../../store/reducer'
import { AppDispatch, RootState } from '../../store/store'
import { filterMail } from '../MailBody/MailBody'
import './MailListingCard.css'

type EmailFrom = {
	email: string
	name: string
}
interface CardProps {
	mail: {
		id: string
		date: Date
		subject: string
		short_description: string
		from: EmailFrom
		read: boolean
		unread: boolean
		favourite: boolean
	}
}

export const MailListingCard = ({ mail }: CardProps) => {
	const dispatch: AppDispatch = useDispatch()
	const mailDetail = useSelector<AppState, Mail>((state) => state.mailDetail)
	const readMail = useSelector<RootState, InitialStateType>(
		(state) => state.readMail,
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
				data-name={mail.from?.name[0]?.toUpperCase()}
			/>
			<section
				className={
					mailDetail.id !== '0' && filterMail(readMail, mailDetail)
						? 'card-info desc'
						: 'card-info'
				}>
				<p>
					<label>From:</label>{' '}
					<strong>
						{mail.from?.name} &lt;{mail.from?.email}&gt;
					</strong>{' '}
				</p>
				<p>
					<label>Subject:</label> <strong>{mail?.subject}</strong>{' '}
				</p>
				<p
					className={
						mailDetail.id !== '0' && filterMail(readMail, mailDetail)
							? 'desc'
							: ''
					}>
					{mail?.short_description}
				</p>
				<p>
					<label className='date'>
						{' '}
						{new Date(mail?.date)?.toLocaleString()}
					</label>
					{mail.favourite && <strong className='favourite'>Favourite</strong>}
				</p>
			</section>
		</section>
	)
}
