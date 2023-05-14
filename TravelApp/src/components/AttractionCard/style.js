import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    card: {
        marginTop: 8,
        marginRight: 16,
        padding: 4,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        borderRadius: 15,
    },
    image: {
        width: (width - 96) / 2,
        height: 120,
        borderRadius: 15,
    },
    title: {
        fontSize: 12,
        fontWeight: '500',
        marginTop: 12,
        marginLeft: 6,
    },
    subtitle: {
        fontSize: 10,
        fontWeight: '300',
        color: 'rgba(0,0,0,0.5)',
    },
    icon: {
        width: 10,
        height: 10,
        marginRight: 4,
        marginLeft: 0,
        marginBottom: 8,
        marginTop: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:12,
        marginLeft: 6,
        marginTop: 2,
    }
});

export default styles