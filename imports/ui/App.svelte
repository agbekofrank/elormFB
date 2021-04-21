<!-- <head> -->
<script>
    import { useTracker } from "meteor/rdb:svelte-meteor-data";
    import { LoginWindow, Logout } from "meteor/levelup:svelte-accounts-ui";
    import "./css/style.css";
    import "./css/account.css";
    import "./css/nav.css";
    import { Posts } from "../api/posts";
    import Post from "./posts/Posts";

    // $: resolutions = useTracker(() => Resolutions.find({}).fetch());
    $: posts = useTracker(() => Posts.find({}).fetch());
    $: userId = useTracker(() => Meteor.userId());
    let newPost = "";
    function handleSubmit() {
        Posts.insert({
            content: newPost,
        });
        // update
        newPost = "";
    }
</script>

<head>
    <meta charset="utf-8" />
    <title>Learn Web Development | Zenva.com</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- <meta content="width=device-width, initial-scale=1" name="viewport" /> -->
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;1,200&display=swap"
        rel="stylesheet" />
    <!-- <link rel="stylesheet" type="text/css" href="css/style.css" /> -->
</head>

<!-- svelte-ignore missing-declaration -->

<body>

    {#if $userId}
        <div id="wrapper">
            <div id="profile-area">
                <div id="side-profile" class="side-box"><a>Username</a></div>
                <div id="side-all" class="side-box"><a>Community</a></div>
                <div id="side-youlike" class="side-box">
                    <h3>Following</h3>
                    <div class="boxcontent">
                        <div><a class="filter-user">fariazz</a></div>
                        <div><a class="filter-user">example</a></div>
                        <div><a class="filter-user">example3</a></div>
                    </div>
                </div>
                <div id="side-likeyou" class="side-box">
                    <h3>Follows You</h3>
                    <div class="boxcontent">
                        <div><a class="filter-user">fariazz</a></div>
                        <div><a class="filter-user">example</a></div>
                        <div><a class="filter-user">example</a></div>
                        <div><a class="filter-user">example3</a></div>
                    </div>
                </div>
            </div>
            <div id="feed-area">
                <form
                    id="post-form"
                    action=""
                    on:submit|preventDefault={handleSubmit}>
                    <textarea
                        name="content"
                        id="content"
                        cols="30"
                        rows="8"
                        bind:value={newPost}
                        required />
                    <button type="submit">say</button>
                </form>
                <!-- <h2>Posts List</h2> -->
                <ul class="post-list">
                    {#each $posts as post}
                        <li class="post">
                            <div>
                                <Post {post} />
                            </div>
                            <div>Author <a>Follow</a></div>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
        <Logout />
    {:else}
        <div id="login-window">
            <LoginWindow />
        </div>
    {/if}
</body>
