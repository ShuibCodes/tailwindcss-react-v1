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
		<div style={{ backgroundColor: '#111827' }} className="">
			<div className="py-2 ">
			
					<div>
						{/* Banner & Right Panel */}
						
							<div className="md:grid grid-rows-1 grid-flow-col gap-1">
								<div className="py-6 rounded-2xl">
									<Banner />
									<SmallCards/>
								</div>
								<RightPanel />
							</div>

							

							
						
					</div>
			
			</div>
		</div>
	);
}
