import { z } from 'zod';

const AppConfigSchema = z.object({
  name: z
    .string({
      description: `This is the name of your SaaS. Ex. "CiscoAssurance"`,
      required_error: `Please provide the variable SITE_NAME`,
    })
    .min(1, "SITE_NAME cannot be empty"),
  title: z
    .string({
      description: `This is the default title tag of your SaaS. Ex. "CiscoAssurance"`,
      required_error: `Please provide the variable SITE_TITLE`,
    })
    .min(1, "SITE_TITLE cannot be empty"),
  description: z.string({
    description: `This is the default description of your SaaS, e.g. "Tailored Security Solutions Designed to Evolve with Your Business."`,
    required_error: `Please provide the variable SITE_DESCRIPTION`,
  })
});

const appConfig = AppConfigSchema.parse({
    name: process.env.VITE_SITE_NAME,
    title: process.env.VITE_SITE_TITLE,
    description: process.env.VITE_SITE_DESCRIPTION,
});

export default appConfig;