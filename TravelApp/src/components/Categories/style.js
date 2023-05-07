import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    item: {
        fontSize: 12,
        color: "rgba(0,0,0,0.5)",
        marginHorizontal:15,
        paddingTop: 15,
        paddingVertical:2,
    }, 
    selectedItem :{
        // textDecorationLine: 'underline',
        color: '#000000'
    },
    itemContainer: {
        paddingVertical: 14,
        marginRight: 17,
    },
    selectedItemContainer: {
        borderBottomColor: '#4681A3',
        borderBottomWidth: 1,
    }
});

export default styles