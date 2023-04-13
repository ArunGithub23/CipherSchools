import React from 'react'

const Profile = ({props}) => {
console.log(props)

  return (
    <div>
      <div style={{

        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: 'url( https://www.cipherschools.com/static/media/ProfileCover.e525f2d51356332792cb.png)'
      }}
        class=" shadow-lg flex py-8 px-8 w-full mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img class=" block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="Progile Pic" />
        <div class="pf-user-profile-pencil">
          <svg viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" class="pf-profile-pencil-icon"><path d="M1.61176 17.6959L0.0393491 24.4821C-0.0148937 24.7301 -0.0130342 24.9872 0.0447916 25.2345C0.102617 25.4817 0.214949 25.713 0.37358 25.9112C0.532211 26.1095 0.733134 26.2699 0.961672 26.3806C1.19021 26.4913 1.44059 26.5495 1.69452 26.551C1.81284 26.563 1.93206 26.563 2.05038 26.551L8.87795 24.9786L21.9869 11.9194L14.671 4.62006L1.61176 17.6959Z" fill="var(--common-text-color)"></path><path d="M26.1082 5.38144L21.2255 0.498692C20.9045 0.179298 20.4701 0 20.0172 0C19.5644 0 19.13 0.179298 18.809 0.498692L16.0945 3.21317L23.402 10.5207L26.1165 7.80626C26.2754 7.6466 26.4012 7.45718 26.4868 7.24885C26.5723 7.04052 26.616 6.81735 26.6152 6.59213C26.6144 6.36691 26.5693 6.14405 26.4823 5.93631C26.3953 5.72856 26.2682 5.54001 26.1082 5.38144Z" fill="var(--common-text-color)"></path></svg></div>
        <div class=" flex justify-between   w-full text-center space-y-2 sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg text-black  font-small">
              Hello
            </p>
            <p class="text-2xl text-black  font-bold">
            '{props.firstName} {props.lastName}'

            </p>
            <p class="text-black-500 font-small">
              {props.email}
            </p>
          </div>
          <div class="ml-10">
            <label for="message" class="block mb-2 text-md font-bold text-gray-900">Follower</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

