import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

interface IActiveLinkProps {
    children: ReactNode
    href: string
}
function ActiveLink({ children, href }: IActiveLinkProps) {
    const router = useRouter()

    return (
        <Link href={href}>
            <a href={href} className={router.asPath === href ? 'active' : ''}>
                {children}
            </a>
        </Link>
    )
}

export default ActiveLink
