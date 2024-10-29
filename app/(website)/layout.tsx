function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-[#0E1111]  font-body w-screen h-screen relative overflow-hidden ">
        <div>{children}</div>
      </div>
      {/* <p className="w-screen h-screen bg-black opacity-0 absolute"></p> */}
      <p className="blur-[180px] w-dvw h-dvh relative">
        <div className="w-dvw h-dvh top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-t from-[#00D0FF] to-[#FF007B] shadow-2xl "></div>
      </p>
    </>
  );
}

export default layout;
