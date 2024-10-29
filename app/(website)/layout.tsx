function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-[#0E1111] font-body w-screen h-screen relative overflow-hidden">
        {/* Circle Background ที่อยู่ตรงกลาง */}
        <div className="absolute inset-0 flex justify-center items-center z-0">
        <p className="w-screen h-screen bg-black opacity-80 absolute "></p>
          <div className="blur-[180px] w-[300px] sm:w-[500px] lg:w-[630px] h-[300px] sm:h-[500px] lg:h-[630px] rounded-full bg-gradient-to-t from-[#00D0FF] to-[#FF007B] shadow-2xl"></div>
        </div>

        {/* Children Content ไม่อยู่ตรงกลาง */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;
