"use client";
import Link from "next/link"
import Image from "next/image"
import { useState,useEffect } from "react"
import {signIn,signOut,useSession,getProvider} from "next-auth/react"

const nav = () => {
    const isUserLoggedIn = true;
    const [providers,setProviders] = useState(null) ;
    const [toggleDropDown,setToggleDropDown] = useState(false);
  return (
    <nav className="flex-between w-full mb-16 pt-3"  >
        <Link href="/" className="flex gap-2 flex_center">
            <Image src="/public/assets/images/logo.svg"
            width={30}
            height={30}
            alt="logo"
            className="object-contain"
            />
        </Link>

        <div className="sm:flex hidden">
            {isUserLoggedIn ?(
                <div className="flex gap-3 md:gap-5">
                    <Link href="/create-prompt" className="black_btn">
                        Create post
                    </Link>
                    <button type="button" onClick={signOut} className="outline_btn" >
                        Sign Out
                    </button>
                    <Link href="/Profile">
                        <Image src="/public/assets/images/logo.svg"
                            width={37}
                            height={37}
                            className="rounded-full"
                            alt="profile"
                        />
                    </Link> 
                </div>
            ):
            <>
                      {
                          providers &&
                          Object.values(providers).map((provider) =>
                          (<button
                              type="button"
                              key={provider.name}
                              onClick={() => signIn(provider.id)}
                              className="black_btn"
                          >Sing In</button>
                          )
                          )
                      }
            </>
            }

        </div>


            {/* mobile navigation*/}

            <div className="sm:hidden flex relative" >
                {isUserLoggedIn ?(
                    <div className="flex">
                      <Image src="/public/assets/images/logo-text.svg"
                          width={37}
                          height={37}
                          className="rounded-full"
                          alt="profile"
                          onClick={()=>setToggleDropDown((prev)=> !prev)}
                      />

                      {
                        toggleDropDown &&(
                            <div className="dropdown">
                                <Link href="/profile"
                                className="dropdown_link"
                                onClick={()=>setToggleDropDown(false)}
                                >
                                    My Profile
                                </Link>
                                  <Link href="/create-prompt"
                                      className="dropdown_link"
                                      onClick={() => setToggleDropDown(false)}
                                  >
                                      Create Prompt
                                  </Link>
                                  <button
                                   type="button"
                                      className="mt-5 w-full black_btn"
                                      onClick={() => {
                                        setToggleDropDown(false);
                                        signOut();
                                    }}
                                  >
                                      Sign Out
                                  </button>
                            </div>
                        )
                      }

                    </div>
                ):(
                    <>
                    {
                        providers && 
                        Object.values(providers).map((provider)=>
                        (<button
                            type="button"
                            key={provider.name}
                            onClick={()=>signIn(provider.id)}
                            className="black_btn"
                            >Sing In</button>
                            )
                        )
                    }
                    </>
                )}
            </div>
    </nav>
  )
}

export default nav