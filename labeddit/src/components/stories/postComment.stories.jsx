import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PostComment from '../PostComment';
import { GlobalStyle } from '../../GlobalStyle';

export default {
  title: 'Components/PostComment',
  component: PostComment,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <GlobalStyle />
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <PostComment {...args} />;


export const PostsPage = Template.bind({});
PostsPage.args = {
  checkClick: false,
  comments: 1,
  content: "Significado do meu apelido: Pessoa indeterminada, ou cujo nome não se quer enunciar ou se ignora. (Usa-se em correlação com fulano, que se nomeia em primeiro lugar, e com beltrano, nomeado em último.)",
  creatorNickname: "ciclana",
  id: "9f0a7fce-7919-4a46-acd4-a4b9ddb49956",
  isPost: true,
  path: "posts",
  upvote: 1,
  user: "ciclana",
  vote: null
};

export const CommentsPage = Template.bind({});
CommentsPage.args = {
  checkClick: false,
  comments: 1,
  content: "Significado do meu apelido: Pessoa indeterminada, ou cujo nome não se quer enunciar ou se ignora. (Usa-se em correlação com fulano, que se nomeia em primeiro lugar, e com beltrano, nomeado em último.)",
  creatorNickname: "ciclana",
  id: "9f0a7fce-7919-4a46-acd4-a4b9ddb49956",
  isPost: false,
  path: "posts",
  upvote: 1,
  user: "ciclana",
  vote: null
};