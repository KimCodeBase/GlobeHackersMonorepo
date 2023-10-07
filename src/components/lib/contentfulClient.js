import { createClient } from 'contentful';


const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

const getBlogPostData = async () => {
  try {
    const getBlogPostEntries = await client.getEntries({
      content_type: 'blogPost',
      include: 10,
    });
    console.log(getBlogPostEntries);
    return getBlogPostEntries;
  } catch(error) {
    console.error(error.message);
    }
};



export { getBlogPostData };