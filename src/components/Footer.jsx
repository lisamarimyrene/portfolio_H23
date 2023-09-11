import three_gradient_spheres from "../assets/three_gradient_spheres.webp"

export const Footer = () => {
    return (
        <footer className="bg-purple text-gray-light relative h-fit flex justify-center pt-10 pb-24 md:pb-28">
            <div className="z-0 inset-y-0 w-px bg-purple_light absolute left-4 md:left-8"></div>
            <div className="z-0 absolute inset-y-0 left-1/2 w-px bg-purple_light transform -translate-x-1/2"></div>
            <div className="z-0 inset-y-0 w-px bg-purple_light absolute right-4 md:right-8"></div>

            <div className="z-10 w-[80%] flex flex-row justify-between items-center">
                
                <div className="ml-12 md:ml-20 text-lg">
                    <p className="z-10">Get in touch!</p>
                    <p className="z-10 py-5">lisammyrene@outlook.com</p>
                    <div className="mt-2 flex w-16 md:w-20 justify-between">
                        <a href="https://github.com/lisamarimyrene" target="_blank"><svg className="svg2 w-6 md:w-8" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 0C10.746 0 0 10.6146 0 23.7065C0 34.8149 7.744 44.1098 18.184 46.682C18.072 46.3619 18 45.9905 18 45.5302V41.4784C17.026 41.4784 15.394 41.4784 14.984 41.4784C13.342 41.4784 11.882 40.781 11.174 39.4851C10.388 38.0449 10.252 35.8422 8.304 34.4949C7.726 34.0464 8.166 33.5348 8.832 33.6039C10.062 33.9476 11.082 34.7813 12.042 36.018C12.998 37.2567 13.448 37.5372 15.234 37.5372C16.1 37.5372 17.396 37.4878 18.616 37.2982C19.272 35.6525 20.406 34.1373 21.792 33.4221C13.8 32.6102 9.986 28.6828 9.986 23.3509C9.986 21.0553 10.976 18.8348 12.658 16.9639C12.106 15.1069 11.412 11.3198 12.87 9.87769C16.466 9.87769 18.64 12.1812 19.162 12.8035C20.954 12.197 22.922 11.8532 24.99 11.8532C27.062 11.8532 29.038 12.197 30.834 12.8074C31.35 12.1891 33.526 9.87769 37.13 9.87769C38.594 11.3218 37.892 15.1247 37.334 16.9778C39.006 18.8447 39.99 21.0592 39.99 23.3509C39.99 28.6789 36.182 32.6043 28.202 33.4202C30.398 34.5522 32 37.7328 32 40.1291V45.5302C32 45.7357 31.954 45.8838 31.93 46.0597C41.282 42.8218 48 34.0504 48 23.7065C48 10.6146 37.254 0 24 0Z" fill="#FFB1CB" />
                        </svg></a>
                        <a href="https://www.linkedin.com/in/lisamarimyrene/" target="_blank"><svg className="svg2 w-6 md:w-8" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M41.8182 0.993164H4.18182C1.87136 0.993164 0 2.85186 0 5.14668V42.5284C0 44.8232 1.87136 46.6819 4.18182 46.6819H41.8182C44.1286 46.6819 46 44.8232 46 42.5284V5.14668C46 2.85186 44.1286 0.993164 41.8182 0.993164ZM14.5402 38.3748H8.372V18.6622H14.5402V38.3748ZM11.3934 15.8441C9.40491 15.8441 7.797 14.2429 7.797 12.272C7.797 10.3012 9.407 8.7021 11.3934 8.7021C13.3755 8.7021 14.9876 10.3033 14.9876 12.272C14.9876 14.2429 13.3755 15.8441 11.3934 15.8441ZM37.6447 38.3748H31.4807V28.7885C31.4807 26.502 31.4389 23.5613 28.2754 23.5613C25.0658 23.5613 24.5724 26.0514 24.5724 28.6224V38.3748H18.4084V18.6622H24.3256V21.3558H24.4093C25.2331 19.8065 27.2445 18.1721 30.245 18.1721C36.4905 18.1721 37.6447 22.255 37.6447 27.5632V38.3748Z" fill="#FFB1CB" />
                        </svg></a>
                    </div>
                </div>

                <img className="z-10 w-1/6 md:block hidden" src={three_gradient_spheres} alt="Three gradient spheres" />

            </div>

            <div className="z-0 w-screen h-px bg-purple_light absolute bottom-14"></div>
        </footer>
    )
}