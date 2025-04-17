
import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface Skill {
  name: string;
  size: number;
  color: string;
}

const skills: Skill[] = [
  { name: "Python", size: 1.2, color: "#50A0F0" },
  { name: "AI", size: 1.5, color: "#50A0F0" },
  { name: "Machine Learning", size: 1.3, color: "#50A0F0" },
  { name: "Deep Learning", size: 1.2, color: "#A0D0FF" },
  { name: "NLP", size: 1.4, color: "#50A0F0" },
  { name: "TensorFlow", size: 1.1, color: "#A0D0FF" },
  { name: "PyTorch", size: 1, color: "#50A0F0" },
  { name: "Computer Vision", size: 1.1, color: "#A0D0FF" },
  { name: "Azure", size: 1, color: "#50A0F0" },
  { name: "Vertex AI", size: 0.9, color: "#A0D0FF" },
  { name: "Transformers", size: 1.2, color: "#50A0F0" },
  { name: "BERT", size: 1, color: "#A0D0FF" },
  { name: "GPT", size: 1.1, color: "#50A0F0" },
  { name: "LLM", size: 1.3, color: "#A0D0FF" },
  { name: "Data Science", size: 1.2, color: "#50A0F0" },
  { name: "Scikit-learn", size: 0.9, color: "#A0D0FF" },
  { name: "Neural Networks", size: 1, color: "#50A0F0" },
  { name: "Data Analysis", size: 1.1, color: "#A0D0FF" },
  { name: "Flask", size: 0.9, color: "#50A0F0" },
  { name: "Jupyter", size: 0.9, color: "#A0D0FF" },
];

const SkillsCloud = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const radius = 180;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!containerRef.current || !isInView) return;

    const container = containerRef.current;
    const items = itemsRef.current.filter(Boolean) as HTMLDivElement[];
    const containerRect = container.getBoundingClientRect();
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;

    let mouseX = centerX;
    let mouseY = centerY;
    let animationFrameId: number;

    const positionItems = () => {
      const totalItems = items.length;
      
      items.forEach((item, index) => {
        if (!item) return;

        // Calculate initial positions on a sphere
        const phi = Math.acos(-1 + (2 * index) / totalItems);
        const theta = Math.sqrt(totalItems * Math.PI) * phi;
        
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);
        
        // Calculate angle based on mouse position
        const mouseXFactor = (mouseX / containerRect.width) * 2 - 1;
        const mouseYFactor = (mouseY / containerRect.height) * 2 - 1;
        const rotationX = mouseYFactor * 30; // degree of rotation
        const rotationY = mouseXFactor * 30;
        
        // Apply 3D rotation matrix
        const angleX = rotationX * Math.PI / 180;
        const angleY = rotationY * Math.PI / 180;
        
        // Rotate around Y-axis
        let newX = x;
        let newZ = z * Math.cos(angleY) - x * Math.sin(angleY);
        
        // Rotate around X-axis
        let newY = y * Math.cos(angleX) - newZ * Math.sin(angleX);
        newZ = y * Math.sin(angleX) + newZ * Math.cos(angleX);
        
        // Convert 3D coordinates to 2D with perspective
        const perspective = 800;
        const scale = perspective / (perspective + newZ);
        
        // Apply transformations
        const translateX = newX * scale + centerX;
        const translateY = newY * scale + centerY;
        
        item.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale * (item.dataset.size as unknown as number)})`;
        item.style.zIndex = `${Math.floor(scale * 100)}`;
        item.style.opacity = `${Math.max(0.4, scale)}`;
      });
      
      animationFrameId = requestAnimationFrame(positionItems);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    container.addEventListener('mousemove', handleMouseMove);
    positionItems();

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView]);

  return (
    <section 
      id="skills" 
      className="py-10 bg-secondary/10" 
      ref={ref}
    >
      <div className="container mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-2">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The technical skills that enable me to build innovative AI solutions and intelligent systems.
          </p>
        </motion.div>

        <motion.div 
          className="relative h-[400px] skill-cloud mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          ref={containerRef}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={el => itemsRef.current[index] = el}
              data-size={skill.size}
              className="skill-item absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
              style={{ color: skill.color }}
            >
              <div 
                className="font-medium px-4 py-2 rounded-full bg-card backdrop-blur-sm"
                style={{ fontSize: `${skill.size}rem` }}
              >
                {skill.name}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsCloud;
