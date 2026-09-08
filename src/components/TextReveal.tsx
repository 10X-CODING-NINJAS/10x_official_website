import React from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}

export const TextReveal: React.FC<TextRevealProps> = ({ 
  text, 
  className = "", 
  delay = 0,
  as: Component = "span" 
}) => {
  // Split text by words for individual revealing
  const words = text.split(" ");

  return (
    <Component className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span 
          key={i} 
          className="word-reveal-wrapper mr-[0.25em]"
        >
          <span 
            className="word-reveal-inner"
            style={{ transitionDelay: `${delay + i * 0.05}s` }}
          >
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
};
