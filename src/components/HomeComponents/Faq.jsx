

const Faq = () => {
    return (
        <section className=" text-base-content">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold  text-center text-base-content">Frequently Asked Questions</h2>
                <p className="mt-4text-justify p-4  text-xl mb-8 text-base-content">
                    Welcome to our Group Study FAQ section! Here, we address common questions about group study sessions, providing insights and tips to help you make the most of collaborative learning experiences. Whether you're new to group study or seeking ways to optimize your study sessions, we've got you covered. Explore our FAQ to find answers to your queries and enhance your academic journey through effective teamwork.
                </p>
                <div className="space-y-4 text-xl">
                    <details className="w-full border rounded-lg text-base-content">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            How does group study enhance understanding and retention of course material?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-base-content">
                            Group study allows students to discuss complex concepts, share insights, and clarify doubts, leading to a deeper understanding of the material.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg text-base-content">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            What are some effective strategies for organizing and managing group study sessions?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-base-content">
                            Effective strategies include setting clear goals, establishing a structured agenda, assigning roles, and utilizing collaborative tools like online platforms or shared documents.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg text-base-content">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            How does group study foster a sense of accountability and motivation among participants?                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-base-content">
                            Group study creates a supportive environment where students hold each other accountable for participation and progress, fostering motivation to stay engaged and contribute.                        </p>
                    </details>
                    <details className="w-full border rounded-lg text-base-content">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            What are the potential challenges or drawbacks of group study, and how can they be mitigated?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-base-content">
                            Challenges may include scheduling conflicts, differing learning paces, or distractions. These can be mitigated through effective communication, setting ground rules, and addressing issues promptly.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg text-base-content">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            In what ways does group study contribute to the development of critical thinking and communication skills?                       </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-base-content">
                            Group study encourages active participation, debate, and peer feedback, all of which contribute to the development of critical thinking, problem-solving, and communication skills.                         </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Faq;