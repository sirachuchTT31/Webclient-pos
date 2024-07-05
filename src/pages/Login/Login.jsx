import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import authService from "../../service/authentication.service";
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import LoginMessage from "../../components/Alert/LoginMessage";
import localstorageServicefrom from '../../service/localstorage.service'
// import { redirect } from "react-router-dom";
import Regex from "../../common/Regex/Regex";
import Constant from '../../constant/constant'
export default function Login() {
    // const MySwal = withReactContent(Swal)
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [errorMessageElement, seterrorerrorMessageElement] = useState('');
    async function handlerSubmit(data) {
        if (Regex.validEmail.test(data.email)) {
            const payload = {
                email: data.email.trim(),
                password: data.password.trim()
            }
            await authService.signIn(payload).then((res) => {
                if (res.data.status === true) {
                    seterrorerrorMessageElement('')
                    localstorageServicefrom.setAuthorization(res.data.result);
                    window.location.href = '/dashboard'
                }
                else {
                    seterrorerrorMessageElement(res.data.message)
                }
            }).catch((err) => {
                seterrorerrorMessageElement('Internet disconnect')
                console.log(err)
            })
        }
        else {
            seterrorerrorMessageElement('Email is invalid OR Password is invalid')
        }
    }

    async function googleRedirectAuthen(){
        window.location.href = `${Constant.Api.baseUrl}/v1/auth/google`
    }

    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };

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
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40" placeholder="อีเมล์" name="email"  {...register("email", { required: true })} />
                                        <p className="text-red-500 text-xs italic">{errors.email ? "Please enter a valid email" : ""}</p>
                                    </div>
                                    <div className="input-group">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="รหัสผ่าน" name="password" {...register("password", { required: true })} />
                                        <p className="text-red-500 text-xs italic">{errors.password ? "Please enter a valid password" : ""}</p>
                                    </div>

                                    {
                                        errorMessageElement ? (
                                            <div className="mb-5" >
                                                <LoginMessage message={errorMessageElement} />
                                            </div>
                                        ) : ''
                                    }
                                    <div className="w-full flex justify-center sm:px-0 ">
                                        <button type="submit" className="max-w-sm text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center gap-2 mr-2 mb-2">Sign in</button>
                                    </div>
                                    <hr className="mt-5 mb-5" />
                                    <div className="w-full flex justify-center  sm:px-0 ">
                                        <button className="w-96 justify-center  px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150" onClick={googleRedirectAuthen}>
                                            <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                                            <span>Login with Google</span>
                                        </button>
                                        {/* <GoogleOAuthProvider clientId={Constant.Api.googleClientId}></GoogleOAuthProvider> */}
                                        {/* <GoogleLogin
                                            onSuccess={responseMessage} onError={errorMessage}
                                        /> */}
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