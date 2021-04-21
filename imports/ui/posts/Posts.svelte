<script>
    import { Posts } from "../../api/posts";

    let updatePost = "";
    export let post;
    function deletePost() {
        Posts.remove(post._id);
    }
    function handleSubmit(event) {
        Posts.update({ _id: post._id }, { content: updatePost });
        updatePost = '';
    }
</script>

<li>
    {post.content}
    <button on:click={deletePost}>Delete</button>
    <form action="" on:submit|preventDefault={handleSubmit}>
        <input type="text" bind:value={updatePost} />
        <button type="submit">update</button>
    </form>
</li>
