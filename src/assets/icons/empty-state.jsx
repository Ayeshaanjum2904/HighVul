import * as React from "react";

function EmptyStateIcon(props) {
	return (
		<svg width="1em" height="1em" viewBox="0 0 212 133" {...props}>
			<g fill="none" fillRule="evenodd">
				<path
					fill="#F7F7F7"
					d="M123.433 1L105 23.5 178.342 46 198 23.5zM14 23.5L90.08 1 105 23.09 31.62 46z"
				/>
				<path
					stroke="#00AFAD"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M90.08 1L14 23.09 31.62 46 105 23.09zM123.767 1L105 23.09 178.43 46 198 23.5z"
				/>
				<g stroke="#00AFAD">
					<path
						fill="#EDEDED"
						d="M31.067 114.287V45.64l73.767 18.054v68.184z"
					/>
					<path
						fill="#E1E1E1"
						d="M104.834 131.878l72.994-18.067V45.64l-72.994 18.054zM104.834 23v40.694L31.067 45.64z"
					/>
					<path fill="#ECECEC" d="M104.834 23l72.994 22.64-72.994 18.054z" />
					<path
						fill="#F6F6F6"
						d="M31.067 45.64L1 78.553l70.574 19.964 33.26-34.823zM104.834 63.694l72.994-18.054 32.878 33.628-72.702 19.25z"
					/>
				</g>
			</g>
		</svg>
	);
}

export default EmptyStateIcon;

