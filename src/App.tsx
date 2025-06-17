import "./App.css";
import data from "./data.json"
function App() {
  console.log(data);
  return (
    <div className="container mx-auto max-w-4xl my-4">
      <div className="card bg-green-200 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Genki - Sound Navigator</h2>
          <p>
            This website is designed to easily navigate to the audio of the Genki Book.
          </p>
        </div>
        <div className="join join-vertical bg-base-100">
          {data.map((lesson,index)=>(<div key={index} className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold">
              {lesson.title}
            </div>
            <div className="collapse-content grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              {lesson.items.map((item, itemIndex) => (
                <div key={itemIndex} className="card bg-base-100 shadow-sm border">
                  <div className="card-body">
                    <h3 className="card-title">{item.title}</h3>
                    
                    <audio controls className="w-full">
                      <source src={item.audio} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              ))}
            </div>
          </div>))}
        </div>
      </div>
    </div>
  );
}

export default App;
