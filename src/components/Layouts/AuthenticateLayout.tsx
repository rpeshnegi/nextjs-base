import React, { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import AuthLogin from "../../modules/Auth/AuthLogin";
import LanguageContext from "../../localization/provider";
import Message from "../Global/Message/Message";
import dynamic from "next/dynamic";
import Footer from "../Footer/Footer";

const Header = dynamic(() => import("../Header/Header"), { ssr: false })
const Sidebar = dynamic(() => import("../Sidebar/Sidebar"), { ssr: false })


interface IAuthenticateLayoutProp {
	children: ReactNode
	sidebar?: boolean
}
const AuthenticateLayout = ({ children, sidebar = true }: IAuthenticateLayoutProp) => {
	const { auth } = useSelector((state: RootState) => state);
	const [lang, setLang] = useState<string>("en");
	const { language } = useSelector((state: RootState) => state);

	useEffect(() => {
		if (language?.lang_code !== lang) {
			setLang(language?.lang_code || 'en');
		}
	}, [language, lang]);

	return (
		<LanguageContext.Provider value={lang}>
			<div className="front-layout greybg">
				<Message />

				{(!auth || !auth.isLogin)
					? <AuthLogin />
					: <>
						<Header />
						{sidebar ?
							<div className='container' style={{ marginTop: '171px', paddingTop: '50px', paddingBottom: '50px' }}>
								<div className='row'>
									<div className='col-sm-3'>
										<Sidebar />
									</div>
									{children}
								</div>
							</div>
							: (children)
						}
						<Footer />
					</>}

			</div>
		</LanguageContext.Provider>
	)
}

export default AuthenticateLayout;
