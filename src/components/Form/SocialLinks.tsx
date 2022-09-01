import React from "react";
import Text from "../../localization";
import Link from "next/link";

function SocialLinks() {
	return (
		<div className='social-action d-flex justify-content-between'>
			<button className='btn btn-social'>
				<img src="/images/auth/google.svg" alt="Google" />
				<span>Google</span>
			</button>
			<button className='btn btn-social'>
				<img src="/images/auth/facebook.svg" alt="Facebook" />
				<span>Facebook</span>
			</button>
			<button className='btn btn-social'>
				<img src="/images/auth/linkedin.svg" alt="Linkedin" />
				<span>Linkedin</span>
			</button>
		</div>
	);
}

export default SocialLinks;


			{/* <h4>
				<Text name={text} />
			</h4>
			<div className="sign-in-with-social-platform">
				<ul className="p-d-flex align-items-center justify-content-center ps-0">
					<li>
						<Link href="/#">
							<a >
								<img
									src={"/image/facebook.svg"}
									className="img-fluid"
									alt=""
								/>
							</a>
						</Link>
					</li>
					<li>
						<Link href="/#">
							<a>
								<img
									src={"/image/google-svgrepo-com.svg"}
									className="img-fluid"
									alt=""
								/>
							</a>
						</Link>
					</li>
					<li>
						<Link href="/#">
							<a>
								<img
									src={"/image/linkedin-icon-2.svg"}
									className="img-fluid"
									alt=""
								/>
							</a>
						</Link>
					</li>
				</ul>
			</div> */}