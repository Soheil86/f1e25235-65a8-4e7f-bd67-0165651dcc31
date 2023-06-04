import { useState } from 'react'
import { reservations } from '../utils/reservations'

const Home = () => {
	const [reservationState, setReservationState] = useState(reservations)
	const [plateNumber, setPlateNumber] = useState('')

	const enterGarage = () => {
		const emptySlot = reservationState.findIndex(
			(reservation) => reservation.state === 'available'
		)
		const newState = reservationState.map((reservation, index) => {
			if (index == emptySlot) {
				reservation.state = 'occupied'
				reservation.entries = [...reservation.entries, plateNumber]
			}
			return reservation
		})
		setReservationState(newState)
	}

	return (
		<div className='px-10 flex gap-x-10 pt-14'>
			<div>
				<input
					placeholder='Enter Plate Number'
					autoFocus
					className='px-3 py-2 border rounded-md'
					value={plateNumber}
					onChange={(e) => setPlateNumber(e.target.value)}
					type='text'
				/>
				<br />
				<button
					onClick={enterGarage}
					className='bg-blue-200 rounded-md py-2 px-4 mt-5'
				>
					Enter Garrage
				</button>
			</div>
			<div className='flex-1'>
				<div className='flex justify-between'>
					{reservations.map((reservation) => (
						<div className='flex flex-col gap-y-4 items-center'>
							<p>{reservation.spotId}</p>
							<div
								className={`h-4 w-4 rounded-full ${
									reservation.state == 'available'
										? 'bg-green-500'
										: 'bg-red-500'
								}`}
							></div>
							<button className='bg-gray-200 rounded-sm py-1 px-4'>Exit</button>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Home
