import React from 'react'

function Contact() {
  return <>
    <section id="Contact" className='bg-white w-screen h-1/2'>
      <footer class="bg-blue-950 dark:bg-gray-900">
          <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
              <div class="md:flex md:justify-between">
                <div class="mb-6 md:mb-0">
                    <div class="flex items-center">
                        <svg width="48" height="48" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M2.212 8.288c-1.17-.832-1.997-1.955-2.212-3.347.493-.03 1.047-.033 1.52-.172 1.755-.518 2.963-2.798 5.173-2.769 2.076.067 2.742 1.894 3.948 2.353.092.036.215.065.358.089v-.71c-.598-.346-1-.992-1-1.732 0-1.104.896-2 2-2s2 .896 2 2c0 .74-.402 1.386-1 1.732v.71c.144-.023.268-.053.36-.089 1.206-.459 1.872-2.286 3.948-2.353 2.21-.029 3.418 2.251 5.173 2.769.473.139 1.027.142 1.52.172-.215 1.392-1.041 2.514-2.21 3.346-1.148-.504-2.126-1.223-2.964-2.086.234 1.056.767 2.073 1.481 2.913-.697.303-1.454.53-2.237.68-1.015-.791-1.806-1.723-2.51-2.943-.004 1.12.242 2.137.681 3.15-1.107.041-2.217-.068-3.242-.335v6.923c.843.262 1.911.611 2.542 1.201 2.008 1.877.83 4.698-1.539 4.787v-1c1.266-.627 1.504-1.961-1.003-2.878v4.301c0 .553-.448 1-1 1s-1-.447-1-1v-4.896c-1.955-.51-5.364-1.17-5.339-4.003.018-1.696 1.55-3.101 3.331-3.101h.01c.553 0 1 .448 1 1 0 .549-.442.994-.989 1-.836.009-1.392.651-1.349 1.192.098 1.124 2.22 1.556 3.336 1.844v-6.369c-1.023.266-2.13.375-3.234.334.439-1.013.685-2.03.68-3.15-.704 1.22-1.495 2.153-2.511 2.944-.783-.15-1.54-.377-2.237-.679.714-.841 1.248-1.859 1.482-2.915-.838.864-1.818 1.584-2.967 2.087zm5.748 10.077c.863.25 1.655.463 2.35.624-1.691.869-1.495 2.002-.311 2.588v1c-2.138-.08-3.305-2.384-2.039-4.212zm6.073-2.606c.889-.257 2.232-.644 2.305-1.567.043-.543-.516-1.183-1.35-1.192-.547-.006-.989-.451-.989-1 0-.552.448-1 1-1h.011c1.772 0 3.313 1.399 3.33 3.101.017 1.273-.851 2.367-1.986 2.934-.6-.505-1.397-.909-2.321-1.276z"/></svg>
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><strong>HEAL</strong>haven</span>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-3">
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Explore US</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <div class="hover:underline">Find a Doctor</div>
                            </li>
                            <li class="mb-4">
                                <div  class="hover:underline">Medical Services</div>
                            </li>
                            <li class="mb-4">
                                <div  class="hover:underline">Hospitals</div>
                            </li>
                            <li>
                                <div  class="hover:underline">Events</div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Contact us</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <div class="hover:underline ">Emergency</div>
                                <div className='text-green-300'>108</div>
                            </li>
                            <li>
                                <div class="hover:underline">HEALhaven Helpline</div>
                                <div className='text-green-300'>+91-1234567890</div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Legal</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <div  class="hover:underline">Privacy Policy</div>
                            </li>
                            <li>
                                <div class="hover:underline">Terms &amp; Conditions</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div class="sm:flex sm:items-center sm:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2024 <span class="hover:underline">HEALhaven™</span>. All Rights Reserved.
                </span>
                <div class="flex mt-4 sm:justify-center sm:mt-0">
                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                              <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                          </svg>
                        <span class="sr-only">Facebook page</span>
                    </a>
                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                              <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                          </svg>
                        <span class="sr-only">Discord community</span>
                    </a>
                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                          <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                      </svg>
                        <span class="sr-only">Twitter page</span>
                    </a>
                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                        </svg>
                        <span class="sr-only">GitHub account</span>
                    </a>
                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                      </svg>
                        <span class="sr-only">Dribbble account</span>
                    </a>
                </div>
            </div>
          </div>
      </footer>
    </section>  
  </>
}

export default Contact
