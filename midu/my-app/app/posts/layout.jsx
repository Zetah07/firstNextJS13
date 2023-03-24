import GoBack from "../../components/GoBack";

export default function BackLayout({ children }) {
  return (
    <div>
      <GoBack />
      {children}
    </div>
  );
}

