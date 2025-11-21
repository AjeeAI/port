import React from "react";

const Journey = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-10">

      {/* === CENTER LINE + CHECKPOINTS === */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-white/40 -translate-x-1/2"></div>

      {/* Checkpoints */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-purple-900"></div>
      <div className="absolute left-1/2 top-140 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-purple-900"></div>
      <div className="absolute left-1/2 top-260 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-purple-900"></div>
      <div className="absolute left-1/2 top-380 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-purple-900"></div>
      <div className="absolute left-1/2 top-502 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-purple-900"></div>

      {/* === CARDS === */}

      {/* CARD 1 - LEFT */}
      <div className="grid grid-cols-2 gap-10 my-10">
        <div className="flex justify-end">
          <div className=" p-6 rounded-lg shadow-md w-94">
            <div>
                <p className="text-white font-bold text-xl">Mobile apps in action</p>
                <p className="text-purple-500 font-bold p-2">Built cross-platform applications using Flutter, integrating complex features like GPS tracking, camera, microphone access, and real-time data syncing with APIs. Delivered apps that are performant, scalable, and visually appealing.</p>
                <div>
                    <p className="text-white font-bold">Key highlights:</p>
                    <ul className="text-purple-500 font-bold space-y-3 list-disc pl-5">
                        <li className="pl-2">End-to-end development from UI to backend integration</li>
                        <li className="pl-2">Experience with FastAPI/MySQL for data management</li>
                        <li className="pl-2">Optimized for resource efficiency and responsiveness</li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      {/* CARD 2 - RIGHT */}
      <div className="grid grid-cols-2 gap-10 my-10">
        <div></div>
        <div className="flex justify-start">
          <div className=" p-6 rounded-lg shadow-md w-94">
             <div>
                <p className="text-white font-bold text-xl">Secure Systems for the Internet of Things</p>
                <p className="text-purple-500 font-bold p-2">Implemented multi-authentication mechanisms using Mutually Orthogonal Latin Squares (MOLS) to enhance IoT security. Focused on lightweight, memory-efficient algorithms suitable for constrained devices.</p>
                <div>
                    <p className="text-white font-bold">Key highlights:</p>
                    <ul className="text-purple-500 font-bold space-y-3 list-disc pl-5">
                        <li className="pl-2">Developed authentication protocols for IoT devices.</li>
                        <li className="pl-2">Conducted security analysis and performance evaluations.</li>
                        <li className="pl-2">Applied combinatorial mathematics to practical engineering problems.</li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* CARD 3 - LEFT */}
      <div className="grid grid-cols-2 gap-10 my-10">
        <div className="flex justify-end">
          <div className=" p-6 rounded-lg shadow-md w-94">
             <div>
                <p className="text-white font-bold text-xl">Web & Backend Integration</p>
                <p className="text-purple-500 font-bold p-2">Designed and deployed dynamic web applications with seamless backend integration. Skilled in managing databases, APIs, and user authentication flows.</p>
                <div>
                    <p className="text-white font-bold">Key highlights:</p>
                    <ul className="text-purple-500 font-bold space-y-3 list-disc pl-5">
                        <li className="pl-2">FastAPI and MySQL for server-side logic and data storage.</li>
                        <li className="pl-2">API creation and consumption for mobile/web interoperability.</li>
                        <li className="pl-2">Focus on clean, maintainable code and rapid prototyping.</li>
                    </ul>
                </div>
            </div>
          </div>

        </div>
        <div></div>
      </div>

      {/* CARD 4 - RIGHT */}
      <div className="grid grid-cols-2 gap-10 my-10">
        <div></div>
        <div className="flex justify-start">
          <div className=" p-6 rounded-lg shadow-md w-94">
             <div>
                <p className="text-white font-bold text-xl">Innovating for Real-World Challenges</p>
                <p className="text-purple-500 font-bold p-2">Developed solutions that bridge gaps between user needs and technology, such as language preservation tools, hybrid forms capturing multimedia data, and interactive dashboards.</p>
                <div>
                    <p className="text-white font-bold">Key highlights:</p>
                    <ul className="text-purple-500 font-bold space-y-3 list-disc pl-5">
                        <li className="pl-2">UX-focused development for diverse user groups.</li>
                        <li className="pl-2">Data handling for multimedia inputs (photos, audio, GPS).</li>
                        <li className="pl-2">Rapid experimentation to validate ideas and improve outcomes.</li>
                    </ul>
                </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Journey;
