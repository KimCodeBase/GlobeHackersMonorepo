import { createClient } from 'contentful';
import { createClient as managementClient } from 'contentful-management'

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

const mngClient = managementClient({
  accessToken: import.meta.env.VITE_CMA_TOKEN,
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

const createBlogPostEntry = async (formData) => {
  try {
    mngClient.getSpace(import.meta.env.VITE_SPACE_ID)
.then((space) => space.getEnvironment('master'))
.then((environment) => environment.createEntry('blogPost', {
  fields: {
    title: {'en-US': formData.title},
        date: {'en-US': formData.date},
        author: {'en-US': formData.author},
        article: {'en-US': formData.article},
        imageUrl:  {'en-US': formData.imageUrl},
        dining: {'en-US':formData.dining},
        adventures: {'en-US':formData.adventures},
        shopping: {'en-US':formData.shopping}
  }
}))
.then((entry) => entry.publish().then(console.log(entry)))

//    const blogPostSpace = await client.getSpace(import.meta.env.//VITE_SPACE_ID)
//   console.log(blogPostSpace)
 //   const blogPostEnvironment = await blogPostSpace.getEnvironment('master')
 //   const createBlogPost = await blogPostEnvironment.createEntry('blogPost', {fields: {
  //    title: {'en-US': formData.title},
  //    date: {'en-US': formData.date},
  //    author: {'en-US': formData.author},
 //     photo: {'en-US': formData.photo},
 //     article: {'en-US': formData.article},
 //     listTitle: {'en-US': formData.listTitle},
 //     recommendations: {'en-US':formData.recommendations}
 //   } } )
//    return createBlogPost
  } catch(error) {
    console.error(error.message);
    }
}

export { getBlogPostData, createBlogPostEntry };