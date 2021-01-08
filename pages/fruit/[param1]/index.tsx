
import {GetStaticProps, GetStaticPaths} from 'next'

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
    fallback: false  //set this to true to allow all values
  }
}

export default function slug1(props) {
    return (
      <div>
         <h1>Fruit route's index.tsx</h1>
         <h3>Dynamic number generated via GetStaticProps method = {props.val}</h3>
      </div>
    )
  }