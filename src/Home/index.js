import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import {Title,Subtitle,Body} from '../components/Text';

const Home = () => {
    return <div>
        <ButtonPrimary title="GET STARTED"/>
        <ButtonSecondary title= "DOCUMENTATION"/>
        <Title text="A modern design system for your new" />
        <Subtitle text="Less code. More speed" />
        <Body text="theFront is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications." />
    </div>;
}

export default Home;