import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import _ from 'lodash';

import BlogPost from './BlogPost.js';
import spaceRats from '../posts/space_rats.txt';
import scrabble from '../posts/scrabble.txt';
import weekendWalruses from '../posts/weekend_walruses.txt';
import goblinFair from '../posts/goblin_fair.txt';
import kneidlachSoup from '../posts/kneidlach_soup.txt';

export default function Blog() {
    const [posts, setPosts] = useState([]);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = _.throttle(() => {
            setScrollY(window.scrollY);
        }, 500);

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

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }

    }, []);

    const scrollToTarget = (target) => {
        const $target = document.querySelector(`[data-anchor='${target}']`);

        if ($target) {
            $target.scrollIntoView({
                behavior: 'smooth',
            });
        }
    }

    return (
        <div className="blog" data-anchor="blog">
            {posts.length ?
                <>
                    <ul className="posts-list">
                        <div className="posts-list-title">Blog posts:</div>
                        {posts.map((post) =>
                            <li key={`post-link-${post.title}`} className="post-link" onClick={() => { scrollToTarget(post.title)}}>
                                <span className="post-link-text">
                                    {post.title} ({Math.round(post.text.split(/\s+/).length / 200) || 1} min read)
                                </span>
                            </li>
                        )}
                    </ul>
                    {
                        posts.map((post) =>
                            <BlogPost key={post.title} {...post} />
                        )
                    }
                    <div className={`scroll-to-top ${scrollY >= 750 ? 'show' : 'hide'}`} onClick={() => { scrollToTarget('blog') }}>
                        <FontAwesomeIcon icon={faArrowUp} />
                    </div>
                </>
            : 'Loading...'}
        </div>
    );

}
