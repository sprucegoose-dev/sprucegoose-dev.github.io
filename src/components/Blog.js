import React, { useEffect, useState } from 'react';
import BlogPost from './BlogPost.js';

import spaceRats from '../posts/space_rats.txt';
import scrabble from '../posts/scrabble.txt';
import weekendWalruses from '../posts/weekend_walruses.txt';
import goblinFair from '../posts/goblin_fair.txt';
import kneidlachSoup from '../posts/kneidlach_soup.txt';

import moment from 'moment';

export default function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const updatedPosts = [];

            const paths = [
                spaceRats,
                scrabble,
                weekendWalruses,
                goblinFair,
                kneidlachSoup,
            ];

            for (const path of paths) {
                const response = await fetch(path);
                const content = (await response.text()).split('\n');
                const type = content[2].toLowerCase();

                updatedPosts.push({
                    title: content[0],
                    createdAt: content[1],
                    text: content.slice(3).join(type === 'poem' ? '<br/>' : '<br/><br/>').replace(/(\*\s+\*\s+\*)/gm, "<div class='section-break'></div>"),
                    type,
                });
            }

            updatedPosts.sort((postA, postB) => moment(postB.createdAt).unix() - moment(postA.createdAt).unix());

            setPosts(updatedPosts);
        }

        fetchPosts();
    }, []);

    const goToPost = (target) => {
        const $target = document.querySelector(`[data-anchor='${target}']`);

        if ($target) {
            $target.scrollIntoView({
                behavior: 'smooth',
            });
        }
    }

    return (
        <div className="blog">
            {posts.length ?
                <ul className="posts-list">
                    <span>Blog posts:</span>
                    {posts.map((post) =>
                        <li className="post-link" onClick={() => { goToPost(post.title)}}>
                            <span className="post-link-text">
                                {post.title}
                            </span>
                        </li>
                    )}
                </ul>
            : null}

            {posts.length ?
                posts.map((post) =>
                    <BlogPost key={post.title} {...post} />
                ) :
                'Nothing here yet.'
            }
        </div>
    );

}
