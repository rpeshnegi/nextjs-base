import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

interface IHomeProps {
  blogs: Blog[]
}

export default function BlogPost({ blogs }: IHomeProps) {
  const router = useRouter()
  return (
    <div className='damarket'>
      {/* Blog-Post-START */}
      <section className='container-fluid blogpost'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='title'>
                <h2>Popular Blog Posts</h2>
                <Link href={"/blogs"}><a>View All</a></Link>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='post-container'>
                {blogs?.map((item: any) => (
                  <div style={{ marginBottom: "50px" }} key={item.id} className='post'>
                    <div className='post-img'>
                      <img height={300} src={item?.image} alt="postimg" />
                    </div>
                    <div className='post-content'>
                      <h4>{item?.title}</h4>
                      <div style={{ height: '10px', textOverflow: 'ellipsis',marginBottom: "150px", marginTop: "20px" }} dangerouslySetInnerHTML={{ __html: item?.description }}></div>
                      <button onClick={() => router.push(`/blogs/${item?.slug}`)} >See more</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section >
      {/* Blog-Post-END */}
    </div >
  )
}
