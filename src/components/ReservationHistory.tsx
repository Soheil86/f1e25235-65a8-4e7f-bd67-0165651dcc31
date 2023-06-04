import { Reservation } from '../utils/reservations'

type Props = {
	reservationsState: Reservation[]
}
const ReservationHistory = ({ reservationsState }: Props) => {
	return (
		<div className='mt-6 shadow-md my-10 px-4 py-6'>
			<h1 className='text-center text-3xl mb-10'>Reservation History Chart</h1>
			<div className='flex gap-x-1 justify-between'>
				{reservationsState.map((reservation) => (
					<div>
						<p>Spot: #{reservation.spotId}</p>
						{reservation.entries?.map((plateNumber, index) => {
							const isLast = reservation.entries.length == index + 1
							return (
								<p
									className={`px-1 mb-1 py-1 border ${
										isLast && reservation.state == 'available'
											? 'border-green-500'
											: 'border-red-500'
									}`}
								>
									Plate Nr:{plateNumber}
								</p>
							)
						})}
					</div>
				))}
			</div>
		</div>
	)
}

export default ReservationHistory
