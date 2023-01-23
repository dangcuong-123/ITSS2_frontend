import React from "react";
import Input from "../../components/Input";
import Button from "../Button";

export const Comment = () => {
	return (
		<div>
			<div className="flex justify-between">
				<div className="flex items-center">
					<img className="w-10 h-10 rounded-full" src="" alt="" />
					<div className="ml-3">
						<p className="text-sm font-medium text-gray-900">Comment name</p>
						<div className="flex space-x-1 text-sm text-gray-500">
							<time dateTime="2020-03-16">Comment date</time>
						</div>
						<div>
							<span class="fa fa-star"></span>
							<span class="fa fa-star"></span>
							<span class="fa fa-star"></span>
							<span class="fa fa-star"></span>
							<span class="fa fa-star"></span>
						</div>
					</div>
				</div>
			</div>
			<p className="mt-3 text-sm text-gray-700">Comment</p>
			<hr className="mb-8" />
			<div className="pb-8">
				<Input type="text" placeholder="Commnet" />
				<Button>Send</Button>
			</div>
		</div>
	);
};
