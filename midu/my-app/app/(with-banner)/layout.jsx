import GoBack from "../../components/GoBack";

export default function BackLayout({ children }) {
  return (
    <div>
      <GoBack />
      <marquee className='text-blue-600'> SourceSquack</marquee>
      {children}
    </div>
  );
}

