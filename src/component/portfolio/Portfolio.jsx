import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { Ref } from "react";
import { useRef } from "react";

const items = [
    {
        id: 1,
        title: "React Commerce",
        img:"https://images.pexels.com/photos/20141295/pexels-photo-20141295/free-photo-of-orange-cityscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa natus dolorum accusamus nihil quis alias aliquid delectus iure sunt labore doloribus unde laborum ducimus dolor magni eum, consequuntur asperiores?"
    },

    {
        id: 2,
        title: "Next.js Blog",
        img:"https://images.pexels.com/photos/20066531/pexels-photo-20066531/free-photo-of-bonfire.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa natus dolorum accusamus nihil quis alias aliquid delectus iure sunt labore doloribus unde laborum ducimus dolor magni eum, consequuntur asperiores?"
    },

    {
        id: 3,
        title: "Vanilla JS App",
        img:"https://images.pexels.com/photos/19869284/pexels-photo-19869284/free-photo-of-a-woman-sitting-on-the-grass-reading-a-book.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa natus dolorum accusamus nihil quis alias aliquid delectus iure sunt labore doloribus unde laborum ducimus dolor magni eum, consequuntur asperiores?"
    },

    {
        id: 4,
        title: "Music App",
        img:"https://images.pexels.com/photos/12850804/pexels-photo-12850804.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa natus dolorum accusamus nihil quis alias aliquid delectus iure sunt labore doloribus unde laborum ducimus dolor magni eum, consequuntur asperiores?"
    },
];

const Single = ({item}) => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target : ref,
        //offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section>
           <div className="container">
                <div className="wrapper">
                    <div className="imageContainer"  ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                        <motion.div className="textContainer" style={{y}}>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                            <button>See Demo</button>
                        </motion.div>
                </div>
           </div>
        </section>
    )
}



const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target : ref, 
        offset:["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })
  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map(item => (
            <Single item ={item} key={item.id}/>
        ))}
    </div>
   
  )
}

export default Portfolio