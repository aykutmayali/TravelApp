import React, { useEffect, useState } from "react";
import { View,Text } from "react-native";
import styles from "./styles";

const Title = ({text}) => {
    const [stateText, setText] = useState('');
    let count = 1;
    useEffect(() =>{
        count++;
        console.log(`Hello UseEffect, count: ${count}`);
        setText(text);
        
    }, [text]); // in the array you used to define the items you want to listen all changes,
            // if it is empty , it is like componentdidmount

    const onTextPress =() =>{
        if (stateText === 'Default State'){
            setText('Updated state')
        }
        else{
            setText('Default State')
        } 
    }

    return (
        <View>
            <Text onPress={onTextPress} style= {styles.title}>{stateText}</Text>
        </View>
    )
}
Title.defaultProps = {
    text: 'Default Text'
}

export default React.memo(Title);