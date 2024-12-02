import { useRef } from "react";

interface QuoteModalProps {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ setIsModalOpen }) => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formRef.current) {
            fetch("https://script.google.com/macros/s/AKfycbyBG_x_c92RDhqrZW38ms1DSo1FB192n90r-qwAxU2N2IioVqJ5vnmETJl1bfx2fSjF/exec", {
                method: 'POST',
                body: new FormData(formRef.current),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    alert(data.msg);
                    formRef.current?.reset();
                    setIsModalOpen(false);
                })
                .catch(err => console.log(err))
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div
                className="bg-white w-11/12 max-w-lg p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-out scale-100"
                style={{ animation: "fadeIn 0.3s ease-in-out" }}
            >
                {/* Close Button */}
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <h2 className="text-xl font-bold mb-4">Get a Quote</h2>
                <form className="space-y-4" ref={formRef} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        name="Name"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        name="Email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <textarea
                        placeholder="Your Message"
                        name="Message"
                        className="w-full h-24 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-black py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default QuoteModal