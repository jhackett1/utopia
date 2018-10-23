import React from 'react'
import Layout from '../components/layout'

import PostHeader from '../components/post-header'
import PostContent from '../components/post-content'
import CallToAction from '../components/call-to-action'

const PostPage = () => (
  <Layout>
    <PostHeader
        title="Why I Left My Big Fancy Tech Job and Wrote a Book"
        time="3 days ago"
        />
    <PostContent>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus nibh luctus, aliquet dolor vitae, imperdiet leo.</p>
        <img src="http://placehold.it/2000x2000"/>
        <p>Maecenas <a href="#">testing</a> dictum neque sem, vitae rhoncus elit viverra sit amet. Proin malesuada risus eget ullamcorper rhoncus.</p>
        <h2>Section title</h2>
        <p>Nullam in justo eu tortor tristique accumsan et eget justo.</p>
        <ul>
          <li>boo</li>
          <li>boo 2</li>
        </ul>
        <p>Nulla condimentum sapien eget mi mattis, eget tempus velit convallis. Quisque pellentesque massa vitae libero rutrum finibus. Vivamus est arcu, semper eget pellentesque a, venenatis at sapien. Pellentesque blandit efficitur leo, at feugiat urna laoreet nec.</p>
        <p>Pellentesque eu tempor lacus.</p>
    </PostContent>
    <CallToAction/>
  </Layout>
)

export default PostPage
