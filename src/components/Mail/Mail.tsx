import { useDispatch, useSelector } from 'react-redux'
import { markAsFavourite } from '../../actions'
import { MailBody } from '../../reducer/mailBodyReducer'
import { AppState } from '../../store/reducer'
import { AppDispatch } from '../../store/store'
import './Mail.css'
export const Mail = () => {
	const mail = useSelector<AppState, MailBody>((state) => state.mailDetail)
	const dispatch = useDispatch<AppDispatch>()
	return (
		<>
			{mail?.body && (
				<section className='mail'>
					<section className='mail-heading'>
						<section className='heading-avatar'>
							<section className='avatar' />
							<section className='title-date'>
								<h1 className='mail-title'>Lorem ipsum</h1>
								<label className='mail-date'>date</label>
							</section>
						</section>
						<button
							className='favourite-btn'
							onClick={() => dispatch(markAsFavourite(mail.id))}>
							Mark as Favourite
						</button>
					</section>
					<div
						className='mail-body'
						dangerouslySetInnerHTML={{ __html: mail?.body }}></div>
				</section>
			)}
		</>
	)
}
