import React from 'react';

function Banner() {
	return (
		
		<div className="">
        <div style={{backgroundColor: '#1f2937', width: '1288px'}} className="rounded-lg ">
          <div className="flex flex-start rounded-lg">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:py-32 lg:px-8 lg:py-20 rounded-lg">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span style={{color: '#7984d6'}} className="block text-indigo-600">
                  The standard chunk of Lorem Ipsum used since
                  the 1500s
                </span>
              </h1>
              <p className="leading-6 py-2 text-white">
                the majority have suffered alteration in some
                form, by injected humour, or randomised words
                which don't look even slightly believable.
              </p>
              <div style={{backgroundcolor: '"#9A61E3"}}'}} className="mt-4 flex">
                <div className="inline-flex rounded-md shadow">
                  <a style={{backgroundColor: '#7984d6'}} href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    Explore Collection
                  </a>
                </div>
              </div>
            </div>
            <div className="align-items py-6 pr-6">
              <img className="align-items" src="https://via.placeholder.com/350x500" alt="images" />
            </div>
          </div>
        </div>

		
     
      </div>
	);
}

export default Banner;
