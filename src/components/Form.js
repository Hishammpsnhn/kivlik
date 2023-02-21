import React from 'react'

function Form() {
  return (
    <div className='mx-3 md:mx-28'>
      <div className='text-primary mt-10'>
        <p className='font-sans text-[25px] md:text-[30px] font-bold '>Personal Details</p>
        <p className='text-[15px] md:text-[20px]'>Pleade complete the below form and attach cv.</p>
        <form class="w-full  mt-10">
          <div class="w-full md:w-[33%]  mb-6 md:mb-0">
            <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Email Address
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" />
          </div>
          <div class="flex flex-wrap ">
            <div class="w-full md:w-[33%]  mb-6 md:mb-0 ">
              <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                First Name
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded-2xl py-3 px-4  leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
            </div>
            <div class="w-full md:w-[33%] mb-6 md:mb-0 md:pl-3">
              <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Last Name
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
            </div>            <div class="w-full md:w-[33%] md:pl-3 mb-6 md:mb-0">
              <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Telephone
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded-2xl py-3 px-4  leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="number" />
              <p class="text-red-500 text-xs italic">Please include your country area code.</p>
            </div>
          </div>
          <div class="w-full md:w-[33%]  mb-6 md:mb-0">
            <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Upload Cv
            </label>
            <div class="flex  items-center justify-center ">
              <label class="w-full flex flex-row justify-between items-center px-4 py-1 text-primary rounded-2xl bg-[#bfbfbf] shadow-lg tracking-wide uppercase border border-primary cursor-pointer hover:text-white">
                <span class=" text-base leading-normal capitalize">Upload Cv</span>
                <svg class="w-[32px] h-[32px]" xmlns="http://www.w3.org/2000/svg" width="37.5" height="37.491" viewBox="595 1430 37.5 37.491"><path d="m607.581 1440.697 4.294-4.313v17.982a1.875 1.875 0 0 0 3.75 0v-17.982l4.294 4.313a1.875 1.875 0 0 0 2.662 0 1.875 1.875 0 0 0 0-2.663l-7.5-7.5a1.875 1.875 0 0 0-.619-.393 1.875 1.875 0 0 0-1.425 0c-.23.089-.44.223-.618.393l-7.5 7.5a1.883 1.883 0 0 0 2.662 2.663Zm23.044 8.044c-1.036 0-1.875.84-1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-26.25a1.875 1.875 0 0 1-1.875-1.875v-11.25a1.875 1.875 0 1 0-3.75 0v11.25a5.625 5.625 0 0 0 5.625 5.625h26.25a5.625 5.625 0 0 0 5.625-5.625v-11.25c0-1.036-.84-1.875-1.875-1.875Z" fill-rule="evenodd" data-name="upload" /></svg>
                <input type='file' class="hidden" />
              </label>
            </div>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">Select resume file (TXT, PDF or Word DOC)</p>
          </div>
        </form>
      </div>
      <button type='submit' className="bg-blue hover:bg-blue text-white font-bold mt-10 py-2 px-7 rounded-[12px]">
        Submit
      </button>
    </div>
  )
}

export default Form
// 