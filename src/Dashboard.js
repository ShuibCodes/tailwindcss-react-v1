import { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import {
	BellIcon,
	CalendarIcon,
	ChartBarIcon,
	FolderIcon,
	HomeIcon,
	InboxIcon,
	MenuAlt2Icon,
	UsersIcon,
	XIcon,
} from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/solid';
import SmallCards from './SmallCards';
import Cards from './Cards';
import Tabs from './Tabs';
import Banner from './Banner';
import RightPanel from './RightPanel';
const navigation = [
	{ icon: HomeIcon, current: true },
	{ icon: UsersIcon, current: false },
	{ icon: FolderIcon, current: false },
	{ icon: CalendarIcon, current: false },
	{ icon: InboxIcon, current: false },
	{ icon: ChartBarIcon, current: false },
];
const userNavigation = [
	{ name: 'Your Profile', href: '#' },
	{ name: 'Settings', href: '#' },
	{ name: 'Sign out', href: '#' },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Dashboard() {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div style={{ backgroundColor: '#111827' }}>
			<div className="py-2">
				<main className="mr-2 ">
					<div>
						{/* Banner & Right Panel */}
						<div className=" px-4 sm:px-6 md:px-8">
							<div className="md:grid grid-rows-1 grid-flow-col gap-1">
								<div className="py-6 rounded-2xl">
									<Banner />
								</div>
								<RightPanel />
							</div>

							{/* Cards */}

							<div className="-mt-96 ">
								<div className="flex space-x-1 items-center">
									<h4 style={{ fontSize: '22px' }} className="text-white px-4">
										Hot Collection
									</h4>
									<Tabs />
								</div>

								<SmallCards />

								<div className="flex space-x-1 items-center">
									<h4 style={{ fontSize: '22px' }} className="text-white px-4">
										Popular Collection
									</h4>
									<Tabs />
								</div>
								<div className="mt-12 md:mr-24">
									<Cards />
								</div>
								<nav aria-label="Page navigation" className="text-center pt-6">
									<ul class="inline-flex">
										<li>
											<button class="h-10 px-5 text-white transition-colors duration-150 rounded-l-lg focus:shadow-outline hover:bg-indigo-100">
												<svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
													<path
														d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
														clip-rule="evenodd"
														fill-rule="evenodd"
													></path>
												</svg>
											</button>
										</li>
										<li>
											<button class="h-10 px-1 text-white transition-colors duration-150 ">
												1  
											</button>
										</li>
 
								
										<li>
											<button class="h-10  text-white transition-colors duration-150 focus:shadow-outline hover:bg-indigo-100">
												<span>/</span> 2
											</button>
										</li>
										
										<li>
											<button class="h-10 px-5 text-white transition-colors duration-150  rounded-r-lg focus:shadow-outline hover:bg-indigo-100">
												<svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
													<path
														d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
														clip-rule="evenodd"
														fill-rule="evenodd"
													></path>
												</svg>
											</button>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
