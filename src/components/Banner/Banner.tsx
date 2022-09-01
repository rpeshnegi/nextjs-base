import React from 'react'
import CmsPage from '../../_types/CmsPage'

interface IBannerProps {
  pageData: CmsPage | null,
}
export default function Banner({ pageData }: IBannerProps) {
  return (
    <>
      <div className='damarket'>
        <section className='container-fluid paysafe-banner position-relative'>
          <div className='row'>
            <div className='col-sm-12 pe-0 ps-0 '>
              <div className='banner-img'>
                <img className='w-100' src="/images/paysafe.png" alt="img" />
              </div>
              <div className='banner-content'>
                <h2>{pageData?.data?.banner?.item?.title?.value}</h2>
                <p>{pageData?.data?.banner?.item?.description?.value}</p>
              </div>
              {/* <div className='banner-info'>
                <p>Corporativo Diamante, Av. Vasco de Quiroga #3900 Torre A, Piso 10, Contadero, 01219 Ciudad de México, CDMX</p>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
