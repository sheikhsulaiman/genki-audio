import { Volume2Icon } from "lucide-react";
import "./App.css";
import data from "./data.json";
import { useState } from "react";

function App() {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(
    {}
  );
  const [hasPlayed, setHasPlayed] = useState<Record<string, boolean>>({});

  const handlePlay = (lessonIndex: number, itemIndex: number) => {
    const key = `${lessonIndex}-${itemIndex}`;
    if (!hasPlayed[key]) {
      setLoadingStates((prev) => ({
        ...prev,
        [key]: true,
      }));
      setHasPlayed((prev) => ({
        ...prev,
        [key]: true,
      }));
    }
  };

  const handleCanPlayThrough = (lessonIndex: number, itemIndex: number) => {
    setLoadingStates((prev) => ({
      ...prev,
      [`${lessonIndex}-${itemIndex}`]: false,
    }));
  };

  return (
    <div className="container mx-auto max-w-4xl md:my-4">
      <div className="card">
        <div className="card-body bg-green-200 shadow-sm md:rounded-xl md:mb-4 sticky top-0 md:top-4 z-10">
          <h2 className="card-title">Genki - Sound Navigator</h2>
          <p>
            This website is designed to easily navigate to the audio of the
            Genki Book.
          </p>
        </div>
        <div className="join join-vertical bg-base-100">
          {data.map((lesson, lessonIndex) => (
            <div
              key={lessonIndex}
              className="collapse collapse-arrow join-item border-base-300 border"
            >
              <input
                type="radio"
                name="my-accordion-4"
                defaultChecked={lessonIndex === 0}
              />
              <div className="collapse-title font-semibold">{lesson.title}</div>
              <div className="collapse-content grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                {lesson.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="card bg-base-100 shadow-lg border border-primary/50"
                  >
                    <div className="card-body">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center justify-center gap-2">
                          <Volume2Icon className="w-5 h-5 text-primary" />
                          <h3 className="card-title">{item.title}</h3>
                        </div>
                        {loadingStates[`${lessonIndex}-${itemIndex}`] && (
                          <span className="loading loading-spinner loading-sm text-primary"></span>
                        )}
                      </div>
                      <audio
                        controls
                        className="w-full"
                        preload="none"
                        onPlay={() => handlePlay(lessonIndex, itemIndex)}
                        onCanPlayThrough={() =>
                          handleCanPlayThrough(lessonIndex, itemIndex)
                        }
                      >
                        <source src={item.audio} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
