import React, { useState } from "react";
import data from "../../localization/data";
import { useSelector } from "react-redux";

import { routes } from "../../config/routes";
import { useRouter } from 'next/router'
import { getLanguageCode } from "../../helpers/util";
import Link from "next/link";
import { RootState } from "../../store";
import SupportCurrency from "../Global/SupportCurrency";
import MenuItem from "../../_types/MenuItem"
import HeaderCategoryMenu from "./HeaderCategoryMenu";
import Language from "../Global/Language";
import HeaderSearch from "./HeaderSearch";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

function Header() {
	const router = useRouter()
	const language = getLanguageCode();
	const { cart, auth } = useSelector((state: RootState) => state);
	const [showNotification, setShowNotification] = useState(false)
	// const menuToggle = (data: any) => {
	// 	router.push(data.item.link);
	// };

	// const searchProductByQuery = (event: { query: string }) => {
	// 	if (event.query) {
	// 		apiSearchProductForSearchBar({
	// 			rows: 10,
	// 			filters: { name: event.query },
	// 		}).then((res) => {
	// 			setSearchProducts(res.data);
	// 		});
	// 	}
	// };

	// const [product, setProduct] = useState({});
	// const [searchToggle, setSearchToggle] = useState(false);
	// const [totalQty, setTotalQty] = useState(0);

	// const products = [
	// 	{ name: "product", code: "1" },
	// 	{ name: "product 1", code: "2" },
	// 	{ name: "product 2", code: "3" },
	// ];

	// const changeProduct = (data: any) => {
	// 	setProduct(data);
	// };

	const items: MenuItem[] = [
		{
			label: data[language].home,
			link: routes.homePage.path,
		},
		{
			label: data[language].best_seller,
			link: routes.product.topSelling.path,
		},
		{
			label: data[language].new_arrivals,
			link: routes.product.newArrival.path,
		},
		{
			label: data[language].ready_to_ship,
			link: routes.readytoShipPage.path,
		},
		{
			label: data[language].start_to_sell,
			link: routes.startSellPage.path,
			// command: menuToggle,
		},
		{
			label: data[language].pay_safe,
			link: routes.paySafePage.path,
			// command: menuToggle,
		}
	];



	const itemTemplate = (item: any) => {
		return (
			<div className="autocomplate-category-item">
				<img
					alt={""}
					src={item.product_image}
					onError={(e: any) =>
					(e.target.src =
						"https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
					}
				/>
				<div className="cat-name">{item.name}</div>
			</div>
		);
	};
	const selectProduct = (name: any) => {
		router.push(`${routes.productSearchPage.path}/name=${name}`);
	};

	// useEffect(() => {
	// 	let totalQuantity = 0;
	// 	Product.products && Product.products.forEach((elPrd) => {
	// 		if (elPrd.quantities && elPrd.quantities.length > 0) {
	// 			totalQuantity += elPrd.quantities.length === 1 ? elPrd.quantities[0].qty : elPrd.quantities.reduce(
	// 				(prevValue, curValue) => { return (prevValue?.qty ? prevValue.qty : (typeof prevValue === "string" ? parseInt(prevValue.replace("[object Object]", "")) : prevValue)) + curValue.qty });
	// 		}
	// 	});
	// 	setTotalQty(totalQuantity);
	// }, [Product]);

	const isActive = () => {
		return ''//active
	}

	return (
		<div className='damarket'>
			{/* Header-Section-START */}
			<div className='headsection'>
				<section className='container-fluid top-header'>
					<div className='container'>
						<div className='row'>
							<div className='col-sm-9'>
								<div className='toph-left'>
									<ul className='list-inline'>
										<li className="list-inline-item">
											<Link href={routes.helpPage.path}>
												<a >Help</a>
											</Link>
										</li>
										<li className="list-inline-item">
											<Link href={"/"}>
												<a >Contact</a>
											</Link>
										</li>
										<li className="list-inline-item">
											<Link href={"/"}>
												<a >About Us</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className='col-sm-3'>
								<div className='toph-right'>
									<SupportCurrency />
									<Language />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='container-fluid mid-header'>
					<div className='container'>
						<div className='row'>
							<div className='col-sm-9'>
								<div className='midh-left'>
									<div className='logo'>
										<Link href={"/"}>
											<a >
												<img src='/images/logo.svg' alt="logo" />
											</a>
										</Link>
									</div>
									<HeaderSearch />
								</div>
							</div>
							<div className='col-sm-3'>
								<div className='midh-right'>
									<ul className='list-inline'>
										<li className="list-inline-item account">
											<span><img src="/images/account.svg" alt="account" /></span>
											<div className='account-action'>
												<Link href={'/auth/login'}>
													<a className='signin' >Sign in</a>
												</Link>
												<a className="account" >Account</a>
											</div>
										</li>
										<li className="list-inline-item wishlist">
											<Link href={'/cart'}>
												<a>
													<span><img src="/images/wish.svg" alt="wishlist" /></span>
												</a>
											</Link>
										</li>
										<li className="list-inline-item wishlist">
											<Link href={'/cart'}>
												<a>
													<span><img src="/images/cart.svg" alt="wishlist" /></span>
													{cart?.products && cart?.products.length > 0 && <i className="badge">{cart?.products.length}</i>}
												</a>
											</Link>
										</li>
										<li className="list-inline-item cart">
											<div className='cart-action'>
												<span className='totaltxt'>Total</span>
												<span className='total'><i>$</i>2,650.59</span>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='row'>
							<HeaderCategoryMenu />
							<div className='col-sm-9'>
								<div className='main-menu d-flex align-items-center justify-content-between'>
									<ul className='list-inline'>
										{items.map(menu => (
											<li key={menu.label} className={"list-inline-item" + isActive()}>
												{menu.link
													? <Link href={menu.link}><a >{menu.label}</a></Link>
													: <a >{menu.label}</a>
												}
											</li>
										))}
									</ul>
									<div className='notification'>
										<a style={{ cursor: 'pointer' }} onClick={() => setShowNotification(!showNotification)} className='d-flex align-items-center justify-content-center'>
											<img src="/images/notifications.svg" alt="notification" />
										</a>
										{/* Notification-START */}
										{showNotification && <div className='notificationdd'>
											<div className='title d-flex align-items-center justify-content-between'>
												<h2>Notification</h2>
												<a href='#'>See All</a>
											</div>
											<div className='content'>
												{/* Tabs-START */}
												<div className='nav-area'>
													<div style={{ display: 'block' }}>
														<Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
															<Tab eventKey={1} title="All">
																<div className='content-inn'>
																	<div className='notification-row d-flex align-items-center'>
																		<span className='notification-profile'>
																			<img src="/images/notification-profile.png" alt="profile" className='img-fluid' />
																		</span>
																		<div className='notification-cont ms-3 d-flex flex-column'>
																			<p>Notification Text</p>
																			<span>12-12-2022</span>
																		</div>
																	</div>
																	<div className='notification-row d-flex align-items-center'>
																		<span className='notification-profile'>
																			<img src="/images/notification-profile.png" alt="profile" className='img-fluid' />
																		</span>
																		<div className='notification-cont ms-3 d-flex flex-column'>
																			<p>Notification Text</p>
																			<span>12-12-2022</span>
																		</div>
																	</div>
																	<div className='notification-row d-flex align-items-center'>
																		<span className='notification-profile'>
																			<img src="/images/notification-profile.png" alt="profile" className='img-fluid' />
																		</span>
																		<div className='notification-cont ms-3 d-flex flex-column'>
																			<p>Notification Text</p>
																			<span>12-12-2022</span>
																		</div>
																	</div>
																	<div className='notification-row d-flex align-items-center'>
																		<span className='notification-profile'>
																			<img src="/images/notification-profile.png" alt="profile" className='img-fluid' />
																		</span>
																		<div className='notification-cont ms-3 d-flex flex-column'>
																			<p>Notification Text</p>
																			<span>12-12-2022</span>
																		</div>
																	</div>
																	<div className='notification-row d-flex align-items-center'>
																		<span className='notification-profile'>
																			<img src="/images/notification-profile.png" alt="profile" className='img-fluid' />
																		</span>
																		<div className='notification-cont ms-3 d-flex flex-column'>
																			<p>Notification Text</p>
																			<span>12-12-2022</span>
																		</div>
																	</div>
																</div>
															</Tab>
															<Tab eventKey={2} title="Unread">
																<div className='content'>
																	<div className='content-inn'>
																		<div className='notification-row d-flex align-items-center'>
																			<span className='notification-profile'>
																				<img src="/images/notification-profile.png" alt="profile" className='img-fluid' />
																			</span>
																			<div className='notification-cont ms-3 d-flex flex-column'>
																				<p>Notification Text</p>
																				<span>12-12-2022</span>
																			</div>
																		</div>
																	</div>
																</div>
															</Tab>
														</Tabs>
													</div>
												</div>
												{/* Tabs-END */}
											</div>
										</div>}
										{/* Notification-END */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			{/* Header-Section-END */}
		</div>
	);
}

export default Header;
