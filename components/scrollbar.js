import { useEffect, useState } from "react";

export async function getServerSideProps() {
  console.log("rendering now");
  return { props: {} };
}

const IndexPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ height: 10}}>
      <div style={{ position: "fixed", top: 0 }}>
        {
            scrollY > 100
          ? console.log("Scrolled more than 100px") 
          : console.log("Still somewhere near the top!")
          }
          <p>siem</p>
      </div>
    </div>
  );
};

export default IndexPage;
