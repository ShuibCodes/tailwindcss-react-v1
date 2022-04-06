import React from 'react';

function Banner() {
	return (
		<div className=" max-w-8xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
			<div
				style={{ backgroundColor: '#1F2937' }}
				className="rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
			>
				<div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
					<div className="lg:self-center md:w-full">
						<h1 className="text-2xl tracking-tight font-bold text-white md:text-6xl ">
							Ready to dive in? Start your free trial today
						</h1>
						<p className="mt-4 text-lg leading-6 text-indigo-200">
							Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
							sagittis vel nulla nec.
						</p>
						<a
							href="#"
							className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
						>
							Sign up for free
						</a>
					</div>
				</div>
				<div className="-mt-6 md:ml-32  aspect-w-1/4 aspect-h-1 md:aspect-w-2 md:aspect-h-1 ">
					<img style={{width:"80%"}}
						className="p-12 md:ml-16 rounded object-cover" 
						src="https://via.placeholder.com/300x400"
						alt="App screenshot"
					/>
				</div>
			</div>
		</div>
	);
}

export default Banner;
