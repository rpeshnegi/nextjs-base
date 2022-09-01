import React from "react";
import Text from "../../localization";
import Link from "next/link";

interface ISocialLoginProp {
	text: string
}
function SocialLogin({ text }: ISocialLoginProp) {
	return (
		<React.Fragment>
			<h4>
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
			</div>
		</React.Fragment>
	);
}

export default SocialLogin;
