
function Home() {
    const courses = [
        "Full Stack Development",
        "Fullstack + Data Science",
        "Data Science + AI",
        "Digital Marketing",
        "MERN Stack Development",
    ];
    const reviews = [
    {
      name: "Arjun",
      text: "Great training and excellent mentors!",
    },
    {
      name: "Meera",
      text: "Helped me land my first job!",
    },
    {
      name: "Rahul",
      text: "Best internship experience ever!",
    },
  ];

  const placements = [
    { name: "Anu", company: "TCS" },
    { name: "Vishnu", company: "Infosys" },
    { name: "Niya", company: "Wipro" },
  ];

  const partners = ["BNI", "Startup India", "Tech Hub"];
    return (
        <div className="p-6">

            {/* Hero Section */}
            <div className="text-center py-16">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">
                    Learn. Build. Get Placed.
                </h1>
                <p className="text-gray-600 mb-6">
                    AgileInfoTech - Training & Internship Platform
                </p>

                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg mr-4">
                    Explore Courses
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg">
                    Contact Us
                </button>
            </div>

            {/* Free Courses */}
            <h2 className="text-2xl font-semibold mb-6 text-center">
                Free Courses
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
                    >
                        <h3 className="text-xl font-semibold mb-2">{course}</h3>
                        <p className="text-gray-500 mb-4">
                            Learn {course} with expert guidance.
                        </p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                            Enroll Now
                        </button>
                    </div>
                ))}
            </div>
            {/* CONNECTIONS */}
            <h2 className="text-2xl font-semibold mb-6 text-center">
                Our Connections
            </h2>

            <div className="flex justify-center gap-6 mb-16 flex-wrap">
                {partners.map((partner, index) => (
                    <div
                        key={index}
                        className="bg-blue-100 text-blue-600 px-6 py-3 rounded-lg font-semibold"
                    >
                        {partner}
                    </div>
                ))}
            </div>
            {/* REVIEWS */}
            <h2 className="text-2xl font-semibold mb-6 text-center">
                Student Reviews
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-xl"
                    >
                        <p className="text-gray-600 mb-4">"{review.text}"</p>
                        <h4 className="font-bold text-blue-600">{review.name}</h4>
                    </div>
                ))}
            </div>

            {/* PLACEMENTS */}
            <h2 className="text-2xl font-semibold mb-6 text-center">
                Placements
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
                {placements.map((p, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-xl text-center"
                    >
                        <div className="w-20 h-20 bg-blue-200 rounded-full mx-auto mb-4"></div>
                        <h4 className="font-bold">{p.name}</h4>
                        <p className="text-blue-600">{p.company}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Home
