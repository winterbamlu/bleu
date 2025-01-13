import Link from "next/link";
import styles from "@/styles/Homepage.module.css"; 

export default function Homepage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to BLEUPRINT</h1>
      <p className={styles.paragraph}>Generating color pallet straight from your uploads!</p>
      <Link href="/palette-generator">
         <button
            style={{
            backgroundColor: "#0492c2",
            marginLeft: "30px",
            color: "white",
            border: "none",
            borderRadius: "10px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#005bb5")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#0070f3")}
        >
            Go to Palette Generator
        </button>
        </Link>
    </div>
  );
}
