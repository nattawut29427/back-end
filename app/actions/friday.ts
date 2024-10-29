export async function friday(prevState: any, formData: FormData) {
    const rawFormData = {
      date: formData.get("date"),
    };

  
    if (rawFormData.date) {
      const date = new Date(rawFormData.date.toString());
      const isFriday = date.getDay() === 5;
  
      if (isFriday) {
        return { message: "It's Friday!" };
      } else {
        return { message: "It's not Friday." };
      }
    } else {
      return { message: "Date is missing." };
    }
  }
  