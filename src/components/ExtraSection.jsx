
import { FaQuestionCircle, FaFilm } from "react-icons/fa";

const FAQSection = () => {
  const faqs = [
    {
      question:
        "Which movie holds the record for the highest worldwide box office collection?",
      answer:
        "'Avatar' directed by James Cameron is the highest-grossing movie, earning over $2.92 billion worldwide!",
    },
    {
      question: "Who are the top-grossing actors of all time?",
      answer:
        "The top-grossing actors include Samuel L. Jackson, Robert Downey Jr., and Scarlett Johansson, thanks to their roles in blockbuster franchises like Marvel and Star Wars.",
    },
    {
      question: "Which director has the most box office success?",
      answer:
        "Steven Spielberg is the highest-grossing director of all time, with movies like 'Jurassic Park' and 'E.T.' contributing to his incredible success.",
    },
    {
      question: "What is the most successful film franchise in history?",
      answer:
        "The Marvel Cinematic Universe (MCU) is the highest-grossing film franchise, with a combined gross of over $29 billion!",
    },
    {
      question: "Which animated movie has the highest box office earnings?",
      answer:
        "'The Lion King' (2019) is the highest-grossing animated movie, earning over $1.65 billion worldwide.",
    },
    {
      question: "Who is considered the most iconic filmmaker of all time?",
      answer:
        "Alfred Hitchcock is often hailed as the most iconic filmmaker for his groundbreaking contributions to cinema, especially in the thriller genre.",
    },
  ];

  return (
    <section className="bg-base-200 py-12">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-primary flex justify-center items-center gap-2">
            <FaFilm /> Fun FAQs
          </h2>
          <p className="text-base-content mt-2">
            Explore fascinating facts about top movies, actors, and directors
            from the world of cinema!
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-plus bg-base-100 rounded shadow-md"
            >
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium flex items-center gap-2">
                <FaQuestionCircle className="text-primary" />
                {faq.question}
              </div>
              <div className="collapse-content text-base-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
