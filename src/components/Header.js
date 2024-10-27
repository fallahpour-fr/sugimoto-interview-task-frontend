import "../styles/Header.css";

export const Header=()=>{
   return <div className="container" >
        <div className="profile">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="12" cy="8" r="4" fill="currentColor" />
                <path d="M12 14c-6.6 0-12 3.6-12 8v2h24v-2c0-4.4-5.4-8-12-8z" fill="currentColor" />
            </svg>
        </div>
        <div className="logo">
            LOGO
        </div>
    </div>
}