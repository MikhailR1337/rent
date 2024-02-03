import Image from "next/image"

type Props = {
    name: string
    price: string
    date: {isAvailable: boolean, date: string}
    engine: string
    img: string
}

export const Card = ({ motor }: { motor: Props }) => {
    const { name, price, date, engine, img } = motor
    return <div className="flex bg-slate-500 rounded-lg px-5 py-6">
        <div className="flex flex-col md:flex-row w-full space-y-3">
            <div className="flex flex-shrink-0 justify-center">
                <Image width={300} height={200} src={img} alt="motorbike" />
            </div>
            <div className="flex flex-col w-full justify-center items-center px-5">
                <div className="flex flex-col space-y-10">
                    <div className="flex-col space-y-4">
                        <div className="flex font-medium text-3xl">
                            {`Price is Rp ${price} million`}
                        </div>
                        <div className="flex text-xl">
                            {`The model name is ${name}`}
                        </div>
                        <div className="flex text-xl">
                            {`The engine is ${engine} cc`}
                        </div>
                    </div>
                    <div className="flex mt-10 justify-center text-2xl">
                        {date.isAvailable ? (
                            <div className="px-3 py-2 rounded-md bg-green-700 text-white cursor-pointer">Rent now</div>
                        ) : (
                            <div className="px-3 py-2 rounded-md bg-gray-600 cursor-pointer">Rent at {date.date}</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
}