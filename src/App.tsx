import { useState } from 'react'
import { reservations } from './utils/reservations'
import Garage from './components/Garage'
import ReservationHistory from './components/ReservationHistory'

const App = () => {
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

	const exitSlot = (spotId: number) => {
		const slotIndex = reservationState.findIndex(
			(reservation) => reservation.spotId == spotId
		)
		const newState = reservationState.map((reservation, index) => {
			if (index == slotIndex) reservation.state = 'available'
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
					Enter Garage
				</button>
			</div>
			<div className='flex-1'>
				<Garage reservations={reservations} exitSlot={exitSlot} />

				<ReservationHistory reservationsState={reservationState} />
			</div>
		</div>
	)
}

export default App
