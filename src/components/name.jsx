import { useEffect, useState } from "react";

export default function Name(){
    const [isShow, setIsShow] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [visibleCount, setVisibleCount] = useState(0);

    const name = "NGUYỄN PHƯƠNG NGỌC TRÂM";
    const colors = ["#F5004F","#00F7FF","#08CB00","#FF0B55","#FFAAB8","#15F5BA",
                ,"#FF6868","#00FF9C","#FF0087","#FF9D23","#B6F500","#FF0060",
                ,"#00FFAB","#FE6244","#FFA3FD","#00F5FF",
                ,"#00FFD1","#FF6464","#FF008E","#08CB00"];

    useEffect(() => {
        name.split("").forEach((_, index) => {
            setTimeout(() => {
                setVisibleCount(index + 1);
            }, index * 90);
        });
        setTimeout(() => {
        setIsShow(true);
        }, name.length * 120 + 1000);

    }, []);

return <>
      {name.split("").map((char, index) => (
            <span 
                key={index} 
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`inline-block transition-all duration-500 text-5xl font-bold tracking-widest
                  ${index < visibleCount 
                        ? "opacity-100 translate-x-0 " 
                        : "opacity-0 translate-x-10"}
                  `} 
                  style={{
                    color: hoveredIndex === index  || !isShow 
                            ? colors[index]
                            : 'var(--accent-dark)',
                    transition: hoveredIndex === index ? 'color 0.1s ease-out' : 'color 1s ease-in'
                  }}
            >
                {char === " " ? "\u00A0" : char}
            </span>
        ))}
</>
}