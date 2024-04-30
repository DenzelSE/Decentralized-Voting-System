"use client"
import React from "react";
import Layout from "../components/layout";
import Link from "next/link";
import { usePathname } from "next/navigation";
import voterContract from "../contract/voterContract";
import web3Instance from "../contract/web3Instance";

const Register = () => {
  const path = usePathname();
  const isLinkActive = (href: any) => {
    return path == href;
  }

  const register = async () => {
    const accounts = await web3Instance.eth.requestAccounts();
    voterContract().methods.registerVoter().send(
      {
        from: accounts[0],
        gasPrice: "1000000000",
        gas: "3000000"
      }
    )
  }
  
  return(
      <Layout>
        {/* TODO: list of candidate */}
        
        <button className="btn btn-primary" onClick={async () => { await register()}}>Register</button>
        {/* <form className="max-w-sm py-10 justify-center mx-auto">
          <div className="mb-5">
            <label htmlFor="Uid" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unique ID </label>
            <input type="Uid" id="Uid" className="shadow-sm bg-base-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-base-100 dark:border-gray-600 dark:placeholder-base-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Ax0293Cnsjdf"  />
          </div>
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input type="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-base-100 dark:border-gray-600 dark:placeholder-base-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="John Doe"  />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-base-100 dark:border-gray-600 dark:placeholder-base-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
          </div>
          <div className="mb-5">
            <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
            <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-base-100 dark:border-gray-600 dark:placeholder-base-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-base-100 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"  />
            </div>
            <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
          </div>
          <Link href="/Login" className={isLinkActive("/Login") ? "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800":""}>Register</Link>
        </form> */}
      </Layout>
    )
}
export default Register;