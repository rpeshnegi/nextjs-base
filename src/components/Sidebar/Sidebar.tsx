// import React from 'react'
import React from "react";
import ActiveLink from "../ActiveLink/ActiveLink";
import Avatar from "../Html/Avatar";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface ISidebarProps { }

export default function Sidebar({ }: ISidebarProps) {
  const { auth } = useSelector((state: RootState) => state);

  return (
    <>
      <div className="damarket h-100 d-flex">
        <div className="sidebar">
          <div className="profileimgarea text-center">
            <span>
              <Avatar src={auth?.user?.image} alt="profileimg" width={220} height={220} />
            </span>
            <h2>{auth?.user?.name}</h2>
          </div>
          {/* <div className="orderdetail">
            <ul className="list-inline">
              <li className="list-inline-item">
                <strong>Sales</strong>
                <span>561</span>
              </li>
              <li className="list-inline-item">
                <strong>Order</strong>
                <span>920</span>
              </li>
              <li className="list-inline-item">
                <strong>Active Orders</strong>
                <span>$5000</span>
              </li>
            </ul>
          </div> */}
          <div className="actions d-flex justify-content-between">
            <button className="active">Buyer</button>
            <button>Seller</button>
          </div>
          <div className="nav">
            <ul>
              <li>
                <ActiveLink href="/buyer/dashboard">
                  <>
                    <img src="/images/house.svg" className="img-fluid" alt='image' />
                    <span>Home</span>
                  </>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/buyer/enquires">
                  <>
                    <img src="/images/notes.svg" className="img-fluid" alt='image' />
                    <span>Enquires/ Quotations</span>
                  </>
                </ActiveLink>
              </li>
              <li>
                <a href="j" >
                  <img src="/images/credit-card.svg" className="img-fluid" alt='image' />
                  <span>Transaction History</span>
                </a>
              </li>
              <li>
                <ActiveLink href="/buyer/chats">
                  <>
                    <img src="/images/bookmark-mail.svg" className="img-fluid" alt='image' />
                    <span>Contcat &amp; Chats</span>
                  </>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/buyer/orders">
                  <>
                    <img src="/images/archive.svg" className="img-fluid" alt='image' />
                    <span>My Orders</span>
                  </>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/buyer/favorites">
                  <>
                    <img src="/images/my-fav.svg" className="img-fluid" alt='image' />
                    <span>My Favorites</span>
                  </>
                </ActiveLink>
              </li>
              <li>
                <a href="j" >
                  <img src="/images/quatation.svg" className="img-fluid" alt='image' />
                  <span>Request For Quotation</span>
                </a>
              </li>
              <li>
                <a href="j" >
                  <img src="/images/comment.svg" className="img-fluid" alt='image' />
                  <span>Help</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
