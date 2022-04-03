
function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Tabs() {
	return (
		<div style={{ backgroundColor: '#1F2937', maxWidth: '210px' }} className=" py-2 px-1 rounded-xl">
			<div className="sm:hidden">
				<label htmlFor="tabs" className="sr-only">
					Select a tab
				</label>
				{/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
				<select
					id="tabs"
					name="tabs"
					className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-lg"
				>
					<option>My Account</option>
					<option>Company</option>
					<option selected>Team Members</option>
					<option>Billing</option>
				</select>
			</div>
			
            
            <div className="hidden sm:block ">
				<nav className="flex space-x-2" aria-label="Tabs">
					<a
						href="#"
						className="text-gray-300  border-2 outline-2 border-gray hover:text-gray-400 px-4 py-1 font-medium text-sm rounded-lg"
					>
						{' '}
						7d{' '}
					</a>
					<a
						href="#"
						className="text-gray-300  border-white hover:text-gray-400 px-3 py-1 font-medium text-sm rounded-md"
					>
						{' '}
						14d{' '}
					</a>
					<a
						href="#"
						className="text-gray-300   border-white hover:text-gray-400 px-3 py-1 font-medium text-sm rounded-md"
					>
						{' '}
						30d{' '}
					</a>
				</nav>
			</div>
		</div>
	);
}
