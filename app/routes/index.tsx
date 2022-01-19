import { useLoaderData } from 'remix'

export function loader() {
  return {
    secret: process.env.SOME_SECRET || 'nada',
  }
}

export default function Index() {

  const data = useLoaderData()

  return (

    <div
      className="hero min-h-screen bg-base-200"
    >
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">
            Are you a DJ yet? Welcome to Remix!
          </h1> 
          <code>{ data.secret }</code>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p> 
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
