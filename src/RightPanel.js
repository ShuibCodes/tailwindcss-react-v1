import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import './styles.css';
const Titles = [
	{
		text: 'Property',
		answer: "I don't know, but the flag is a big plus. Lorem ipsum",
	},
	{
		text: 'Address',
		answer: "I don't know, but the flag is a big plus. Lorem ipsum",
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

function RightPanel() {
	return ( 
		<div className="px-3">
		<div
			style={{ backgroundColor: '#1F2937', maxHeight: '90%'}}
			className="z-10 fit-content md:mx-24 xl:px-24 mt-4 md:mt-24 row-span-2 rounded-lg  shadow "
		>
			<div className="py-2">
				<div className="flow-root px-3 mt-6 ">
					<div className="mx-6 md:-mx-12">
						<img
							className="object-cover rounded-lg"
							src="http://placehold.jp/372x270.png"
							alt="right-panel-image"
						/>
						<h1 className="text-3xl text-white font-semibold  py-6">Lorem Ipsum title random </h1>
						<p className="text-white py-2">
							Lorem ipsum dolor sit amet, consectetur elit. Risus est nibh risus, consectetur nunc risus,
							proin pulvinar dolor.
						</p>
						<h3 style={{ fontSize: '18px' }} className=" text-1xl font-semibold text-white py-4">
							Auction Ends in{' '}
						</h3>
						<p className="text-white py-2">
							Lorem ipsum dolor sit amet, consectetur elit. Risus est nibh risus, consectetur nunc risus,
							proin pulvinar dolor.
						</p>
						<h3 style={{ fontSize: '18px' }} className=" text-1xl font-semibold text-white py-4">
							Auction Ends in{' '}
						</h3>
						
						<div className="space-x-3 md:space-x-6 ">
							<button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-6 md:px-12 border border-blue-500 hover:border-transparent rounded-lg">
								Expand
							</button>
							<button
								style={{ backgroundColor: '#6F8DD1' }}
								className="mx-1 md:mx-0 hover:bg-blue-700 text-white font-Lexend mt-4 md:mt-0  py-2  px-6 md:px-12 border rounded-lg"
							>
								Place bid
							</button>
						</div>
					</div>

					<div className="md:-mt-12">
						<div className="sm:py-16 sm:px-6 lg:px-0">
							<div className="md:-mx-6">
								<dl className="mt-6 space-y-3 ">
									{Titles.map((item) => (
										<Disclosure as="div" key={item.text} className="pt-2 ">
											{({ open }) => (
												<>
													<dt className="text-sm">
														<Disclosure.Button
															style={{ width: '300px' }}
															className="text-left flex justify-between items-start text-white"
														>
															<span className="font-medium text-white">{item.text}</span>
															<span className="ml-12 h-7 flex items-center">
																<ChevronDownIcon
																	className={classNames(
																		open ? '-rotate-180' : 'rotate-0',
																		'h-6 w-6 transform'
																	)}
																/>
															</span>
														</Disclosure.Button>
													</dt>
													<Disclosure.Panel as="dd" className=" pr-12">
														<p className="text-base text-white">{item.answer}</p>
													</Disclosure.Panel>
												</>
											)}
										</Disclosure>
									))}
								</dl>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
	);
}

export default RightPanel;
