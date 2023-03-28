import React, { useEffect, useState } from "react";
import { View,Text } from "react-native";
import Title from "../../components/Title";

const Home = () => { // ({text}) destructuring
    const [title, setTitle] = useState('My First Component');

    useEffect(()=> {
        setTimeout(() => {
            setTitle('Updated prop text');
        },2500);
    },[])

    return (
        <View>
            <Title text={title}/>
        </View>
    )
}

export default React.memo(Home);