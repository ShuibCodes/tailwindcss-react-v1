const posts = [
	{
		title: 'Boost your conversion rate',
		href: '#',
		category: { name: 'Article', href: '#' },
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
		date: 'Mar 16, 2020',
		datetime: '2020-03-16',
		imageUrl: 'https://uploads-ssl.webflow.com/616a91ca55855d3775d98a50/62499d5f5d424764d4ebae16_237x202%201.png',
		readingTime: '6 min',
		author: {
			name: 'Roel Aufderehar',
			href: '#',
			imageUrl:
				'https://uploads-ssl.webflow.com/616a91ca55855d3775d98a50/62499d5f5d424764d4ebae16_237x202%201.png',
		},
	},
	{
		title: 'Boost your conversion rate',
		href: '#',
		category: { name: 'Article', href: '#' },
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
		date: 'Mar 16, 2020',
		datetime: '2020-03-16',
		imageUrl: 'https://uploads-ssl.webflow.com/616a91ca55855d3775d98a50/62499d5f5d424764d4ebae16_237x202%201.png',
		readingTime: '6 min',
		author: {
			name: 'Roel Aufderehar',
			href: '#',
			imageUrl:
				'https://uploads-ssl.webflow.com/616a91ca55855d3775d98a50/62499d5f5d424764d4ebae16_237x202%201.png',
		},
	},
	{
		title: 'Boost your conversion rate',
		href: '#',
		category: { name: 'Video', href: '#' },
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
		date: 'Mar 10, 2020',
		datetime: '2020-03-10',
		imageUrl: 'https://uploads-ssl.webflow.com/616a91ca55855d3775d98a50/62499d5f5d424764d4ebae16_237x202%201.png',
		readingTime: '4 min',
		author: {
			name: 'Brenna Goyette',
			href: '#',
			imageUrl:
				'https://uploads-ssl.webflow.com/616a91ca55855d3775d98a50/62499d5f5d424764d4ebae16_237x202%201.png',
		},
	},
	{
		title: 'Boost your conversion rate',
		href: '#',
		category: { name: 'Case Study', href: '#' },
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
		date: 'Feb 12, 2020',
		datetime: '2020-02-12',
		imageUrl: 'https://uploads-ssl.webflow.com/616a91ca55855d3775d98a50/62499d5f5d424764d4ebae16_237x202%201.png',
		readingTime: '11 min',
		author: {
			name: 'Daniela Metz',
			href: '#',
			imageUrl:
				'https://uploads-ssl.webflow.com/616a91ca55855d3775d98a50/62499d5f5d424764d4ebae16_237x202%201.png',
		},
	},
];

export default function Example() {
	return (
		<div>
			<div className="max-w-screen-xl mx-auto">
				<div
					className="max-w-screen-xl mx-auto grid gap-12 lg:grid-cols-4 lg:max-w-none
          
          "
				>
					{posts.map((post) => (
						<div
							style={{ backgroundColor: '#1F2937' }}
							key={post.title}
							className="border  flex flex-col rounded-lg shadow-lg overflow-hidden"
						>
							<div className="flex-shrink-0 rounded-lg">
								<img className="h-full w-full p-6 object-cover" src={post.imageUrl} alt="" />
							</div>
							<div
								style={{ backgroundColor: '#1F2937' }}
								className=" -my-4 flex-1 bg-white p-6 flex flex-col justify-between"
							>
								<div class="divide-y divide-gray-400">
									<div className="flex-1 -my-4 ">
										<span className="text-white">Blog post #235</span>
										<p style={{ color: 'white' }} className="text-lg font-semibold text-gray-900">
											{post.title}
										</p>
									</div>

									<div className="mt-8 flex items-center">
										<div className="ml-3 mt-6">
											<div className="flex space-x-32 text-sm text-gray-500">
												<p style={{ color: 'white' }}>55 SOL</p>

												<span style={{ color: 'white' }}>{post.readingTime} read</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
