import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import Header from '../Header';
import { GlobalStyle } from '../../GlobalStyle';

export default {
  title: 'Components/Header',
  component: Header,
  decorators: [
    (Story) => (
      <BrowserRouter>
      <GlobalStyle/>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <Header {...args} />;


export const SignupPage = Template.bind({});
SignupPage.args = {
  isSignupPage: true
};

export const PostsPage = Template.bind({});
PostsPage.args = {
  avatar: "https://picsum.photos/id/64/200/200",
  isPostsPage: true
};

export const CommentsPage = Template.bind({});
CommentsPage.args = {
  isCommentsPage: true
};

export const UserPage = Template.bind({});
UserPage.args = {};