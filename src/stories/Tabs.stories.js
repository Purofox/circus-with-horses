import MyTabs from './Tabs';

export default {
    title: 'Example/Tabs',
    component: MyTabs,
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MyTabs },
    template:
        '<my-tabs />',
});

export const Loader = Template.bind({});
