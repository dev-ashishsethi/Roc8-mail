import { useDispatch, useSelector } from 'react-redux'
import { markAsFavourite, removeFromFavourite } from '../../actions'
import { InitialStateType } from '../../reducer/mailReducer'
import { Mail } from '../../reducer/mailBodyReducer'
import { AppState } from '../../store/reducer'
import { AppDispatch, RootState } from '../../store/store'
import './MailBody.css'

export const filterMail = (mailListing: InitialStateType, singleMail: Mail) => {
	return mailListing.filteredMails.filter(
		(mail) => mail.id === singleMail.id,
	)[0]
}

export const MailBody = () => {
	const mailDetail = useSelector<AppState, Mail>((state) => state.mailDetail)
	const readMail = useSelector<RootState, InitialStateType>(
		(state) => state.readMail,
	)

	const dispatch = useDispatch<AppDispatch>()
	return (
		<>
			{mailDetail?.body && filterMail(readMail, mailDetail)?.from && (
				<section className='mail'>
					<section className='mail-heading'>
						<section className='heading-avatar'>
							<section
								className='avatar'
								data-name={filterMail(
									readMail,
									mailDetail,
								)?.from?.name[0].toUpperCase()}
							/>
							<section className='title-date'>
								<h1 className='mail-title'>
									{filterMail(readMail, mailDetail)?.subject}
								</h1>
								<label className='mail-date'>
									{new Date(
										filterMail(readMail, mailDetail)?.date,
									)?.toLocaleString()}
								</label>
							</section>
						</section>
						<button
							className='favourite-btn'
							onClick={() =>
								filterMail(readMail, mailDetail)?.favourite
									? dispatch(removeFromFavourite(mailDetail.id))
									: dispatch(markAsFavourite(mailDetail.id))
							}>
							{filterMail(readMail, mailDetail)?.favourite
								? 'Remove from Favourites'
								: 'Mark as Favourite'}
						</button>
					</section>
					<div
						className='mail-body'
						dangerouslySetInnerHTML={{ __html: mailDetail?.body }}></div>
				</section>
			)}
		</>
	)
}
