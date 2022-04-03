const users = [
	{
		name: 'Maryam Mursal',
		title: 'test user',
		image: 'httphttps://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
	},
];

export default function SmallCards() {
	return (
		<div className=" md:flex md:space-x-8 md:py-8 mr-32">
			<div
				style={{ backgroundColor: '#1F2937', height: '184px', minWidth: '300px' }}
				className="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 "
			>
				<img style={{ width: '380px' }} src="http://placehold.jp/270x80.png" className=" h-24" />
				<div className="flex justify-center -mt-8 rounded-lg">
					<img
						src="https://i.imgur.com/8Km9tLL.jpg"
						className="rounded-full border-solid border-white border-2 -mt-3 rounded-lg"
					/>
				</div>
				<div className="text-center px-3 py-4 pb-6 pt-2">
					<h4 className="mt-2 font-sans font-light text-white">Test user</h4>
				</div>
			</div>
			<div
				style={{ backgroundColor: '#1F2937', height: '184px', minWidth: '300px' }}
				className="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 "
			>
				<img style={{ width: '380px' }} src="http://placehold.jp/270x80.png" className=" h-24" />
				<div className="flex justify-center -mt-8 rounded-lg">
					<img
						src="https://i.imgur.com/8Km9tLL.jpg"
						className="rounded-full border-solid border-white border-2 -mt-3 rounded-lg"
					/>
				</div>
				<div className="text-center px-3 py-4 pb-6 pt-2">
					<h4 className="mt-2 font-sans font-light text-white">Test user</h4>
				</div>
			</div>
			<div
				style={{ backgroundColor: '#1F2937', height: '184px', minWidth: '300px' }}
				className="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 "
			>
				<img style={{ width: '380px' }} src="http://placehold.jp/270x80.png" className=" h-24" />
				<div className="flex justify-center -mt-8 rounded-lg">
					<img
						src="https://i.imgur.com/8Km9tLL.jpg"
						className="rounded-full border-solid border-white border-2 -mt-3 rounded-lg"
					/>
				</div>
				<div className="text-center px-3 py-4 pb-6 pt-2">
					<h4 className="mt-2 font-sans font-light text-white">Test user</h4>
				</div>
			</div>
			<div
				style={{ backgroundColor: '#1F2937', height: '184px', minWidth: '300px' }}
				className="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 "
			>
				<img style={{ width: '380px' }} src="http://placehold.jp/270x80.png" className=" h-24" />
				<div className="flex justify-center -mt-8 rounded-lg">
					<img
						src="https://i.imgur.com/8Km9tLL.jpg"
						className="rounded-full border-solid border-white border-2 -mt-3 rounded-lg"
					/>
				</div>
				<div className="text-center px-3 py-4 pb-6 pt-2">
					<h4 className="mt-2 font-sans font-light text-white">Test user</h4>
				</div>
			</div>
		</div>
	);
}
