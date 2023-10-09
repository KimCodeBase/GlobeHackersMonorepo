import "./CreatePost.css";

export default function CreatePost() {
  return (
    <>
      <form className="CreatePostForm" action="/action_page.php">
        <div className="Fieldset">
          <h3 className="headline">Create your Blog post!</h3>
          <label className="l" htmlFor="title">
            Blog Title
          </label>
          <input
            className="i"
            type="text"
            id="title"
            name="title"
            placeholder="Your Blog Title here.."
            required
          />
          <label className="l" htmlFor="date">
            Date:
          </label>
          <input className="i" type="date" id="date" name="date" />
          <label className="l" htmlFor="name">
            Your Name:
          </label>
          <input
            className="i"
            type="text"
            id="author"
            name="author"
            placeholder="Your Name here.."
            required
          />
          <label className="l" htmlFor="Image">
            Blog Image:
          </label>
          <input
            className="i"
            type="url"
            id="url"
            name="url"
            placeholder="Your image url here.."
            required
          />

          <label className="l" htmlFor="text">
            Blog Article:
          </label>
          <textarea
            className="article-i"
            type="article"
            id="article"
            name="article"
            placeholder="Your Blog Article here.."
            required
          />
          <input className="createPostBtn" type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
}
