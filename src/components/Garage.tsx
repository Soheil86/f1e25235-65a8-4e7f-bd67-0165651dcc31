import { Reservation } from '../utils/reservations'

type Props = {
	reservations: Reservation[]
	exitSlot: (num: number) => void
}

const Garage = ({ reservations, exitSlot }: Props) => {
	return (
		<div className='flex justify-between'>
			{reservations.map((reservation) => (
				<div className='flex flex-col gap-y-4 items-center'>
					<p>{reservation.spotId}</p>
					<div
						className={`h-4 w-4 rounded-full ${
							reservation.state == 'available' ? 'bg-green-500' : 'bg-red-500'
						}`}
					></div>
					<button
						onClick={() => exitSlot(reservation.spotId)}
						className='bg-gray-200 rounded-sm py-1 px-4'
					>
						Exit
					</button>
				</div>
			))}
		</div>
	)
}

export default Garage
