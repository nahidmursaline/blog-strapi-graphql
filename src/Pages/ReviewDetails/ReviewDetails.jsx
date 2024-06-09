import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';

const REVIEW = gql`
query GetReview($id: ID!){
  review(id: $id){
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

const ReviewDetails = () => {
    const {id} = useParams();
    // const {loading, error, data} = useFetch(`http://localhost:1337/api/reviews/${id}`)

    const {loading, error, data} = useQuery(REVIEW, {
        variables: {id: id}
    })

    if(loading) return <p>Loading ....</p>
    if(error) return <p>Error ....</p>
    console.log(data)

   
    return (
        <div>
           <h2 className='text-center text-4xl py-10 text-red-400 font-semibold'> This is review details for: {id}</h2>
           
            
               
              <div className="card max-h-80 w-fit bg-base-100 shadow-xl">
  <div className="card-body flex flex-col justify-between min-h-64">
    <h2 className="card-title">{data.review.data.attributes.title}</h2>
    <p>Ratings: {data.review.data.attributes.rating}</p>
    <p className="flex-grow">{data.review.data.attributes.body[0].children[0].text}</p>
    <div className="card-actions justify-end">
   
    </div>
  </div>
</div>

               
               
            
           
        </div>
    );
};

export default ReviewDetails;