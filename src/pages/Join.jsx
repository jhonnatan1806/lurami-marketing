import React, { useState } from 'react';
import { LuramiClothing } from '@/components/Icons';
import { Form } from '@/components/Form';
import { Social } from '@/components/Social';
import { Modal } from '@/components/Modal';
import { Policy } from '@/components/Policy';

const URL_SHOP = 'https://luramiclothing.com/';

export const Join = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = (value) => {
		setIsOpen(value);
	};

	return (
		<React.Fragment>
			<main className="flex justify-center items-center w-screen h-screen bg-gray-100">
				<div className="w-full max-w-xl mx-2 rounded-md shadow-sm md:mx-auto md:rounded-lg md:shadow-md bg-orange-500">
					<div className="flex flex-col gap-4 rounded-tl-[48px] rounded-md p-4 md:rounded-tl-[96px] md:rounded-lg md:p-8 bg-white">
						<header className="grid grid-cols-3 items-center">
							<a
								href={URL_SHOP}
								target="_blank"
								rel="noopener noreferrer nofollow"
								className="col-span-1 text-orange-500">
								<LuramiClothing className="w-24 h-12 md:w-32 md:h-16" />
							</a>
							<div className="col-span-1 text-orange-500">
								<h1 className="uppercase text-base font-bold md:text-xl">Contact US</h1>
							</div>
							<Social className="flex flex-row justify-end gap-1 w-full md:gap-2" />
						</header>
						<div className="w-full h-0.5 md:h-1 bg-orange-500"></div>
						<p className="text-center text-sm font-light md:py-2 md:text-lg">
							Are you ready for the new Lurami Clothing brand?
						</p>
						<Form onClick={handleToggle} />
					</div>
				</div>
				<Modal value={isOpen} onClick={handleToggle}>
					<Policy />
				</Modal>
			</main>
		</React.Fragment>
	);
};
