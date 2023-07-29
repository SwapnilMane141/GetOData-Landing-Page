import styles from "./FAQ.module.scss";
import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "Do I need OpenAI API key?",
    answer:
      "Yes, you would need OpenAI API key. You can easily get it from https://platform.openai.com/account/api-keys . Make sure you have logged in to your OpenAI account.",
  },
  {
    id: 2,
    question: "From where can we get the API key?",
    answer:
      "You can easily get it from https://platform.openai.com/account/api-keys . Make sure you have logged in to your OpenAI account.",
  },
  {
    id: 3,
    question: "Can I extract data from every website?",
    answer:
      "Yes, You can extract data from every website. Though sometimes the AI responses are not that accurate and it may return incomplete results. In such a case, make sure to report the issues to us and the website details.",
  },
  {
    id: 4,
    question: "Does it support Pagination?",
    answer:
      "Yes, We support Pagination and allow extracting data from multiple pages at once. We are also bringing auto scroll feature to the app soon to let you scrape data from Infinite scrolling based websites.",
  },
  {
    id: 5,
    question: "Do you offer refunds?",
    answer:
      "We offer refund within 7-days of using our product. To request a refund, email contact@swapnilmane.com within 7-days of your first Payment.",
  },
  {
    id: 6,
    question: "Is my OpenAI API key & data secure?",
    answer:
      "Yes. We never store any of your data including OpenAI API key & License Key. The keys and the data will be stored locally on your browser.",
  },
];

const FAQ = (props) => {
  const [clickedQuestionIndex, setClickedQuestionIndex] = useState(null);

  const handleQuestionClick = (index) => {
    if (clickedQuestionIndex === index) {
      setClickedQuestionIndex(null);
    } else {
      setClickedQuestionIndex(index);
    }
  };

  return (
    <section className={styles.sectionFAQ}>
      {/* <h2 className={styles["section-FAQ__title"]}>
        Frequently asked questions
      </h2> */}
      <div className={styles.faqSection}>
        <div className={styles.questionsContainer}>
          <h2 className={styles.faqHeading}>Frequently asked questions</h2>
          {questions.map((question, index) => (
            <div className={styles.question} key={index}>
              <h3 onClick={() => handleQuestionClick(index)}>
                {question.question}
              </h3>
              {clickedQuestionIndex === index && <p>{question.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
