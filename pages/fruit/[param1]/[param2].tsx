import { useRouter } from 'next/router'

export default function slug2() {
    const router = useRouter();
    
    return (
      <div>
        <h1>index.tsx for the second slug</h1>
        <h2>Slug1 = {router.query.param1}, slug2= {router.query.param2}</h2>
      </div>
    )
  }