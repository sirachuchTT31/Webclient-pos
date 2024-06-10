import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    function handlerSubmit(data) {
        console.log(data)
    }

    return (
        <>
            <div className="contain-layout min-h-screen">
                <div className="flex flex-row  min-h-screen ">
                    <div className="basis-4/12 bg-blue-300 ">
                        <div className="absolute bottom-1/2 w-1/3">
                            <h1 className="text-center  text-white font-black text-8xl">POS</h1>
                            <p className="text-center pt-4 text-white font-extralight text-sm">Solution POS DEMO</p>
                        </div>
                    </div>
                    <div className="basis-8/12">
                        <div className="absolute  left-1/2 w-full" style={{ top: '35%' }}>
                            <div className="w-1/3 border border-solid min-h-60 p-5 right-28 rounded-xl ">
                                <form onSubmit={handleSubmit(handlerSubmit)}>
                                    <div className="input-group">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ชื่อผู้ใช้งาน" name="username"  {...register("username", { required: true })} />
                                        <p className="text-red-500 text-xs italic">{errors.username ? "Please enter a valid username" : ""}</p>
                                    </div>
                                    <div className="input-group">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="รหัสผ่าน" name="password" {...register("password", { required: true })} />
                                        <p className="text-red-500 text-xs italic">{errors.password ? "Please enter a valid password" : ""}</p>
                                    </div>
                                    <div className="text-center mt-8">
                                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign In</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}