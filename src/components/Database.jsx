
import { Toaster, toast } from "sonner";



function Database() {
    let token = localStorage.getItem("token");
    let addDatabase = async () => {
       
            let getData = await fetch(`https://yusof.pythonanywhere.com/api/database_seeding/?token=${token}`, {
                method: "GET",
            })

            let data = await getData.json()
            if (data.operation === "true") {
                toast.success("Database seeded successfully.")
            } else {
                toast.error("Database seeding failed.")
            }
        }
    let removeDatabase = async () => {
            let getData = await fetch(`https://yusof.pythonanywhere.com/api/database_delete/?token=${token}`, {
                method: "GET",
            })

            let data = await getData.json()
            if (data.operation === "true") {
                toast.success("Database deleted successfully.")
            } else {
                toast.error("Database delelation failed.")
            }
        
    };
    return (
        <div style={{ height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Toaster richColors position="top-center" />
            <button onClick={() => { addDatabase() }} style={{
                width: "100px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "none",
                outline: "none",
                cursor: "pointer",
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "5px",
                margin: "10px"
            }}>
                Add
            </button>
            <button onClick={() => { removeDatabase() }} style={{
                width: "100px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "none",
                outline: "none",
                cursor: "pointer",
                backgroundColor: "#000",
                color: "red",
                borderRadius: "5px",
                margin: "10px"
            }}>
                Remove
            </button>
        </div>
    )
}
export default Database
