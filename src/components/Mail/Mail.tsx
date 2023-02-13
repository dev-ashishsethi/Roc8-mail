import { useDispatch, useSelector } from 'react-redux'
import { markAsFavourite, removeFromFavourite } from '../../actions'
import { InitialStateType } from '../../reducer'
import { MailBody } from '../../reducer/mailBodyReducer'
import { AppState } from '../../store/reducer'
import { AppDispatch, RootState } from '../../store/store'
import './Mail.css'
export const Mail = () => {
	const mailDetail = useSelector<AppState, MailBody>(
		(state) => state.mailDetail,
	)
	const readMail = useSelector<RootState, InitialStateType>(
		(state) => state.readMail,
	)

	const filterMail = () => {
		return readMail.filteredMails.filter((mail) => mail.id === mailDetail.id)[0]
	}
	const dispatch = useDispatch<AppDispatch>()
	return (
		<>
			{mailDetail?.body && (
				<section className='mail'>
					<section className='mail-heading'>
						<section className='heading-avatar'>
							<section
								className='avatar'
								data-name={filterMail().from?.name[0].toUpperCase()}
							/>
							<section className='title-date'>
								<h1 className='mail-title'>{filterMail().subject}</h1>
								<label className='mail-date'>
									{new Date(filterMail()?.date).toLocaleString()}
								</label>
							</section>
						</section>
						<button
							className='favourite-btn'
							onClick={() =>
								filterMail()?.favourite
									? dispatch(removeFromFavourite(mailDetail.id))
									: dispatch(markAsFavourite(mailDetail.id))
							}>
							{filterMail()?.favourite
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
