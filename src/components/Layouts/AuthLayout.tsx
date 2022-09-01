import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useRouter } from 'next/router'

interface IAuthLayoutProp {
	children: ReactNode
}
function AuthLayout({ children }: IAuthLayoutProp) {
	const router = useRouter()
	const { auth } = useSelector((state: RootState) => state);
	if (auth?.isLogin) {
		router.push("/")
	}
	return <div>{children}</div>;
}

export default AuthLayout;
