import { useEffect } from "react";
import { devices } from "./constants/devices";
import Card from "./components/Card/Card";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useGenerationStore } from "./hooks/useFirebase";
import { set, ref } from "firebase/database";
import { db } from "./firebase/firebase";
import { COMMANDS, COMMAND_ALL } from "./constants/commands";

function App() {
  const { setIsOpen, isOpen } = useGenerationStore();

  useEffect(() => {
    alanBtn({
      key: "c2a5d636164326949db7159a875243122e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        const { command }: any = commandData;

        COMMANDS.map((item) => {
          if (command === item.command) {
            set(ref(db, item.node_path), item.state ? !isOpen : isOpen);
          }
        });

        COMMAND_ALL.map((item) => {
          const { node_path } = item;
          const path = node_path.map((path) => path);
          if (command === item.command) {
            path.map((item2) =>
              set(ref(db, item2), item.state ? !isOpen : isOpen)
            );
          }
        });
      },
    });
  }, [isOpen, setIsOpen]);

  return (
    <>
      <main className="min-w-[280px]">
        <section className="lg:max-w-4xl w-11/12 flex flex-col mx-auto justify-center items-center rounded-md p-4 m-4">
          <h1 className="text-2xl pb-4 text-blue-500 font-bold">
            Home Automation
          </h1>
          <h1 className="text-2xl pb-4 text-blue-500 font-bold">First Floor</h1>
          <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 w-full gap-4">
            {devices.map((device) => {
              return <Card key={device.name} device={device} />;
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
