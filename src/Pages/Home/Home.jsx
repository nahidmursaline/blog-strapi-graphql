import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
// import useFetch from '../../Hooks/useFetch';

const REVIEWS = gql`
query GetReviews{
  reviews{
  data{
    id,
    attributes{
      title,
      rating,
      body
    }
  }
  }
}
`

const Home = () => {
  const {loading, error, data} = useQuery(REVIEWS)

    // const {loading, error, data} = useFetch('http://localhost:1337/api/reviews')

    if(loading) return <p>Loading ....</p>
    if(error) return <p>Error ....</p>
    console.log(data)
    return (
        <div>
            <h1 className='text-center text-4xl py-10 text-red-400 font-semibold'>All The Reviews Are Here</h1>
            <div className='grid grid-cols-2 gap-5 '>
            {
                data.reviews.data.map(review => (
                <div key={review.id}>
              <div className="card max-h-80 w-fit bg-base-100 shadow-xl">
  <div className="card-body flex flex-col justify-between min-h-64">
    <h2 className="card-title">{review.attributes.title}</h2>
    <p>Ratings: {review.attributes.rating}</p>
    <p className="flex-grow">{review.attributes.body[0].children[0].text.substring(0,250)} . . . .</p>
    <div className="card-actions justify-end">
    <Link to={`/details/${review.id}`}><button className="btn btn-error">Details</button></Link>
    </div>
  </div>
</div>

                </div>
                ))
            }
            </div>
        </div>
    );
};

export default Home;