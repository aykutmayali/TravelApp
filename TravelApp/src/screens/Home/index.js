import React from "react";
import { SafeAreaView, View } from "react-native";
import Title from '../../components/Title';
import styles from './styles';
import Categories from "../../components/Categories";

const Home= () => {
    return (
        <SafeAreaView>
            <View style = {styles.container}>
                <Title text="Where do 🤨" style ={{fontWeight: 'normal'}}/>
                <Title text="you want to go"/>
                <Title text="Explore Attractions" style={styles.subtitle} />
                <Categories selectedCategory= 'All' categories={['All', 'Popular', 'Historical', 'Random', 'Trending', 'Exckusive']}/>
            </View>
        </SafeAreaView>
    );
}

export default React.memo(Home);