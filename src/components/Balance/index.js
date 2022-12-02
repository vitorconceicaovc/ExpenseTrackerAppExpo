import React from "react";
import { 
    View,
    Text,
    StyleSheet,
} from "react-native";

export default function Balance({balance, expenses}) {
    return(
        <View style={styles.container} >
            <View style={styles.item} >
                <Text style={styles.itemTitle}>Balance</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol} >$</Text>
                    <Text style={styles.balance} >{balance}</Text>
                </View>
            </View>
            <View style={styles.item} >
                <Text style={styles.itemTitle}>Expense</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol} >$</Text>
                    <Text style={styles.expenses} >{expenses}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    },
    itemTitle:{
        fontSize: 20,
        color: '#dadada'
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencySymbol:{
        color: '#dadada',
        marginRight: 6,
        marginRight: 6,
    },
    balance:{
        fontSize:32,
        color: '#2ecc71',
    },
    expenses:{
        fontSize:32,
        color: 'red',
    },
})