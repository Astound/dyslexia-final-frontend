import React, { useEffect, useState } from "react";
import ProfileNavbar from "../components/ProfileNavbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useSpeechSynthesis } from "react-speech-kit";

const TaskPage = () => {
  const navigate = useNavigate();
  const { taskId } = useParams();
  const [taskData, setTaskData] = useState(null);
  const [currentRound, setCurrentRound] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [userSentence, setUserSentence] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [lastRoundTime, setLastRoundTime] = useState(0);
  const [roundTimes, setRoundTimes] = useState([]);
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/tasks/${taskId}`)
      .then((response) => response.json())
      .then((data) => {
        setTaskData(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, [taskId]);

  const handleNextWordClick = () => {
    setCurrentWordIndex((prevIndex) => prevIndex + 1);
  };

  const handleHintClick = () => {
    console.log("hint");
  };

  const { speak } = useSpeechSynthesis();

  const handleVoiceoverClick = () => {
    const sentence = taskData?.sentences[currentRound];
    speak({ text: "hello" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const sentence = taskData?.sentences[currentRound];
    if (userSentence.toLowerCase() === sentence.toLowerCase()) {
      console.log(currentRound, "correct");
      setTimerOn(false);
      setRoundTimes([...roundTimes, time - lastRoundTime]);
      setLastRoundTime(time);
      setUserSentence("");
      setTimerOn(true);
      if (currentRound + 1 === taskData.sentences.length) {
        setTimerOn(false);
        return (
          <>
            <ProfileNavbar ProfileNavbarTitle="Perform Task" />
            <div>Task completed!</div>
            <Footer />
          </>
        );
      }
      toast.success("Correct sentence! You can go to next round", {
        autoClose: 2000,
      });
    } else {
      toast.error("Incorrect sentence. Please try again.", {
        autoClose: false,
      });
    }
  };

  useEffect(() => {
    let interval;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");

  return (
    <>
      <ProfileNavbar ProfileNavbarTitle="Perform Task" />

      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-8 px-8 py-10 taskSection w-full h-3/4">
          <div className="bg-gray-100 rounded-md p-8">
            <div className="font-bold text-lg mb-4">{taskData?.title}</div>
            <div className="flex gap-4 mb-4">
              <div>
                Round {currentRound + 1} of {taskData?.sentences.length}
              </div>
            </div>
            <div className="border border-gray-300 rounded-md py-2 px-4 w-full h-20 mb-4 overflow-auto">
              <p className="text-2xl">
                {taskData?.sentences[currentRound]
                  .split(" ")
                  .slice(0, currentWordIndex + 1)
                  .join(" ")}
              </p>
            </div>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                className="border border-gray-300 rounded-md py-4 px-4 w-full text-2xl"
                value={userSentence}
                onChange={(e) => setUserSentence(e.target.value)}
              />

              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-6 rounded-md font-bold"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
            <button
              className="bg-blue-500 text-white py-4 px-8 rounded-md font-bold h-16 w-64"
              onClick={() => setTimerOn(true)}
            >
              Start Timer
            </button>
            <button
              className="bg-blue-500 text-white py-4 px-8 rounded-md font-bold h-16 w-64"
              onClick={handleNextWordClick}
            >
              Next word
            </button>

            <button
              className="bg-blue-500 text-white py-4 px-8 rounded-md font-bold h-16 w-64"
              onClick={handleHintClick}
            >
              Hint
            </button>
            <button
              className="bg-blue-500 text-white py-4 px-8 rounded-md font-bold h-16 w-64"
              onClick={handleVoiceoverClick}
            >
              Voiceover
            </button>

            <button
              className="bg-blue-500 text-white py-4 px-8 rounded-md font-bold h-16 w-64"
              onClick={() => {
                setCurrentRound(currentRound + 1);
                setCurrentWordIndex(-1);
              }}
            >
              Next round
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-5xl font-bold text-blue-500">
          {minutes < 10 ? `${minutes}` : minutes}:
          {seconds < 10 ? `${seconds}` : seconds}
        </p>
      </div>

      <Footer />
    </>
  );
};

export default TaskPage;
