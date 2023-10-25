import React from 'react'

function ContactUs() {
    return (
        <div id='contact'>
            <section className="hiddenSection">
                <div class="container mx-auto px-4">
                    <div className='section-title aos-init aos-animate' data-aos="fade-up">
                        <h2>
                            <span className='beforr'></span>
                            Contact Us
                            <span className='afterr'></span>
                        </h2>
                        <p>And in that moment, I swear we were infinite</p>
                    </div>
                    <div class="flex flex-col md:flex-row justify-between">

                        <div class="md:w-1/2 mx-auto md:mx-0 mb-8 md:mb-0">
                            <form action="#" method="POST" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <div class="mb-4">
                                    <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
                                    <input type="text" id="name" name="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Name" />
                                </div>
                                <div class="mb-4">
                                    <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                    <input type="email" id="email" name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Email" />
                                </div>
                                <div class="mb-6">
                                    <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message</label>
                                    <textarea id="message" name="message" rows="4" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Message"></textarea>
                                </div>
                                <div class="flex items-center justify-between">
                                    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send</button>
                                </div>
                            </form>
                        </div>


                        <div className="hidden sm:block md:w-1/2 mx-auto md:mx-0 ml-4">
                            <div className="   ml-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <h3 class="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                                <p class="text-gray-700 mb-4"><strong>Address:</strong> 123 Main St, City, Country</p>
                                <p class="text-gray-700 mb-4"><strong>Email:</strong> info@example.com</p>
                                <p class="text-gray-700 mb-4"><strong>Phone:</strong> +123-456-7890</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

        </div>
    )
}

export default ContactUs
