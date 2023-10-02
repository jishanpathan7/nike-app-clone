import { star } from "../assets/icons"

const ReviewCard = ({imgURL, customerName,rating, feedback}) => {
  return (
    <div className="bg-white flex flex-1 flex-col sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
        <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src={imgURL} alt={customerName} width={64} height={64} />
            </div>
            <div>
            <h4 className="font-palanquin text-2xl font-bold">{customerName}</h4>
            <div className="flex items-center gap-1">
                <span className="text-coral-red text-l">{rating}</span>
                <img src={star} alt="star" width={13} height={13} />
            </div>
            </div>
        </div>
        <p className="mt-4 font-montserrat text-lg leading-normal text-slate-gray">{feedback}</p>
    </div>
  )
}

export default ReviewCard