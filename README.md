This is a [Markprompt](https://markprompt.com) starter template based on [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com).

## Getting Started

First, install the dependencies via NPM, Yarn or PNPN:

```bash
npm install
# or
yarn
# or
pnpm dev
```

Then, rename the `.env.sample` file in the project root to `.env`, and set the value of `NEXT_PUBLIC_PROJECT_KEY` to one of your project's API keys.

### Development

When developping locally, for instance on localhost, use the project's development key, found in the project settings. This key can access the Markprompt API from localhost, without domain whitelisting. For that reason, make sure to **keep this key private**.

### Production

When ready to go live, switch the development key to the production key, also found in the project settings. This key can safely be shared publicly, but will only be allowed to access the Markprompt API when hosted on a whitelisted domain.

Next, publish your project. A great option is [Vercel](https://vercel.com/new). Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Then, add your host to the list of whitelisted domains in your project settings.

Once deployed, your prompt is ready to answer questions!

## Learn More

To learn more about Markprompt, take a look at the [Markprompt GitHub repository](https://github.com/motifland/markprompt). Feel free to submit your feedback and make a contribution!
