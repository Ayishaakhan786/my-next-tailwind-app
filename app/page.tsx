export default function Home() {
  return (
    <>
    {/* Below code is with CSS */}
    <div className = "homeContainer" >
      <div className = "childContainer" >
        Hey,
        <br/>
        My name is <span className = "redColor" > Ayisha</span>
        <br/> I am Next.js Developer
        </div>
        <div className = "childeContainer"></div>
        </div>
        {/* Below code is with Tailwind */}
        <div className = "flex justify-between items-center">
          <div className = "w-fit h-[250px] m-[40px] text-[80px] font-black">
            hey,
            <br/>
            My name is <span className = "blueColor" >Seher</span>
            <br/> I am Next.js Developer
            </div>
            <div className = ""></div>
        </div>
    </>
  );
}
