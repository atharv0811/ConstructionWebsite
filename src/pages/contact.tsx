import Contact from "../components/contact";

const ContactPage = () => {
    return (
        <>
            <Contact />
            <hr className="border-gray-300 mb-5 mx-5 md:mx-14" />
            <div className="flex justify-center py-5">
                <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg border mx-4">
                    <h2 className="text-center text-lg font-semibold text-[#ffc13b]">Contact Us</h2>
                    <h1 className="text-center text-3xl font-bold mt-2">Send us a Massage</h1>
                    <form className="mt-8 space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc13b]"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc13b]"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="+91-1234567890"
                                className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc13b]"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc13b]"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Company Name"
                            className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc13b]"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc13b]"
                        />
                        <textarea
                            placeholder="Message"
                            className="w-full h-32 px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc13b]"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-[#ffc13b] text-white py-3 px-5 rounded-md font-semibold text-lg hover:bg-[#ffcb5c] transition-colors"
                        >
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
