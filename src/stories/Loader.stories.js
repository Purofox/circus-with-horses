import MyLoader from './Loader';
export default {
    title: 'Example/Loader',
    component: MyLoader
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MyLoader },
    template:
        '<my-loader />'
});

export const LoggedIn = Template.bind({});
