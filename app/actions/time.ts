export async function time(setCurrentTime: any) {
    function localtime() {
      const now = new Date();
      const currentDateTime = now.toLocaleTimeString();
      console.log(currentDateTime); 
      setCurrentTime(currentDateTime);// เพิ่มการแสดงผลเวลาผ่าน console หรือแสดงบนหน้าเว็บตามต้องการ
    }
    setInterval(localtime, 1000);
  }