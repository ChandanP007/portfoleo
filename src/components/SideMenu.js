import Image from "next/image";

import data from "../data/data.json";

export default function SideMenu() {
  return (
    <>
      <div
        className="w-[16vw] bg-blue-900/10 rounded-xl mx-5 sm:max-lg:hidden">
        <div className="navigation p-10 text-white">
          <ul className="flex flex-col gap-8 text-gray-400 py-10">
            <li className="flex items-center gap-2 cursor-pointer ease-in duration-200 hover:mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 50 50"
                className="invert"
              >
                <path d="M 24.960938 2.1015625 A 1.0001 1.0001 0 0 0 24.386719 2.3105469 L 1.3867188 20.210938 A 1.0001 1.0001 0 1 0 2.6132812 21.789062 L 4 20.708984 L 4 48 A 1.0001 1.0001 0 0 0 5 49 L 18.832031 49 A 1.0001 1.0001 0 0 0 19.158203 49 L 30.832031 49 A 1.0001 1.0001 0 0 0 31.158203 49 L 45 49 A 1.0001 1.0001 0 0 0 46 48 L 46 20.708984 L 47.386719 21.789062 A 1.0001 1.0001 0 1 0 48.613281 20.210938 L 25.613281 2.3105469 A 1.0001 1.0001 0 0 0 24.960938 2.1015625 z M 25 4.3671875 L 44 19.154297 L 44 47 L 32 47 L 32 29 A 1.0001 1.0001 0 0 0 31 28 L 19 28 A 1.0001 1.0001 0 0 0 18 29 L 18 47 L 6 47 L 6 19.154297 L 25 4.3671875 z M 20 30 L 30 30 L 30 47 L 20 47 L 20 30 z"></path>
              </svg>
              Home
            </li>
            <li className="flex items-center gap-2 cursor-pointer ease-in duration-200 hover:mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-code"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              Blogs
            </li>
            <li className="flex items-center gap-2 cursor-pointer ease-in duration-200 hover:mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 50 50"
                className="invert"
              >
                <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
              </svg>
              <a href={data[4].url} className="decoration-none">Github</a>
            </li>
            
          </ul>
        </div>

        <div className="social-links px-10">
          <h3 className="text-white">Socials</h3>
          <ul className="flex flex-col gap-8 text-gray-400 py-10">
            <li className="flex items-center gap-2 cursor-pointer ease-in duration-200 hover:mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0277b5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <a href={data[0].url} className="decoration-none">LinkedIn</a>
            </li>
            
            <li className="flex items-center gap-2 cursor-pointer ease-in duration-200 hover:mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f77f00"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-layers"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
              <a href={data[2].url} className="decoration-none">Stackoverflow</a>
            </li>
            <li className="flex items-center gap-2 cursor-pointer ease-in duration-200 hover:mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 50 50"
              >
                <path
                  fill="#FFB300"
                  d="M31.2,10.6l-6.6,2.3l-1.4-4.3c-0.6-1.8,0.3-3.8,2.2-4.4c1.8-0.6,3.8,0.3,4.4,2.2L31.2,10.6z M29.2,26.6l6.6-2.3l-2.3-7.1l-6.6,2.3L29.2,26.6z M32.6,36.8c0.5,1.4,1.9,2.4,3.3,2.4c0.4,0,0.8-0.1,1.1-0.2c1.8-0.6,2.8-2.6,2.2-4.4L38,31l-6.6,2.3L32.6,36.8z"
                ></path>
                <path
                  fill="#00BFA5"
                  d="M17.2,15.5l-6.6,2.3l-1.4-4.2c-0.6-1.8,0.3-3.8,2.2-4.4c1.8-0.6,3.8,0.3,4.4,2.2L17.2,15.5z M18.6,41.8c0.5,1.4,1.9,2.4,3.3,2.4c0.4,0,0.8-0.1,1.1-0.2c1.8-0.6,2.8-2.6,2.2-4.4l-1.2-3.7l-6.6,2.3L18.6,41.8z M19.4,22.2l-6.6,2.3l2.3,7.1l6.6-2.3L19.4,22.2z"
                ></path>
                <path
                  fill="#00BCD4"
                  d="M33.4,17.3l-2.2-6.6l4.1-1.4c1.8-0.6,3.8,0.3,4.4,2.2c0.6,1.8-0.3,3.8-2.2,4.4L33.4,17.3z M26.8,19.6l-2.2-6.6l-7.4,2.6l2.2,6.6L26.8,19.6z M6.4,19.3c-1.8,0.6-2.8,2.6-2.2,4.4c0.5,1.5,1.9,2.4,3.3,2.4c0.4,0,0.8-0.1,1.1-0.2l4.1-1.4l-2.2-6.6L6.4,19.3z"
                ></path>
                <path
                  fill="#E91E63"
                  d="M15.1,31.5l2.2,6.6l-4.7,1.6c-0.4,0.1-0.8,0.2-1.1,0.2c-1.5,0-2.8-0.9-3.3-2.4c-0.6-1.8,0.3-3.8,2.2-4.4L15.1,31.5z M43.7,25.3c-0.6-1.8-2.6-2.8-4.4-2.2l-3.5,1.2L38,31l3.6-1.2C43.4,29.1,44.4,27.1,43.7,25.3z M21.7,29.2l2.2,6.6l7.4-2.6l-2.2-6.6L21.7,29.2z"
                ></path>
                <path
                  fill="#388E3C"
                  d="M33.4 17.3L31.2 10.6 24.6 12.9 26.8 19.6z"
                ></path>
                <path
                  fill="#00897B"
                  d="M17.2 15.5L10.6 17.8 12.8 24.5 19.4 22.2z"
                ></path>
                <path
                  fill="#BF360C"
                  d="M29.2 26.6L31.4 33.3 38 31 35.8 24.3z"
                ></path>
                <path
                  fill="#4E342E"
                  d="M15.1 31.5L17.3 38.2 23.9 35.9 21.7 29.2z"
                ></path>
              </svg>
              <a href={data[3].url} className="decoration-none">Slack</a>
            </li>
            <li className="flex items-center gap-2 cursor-pointer ease-in duration-200 hover:mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 50 50"
              >
                <linearGradient
                  id="HOaxCdew_So_FZGl4pPQ6a_bG29Ckcdp6YP_gr1"
                  x1="32"
                  x2="32"
                  y1="9"
                  y2="55"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#1a6dff"></stop>
                  <stop offset="1" stop-color="#c822ff"></stop>
                </linearGradient>
                <path
                  fill="url(#HOaxCdew_So_FZGl4pPQ6a_bG29Ckcdp6YP_gr1)"
                  d="M49,55H15c-3.309,0-6-2.691-6-6V15c0-3.309,2.691-6,6-6h34c3.309,0,6,2.691,6,6v34	C55,52.309,52.309,55,49,55z M15,11c-2.206,0-4,1.794-4,4v34c0,2.206,1.794,4,4,4h34c2.206,0,4-1.794,4-4V15c0-2.206-1.794-4-4-4H15	z"
                ></path>
                <linearGradient
                  id="HOaxCdew_So_FZGl4pPQ6b_bG29Ckcdp6YP_gr2"
                  x1="32"
                  x2="32"
                  y1="13"
                  y2="51"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#6dc7ff"></stop>
                  <stop offset="1" stop-color="#e6abff"></stop>
                </linearGradient>
                <path
                  fill="url(#HOaxCdew_So_FZGl4pPQ6b_bG29Ckcdp6YP_gr2)"
                  d="M26.978,22l14.108,20h-3.063L23.914,22H26.978z M51,15v34c0,1.1-0.9,2-2,2H15	c-1.1,0-2-0.9-2-2V15c0-1.1,0.9-2,2-2h34C50.1,13,51,13.9,51,15z M44.914,44L34.789,29.613L43,20h-2.5l-6.841,8.009L28.022,20	h-7.937l9.222,13.103L20,44h2.5l7.937-9.292L36.978,44H44.914z"
                ></path>
              </svg>
              <a href={data[1].url} className="decoration-none">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
