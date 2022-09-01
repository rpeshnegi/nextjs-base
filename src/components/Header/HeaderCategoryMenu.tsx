import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const HeaderCategoryMenu = () => {
    const router = useRouter()
    const { category } = useSelector((state: RootState & { category: Category[] }) => state);
    const [show, setShow] = useState(router.pathname == '/' ? true : false)

    useEffect(() => {
        const onScroll = (e: any) => {
            const slider: HTMLCollectionOf<Element> = document.getElementsByClassName('main-slider')
            if (router.pathname == '/' && slider.length > 0) {
                (e.path[1].scrollY > slider[0].clientHeight) ? setShow(false) : setShow(true)
            }
        }
        window.addEventListener('scroll', onScroll)

        return (() => window.removeEventListener('scroll', onScroll))
    }, [router.pathname])

    return (
        <div className='col-sm-3 position-relative'>
            <div className='category-menu'>
                <a onClick={() => setShow(!show)} >
                    <img src="/images/hamburger.svg" alt="menu" />
                    <span>All Departments</span>
                </a>
            </div>
            {show &&
                <ul className='list-group'>
                    {category.length > 0 && category.map((category: Category) => (
                        <li key={category.id} className='list-group-item'>
                            <Link href={`/categories/${category.slug}`}>
                                <a >
                                    <img src={category.icon} alt="computeracc" />
                                    <span>{category.name}</span>
                                    {category.child_categories.length > 0 &&
                                        <i>
                                            <img src="/images/arrow.svg" alt={category.name} />
                                        </i>
                                    }
                                </a>
                            </Link>
                            {category.child_categories.length > 0 &&
                                <div className='category-list'>
                                    <div className="category-item">
                                        {/* <h3>Category Item Name</h3> */}
                                        <ul className="">
                                            {category.child_categories.map((childCat: Category) => (
                                                <li key={childCat.id} className="">
                                                    <Link href={`/products/?category_id=${childCat.id}`}>
                                                        <a>
                                                            <span>{childCat.name}</span>
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            }
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default HeaderCategoryMenu
