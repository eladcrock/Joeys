import { Carousel } from "@mantine/carousel";
import { Paper, Title, useMantineTheme, Container } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./CardsCarousel.module.css";
import "@mantine/carousel/styles.css"; 
import "@mantine/core/styles.css";
import cake from "../../images/Cake.jpg";
import choco from "../../images/Choco.jpg";
import conchas from "../../images/Conchas.jpg";
import treatsBright from "../../images/TreatsBright.jpg"; 
import Psalm from "../../images/PsalmCake.jpg";
import Party from "../../images/PartyPrep.jpg";
import shelf from "../../images/shelf.jpg";



interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        
       
      </div>
    
      <Title order={3} className={classes.title}>
          {title}
        </Title>
    </Paper>
  );
}

const data = [

  {
    image: cake,
    title: "Custom Cakes",
  },
  {
    image: choco,
    title: "Seasonal Items",

  },

  {
    image: conchas,
    title: "Conchas",
  },

  {
    image: treatsBright,
    title: "Variety of Treats",
  },

  {
    image: Party,
    title: "Party Prep",
  },


  {
    image: Psalm,
    title: "All Occasions",
  },
  
  {
    image: shelf,
    title: "Daily Specials",
  },
 
];

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card category={""} {...item} />
    </Carousel.Slide>
  ));

  return (<Container>
      <Title order={1} mb="xl" mt="md" className={classes.head}>
      Display Case 👀
      </Title>



    <Carousel
      withIndicators
      loop // ✅ Fix infinite looping issue
      slideSize={mobile ? "100%" : "33.3333%"} // ✅ Make slides responsive
      slideGap="md"
      align="start"
      slidesToScroll={mobile ? 1 : 1} // ✅ Ensure one slide scrolls at a time
    >
      {slides}
    </Carousel>
  </Container>
  );
}
