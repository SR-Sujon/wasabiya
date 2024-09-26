import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faComments } from '@fortawesome/free-solid-svg-icons';


const BlogsAcm = () => {
  const blogPosts = [
    {
      imgSrc: './assets/images/blogs/nozawa_zapline.jpg',
      altText: 'From JAPOW to ZEN: Paradise of Year-round Activities in Nozawa Onsen Village',
      title: 'From JAPOW to ZEN: Paradise of Year-round Activities in Nozawa Onsen Village',
      date: 'September 13, 2024',
      comments: 73,
    },
    {
      imgSrc: './assets/images/blogs/warning.jpg',
      altText: 'Notice from the Resort for users entering back-country zone : Self-Responsability Area',
      title: 'Notice from the Resort for users entering back-country zone : Self-Responsability Area',
      date: 'April 26, 2024',
      comments: 114,
    },
    {
        imgSrc: './assets/images/blogs/nozawa_festival.jpg',
        altText: 'Holding of the Winter Lantern Festival',
        title: 'Holding of the Winter Lantern Festival 2024 in Nozowa Onsen: Nagano\'s hyped tourist spot of this year',
        date: 'March 3, 2024',
        comments: 55,
      },
    {
      imgSrc: './assets/images/blogs/child_daycare.jpg',
      altText: 'Child Daycare Center Notice!',
      title: 'Child Daycare Center Notice! Let your child be in our warm care. Reservations are open now!',
      date: 'January 14, 2022',
      comments: 27,
    },
    {
        imgSrc: './assets/images/blogs/snowcat.jpg',
        altText: 'Snowcat Tour Reservation OPENS',
        title: 'Snowcat Tour Reservation OPENS within February this year. Locals are happy towards the authority.',
        date: 'January 14, 2024',
        comments: 25,
      },
  ];

  return (
    <section className="section blog" id="blog">
      <div className="container">
        <h2 className="h2 section-title">Our Blogs</h2>

        <ul className="blog-list has-scrollbar">
          {blogPosts.map((post, index) => (
            <li key={index}>
              <div className="blog-card ">
                <figure className="card-banner-blogs ">
                  {/*eslint-disable-next-line*/}
                  <a href="#">
                    <img
                      src={post.imgSrc}
                      alt={post.altText}
                      loading="lazy"
                      className="w-100 h-100"
                    />
                  </a>
                  {/*eslint-disable-next-line*/}
                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">
                    {/*eslint-disable-next-line*/}
                    <a href="#">{post.title}</a>
                  </h3>

                  <div className="card-meta">
                    <div className="publish-date">
                      <FontAwesomeIcon icon={faClock} />
                      <time dateTime="2022-01-14">{post.date}</time>
                    </div>

                    <div className="comments">
                      <FontAwesomeIcon icon={faComments} />
                      <data value={post.comments}>{post.comments}</data>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogsAcm;
