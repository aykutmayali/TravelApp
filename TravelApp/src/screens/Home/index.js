import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import Title from '../../components/Title';
import styles from './styles';
import Categories from "../../components/Categories";
import AttractionCard from "../../components/AttractionCard";

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Title text="Where do 🤨" style={{ fontWeight: 'normal' }} />
                <Title text="you want to go" />

                <Title text="Explore Attractions" style={styles.subtitle} />

                <Categories
                    selectedCategory={selectedCategory}
                    onCategoryPress={setSelectedCategory}
                    categories={['All', 'Popular', 'Historical', 'Random', 'Trending', 'Exclusive']} />

                <View style= {styles.row}>
                    <AttractionCard
                        imageSrc={'https://upload.wikimedia.org/wikipedia/commons/e/e5/Cinderella_Castle_at_Magic_Kingdom.jpg'}
                        title={'Cinderella Castle'} 
                        subtitle={'Florida'}
                        />
                    <AttractionCard
                        imageSrc={'https://upload.wikimedia.org/wikipedia/commons/e/e5/Cinderella_Castle_at_Magic_Kingdom.jpg'}
                        title={'Cinderella Castle'} 
                        subtitle={'Florida'}
                        />
                </View>

            </View>
        </SafeAreaView>
    );
}

export default React.memo(Home);