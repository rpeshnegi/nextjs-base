import React from "react";
import Link from "next/link";
import { routes } from "../../config/routes";

function Footer() {

	// useEffect(() => {
	// 	apiGetCmsPage('dddd').then((res) => { });
	// }, [])
	return (
		<div className='damarket'>
			{/* Footer-Section-START */}
			<section className="container-fluid footer">
				<div className='container'>
					<div className='row'>
						<div className="col-sm-3">
							<div className='about'>
								<a href="">
									<img src="/images/logo-footer.svg" alt="logo" />
								</a>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
								</p>
							</div>
						</div>
						<div className="col-sm-3">
							<div className='customer-service foot-menu'>
								<h4>Customer Sservice</h4>
								<ul>
									<li>
										<Link href={routes.aboutUSlPage.path}>
											<a>About us</a>
										</Link>
									</li>
									<li><a href="#">Membership</a></li>
									<li><a href="#">Help Center</a></li>
									<li><a href="#">FAQ</a></li>
								</ul>
							</div>
						</div>
						<div className="col-sm-3">
							<div className='others foot-menu'>
								<h4>Others</h4>
								<ul>
									<li>
										<Link href={routes.aboutUSlPage.path}>
											<a >Privacy Policy</a>
										</Link>
									</li>
									<li><a href="#">Shipping Policy</a></li>
									<li>
										<Link href={routes.termsConditionPage.path}>
											<a>Terms &amp; Conditions</a>
										</Link>
									</li>
									<li><a href="#">Verfied Supplier</a></li>
								</ul>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="contact-us foot-menu">
								<h4>Contact Us</h4>
								<address>4125 Richards Avenue, knights Ferry California, 95361</address>
								<p><a href="tel:9898989898">9898989898</a></p>
								<p><a href="mailto:info@website.com">info@website.com</a></p>
							</div>
						</div>
					</div>
					<div className='row copyrights-section'>
						<div className='col-sm-6'>
							<p>&copy; 2022 Damarket. All rights reserved.</p>
						</div>
						<div className='col-sm-6'>
							<div className='social'>
								<ul className='list-inline'>
									<li className="list-inline-item"><a href=""><img src="/images/facebook.svg" alt="facebook" /></a></li>
									<li className="list-inline-item"><a href=""><img src="/images/twitter.svg" alt="twitter" /></a></li>
									<li className="list-inline-item"><a href=""><img src="/images/linkedin.svg" alt="linkedin" /></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Footer-Section-END */}
		</div>
	);
}

export default Footer;
