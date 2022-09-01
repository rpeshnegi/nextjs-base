import { useCallback, useEffect, useState } from 'react'
// import { getLanguageCode } from "helpers/util";
import { useSelector } from "react-redux";
import Message from "../Global/Message/Message";
import LanguageContext from "../../localization/provider";
import store, { RootState } from '../../store';
import useIsMountedRef from '../../_hooks/useIsMountedRef';
import { apiGetCategory } from '../../modules/Category/category-service';
import { setCategories } from '../../modules/Category/store/category-action';
import dynamic from 'next/dynamic';
import Footer from '../Footer/Footer';
const Header = dynamic(() => import("../Header/Header"), { ssr: false })

type LayoutProps = {
    children: React.ReactNode,
};

export default function Layout({ children }: LayoutProps) {
    const isMountedRef = useIsMountedRef();
    const [lang, setLang] = useState<string>("en");
    const { language, category } = useSelector((state: RootState) => state);

    const getCategory = useCallback(async () => {
        try {
            if (isMountedRef.current && category?.length == 0) {
                const response = await apiGetCategory();
                store.dispatch(setCategories(response.data));
            }
        } catch (err) {
            console.error(err)
        }
    }, [category, isMountedRef]);

    useEffect(() => {
        getCategory()
    }, [getCategory]);

    useEffect(() => {
        if (language?.lang_code !== lang) {
            setLang(language?.lang_code || 'en');
        }
    }, [language, lang]);

    return (
        <LanguageContext.Provider value={lang}>
            <div className="front-layout greybg">
                <Message />
                <Header />
                {children}
                <Footer />
            </div>
        </LanguageContext.Provider>
    )
}
