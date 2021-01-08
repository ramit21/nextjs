
import {GetStaticProps, GetStaticPaths} from 'next'
import { useRouter } from 'next/router'

//executed on the server
export const getStaticProps: GetStaticProps = async (context) => {
  //Call DB, API, read files etc.
  return {
    props: {
      revalidate: 10, //Optional, will refresh the page and try to recreate the jsx (TODO: read more abt it)
      val: Math.random()
    }
  }
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  return {
    paths: [{
      params: {param1: 'abc'}
    },
    {
      params: {param1: 'def'}
    }],
    fallback: true  //set this to false to only allow above values.
  }
}

export default function slug1(props) {
  const router = useRouter();

  if(router.isFallback){ //useful when fallback: true
    return <h1>Loading ...</h1>
  }
  return (
      <div>
         <h1>Fruit route's index.tsx</h1>
         <h3>Dynamic number generated via GetStaticProps method = {props.val}</h3>
      </div>
    )
}