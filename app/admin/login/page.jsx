"use server"
import { loginAction } from '@/server/BL/actions/login.action';


export default async function Login() {

  return (<>
    <form action={loginAction} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Product ID</label>
        <input
          type="text"
          name='email'
          className={`mt-1 block w-full rounded-md shadow-sm`}
          placeholder="enter your mail"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name='password'
          className={`mt-1 block w-full rounded-md shadow-sm`}
        />
      </div>
      <div>
        <button
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  </>
  )
}
