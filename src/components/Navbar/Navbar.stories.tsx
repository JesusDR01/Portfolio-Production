/* eslint-disable */
import Navbar from './Navbar';

export default {
  title: "NavBar",
};

export const Default = () => <Navbar show={true} setTheme={function(){}}/>;

Default.story = {
  name: 'default',
};
