import { z } from 'zod';

const AppConfigSchema = z.object({
  name: z
    .string({
      description: `Jan Russel Gorembalem`,
    })
    .min(1)
    .default("Jan Russel Gorembalem"),

  title: z
    .string({
      description: `Jan Russel Gorembalem`,
    })
    .min(1)
    .default("Jan Russel Gorembalem"),

  description: z
    .string({
      description: `Hello! I'm Jan Russel Gorembalem. This portfolio is a window into my passion for fullstack development. Here, I share my favorite projects and experiences, highlighting my dedication to building dynamic, user-focused applications from front-end to back-end. Explore my work to see how I bring ideas to life through innovative coding, continuous learning, and a commitment to excellence in every line of code.`,
    })
    .default("Hello! I'm Jan Russel Gorembalem. This portfolio is a window into my passion for fullstack development. Here, I share my favorite projects and experiences, highlighting my dedication to building dynamic, user-focused applications from front-end to back-end. Explore my work to see how I bring ideas to life through innovative coding, continuous learning, and a commitment to excellence in every line of code."),
});

const appConfig = AppConfigSchema.parse({
    name: process.env.REACT_APP_NAME,
    title: process.env.REACT_APP_TITLE,
    description: process.env.REACT_APP_DESCRIPTION,
});

console.log(process.env.REACT_APP_TITLE)

export default appConfig;